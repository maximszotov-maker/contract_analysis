#!/bin/bash
# Security maintenance script - Run weekly
# Usage: ./maintenance.sh

set -e

echo "🔒 Security Maintenance Script"
echo "================================"
echo ""

# 1. Check for updates
echo "📦 1. Checking for outdated packages..."
npm outdated || true
echo ""

# 2. Security audit
echo "🔍 2. Running security audit..."
npm audit
echo ""

# 3. Check for critical vulnerabilities
echo "⚠️  3. Checking for critical vulnerabilities..."
AUDIT_RESULT=$(npm audit --audit-level=critical --json 2>/dev/null || echo "{}")
CRITICAL_COUNT=$(echo "$AUDIT_RESULT" | grep -o '"critical":[0-9]*' | grep -o '[0-9]*' || echo "0")

if [ "$CRITICAL_COUNT" -gt 0 ]; then
    echo "❌ Found $CRITICAL_COUNT critical vulnerabilities!"
    echo "Run: npm audit fix --force"
    exit 1
else
    echo "✅ No critical vulnerabilities found"
fi
echo ""

# 4. Update dependencies (with confirmation)
echo "📦 4. Available updates:"
npm outdated || true
echo ""
read -p "Do you want to update dependencies? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Updating dependencies..."
    npm update
    echo "✅ Dependencies updated"
else
    echo "⏭️  Skipped updates"
fi
echo ""

# 5. Check Docker logs for suspicious activity
echo "🐳 5. Checking Docker logs for suspicious activity..."
if docker compose logs --tail=100 | grep -iE "error|fail|malicious|wget|curl.*http" | head -10; then
    echo "⚠️  Found suspicious activity in logs - review above"
else
    echo "✅ No obvious suspicious activity in recent logs"
fi
echo ""

# 6. Verify .env files are in .gitignore
echo "🔐 6. Checking .env file security..."
if grep -q "^\.env" .gitignore 2>/dev/null; then
    echo "✅ .env files are properly ignored by git"
else
    echo "⚠️  Adding .env to .gitignore"
    echo ".env" >> .gitignore
    echo ".env.local" >> .gitignore
    echo ".env.production" >> .gitignore
fi
echo ""

echo "================================"
echo "✅ Maintenance check completed!"
echo ""
echo "Next steps:"
echo "1. Review any suspicious log entries"
echo "2. Test the application after updates"
echo "3. Rebuild Docker if dependencies were updated: docker compose build"
