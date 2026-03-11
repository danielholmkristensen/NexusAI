# Agentic Agency MCP Server

Custom MCP (Model Context Protocol) server for managing HubSpot forms and Vercel environment variables directly from Claude Code.

## Features

### HubSpot Tools
- `hubspot_list_forms` - List all forms
- `hubspot_get_form` - Get form details by ID
- `hubspot_create_form` - Create new forms with custom fields
- `hubspot_update_form` - Update existing forms
- `hubspot_delete_form` - Delete forms

### Vercel Tools
- `vercel_list_projects` - List all projects
- `vercel_list_env_vars` - List environment variables
- `vercel_get_env_var` - Get env var details
- `vercel_create_env_var` - Create new env vars
- `vercel_update_env_var` - Update env vars
- `vercel_delete_env_var` - Delete env vars
- `vercel_redeploy` - Trigger redeployment after env changes

## Setup

### 1. Install dependencies

```bash
cd mcp-server
npm install
```

### 2. Get API tokens

**HubSpot Private App Token:**
1. Go to HubSpot → Settings → Integrations → Private Apps
2. Create a new private app
3. Add scopes: `forms` (read/write)
4. Copy the access token

**Vercel Token:**
1. Go to https://vercel.com/account/tokens
2. Create a new token with appropriate scope
3. Copy the token

**Vercel Project ID:**
1. Go to your project in Vercel dashboard
2. Settings → General → Project ID
3. Copy the project ID

### 3. Configure Claude Code

Add the MCP server to Claude Code:

```bash
claude mcp add agentic-agency \
  --env HUBSPOT_PRIVATE_APP_TOKEN=your_hubspot_token \
  --env VERCEL_TOKEN=your_vercel_token \
  --env VERCEL_PROJECT_ID=your_project_id \
  -- node /Users/dhk/Projects/NexusAI/mcp-server/index.js
```

Or manually edit `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "agentic-agency": {
      "command": "node",
      "args": ["/Users/dhk/Projects/NexusAI/mcp-server/index.js"],
      "env": {
        "HUBSPOT_PRIVATE_APP_TOKEN": "your_hubspot_token",
        "VERCEL_TOKEN": "your_vercel_token",
        "VERCEL_PROJECT_ID": "your_project_id",
        "VERCEL_TEAM_ID": "your_team_id"
      }
    }
  }
}
```

### 4. Restart Claude Code

After configuration, restart Claude Code to load the MCP server.

## Usage Examples

Once configured, you can ask Claude to:

### Create a HubSpot form

```
Create a HubSpot inquiry form with these fields:
- Name (required)
- Email (required)
- Mobile phone
- Company
- Product interest (dropdown with: Spark, Catalyst, Scale Engine, General)
- Message (textarea)
- Inquiry source (hidden)
```

### Add Vercel environment variable

```
Add the environment variable VITE_HUBSPOT_INQUIRY_FORM_GUID with value "abc-123"
to the staging and production environments, then redeploy.
```

### List and manage

```
Show me all HubSpot forms and Vercel environment variables for this project.
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `HUBSPOT_PRIVATE_APP_TOKEN` | Yes (for HubSpot) | HubSpot private app access token |
| `VERCEL_TOKEN` | Yes (for Vercel) | Vercel API token |
| `VERCEL_PROJECT_ID` | Optional | Default project ID |
| `VERCEL_TEAM_ID` | Optional | Team ID for team-owned projects |

## Security Notes

- Store tokens securely - never commit them to git
- Use environment-specific tokens with minimal required scopes
- The MCP server runs locally and communicates via stdio
- Tokens are only sent to HubSpot/Vercel APIs, never to Anthropic

## Troubleshooting

**"HUBSPOT_PRIVATE_APP_TOKEN not set"**
- Ensure the env var is set in Claude Code's MCP config

**"Vercel API error: 403"**
- Check token has correct scopes
- Verify VERCEL_TEAM_ID if using team projects

**Tool not appearing in Claude Code**
- Run `/mcp` in Claude Code to check server status
- Check `~/.claude/settings.json` for correct config
- Restart Claude Code after config changes
