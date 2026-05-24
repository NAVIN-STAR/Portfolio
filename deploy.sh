#!/bin/bash
set -e

# Configuration variables passed from the YAML environment
SERVER_USER=$1
TARGET_DIR="/opt/apps/Portfolio"

echo "🎯 Targeted Server Directory: $TARGET_DIR"

# 1. Clear out old production assets on the server safely
echo "🧹 Cleaning up old production build..."
ssh -o StrictHostKeyChecking=no ssh.nabinlabs.in "rm -rf $TARGET_DIR/dist_old && mkdir -p $TARGET_DIR"

# 2. Securely copy the freshly built 'dist' folder over the Cloudflare tunnel
echo "🚀 Transferring new build artifacts..."
scp -o StrictHostKeyChecking=no -r ./dist ssh.nabinlabs.in:$TARGET_DIR/dist_new

# 3. Swap the directories atomically to minimize downtime to zero milliseconds
echo "🔄 Activating new build..."
ssh -o StrictHostKeyChecking=no ssh.nabinlabs.in "
    if [ -d '$TARGET_DIR/dist' ]; then mv $TARGET_DIR/dist $TARGET_DIR/dist_old; fi && \
    mv $TARGET_DIR/dist_new $TARGET_DIR/dist && \
    rm -rf $TARGET_DIR/dist_old
"

echo "🎉 Portfolio is successfully live!"