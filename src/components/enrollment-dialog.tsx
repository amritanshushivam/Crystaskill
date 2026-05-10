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
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-br from-background via-accent/5 to-background">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 flex items-center justify-center mb-6 animate-in fade-in zoom-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">All Set!</h3>
            <p className="text-muted-foreground text-[15px] text-center leading-relaxed">
              Your enrollment for <strong className="text-foreground">{courseName}</strong> has been recorded successfully. 
            </p>
            <p className="text-muted-foreground text-[14px] text-center mt-2">
              Our team will reach out within 24 hours with your payment options and next steps.
            </p>
            <div className="mt-6 p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20 w-full text-center">
              <p className="text-emerald-700 text-[13px] font-semibold">✓ Confirmation sent to {formData.email}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Premium header with gradient and accent */}
            <div className="relative overflow-hidden bg-gradient-to-br from-foreground/95 via-foreground to-foreground/90 p-8 border-b border-border/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <div className="inline-block mb-3 px-3 py-1 bg-accent/20 text-accent rounded-full text-[12px] font-semibold">
                  {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">Start Your Journey</h2>
                <p className="text-white/70 text-[14px]">{courseName}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {error && (
                <div className="p-4 bg-red-50/50 border border-red-200/50 rounded-xl text-[13px] text-red-700 font-medium flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">!</span>
                  </div>
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <Label htmlFor="en-name" className="text-[13px] font-semibold text-foreground/80 flex items-center gap-1">
                  <span>Full Name</span> <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="en-name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => { setFormData(prev => ({ ...prev, name: e.target.value })); setFieldErrors(prev => ({ ...prev, name: "" })) }}
                  className={`h-11 rounded-lg border-border/60 bg-background/50 focus:bg-background placeholder:text-muted-foreground/40 text-[14px] transition-all ${fieldErrors.name ? "border-red-400 ring-1 ring-red-400/20" : "hover:border-border focus:border-accent"}`}
                />
                {fieldErrors.name && <p className="text-[12px] text-red-600 font-medium flex items-center gap-1"><span>○</span> {fieldErrors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="en-email" className="text-[13px] font-semibold text-foreground/80 flex items-center gap-1">
                    <span>Email</span> <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="en-email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => { setFormData(prev => ({ ...prev, email: e.target.value })); setFieldErrors(prev => ({ ...prev, email: "" })) }}
                    className={`h-11 rounded-lg border-border/60 bg-background/50 focus:bg-background placeholder:text-muted-foreground/40 text-[14px] transition-all ${fieldErrors.email ? "border-red-400 ring-1 ring-red-400/20" : "hover:border-border focus:border-accent"}`}
                  />
                  {fieldErrors.email && <p className="text-[12px] text-red-600 font-medium flex items-center gap-1"><span>○</span> {fieldErrors.email}</p>}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="en-phone" className="text-[13px] font-semibold text-foreground/80 flex items-center gap-1">
                    <span>Phone</span> <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="h-11 w-[90px] rounded-lg border-border/60 bg-background/50 focus:bg-background text-[13px] px-2 hover:border-border focus:border-accent transition-all">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[220px]">
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
                      placeholder="10 digits"
                      value={formData.phone}
                      onChange={(e) => { const v = e.target.value.replace(/\D/g, "").slice(0, 10); setFormData(prev => ({ ...prev, phone: v })); setFieldErrors(prev => ({ ...prev, phone: "" })) }}
                      maxLength={10}
                      className={`h-11 flex-1 rounded-lg border-border/60 bg-background/50 focus:bg-background placeholder:text-muted-foreground/40 text-[14px] transition-all ${fieldErrors.phone ? "border-red-400 ring-1 ring-red-400/20" : "hover:border-border focus:border-accent"}`}
                    />
                  </div>
                  {fieldErrors.phone && <p className="text-[12px] text-red-600 font-medium flex items-center gap-1"><span>○</span> {fieldErrors.phone}</p>}
                </div>
              </div>

              {/* Premium plan summary */}
              <div className="relative p-5 rounded-lg border border-accent/30 bg-gradient-to-br from-accent/10 via-accent/5 to-background overflow-hidden group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-[14px] font-bold text-foreground mb-1">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
                    <p className="text-[12px] text-muted-foreground/70">{courseName} • Lifetime access</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-accent">₹{amount.toLocaleString('en-IN')}</div>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">One-time payment</p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg bg-gradient-to-r from-accent via-amber-500 to-accent hover:shadow-lg hover:shadow-accent/30 text-white font-bold text-[15px] shadow-md shadow-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Enrollment
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </Button>

              <div className="p-3 bg-muted/40 rounded-lg border border-border/20">
                <p className="text-[12px] text-muted-foreground text-center">
                  🔒 Secure enrollment • No immediate payment required • We'll contact you within 24 hours
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
