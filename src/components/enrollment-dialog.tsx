"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { createEnrollment } from "@/lib/api"

interface EnrollmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  courseName: string
  program: string
  plan: string
  amount: number
}

export function EnrollmentDialog({
  open,
  onOpenChange,
  courseName,
  program,
  plan,
  amount,
}: EnrollmentDialogProps) {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})
  const [countryCode, setCountryCode] = React.useState("+91")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const countryCodes = [
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+971", label: "🇦🇪 +971" },
    { code: "+966", label: "🇸🇦 +966" },
    { code: "+65", label: "🇸🇬 +65" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+49", label: "🇩🇪 +49" },
    { code: "+977", label: "🇳🇵 +977" },
    { code: "+94", label: "🇱🇰 +94" },
    { code: "+880", label: "🇧🇩 +880" },
    { code: "+92", label: "🇵🇰 +92" },
  ]

  const validate = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!emailRegex.test(formData.email.trim())) errors.email = "Enter a valid email (e.g. name@gmail.com)"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    else if (formData.phone.replace(/\D/g, "").length !== 10) errors.phone = "Phone number must be exactly 10 digits"
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setError("")

    const cleanPhone = formData.phone.replace(/\D/g, "")
    try {
      const result = await createEnrollment({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: `${countryCode} ${cleanPhone}`,
        program,
        course: courseName,
        plan,
        amount,
      })

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "" })
        setFieldErrors({})
        setTimeout(() => {
          setSubmitted(false)
          onOpenChange(false)
        }, 3000)
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Unable to connect to server. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Enrollment Successful!</h3>
            <p className="text-muted-foreground text-[14px] text-center">
              Your enrollment for <strong>{courseName}</strong> ({plan} plan) has been recorded. Our team will contact you for payment and next steps.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-accent to-amber-500 p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-white text-xl sm:text-2xl font-bold">
                  Enroll Now
                </DialogTitle>
                <DialogDescription className="text-white/70 text-[14px] mt-1">
                  {courseName} — {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan (₹{amount.toLocaleString('en-IN')})
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-[13px] text-red-600 font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="en-name" className="text-[13px] font-semibold text-primary/80">
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="en-name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => { setFormData(prev => ({ ...prev, name: e.target.value })); setFieldErrors(prev => ({ ...prev, name: "" })) }}
                  className={`h-11 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.name ? "border-red-400 focus:border-red-400" : ""}`}
                />
                {fieldErrors.name && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="en-email" className="text-[13px] font-semibold text-primary/80">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="en-email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => { setFormData(prev => ({ ...prev, email: e.target.value })); setFieldErrors(prev => ({ ...prev, email: "" })) }}
                    className={`h-11 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.email ? "border-red-400 focus:border-red-400" : ""}`}
                  />
                  {fieldErrors.email && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="en-phone" className="text-[13px] font-semibold text-primary/80">
                    Phone <span className="text-red-400">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="h-11 w-[100px] rounded-xl border-black/[0.08] text-[13px] px-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[200px]">
                        {countryCodes.map((c) => (
                          <SelectItem key={c.code} value={c.code} className="text-[13px]">
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="en-phone"
                      type="tel"
                      placeholder="XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => { const v = e.target.value.replace(/\D/g, "").slice(0, 10); setFormData(prev => ({ ...prev, phone: v })); setFieldErrors(prev => ({ ...prev, phone: v })); setFieldErrors(prev => ({ ...prev, phone: "" })) }}
                      maxLength={10}
                      className={`h-11 flex-1 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.phone ? "border-red-400 focus:border-red-400" : ""}`}
                    />
                  </div>
                  {fieldErrors.phone && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.phone}</p>}
                </div>
              </div>

              {/* Plan summary */}
              <div className="p-4 bg-accent/[0.04] rounded-xl border border-accent/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[13px] font-semibold text-primary">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
                    <p className="text-[12px] text-muted-foreground">{courseName}</p>
                  </div>
                  <span className="text-xl font-extrabold text-primary">₹{amount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white font-semibold text-[14px] shadow-lg shadow-accent/20 mt-2 transition-all group disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Enrollment <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-[11px] text-center text-muted-foreground/50">
                Payment gateway coming soon. Our team will contact you for payment details.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
