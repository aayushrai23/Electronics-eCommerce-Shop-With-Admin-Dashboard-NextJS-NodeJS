#!/bin/bash
echo "🚀 Starting Next.js app..."
cd /home/ubuntu/app
nohup npm run start >> app.log 2>&1 &
echo "App started at $(date)" >> app.log
