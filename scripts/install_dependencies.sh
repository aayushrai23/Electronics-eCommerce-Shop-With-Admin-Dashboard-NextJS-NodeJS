#!/bin/bash
echo "📦 Installing dependencies..."
cd /home/ubuntu/app
npm ci
npm install -g prisma
npx prisma generate
