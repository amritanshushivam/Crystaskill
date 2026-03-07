@echo off
chcp 65001 >nul 2>&1
title CrystaSkill — Installing Requirements
color 0E

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║     CrystaSkill — Requirements Installer     ║
echo  ╚══════════════════════════════════════════════╝
echo.

:: ──────────────────────────────────────────────
:: Step 1 — Check Node.js
:: ──────────────────────────────────────────────
echo  [1/5] Checking Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  ╔══════════════════════════════════════════════╗
    echo  ║  [ERROR] Node.js is NOT installed!           ║
    echo  ║                                              ║
    echo  ║  Download from: https://nodejs.org           ║
    echo  ║  Install the LTS version and restart.        ║
    echo  ╚══════════════════════════════════════════════╝
    echo.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do echo        ✅ Node.js %%v found

:: ──────────────────────────────────────────────
:: Step 2 — Check npm
:: ──────────────────────────────────────────────
echo  [2/5] Checking npm...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo        ❌ npm not found! Reinstall Node.js.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('npm -v') do echo        ✅ npm v%%v found

:: ──────────────────────────────────────────────
:: Step 3 — Check MongoDB
:: ──────────────────────────────────────────────
echo  [3/5] Checking MongoDB...
where mongod >nul 2>&1
if %errorlevel% neq 0 (
    echo        ⚠️  MongoDB (mongod) not found in PATH.
    echo        Make sure MongoDB is installed and running.
    echo        Download: https://www.mongodb.com/try/download/community
    echo.
) else (
    echo        ✅ MongoDB found
)

:: ──────────────────────────────────────────────
:: Step 4 — Check .env file
:: ──────────────────────────────────────────────
echo  [4/5] Checking .env file...
if not exist "%~dp0.env" (
    if exist "%~dp0.env.example" (
        echo        .env not found — creating from .env.example...
        copy "%~dp0.env.example" "%~dp0.env" >nul
        echo        ✅ .env created! Edit it with your real values.
        echo.
        echo        ╔══════════════════════════════════════════════╗
        echo        ║  IMPORTANT: Open .env file and fill in:     ║
        echo        ║  - GOOGLE_GENAI_API_KEY  (for chatbot)      ║
        echo        ║  - MONGODB_URI           (database)         ║
        echo        ║  - ADMIN_USERNAME        (admin login)      ║
        echo        ║  - ADMIN_PASSWORD        (admin login)      ║
        echo        ╚══════════════════════════════════════════════╝
        echo.
    ) else (
        echo        ❌ .env.example not found! Cannot create .env.
    )
) else (
    echo        ✅ .env file exists
)

:: ──────────────────────────────────────────────
:: Step 5 — Install dependencies
:: ──────────────────────────────────────────────
echo  [5/5] Installing dependencies...
echo.

echo        📦 Installing Frontend packages...
cd /d "%~dp0"
call npm install
if %errorlevel% neq 0 (
    echo.
    echo        ❌ Frontend npm install failed!
    pause
    exit /b 1
)
echo        ✅ Frontend packages installed
echo.

echo        📦 Installing Backend packages...
cd /d "%~dp0backend"
call npm install
if %errorlevel% neq 0 (
    echo.
    echo        ❌ Backend npm install failed!
    cd /d "%~dp0"
    pause
    exit /b 1
)
echo        ✅ Backend packages installed
cd /d "%~dp0"
echo.

:: ──────────────────────────────────────────────
:: Done!
:: ──────────────────────────────────────────────
color 0A
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║         ✅ Installation Complete!             ║
echo  ║                                              ║
echo  ║  Next step: Double-click start.bat           ║
echo  ╚══════════════════════════════════════════════╝
echo.
pause
