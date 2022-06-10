#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir//bin/bash$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir//bin/bash$exe"  "$basedir/../yt-search/bin/mpv_audio.sh" $args
  } else {
    & "$basedir//bin/bash$exe"  "$basedir/../yt-search/bin/mpv_audio.sh" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "/bin/bash$exe"  "$basedir/../yt-search/bin/mpv_audio.sh" $args
  } else {
    & "/bin/bash$exe"  "$basedir/../yt-search/bin/mpv_audio.sh" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret
