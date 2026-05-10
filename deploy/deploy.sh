#!/bin/bash
# ═══════════════════════════════════════════════════════════════
#  CrystaSkill — Hostinger VPS Deployment Script
# ═══════════════════════════════════════════════════════════════
#  Run this script on your Hostinger VPS after uploading files.
#  Usage: chmod +x deploy.sh && sudo ./deploy.sh
# ═══════════════════════════════════════════════════════════════

set -e

echo "═══════════════════════════════════════════════"
echo "  CrystaSkill — Hostinger VPS Setup"
echo "═══════════════════════════════════════════════"

# ─── Step 1: Update System ───────────────────────────────
echo ""
echo "📦 Step 1: Updating system packages..."
sudo apt update && sudo apt upgrade -y

# ─── Step 2: Install Node.js 20.x ───────────────────────
echo ""
echo "📦 Step 2: Installing Node.js 20.x..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi
echo "   Node.js version: $(node -v)"
echo "   npm version: $(npm -v)"

# ─── Step 3: Install PM2 ────────────────────────────────
echo ""
echo "📦 Step 3: Installing PM2 (Process Manager)..."
sudo npm install -g pm2

# ─── Step 4: Install Nginx ──────────────────────────────
echo ""
echo "📦 Step 4: Installing Nginx..."
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# ─── Step 5: Install project dependencies ────────────────
echo ""
echo "📦 Step 5: Installing project dependencies..."
APP_DIR="/var/www/crystaskill"

# Create app directory if not exists
sudo mkdir -p $APP_DIR
echo "   App directory: $APP_DIR"

# Check if files are uploaded
if [ ! -f "$APP_DIR/package.json" ]; then
    echo ""
    echo "⚠️  ERROR: Project files not found in $APP_DIR"
    echo "   Please upload your project files first!"
    echo ""
    echo "   From your local machine, run:"
    echo "   scp -r ./* root@YOUR_VPS_IP:/var/www/crystaskill/"
    echo ""
    exit 1
fi

cd $APP_DIR

# Install frontend dependencies
echo "   Installing frontend dependencies..."
npm install --production

# Install backend dependencies
echo "   Installing backend dependencies..."
cd backend
npm install --production
cd ..

# ─── Step 6: Build Next.js ──────────────────────────────
echo ""
echo "🔨 Step 6: Building Next.js production..."
npm run build

# ─── Step 7: Setup .env ─────────────────────────────────
echo ""
echo "📄 Step 7: Checking .env file..."
if [ ! -f "$APP_DIR/.env" ]; then
    if [ -f "$APP_DIR/.env.production" ]; then
        cp .env.production .env
        echo "   Copied .env.production → .env"
        echo "   ⚠️  IMPORTANT: Edit .env and update your domain & credentials!"
    else
        echo "   ⚠️  No .env file found! Create one from .env.example"
    fi
else
    echo "   ✅ .env file exists"
fi

# ─── Step 8: Create logs directory ───────────────────────
echo ""
echo "📁 Step 8: Creating logs directory..."
mkdir -p $APP_DIR/logs

# ─── Step 9: Setup Nginx ────────────────────────────────
echo ""
echo "🌐 Step 9: Setting up Nginx..."
if [ -f "$APP_DIR/deploy/nginx.conf" ]; then
    sudo cp $APP_DIR/deploy/nginx.conf /etc/nginx/sites-available/crystaskill
    sudo ln -sf /etc/nginx/sites-available/crystaskill /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    echo "   ⚠️  IMPORTANT: Edit /etc/nginx/sites-available/crystaskill"
    echo "   Replace 'yourdomain.com' with your actual domain!"
    
    sudo nginx -t && sudo systemctl restart nginx
    echo "   ✅ Nginx configured"
else
    echo "   ⚠️  Nginx config not found. Please set it up manually."
fi

# ─── Step 10: Start with PM2 ────────────────────────────
echo ""
echo "🚀 Step 10: Starting application with PM2..."
cd $APP_DIR

# Stop existing processes if any
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start using ecosystem config
pm2 start ecosystem.config.js

# Save PM2 process list & setup startup
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp /home/$USER 2>/dev/null || true

echo ""
echo "═══════════════════════════════════════════════"
echo "  ✅ CrystaSkill Deployment Complete!"
echo "═══════════════════════════════════════════════"
echo ""
echo "  📌 Next Steps:"
echo "  1. Edit .env file: nano /var/www/crystaskill/.env"
echo "  2. Update domain in Nginx: sudo nano /etc/nginx/sites-available/crystaskill"
echo "  3. Point your domain DNS (A record) to this VPS IP"
echo "  4. Setup SSL: sudo apt install certbot python3-certbot-nginx"
echo "     Then run: sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
echo "  5. Restart: pm2 restart all"
echo ""
echo "  📊 Useful Commands:"
echo "  pm2 status              — Check process status"
echo "  pm2 logs                — View all logs"
echo "  pm2 logs crystaskill-frontend — Frontend logs only"
echo "  pm2 logs crystaskill-backend  — Backend logs only"
echo "  pm2 restart all         — Restart all processes"
echo "  sudo systemctl restart nginx — Restart Nginx"
echo ""
