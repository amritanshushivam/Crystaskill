# 🎓 CrystaSkill — Professional Training & Skill Development Platform

Full-stack web application for corporate training programs.  
**Frontend:** Next.js 15 + React 19 + Tailwind CSS  
**Backend:** Express.js + MongoDB  

---

## 📋 Requirements

Make sure these are installed on your system **before** starting:

| Tool        | Version | How to check           | Download                                    |
| ----------- | ------- | ---------------------- | ------------------------------------------- |
| **Node.js** | v18+    | `node -v`              | [nodejs.org](https://nodejs.org)            |
| **npm**     | v9+     | `npm -v`               | Comes with Node.js                          |
| **MongoDB** | v6+     | `mongosh --eval "1+1"` | [mongodb.com](https://www.mongodb.com/try)  |
| **Git**     | any     | `git --version`        | [git-scm.com](https://git-scm.com)         |

> ⚠️ **MongoDB must be running** before you start the app. If using local MongoDB, make sure the `mongod` service is active.

---

## 🚀 Quick Start (One Click)

### Windows — Double-click to run:

```
start.bat        ← Starts backend + frontend + opens browser
stop.bat         ← Stops all servers
```

That's it! The script will:
1. ✅ Kill any leftover processes
2. ✅ Check if Node.js is installed
3. ✅ Install `node_modules` if missing (first time only)
4. ✅ Check `.env` file exists
5. ✅ Start Backend on **http://localhost:5000**
6. ✅ Start Frontend on **http://localhost:9002**
7. ✅ Open your browser automatically

> Press any key in the script window to **stop all servers** gracefully.

---

## 🛠 Manual Setup (Step by Step)

If you prefer to start servers manually:

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Create `.env` file

Copy the example and fill in your values:

```bash
copy .env.example .env
```

Edit `.env` with your settings:

```env
# Google Gemini API Key (for chatbot — optional)
GOOGLE_GENAI_API_KEY=your_key_here
GOOGLE_API_KEY=your_key_here

# MongoDB
MONGODB_URI=mongodb://localhost:27017/crystaskill

# Backend port
BACKEND_PORT=5000

# Frontend → Backend URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api

# Admin panel login
ADMIN_USERNAME=admin@example.com
ADMIN_PASSWORD=your_password
```

### Step 3 — Start Backend (Terminal 1)

```bash
node backend/server.js
```

You should see:
```
🚀 CrystaSkill Backend running on http://localhost:5000
MongoDB Connected: localhost/crystaskill
```

### Step 4 — Start Frontend (Terminal 2)

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.5.9 (Turbopack)
- Local: http://localhost:9002
✓ Ready in ~2s
```

### Step 5 — Open browser

👉 **http://localhost:9002**

---

## 📂 Project Structure

```
CrystaSkill/
├── start.bat                 # ⭐ One-click start (Windows)
├── stop.bat                  # ⭐ One-click stop (Windows)
├── .env                      # Environment variables (DO NOT commit)
├── .env.example              # Template for .env
├── package.json              # Frontend dependencies & scripts
│
├── src/                      # Next.js Frontend
│   ├── app/                  # Pages (App Router)
│   │   ├── page.tsx          # Landing page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── about/            # About page
│   │   ├── admin/            # Admin dashboard
│   │   ├── programs/         # Training programs (CSE-IT, ECE-EC, Management)
│   │   ├── careers/          # Careers page
│   │   ├── placement-desk/   # Placement desk
│   │   ├── alumni-network/   # Alumni network
│   │   ├── corporate-training/
│   │   ├── executive-certification/
│   │   ├── blog/             # Blog with dynamic [slug] routes
│   │   ├── enrollment-policy/
│   │   ├── privacy/          # Privacy policy
│   │   ├── terms/            # Terms of service
│   │   ├── cookies/          # Cookie policy
│   │   └── press-kit/        # Press kit
│   │
│   ├── components/           # Reusable components
│   │   ├── landing/          # Landing page sections
│   │   │   ├── hero.tsx      # Hero section
│   │   │   ├── navbar.tsx    # Navigation bar
│   │   │   ├── features.tsx  # Features grid
│   │   │   ├── courses.tsx   # Program cards
│   │   │   ├── comparison.tsx# Comparison table
│   │   │   ├── testimonials.tsx
│   │   │   ├── partners.tsx  # Partner logos marquee
│   │   │   ├── pricing.tsx   # Pricing plans
│   │   │   ├── cta-section.tsx
│   │   │   ├── training.tsx  # Training section
│   │   │   └── footer.tsx    # Footer
│   │   ├── chatbot/          # AI chatbot (Gemini API)
│   │   ├── ui/               # shadcn/ui components
│   │   ├── contact-form-dialog.tsx
│   │   ├── enrollment-dialog.tsx
│   │   └── course-detail-page.tsx
│   │
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities & API client
│
├── backend/                  # Express.js Backend
│   ├── server.js             # Entry point
│   ├── package.json          # Backend dependencies
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── models/               # Mongoose schemas
│   │   ├── Contact.js
│   │   ├── Enquiry.js
│   │   └── Enrollment.js
│   ├── routes/               # API route handlers
│   │   ├── contact.routes.js
│   │   ├── enquiry.routes.js
│   │   ├── enrollment.routes.js
│   │   └── admin.routes.js
│   └── middleware/
│       └── auth.js           # Admin auth middleware
│
├── public/                   # Static assets
│   └── logos/                # Partner & brand logos
│
├── docs/
│   └── blueprint.md          # Project blueprint
│
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS config
├── components.json           # shadcn/ui config
└── apphosting.yaml           # Firebase App Hosting config
```

---

## 🔌 API Endpoints

| Method | Endpoint              | Description                  |
| ------ | --------------------- | ---------------------------- |
| GET    | `/api/health`         | Backend health check         |
| POST   | `/api/contacts`       | Contact form submission      |
| POST   | `/api/enquiries`      | Course enquiry submission    |
| POST   | `/api/enrollments`    | Course enrollment submission |
| POST   | `/api/admin/login`    | Admin panel login            |

---

## 📜 Available Scripts

Run these from the project root:

| Command                | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start frontend dev server (port 9002)     |
| `npm run build`        | Build production frontend                 |
| `npm start`            | Start production frontend (port 9002)     |
| `npm run start:backend`| Start backend server (port 5000)          |
| `npm run typecheck`    | Run TypeScript type checking              |
| `npm run lint`         | Run ESLint                                |

---

## 🌐 URLs (Local Development)

| What              | URL                                |
| ----------------- | ---------------------------------- |
| **Website**       | http://localhost:9002              |
| **Admin Panel**   | http://localhost:9002/admin        |
| **Backend API**   | http://localhost:5000/api          |
| **Health Check**  | http://localhost:5000/api/health   |

---

## ⚙️ Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 15.5 (App Router, Turbopack)              |
| UI         | React 19, Tailwind CSS, shadcn/ui, Radix UI       |
| Backend    | Express.js, Helmet, CORS, express-rate-limit       |
| Database   | MongoDB + Mongoose                                |
| AI Chatbot | Google Gemini API                                 |
| Language   | TypeScript (frontend), JavaScript (backend)       |

---

## ❓ Troubleshooting

### "Port 9002 already in use"
```bash
# Kill all node processes and restart
taskkill /f /im node.exe
# Or just double-click stop.bat
```

### "MongoDB connection failed"
Make sure MongoDB is running:
```bash
# Check if mongod service is running (Windows)
net start MongoDB
# Or start manually
mongod
```

### "Cannot find module" errors
Reinstall dependencies:
```bash
rd /s /q node_modules
npm install
```

### Site loads slow in dev mode
Dev mode compiles pages on demand — this is normal. For production speed:
```bash
npm run build
npm start
```

---

## 🚢 Production Build

```bash
# Build optimized frontend
npm run build

# Start production server (backend must be running separately)
node backend/server.js
npm start
```

Production server runs at **http://localhost:9002** with full SSR — much faster than dev mode.

---

## 📝 License

Private project — CrystaSkill © 2026
