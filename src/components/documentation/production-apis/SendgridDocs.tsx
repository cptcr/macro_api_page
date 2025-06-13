import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Mail, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Clock, Send, FileText, BarChart3, Sparkles, ArrowRight, Code, Download } from 'lucide-react';

const SendgridDocs: React.FC = () => {
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

  const basicSetupCode = `import { SendGridAPI } from 'macro_api';

// Initialize the client
const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: 'noreply@yourapp.com',
  defaultFromName: 'Your App'
});

// Send a simple email
async function sendWelcomeEmail() {
  try {
    const result = await sendgrid.sendEmail({
      to: 'user@example.com',
      subject: 'Welcome to Our App!',
      html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
      text: 'Welcome! Thanks for signing up.'
    });
    
    console.log('Email sent successfully:', result.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}`;

  const authenticationCode = `// .env file
SENDGRID_API_KEY=SG.your_api_key_here

// In your application
import { SendGridAPI } from 'macro_api';

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: 'noreply@yourapp.com', // Optional default
  defaultFromName: 'Your App Name' // Optional default
});`;

  const basicEmailCode = `// Send simple text message
await sendgrid.sendEmail({
  to: 'recipient@example.com',
  subject: 'Hello from SendGrid!',
  text: 'This is a plain text email.',
  html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
});

// Send to multiple recipients
await sendgrid.sendEmail({
  to: ['user1@example.com', 'user2@example.com'],
  cc: 'manager@example.com',
  bcc: 'admin@example.com',
  subject: 'Team Update',
  html: '<h1>Weekly Update</h1><p>Here is our progress...</p>'
});

// Send email with attachments
const fs = require('fs');
const pdfBuffer = fs.readFileSync('./report.pdf');
const base64PDF = pdfBuffer.toString('base64');

await sendgrid.sendEmail({
  to: 'client@example.com',
  subject: 'Monthly Report',
  html: '<p>Please find the monthly report attached.</p>',
  attachments: [
    {
      content: base64PDF,
      filename: 'monthly-report.pdf',
      type: 'application/pdf',
      disposition: 'attachment'
    }
  ]
});`;

  const templatesCode = `// Create a dynamic template
async function createTemplate() {
  const template = await sendgrid.createTemplate('Welcome Email', 'dynamic');
  
  // Create a template version with dynamic content
  const version = await sendgrid.createTemplateVersion(
    template.id,
    'Welcome V1',
    'Welcome to {{company_name}}!',
    \`
    <h1>Welcome to {{company_name}}!</h1>
    <p>Hi {{first_name}},</p>
    <p>Thanks for joining us. Here are your next steps:</p>
    <ul>
      {{#each steps}}
      <li>{{this}}</li>
      {{/each}}
    </ul>
    <p>Best regards,<br>The {{company_name}} Team</p>
    \`,
    'Welcome to {{company_name}}! Hi {{first_name}}, thanks for joining us.'
  );
  
  return { template, version };
}

// Send template email to multiple recipients
async function sendTemplateEmail() {
  const recipients = [
    {
      email: 'user1@example.com',
      name: 'John Doe',
      substitutions: {
        first_name: 'John',
        company_name: 'Acme Corp',
        steps: ['Complete your profile', 'Verify your email', 'Start exploring']
      }
    },
    {
      email: 'user2@example.com',
      name: 'Jane Smith',
      substitutions: {
        first_name: 'Jane',
        company_name: 'Acme Corp',
        steps: ['Complete your profile', 'Verify your email', 'Start exploring']
      }
    }
  ];
  
  const result = await sendgrid.sendTemplateEmail(
    'template_id_here',
    recipients,
    {
      company_name: 'Acme Corp', // Global template data
      support_email: 'support@acme.com'
    }
  );
  
  return result;
}`;

  const analyticsCode = `// Validate email addresses
async function validateEmails() {
  const emails = [
    'valid@example.com',
    'invalid-email',
    'test@tempmail.com',
    'user@company.com'
  ];
  
  const results = [];
  
  for (const email of emails) {
    try {
      const validation = await sendgrid.validateEmail(email);
      results.push({
        email,
        verdict: validation.verdict,
        score: validation.score,
        suggestion: validation.suggestion
      });
    } catch (error) {
      results.push({
        email,
        verdict: 'Error',
        error: error.message
      });
    }
  }
  
  console.log('Validation results:', results);
  return results;
}

// Get email statistics
async function getEmailStats() {
  const startDate = '2024-01-01';
  const endDate = '2024-01-31';
  
  const stats = await sendgrid.getEmailStats(startDate, endDate, 'day');
  
  stats.forEach(dayStat => {
    console.log(\`Date: \${dayStat.date}\`);
    const metrics = dayStat.stats[0]?.metrics || {};
    console.log(\`  Delivered: \${metrics.delivered}\`);
    console.log(\`  Opens: \${metrics.opens} (Unique: \${metrics.uniqueOpens})\`);
    console.log(\`  Clicks: \${metrics.clicks} (Unique: \${metrics.uniqueClicks})\`);
    console.log(\`  Bounces: \${metrics.bounces}\`);
    console.log(\`  Spam Reports: \${metrics.spamReports}\`);
  });
  
  return stats;
}`;

  const features = [
    {
      name: 'Transactional Email',
      description: 'Send high-volume transactional emails with guaranteed delivery',
      icon: <Send className="h-4 w-4" />
    },
    {
      name: 'Dynamic Templates',
      description: 'Create and manage email templates with dynamic content',
      icon: <FileText className="h-4 w-4" />
    },
    {
      name: 'Contact Management',
      description: 'Manage contact lists and subscriber segments',
      icon: <Users className="h-4 w-4" />
    },
    {
      name: 'Email Analytics',
      description: 'Track delivery, opens, clicks, and engagement metrics',
      icon: <BarChart3 className="h-4 w-4" />
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
        {/* Header */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <Mail className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Production APIs
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                SendGrid API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Production-ready email delivery with advanced features
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The SendGrid API wrapper provides a comprehensive solution for transactional email delivery, marketing campaigns, and email analytics. Built for production environments with advanced features like email validation, scheduled sending, and detailed analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Transactional Email</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Template Engine</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Marketing Campaigns</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Analytics</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
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
                onClick={() => setActiveTab('basic-email')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'basic-email' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Basic Email
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'templates' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Templates
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'analytics' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Analytics
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
                  SendGrid API Setup
                </h3>
                <p className="text-muted-foreground mb-4">You need a valid SendGrid API key to use the email delivery service.</p>
                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Sign up for a SendGrid account at https://sendgrid.com</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Complete the account verification process</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Go to Settings → API Keys in your SendGrid dashboard</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Click "Create API Key" and choose "Full Access" or configure specific permissions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy the generated API key and store it securely</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Add it to your environment variables</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock code={authenticationCode} id="authentication" />
                </div>
                <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20 mt-6">
                  <p className="text-sm">
                    <Shield className="h-4 w-4 inline mr-2 text-red-500" />
                    <strong>Security Best Practice:</strong> Never expose your SendGrid API key in client-side code. Always use environment variables and keep keys on the server side only.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'basic-email' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Send className="h-5 w-5 mr-2 text-primary" />
                  Basic Email Operations
                </h3>
                <p className="text-muted-foreground mb-4">Send simple and advanced emails with attachments</p>
                <CodeBlock code={basicEmailCode} id="basic-email" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'templates' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Template-Based Emails
                </h3>
                <p className="text-muted-foreground mb-4">Create and use dynamic templates for consistent email design</p>
                <CodeBlock code={templatesCode} id="templates" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'analytics' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Email Validation and Analytics
                </h3>
                <p className="text-muted-foreground mb-4">Validate email addresses and track email performance</p>
                <CodeBlock code={analyticsCode} id="analytics" />
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
                <span>Use templates for recurring emails to improve performance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Validate email addresses before sending to reduce bounces</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement proper error handling and retry logic for rate limits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monitor your sender reputation and email analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* API Reference */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">API Reference</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            For complete API documentation and additional features, visit the <a href="https://docs.sendgrid.com/" className="text-primary underline">official SendGrid documentation</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary" />
                Rate Limits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Free:</strong> 100 emails per day</li>
                <li><strong>Essentials:</strong> 50,000 emails per month</li>
                <li><strong>Pro:</strong> 1.5 million emails per month</li>
                <li><strong>Premier:</strong> Custom limits</li>
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-primary" />
                Testing
              </h3>
              <p className="text-sm text-muted-foreground mb-2">Use SendGrid's sandbox mode for testing:</p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                <span className="text-blue-400">mailSettings</span>: {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-green-400">sandboxMode</span>: {"{"} <span className="text-yellow-400">enable</span>: <span className="text-purple-400">true</span> {"}"}
                <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>

        {/* Support Resources */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://docs.sendgrid.com/" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">SendGrid Documentation</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Read Docs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://support.sendgrid.com/" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">SendGrid Support</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Get Help</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/cptcr/macro_api/issues" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">GitHub Issues</h3>
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

export default SendgridDocs;