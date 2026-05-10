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
import { CheckCircle2, Send, Loader2 } from "lucide-react"
import { submitContact } from "@/lib/api"

interface ContactFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const countryCodes = [
  { code: "+91", label: "🇮🇳 +91", country: "India" },
  { code: "+1", label: "🇺🇸 +1", country: "USA" },
  { code: "+44", label: "🇬🇧 +44", country: "UK" },
  { code: "+971", label: "🇦🇪 +971", country: "UAE" },
  { code: "+966", label: "🇸🇦 +966", country: "Saudi Arabia" },
  { code: "+65", label: "🇸🇬 +65", country: "Singapore" },
  { code: "+61", label: "🇦🇺 +61", country: "Australia" },
  { code: "+49", label: "🇩🇪 +49", country: "Germany" },
  { code: "+33", label: "🇫🇷 +33", country: "France" },
  { code: "+81", label: "🇯🇵 +81", country: "Japan" },
  { code: "+86", label: "🇨🇳 +86", country: "China" },
  { code: "+82", label: "🇰🇷 +82", country: "South Korea" },
  { code: "+977", label: "🇳🇵 +977", country: "Nepal" },
  { code: "+94", label: "🇱🇰 +94", country: "Sri Lanka" },
  { code: "+880", label: "🇧🇩 +880", country: "Bangladesh" },
  { code: "+92", label: "🇵🇰 +92", country: "Pakistan" },
]

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})
  const [countryCode, setCountryCode] = React.useState("+91")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    course: "",
    yearOfStudy: "",
  })

  const validate = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!emailRegex.test(formData.email.trim())) errors.email = "Enter a valid email (e.g. name@gmail.com)"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    else if (formData.phone.replace(/\D/g, "").length !== 10) errors.phone = "Phone number must be exactly 10 digits"
    if (!formData.program) errors.program = "Select a program"
    if (!formData.course) errors.course = "Select a training"
    if (!formData.yearOfStudy) errors.yearOfStudy = "Select your year"
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setError("")

    const cleanPhone = formData.phone.replace(/\D/g, "")
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: `${countryCode} ${cleanPhone}`,
      program: formData.program,
      course: formData.course,
      yearOfStudy: formData.yearOfStudy,
    }

    try {
      const result = await submitContact(payload)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", program: "", course: "", yearOfStudy: "" })
        setFieldErrors({})
        setTimeout(() => {
          setSubmitted(false)
          onOpenChange(false)
        }, 2500)
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
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground text-[14px] text-center">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-primary to-primary/90 p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-white text-xl sm:text-2xl font-bold">
                  Get in Touch
                </DialogTitle>
                <DialogDescription className="text-white/60 text-[14px] mt-1">
                  Fill in your details and we&apos;ll connect you with the right program advisor.
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
                <Label htmlFor="cf-name" className="text-[13px] font-semibold text-primary/80">
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="cf-name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => { setFormData(prev => ({ ...prev, name: e.target.value })); setFieldErrors(prev => ({ ...prev, name: "" })) }}
                  className={`h-11 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.name ? "border-red-400 focus:border-red-400" : ""}`}
                />
                {fieldErrors.name && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cf-email" className="text-[13px] font-semibold text-primary/80">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="cf-email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => { setFormData(prev => ({ ...prev, email: e.target.value })); setFieldErrors(prev => ({ ...prev, email: "" })) }}
                    className={`h-11 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.email ? "border-red-400 focus:border-red-400" : ""}`}
                  />
                  {fieldErrors.email && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cf-phone" className="text-[13px] font-semibold text-primary/80">
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
                      id="cf-phone"
                      type="tel"
                      placeholder="XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => { const v = e.target.value.replace(/\D/g, "").slice(0, 10); setFormData(prev => ({ ...prev, phone: v })); setFieldErrors(prev => ({ ...prev, phone: "" })) }}
                      maxLength={10}
                      className={`h-11 flex-1 rounded-xl border-black/[0.08] focus:border-accent ${fieldErrors.phone ? "border-red-400 focus:border-red-400" : ""}`}
                    />
                  </div>
                  {fieldErrors.phone && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-primary/80">
                  Training Program <span className="text-red-400">*</span>
                </Label>
                <Select value={formData.program} onValueChange={(v) => { setFormData(prev => ({ ...prev, program: v })); setFieldErrors(prev => ({ ...prev, program: "" })) }}>
                  <SelectTrigger className={`h-11 rounded-xl border-black/[0.08] ${fieldErrors.program ? "border-red-400" : ""}`}>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cse-it">CSE / IT</SelectItem>
                    <SelectItem value="ece-ec">ECE / EC</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                  </SelectContent>
                </Select>
                {fieldErrors.program && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.program}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-primary/80">
                  Training Interested In <span className="text-red-400">*</span>
                </Label>
                <Select value={formData.course} onValueChange={(v) => { setFormData(prev => ({ ...prev, course: v })); setFieldErrors(prev => ({ ...prev, course: "" })) }}>
                  <SelectTrigger className={`h-11 rounded-xl border-black/[0.08] ${fieldErrors.course ? "border-red-400" : ""}`}>
                    <SelectValue placeholder="Select a training" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="ai-ml">AI &amp; Machine Learning</SelectItem>
                    <SelectItem value="cyber-security">Cyber Security</SelectItem>
                    <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="embedded-systems">Embedded Systems</SelectItem>
                    <SelectItem value="vlsi-design">VLSI Design</SelectItem>
                    <SelectItem value="iot-robotics">IoT &amp; Robotics</SelectItem>
                    <SelectItem value="signal-processing">Signal Processing</SelectItem>
                    <SelectItem value="pcb-design">PCB Design</SelectItem>
                    <SelectItem value="power-electronics">Power Electronics</SelectItem>
                    <SelectItem value="communication-systems">Communication Systems</SelectItem>
                    <SelectItem value="hr-management">HR Management</SelectItem>
                    <SelectItem value="operation-management">Operation Management</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="stock-market-crypto">Stock Market &amp; Cryptocurrency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {fieldErrors.course && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.course}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-primary/80">
                  Year of Study <span className="text-red-400">*</span>
                </Label>
                <Select value={formData.yearOfStudy} onValueChange={(v) => { setFormData(prev => ({ ...prev, yearOfStudy: v })); setFieldErrors(prev => ({ ...prev, yearOfStudy: "" })) }}>
                  <SelectTrigger className={`h-11 rounded-xl border-black/[0.08] ${fieldErrors.yearOfStudy ? "border-red-400" : ""}`}>
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st">1st Year</SelectItem>
                    <SelectItem value="2nd">2nd Year</SelectItem>
                    <SelectItem value="3rd">3rd Year</SelectItem>
                    <SelectItem value="4th">4th Year</SelectItem>
                    <SelectItem value="graduated">Already Graduated</SelectItem>
                    <SelectItem value="working">Working Professional</SelectItem>
                  </SelectContent>
                </Select>
                {fieldErrors.yearOfStudy && <p className="text-[11px] text-red-500 font-medium">{fieldErrors.yearOfStudy}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-[14px] shadow-lg shadow-accent/20 mt-2 transition-all group disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry{" "}
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
