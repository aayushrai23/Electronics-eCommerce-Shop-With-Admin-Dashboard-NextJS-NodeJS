#!/bin/bash
echo "🛑 Stopping existing Next.js app..."
pkill -f "next start" || true
