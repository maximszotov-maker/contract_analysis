#!/bin/bash

# Deploy script for Contract Landing Page

echo "🚀 Deploying Contract Landing Page..."

# Stop current dev server if running
echo "📦 Stopping any running processes..."
pkill -f "next dev" || true

# Stop and remove old containers
echo "🛑 Stopping old containers..."
docker-compose down

# Build new image
echo "🔨 Building Docker image..."
docker-compose build

# Start container
echo "▶️ Starting container..."
docker-compose up -d

# Check status
echo "✅ Checking container status..."
docker-compose ps

echo ""
echo "🎉 Deployment complete!"
echo "📍 Site available at: https://contract.worksforme.ru"
echo ""
echo "📊 View logs: docker-compose logs -f"
echo "🔄 Restart: docker-compose restart"
echo "🛑 Stop: docker-compose down"
