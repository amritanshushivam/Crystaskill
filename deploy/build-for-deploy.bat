@echo off
REM ═══════════════════════════════════════════════════════════════
REM  CrystaSkill — Local Build & Prepare for Hostinger Deployment
REM ═══════════════════════════════════════════════════════════════
REM  Run this on your Windows machine before uploading to Hostinger
REM ═══════════════════════════════════════════════════════════════

echo.
echo ═══════════════════════════════════════════════
echo   CrystaSkill — Build for Production
echo ═══════════════════════════════════════════════
echo.

REM Step 1: Install dependencies
echo [1/4] Installing frontend dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo [2/4] Installing backend dependencies...
cd backend
call npm install
cd ..

REM Step 2: Build Next.js
echo [3/4] Building Next.js for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo [4/4] Build complete!
echo.
echo ═══════════════════════════════════════════════
echo   Build Successful! Now upload to Hostinger:
echo ═══════════════════════════════════════════════
echo.
echo   Option A: Using FileZilla (SFTP):
echo     1. Connect to your VPS via SFTP
echo     2. Upload ALL files to /var/www/crystaskill/
echo.
echo   Option B: Using SCP (if you have SSH):
echo     scp -r * root@YOUR_VPS_IP:/var/www/crystaskill/
echo.
echo   Option C: Using Git (recommended):
echo     On VPS: cd /var/www/crystaskill ^& git pull
echo.
echo   After uploading, run on VPS:
echo     cd /var/www/crystaskill
echo     sudo chmod +x deploy/deploy.sh
echo     sudo ./deploy/deploy.sh
echo.
pause
