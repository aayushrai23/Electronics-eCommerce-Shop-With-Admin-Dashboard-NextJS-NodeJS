#!/bin/bash
cd /home/ubuntu/app
echo "Installing dependencies..."
npm install
npm install -g prisma
npx prisma generate
