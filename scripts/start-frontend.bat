@echo off
echo Starting Gestao Kids Frontend...
cd /d "%~dp0..\frontend"
echo.
echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo npm install failed! Please check the errors above.
    pause
    exit /b 1
)
echo.
echo Starting Angular development server...
call npm start
pause
