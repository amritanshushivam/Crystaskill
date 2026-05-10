# 🚀 CrystaSkill Backend — Render Deploy Guide

## 1. Render pe account banao
- https://render.com/
- GitHub se login karo

## 2. New Web Service create karo
- "New Web Service" → GitHub repo select karo (Crystaskill-main/backend)
- Branch: main
- Environment: Node
- Build Command: `npm install`
- Start Command: `npm start`

## 3. Environment Variables set karo
| Key | Value |
|-----|-------|
| MONGODB_URI | (MongoDB Atlas URI) |
| ADMIN_USERNAME | (admin email) |
| ADMIN_PASSWORD | (strong password) |
| GOOGLE_GENAI_API_KEY | (Gemini key) |
| GOOGLE_API_KEY | (Gemini key) |

## 4. Port
- Render automatically `$PORT` set karta hai
- Code ab compatible hai: `process.env.PORT || process.env.BACKEND_PORT || 5000`

## 5. Deploy dabao
- 2-3 min me backend live ho jayega!
- Health check: `https://<render-app-url>/api/health`

## 6. Frontend me backend URL update karo
- Vercel pe `NEXT_PUBLIC_BACKEND_URL` ko Render backend URL se replace karo

---
Koi error aaye toh mujhe batao, main fix kar dunga!