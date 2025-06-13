import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { Rocket, Package, Code, Zap, Shield, Database, CheckCircle, Users, Globe, ArrowRight, Sparkles } from 'lucide-react';

const GettingStartedDocs: React.FC = () => {
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
            <Rocket className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Quick Start Guide
            </span>
          </div>
          
          <h1 className="text-responsive-lg font-bold mb-6 text-gradient-secondary">
            Getting Started
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-responsive-sm text-muted-foreground leading-relaxed">
              Your journey to simplified API integration starts here. Learn how to get up and running with macro_api in minutes.
            </p>
          </div>
        </div>

        {/* Main content in glass cards */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          
          {/* What is macro_api section */}
          <div className="glass-card">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-responsive-md font-bold mb-4 text-gradient">What is macro_api?</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">macro_api</strong> is a comprehensive TypeScript/JavaScript library that provides unified, production-ready wrappers for popular APIs. 
                  Instead of learning different SDK patterns for each service, you get a consistent interface across all integrations.
                </p>
              </div>
            </div>

            {/* Why Choose macro_api */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-2 text-primary" />
                Why Choose macro_api?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Unified Interface</h4>
                      <p className="text-muted-foreground text-sm">
                        Consistent API patterns across all services. Learn once, use everywhere.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Production Ready</h4>
                      <p className="text-muted-foreground text-sm">
                        Built-in error handling, retry logic, and circuit breaker patterns.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">High Performance</h4>
                      <p className="text-muted-foreground text-sm">
                        Intelligent caching, request batching, and optimized for speed.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">TypeScript First</h4>
                      <p className="text-muted-foreground text-sm">
                        Full type safety with comprehensive TypeScript definitions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Services */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Supported Services</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Communication & Collaboration</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Slack</strong> - Team communication and workflow automation</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>SendGrid</strong> - Transactional email delivery</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Discord</strong> - Community management (via webhooks)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">AI & Machine Learning</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>OpenAI/ChatGPT</strong> - Advanced language models</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>DeepSeek</strong> - Code generation and AI assistance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Payment Processing</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Stripe</strong> - Complete payment infrastructure</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>PayPal</strong> - Global payment solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">Development & Deployment</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>GitHub</strong> - Version control and repository management</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Vercel</strong> - Frontend deployment and hosting</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Docker Hub</strong> - Container registry management</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">Entertainment & Media</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Spotify</strong> - Music streaming and playlist management</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>YouTube</strong> - Video notifications and monitoring</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">More Services</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>AWS S3</strong> - Object storage and file management</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Notion</strong> - Workspace and note management</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span><strong>Football API</strong> - Sports data and statistics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Installation */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Quick Installation</h2>
            <CodeExampleSwitcher
              typescript={`# Using npm
npm install macro_api

# Using yarn
yarn add macro_api

# Using pnpm
pnpm add macro_api`}
              javascript={`# Using npm
npm install macro_api

# Using yarn
yarn add macro_api

# Using pnpm
pnpm add macro_api`}
              title="Choose your package manager"
            />
          </div>

          {/* Your First API Call */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Your First API Call</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Let's start with a simple example using the ChatGPT API to show you how easy it is to get started:
              </p>
            </div>
            
            <CodeExampleSwitcher
              typescript={`import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Make your first API call
async function firstApiCall() {
  try {
    const response = await gpt.chat(
      'Explain APIs in simple terms',
      'You are a helpful programming tutor'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

firstApiCall();`}
              javascript={`const { ChatGPT } = require('macro_api');

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Make your first API call
async function firstApiCall() {
  try {
    const response = await gpt.chat(
      'Explain APIs in simple terms',
      'You are a helpful programming tutor'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

firstApiCall();`}
              title="Hello World with ChatGPT"
            />

            <InfoBox type="tip" title="Environment Variables">
              Always store your API keys in environment variables, never in your source code. 
              Create a `.env` file in your project root and add your keys there.
            </InfoBox>
          </div>

          {/* Environment Setup */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Environment Setup</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Create a `.env` file in your project root to securely store your API keys:
              </p>
            </div>

            <CodeExampleSwitcher
              typescript={`# .env file
OPENAI_API_KEY=sk-your-openai-key-here
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key
# ... add other API keys as needed`}
              javascript={`# .env file
OPENAI_API_KEY=sk-your-openai-key-here
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
STRIPE_SECRET_KEY=sk_test_your-stripe-key
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SENDGRID_API_KEY=SG.your-sendgrid-key
# ... add other API keys as needed`}
              title="Environment variables setup"
            />
          </div>

          {/* Next Steps */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Now that you have macro_api installed and running, here's what to explore next:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/documentation?section=basic-usage" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Basic Usage Guide</h3>
                    <p className="text-muted-foreground text-sm mb-3">Learn the fundamentals of using macro_api in your applications</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="/documentation?section=authentication" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Authentication Guide</h3>
                    <p className="text-muted-foreground text-sm mb-3">Learn how to set up API keys for different services</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Secure Setup</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="/documentation?section=caching" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Caching System</h3>
                    <p className="text-muted-foreground text-sm mb-3">Improve performance with intelligent caching</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Optimize Performance</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a href="/documentation?section=chatgpt" className="glass-card group hover:scale-[1.02] transition-all duration-300 block">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">API Guides</h3>
                    <p className="text-muted-foreground text-sm mb-3">Dive deep into specific API integrations</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Explore APIs</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Success Message */}
          <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 dark:border-green-400/20">
            <div className="flex items-start space-x-4">
              <div className="glass rounded-xl p-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">Ready to Build!</h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  You're all set! macro_api is designed to grow with your needs - start simple and add more services as your application evolves.
                </p>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient">Need Help?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="glass rounded-2xl p-4 mb-4 group hover:scale-110 transition-all duration-300">
                  <Package className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Browse the complete API reference for each service</p>
              </div>
              
              <div className="text-center">
                <div className="glass rounded-2xl p-4 mb-4 group hover:scale-110 transition-all duration-300">
                  <Globe className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">GitHub Issues</h3>
                <p className="text-sm text-muted-foreground">Report bugs and request features</p>
              </div>
              
              <div className="text-center">
                <div className="glass rounded-2xl p-4 mb-4 group hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-purple-600 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Join discussions and get help from other developers</p>
              </div>
              
              <div className="text-center">
                <div className="glass rounded-2xl p-4 mb-4 group hover:scale-110 transition-all duration-300">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground">Reach out for enterprise support and custom integrations</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-gradient mb-4">Welcome to the macro_api community! 🚀</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/cptcr/macro_api" className="btn btn-secondary">
                  <Package className="h-4 w-4 mr-2" />
                  GitHub
                </a>
                <a href="https://github.com/cptcr/macro_api/issues" className="btn btn-secondary">
                  <Globe className="h-4 w-4 mr-2" />
                  Issues
                </a>
                <a href="/documentation" className="btn btn-primary">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Continue Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedDocs;