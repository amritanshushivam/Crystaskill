const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/api';

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: { msg: string; path: string }[];
}

// ─── Token helpers ──────────────────────────────────────
export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin_token');
}
export function setAdminToken(token: string) {
  localStorage.setItem('admin_token', token);
}
export function clearAdminToken() {
  localStorage.removeItem('admin_token');
}

async function apiCall<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${BACKEND_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
      },
    });

    const data = await res.json();
    return data as ApiResponse<T>;
  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      message: 'Unable to connect to server. Please try again later.',
    };
  }
}

// Authenticated API call (adds Bearer token)
async function authApiCall<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getAdminToken();
  if (!token) {
    return { success: false, message: 'Not authenticated. Please login.' };
  }
  return apiCall<T>(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

// ─── Contact Form ───────────────────────────────────────
export async function submitContact(payload: {
  name: string;
  email: string;
  phone: string;
  program: string;
  course: string;
  yearOfStudy: string;
}) {
  return apiCall('/contacts', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ─── Enquiry ────────────────────────────────────────────
export async function submitEnquiry(payload: {
  name: string;
  email: string;
  phone: string;
  program: string;
  course: string;
  message?: string;
  source?: string;
}) {
  return apiCall('/enquiries', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ─── Enrollment ─────────────────────────────────────────
export async function createEnrollment(payload: {
  name: string;
  email: string;
  phone: string;
  program: string;
  course: string;
  plan: string;
  amount: number;
}) {
  return apiCall<{ id: string }>('/enrollments', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ─── Health Check ───────────────────────────────────────
export async function healthCheck() {
  return apiCall('/health');
}

// ─── Admin Auth ─────────────────────────────────────────
export async function adminLogin(username: string, password: string) {
  const res = await apiCall<{ token: string; expiresIn: string }>('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
  if (res.success && res.data?.token) {
    setAdminToken(res.data.token);
  }
  return res;
}

export async function adminLogout() {
  const res = await authApiCall('/admin/logout', { method: 'POST' });
  clearAdminToken();
  return res;
}

// ─── Admin Dashboard ────────────────────────────────────
export async function getDashboard() {
  return authApiCall<{
    overview: { totalContacts: number; totalEnquiries: number; totalEnrollments: number; totalRevenue: number };
    contacts: { total: number; new: number; contacted: number; converted: number };
    enquiries: { total: number; pending: number; replied: number };
    enrollments: { total: number; pending: number; active: number; completed: number };
    revenue: number;
    programDistribution: { _id: string; count: number }[];
    recent: {
      contacts: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; status: string; createdAt: string }>;
      enquiries: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; source: string; status: string; createdAt: string }>;
      enrollments: Array<{ _id: string; name: string; email: string; phone: string; program: string; course: string; plan: string; amount: number; paymentStatus: string; status: string; createdAt: string }>;
    };
  }>('/admin/dashboard');
}

export async function getAdminContacts(params?: { status?: string; program?: string; page?: number }) {
  const query = new URLSearchParams();
  if (params?.status) query.set('status', params.status);
  if (params?.program) query.set('program', params.program);
  if (params?.page) query.set('page', String(params.page));
  return authApiCall(`/admin/contacts?${query.toString()}`);
}

export async function getAdminEnquiries(params?: { status?: string; page?: number }) {
  const query = new URLSearchParams();
  if (params?.status) query.set('status', params.status);
  if (params?.page) query.set('page', String(params.page));
  return authApiCall(`/admin/enquiries?${query.toString()}`);
}

export async function getAdminEnrollments(params?: { status?: string; paymentStatus?: string; page?: number }) {
  const query = new URLSearchParams();
  if (params?.status) query.set('status', params.status);
  if (params?.paymentStatus) query.set('paymentStatus', params.paymentStatus);
  if (params?.page) query.set('page', String(params.page));
  return authApiCall(`/admin/enrollments?${query.toString()}`);
}

export async function updateContactStatus(id: string, status: string, notes?: string) {
  return authApiCall(`/contacts/${id}`, { method: 'PATCH', body: JSON.stringify({ status, notes }) });
}

export async function deleteContact(id: string) {
  return authApiCall(`/contacts/${id}`, { method: 'DELETE' });
}

export async function updateEnquiryStatus(id: string, status: string) {
  return authApiCall(`/enquiries/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
}

export async function deleteEnquiry(id: string) {
  return authApiCall(`/enquiries/${id}`, { method: 'DELETE' });
}

export async function updateEnrollmentStatus(id: string, data: { status?: string; paymentStatus?: string }) {
  return authApiCall(`/enrollments/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
}

export async function deleteEnrollment(id: string) {
  return authApiCall(`/enrollments/${id}`, { method: 'DELETE' });
}
