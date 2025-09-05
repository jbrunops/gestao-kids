@echo off
echo Starting Gestao Kids Backend...
cd /d "%~dp0..\backend"
echo.
echo Building project...
call mvn clean compile
if %ERRORLEVEL% neq 0 (
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)
echo.
echo Starting Spring Boot application...
call mvn spring-boot:run
pause
