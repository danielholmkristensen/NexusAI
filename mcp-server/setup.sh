#!/bin/bash

# Agentic Agency MCP Server Setup
# This script helps configure the MCP server for Claude Code

set -e

MCP_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== Agentic Agency MCP Server Setup ==="
echo ""

# Check if tokens are set
if [ -z "$HUBSPOT_PRIVATE_APP_TOKEN" ]; then
  echo "Enter your HubSpot Private App Token:"
  read -s HUBSPOT_TOKEN
  echo ""
else
  HUBSPOT_TOKEN="$HUBSPOT_PRIVATE_APP_TOKEN"
  echo "Using HUBSPOT_PRIVATE_APP_TOKEN from environment"
fi

if [ -z "$VERCEL_TOKEN" ]; then
  echo "Enter your Vercel API Token:"
  read -s VERCEL_TOK
  echo ""
else
  VERCEL_TOK="$VERCEL_TOKEN"
  echo "Using VERCEL_TOKEN from environment"
fi

if [ -z "$VERCEL_PROJECT_ID" ]; then
  echo "Enter your Vercel Project ID (or press Enter to skip):"
  read VERCEL_PROJ
  echo ""
else
  VERCEL_PROJ="$VERCEL_PROJECT_ID"
  echo "Using VERCEL_PROJECT_ID from environment"
fi

if [ -z "$VERCEL_TEAM_ID" ]; then
  echo "Enter your Vercel Team ID (or press Enter to skip):"
  read VERCEL_TEAM
  echo ""
else
  VERCEL_TEAM="$VERCEL_TEAM_ID"
  echo "Using VERCEL_TEAM_ID from environment"
fi

# Build the claude mcp add command
CMD="claude mcp add agentic-agency"

if [ -n "$HUBSPOT_TOKEN" ]; then
  CMD="$CMD --env HUBSPOT_PRIVATE_APP_TOKEN=$HUBSPOT_TOKEN"
fi

if [ -n "$VERCEL_TOK" ]; then
  CMD="$CMD --env VERCEL_TOKEN=$VERCEL_TOK"
fi

if [ -n "$VERCEL_PROJ" ]; then
  CMD="$CMD --env VERCEL_PROJECT_ID=$VERCEL_PROJ"
fi

if [ -n "$VERCEL_TEAM" ]; then
  CMD="$CMD --env VERCEL_TEAM_ID=$VERCEL_TEAM"
fi

CMD="$CMD -- node $MCP_DIR/index.js"

echo ""
echo "Running: claude mcp add agentic-agency ..."
echo ""

eval $CMD

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Restart Claude Code to load the MCP server."
echo "Then run /mcp to verify it's connected."
echo ""
echo "Available tools:"
echo "  - hubspot_list_forms"
echo "  - hubspot_create_form"
echo "  - vercel_list_env_vars"
echo "  - vercel_create_env_var"
echo "  - vercel_redeploy"
echo ""
