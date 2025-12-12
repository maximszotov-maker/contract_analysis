# Automated Security Best Practices

This directory contains scripts and configurations to implement security best practices for the Contract Analysis project.

## Scripts

### 1. `maintenance.sh` - Weekly Security Maintenance
**Purpose**: Check for updates and security vulnerabilities

**What it does:**
- Checks for outdated NPM packages
- Runs security audit
- Detects critical vulnerabilities
- Prompts for dependency updates
- Checks Docker logs for suspicious activity
- Verifies .env files are in .gitignore

**Usage:**
```bash
./maintenance.sh
```

**Schedule:** Weekly (Sundays at 2 AM via cron)

---

### 2. `backup.sh` - Automated Backups
**Purpose**: Create regular backups of project files

**What it does:**
- Creates compressed backup of project files
- Excludes node_modules, .next, and .git
- Stores in `/var/backups/contract-analysis/`
- Keeps only last 7 backups

**Usage:**
```bash
./backup.sh
```

**Restore from backup:**
```bash
cd /var/www/contract
tar -xzf /var/backups/contract-analysis/contract-backup-TIMESTAMP.tar.gz
```

**Schedule:** Daily (3 AM via cron)

---

### 3. `monitor-logs.sh` - Log Monitoring
**Purpose**: Monitor Docker logs for suspicious activity

**What it does:**
- Checks last 1000 log lines
- Searches for suspicious patterns (wget, curl, rm -rf, etc.)
- Alerts if potential security issues found
- Shows recent log entries

**Usage:**
```bash
./monitor-logs.sh
```

**Schedule:** Daily (1 AM via cron)

---

## Setup Automated Execution

### Install Cron Jobs

```bash
# Create log files
sudo mkdir -p /var/log
sudo touch /var/log/contract-{maintenance,backup,monitor}.log
sudo chown $USER:$USER /var/log/contract-*.log

# Edit crontab
crontab -e

# Add these lines:
0 2 * * 0 cd /var/www/contract/web-app && ./maintenance.sh >> /var/log/contract-maintenance.log 2>&1
0 3 * * * cd /var/www/contract/web-app && ./backup.sh >> /var/log/contract-backup.log 2>&1
0 1 * * * cd /var/www/contract/web-app && ./monitor-logs.sh >> /var/log/contract-monitor.log 2>&1
```

### View Logs

```bash
# Maintenance logs
tail -f /var/log/contract-maintenance.log

# Backup logs
tail -f /var/log/contract-backup.log

# Monitor logs
tail -f /var/log/contract-monitor.log
```

---

## Manual Testing

Before setting up cron jobs, test each script manually:

```bash
cd /var/www/contract/web-app

# Test maintenance
./maintenance.sh

# Test backup
./backup.sh

# Test monitoring
./monitor-logs.sh
```

---

## Best Practices Checklist

- ✅ **Regular Updates**: Automated via `maintenance.sh`
- ✅ **Review Dependencies**: Prompted in `maintenance.sh`
- ✅ **Monitor Logs**: Automated via `monitor-logs.sh`
- ✅ **Backup Regularly**: Automated via `backup.sh`
- ✅ **Use .env Files**: Verified in `maintenance.sh` and `.gitignore`

---

## Security Tips

1. **Review logs regularly**: Check `/var/log/contract-*.log` files
2. **Test backups**: Occasionally verify backup restoration works
3. **Keep scripts updated**: Review and improve patterns in `monitor-logs.sh`
4. **Respond quickly**: Address any issues found by scripts immediately
5. **Document changes**: Note any modifications to these scripts in Git
