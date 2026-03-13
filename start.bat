@echo off
chcp 65001 >nul 2>&1
title CrystaSkill — Dev Server
color 0A

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║         CrystaSkill Dev Server               ║
echo  ║         Frontend + Backend Launcher           ║
echo  ╚══════════════════════════════════════════════╝
echo.

:: ──────────────────────────────────────────────
:: Step 0 — Kill leftover node processes
:: ──────────────────────────────────────────────
echo  [0/4] Cleaning up old processes...
taskkill /f /im node.exe >nul 2>&1
timeout /t 2 /nobreak >nul
echo        Done.
echo.

:: ──────────────────────────────────────────────
:: Step 1 — Check Node.js
:: ──────────────────────────────────────────────
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js is not installed!
    echo          Download from https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do echo  [✓] Node.js %%v

:: ──────────────────────────────────────────────
:: Step 2 — Check dependencies + .env
:: ──────────────────────────────────────────────
if not exist "%~dp0node_modules\" (
    echo.
    echo  [ERROR] Dependencies not installed!
    echo          Run install.bat first.
    pause
    exit /b 1
)
echo  [✓] Dependencies installed.

if not exist "%~dp0.env" (
    echo.
    echo  [ERROR] .env file not found!
    echo          Run install.bat first, or copy .env.example to .env
    pause
    exit /b 1
)
echo  [✓] .env file found.

:: ──────────────────────────────────────────────
:: Step 4 — Start Backend (Express + MongoDB)
:: ──────────────────────────────────────────────
echo.
echo  [2/4] Starting Backend (port 5000)...
cd /d "%~dp0"
start "CrystaSkill-Backend" /min cmd /k "cd /d "%~dp0" && node backend/server.js"
timeout /t 3 /nobreak >nul
echo        Backend started (minimized window).

:: ──────────────────────────────────────────────
:: Step 5 — Start Frontend (Next.js)
:: ──────────────────────────────────────────────
echo  [3/4] Starting Frontend (port 9002)...
start "CrystaSkill-Frontend" /min cmd /k "cd /d "%~dp0" && npm run dev"
timeout /t 6 /nobreak >nul
echo        Frontend started (minimized window).

:: ──────────────────────────────────────────────
:: Step 6 — Open browser
:: ──────────────────────────────────────────────
echo  [4/4] Opening browser...
timeout /t 3 /nobreak >nul
start http://localhost:9002

echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║  ✅ ALL SERVERS RUNNING                       ║
echo  ║                                              ║
echo  ║  Frontend → http://localhost:9002             ║
echo  ║  Backend  → http://localhost:5000/api         ║
echo  ║  Health   → http://localhost:5000/api/health  ║
echo  ║                                              ║
echo  ║  Press any key to STOP all servers.           ║
echo  ╚══════════════════════════════════════════════╝
echo.
pause >nul

echo.
echo  Shutting down all servers...
taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Backend" >nul 2>&1
taskkill /f /fi "WINDOWTITLE eq CrystaSkill-Frontend" >nul 2>&1
taskkill /f /im node.exe >nul 2>&1
echo  All servers stopped. Goodbye!
timeout /t 2 /nobreak >nul
