#!/bin/bash
# Log monitoring script - Check for suspicious activity
# Usage: ./monitor-logs.sh

set -e

echo "🔍 Monitoring Docker Logs for Suspicious Activity"
echo "=================================================="
echo ""

# Check last 1000 lines of logs
LOGS=$(docker compose logs --tail=1000 2>/dev/null || echo "")

# Patterns to watch for
SUSPICIOUS_PATTERNS=(
    "wget"
    "curl.*http://"
    "rm -rf"
    "chmod 777"
    "passwd"
    "malicious"
    "crypto"
    "mining"
    "/tmp/.*\.sh"
    "pkill"
    "nohup"
)

FOUND_ISSUES=0

echo "🕵️  Checking for suspicious patterns..."
for pattern in "${SUSPICIOUS_PATTERNS[@]}"; do
    MATCHES=$(echo "$LOGS" | grep -iE "$pattern" | wc -l)
    if [ "$MATCHES" -gt 0 ]; then
        echo "⚠️  Found $MATCHES matches for pattern: $pattern"
        echo "$LOGS" | grep -iE "$pattern" | tail -5 | sed 's/^/  /'
        echo ""
        FOUND_ISSUES=$((FOUND_ISSUES + MATCHES))
    fi
done

echo "=================================================="
if [ "$FOUND_ISSUES" -gt 0 ]; then
    echo "❌ Found $FOUND_ISSUES suspicious log entries!"
    echo ""
    echo "Recommendations:"
    echo "1. Review the logs above carefully"
    echo "2. Consider restarting the container: docker compose restart"
    echo "3. Check for compromised dependencies: npm audit"
    echo "4. Review recent code changes"
    exit 1
else
    echo "✅ No obvious suspicious activity detected"
    echo ""
    echo "Last 5 log entries:"
    echo "$LOGS" | tail -5 | sed 's/^/  /'
fi

echo ""
echo "To view full logs: docker compose logs -f"
