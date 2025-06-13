import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Youtube, Bell, Monitor, Clock, Play, Search, User, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, CheckCircle, ExternalLink } from 'lucide-react';

const YoutubeDocs: React.FC = () => {
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

  const basicSetupCode = `import { YouTubeNotify } from 'macro_api';

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

console.log('YouTube monitoring started!');`;

  const multiChannelCode = `import { YouTubeNotify } from 'macro_api';

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

// Add multiple channels
multiMonitor.addChannel({
  id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  name: 'Google Developers',
  webhook: process.env.DISCORD_WEBHOOK_TECH,
  interval: 300000 // 5 minutes
});

// Start monitoring all channels
multiMonitor.startAll();`;

  const findChannelIdCode = `// Use this helper function to get channel ID from custom URL
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
console.log('Channel ID:', channelId);`;

  const features = [
    {
      name: 'Real-time Monitoring',
      description: 'Monitor YouTube channels for new uploads',
      icon: <Bell className="h-4 w-4" />
    },
    {
      name: 'Discord Integration',
      description: 'Send rich notifications to Discord channels',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'Configurable Intervals',
      description: 'Set custom check intervals for monitoring',
      icon: <Clock className="h-4 w-4" />
    },
    {
      name: 'Rich Embeds',
      description: 'Beautiful Discord embeds with video details',
      icon: <Monitor className="h-4 w-4" />
    }
  ];

  const channelIds = [
    { id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw', name: 'Google Developers', category: 'Developer Channels' },
    { id: 'UCW5YeuERMmlnqo4oq8vwUpg', name: 'The Net Ninja', category: 'Developer Channels' },
    { id: 'UC29ju8bIPH5as8OGnQzwJyA', name: 'Traversy Media', category: 'Developer Channels' },
    { id: 'UCFbNIlppjAuEX4znoulh0Cw', name: 'Web Dev Simplified', category: 'Developer Channels' },
    { id: 'UCXuqSBlHAE6Xw-yeJA0Tunw', name: 'Linus Tech Tips', category: 'Tech News' },
    { id: 'UCBJycsmduvYEL83R_U4JriQ', name: 'Marques Brownlee', category: 'Tech News' },
    { id: 'UC4QZ_LsYcvcq7qOsOhpAX4A', name: 'Austin Evans', category: 'Tech News' },
    { id: 'UCyWqModMQlbIo8274Wh_ZsQ', name: 'Unbox Therapy', category: 'Tech News' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects */}
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
            <Youtube className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Content Monitoring
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-red-500 p-3 rounded-full">
              <Youtube className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                YouTube Notifications
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Real-time YouTube channel monitoring and Discord webhook notifications
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The YouTube Notifications wrapper (YouTubeNotify) provides a simple way to monitor YouTube channels for new video uploads 
            and automatically send notifications to Discord via webhooks. Perfect for content creators, community managers, and developers.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-red-600 dark:text-red-400 border border-red-500/20">Channel Monitoring</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Discord Webhooks</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Real-time Updates</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Auto Notifications</span>
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
                onClick={() => setActiveTab('examples')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'examples' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Examples
              </button>
              <button
                onClick={() => setActiveTab('methods')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'methods' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Methods
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'advanced' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Advanced
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Key className="h-5 w-5 mr-2 text-primary" />
                    YouTube API Setup
                  </h3>
                  <div className="glass-card bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Go to Google Cloud Console</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Enable the YouTube Data API v3</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Create credentials (API Key)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Restrict the API key to YouTube Data API v3 (recommended)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Monitor className="h-5 w-5 mr-2 text-primary" />
                    Setting Up Discord Webhook
                  </h3>
                  <div className="glass-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Go to your Discord server settings</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Navigate to Integrations → Webhooks</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Click Create Webhook</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Configure the webhook name and channel</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span>Copy the webhook URL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'examples' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    Multiple Channel Monitoring
                  </h3>
                  <p className="text-muted-foreground mb-4">Monitor multiple YouTube channels simultaneously</p>
                  <CodeBlock code={multiChannelCode} id="multi-channel-examples" />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'methods' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                      <Search className="h-5 w-5 mr-2 text-primary" />
                      Finding Channel IDs
                    </h3>
                    <p className="text-muted-foreground mb-4">Helper function to get channel ID from custom URLs</p>
                    <CodeBlock code={findChannelIdCode} id="find-channel-id" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                      <Youtube className="h-5 w-5 mr-2 text-primary" />
                      Popular Tech Channels
                    </h3>
                    <div className="grid gap-4">
                      {Array.from(new Set(channelIds.map(c => c.category))).map(category => (
                        <div key={category} className="glass-card">
                          <h4 className="font-semibold text-lg mb-3">{category}</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {channelIds.filter(c => c.category === category).map(channel => (
                              <div key={channel.id} className="flex items-center justify-between p-2 rounded glass">
                                <span className="text-sm">{channel.name}</span>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{channel.id}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'advanced' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Advanced Configuration</h3>
                <p className="text-muted-foreground mb-4">Advanced features and best practices</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                    <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Optimization Tips
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Use longer check intervals (10+ minutes) to conserve API quota</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Monitor only active channels that upload regularly</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Implement proper error handling and retry logic</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Consider using multiple API keys for high-volume monitoring</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
                    <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      YouTube API Quotas
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Default quota:</strong> 10,000 units per day</div>
                      <div><strong>Search cost:</strong> 100 units per request</div>
                      <div><strong>Maximum requests:</strong> 100 searches per day (default)</div>
                      <div><strong>Quota resets:</strong> Daily at midnight Pacific Time</div>
                      <div><strong>Rate limit:</strong> 10,000 requests per 100 seconds per user</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <Sparkles className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Production Deployment</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn how to deploy YouTube monitoring in production</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn More</span>
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

export default YoutubeDocs;