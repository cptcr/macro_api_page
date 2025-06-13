import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Cloud, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Settings, GitBranch, Globe, Activity, Users, Package, Sparkles, ArrowRight, Code } from 'lucide-react';

const VercelDocs: React.FC = () => {
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

  const basicSetupCode = `import { VercelAPI } from 'macro_api';

// Initialize the client
const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});

// List all projects
async function listProjects() {
  try {
    const { projects } = await vercel.listProjects();
    console.log(\`Found \${projects.length} projects\`);
    
    projects.forEach(project => {
      console.log(\`- \${project.name} (\${project.id})\`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const authenticationCode = `// .env file
VERCEL_ACCESS_TOKEN=your_vercel_access_token_here

// In your application
import { VercelAPI } from 'macro_api';

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});`;

  const projectCode = `// List all projects
async function listProjects() {
  const { projects } = await vercel.listProjects({
    limit: 20,
    search: 'my-app'
  });
  
  console.log('Projects:', projects);
}

// Get specific project
async function getProject() {
  const project = await vercel.getProject('my-project-id');
  console.log('Project details:', project);
}

// Create a new project
async function createProject() {
  const project = await vercel.createProject('my-new-app', {
    framework: 'nextjs',
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    installCommand: 'npm install',
    devCommand: 'npm run dev',
    gitRepository: {
      type: 'github',
      repo: 'username/my-new-app'
    }
  });
  
  console.log('Created project:', project.id);
}

// Update project settings
async function updateProject() {
  const updatedProject = await vercel.updateProject('project-id', {
    name: 'updated-project-name',
    framework: 'nextjs',
    buildCommand: 'npm run build',
    outputDirectory: '.next'
  });
  
  console.log('Project updated:', updatedProject.name);
}

// Delete a project
async function deleteProject() {
  await vercel.deleteProject('project-id');
  console.log('Project deleted successfully');
}`;

  const deploymentCode = `// List deployments
async function listDeployments() {
  const { deployments } = await vercel.listDeployments({
    app: 'my-app',
    limit: 10,
    state: 'READY'
  });
  
  console.log(\`Found \${deployments.length} deployments\`);
  
  deployments.forEach(deployment => {
    console.log(\`- \${deployment.url} (\${deployment.state})\`);
  });
}

// Get deployment details
async function getDeployment() {
  const deployment = await vercel.getDeployment('deployment-id');
  console.log('Deployment:', {
    id: deployment.uid,
    url: deployment.url,
    state: deployment.state,
    createdAt: new Date(deployment.createdAt)
  });
}

// Create a deployment from files
async function createFileDeployment() {
  const deployment = await vercel.createDeployment({
    name: 'my-static-site',
    files: [
      {
        file: 'index.html',
        data: \`<!DOCTYPE html>
<html>
<head><title>My Site</title></head>
<body><h1>Hello, World!</h1></body>
</html>\`
      },
      {
        file: 'style.css',
        data: 'body { font-family: Arial, sans-serif; }'
      }
    ],
    target: 'production'
  });
  
  console.log(\`Deployment created: \${deployment.url}\`);
  console.log(\`Status: \${deployment.state}\`);
}`;

  const envVarsCode = `// Get environment variables
async function getEnvironmentVariables() {
  const { envs } = await vercel.getEnvironmentVariables('project-id');
  
  console.log('Environment variables:');
  envs.forEach(env => {
    console.log(\`- \${env.key}: \${env.target.join(', ')}\`);
  });
}

// Create environment variable
async function createEnvironmentVariable() {
  const env = await vercel.createEnvironmentVariable(
    'project-id',
    'API_URL',
    'https://api.production.com',
    ['production']
  );
  
  console.log('Environment variable created:', env.id);
}

// Create multiple environment variables
async function createMultipleEnvVars() {
  const envVars = [
    { key: 'DATABASE_URL', value: 'postgresql://...', target: ['production'] },
    { key: 'REDIS_URL', value: 'redis://...', target: ['production'] },
    { key: 'DEBUG', value: 'false', target: ['production'] },
    { key: 'DEBUG', value: 'true', target: ['development', 'preview'] }
  ];
  
  for (const envVar of envVars) {
    await vercel.createEnvironmentVariable(
      'project-id',
      envVar.key,
      envVar.value,
      envVar.target
    );
    console.log(\`Created: \${envVar.key}\`);
  }
}`;

  const domainsCode = `// Get domains for a project
async function getDomains() {
  const domains = await vercel.getDomains('project-id');
  
  console.log('Project domains:');
  domains.forEach(domain => {
    console.log(\`- \${domain.name} (verified: \${domain.verified})\`);
  });
}

// Add a custom domain
async function addDomain() {
  const domain = await vercel.addDomain('project-id', 'my-awesome-app.com', {
    gitBranch: 'main'
  });
  
  console.log('Domain added:', domain.name);
  console.log('Verified:', domain.verified);
  
  if (!domain.verified && domain.verification) {
    console.log('Verification records needed:');
    domain.verification.forEach(record => {
      console.log(\`- Type: \${record.type}\`);
      console.log(\`  Domain: \${record.domain}\`);
      console.log(\`  Value: \${record.value}\`);
    });
  }
}

// Verify domain
async function verifyDomain() {
  try {
    const domain = await vercel.verifyDomain('project-id', 'my-awesome-app.com');
    console.log('Domain verification result:', domain.verified);
  } catch (error) {
    console.error('Domain verification failed:', error);
  }
}

// Remove domain
async function removeDomain() {
  await vercel.removeDomain('project-id', 'old-domain.com');
  console.log('Domain removed successfully');
}`;

  const features = [
    {
      name: 'Deployment Automation',
      description: 'Trigger and monitor deployments programmatically',
      icon: <Zap className="h-4 w-4" />
    },
    {
      name: 'Project Management',
      description: 'Create and configure Vercel projects',
      icon: <Settings className="h-4 w-4" />
    },
    {
      name: 'Domain Management',
      description: 'Add and verify custom domains',
      icon: <Globe className="h-4 w-4" />
    },
    {
      name: 'Environment Variables',
      description: 'Manage environment configuration',
      icon: <Database className="h-4 w-4" />
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
            <Cloud className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Production APIs
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-black dark:bg-white p-3 rounded-full">
              <Cloud className="h-8 w-8 text-white dark:text-black" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Vercel API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete deployment automation and project management for the Vercel platform
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Vercel API wrapper provides comprehensive access to Vercel's platform API, enabling you to automate deployments, manage projects, configure domains, and handle environment variables programmatically. Perfect for CI/CD pipelines, DevOps automation, and custom deployment workflows.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-black dark:text-white border border-gray-500/20">Deployments</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Project Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Domain Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Environment Variables</span>
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
            <Package className="h-6 w-6 mr-2" />
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
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'projects' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Project Management
              </button>
              <button
                onClick={() => setActiveTab('deployments')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'deployments' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Deployments
              </button>
              <button
                onClick={() => setActiveTab('environment')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'environment' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Environment Variables
              </button>
              <button
                onClick={() => setActiveTab('domains')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'domains' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Domain Management
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
                  Access Token Setup
                </h3>
                <p className="text-muted-foreground mb-4">You need a valid Vercel access token to use the Vercel API. The token should have appropriate permissions for the operations you want to perform.</p>
                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Log in to your Vercel Dashboard</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Go to Account Settings by clicking your profile avatar</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Navigate to the "Tokens" section</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Click "Create Token" and give it a descriptive name</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Set the appropriate scope (usually "Full Access" for development)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy the generated token and store it securely</span>
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
                    <strong>Security Best Practice:</strong> Never hardcode your access token in your source code. Always use environment variables and ensure your .env file is included in your .gitignore.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'projects' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Project Management
                </h3>
                <p className="text-muted-foreground mb-4">Create, update, and manage Vercel projects programmatically</p>
                <CodeBlock code={projectCode} id="projects" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'deployments' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Deployment Operations
                </h3>
                <p className="text-muted-foreground mb-4">Automate deployments and monitor deployment status</p>
                <CodeBlock code={deploymentCode} id="deployments" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'environment' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Environment Variables
                </h3>
                <p className="text-muted-foreground mb-4">Manage environment configuration for your projects</p>
                <CodeBlock code={envVarsCode} id="environment" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'domains' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Domain Management
                </h3>
                <p className="text-muted-foreground mb-4">Add, verify, and manage custom domains</p>
                <CodeBlock code={domainsCode} id="domains" />
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
                <span>Cache project IDs to avoid repeated API calls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use specific filters when listing deployments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monitor deployment status rather than polling frequently</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement proper retry logic for transient failures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* API Reference */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">API Reference</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            For complete API documentation and additional endpoints, visit the <a href="https://vercel.com/docs/rest-api" className="text-primary underline">official Vercel API documentation</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary" />
                Rate Limits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Hobby:</strong> 100 requests per minute</li>
                <li><strong>Pro:</strong> 1,000 requests per minute</li>
                <li><strong>Enterprise:</strong> Custom limits</li>
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <GitBranch className="h-5 w-5 mr-2 text-primary" />
                Supported Frameworks
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Next.js</li>
                <li>• React (Create React App)</li>
                <li>• Vue.js</li>
                <li>• Nuxt.js</li>
                <li>• Svelte</li>
                <li>• Angular</li>
                <li>• Gatsby</li>
                <li>• Static sites</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Resources */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://vercel.com/docs" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Vercel Documentation</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Read Docs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://vercel.com/docs/rest-api" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Vercel API Reference</h3>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>API Reference</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/cptcr/macro_api/issues" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="h-6 w-6 text-purple-600" />
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

export default VercelDocs;