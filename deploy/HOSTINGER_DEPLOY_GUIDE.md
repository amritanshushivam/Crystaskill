# 🚀 CrystaSkill — Hostinger VPS Deployment Guide

## ⚡ Quick Overview

| Component | Technology | Port |
|-----------|-----------|------|
| Frontend | Next.js 15 (Standalone) | 9002 |
| Backend | Express.js + MongoDB | 5000 |
| Reverse Proxy | Nginx | 80/443 |
| Process Manager | PM2 | — |

---

## 📋 Prerequisites

1. **Hostinger VPS** — KVM 2 ya usse upar plan lena hai
   - Go to: https://www.hostinger.in/vps-hosting
   - Ubuntu 22.04 select karo
   - VPS purchase karne ke baad IP address aur root password milega

2. **Domain** — Hostinger me domain connect karo
   - Hostinger Dashboard → Domains → DNS Zone → **A Record** add karo:
     - Name: `@` → Value: `YOUR_VPS_IP`
     - Name: `www` → Value: `YOUR_VPS_IP`

3. **MongoDB Atlas** (Free) — https://www.mongodb.com/atlas
   - Free cluster create karo
   - Connection string copy karo

---

## 🔧 Step-by-Step Deployment

### Step 1: Hostinger VPS Setup

1. **Hostinger hPanel** pe login karo → **VPS** section
2. Ubuntu 22.04 select karo
3. **IP address** aur **root password** note karo

### Step 2: VPS me SSH se Connect karo

Windows me PowerShell ya CMD open karo:
```bash
ssh root@YOUR_VPS_IP
```

### Step 3: VPS pe Node.js Install karo

```bash
# System update
sudo apt update && sudo apt upgrade -y

# Node.js 20.x install
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v    # Should show v20.x
npm -v     # Should show 10.x

# PM2 install (Process Manager)
sudo npm install -g pm2

# Nginx install
sudo apt install -y nginx
sudo systemctl enable nginx
```

### Step 4: Project Files Upload karo

**Option A — Git se (Best Method):**
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/Crystaskill.git crystaskill
cd crystaskill
```

**Option B — FileZilla (SFTP):**
1. FileZilla open karo
2. Host: `YOUR_VPS_IP`, Username: `root`, Port: `22`
3. Saari files `/var/www/crystaskill/` me upload karo

**Option C — SCP (Command line):**
```bash
# Apne local machine se:
scp -r ./* root@YOUR_VPS_IP:/var/www/crystaskill/
```

### Step 5: .env File Setup karo

VPS pe:
```bash
cd /var/www/crystaskill
cp .env.production .env
nano .env
```

**Yeh values update karo:**
```env
MONGODB_URI=mongodb+srv://YOUR_ATLAS_CONNECTION_STRING
PRODUCTION_URL=https://yourdomain.com
NEXT_PUBLIC_BACKEND_URL=https://yourdomain.com/api
ADMIN_USERNAME=your_admin_email
ADMIN_PASSWORD=your_strong_password
GOOGLE_GENAI_API_KEY=your_gemini_key
```

### Step 6: Dependencies Install + Build

```bash
cd /var/www/crystaskill

# Frontend dependencies
npm install --production

# Backend dependencies  
cd backend && npm install --production && cd ..

# Build Next.js
npm run build

# Logs folder create karo
mkdir -p logs
```

### Step 7: Nginx Configure karo

```bash
# Nginx config copy karo
sudo cp deploy/nginx.conf /etc/nginx/sites-available/crystaskill

# Domain update karo
sudo nano /etc/nginx/sites-available/crystaskill
# "yourdomain.com" ko apne actual domain se replace karo

# Enable the site
sudo ln -sf /etc/nginx/sites-available/crystaskill /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test & restart
sudo nginx -t
sudo systemctl restart nginx
```

### Step 8: PM2 se Start karo

```bash
cd /var/www/crystaskill

# Start both frontend + backend
pm2 start ecosystem.config.js

# Status check karo
pm2 status

# Auto-restart on server reboot
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root
```

### Step 9: SSL Certificate (HTTPS) Setup

```bash
# Certbot install karo
sudo apt install -y certbot python3-certbot-nginx

# SSL generate karo (domain propagate hona chahiye pehle)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal test
sudo certbot renew --dry-run
```

### Step 10: Verify Deployment

```
https://yourdomain.com          → Frontend load hona chahiye ✅
https://yourdomain.com/api/health → {"status":"ok"} aana chahiye ✅
```

---

## 📊 Useful Commands (VPS pe)

| Command | Description |
|---------|-------------|
| `pm2 status` | Processes ka status dekho |
| `pm2 logs` | Saare logs dekho |
| `pm2 logs crystaskill-frontend` | Sirf frontend logs |
| `pm2 logs crystaskill-backend` | Sirf backend logs |
| `pm2 restart all` | Sab restart karo |
| `pm2 stop all` | Sab band karo |
| `sudo systemctl restart nginx` | Nginx restart |
| `sudo nginx -t` | Nginx config test |

---

## 🔄 Update/Redeploy kaise kare

```bash
cd /var/www/crystaskill

# Git se (agar git use kiya hai):
git pull origin main

# Rebuild
npm run build

# Restart
pm2 restart all
```

---

## 🛠 Troubleshooting

### Site nahi khul raha?
```bash
# Check PM2 processes running hai ya nahi
pm2 status

# Nginx check
sudo nginx -t
sudo systemctl status nginx

# Firewall check — ports open karo
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22
sudo ufw enable
```

### MongoDB connect nahi ho raha?
- MongoDB Atlas pe → Network Access → `0.0.0.0/0` add karo (allow from anywhere)
- `.env` me MONGODB_URI sahi check karo

### Port already in use?
```bash
# Check kaun sa process port use kar raha hai
sudo lsof -i :9002
sudo lsof -i :5000

# Kill it
sudo kill -9 <PID>
pm2 restart all
```

---

## 💡 Pro Tips

1. **MongoDB Atlas** free tier (512MB) use karo — production ke liye perfect hai
2. **Cloudflare** DNS use karo for extra CDN + DDoS protection
3. **Hostinger VPS KVM 2** (`4GB RAM, 2 vCPU`) is ideal for this project
4. **Git deploy** use karo — manual file upload se bacho
5. **PM2 monitoring**: `pm2 monit` se real-time monitoring dekho
