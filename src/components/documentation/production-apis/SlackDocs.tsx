import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, MessageSquare, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Hash, Bell, Sparkles, ArrowRight, Code, ExternalLink, Download } from 'lucide-react';

const SlackDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language = 'typescript', id }: { code: string; language?: string; id: string }) => (
    <div className="relative glass-card">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{language}</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 glass-button"
          onClick={() => copyToClipboard(code, id)}
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm scrollbar-modern">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      {copiedCode === id && (
        <div className="absolute top-2 right-12 glass px-2 py-1 rounded text-xs text-green-500 border border-green-500/20">
          Copied!
        </div>
      )}
    </div>
  );

  const installCode = `npm install macro_api`;

  const basicSetupCode = `import { SlackAPI } from 'macro_api';

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
}`;

  const authenticationCode = `// .env file
SLACK_BOT_TOKEN=xoxb-your-bot-token-here
SLACK_SIGNING_SECRET=your-signing-secret-here

// In your application
import { SlackAPI } from 'macro_api';

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});`;

  const messageCode = `// Send simple text message
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
await slack.deleteMessage('#general', '1234567890.123456');`;

  const fileUploadCode = `import fs from 'fs';

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
});`;

  const errorHandlingCode = `import { SlackAPI } from 'macro_api';

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
}`;

  const features = [
    {
      name: 'Message Sending',
      description: 'Send rich messages with attachments and formatting',
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      name: 'File Sharing',
      description: 'Upload and share files in channels',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'Channel Management',
      description: 'Create and manage channels programmatically',
      icon: <Hash className="h-4 w-4" />
    },
    {
      name: 'User Management',
      description: 'Get user info and manage interactions',
      icon: <Users className="h-4 w-4" />
    }
  ];

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
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-purple-500 p-3 rounded-full">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Slack API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Team communication and workflow automation
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Slack API wrapper provides comprehensive integration for team communication, file sharing, and workflow automation. 
            Build powerful Slack bots, automate team notifications, and create custom slash commands with ease.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Messages</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">File Sharing</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Channel Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Slash Commands</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">+{feature.name}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Download className="h-6 w-6 mr-2" />
            Installation
          </h2>
          <CodeBlock code={installCode} language="bash" id="install" />
        </div>

        {/* Main Content Tabs */}
        <div className="glass-card mb-8 sm:mb-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('quickstart')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'quickstart' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Quick Start
              </button>
              <button
                onClick={() => setActiveTab('authentication')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'authentication' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Authentication
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'messages' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Messages
              </button>
              <button
                onClick={() => setActiveTab('files')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'files' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                File Upload
              </button>
              <button
                onClick={() => setActiveTab('errors')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'errors' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Error Handling
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'quickstart' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Getting Started</h3>
                <CodeBlock code={basicSetupCode} id="basic-setup" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'authentication' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  Setting Up Your Slack App
                </h3>
                <p className="text-muted-foreground mb-4">You need to create a Slack app and configure bot permissions to use the Slack API.</p>
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
                <CodeBlock code={authenticationCode} id="authentication" />
                <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20 mt-6">
                  <p className="text-sm">
                    <Shield className="h-4 w-4 inline mr-2 text-red-500" />
                    <strong>Security Best Practice:</strong> Never hardcode your bot token or signing secret. Always use environment variables or a secure configuration management system.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'messages' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Message Operations
                </h3>
                <p className="text-muted-foreground mb-4">Send, update, and delete messages with rich formatting</p>
                <CodeBlock code={messageCode} id="messages" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'files' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  File Upload and Sharing
                </h3>
                <p className="text-muted-foreground mb-4">Upload and share files in channels and threads</p>
                <CodeBlock code={fileUploadCode} id="files" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'errors' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                  Error Handling
                </h3>
                <p className="text-muted-foreground mb-4">Slack has rate limits for different API methods. The wrapper includes built-in retry logic for handling rate limits gracefully.</p>
                <CodeBlock code={errorHandlingCode} id="errors" />
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices</h2>
          <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
            <h4 className="font-semibold text-green-600 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Performance Tips
            </h4>
            <ul className="space-y-2 text-sm">
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
          </div>
        </div>

        {/* API Reference */}
        <div className="glass-card mb-8 sm:mb-12">
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
        </div>

        {/* Support Resources */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Support Resources</h2>
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

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=basic-usage" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Explore More APIs</h3>
                  <p className="text-muted-foreground text-sm mb-3">Discover other API integrations available in macro_api</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View All APIs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Caching Guide</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn how to optimize performance with caching</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn Caching</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackDocs;