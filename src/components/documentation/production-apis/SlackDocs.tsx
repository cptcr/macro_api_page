import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, MessageSquare, Hash, Bell, Sparkles, ArrowRight, Code, Download } from 'lucide-react';

const SlackDocs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects matching main page */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div className="relative z-10 container-responsive section-padding">
        {/* Header Section */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <MessageSquare className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Production APIs
            </span>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4 sm:mr-6 text-purple-600 dark:text-purple-400">
              <MessageSquare className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold mb-2 text-gradient-secondary">
                Slack API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Team communication and workflow automation
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">
              Messages
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">
              File Sharing
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">
              Channel Management
            </span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">
              Slash Commands
            </span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Overview</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            The Slack API wrapper provides comprehensive integration for team communication, file sharing, and workflow automation. 
            Build powerful Slack bots, automate team notifications, and create custom slash commands with ease.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-primary" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Message Sending</h4>
                    <p className="text-sm text-muted-foreground">Send rich messages with attachments and formatting</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">File Sharing</h4>
                    <p className="text-sm text-muted-foreground">Upload and share files in channels</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Hash className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Channel Management</h4>
                    <p className="text-sm text-muted-foreground">Create and manage channels programmatically</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">User Management</h4>
                    <p className="text-sm text-muted-foreground">Get user info and manage interactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Installation</h2>
          <CodeExampleSwitcher
            typescript="npm install macro_api"
            javascript="npm install macro_api"
            title="Install the package"
          />
        </div>

        {/* Quick Start Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Quick Start</h2>
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
        </div>

        {/* Authentication Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Authentication</h2>

          <InfoBox type="info" title="Slack App Required">
            You need to create a Slack app and configure bot permissions to use the Slack API.
          </InfoBox>

          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center">
              <Key className="h-5 w-5 mr-2 text-primary" />
              Setting Up Your Slack App
            </h3>
            
            <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 mb-6">
              <ol className="space-y-4 text-sm">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span>Go to <a href="https://api.slack.com/apps" className="text-primary underline">Slack API Apps</a> and click "Create New App"</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span>Choose "From scratch" and enter your app name and workspace</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <span>Go to "OAuth & Permissions" and add required scopes:</span>
                    <ul className="mt-2 ml-4 space-y-1">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">chat:write</code> - Send messages
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">files:write</code> - Upload files
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">channels:manage</code> - Create and manage channels
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">users:read</code> - Read user information
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">4</span>
                  <span>Install the app to your workspace</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">5</span>
                  <span>Copy the "Bot User OAuth Token" (starts with <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">xoxb-</code>)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">6</span>
                  <span>Go to "Basic Information" and copy the "Signing Secret"</span>
                </li>
              </ol>
            </div>

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
          </div>
        </div>

        {/* Core Methods Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Core Methods</h2>
          
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Message Operations
            </h3>
            
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
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              File Upload and Sharing
            </h3>
            
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
          </div>
        </div>

        {/* Error Handling Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Error Handling</h2>

          <InfoBox type="warning" title="Rate Limits">
            Slack has rate limits for different API methods. The wrapper includes built-in retry logic for handling rate limits gracefully.
          </InfoBox>

          <div className="mt-8">
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
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices</h2>

          <InfoBox type="tip" title="Performance Tips">
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use message threading to keep channels organized</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement proper rate limiting in your applications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Cache user and channel information to reduce API calls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use webhook signatures for security in production</span>
              </li>
            </ul>
          </InfoBox>
        </div>

        {/* API Reference Section */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">API Reference</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            For complete API documentation and advanced features, visit the <a href="https://api.slack.com/" className="text-primary underline">official Slack API documentation</a>.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Bot Token Scopes
            </h3>
            <p className="text-muted-foreground mb-6">Common scopes needed for different operations:</p>
            
            <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 font-semibold">Operation</th>
                    <th className="text-left py-3 px-4 font-semibold">Required Scope</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Send Messages</td>
                    <td className="py-3 px-4 font-mono text-primary">chat:write</td>
                    <td className="py-3 px-4 text-muted-foreground">Send messages to channels and DMs</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Upload Files</td>
                    <td className="py-3 px-4 font-mono text-primary">files:write</td>
                    <td className="py-3 px-4 text-muted-foreground">Upload and share files</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Manage Channels</td>
                    <td className="py-3 px-4 font-mono text-primary">channels:manage</td>
                    <td className="py-3 px-4 text-muted-foreground">Create and modify public channels</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Read User Info</td>
                    <td className="py-3 px-4 font-mono text-primary">users:read</td>
                    <td className="py-3 px-4 text-muted-foreground">View user information</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Add Reactions</td>
                    <td className="py-3 px-4 font-mono text-primary">reactions:write</td>
                    <td className="py-3 px-4 text-muted-foreground">Add and remove message reactions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
              <ExternalLink className="h-5 w-5 mr-2 text-primary" />
              Support Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://api.slack.com/" target="_blank" rel="noopener noreferrer" className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Slack API Documentation</h4>
                    <p className="text-muted-foreground text-sm mb-3">Official Slack API reference and guides</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Visit Documentation</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://app.slack.com/block-kit-builder" target="_blank" rel="noopener noreferrer" className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Block Kit Builder</h4>
                    <p className="text-muted-foreground text-sm mb-3">Visual builder for creating rich message layouts</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Open Builder</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://slackcommunity.com/" target="_blank" rel="noopener noreferrer" className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Developer Community</h4>
                    <p className="text-muted-foreground text-sm mb-3">Connect with other Slack developers</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Join Community</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://github.com/cptcr/macro_api/issues" target="_blank" rel="noopener noreferrer" className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">GitHub Issues</h4>
                    <p className="text-muted-foreground text-sm mb-3">Report bugs and request features</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Report Issue</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackDocs;