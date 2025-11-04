#!/bin/bash
echo "Stopping any running app..."
sudo pkill -f "next start" || true
