#!/bin/bash
# Backup script for Contract Analysis project
# Usage: ./backup.sh

set -e

BACKUP_DIR="/var/backups/contract-analysis"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="contract-backup-$TIMESTAMP"

echo "🗄️  Creating backup: $BACKUP_NAME"
echo "================================"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create temporary backup folder
TEMP_BACKUP="/tmp/$BACKUP_NAME"
mkdir -p "$TEMP_BACKUP"

echo "📁 Backing up project files..."
# Copy important files (excluding node_modules, .next, .git)
rsync -av \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='*.log' \
    /var/www/contract/web-app/ \
    "$TEMP_BACKUP/"

echo "📦 Creating compressed archive..."
cd /tmp
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" "$BACKUP_NAME"

# Clean up temp folder
rm -rf "$TEMP_BACKUP"

echo "✅ Backup created: $BACKUP_DIR/$BACKUP_NAME.tar.gz"

# Keep only last 7 backups
echo "🧹 Cleaning old backups (keeping last 7)..."
cd "$BACKUP_DIR"
ls -t contract-backup-*.tar.gz | tail -n +8 | xargs -r rm

echo ""
echo "📊 Current backups:"
ls -lh "$BACKUP_DIR"/contract-backup-*.tar.gz 2>/dev/null || echo "No backups found"

echo ""
echo "================================"
echo "✅ Backup completed successfully!"
