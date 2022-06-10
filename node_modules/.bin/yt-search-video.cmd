@ECHO off
GOTO start
:find_dp0
SET dp0=%~dp0
EXIT /b
:start
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\/bin/bash.exe" (
  SET "_prog=%dp0%\/bin/bash.exe"
) ELSE (
  SET "_prog=/bin/bash"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & "%_prog%"  "%dp0%\..\yt-search\bin\mpv_video.sh" %*
