import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Container, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Download, Upload, Settings, Globe, Lock, Trash2, RefreshCw, Sparkles, ArrowRight, Code } from 'lucide-react';

const DockerhubDocs: React.FC = () => {
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

  const basicSetupCode = `import { DockerHubAPI } from 'macro_api';

// Initialize the client
const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN
});

// Get repository information
async function getRepositoryInfo() {
  try {
    const repo = await dockerHub.getRepository('myusername/myapp');
    console.log('Repository:', repo.name);
    console.log('Pull count:', repo.pullCount);
    console.log('Star count:', repo.starCount);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const authenticationCode = `// .env file
DOCKER_HUB_TOKEN=dckr_pat_your_personal_access_token_here

// In your application
import { DockerHubAPI } from 'macro_api';

const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN,
  namespace: 'myusername' // Optional default namespace
});`;

  const repositoryCode = `// Get repository information
async function getRepositoryDetails() {
  const repo = await dockerHub.getRepository('nginx');
  console.log(\`Repository: \${repo.name}\`);
  console.log(\`Description: \${repo.description}\`);
  console.log(\`Pull count: \${repo.pullCount.toLocaleString()}\`);
  console.log(\`Star count: \${repo.starCount}\`);
  console.log(\`Is private: \${repo.isPrivate}\`);
  console.log(\`Last updated: \${repo.lastUpdated}\`);
}

// List repositories for a user/organization
async function listUserRepositories() {
  const result = await dockerHub.listRepositories('library', {
    page: 1,
    pageSize: 25
  });
  
  console.log(\`Total repositories: \${result.count}\`);
  result.results.forEach(repo => {
    console.log(\`- \${repo.name} (\${repo.pullCount} pulls)\`);
  });
}

// Check if repository exists
async function checkRepository() {
  const exists = await dockerHub.repositoryExists('myusername/myapp');
  console.log(\`Repository exists: \${exists}\`);
}`;

  const tagManagementCode = `// List all tags for a repository
async function listTags() {
  const result = await dockerHub.listTags('nginx', {
    page: 1,
    pageSize: 50,
    ordering: '-last_updated' // Sort by newest first
  });
  
  console.log(\`Total tags: \${result.count}\`);
  result.results.forEach(tag => {
    console.log(\`Tag: \${tag.name}\`);
    console.log(\`  Size: \${(tag.fullSize / 1024 / 1024).toFixed(1)} MB\`);
    console.log(\`  Last updated: \${tag.lastUpdated}\`);
    console.log(\`  Architectures: \${tag.images.map(img => img.architecture).join(', ')}\`);
  });
}

// Get detailed information about a specific tag
async function getTagDetails() {
  const tagDetails = await dockerHub.getTagDetails('nginx', 'latest');
  
  console.log(\`Tag: \${tagDetails.name}\`);
  console.log(\`Full size: \${(tagDetails.fullSize / 1024 / 1024).toFixed(1)} MB\`);
  console.log(\`Last updated: \${tagDetails.lastUpdated}\`);
  console.log(\`Content type: \${tagDetails.contentType}\`);
  console.log(\`Digest: \${tagDetails.digest}\`);
  
  // Show vulnerability information if available
  if (tagDetails.vulnerabilities) {
    console.log('Security vulnerabilities:');
    console.log(\`  Critical: \${tagDetails.vulnerabilities.critical}\`);
    console.log(\`  High: \${tagDetails.vulnerabilities.high}\`);
    console.log(\`  Medium: \${tagDetails.vulnerabilities.medium}\`);
    console.log(\`  Low: \${tagDetails.vulnerabilities.low}\`);
  }
}`;

  const features = [
    {
      name: 'Repository Management',
      description: 'Create, update, and delete Docker repositories',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'Tag Operations',
      description: 'List, inspect, and manage container tags',
      icon: <Container className="h-4 w-4" />
    },
    {
      name: 'Automated Builds',
      description: 'Configure and trigger automated builds',
      icon: <Settings className="h-4 w-4" />
    },
    {
      name: 'Webhooks',
      description: 'Real-time notifications for registry events',
      icon: <Globe className="h-4 w-4" />
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
            <Container className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Production APIs
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <Container className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Docker Hub API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Production-ready Docker Hub API wrapper for container registry management
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Docker Hub API wrapper provides comprehensive access to Docker Hub's container registry services. 
            Manage repositories, tags, automated builds, webhooks, and monitor download statistics with a production-ready interface.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Repository Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Container Registry</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Webhooks</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Automated Builds</span>
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
                onClick={() => setActiveTab('repositories')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'repositories' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Repository Management
              </button>
              <button
                onClick={() => setActiveTab('tags')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'tags' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Tag Operations
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
                  Docker Hub Token Setup
                </h3>
                <p className="text-muted-foreground mb-4">Get your Docker Hub API key from the Docker Hub platform</p>
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Navigate to the API Keys section in your account settings</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Click "Create new secret key" and give it a descriptive name</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy the generated API key and store it securely</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock code={authenticationCode} id="authentication" />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'repositories' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Repository Operations
                </h3>
                <p className="text-muted-foreground mb-4">Manage Docker repositories with full CRUD operations</p>
                <CodeBlock code={repositoryCode} id="repositories" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'tags' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Container className="h-5 w-5 mr-2 text-primary" />
                  Tag Management
                </h3>
                <p className="text-muted-foreground mb-4">List, inspect, and manage container tags</p>
                <CodeBlock code={tagManagementCode} id="tags" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Security & Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Production Ready
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Automatic token refresh</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Built-in retry logic</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Rate limit handling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Error categorization</span>
                </li>
              </ul>
            </div>

            <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Features
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Secure API key handling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Request validation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Response sanitization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                  <span>Environment isolation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rate Limits & Support */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">API Reference</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            For complete API documentation and additional endpoints, visit the <a href="https://docs.docker.com/docker-hub/api/latest/" className="text-primary underline">official Docker Hub API documentation</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary" />
                Rate Limits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Free accounts:</strong> 100 pulls per 6 hours</li>
                <li><strong>Pro/Team accounts:</strong> 200 pulls per 6 hours</li>
                <li><strong>API requests:</strong> 100 requests per hour for anonymous, 200+ for authenticated</li>
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                Support Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://docs.docker.com/docker-hub/api/latest/" className="text-primary hover:underline flex items-center">
                    Docker Hub API Documentation
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://hub.docker.com/support/" className="text-primary hover:underline flex items-center">
                    Docker Hub Support
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cptcr/macro_api/issues" className="text-primary hover:underline flex items-center">
                    GitHub Issues
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
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

export default DockerhubDocs;