#!/bin/bash

HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
NEWLINE="
"

STYLE="./css/style.css"
STYLE_MIN="./css/style.min.css"
STYLE_LESS="./less/style.less"

echo "$NEWLINE"
echo "$HR"
echo "# Building carey"
echo "$HR"
echo "$NEWLINE"

echo "Compiling $STYLE_LESS to $STYLE"
#recess less/style.less --compile > css/style.css

echo "Compiling $STYLE_LESS to $STYLE_MIN"
#recess less/style.less --compress > css/style.min.css