"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  getDashboard,
  updateContactStatus,
  updateEnquiryStatus,
  updateEnrollmentStatus,
  deleteContact,
  deleteEnquiry,
  deleteEnrollment,
  adminLogin,
  adminLogout,
  getAdminToken,
  clearAdminToken,
} from "@/lib/api"
import { Button } from "@/components/ui/button"
import {
  Users,
  Mail,
  GraduationCap,
  IndianRupee,
  ArrowLeft,
  RefreshCw,
  Loader2,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  BookOpen,
  TrendingUp,
  AlertCircle,
  Lock,
  LogOut,
  Eye,
  EyeOff,
  Trash2,
  Ban,
  ArrowRightCircle,
  XCircle,
  ShieldAlert,
  CheckCircle,
} from "lucide-react"

/* ───────── Types ───────── */
type DashboardData = {
  overview: { totalContacts: number; totalEnquiries: number; totalEnrollments: number; totalRevenue: number }
  contacts: { total: number; new: number; contacted: number; converted: number }
  enquiries: { total: number; pending: number; replied: number }
  enrollments: { total: number; pending: number; active: number; completed: number }
  revenue: number
  programDistribution: { _id: string; count: number }[]
  recent: {
    contacts: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; status: string; createdAt: string }>
    enquiries: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; source: string; status: string; createdAt: string }>
    enrollments: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; plan: string; amount: number; paymentStatus: string; status: string; createdAt: string }>
  }
}

const programLabels: Record<string, string> = {
  "cse-it": "CSE / IT",
  "ece-ec": "ECE / EC",
  management: "Management",
}

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  converted: "bg-emerald-100 text-emerald-700",
  closed: "bg-gray-200 text-gray-600",
  pending: "bg-amber-100 text-amber-700",
  replied: "bg-sky-100 text-sky-700",
  active: "bg-emerald-100 text-emerald-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  failed: "bg-red-100 text-red-700",
  refunded: "bg-orange-100 text-orange-700",
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${statusColors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  )
}

function StatCard({ label, value, icon: Icon, color, sub }: { label: string; value: string | number; icon: React.ElementType; color: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-black/[0.06] p-5 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-bold text-muted-foreground/50 uppercase tracking-widest mb-1">{label}</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{value}</p>
          {sub && <p className="text-[11px] text-muted-foreground/40 mt-1">{sub}</p>}
        </div>
        <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  )
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

/* ───────── Confirmation Modal ───────── */
function ConfirmModal({ open, title, message, confirmLabel, confirmColor, onConfirm, onCancel, loading }: {
  open: boolean; title: string; message: string; confirmLabel: string; confirmColor: string
  onConfirm: () => void; onCancel: () => void; loading: boolean
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onCancel}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-black/[0.06]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl ${confirmColor === "red" ? "bg-red-100" : "bg-amber-100"} flex items-center justify-center`}>
            <ShieldAlert className={`w-5 h-5 ${confirmColor === "red" ? "text-red-600" : "text-amber-600"}`} />
          </div>
          <h3 className="text-[16px] font-bold text-primary">{title}</h3>
        </div>
        <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">{message}</p>
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} disabled={loading} className="px-4 py-2 text-[13px] font-semibold rounded-lg border border-black/[0.08] text-muted-foreground hover:bg-gray-50 transition-colors disabled:opacity-50">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 text-[13px] font-bold rounded-lg text-white transition-all disabled:opacity-50 flex items-center gap-2 ${
              confirmColor === "red" ? "bg-red-600 hover:bg-red-700" : "bg-amber-600 hover:bg-amber-700"
            }`}
          >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {confirmLabel}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

/* ───────── Toast Notification ───────── */
function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  React.useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -20, x: "-50%" }}
      className={`fixed top-4 left-1/2 z-[200] px-5 py-3 rounded-xl shadow-xl text-[13px] font-semibold flex items-center gap-2 ${
        type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      {type === "success" ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
      {message}
    </motion.div>
  )
}

/* ───────── Action Button with loading ───────── */
function ActionBtn({ label, icon: Icon, color, onClick }: {
  label: string; icon: React.ElementType; color: string; onClick: () => void | Promise<void>
}) {
  const [busy, setBusy] = React.useState(false)

  const handleClick = async () => {
    setBusy(true)
    try { await onClick() } finally { setBusy(false) }
  }

  const colorClasses: Record<string, string> = {
    yellow: "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200",
    green: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200",
    blue: "bg-sky-50 text-sky-700 hover:bg-sky-100 border-sky-200",
    red: "bg-red-50 text-red-700 hover:bg-red-100 border-red-200",
    gray: "bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200",
    orange: "bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-200",
  }

  return (
    <button
      onClick={handleClick}
      disabled={busy}
      className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 whitespace-nowrap ${colorClasses[color] || colorClasses.gray}`}
    >
      {busy ? <Loader2 className="w-3 h-3 animate-spin" /> : <Icon className="w-3 h-3" />}
      {label}
    </button>
  )
}

/* ───────── Login Screen ───────── */
function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPwd, setShowPwd] = React.useState(false)
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required")
      return
    }
    setLoading(true)
    try {
      const res = await adminLogin(username.trim(), password)
      if (res.success) {
        onSuccess()
      } else {
        setError(res.message || "Invalid credentials")
      }
    } catch {
      setError("Unable to connect to server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-md">
        <div className="bg-white rounded-3xl border border-black/[0.06] shadow-xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-[22px] font-extrabold text-primary tracking-tight">Admin Login</h1>
            <p className="text-[13px] text-muted-foreground/60 mt-1">Sign in to access CrystaSkill dashboard</p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-xl px-4 py-3 mb-6 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[12px] font-bold text-primary/70 uppercase tracking-wider mb-2">
                Email / Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin email"
                className="w-full h-12 px-4 rounded-xl border border-black/[0.08] bg-gray-50/50 text-[14px] text-primary placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                autoFocus
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-primary/70 uppercase tracking-wider mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full h-12 px-4 pr-12 rounded-xl border border-black/[0.08] bg-gray-50/50 text-[14px] text-primary placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-primary transition-colors">
                  {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-[14px] shadow-lg hover:shadow-xl transition-all disabled:opacity-50">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin mr-2" />Signing in...</>) : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-[12px] text-muted-foreground/50 hover:text-accent transition-colors">← Back to CrystaSkill</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   MAIN ADMIN DASHBOARD
   ═══════════════════════════════════════════════════════════ */
export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [authChecked, setAuthChecked] = React.useState(false)
  const [data, setData] = React.useState<DashboardData | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState("")
  const [activeTab, setActiveTab] = React.useState<"contacts" | "enquiries" | "enrollments">("contacts")
  const [toast, setToast] = React.useState<{ message: string; type: "success" | "error" } | null>(null)
  const [confirmModal, setConfirmModal] = React.useState<{
    open: boolean; title: string; message: string; confirmLabel: string; confirmColor: string; action: () => Promise<void>
  }>({ open: false, title: "", message: "", confirmLabel: "", confirmColor: "red", action: async () => {} })
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  const showToast = React.useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
  }, [])

  const handleSessionExpired = React.useCallback(() => {
    clearAdminToken()
    setIsAuthenticated(false)
    setData(null)
  }, [])

  const isAuthError = (msg?: string) => {
    if (!msg) return false
    const lower = msg.toLowerCase()
    return lower.includes("authenticat") || lower.includes("token") || lower.includes("expired") || lower.includes("login") || lower.includes("not authenticated")
  }

  React.useEffect(() => {
    const token = getAdminToken()
    if (token) setIsAuthenticated(true)
    setAuthChecked(true)
  }, [])

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    setError("")
    try {
      const res = await getDashboard()
      if (res.success && res.data) {
        setData(res.data as DashboardData)
      } else if (isAuthError(res.message)) {
        handleSessionExpired()
        return
      } else {
        setError(res.message || "Failed to load dashboard")
      }
    } catch {
      setError("Unable to connect to server")
    } finally {
      setLoading(false)
    }
  }, [handleSessionExpired])

  React.useEffect(() => {
    if (isAuthenticated) fetchData()
  }, [fetchData, isAuthenticated])

  const handleLoginSuccess = () => setIsAuthenticated(true)

  const handleLogout = async () => {
    await adminLogout()
    setIsAuthenticated(false)
    setData(null)
  }

  /* ─── Action Helpers ─────────────────────────────────── */
  const handleContactStatus = async (id: string, status: string) => {
    const res = await updateContactStatus(id, status)
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to update", "error"); return
    }
    showToast(`Contact marked as ${status}`, "success")
    fetchData()
  }

  const handleDeleteContact = async (id: string) => {
    const res = await deleteContact(id)
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to delete", "error"); return
    }
    showToast("Contact deleted", "success")
    fetchData()
  }

  const handleEnquiryStatus = async (id: string, status: string) => {
    const res = await updateEnquiryStatus(id, status)
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to update", "error"); return
    }
    showToast(`Enquiry marked as ${status}`, "success")
    fetchData()
  }

  const handleDeleteEnquiry = async (id: string) => {
    const res = await deleteEnquiry(id)
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to delete", "error"); return
    }
    showToast("Enquiry deleted", "success")
    fetchData()
  }

  const handleEnrollmentStatus = async (id: string, status: string) => {
    const res = await updateEnrollmentStatus(id, { status })
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to update", "error"); return
    }
    showToast(`Enrollment marked as ${status}`, "success")
    fetchData()
  }

  const handleDeleteEnrollment = async (id: string) => {
    const res = await deleteEnrollment(id)
    if (!res.success) {
      if (isAuthError(res.message)) { handleSessionExpired(); return }
      showToast(res.message || "Failed to delete", "error"); return
    }
    showToast("Enrollment deleted", "success")
    fetchData()
  }

  /* ─── Confirm wrapper ──────────────────────────────── */
  const confirmAction = (title: string, message: string, confirmLabel: string, confirmColor: string, action: () => Promise<void>) => {
    setConfirmModal({ open: true, title, message, confirmLabel, confirmColor, action })
  }

  const executeConfirm = async () => {
    setConfirmLoading(true)
    try { await confirmModal.action() }
    finally { setConfirmLoading(false); setConfirmModal((p) => ({ ...p, open: false })) }
  }

  /* ─── Guards ───────────────────────────────────────── */
  if (!authChecked) {
    return <div className="min-h-screen bg-gray-50/50 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent" /></div>
  }
  if (!isAuthenticated) {
    return <LoginScreen onSuccess={handleLoginSuccess} />
  }
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="text-center"><Loader2 className="w-8 h-8 animate-spin text-accent mx-auto mb-3" /><p className="text-[14px] text-muted-foreground">Loading dashboard...</p></div>
      </div>
    )
  }
  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <p className="text-[14px] text-red-600 mb-4">{error || "No data"}</p>
          <Button onClick={fetchData} variant="outline" size="sm"><RefreshCw className="w-4 h-4 mr-2" /> Retry</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Toast */}
      <AnimatePresence>{toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}</AnimatePresence>

      {/* Confirmation Modal */}
      <ConfirmModal
        open={confirmModal.open}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmLabel={confirmModal.confirmLabel}
        confirmColor={confirmModal.confirmColor}
        onConfirm={executeConfirm}
        onCancel={() => setConfirmModal((p) => ({ ...p, open: false }))}
        loading={confirmLoading}
      />

      {/* Header */}
      <header className="bg-white border-b border-black/[0.06] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="w-4 h-4" />Back to Site</Link>
            <div className="w-px h-6 bg-black/[0.06]" />
            <h1 className="text-[16px] font-bold text-primary">CrystaSkill Admin</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={fetchData} variant="outline" size="sm" className="rounded-lg text-[12px]"><RefreshCw className="w-3.5 h-3.5 mr-1.5" />Refresh</Button>
            <Button onClick={handleLogout} variant="outline" size="sm" className="rounded-lg text-[12px] text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"><LogOut className="w-3.5 h-3.5 mr-1.5" />Logout</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Contacts" value={data.overview.totalContacts} icon={Users} color="bg-blue-500" sub={`${data.contacts.new} new`} />
          <StatCard label="Total Enquiries" value={data.overview.totalEnquiries} icon={MessageSquare} color="bg-violet-500" sub={`${data.enquiries.pending} pending`} />
          <StatCard label="Enrollments" value={data.overview.totalEnrollments} icon={GraduationCap} color="bg-emerald-500" sub={`${data.enrollments.active} active`} />
          <StatCard label="Revenue" value={`₹${data.overview.totalRevenue.toLocaleString("en-IN")}`} icon={IndianRupee} color="bg-accent" sub="completed payments" />
        </div>

        {/* Status Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-black/[0.06] p-5">
            <h3 className="text-[13px] font-bold text-primary mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> Contacts</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">New</span><span className="font-bold text-primary">{data.contacts.new}</span></div>
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Contacted</span><span className="font-bold text-primary">{data.contacts.contacted}</span></div>
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Converted</span><span className="font-bold text-emerald-600">{data.contacts.converted}</span></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-black/[0.06] p-5">
            <h3 className="text-[13px] font-bold text-primary mb-3 flex items-center gap-2"><Mail className="w-4 h-4 text-violet-500" /> Enquiries</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Pending</span><span className="font-bold text-amber-600">{data.enquiries.pending}</span></div>
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Replied</span><span className="font-bold text-primary">{data.enquiries.replied}</span></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-black/[0.06] p-5">
            <h3 className="text-[13px] font-bold text-primary mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-emerald-500" /> Enrollments</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Pending</span><span className="font-bold text-amber-600">{data.enrollments.pending}</span></div>
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Active</span><span className="font-bold text-emerald-600">{data.enrollments.active}</span></div>
              <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Completed</span><span className="font-bold text-primary">{data.enrollments.completed}</span></div>
            </div>
          </div>
        </div>

        {/* Program Distribution */}
        {data.programDistribution.length > 0 && (
          <div className="bg-white rounded-2xl border border-black/[0.06] p-5 mb-8">
            <h3 className="text-[13px] font-bold text-primary mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-accent" /> Program Distribution</h3>
            <div className="flex gap-4 flex-wrap">
              {data.programDistribution.map((p) => (
                <div key={p._id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-black/[0.04]">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[13px] font-bold text-primary">{programLabels[p._id] || p._id}</p>
                    <p className="text-[11px] text-muted-foreground">{p.count} contacts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab selector */}
        <div className="flex gap-1 bg-white rounded-xl border border-black/[0.06] p-1 mb-6 w-fit">
          {(["contacts", "enquiries", "enrollments"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${activeTab === tab ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:bg-gray-50"}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ml-1.5 text-[11px] opacity-60">({tab === "contacts" ? data.contacts.total : tab === "enquiries" ? data.enquiries.total : data.enrollments.total})</span>
            </button>
          ))}
        </div>

        {/* ═══ Tables ═══ */}
        <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">

          {/* ──── CONTACTS ──── */}
          {activeTab === "contacts" && (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-black/[0.04] bg-gray-50/50">
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Name</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Contact</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Program</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Training</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Status</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Date</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider min-w-[240px]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.contacts.map((c) => (
                    <tr key={c._id} className="border-b border-black/[0.03] hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-semibold text-primary">{c.name}</td>
                      <td className="p-4">
                        <div className="text-primary/70">{c.email}</div>
                        <div className="text-muted-foreground/50 text-[11px] flex items-center gap-1"><Phone className="w-3 h-3" />{c.phone}</div>
                      </td>
                      <td className="p-4 text-primary/70">{programLabels[c.program] || c.program}</td>
                      <td className="p-4 text-primary/70">{c.course}</td>
                      <td className="p-4"><StatusBadge status={c.status} /></td>
                      <td className="p-4 text-muted-foreground/50 text-[11px]">{formatDate(c.createdAt)}</td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {c.status === "new" && (
                            <ActionBtn label="Contacted" icon={ArrowRightCircle} color="yellow" onClick={() => handleContactStatus(c._id, "contacted")} />
                          )}
                          {c.status === "contacted" && (
                            <ActionBtn label="Convert" icon={CheckCircle2} color="green" onClick={() => handleContactStatus(c._id, "converted")} />
                          )}
                          {c.status !== "closed" && (
                            <ActionBtn label="Close" icon={Ban} color="gray" onClick={() => confirmAction("Close Contact", `Close contact "${c.name}"? This marks it as no longer active.`, "Close", "amber", () => handleContactStatus(c._id, "closed"))} />
                          )}
                          <ActionBtn label="Delete" icon={Trash2} color="red" onClick={() => confirmAction("Delete Contact", `Permanently delete "${c.name}"? This cannot be undone.`, "Delete", "red", () => handleDeleteContact(c._id))} />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {data.recent.contacts.length === 0 && <tr><td colSpan={7} className="p-8 text-center text-muted-foreground/40">No contacts yet</td></tr>}
                </tbody>
              </table>
            </div>
          )}

          {/* ──── ENQUIRIES ──── */}
          {activeTab === "enquiries" && (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-black/[0.04] bg-gray-50/50">
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Name</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Contact</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Program</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Training</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Source</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Status</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Date</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider min-w-[280px]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.enquiries.map((e) => (
                    <tr key={e._id} className="border-b border-black/[0.03] hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-semibold text-primary">{e.name}</td>
                      <td className="p-4">
                        <div className="text-primary/70">{e.email}</div>
                        <div className="text-muted-foreground/50 text-[11px] flex items-center gap-1"><Phone className="w-3 h-3" />{e.phone}</div>
                      </td>
                      <td className="p-4 text-primary/70">{programLabels[e.program] || e.program}</td>
                      <td className="p-4 text-primary/70">{e.course}</td>
                      <td className="p-4"><span className="text-[11px] font-semibold text-muted-foreground bg-gray-100 px-2 py-1 rounded">{e.source}</span></td>
                      <td className="p-4"><StatusBadge status={e.status} /></td>
                      <td className="p-4 text-muted-foreground/50 text-[11px]">{formatDate(e.createdAt)}</td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {e.status === "pending" && (
                            <ActionBtn label="Replied" icon={CheckCircle2} color="blue" onClick={() => handleEnquiryStatus(e._id, "replied")} />
                          )}
                          {(e.status === "pending" || e.status === "replied") && (
                            <ActionBtn label="Convert" icon={ArrowRightCircle} color="green" onClick={() => handleEnquiryStatus(e._id, "converted")} />
                          )}
                          {e.status !== "closed" && (
                            <ActionBtn label="Close" icon={Ban} color="gray" onClick={() => confirmAction("Close Enquiry", `Close enquiry from "${e.name}"?`, "Close", "amber", () => handleEnquiryStatus(e._id, "closed"))} />
                          )}
                          <ActionBtn label="Delete" icon={Trash2} color="red" onClick={() => confirmAction("Delete Enquiry", `Permanently delete enquiry from "${e.name}"?`, "Delete", "red", () => handleDeleteEnquiry(e._id))} />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {data.recent.enquiries.length === 0 && <tr><td colSpan={8} className="p-8 text-center text-muted-foreground/40">No enquiries yet</td></tr>}
                </tbody>
              </table>
            </div>
          )}

          {/* ──── ENROLLMENTS ──── */}
          {activeTab === "enrollments" && (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-black/[0.04] bg-gray-50/50">
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Name</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Contact</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Training</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Plan</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Amount</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Payment</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Status</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider">Date</th>
                    <th className="text-left p-4 font-bold text-primary/60 text-[11px] uppercase tracking-wider min-w-[280px]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent.enrollments.map((en) => (
                    <tr key={en._id} className="border-b border-black/[0.03] hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-semibold text-primary">{en.name}</td>
                      <td className="p-4">
                        <div className="text-primary/70">{en.email}</div>
                        <div className="text-muted-foreground/50 text-[11px] flex items-center gap-1"><Phone className="w-3 h-3" />{en.phone}</div>
                      </td>
                      <td className="p-4 text-primary/70">{en.course}</td>
                      <td className="p-4"><span className="font-bold text-primary capitalize">{en.plan}</span></td>
                      <td className="p-4 font-bold text-primary">₹{en.amount.toLocaleString("en-IN")}</td>
                      <td className="p-4"><StatusBadge status={en.paymentStatus} /></td>
                      <td className="p-4"><StatusBadge status={en.status} /></td>
                      <td className="p-4 text-muted-foreground/50 text-[11px]">{formatDate(en.createdAt)}</td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {en.status === "pending" && (
                            <ActionBtn label="Activate" icon={CheckCircle2} color="green" onClick={() => handleEnrollmentStatus(en._id, "active")} />
                          )}
                          {en.status === "active" && (
                            <ActionBtn label="Complete" icon={CheckCircle} color="blue" onClick={() => handleEnrollmentStatus(en._id, "completed")} />
                          )}
                          {(en.status === "pending" || en.status === "active") && (
                            <ActionBtn label="Revoke" icon={XCircle} color="orange" onClick={() => confirmAction("Revoke Access", `Cancel enrollment for "${en.name}" (${en.course} — ${en.plan} plan)? Their access will be revoked immediately.`, "Revoke Access", "red", () => handleEnrollmentStatus(en._id, "cancelled"))} />
                          )}
                          <ActionBtn label="Delete" icon={Trash2} color="red" onClick={() => confirmAction("Delete Enrollment", `Permanently delete enrollment for "${en.name}"?`, "Delete", "red", () => handleDeleteEnrollment(en._id))} />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {data.recent.enrollments.length === 0 && <tr><td colSpan={9} className="p-8 text-center text-muted-foreground/40">No enrollments yet</td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
