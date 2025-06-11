import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Youtube, Bell, Monitor, Clock } from 'lucide-react';

const YoutubeDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-red-600 dark:text-red-400">
            <Youtube className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">YouTube Notifications</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real-time YouTube channel monitoring and Discord webhook notifications
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
            Channel Monitoring
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Discord Webhooks
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Real-time Updates
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Auto Notifications
          </span>
        </div>
      </div>

      ## Overview

      The YouTube Notifications wrapper (`YouTubeNotify`) provides a simple way to monitor YouTube channels for new video uploads and automatically send notifications to Discord via webhooks. Perfect for content creators, community managers, and developers who want to stay updated on their favorite channels.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Bell className="h-6 w-6 text-red-600 mb-2" />
          <h3 className="font-semibold mb-1">Real-time Monitoring</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Monitor YouTube channels for new uploads</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Discord Integration</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Send rich notifications to Discord channels</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Clock className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Configurable Intervals</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Set custom check intervals for monitoring</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Monitor className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Rich Embeds</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Beautiful Discord embeds with video details</p>
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
        typescript={`import { YouTubeNotify } from 'macro_api';

// Initialize the YouTube monitor
const youtubeMonitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw', // Example: Google Developers
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 300000, // Check every 5 minutes
  maxResults: 5,
  includeDescription: true,
  mentionEveryone: false
});

// Set Discord webhook URL
youtubeMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
youtubeMonitor.startMonitoring();

console.log('YouTube monitoring started!');`}
        javascript={`const { YouTubeNotify } = require('macro_api');

// Initialize the YouTube monitor
const youtubeMonitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw', // Example: Google Developers
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 300000, // Check every 5 minutes
  maxResults: 5,
  includeDescription: true,
  mentionEveryone: false
});

// Set Discord webhook URL
youtubeMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
youtubeMonitor.startMonitoring();

console.log('YouTube monitoring started!');`}
        title="Basic monitoring setup"
      />

      ## Authentication

      <InfoBox type="info" title="API Keys Required">
        You need both a YouTube Data API key and a Discord webhook URL to use this service.
      </InfoBox>

      ### Getting Your YouTube Data API Key

      1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
      2. Create a new project or select an existing one
      3. Enable the YouTube Data API v3
      4. Create credentials (API Key)
      5. Restrict the API key to YouTube Data API v3 (recommended)
      6. Copy your API key and add it to your environment variables

      ### Setting Up Discord Webhook

      1. Go to your Discord server settings
      2. Navigate to **Integrations** → **Webhooks**
      3. Click **Create Webhook**
      4. Configure the webhook name and channel
      5. Copy the webhook URL
      6. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
YOUTUBE_API_KEY=your_youtube_api_key_here
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url

// In your application
import { YouTubeNotify } from 'macro_api';

const monitor = new YouTubeNotify({
  channelId: 'CHANNEL_ID_HERE',
  apiKey: process.env.YOUTUBE_API_KEY
});

monitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);`}
        javascript={`// .env file
YOUTUBE_API_KEY=your_youtube_api_key_here
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url

// In your application
const { YouTubeNotify } = require('macro_api');

const monitor = new YouTubeNotify({
  channelId: 'CHANNEL_ID_HERE',
  apiKey: process.env.YOUTUBE_API_KEY
});

monitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never expose your API keys or webhook URLs in client-side code. Always use environment variables and keep them secure.
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
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Default</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">channelId</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">YouTube channel ID to monitor</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">apiKey</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">YouTube Data API v3 key</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">checkIntervalMs</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">number</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">600000</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Check interval in milliseconds (10 minutes)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">maxResults</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">number</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Maximum videos to fetch per check</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">includeDescription</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">boolean</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Include video description in notification</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">mentionEveryone</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">boolean</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">false</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Add @everyone mention to notifications</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Starting and Stopping Monitoring

      <CodeExampleSwitcher
        typescript={`import { YouTubeNotify } from 'macro_api';

const monitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 300000, // 5 minutes
  maxResults: 3,
  includeDescription: false,
  mentionEveryone: true
});

// Set Discord webhook
monitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
monitor.startMonitoring();
console.log('Monitoring started!');

// Stop monitoring (after some time)
setTimeout(() => {
  monitor.stopMonitoring();
  console.log('Monitoring stopped!');
}, 30 * 60 * 1000); // Stop after 30 minutes`}
        javascript={`const { YouTubeNotify } = require('macro_api');

const monitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 300000, // 5 minutes
  maxResults: 3
});

// Set Discord webhook
monitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
monitor.startMonitoring();
console.log('Monitoring started!');

// Stop monitoring later
setTimeout(() => {
  monitor.stopMonitoring();
  console.log('Monitoring stopped!');
}, 30 * 60 * 1000);`}
        title="Basic monitoring control"
      />

      ### Manual Check

      <CodeExampleSwitcher
        typescript={`// Perform a one-time check for new videos
async function checkForNewVideos() {
  try {
    const newVideos = await monitor.manualCheck();
    
    if (newVideos.length > 0) {
      console.log(\`Found \${newVideos.length} new videos:\`);
      newVideos.forEach(video => {
        console.log(\`- \${video.title}\`);
        console.log(\`  URL: https://www.youtube.com/watch?v=\${video.videoId}\`);
        console.log(\`  Published: \${video.publishedAt}\`);
      });
    } else {
      console.log('No new videos found.');
    }
  } catch (error) {
    console.error('Error checking for videos:', error);
  }
}

// Run manual check
checkForNewVideos();`}
        javascript={`// Perform a one-time check for new videos
async function checkForNewVideos() {
  try {
    const newVideos = await monitor.manualCheck();
    
    if (newVideos.length > 0) {
      console.log(\`Found \${newVideos.length} new videos:\`);
      newVideos.forEach(video => {
        console.log(\`- \${video.title}\`);
        console.log(\`  URL: https://www.youtube.com/watch?v=\${video.videoId}\`);
        console.log(\`  Published: \${video.publishedAt}\`);
      });
    } else {
      console.log('No new videos found.');
    }
  } catch (error) {
    console.error('Error checking for videos:', error);
  }
}

// Run manual check
checkForNewVideos();`}
        title="Manual video checking"
      />

      ## Advanced Usage

      ### Multiple Channel Monitoring

      <CodeExampleSwitcher
        typescript={`import { YouTubeNotify } from 'macro_api';

interface ChannelConfig {
  id: string;
  name: string;
  webhook: string;
  interval: number;
}

class MultiChannelMonitor {
  private monitors: Map<string, YouTubeNotify> = new Map();

  constructor(private apiKey: string) {}

  addChannel(config: ChannelConfig): void {
    const monitor = new YouTubeNotify({
      channelId: config.id,
      apiKey: this.apiKey,
      checkIntervalMs: config.interval,
      maxResults: 5,
      includeDescription: true,
      mentionEveryone: false
    });

    monitor.setWebhook(config.webhook);
    this.monitors.set(config.id, monitor);
    
    console.log(\`Added monitor for channel: \${config.name}\`);
  }

  startAll(): void {
    for (const [channelId, monitor] of this.monitors) {
      try {
        monitor.startMonitoring();
        console.log(\`Started monitoring channel: \${channelId}\`);
      } catch (error) {
        console.error(\`Error starting monitor for \${channelId}:\`, error);
      }
    }
  }

  stopAll(): void {
    for (const [channelId, monitor] of this.monitors) {
      monitor.stopMonitoring();
      console.log(\`Stopped monitoring channel: \${channelId}\`);
    }
  }

  removeChannel(channelId: string): void {
    const monitor = this.monitors.get(channelId);
    if (monitor) {
      monitor.stopMonitoring();
      this.monitors.delete(channelId);
      console.log(\`Removed monitor for channel: \${channelId}\`);
    }
  }
}

// Usage
const multiMonitor = new MultiChannelMonitor(process.env.YOUTUBE_API_KEY!);

// Add multiple channels
multiMonitor.addChannel({
  id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  name: 'Google Developers',
  webhook: process.env.DISCORD_WEBHOOK_TECH!,
  interval: 300000 // 5 minutes
});

multiMonitor.addChannel({
  id: 'UCXuqSBlHAE6Xw-yeJA0Tunw',
  name: 'Linus Tech Tips',
  webhook: process.env.DISCORD_WEBHOOK_TECH!,
  interval: 600000 // 10 minutes
});

// Start monitoring all channels
multiMonitor.startAll();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down monitors...');
  multiMonitor.stopAll();
  process.exit(0);
});`}
        javascript={`const { YouTubeNotify } = require('macro_api');

class MultiChannelMonitor {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.monitors = new Map();
  }

  addChannel(config) {
    const monitor = new YouTubeNotify({
      channelId: config.id,
      apiKey: this.apiKey,
      checkIntervalMs: config.interval,
      maxResults: 5,
      includeDescription: true,
      mentionEveryone: false
    });

    monitor.setWebhook(config.webhook);
    this.monitors.set(config.id, monitor);
    
    console.log(\`Added monitor for channel: \${config.name}\`);
  }

  startAll() {
    for (const [channelId, monitor] of this.monitors) {
      try {
        monitor.startMonitoring();
        console.log(\`Started monitoring channel: \${channelId}\`);
      } catch (error) {
        console.error(\`Error starting monitor for \${channelId}:\`, error);
      }
    }
  }

  stopAll() {
    for (const [channelId, monitor] of this.monitors) {
      monitor.stopMonitoring();
      console.log(\`Stopped monitoring channel: \${channelId}\`);
    }
  }
}

// Usage
const multiMonitor = new MultiChannelMonitor(process.env.YOUTUBE_API_KEY);

// Add channels and start monitoring
multiMonitor.addChannel({
  id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  name: 'Google Developers',
  webhook: process.env.DISCORD_WEBHOOK_TECH,
  interval: 300000
});

multiMonitor.startAll();`}
        title="Multiple channel monitoring"
      />

      ### Custom Notification Formatting

      <CodeExampleSwitcher
        typescript={`import { YouTubeNotify } from 'macro_api';

class CustomYouTubeNotify extends YouTubeNotify {
  // Override the sendNotification method for custom formatting
  protected async sendNotification(video: any): Promise<void> {
    if (!this.webhookUrl) {
      console.warn('No webhook URL set');
      return;
    }

    const videoUrl = \`https://www.youtube.com/watch?v=\${video.videoId}\`;
    
    // Custom embed with enhanced formatting
    const payload = {
      content: this.mentionEveryone ? '@everyone 🎬 New video alert!' : '🎬 New video uploaded!',
      embeds: [
        {
          title: \`🎥 \${video.title}\`,
          url: videoUrl,
          color: 0xFF0000, // YouTube red
          description: this.includeDescription 
            ? \`\${video.description.substring(0, 200)}...\` 
            : \`New video by **\${video.channelTitle}**\`,
          thumbnail: {
            url: video.thumbnailUrl
          },
          fields: [
            {
              name: '📺 Channel',
              value: video.channelTitle,
              inline: true
            },
            {
              name: '📅 Published',
              value: \`<t:\${Math.floor(new Date(video.publishedAt).getTime() / 1000)}:R>\`,
              inline: true
            },
            {
              name: '🔗 Watch Now',
              value: \`[Click here](\${videoUrl})\`,
              inline: true
            }
          ],
          footer: {
            text: 'YouTube Notifications • macro_api',
            icon_url: 'https://www.youtube.com/favicon.ico'
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(\`Discord webhook error: \${response.status}\`);
      }

      console.log(\`✅ Custom notification sent for: \${video.title}\`);
    } catch (error) {
      console.error('❌ Error sending custom notification:', error);
    }
  }
}

// Use the custom notifier
const customMonitor = new CustomYouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY!,
  checkIntervalMs: 300000,
  includeDescription: true
});

customMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL!);
customMonitor.startMonitoring();`}
        javascript={`const { YouTubeNotify } = require('macro_api');

// Extend the base class for custom notifications
class CustomYouTubeNotify extends YouTubeNotify {
  async sendCustomNotification(video) {
    if (!this.webhookUrl) {
      console.warn('No webhook URL set');
      return;
    }

    const videoUrl = \`https://www.youtube.com/watch?v=\${video.videoId}\`;
    
    const payload = {
      content: '🎬 New video uploaded!',
      embeds: [
        {
          title: \`🎥 \${video.title}\`,
          url: videoUrl,
          color: 0xFF0000,
          description: \`New video by **\${video.channelTitle}**\`,
          thumbnail: { url: video.thumbnailUrl },
          fields: [
            {
              name: '📺 Channel',
              value: video.channelTitle,
              inline: true
            },
            {
              name: '📅 Published',
              value: new Date(video.publishedAt).toLocaleString(),
              inline: true
            }
          ],
          footer: {
            text: 'YouTube Notifications • macro_api'
          }
        }
      ]
    };

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      console.log(\`Custom notification sent for: \${video.title}\`);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}

const customMonitor = new CustomYouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY
});`}
        title="Custom notification formatting"
      />

      ## Finding Channel IDs

      <InfoBox type="tip" title="Finding YouTube Channel IDs">
        There are several ways to find a YouTube channel ID:
      </InfoBox>

      ### Method 1: From Channel URL
      If the channel URL looks like `https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw`, the part after `/channel/` is the channel ID.

      ### Method 2: From Custom URL
      For channels with custom URLs like `https://www.youtube.com/c/GoogleDevelopers`:

      <CodeExampleSwitcher
        typescript={`// Use this helper function to get channel ID from custom URL
async function getChannelIdFromCustomUrl(customUrl: string): Promise<string | null> {
  try {
    const response = await fetch(
      \`https://www.googleapis.com/youtube/v3/search?\` +
      \`part=snippet&type=channel&q=\${encodeURIComponent(customUrl)}&\` +
      \`key=\${process.env.YOUTUBE_API_KEY}\`
    );
    
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      return data.items[0].snippet.channelId;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching channel ID:', error);
    return null;
  }
}

// Usage
const channelId = await getChannelIdFromCustomUrl('@GoogleDevelopers');
console.log('Channel ID:', channelId);`}
        javascript={`// Helper function to get channel ID from custom URL
async function getChannelIdFromCustomUrl(customUrl) {
  try {
    const response = await fetch(
      \`https://www.googleapis.com/youtube/v3/search?\` +
      \`part=snippet&type=channel&q=\${encodeURIComponent(customUrl)}&\` +
      \`key=\${process.env.YOUTUBE_API_KEY}\`
    );
    
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      return data.items[0].snippet.channelId;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching channel ID:', error);
    return null;
  }
}

// Usage
const channelId = await getChannelIdFromCustomUrl('@GoogleDevelopers');
console.log('Channel ID:', channelId);`}
        title="Channel ID lookup utility"
      />

      ### Method 3: Browser DevTools
      1. Go to the YouTube channel page
      2. View page source (Ctrl+U)
      3. Search for `"channelId":"` in the source code
      4. The value after this string is the channel ID

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        YouTube Data API has quota limits. The default quota is 10,000 units per day. Each search costs 100 units, so plan your check intervals accordingly.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { YouTubeNotify } from 'macro_api';

class RobustYouTubeMonitor {
  private monitor: YouTubeNotify;
  private retryCount: number = 0;
  private maxRetries: number = 3;
  private backoffDelay: number = 5000; // 5 seconds

  constructor(config: any) {
    this.monitor = new YouTubeNotify(config);
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    // Override the checkForNewVideos method to add error handling
    const originalMethod = (this.monitor as any).checkForNewVideos.bind(this.monitor);
    
    (this.monitor as any).checkForNewVideos = async (initialCheck: boolean) => {
      try {
        await originalMethod(initialCheck);
        this.retryCount = 0; // Reset on success
      } catch (error) {
        console.error('Error checking for videos:', error);
        
        if (error instanceof Error) {
          if (error.message.includes('403')) {
            console.error('❌ API quota exceeded or invalid API key');
            this.handleQuotaError();
          } else if (error.message.includes('404')) {
            console.error('❌ Channel not found. Please check the channel ID');
          } else if (error.message.includes('429')) {
            console.error('⚠️ Rate limited. Implementing backoff...');
            this.handleRateLimit();
          } else {
            console.error('❌ Unexpected error:', error.message);
            this.handleGenericError();
          }
        }
      }
    };
  }

  private handleQuotaError(): void {
    console.log('⏸️ Pausing monitoring due to quota issues');
    this.monitor.stopMonitoring();
    
    // Resume monitoring tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilTomorrow = tomorrow.getTime() - Date.now();
    setTimeout(() => {
      console.log('🔄 Resuming monitoring with fresh quota');
      this.monitor.startMonitoring();
    }, msUntilTomorrow);
  }

  private handleRateLimit(): void {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      const delay = this.backoffDelay * Math.pow(2, this.retryCount - 1);
      
      console.log(\`⏳ Retrying in \${delay / 1000} seconds (attempt \${this.retryCount}/\${this.maxRetries})\`);
      
      setTimeout(() => {
        // Restart monitoring with original interval
        this.monitor.stopMonitoring();
        this.monitor.startMonitoring();
      }, delay);
    } else {
      console.log('❌ Max retries reached. Stopping monitoring.');
      this.monitor.stopMonitoring();
    }
  }

  private handleGenericError(): void {
    // Implement basic retry logic for generic errors
    this.retryCount++;
    if (this.retryCount <= this.maxRetries) {
      console.log(\`🔄 Retrying... (attempt \${this.retryCount}/\${this.maxRetries})\`);
      setTimeout(() => {
        // Continue monitoring
      }, this.backoffDelay);
    } else {
      console.log('❌ Too many errors. Stopping monitoring.');
      this.monitor.stopMonitoring();
    }
  }

  setWebhook(url: string): void {
    this.monitor.setWebhook(url);
  }

  startMonitoring(): void {
    this.monitor.startMonitoring();
  }

  stopMonitoring(): void {
    this.monitor.stopMonitoring();
  }
}

// Usage with robust error handling
const robustMonitor = new RobustYouTubeMonitor({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY!,
  checkIntervalMs: 600000, // 10 minutes to conserve quota
  maxResults: 3
});

robustMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL!);
robustMonitor.startMonitoring();`}
        javascript={`const { YouTubeNotify } = require('macro_api');

class RobustYouTubeMonitor {
  constructor(config) {
    this.monitor = new YouTubeNotify(config);
    this.retryCount = 0;
    this.maxRetries = 3;
    this.backoffDelay = 5000;
    this.setupErrorHandling();
  }

  setupErrorHandling() {
    // Add error handling wrapper
    const originalMethod = this.monitor.checkForNewVideos.bind(this.monitor);
    
    this.monitor.checkForNewVideos = async (initialCheck) => {
      try {
        await originalMethod(initialCheck);
        this.retryCount = 0;
      } catch (error) {
        console.error('Error checking for videos:', error);
        
        if (error.message.includes('403')) {
          console.error('API quota exceeded or invalid API key');
          this.handleQuotaError();
        } else if (error.message.includes('429')) {
          console.error('Rate limited. Implementing backoff...');
          this.handleRateLimit();
        }
      }
    };
  }

  handleQuotaError() {
    console.log('Pausing monitoring due to quota issues');
    this.monitor.stopMonitoring();
  }

  handleRateLimit() {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      const delay = this.backoffDelay * Math.pow(2, this.retryCount - 1);
      
      setTimeout(() => {
        this.monitor.stopMonitoring();
        this.monitor.startMonitoring();
      }, delay);
    }
  }

  setWebhook(url) {
    this.monitor.setWebhook(url);
  }

  startMonitoring() {
    this.monitor.startMonitoring();
  }

  stopMonitoring() {
    this.monitor.stopMonitoring();
  }
}

// Usage
const robustMonitor = new RobustYouTubeMonitor({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 600000
});

robustMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);
robustMonitor.startMonitoring();`}
        title="Robust error handling implementation"
      />

      ## Best Practices

      <InfoBox type="tip" title="Optimization Tips">
        - Use longer check intervals (10+ minutes) to conserve API quota
        - Monitor only active channels that upload regularly
        - Implement proper error handling and retry logic
        - Use environment variables for sensitive data
        - Consider using multiple API keys for high-volume monitoring
      </InfoBox>

      ### Quota Management

      <CodeExampleSwitcher
        typescript={`// Calculate daily quota usage
function calculateDailyQuota(channels: number, intervalMinutes: number): number {
  const checksPerDay = (24 * 60) / intervalMinutes;
  const quotaPerCheck = 100; // YouTube search API cost
  const dailyQuota = channels * checksPerDay * quotaPerCheck;
  
  console.log(\`Monitoring \${channels} channels every \${intervalMinutes} minutes\`);
  console.log(\`Daily quota usage: \${dailyQuota} units\`);
  console.log(\`Quota remaining: \${10000 - dailyQuota} units\`);
  
  if (dailyQuota > 10000) {
    console.warn('⚠️ Daily quota will be exceeded!');
    const minInterval = Math.ceil((channels * 24 * 100) / 10000 * 60);
    console.log(\`Minimum interval needed: \${minInterval} minutes\`);
  }
  
  return dailyQuota;
}

// Example usage
calculateDailyQuota(5, 10); // 5 channels, every 10 minutes
calculateDailyQuota(10, 30); // 10 channels, every 30 minutes

// Recommended intervals based on channel count
const recommendedIntervals = {
  1: 1,    // 1 channel: every 1 minute (8,640 quota)
  5: 3,    // 5 channels: every 3 minutes (9,600 quota)
  10: 6,   // 10 channels: every 6 minutes (9,600 quota)
  20: 12,  // 20 channels: every 12 minutes (9,600 quota)
  50: 30   // 50 channels: every 30 minutes (9,600 quota)
};

function getRecommendedInterval(channelCount: number): number {
  const intervals = Object.keys(recommendedIntervals).map(Number).sort((a, b) => a - b);
  
  for (const count of intervals) {
    if (channelCount <= count) {
      return recommendedIntervals[count as keyof typeof recommendedIntervals];
    }
  }
  
  // For more than 50 channels, calculate dynamic interval
  return Math.ceil((channelCount * 24 * 100) / 9600 * 60);
}`}
        javascript={`// Calculate daily quota usage
function calculateDailyQuota(channels, intervalMinutes) {
  const checksPerDay = (24 * 60) / intervalMinutes;
  const quotaPerCheck = 100;
  const dailyQuota = channels * checksPerDay * quotaPerCheck;
  
  console.log(\`Monitoring \${channels} channels every \${intervalMinutes} minutes\`);
  console.log(\`Daily quota usage: \${dailyQuota} units\`);
  
  if (dailyQuota > 10000) {
    console.warn('Daily quota will be exceeded!');
  }
  
  return dailyQuota;
}

// Example usage
calculateDailyQuota(5, 10); // 5 channels, every 10 minutes
calculateDailyQuota(10, 30); // 10 channels, every 30 minutes`}
        title="Quota management utilities"
      />

      ## Production Deployment

      ### Docker Deployment

      <CodeExampleSwitcher
        typescript={`# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S youtubebot -u 1001

USER youtubebot

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
  CMD node healthcheck.js

CMD ["node", "youtube-monitor.js"]`}
        javascript={`# Docker Compose for production
version: '3.8'

services:
  youtube-monitor:
    build: .
    environment:
      - NODE_ENV=production
      - YOUTUBE_API_KEY=\${YOUTUBE_API_KEY}
      - DISCORD_WEBHOOK_URL=\${DISCORD_WEBHOOK_URL}
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
    healthcheck:
      test: ["CMD", "node", "healthcheck.js"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Optional: Redis for state persistence
  redis:
    image: redis:7-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data

volumes:
  redis_data:`}
        title="Docker deployment configuration"
      />

      ### Process Management

      <CodeExampleSwitcher
        typescript={`// youtube-monitor.js - Production service
import { YouTubeNotify } from 'macro_api';
import fs from 'fs';
import path from 'path';

class YouTubeMonitorService {
  private monitors: Map<string, YouTubeNotify> = new Map();
  private isShuttingDown: boolean = false;

  constructor() {
    this.setupGracefulShutdown();
    this.loadConfiguration();
  }

  private loadConfiguration(): void {
    try {
      const configPath = path.join(__dirname, 'channels.json');
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      config.channels.forEach((channel: any) => {
        this.addMonitor(channel);
      });
      
      console.log(\`✅ Loaded \${config.channels.length} channel configurations\`);
    } catch (error) {
      console.error('❌ Error loading configuration:', error);
      process.exit(1);
    }
  }

  private addMonitor(config: any): void {
    const monitor = new YouTubeNotify({
      channelId: config.channelId,
      apiKey: process.env.YOUTUBE_API_KEY!,
      checkIntervalMs: config.interval || 600000,
      maxResults: config.maxResults || 5,
      includeDescription: config.includeDescription || false,
      mentionEveryone: config.mentionEveryone || false
    });

    monitor.setWebhook(config.webhookUrl);
    this.monitors.set(config.channelId, monitor);
  }

  start(): void {
    if (this.isShuttingDown) return;

    console.log('🚀 Starting YouTube monitoring service...');
    
    for (const [channelId, monitor] of this.monitors) {
      try {
        monitor.startMonitoring();
        console.log(\`✅ Started monitoring: \${channelId}\`);
      } catch (error) {
        console.error(\`❌ Failed to start monitoring \${channelId}:\`, error);
      }
    }

    console.log(\`🎉 All monitors started (\${this.monitors.size} channels)\`);
  }

  private setupGracefulShutdown(): void {
    const shutdown = (signal: string) => {
      if (this.isShuttingDown) return;
      
      console.log(\`\\n🛑 Received \${signal}. Shutting down gracefully...\`);
      this.isShuttingDown = true;

      for (const [channelId, monitor] of this.monitors) {
        monitor.stopMonitoring();
        console.log(\`⏹️ Stopped monitoring: \${channelId}\`);
      }

      console.log('✅ All monitors stopped. Goodbye!');
      process.exit(0);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  }
}

// Start the service
const service = new YouTubeMonitorService();
service.start();

// Keep the process alive
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', reason);
});`}
        javascript={`// youtube-monitor.js - Production service
const { YouTubeNotify } = require('macro_api');
const fs = require('fs');
const path = require('path');

class YouTubeMonitorService {
  constructor() {
    this.monitors = new Map();
    this.isShuttingDown = false;
    this.setupGracefulShutdown();
    this.loadConfiguration();
  }

  loadConfiguration() {
    try {
      const configPath = path.join(__dirname, 'channels.json');
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      config.channels.forEach(channel => {
        this.addMonitor(channel);
      });
      
      console.log(\`Loaded \${config.channels.length} configurations\`);
    } catch (error) {
      console.error('Error loading configuration:', error);
      process.exit(1);
    }
  }

  addMonitor(config) {
    const monitor = new YouTubeNotify({
      channelId: config.channelId,
      apiKey: process.env.YOUTUBE_API_KEY,
      checkIntervalMs: config.interval || 600000,
      maxResults: config.maxResults || 5
    });

    monitor.setWebhook(config.webhookUrl);
    this.monitors.set(config.channelId, monitor);
  }

  start() {
    console.log('Starting YouTube monitoring service...');
    
    for (const [channelId, monitor] of this.monitors) {
      monitor.startMonitoring();
      console.log(\`Started monitoring: \${channelId}\`);
    }
  }

  setupGracefulShutdown() {
    const shutdown = (signal) => {
      console.log(\`Received \${signal}. Shutting down...\`);
      
      for (const [channelId, monitor] of this.monitors) {
        monitor.stopMonitoring();
      }
      
      process.exit(0);
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  }
}

const service = new YouTubeMonitorService();
service.start();`}
        title="Production service implementation"
      />

      ## API Reference

      For complete YouTube Data API documentation, visit the [official YouTube Data API documentation](https://developers.google.com/youtube/v3/docs).

      ### Common Channel IDs

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Popular Tech Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Developer Channels</h4>
              <ul className="space-y-1">
                <li><code>UC_x5XG1OV2P6uZZ5FSM9Ttw</code> - Google Developers</li>
                <li><code>UCW5YeuERMmlnqo4oq8vwUpg</code> - The Net Ninja</li>
                <li><code>UC29ju8bIPH5as8OGnQzwJyA</code> - Traversy Media</li>
                <li><code>UCFbNIlppjAuEX4znoulh0Cw</code> - Web Dev Simplified</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tech News</h4>
              <ul className="space-y-1">
                <li><code>UCXuqSBlHAE6Xw-yeJA0Tunw</code> - Linus Tech Tips</li>
                <li><code>UCBJycsmduvYEL83R_U4JriQ</code> - Marques Brownlee</li>
                <li><code>UC4QZ_LsYcvcq7qOsOhpAX4A</code> - Austin Evans</li>
                <li><code>UCyWqModMQlbIo8274Wh_ZsQ</code> - Unbox Therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ### Rate Limits & Quotas

      <div className="not-prose my-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800 p-6">
          <h3 className="text-lg font-semibold mb-4 text-orange-800 dark:text-orange-200">
            YouTube API Quotas
          </h3>
          <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
            <li>• <strong>Default quota:</strong> 10,000 units per day</li>
            <li>• <strong>Search cost:</strong> 100 units per request</li>
            <li>• <strong>Maximum requests:</strong> 100 searches per day (default)</li>
            <li>• <strong>Quota resets:</strong> Daily at midnight Pacific Time</li>
            <li>• <strong>Rate limit:</strong> 10,000 requests per 100 seconds per user</li>
          </ul>
        </div>
      </div>

      ## Support

      - [YouTube Data API Documentation](https://developers.google.com/youtube/v3/docs)
      - [Discord Webhook Guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
      - [macro_api GitHub Issues](https://github.com/cptcr/macro_api/issues)
      - [Google Cloud Console](https://console.cloud.google.com/)
    </div>
  );
};

export default YoutubeDocs;