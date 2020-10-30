#!/bin/bash

`for file in 16/*; do cwebp -q 70 "$file" -o "${file%.*}.webp"; done`
