#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Environment variables (set these before running)
const HUBSPOT_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID; // Optional

// ============================================================================
// HubSpot API Functions
// ============================================================================

async function hubspotRequest(method, endpoint, body = null) {
  if (!HUBSPOT_TOKEN) {
    throw new Error("HUBSPOT_PRIVATE_APP_TOKEN environment variable is not set");
  }

  const url = `https://api.hubapi.com${endpoint}`;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HubSpot API error: ${JSON.stringify(data)}`);
  }

  return data;
}

async function listHubSpotForms() {
  return await hubspotRequest("GET", "/marketing/v3/forms/");
}

async function getHubSpotForm(formId) {
  return await hubspotRequest("GET", `/marketing/v3/forms/${formId}`);
}

async function createHubSpotForm(name, fieldGroups, options = {}) {
  const body = {
    name,
    formType: "hubspot",
    fieldGroups,
    configuration: {
      language: options.language || "en",
      createNewContactForNewEmail: true,
      editable: true,
      allowLinkToResetKnownValues: false,
      lifecycleStages: [],
    },
    displayOptions: {
      renderRawHtml: false,
      cssClass: "",
      submitButtonText: options.submitButtonText || "Submit",
    },
    legalConsentOptions: {
      type: "none",
    },
    ...options,
  };

  return await hubspotRequest("POST", "/marketing/v3/forms/", body);
}

async function updateHubSpotForm(formId, updates) {
  return await hubspotRequest("PATCH", `/marketing/v3/forms/${formId}`, updates);
}

async function deleteHubSpotForm(formId) {
  return await hubspotRequest("DELETE", `/marketing/v3/forms/${formId}`);
}

// ============================================================================
// Vercel API Functions
// ============================================================================

async function vercelRequest(method, endpoint, body = null) {
  if (!VERCEL_TOKEN) {
    throw new Error("VERCEL_TOKEN environment variable is not set");
  }

  let url = `https://api.vercel.com${endpoint}`;
  if (VERCEL_TEAM_ID) {
    url += (url.includes("?") ? "&" : "?") + `teamId=${VERCEL_TEAM_ID}`;
  }

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  // Handle 204 No Content (for DELETE)
  if (response.status === 204) {
    return { success: true };
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Vercel API error: ${JSON.stringify(data)}`);
  }

  return data;
}

async function listVercelEnvVars(projectId) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required (set VERCEL_PROJECT_ID or pass projectId)");
  }
  return await vercelRequest("GET", `/v9/projects/${pid}/env`);
}

async function getVercelEnvVar(projectId, envId) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required");
  }
  return await vercelRequest("GET", `/v9/projects/${pid}/env/${envId}`);
}

async function createVercelEnvVar(projectId, key, value, targets = ["production", "preview", "development"]) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required");
  }

  return await vercelRequest("POST", `/v10/projects/${pid}/env`, {
    key,
    value,
    type: "encrypted",
    target: targets,
  });
}

async function updateVercelEnvVar(projectId, envId, value, targets) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required");
  }

  const body = { value };
  if (targets) {
    body.target = targets;
  }

  return await vercelRequest("PATCH", `/v9/projects/${pid}/env/${envId}`, body);
}

async function deleteVercelEnvVar(projectId, envId) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required");
  }
  return await vercelRequest("DELETE", `/v9/projects/${pid}/env/${envId}`);
}

async function listVercelProjects() {
  return await vercelRequest("GET", "/v9/projects");
}

async function triggerVercelRedeploy(projectId, deploymentId) {
  const pid = projectId || VERCEL_PROJECT_ID;
  if (!pid) {
    throw new Error("Project ID is required");
  }

  // Get latest deployment if not specified
  if (!deploymentId) {
    const deployments = await vercelRequest("GET", `/v6/deployments?projectId=${pid}&limit=1`);
    if (deployments.deployments && deployments.deployments.length > 0) {
      deploymentId = deployments.deployments[0].uid;
    } else {
      throw new Error("No deployments found to redeploy");
    }
  }

  return await vercelRequest("POST", `/v13/deployments?forceNew=1`, {
    name: pid,
    deploymentId,
  });
}

// ============================================================================
// MCP Server Setup
// ============================================================================

const server = new Server(
  {
    name: "agentic-agency-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      // HubSpot Form Tools
      {
        name: "hubspot_list_forms",
        description: "List all HubSpot forms in the account",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "hubspot_get_form",
        description: "Get details of a specific HubSpot form by ID",
        inputSchema: {
          type: "object",
          properties: {
            formId: {
              type: "string",
              description: "The HubSpot form ID (GUID)",
            },
          },
          required: ["formId"],
        },
      },
      {
        name: "hubspot_create_form",
        description: "Create a new HubSpot form with specified fields. Common field types: email, text (single line), textarea (multi-line), select, number, phone. Common field names: email, firstname, lastname, company, phone, mobilephone, message.",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name of the form",
            },
            fields: {
              type: "array",
              description: "Array of field definitions",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Internal field name (e.g., 'email', 'firstname', 'mobilephone')",
                  },
                  label: {
                    type: "string",
                    description: "Display label for the field",
                  },
                  fieldType: {
                    type: "string",
                    enum: ["text", "textarea", "email", "phone", "select", "number", "checkbox", "radio"],
                    description: "Type of form field",
                  },
                  required: {
                    type: "boolean",
                    description: "Whether the field is required",
                  },
                  hidden: {
                    type: "boolean",
                    description: "Whether the field is hidden",
                  },
                  options: {
                    type: "array",
                    description: "Options for select/radio fields",
                    items: {
                      type: "object",
                      properties: {
                        label: { type: "string" },
                        value: { type: "string" },
                      },
                    },
                  },
                },
                required: ["name", "label", "fieldType"],
              },
            },
            submitButtonText: {
              type: "string",
              description: "Text for the submit button (default: 'Submit')",
            },
          },
          required: ["name", "fields"],
        },
      },
      {
        name: "hubspot_update_form",
        description: "Update an existing HubSpot form",
        inputSchema: {
          type: "object",
          properties: {
            formId: {
              type: "string",
              description: "The HubSpot form ID to update",
            },
            name: {
              type: "string",
              description: "New name for the form (optional)",
            },
            fieldGroups: {
              type: "array",
              description: "Updated field groups (optional)",
            },
          },
          required: ["formId"],
        },
      },
      {
        name: "hubspot_delete_form",
        description: "Delete a HubSpot form by ID",
        inputSchema: {
          type: "object",
          properties: {
            formId: {
              type: "string",
              description: "The HubSpot form ID to delete",
            },
          },
          required: ["formId"],
        },
      },

      // Vercel Environment Variable Tools
      {
        name: "vercel_list_env_vars",
        description: "List all environment variables for a Vercel project",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name (optional if VERCEL_PROJECT_ID is set)",
            },
          },
        },
      },
      {
        name: "vercel_get_env_var",
        description: "Get details of a specific environment variable",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name",
            },
            envId: {
              type: "string",
              description: "Environment variable ID",
            },
          },
          required: ["envId"],
        },
      },
      {
        name: "vercel_create_env_var",
        description: "Create a new environment variable in a Vercel project",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name (optional if VERCEL_PROJECT_ID is set)",
            },
            key: {
              type: "string",
              description: "Environment variable name (e.g., 'VITE_API_KEY')",
            },
            value: {
              type: "string",
              description: "Environment variable value",
            },
            targets: {
              type: "array",
              items: {
                type: "string",
                enum: ["production", "preview", "development"],
              },
              description: "Deployment targets (default: all)",
            },
          },
          required: ["key", "value"],
        },
      },
      {
        name: "vercel_update_env_var",
        description: "Update an existing environment variable",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name",
            },
            envId: {
              type: "string",
              description: "Environment variable ID to update",
            },
            value: {
              type: "string",
              description: "New value for the environment variable",
            },
            targets: {
              type: "array",
              items: {
                type: "string",
                enum: ["production", "preview", "development"],
              },
              description: "Updated deployment targets (optional)",
            },
          },
          required: ["envId", "value"],
        },
      },
      {
        name: "vercel_delete_env_var",
        description: "Delete an environment variable from a Vercel project",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name",
            },
            envId: {
              type: "string",
              description: "Environment variable ID to delete",
            },
          },
          required: ["envId"],
        },
      },
      {
        name: "vercel_list_projects",
        description: "List all Vercel projects in the account/team",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "vercel_redeploy",
        description: "Trigger a redeployment of the latest deployment (useful after adding env vars)",
        inputSchema: {
          type: "object",
          properties: {
            projectId: {
              type: "string",
              description: "Vercel project ID or name",
            },
          },
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    let result;

    switch (name) {
      // HubSpot Form Tools
      case "hubspot_list_forms":
        result = await listHubSpotForms();
        break;

      case "hubspot_get_form":
        result = await getHubSpotForm(args.formId);
        break;

      case "hubspot_create_form": {
        // Convert simple field array to HubSpot's fieldGroups format
        const fieldGroups = args.fields.map((field) => ({
          groupType: "default_group",
          richTextType: "text",
          fields: [
            {
              name: field.name,
              label: field.label,
              fieldType: field.fieldType,
              objectTypeId: "0-1", // Contact object
              required: field.required || false,
              hidden: field.hidden || false,
              ...(field.options && {
                options: field.options,
              }),
            },
          ],
        }));

        result = await createHubSpotForm(args.name, fieldGroups, {
          submitButtonText: args.submitButtonText,
        });
        break;
      }

      case "hubspot_update_form":
        result = await updateHubSpotForm(args.formId, {
          ...(args.name && { name: args.name }),
          ...(args.fieldGroups && { fieldGroups: args.fieldGroups }),
        });
        break;

      case "hubspot_delete_form":
        result = await deleteHubSpotForm(args.formId);
        break;

      // Vercel Environment Variable Tools
      case "vercel_list_env_vars":
        result = await listVercelEnvVars(args.projectId);
        break;

      case "vercel_get_env_var":
        result = await getVercelEnvVar(args.projectId, args.envId);
        break;

      case "vercel_create_env_var":
        result = await createVercelEnvVar(
          args.projectId,
          args.key,
          args.value,
          args.targets
        );
        break;

      case "vercel_update_env_var":
        result = await updateVercelEnvVar(
          args.projectId,
          args.envId,
          args.value,
          args.targets
        );
        break;

      case "vercel_delete_env_var":
        result = await deleteVercelEnvVar(args.projectId, args.envId);
        break;

      case "vercel_list_projects":
        result = await listVercelProjects();
        break;

      case "vercel_redeploy":
        result = await triggerVercelRedeploy(args.projectId);
        break;

      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Agentic Agency MCP server running on stdio");
}

main().catch(console.error);
