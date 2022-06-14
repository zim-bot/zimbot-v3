#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*|*MINGW*|*MSYS*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir//bin/bash" ]; then
  exec "$basedir//bin/bash"  "$basedir/../yt-search/bin/mpv_audio.sh" "$@"
else 
  exec /bin/bash  "$basedir/../yt-search/bin/mpv_audio.sh" "$@"
fi
