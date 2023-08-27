@echo off

:loop
echo git add .
echo git commit -m "Updated Code"
echo git push
echo Pushed to GIT. Pushing every 5 mins

timeout /t 120 /nobreak > nul
echo.
echo.

goto loop
