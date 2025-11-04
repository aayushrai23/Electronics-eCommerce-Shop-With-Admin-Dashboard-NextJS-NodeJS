#!/bin/bash
cd /home/ubuntu/app
echo "Starting Next.js app..."
nohup npm run start > app.log 2>&1 &
