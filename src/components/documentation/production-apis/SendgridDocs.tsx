import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Mail, Clock, Send, FileText, BarChart3 } from 'lucide-react';

const SendgridDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            <Mail className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">SendGrid API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Production-ready email delivery with advanced features
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Transactional Email
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Template Engine
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Marketing Campaigns
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Analytics
          </span>
        </div>
      </div>

      ## Overview

      The SendGrid API wrapper provides a comprehensive solution for transactional email delivery, marketing campaigns, and email analytics. Built for production environments with advanced features like email validation, scheduled sending, and detailed analytics.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Send className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Transactional Email</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Send high-volume transactional emails with guaranteed delivery</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <FileText className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Dynamic Templates</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create and manage email templates with dynamic content</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Contact Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage contact lists and subscriber segments</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <BarChart3 className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Email Analytics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Track delivery, opens, clicks, and engagement metrics</p>
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
        typescript={`import { SendGridAPI } from 'macro_api';

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
}`}
        javascript={`const { SendGridAPI } = require('macro_api');

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
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a valid SendGrid API key to use the email delivery service.
      </InfoBox>

      ### Getting Your SendGrid API Key

      1. Sign up for a SendGrid account at [https://sendgrid.com](https://sendgrid.com)
      2. Complete the account verification process
      3. Go to Settings → API Keys in your SendGrid dashboard
      4. Click "Create API Key" and choose "Full Access" or configure specific permissions
      5. Copy the generated API key and store it securely
      6. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
SENDGRID_API_KEY=SG.your_api_key_here

// In your application
import { SendGridAPI } from 'macro_api';

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: 'noreply@yourapp.com', // Optional default
  defaultFromName: 'Your App Name' // Optional default
});`}
        javascript={`// .env file
SENDGRID_API_KEY=SG.your_api_key_here

// In your application
const { SendGridAPI } = require('macro_api');

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY,
  defaultFromEmail: 'noreply@yourapp.com',
  defaultFromName: 'Your App Name'
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never expose your SendGrid API key in client-side code. Always use environment variables and keep keys on the server side only.
      </InfoBox>

      ## Configuration

      ### Constructor Options

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Property</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Required</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">apiKey</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your SendGrid API key</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">defaultFromEmail</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Default sender email address</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">defaultFromName</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Default sender name</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Basic Email Sending

      <CodeExampleSwitcher
        typescript={`// Send a simple email
async function sendSimpleEmail() {
  const result = await sendgrid.sendEmail({
    to: 'recipient@example.com',
    subject: 'Hello from SendGrid!',
    text: 'This is a plain text email.',
    html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
  });
  
  console.log('Email sent:', result.messageId);
}

// Send to multiple recipients
async function sendToMultiple() {
  const result = await sendgrid.sendEmail({
    to: ['user1@example.com', 'user2@example.com'],
    cc: 'manager@example.com',
    bcc: 'admin@example.com',
    subject: 'Team Update',
    html: '<h1>Weekly Update</h1><p>Here is our progress...</p>'
  });
  
  return result;
}

// Send email with attachments
async function sendWithAttachments() {
  const pdfBuffer = fs.readFileSync('./report.pdf');
  const base64PDF = pdfBuffer.toString('base64');
  
  const result = await sendgrid.sendEmail({
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
  });
  
  return result;
}`}
        javascript={`// Send a simple email
async function sendSimpleEmail() {
  const result = await sendgrid.sendEmail({
    to: 'recipient@example.com',
    subject: 'Hello from SendGrid!',
    text: 'This is a plain text email.',
    html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
  });
  
  console.log('Email sent:', result.messageId);
}

// Send to multiple recipients
async function sendToMultiple() {
  const result = await sendgrid.sendEmail({
    to: ['user1@example.com', 'user2@example.com'],
    cc: 'manager@example.com',
    bcc: 'admin@example.com',
    subject: 'Team Update',
    html: '<h1>Weekly Update</h1><p>Here is our progress...</p>'
  });
  
  return result;
}

// Send email with attachments
async function sendWithAttachments() {
  const fs = require('fs');
  const pdfBuffer = fs.readFileSync('./report.pdf');
  const base64PDF = pdfBuffer.toString('base64');
  
  const result = await sendgrid.sendEmail({
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
  });
  
  return result;
}`}
        title="Basic email sending"
      />

      ### Template-Based Emails

      <CodeExampleSwitcher
        typescript={`// Create a dynamic template
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
}

// Send template email with advanced options
async function sendAdvancedTemplate() {
  const result = await sendgrid.sendEmail({
    to: 'user@example.com',
    templateId: 'your_template_id',
    dynamicTemplateData: {
      first_name: 'John',
      order_id: '12345',
      items: [
        { name: 'Product A', price: '$29.99' },
        { name: 'Product B', price: '$49.99' }
      ],
      total: '$79.98'
    },
    categories: ['order-confirmation'],
    customArgs: {
      order_id: '12345',
      customer_type: 'premium'
    }
  });
  
  return result;
}`}
        javascript={`// Create a dynamic template
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
}`}
        title="Template-based email sending"
      />

      ### Contact and List Management

      <CodeExampleSwitcher
        typescript={`// Create a contact list
async function createContactList() {
  const list = await sendgrid.createList('Newsletter Subscribers');
  console.log('List created:', list.id);
  return list;
}

// Add contacts to a list
async function addContactsToList() {
  const listId = 'your_list_id';
  
  const contacts = [
    {
      email: 'subscriber1@example.com',
      firstName: 'John',
      lastName: 'Doe',
      customFields: {
        age: 30,
        city: 'New York',
        subscription_tier: 'premium'
      }
    },
    {
      email: 'subscriber2@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      customFields: {
        age: 25,
        city: 'San Francisco',
        subscription_tier: 'basic'
      }
    }
  ];
  
  const result = await sendgrid.addToList(listId, contacts);
  console.log('Contacts added:', result);
  return result;
}

// Get all contact lists
async function getAllLists() {
  const lists = await sendgrid.getLists();
  console.log('Found lists:', lists.result.length);
  
  lists.result.forEach(list => {
    console.log(\`- \${list.name}: \${list.contactCount} contacts\`);
  });
  
  return lists;
}

// Delete a contact list
async function deleteList() {
  const listId = 'list_to_delete';
  await sendgrid.deleteList(listId, false); // false = don't delete contacts
  console.log('List deleted');
}`}
        javascript={`// Create a contact list
async function createContactList() {
  const list = await sendgrid.createList('Newsletter Subscribers');
  console.log('List created:', list.id);
  return list;
}

// Add contacts to a list
async function addContactsToList() {
  const listId = 'your_list_id';
  
  const contacts = [
    {
      email: 'subscriber1@example.com',
      firstName: 'John',
      lastName: 'Doe',
      customFields: {
        age: 30,
        city: 'New York',
        subscription_tier: 'premium'
      }
    },
    {
      email: 'subscriber2@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      customFields: {
        age: 25,
        city: 'San Francisco',
        subscription_tier: 'basic'
      }
    }
  ];
  
  const result = await sendgrid.addToList(listId, contacts);
  console.log('Contacts added:', result);
  return result;
}`}
        title="Contact and list management"
      />

      ### Email Validation and Analytics

      <CodeExampleSwitcher
        typescript={`// Validate email addresses
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
}

// Calculate engagement metrics
async function calculateEngagement() {
  const stats = await sendgrid.getEmailStats('2024-01-01', '2024-01-31');
  
  let totalDelivered = 0;
  let totalOpens = 0;
  let totalClicks = 0;
  
  stats.forEach(dayStat => {
    const metrics = dayStat.stats[0]?.metrics || {};
    totalDelivered += metrics.delivered || 0;
    totalOpens += metrics.uniqueOpens || 0;
    totalClicks += metrics.uniqueClicks || 0;
  });
  
  const openRate = totalDelivered > 0 ? (totalOpens / totalDelivered * 100).toFixed(2) : 0;
  const clickRate = totalOpens > 0 ? (totalClicks / totalOpens * 100).toFixed(2) : 0;
  const clickThroughRate = totalDelivered > 0 ? (totalClicks / totalDelivered * 100).toFixed(2) : 0;
  
  return {
    totalDelivered,
    totalOpens,
    totalClicks,
    openRate: \`\${openRate}%\`,
    clickRate: \`\${clickRate}%\`,
    clickThroughRate: \`\${clickThroughRate}%\`
  };
}`}
        javascript={`// Validate email addresses
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
  
  stats.forEach(function(dayStat) {
    console.log('Date: ' + dayStat.date);
    const metrics = dayStat.stats[0] && dayStat.stats[0].metrics || {};
    console.log('  Delivered: ' + metrics.delivered);
    console.log('  Opens: ' + metrics.opens + ' (Unique: ' + metrics.uniqueOpens + ')');
    console.log('  Clicks: ' + metrics.clicks + ' (Unique: ' + metrics.uniqueClicks + ')');
  });
  
  return stats;
}`}
        title="Email validation and analytics"
      />

      ### Scheduled Email Delivery

      <CodeExampleSwitcher
        typescript={`// Schedule an email for future delivery
async function scheduleEmail() {
  const sendTime = new Date();
  sendTime.setHours(sendTime.getHours() + 24); // Send in 24 hours
  
  const scheduledEmail = await sendgrid.scheduleEmail({
    to: 'user@example.com',
    subject: 'Scheduled Reminder',
    html: '<h1>This is your scheduled reminder!</h1>',
    categories: ['scheduled', 'reminder']
  }, sendTime);
  
  console.log('Email scheduled:', scheduledEmail.batchId);
  return scheduledEmail;
}

// Cancel a scheduled email
async function cancelScheduledEmail() {
  const batchId = 'batch_id_from_scheduled_email';
  
  try {
    await sendgrid.cancelScheduledEmail(batchId);
    console.log('Scheduled email canceled');
  } catch (error) {
    console.error('Error canceling email:', error);
  }
}

// Pause and resume scheduled emails
async function pauseAndResumeEmail() {
  const batchId = 'batch_id_from_scheduled_email';
  
  // Pause the scheduled email
  await sendgrid.pauseScheduledEmail(batchId);
  console.log('Email paused');
  
  // Later, resume it
  setTimeout(async () => {
    await sendgrid.resumeScheduledEmail(batchId);
    console.log('Email resumed');
  }, 5000);
}

// Check status of scheduled email
async function checkScheduledEmailStatus() {
  const batchId = 'batch_id_from_scheduled_email';
  
  const status = await sendgrid.getScheduledEmailStatus(batchId);
  console.log('Scheduled email status:', status.status);
  
  return status;
}

// Send recurring promotional emails
async function sendWeeklyNewsletter() {
  const subscribers = await getNewsletterSubscribers(); // Your function
  
  const newsletter = {
    subject: \`Weekly Newsletter - \${new Date().toLocaleDateString()}\`,
    templateId: 'newsletter_template_id',
    categories: ['newsletter', 'weekly']
  };
  
  // Schedule for next Monday at 9 AM
  const nextMonday = getNextMonday(); // Your function
  nextMonday.setHours(9, 0, 0, 0);
  
  const recipients = subscribers.map(sub => ({
    email: sub.email,
    name: sub.name,
    substitutions: {
      first_name: sub.firstName,
      subscriber_id: sub.id,
      unsubscribe_url: \`https://yourapp.com/unsubscribe/\${sub.id}\`
    }
  }));
  
  const result = await sendgrid.sendTemplateEmail(
    newsletter.templateId,
    recipients,
    {
      newsletter_date: new Date().toLocaleDateString(),
      company_name: 'Your Company'
    }
  );
  
  return result;
}`}
        javascript={`// Schedule an email for future delivery
async function scheduleEmail() {
  const sendTime = new Date();
  sendTime.setHours(sendTime.getHours() + 24); // Send in 24 hours
  
  const scheduledEmail = await sendgrid.scheduleEmail({
    to: 'user@example.com',
    subject: 'Scheduled Reminder',
    html: '<h1>This is your scheduled reminder!</h1>',
    categories: ['scheduled', 'reminder']
  }, sendTime);
  
  console.log('Email scheduled:', scheduledEmail.batchId);
  return scheduledEmail;
}

// Cancel a scheduled email
async function cancelScheduledEmail() {
  const batchId = 'batch_id_from_scheduled_email';
  
  try {
    await sendgrid.cancelScheduledEmail(batchId);
    console.log('Scheduled email canceled');
  } catch (error) {
    console.error('Error canceling email:', error);
  }
}

// Check status of scheduled email
async function checkScheduledEmailStatus() {
  const batchId = 'batch_id_from_scheduled_email';
  
  const status = await sendgrid.getScheduledEmailStatus(batchId);
  console.log('Scheduled email status:', status.status);
  
  return status;
}`}
        title="Scheduled email delivery"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        SendGrid has rate limits based on your plan. Implement proper error handling to manage rate limit responses gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { SendGridAPI } from 'macro_api';

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY!
});

// Comprehensive error handling
async function robustEmailSending() {
  try {
    const result = await sendgrid.sendEmail({
      to: 'user@example.com',
      subject: 'Test Email',
      html: '<h1>Hello World</h1>'
    });
    
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before sending more emails.');
        // Implement exponential backoff
        return await retryWithBackoff(() => sendgrid.sendEmail({
          to: 'user@example.com',
          subject: 'Test Email',
          html: '<h1>Hello World</h1>'
        }));
      } else if (error.message.includes('401')) {
        console.error('Invalid API key. Please check your SendGrid credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('400')) {
        console.error('Bad request. Check your email parameters.');
        console.error('Error details:', error.message);
        return null;
      } else if (error.message.includes('403')) {
        console.error('Forbidden. Check your SendGrid account status and permissions.');
        throw new Error('Permission denied');
      } else {
        console.error('SendGrid API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(
  emailOperation: () => Promise<any>,
  maxRetries = 3,
  baseDelay = 1000
) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await emailOperation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(\`Retry attempt \${attempt} in \${delay}ms...\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Batch email sending with error handling
async function sendBatchEmails(emailList: Array<{to: string, subject: string, html: string}>) {
  const results = [];
  const errors = [];
  
  for (const email of emailList) {
    try {
      const result = await robustEmailSending();
      results.push({ email: email.to, status: 'sent', messageId: result?.messageId });
    } catch (error) {
      errors.push({ 
        email: email.to, 
        status: 'failed', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
    
    // Add small delay between emails to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return { results, errors };
}

// Email validation before sending
async function validateAndSend(email: string, subject: string, content: string) {
  try {
    // Validate email first
    const validation = await sendgrid.validateEmail(email);
    
    if (validation.verdict === 'Invalid') {
      throw new Error(\`Invalid email address: \${email}\`);
    }
    
    if (validation.verdict === 'Risky') {
      console.warn(\`Risky email address: \${email}. Suggestion: \${validation.suggestion || 'None'}\`);
    }
    
    // Send email if validation passes
    const result = await sendgrid.sendEmail({
      to: email,
      subject,
      html: content
    });
    
    return { success: true, messageId: result.messageId };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}`}
        javascript={`const { SendGridAPI } = require('macro_api');

const sendgrid = new SendGridAPI({
  apiKey: process.env.SENDGRID_API_KEY
});

// Comprehensive error handling
async function robustEmailSending() {
  try {
    const result = await sendgrid.sendEmail({
      to: 'user@example.com',
      subject: 'Test Email',
      html: '<h1>Hello World</h1>'
    });
    
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before sending more emails.');
        return await retryWithBackoff(() => sendgrid.sendEmail({
          to: 'user@example.com',
          subject: 'Test Email',
          html: '<h1>Hello World</h1>'
        }));
      } else if (error.message.includes('401')) {
        console.error('Invalid API key. Please check your SendGrid credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('400')) {
        console.error('Bad request. Check your email parameters.');
        return null;
      } else {
        console.error('SendGrid API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(emailOperation, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await emailOperation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log('Retry attempt ' + attempt + ' in ' + delay + 'ms...');
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}
        title="Robust error handling and retry logic"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use templates for recurring emails to improve performance
        - Validate email addresses before sending to reduce bounces
        - Implement proper error handling and retry logic for rate limits
        - Monitor your sender reputation and email analytics
      </InfoBox>

      ### Template Organization

      <CodeExampleSwitcher
        typescript={`// Organize templates by purpose
const EMAIL_TEMPLATES = {
  TRANSACTIONAL: {
    WELCOME: 'template_welcome_id',
    PASSWORD_RESET: 'template_password_reset_id',
    EMAIL_VERIFICATION: 'template_email_verification_id',
    ORDER_CONFIRMATION: 'template_order_confirmation_id',
    INVOICE: 'template_invoice_id'
  },
  MARKETING: {
    NEWSLETTER: 'template_newsletter_id',
    PROMOTIONAL: 'template_promotional_id',
    PRODUCT_UPDATES: 'template_product_updates_id'
  },
  NOTIFICATIONS: {
    SYSTEM_ALERT: 'template_system_alert_id',
    MAINTENANCE: 'template_maintenance_id',
    SECURITY_ALERT: 'template_security_alert_id'
  }
};

// Email service wrapper class
class EmailService {
  private sendgrid: SendGridAPI;
  
  constructor() {
    this.sendgrid = new SendGridAPI({
      apiKey: process.env.SENDGRID_API_KEY!,
      defaultFromEmail: 'noreply@yourapp.com',
      defaultFromName: 'Your App'
    });
  }
  
  async sendWelcomeEmail(userEmail: string, userName: string) {
    return this.sendgrid.sendEmail({
      to: userEmail,
      templateId: EMAIL_TEMPLATES.TRANSACTIONAL.WELCOME,
      dynamicTemplateData: {
        user_name: userName,
        login_url: 'https://yourapp.com/login',
        support_email: 'support@yourapp.com'
      },
      categories: ['welcome', 'transactional']
    });
  }
  
  async sendPasswordReset(userEmail: string, resetToken: string) {
    return this.sendgrid.sendEmail({
      to: userEmail,
      templateId: EMAIL_TEMPLATES.TRANSACTIONAL.PASSWORD_RESET,
      dynamicTemplateData: {
        reset_url: \`https://yourapp.com/reset-password?token=\${resetToken}\`,
        expiry_time: '1 hour'
      },
      categories: ['password-reset', 'transactional']
    });
  }
  
  async sendOrderConfirmation(orderData: any) {
    return this.sendgrid.sendEmail({
      to: orderData.customerEmail,
      templateId: EMAIL_TEMPLATES.TRANSACTIONAL.ORDER_CONFIRMATION,
      dynamicTemplateData: {
        order_id: orderData.id,
        order_date: orderData.date,
        items: orderData.items,
        total: orderData.total,
        shipping_address: orderData.shippingAddress,
        tracking_url: \`https://yourapp.com/track/\${orderData.id}\`
      },
      categories: ['order-confirmation', 'transactional']
    });
  }
}`}
        javascript={`// Email service wrapper class
class EmailService {
  constructor() {
    this.sendgrid = new SendGridAPI({
      apiKey: process.env.SENDGRID_API_KEY,
      defaultFromEmail: 'noreply@yourapp.com',
      defaultFromName: 'Your App'
    });
  }
  
  async sendWelcomeEmail(userEmail, userName) {
    return this.sendgrid.sendEmail({
      to: userEmail,
      templateId: 'welcome_template_id',
      dynamicTemplateData: {
        user_name: userName,
        login_url: 'https://yourapp.com/login',
        support_email: 'support@yourapp.com'
      },
      categories: ['welcome', 'transactional']
    });
  }
  
  async sendPasswordReset(userEmail, resetToken) {
    return this.sendgrid.sendEmail({
      to: userEmail,
      templateId: 'password_reset_template_id',
      dynamicTemplateData: {
        reset_url: 'https://yourapp.com/reset-password?token=' + resetToken,
        expiry_time: '1 hour'
      },
      categories: ['password-reset', 'transactional']
    });
  }
}`}
        title="Email service organization"
      />

      ## API Reference

      For complete API documentation and additional features, visit the [official SendGrid documentation](https://docs.sendgrid.com/).

      ### Rate Limits

      SendGrid rate limits vary by plan:
      - **Free**: 100 emails per day
      - **Essentials**: 50,000 emails per month
      - **Pro**: 1.5 million emails per month
      - **Premier**: Custom limits

      ### Testing

      Use SendGrid's sandbox mode for testing:

      <CodeExampleSwitcher
        typescript={`// Enable sandbox mode for testing
const result = await sendgrid.sendEmail({
  to: 'test@example.com',
  subject: 'Test Email',
  html: '<h1>Test</h1>',
  mailSettings: {
    sandboxMode: { enable: true }
  }
});

// The email will not be delivered but you'll get a successful response`}
        javascript={`// Enable sandbox mode for testing
const result = await sendgrid.sendEmail({
  to: 'test@example.com',
  subject: 'Test Email',
  html: '<h1>Test</h1>',
  mailSettings: {
    sandboxMode: { enable: true }
  }
});`}
        title="Testing with sandbox mode"
      />

      ### Support

      - [SendGrid Documentation](https://docs.sendgrid.com/)
      - [SendGrid Support](https://support.sendgrid.com/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default SendgridDocs;