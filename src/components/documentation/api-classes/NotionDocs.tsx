import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Copy, Music, Play, Search, User, Album, Heart, List, CheckCircle, ExternalLink, Code, Download, Sparkles, ArrowRight, Key, Shield, FileText, Database, Users } from 'lucide-react';

const NotionDocs: React.FC = () => {
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

  const basicSetupCode = `import { NotionAPI } from 'macro_api';

// Initialize the client
const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Create a new page
async function createPage() {
  try {
    const page = await notion.createPage({
      parent: {
        database_id: 'your-database-id'
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: 'My New Page'
              }
            }
          ]
        }
      }
    });
    console.log('Page created:', page.id);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const userExampleCode = `// Get current user profile
const user = await notion.getCurrentUser();
console.log(user);

// Get another user's profile
const userProfile = await notion.getUser('notion-user-id');`;

  const trackExampleCode = `// Get a single page
const page = await notion.getPage('page-id');

// Get multiple pages
const pages = await notion.getPages(['page-id-1', 'page-id-2']);`;

  const methods = [
    {
      name: 'getCurrentUser',
      description: 'Get current user profile',
      params: 'None',
      returns: 'Promise<User>',
      icon: <User className="h-4 w-4" />
    },
    {
      name: 'getPage',
      description: 'Get page by ID',
      params: 'pageId: string',
      returns: 'Promise<Page>',
      icon: <FileText className="h-4 w-4" />
    },
    {
      name: 'createPage',
      description: 'Create new page',
      params: 'pageData: CreatePageParams',
      returns: 'Promise<Page>',
      icon: <FileText className="h-4 w-4" />
    },
    {
      name: 'search',
      description: 'Search Notion workspace',
      params: 'query: string, options?: SearchOptions',
      returns: 'Promise<SearchResults>',
      icon: <Search className="h-4 w-4" />
    }
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
            <FileText className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              API Integration
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gray-800 p-3 rounded-full">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
                Notion API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete workspace and database management with the Notion API
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            Complete workspace and database management with the Notion API. Create and manage databases, pages, blocks, and user permissions programmatically with full TypeScript support.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-500/20">Database Operations</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Page Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Block Editing</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">User Management</span>
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
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  API Setup
                </h3>
                <p className="text-muted-foreground mb-4">Complete API key setup and configuration</p>
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Read content</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Update content</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Insert content</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'examples' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    User Operations
                  </h3>
                  <CodeBlock code={userExampleCode} id="user-examples" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Page Operations
                  </h3>
                  <CodeBlock code={trackExampleCode} id="track-examples" />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'methods' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Available Methods
                </h3>
                <p className="text-muted-foreground mb-6">Complete list of Notion API methods</p>
                <div className="grid gap-4">
                  {methods.map((method, index) => (
                    <div key={index} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-600 mb-2 group-hover:text-primary transition-colors">
                            {method.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                          <div className="grid md:grid-cols-2 gap-2 text-xs">
                            <div><strong>Parameters:</strong> <code className="glass px-1 py-0.5 rounded text-xs">{method.params}</code></div>
                            <div><strong>Returns:</strong> <code className="glass px-1 py-0.5 rounded text-xs">{method.returns}</code></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'advanced' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Advanced Configuration</h3>
                <p className="text-muted-foreground mb-4">Advanced features and best practices</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
                    <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Features
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Database operations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Page management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>TypeScript support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20">
                    <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Common Errors
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>401:</strong> Invalid or expired token</li>
                      <li><strong>403:</strong> Insufficient permissions</li>
                      <li><strong>404:</strong> Resource not found</li>
                      <li><strong>429:</strong> Rate limit exceeded</li>
                    </ul>
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

export default NotionDocs;