#!/bin/bash

cd "$(dirname "$0")"  # Change to the directory where the script is located
i=0  # Start counting from 0
for img in *; do
    # Check if the file is an image (adjust pattern as necessary)
    if [[ $img =~ \.(jpg|jpeg|png|gif)$ ]]; then
        mv "$img" "img-$i.${img##*.}"  # Rename and keep the file extension
        ((i++))  # Increment counter
    fi
done

