@echo off
REM ═══════════════════════════════════════════════════════════════
REM  CrystaSkill — Hostinger VPS One-Click Connect + Deploy
REM ═══════════════════════════════════════════════════════════════
REM  Bas apna VPS IP daalo aur yeh script sab kar degi!
REM ═══════════════════════════════════════════════════════════════

echo.
echo =============================================
echo   CrystaSkill - Hostinger VPS Deploy Tool
echo =============================================
echo.

REM Ask for VPS IP
set /p VPS_IP="Apna Hostinger VPS IP daalo: "

if "%VPS_IP%"=="" (
    echo ERROR: IP address daalna zaroori hai!
    pause
    exit /b 1
)

REM Update SSH config with actual IP
echo Updating SSH config...
(
echo Host hostinger-vps
echo     HostName %VPS_IP%
echo     User root
echo     Port 22
echo     ServerAliveInterval 60
echo     ServerAliveCountMax 3
) > "%USERPROFILE%\.ssh\config"

echo.
echo [1/3] SSH Config updated with IP: %VPS_IP%
echo.

REM Step 2: Upload files via SCP
echo [2/3] Uploading project files to VPS...
echo   (Password puchega — Hostinger VPS ka root password daalo)
echo.

ssh root@%VPS_IP% "mkdir -p /var/www/crystaskill"
scp -r "%~dp0*" root@%VPS_IP%:/var/www/crystaskill/

echo.
echo [3/3] Running deploy script on VPS...
echo.

ssh root@%VPS_IP% "cd /var/www/crystaskill && chmod +x deploy/deploy.sh && bash deploy/deploy.sh"

echo.
echo =============================================
echo   Done! Ab VS Code me connect karo:
echo   Ctrl+Shift+P ^> "Remote-SSH: Connect to Host"
echo   Select: hostinger-vps
echo =============================================
echo.
pause
