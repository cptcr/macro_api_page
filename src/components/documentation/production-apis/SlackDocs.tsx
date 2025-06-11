import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, MessageSquare, Hash, Bell } from 'lucide-react';

const SlackDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-purple-600 dark:text-purple-400">
            <MessageSquare className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Slack API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Team communication and workflow automation
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Messages
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            File Sharing
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Channel Management
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Slash Commands
          </span>
        </div>
      </div>

      ## Overview

      The Slack API wrapper provides comprehensive integration for team communication, file sharing, and workflow automation. 
      Build powerful Slack bots, automate team notifications, and create custom slash commands with ease.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <MessageSquare className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Message Sending</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Send rich messages with attachments and formatting</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">File Sharing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Upload and share files in channels</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Hash className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Channel Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create and manage channels programmatically</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">User Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Get user info and manage interactions</p>
        </div>
      </div>

      ## Installation

      <CodeExampleSwitcher
        typescript="npm install macro_api"
        javascript="npm install macro_api"
        title="Install the package"
      />

      ## Quick Start

      <CodeExampleSwitcher
        typescript={`import { SlackAPI } from 'macro_api';

// Initialize the client
const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Send a simple message
async function sendMessage() {
  try {
    await slack.sendMessage('#general', 'Hello from macro_api!');
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
}`}
        javascript={`const { SlackAPI } = require('macro_api');

// Initialize the client
const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Send a simple message
async function sendMessage() {
  try {
    await slack.sendMessage('#general', 'Hello from macro_api!');
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="Slack App Required">
        You need to create a Slack app and configure bot permissions to use the Slack API.
      </InfoBox>

      ### Setting Up Your Slack App

      1. Go to [Slack API Apps](https://api.slack.com/apps) and click "Create New App"
      2. Choose "From scratch" and enter your app name and workspace
      3. Go to "OAuth & Permissions" and add required scopes:
         - `chat:write` - Send messages
         - `files:write` - Upload files
         - `channels:manage` - Create and manage channels
         - `users:read` - Read user information
      4. Install the app to your workspace
      5. Copy the "Bot User OAuth Token" (starts with `xoxb-`)
      6. Go to "Basic Information" and copy the "Signing Secret"

      <CodeExampleSwitcher
        typescript={`// .env file
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_SIGNING_SECRET=your-signing-secret-here

// In your application
import { SlackAPI } from 'macro_api';

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});`}
        javascript={`// .env file
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_SIGNING_SECRET=your-signing-secret-here

// In your application
const { SlackAPI } = require('macro_api');

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never hardcode your bot token or signing secret. Always use environment variables or a secure configuration management system.
      </InfoBox>

      ## Core Methods

      ### Message Operations

      <CodeExampleSwitcher
        typescript={`// Send simple text message
await slack.sendMessage('#general', 'Hello World!');

// Send message with rich formatting
await slack.sendMessage('#general', 'Deployment Status', {
  blocks: [{
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Deployment Successful* :white_check_mark:\\n\\nVersion 2.1.0 has been deployed to production'
    },
    fields: [
      { type: 'mrkdwn', text: '*Environment:*\\nProduction' },
      { type: 'mrkdwn', text: '*Version:*\\n2.1.0' }
    ]
  }]
});

// Send message to a thread
await slack.sendMessage('#general', 'This is a thread reply', {
  threadTs: '1234567890.123456'
});

// Update an existing message
await slack.updateMessage('#general', '1234567890.123456', 'Updated message content');

// Delete a message
await slack.deleteMessage('#general', '1234567890.123456');`}
        javascript={`// Send simple text message
await slack.sendMessage('#general', 'Hello World!');

// Send message with rich formatting
await slack.sendMessage('#general', 'Deployment Status', {
  blocks: [{
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: '*Deployment Successful* :white_check_mark:\\n\\nVersion 2.1.0 has been deployed to production'
    },
    fields: [
      { type: 'mrkdwn', text: '*Environment:*\\nProduction' },
      { type: 'mrkdwn', text: '*Version:*\\n2.1.0' }
    ]
  }]
});

// Send message to a thread
await slack.sendMessage('#general', 'This is a thread reply', {
  threadTs: '1234567890.123456'
});`}
        title="Message operations"
      />

      ### File Upload and Sharing

      <CodeExampleSwitcher
        typescript={`import fs from 'fs';

// Upload a file from buffer
const fileBuffer = fs.readFileSync('./report.pdf');
await slack.uploadFile('#reports', fileBuffer, {
  filename: 'monthly-report.pdf',
  title: 'Monthly Analytics Report',
  initialComment: 'Here\\'s the monthly report for review'
});

// Upload text content as file
const csvContent = 'Name,Email,Role\\nJohn Doe,john@example.com,Developer';
await slack.uploadFile('#data', csvContent, {
  filename: 'user-data.csv',
  filetype: 'csv',
  title: 'User Data Export'
});

// Upload image with thread
const imageBuffer = fs.readFileSync('./chart.png');
await slack.uploadFile('#analytics', imageBuffer, {
  filename: 'sales-chart.png',
  title: 'Q3 Sales Chart',
  threadTs: '1234567890.123456'
});`}
        javascript={`const fs = require('fs');

// Upload a file from buffer
const fileBuffer = fs.readFileSync('./report.pdf');
await slack.uploadFile('#reports', fileBuffer, {
  filename: 'monthly-report.pdf',
  title: 'Monthly Analytics Report',
  initialComment: 'Here\\'s the monthly report for review'
});

// Upload text content as file
const csvContent = 'Name,Email,Role\\nJohn Doe,john@example.com,Developer';
await slack.uploadFile('#data', csvContent, {
  filename: 'user-data.csv',
  filetype: 'csv',
  title: 'User Data Export'
});`}
        title="File upload operations"
      />

      ### Channel Management

      <CodeExampleSwitcher
        typescript={`// Create a public channel
const publicChannel = await slack.createChannel('project-alpha');

// Create a private channel
const privateChannel = await slack.createChannel('secret-project', {
  isPrivate: true
});

// Create channel with topic and purpose
const channel = await slack.createChannel('team-standup', {
  topic: 'Daily standup discussions',
  purpose: 'Share daily updates and blockers'
});

// Get list of channels
const channels = await slack.getChannels();
console.log('Available channels:', channels.map(c => c.name));

// Join a channel
await slack.joinChannel('#random');

// Invite users to channel
await slack.inviteUsersToChannel('#project-alpha', ['U123456', 'U789012']);

// Get channel members
const members = await slack.getChannelMembers('#project-alpha');
console.log('Channel members:', members);

// Set channel topic
await slack.setChannelTopic('#project-alpha', 'Project Alpha development updates');

// Archive a channel
await slack.archiveChannel('#old-project');`}
        javascript={`// Create a public channel
const publicChannel = await slack.createChannel('project-alpha');

// Create a private channel
const privateChannel = await slack.createChannel('secret-project', {
  isPrivate: true
});

// Get list of channels
const channels = await slack.getChannels();
console.log('Available channels:', channels.map(c => c.name));

// Join a channel
await slack.joinChannel('#random');

// Set channel topic
await slack.setChannelTopic('#project-alpha', 'Project Alpha development updates');`}
        title="Channel management"
      />

      ### User and Team Operations

      <CodeExampleSwitcher
        typescript={`// Get user information
const user = await slack.getUserInfo('U1234567890');
console.log(\`User: \${user.realName} (\${user.name})\`);
console.log(\`Email: \${user.profile.email}\`);
console.log(\`Timezone: \${user.tz}\`);

// Get team information
const team = await slack.getTeamInfo();
console.log(\`Team: \${team.name}\`);

// Add reaction to message
await slack.addReaction('#general', '1234567890.123456', 'thumbsup');

// Remove reaction
await slack.removeReaction('#general', '1234567890.123456', 'thumbsup');

// Set a reminder
await slack.setReminder('Team meeting in 5 minutes!', 'in 5 minutes');

// Set reminder for specific user
await slack.setReminder('Don\\'t forget the client call', 'tomorrow at 9am', 'U1234567890');`}
        javascript={`// Get user information
const user = await slack.getUserInfo('U1234567890');
console.log(\`User: \${user.realName} (\${user.name})\`);

// Get team information
const team = await slack.getTeamInfo();
console.log(\`Team: \${team.name}\`);

// Add reaction to message
await slack.addReaction('#general', '1234567890.123456', 'thumbsup');

// Set a reminder
await slack.setReminder('Team meeting in 5 minutes!', 'in 5 minutes');`}
        title="User and team operations"
      />

      ### Search and History

      <CodeExampleSwitcher
        typescript={`// Search messages
const searchResults = await slack.searchMessages('deployment', {
  count: 20,
  page: 1,
  sortDir: 'desc'
});

console.log(\`Found \${searchResults.messages.total} messages\`);
searchResults.messages.matches.forEach(match => {
  console.log(\`Message: \${match.text}\`);
});

// Advanced search with filters
const recentDeployments = await slack.searchMessages('deployment after:2024-01-01 in:#engineering');

// Search in specific channel
const channelSearch = await slack.searchMessages('bug in:#support');`}
        javascript={`// Search messages
const searchResults = await slack.searchMessages('deployment', {
  count: 20,
  page: 1,
  sortDir: 'desc'
});

console.log(\`Found \${searchResults.messages.total} messages\`);

// Search in specific channel
const channelSearch = await slack.searchMessages('bug in:#support');`}
        title="Search operations"
      />

      ## Slash Commands

      <CodeExampleSwitcher
        typescript={`import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));

// Handle slash command with signature verification
app.post('/slack/command', async (req, res) => {
  const signature = req.headers['x-slack-signature'] as string;
  const timestamp = req.headers['x-slack-request-timestamp'] as string;
  const rawBody = JSON.stringify(req.body);
  
  try {
    const response = await slack.handleSlashCommand(
      req.body,
      signature,
      timestamp,
      rawBody
    );
    
    res.json(response);
  } catch (error) {
    console.error('Slash command error:', error);
    res.status(400).json({
      text: 'Error processing command'
    });
  }
});

// Custom command processor
class CustomSlashCommands {
  static async processCommand(payload: SlashCommandPayload): Promise<CommandResponse> {
    const { command, text, userId, channelId } = payload;
    
    switch (command) {
      case '/weather':
        return {
          responseType: 'ephemeral',
          text: \`Weather for \${text || 'your location'}: Sunny, 75°F\`,
          blocks: [{
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: \`:sunny: *Weather Update*\\n\\nLocation: \${text || 'Current Location'}\\nTemperature: 75°F\\nCondition: Sunny\`
            }
          }]
        };
        
      case '/standup':
        return {
          responseType: 'in_channel',
          text: 'Daily standup reminder posted!',
          blocks: [{
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: ':calendar: *Daily Standup Reminder*\\n\\nPlease share:\\n• What you did yesterday\\n• What you\\'re working on today\\n• Any blockers'
            }
          }]
        };
        
      default:
        return {
          responseType: 'ephemeral',
          text: \`Unknown command: \${command}\`
        };
    }
  }
}

app.listen(3000, () => {
  console.log('Slack bot listening on port 3000');
});`}
        javascript={`const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Handle slash command
app.post('/slack/command', async (req, res) => {
  try {
    const response = await slack.handleSlashCommand(req.body);
    res.json(response);
  } catch (error) {
    console.error('Slash command error:', error);
    res.status(400).json({
      text: 'Error processing command'
    });
  }
});

app.listen(3000, () => {
  console.log('Slack bot listening on port 3000');
});`}
        title="Slash command handling"
      />

      ## Advanced Features

      ### Interactive Components

      <CodeExampleSwitcher
        typescript={`// Send message with buttons
await slack.sendMessage('#general', 'Approve deployment?', {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Ready to deploy version 2.1.0 to production?'
      }
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Approve' },
          style: 'primary',
          value: 'approve_deployment',
          action_id: 'deployment_approve'
        },
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Reject' },
          style: 'danger',
          value: 'reject_deployment',
          action_id: 'deployment_reject'
        }
      ]
    }
  ]
});

// Send message with dropdown
await slack.sendMessage('#general', 'Select environment:', {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Which environment do you want to deploy to?'
      },
      accessory: {
        type: 'static_select',
        placeholder: { type: 'plain_text', text: 'Select environment' },
        options: [
          { text: { type: 'plain_text', text: 'Staging' }, value: 'staging' },
          { text: { type: 'plain_text', text: 'Production' }, value: 'production' }
        ],
        action_id: 'environment_select'
      }
    }
  ]
});`}
        javascript={`// Send message with buttons
await slack.sendMessage('#general', 'Approve deployment?', {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Ready to deploy version 2.1.0 to production?'
      }
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Approve' },
          style: 'primary',
          value: 'approve_deployment'
        },
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Reject' },
          style: 'danger',
          value: 'reject_deployment'
        }
      ]
    }
  ]
});`}
        title="Interactive components"
      />

      ### Workflow Automation

      <CodeExampleSwitcher
        typescript={`// Automated deployment notifications
class DeploymentNotifier {
  constructor(private slack: SlackAPI) {}

  async notifyDeploymentStart(version: string, environment: string) {
    await this.slack.sendMessage('#deployments', \`🚀 Deployment Started\`, {
      blocks: [{
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \`:rocket: *Deployment Started*\\n\\n*Version:* \${version}\\n*Environment:* \${environment}\\n*Status:* In Progress\`
        }
      }]
    });
  }

  async notifyDeploymentSuccess(version: string, environment: string, duration: string) {
    await this.slack.sendMessage('#deployments', \`✅ Deployment Successful\`, {
      blocks: [{
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \`:white_check_mark: *Deployment Successful*\\n\\n*Version:* \${version}\\n*Environment:* \${environment}\\n*Duration:* \${duration}\`
        }
      }]
    });
    
    // Add celebration reaction
    const response = await this.slack.sendMessage('#general', \`Version \${version} is now live! :tada:\`);
    await this.slack.addReaction('#general', response.ts, 'tada');
  }

  async notifyDeploymentFailure(version: string, environment: string, error: string) {
    await this.slack.sendMessage('#deployments', \`❌ Deployment Failed\`, {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: \`:x: *Deployment Failed*\\n\\n*Version:* \${version}\\n*Environment:* \${environment}\`
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: \`*Error:*\\n\\\`\\\`\\\`\\n\${error}\\n\\\`\\\`\\\`\`
          }
        }
      ]
    });
  }
}

// Usage
const notifier = new DeploymentNotifier(slack);
await notifier.notifyDeploymentStart('2.1.0', 'production');`}
        javascript={`// Automated deployment notifications
class DeploymentNotifier {
  constructor(slack) {
    this.slack = slack;
  }

  async notifyDeploymentStart(version, environment) {
    await this.slack.sendMessage('#deployments', \`🚀 Deployment Started\`, {
      blocks: [{
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \`:rocket: *Deployment Started*\\n\\n*Version:* \${version}\\n*Environment:* \${environment}\`
        }
      }]
    });
  }

  async notifyDeploymentSuccess(version, environment, duration) {
    await this.slack.sendMessage('#deployments', \`✅ Deployment Successful\`, {
      blocks: [{
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \`:white_check_mark: *Deployment Successful*\\n\\n*Version:* \${version}\\n*Duration:* \${duration}\`
        }
      }]
    });
  }
}

const notifier = new DeploymentNotifier(slack);
await notifier.notifyDeploymentStart('2.1.0', 'production');`}
        title="Workflow automation"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        Slack has rate limits for different API methods. The wrapper includes built-in retry logic for handling rate limits gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { SlackAPI } from 'macro_api';

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Comprehensive error handling
async function robustSlackOperation() {
  try {
    const message = await slack.sendMessage('#general', 'Hello World!');
    console.log('Message sent:', message.ts);
    
    return message;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('channel_not_found')) {
        console.error('Channel does not exist or bot is not a member');
        // Handle channel access issues
      } else if (error.message.includes('rate_limited')) {
        console.error('Rate limit exceeded, retrying...');
        // Implement exponential backoff
        await new Promise(resolve => setTimeout(resolve, 5000));
        return robustSlackOperation();
      } else if (error.message.includes('invalid_auth')) {
        console.error('Invalid bot token or insufficient permissions');
        throw new Error('Slack authentication failed');
      } else {
        console.error('Slack API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Batch operations with error handling
async function sendBulkMessages(channels: string[], message: string) {
  const results = [];
  const errors = [];
  
  for (const channel of channels) {
    try {
      const result = await slack.sendMessage(channel, message);
      results.push({ channel, success: true, ts: result.ts });
    } catch (error) {
      errors.push({ channel, error: error instanceof Error ? error.message : 'Unknown error' });
    }
    
    // Rate limiting: wait between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(\`Sent \${results.length} messages successfully\`);
  if (errors.length > 0) {
    console.log(\`Failed to send \${errors.length} messages:\`, errors);
  }
  
  return { results, errors };
}`}
        javascript={`const { SlackAPI } = require('macro_api');

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Error handling
async function robustSlackOperation() {
  try {
    const message = await slack.sendMessage('#general', 'Hello World!');
    return message;
  } catch (error) {
    if (error.message.includes('channel_not_found')) {
      console.error('Channel does not exist or bot is not a member');
    } else if (error.message.includes('rate_limited')) {
      console.error('Rate limit exceeded');
    } else {
      console.error('Slack API Error:', error.message);
    }
    throw error;
  }
}`}
        title="Robust error handling"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use message threading to keep channels organized
        - Implement proper rate limiting in your applications
        - Cache user and channel information to reduce API calls
        - Use webhook signatures for security in production
      </InfoBox>

      ### Message Formatting Best Practices

      <CodeExampleSwitcher
        typescript={`// Good: Use Block Kit for rich formatting
await slack.sendMessage('#general', 'Status Update', {
  blocks: [
    {
      type: 'header',
      text: { type: 'plain_text', text: 'Weekly Status Update' }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Project:* Alpha Release\\n*Status:* :green_circle: On Track\\n*Due Date:* March 15, 2024'
      }
    },
    {
      type: 'divider'
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Completed this week:*\\n• User authentication\\n• Database setup\\n• API endpoints'
      }
    }
  ]
});

// Good: Use threads for follow-up messages
const parentMessage = await slack.sendMessage('#project-alpha', 'Daily standup time! 👋');
await slack.sendMessage('#project-alpha', 'What did you work on yesterday?', {
  threadTs: parentMessage.ts
});

// Good: Use appropriate emoji and formatting
await slack.sendMessage('#alerts', 'System Alert', {
  blocks: [{
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: ':warning: *High CPU Usage Detected*\\n\\nServer: web-01\\nCPU: 95%\\nTime: <!date^1609459200^{date_short} at {time}|Jan 1, 2021 at 12:00 PM>'
    }
  }]
});`}
        javascript={`// Good: Use Block Kit for rich formatting
await slack.sendMessage('#general', 'Status Update', {
  blocks: [
    {
      type: 'header',
      text: { type: 'plain_text', text: 'Weekly Status Update' }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Project:* Alpha Release\\n*Status:* On Track\\n*Due Date:* March 15, 2024'
      }
    }
  ]
});

// Good: Use threads for follow-up
const parentMessage = await slack.sendMessage('#project-alpha', 'Daily standup time!');
await slack.sendMessage('#project-alpha', 'What did you work on yesterday?', {
  threadTs: parentMessage.ts
});`}
        title="Message formatting best practices"
      />

      ## API Reference

      For complete API documentation and advanced features, visit the [official Slack API documentation](https://api.slack.com/).

      ### Bot Token Scopes

      Common scopes needed for different operations:

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Operation</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Required Scope</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Send Messages</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">chat:write</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Send messages to channels and DMs</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Upload Files</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">files:write</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Upload and share files</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Manage Channels</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">channels:manage</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Create and modify public channels</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Read User Info</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">users:read</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">View user information</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Add Reactions</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">reactions:write</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Add and remove message reactions</td>
            </tr>
          </tbody>
        </table>
      </div>

      ### Support

      - [Slack API Documentation](https://api.slack.com/)
      - [Block Kit Builder](https://app.slack.com/block-kit-builder)
      - [Slack Developer Community](https://slackcommunity.com/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default SlackDocs;