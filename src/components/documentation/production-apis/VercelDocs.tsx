import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Cloud, Settings, GitBranch, Globe, Activity, Users, Package } from 'lucide-react';

const VercelDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-black dark:text-white">
            <Cloud className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Vercel API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete deployment automation and project management for the Vercel platform
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
            Deployments
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Project Management
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Domain Management
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Environment Variables
          </span>
        </div>
      </div>

      ## Overview

      The Vercel API wrapper provides comprehensive access to Vercel's platform API, enabling you to automate deployments, manage projects, configure domains, and handle environment variables programmatically. Perfect for CI/CD pipelines, DevOps automation, and custom deployment workflows.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Deployment Automation</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Trigger and monitor deployments programmatically</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Settings className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Project Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create and configure Vercel projects</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Globe className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Domain Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Add and verify custom domains</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-orange-600 mb-2" />
          <h3 className="font-semibold mb-1">Environment Variables</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage environment configuration</p>
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
        typescript={`import { VercelAPI } from 'macro_api';

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
}`}
        javascript={`const { VercelAPI } = require('macro_api');

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
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="Access Token Required">
        You need a valid Vercel access token to use the Vercel API. The token should have appropriate permissions for the operations you want to perform.
      </InfoBox>

      ### Getting Your Access Token

      1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
      2. Go to Account Settings by clicking your profile avatar
      3. Navigate to the "Tokens" section
      4. Click "Create Token" and give it a descriptive name
      5. Set the appropriate scope (usually "Full Access" for development)
      6. Copy the generated token and store it securely
      7. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
VERCEL_ACCESS_TOKEN=your_vercel_access_token_here

// In your application
import { VercelAPI } from 'macro_api';

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});`}
        javascript={`// .env file
VERCEL_ACCESS_TOKEN=your_vercel_access_token_here

// In your application
const { VercelAPI } = require('macro_api');

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never hardcode your access token in your source code. Always use environment variables and ensure your `.env` file is included in your `.gitignore`.
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">accessToken</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your Vercel access token</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">teamId</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Team ID for team-scoped operations</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Project Management

      <CodeExampleSwitcher
        typescript={`// List all projects
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
}`}
        javascript={`// List all projects
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
    gitRepository: {
      type: 'github',
      repo: 'username/my-new-app'
    }
  });
  
  console.log('Created project:', project.id);
}`}
        title="Project management"
      />

      ### Deployment Operations

      <CodeExampleSwitcher
        typescript={`// List deployments
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
}

// Create a deployment from Git
async function createGitDeployment() {
  const deployment = await vercel.createDeployment({
    name: 'my-nextjs-app',
    gitSource: {
      type: 'github',
      repo: 'username/my-nextjs-app',
      ref: 'main'
    },
    env: {
      NODE_ENV: 'production',
      API_URL: 'https://api.example.com'
    },
    buildCommand: 'npm run build',
    outputDirectory: '.next'
  });
  
  console.log(\`Git deployment created: \${deployment.url}\`);
}

// Cancel a deployment
async function cancelDeployment() {
  const canceled = await vercel.cancelDeployment('deployment-id');
  console.log('Deployment canceled:', canceled.uid);
}

// Wait for deployment to complete
async function waitForDeployment() {
  try {
    const deployment = await vercel.waitForDeployment(
      'deployment-id',
      600000, // 10 minutes timeout
      5000    // check every 5 seconds
    );
    
    console.log(\`Deployment completed: \${deployment.url}\`);
  } catch (error) {
    console.error('Deployment failed or timed out:', error);
  }
}`}
        javascript={`// List deployments
async function listDeployments() {
  const { deployments } = await vercel.listDeployments({
    app: 'my-app',
    limit: 10,
    state: 'READY'
  });
  
  console.log(\`Found \${deployments.length} deployments\`);
}

// Create a deployment
async function createDeployment() {
  const deployment = await vercel.createDeployment({
    name: 'my-app',
    files: [
      {
        file: 'index.html',
        data: '<html><body><h1>Hello, World!</h1></body></html>'
      }
    ]
  });
  
  console.log(\`Deployment created: \${deployment.url}\`);
}`}
        title="Deployment operations"
      />

      ### Environment Variables

      <CodeExampleSwitcher
        typescript={`// Get environment variables
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
}

// Update environment variable
async function updateEnvironmentVariable() {
  const updatedEnv = await vercel.updateEnvironmentVariable(
    'project-id',
    'env-id',
    {
      value: 'https://api.updated.com',
      target: ['production', 'preview']
    }
  );
  
  console.log('Environment variable updated:', updatedEnv.key);
}

// Delete environment variable
async function deleteEnvironmentVariable() {
  await vercel.deleteEnvironmentVariable('project-id', 'env-id');
  console.log('Environment variable deleted');
}`}
        javascript={`// Get environment variables
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
}`}
        title="Environment variable management"
      />

      ### Domain Management

      <CodeExampleSwitcher
        typescript={`// Get domains for a project
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

// Add domain with redirect
async function addDomainWithRedirect() {
  const domain = await vercel.addDomain('project-id', 'old-domain.com', {
    redirect: 'https://new-domain.com',
    redirectStatusCode: 301
  });
  
  console.log(\`Redirect domain added: \${domain.name} -> \${domain.redirect}\`);
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
}`}
        javascript={`// Get domains for a project
async function getDomains() {
  const domains = await vercel.getDomains('project-id');
  
  console.log('Project domains:');
  domains.forEach(domain => {
    console.log(\`- \${domain.name} (verified: \${domain.verified})\`);
  });
}

// Add a custom domain
async function addDomain() {
  const domain = await vercel.addDomain('project-id', 'my-awesome-app.com');
  console.log('Domain added:', domain.name);
}`}
        title="Domain management"
      />

      ### Deployment Logs and Monitoring

      <CodeExampleSwitcher
        typescript={`// Get deployment logs
async function getDeploymentLogs() {
  const logs = await vercel.getDeploymentLogs('deployment-id', {
    direction: 'backward',
    limit: 100
  });
  
  console.log(\`Found \${logs.length} log entries\`);
  
  logs.forEach(log => {
    const timestamp = new Date(log.timestamp).toISOString();
    console.log(\`[\${timestamp}] \${log.source}: \${log.message}\`);
  });
}

// Get deployment files
async function getDeploymentFiles() {
  const files = await vercel.getDeploymentFiles('deployment-id');
  
  console.log('Deployment files:');
  files.forEach((file: any) => {
    console.log(\`- \${file.name} (\${file.size} bytes)\`);
  });
}

// Monitor deployment progress
async function monitorDeployment(deploymentId: string) {
  console.log('Starting deployment monitoring...');
  
  const checkStatus = async () => {
    try {
      const deployment = await vercel.getDeployment(deploymentId);
      
      console.log(\`Status: \${deployment.state}\`);
      
      if (deployment.state === 'READY') {
        console.log(\`✅ Deployment completed: \${deployment.url}\`);
        return true;
      } else if (deployment.state === 'ERROR') {
        console.log('❌ Deployment failed');
        
        // Get logs for debugging
        const logs = await vercel.getDeploymentLogs(deploymentId, {
          direction: 'backward',
          limit: 10
        });
        
        console.log('Recent logs:');
        logs.forEach(log => {
          if (log.level === 'error') {
            console.log(\`  ERROR: \${log.message}\`);
          }
        });
        
        return true;
      } else if (deployment.state === 'CANCELED') {
        console.log('🚫 Deployment was canceled');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error checking deployment status:', error);
      return true;
    }
  };
  
  // Check status every 5 seconds
  const interval = setInterval(async () => {
    const isDone = await checkStatus();
    if (isDone) {
      clearInterval(interval);
    }
  }, 5000);
  
  // Initial check
  await checkStatus();
}`}
        javascript={`// Get deployment logs
async function getDeploymentLogs() {
  const logs = await vercel.getDeploymentLogs('deployment-id', {
    direction: 'backward',
    limit: 100
  });
  
  console.log(\`Found \${logs.length} log entries\`);
  
  logs.forEach(log => {
    const timestamp = new Date(log.timestamp).toISOString();
    console.log(\`[\${timestamp}] \${log.source}: \${log.message}\`);
  });
}`}
        title="Logs and monitoring"
      />

      ### User and Team Management

      <CodeExampleSwitcher
        typescript={`// Get current user information
async function getCurrentUser() {
  const user = await vercel.getCurrentUser();
  console.log('Current user:', {
    id: user.uid,
    username: user.username,
    email: user.email
  });
}

// Get team information (if using team token)
async function getTeam() {
  try {
    const team = await vercel.getTeam();
    console.log('Team information:', {
      id: team.id,
      name: team.name,
      slug: team.slug
    });
  } catch (error) {
    console.log('Not using team token or team not found');
  }
}

// Test API connection
async function testConnection() {
  const isConnected = await vercel.testConnection();
  console.log('API connection:', isConnected ? '✅ Connected' : '❌ Failed');
  
  if (!isConnected) {
    console.log('Please check your access token');
  }
}`}
        javascript={`// Get current user information
async function getCurrentUser() {
  const user = await vercel.getCurrentUser();
  console.log('Current user:', user);
}

// Test API connection
async function testConnection() {
  const isConnected = await vercel.testConnection();
  console.log('API connection:', isConnected ? '✅ Connected' : '❌ Failed');
}`}
        title="User and team information"
      />

      ## Advanced Features

      ### Deployment with Custom Configuration

      <CodeExampleSwitcher
        typescript={`// Deploy Next.js app with custom configuration
async function deployNextJSApp() {
  const deployment = await vercel.createDeployment({
    name: 'my-nextjs-app',
    gitSource: {
      type: 'github',
      repo: 'username/my-nextjs-app',
      ref: 'production'
    },
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_API_URL: 'https://api.example.com',
      DATABASE_URL: process.env.DATABASE_URL
    },
    buildCommand: 'npm run build',
    outputDirectory: '.next',
    installCommand: 'npm ci',
    devCommand: 'npm run dev',
    regions: ['iad1', 'sfo1'], // Deploy to multiple regions
    functions: {
      'pages/api/*.js': {
        runtime: 'nodejs18.x',
        memory: 1024,
        maxDuration: 30
      }
    },
    routes: [
      {
        src: '/api/(.*)',
        dest: '/api/$1'
      },
      {
        src: '/(.*)',
        dest: '/$1'
      }
    ]
  });
  
  console.log(\`Next.js deployment: \${deployment.url}\`);
  return deployment;
}

// Deploy static site with redirects
async function deployStaticSite() {
  const deployment = await vercel.createDeployment({
    name: 'my-static-site',
    files: [
      {
        file: 'index.html',
        data: '<!DOCTYPE html><html><head><title>Home</title></head><body><h1>Welcome!</h1></body></html>'
      },
      {
        file: 'about.html',
        data: '<!DOCTYPE html><html><head><title>About</title></head><body><h1>About Us</h1></body></html>'
      }
    ],
    cleanUrls: true,
    trailingSlash: false,
    redirects: [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: false
      }
    ],
    headers: [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  });
  
  console.log(\`Static site deployment: \${deployment.url}\`);
  return deployment;
}`}
        javascript={`// Deploy Next.js app with configuration
async function deployNextJSApp() {
  const deployment = await vercel.createDeployment({
    name: 'my-nextjs-app',
    gitSource: {
      type: 'github',
      repo: 'username/my-nextjs-app',
      ref: 'production'
    },
    env: {
      NODE_ENV: 'production',
      API_URL: 'https://api.example.com'
    }
  });
  
  console.log(\`Deployment: \${deployment.url}\`);
  return deployment;
}`}
        title="Advanced deployment configuration"
      />

      ### CI/CD Integration

      <CodeExampleSwitcher
        typescript={`// GitHub Actions workflow integration
async function cicdDeployment() {
  // This would typically be in a GitHub Actions workflow
  const projectId = process.env.VERCEL_PROJECT_ID;
  const gitCommitSha = process.env.GITHUB_SHA;
  const gitBranch = process.env.GITHUB_REF_NAME;
  
  console.log(\`Deploying commit \${gitCommitSha} from branch \${gitBranch}\`);
  
  try {
    // Create deployment
    const deployment = await vercel.createDeployment({
      name: 'my-app',
      gitSource: {
        type: 'github',
        repo: process.env.GITHUB_REPOSITORY!,
        ref: gitBranch,
        sha: gitCommitSha
      },
      env: {
        NODE_ENV: gitBranch === 'main' ? 'production' : 'staging',
        BRANCH: gitBranch,
        COMMIT_SHA: gitCommitSha
      },
      target: gitBranch === 'main' ? 'production' : 'preview'
    });
    
    console.log(\`Deployment created: \${deployment.url}\`);
    
    // Wait for deployment to complete
    const completedDeployment = await vercel.waitForDeployment(
      deployment.uid,
      600000 // 10 minutes
    );
    
    if (completedDeployment.state === 'READY') {
      console.log('✅ Deployment successful');
      
      // Add comment to PR with deployment URL (if it's a PR)
      if (process.env.GITHUB_EVENT_NAME === 'pull_request') {
        console.log(\`Preview URL: \${completedDeployment.url}\`);
        // You would integrate with GitHub API to comment on the PR
      }
    }
    
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    process.exit(1);
  }
}

// Deployment status webhook handler
function handleVercelWebhook(req: any, res: any) {
  const { deployment, type } = req.body;
  
  switch (type) {
    case 'deployment.created':
      console.log(\`New deployment created: \${deployment.url}\`);
      break;
      
    case 'deployment.ready':
      console.log(\`Deployment ready: \${deployment.url}\`);
      // Notify team, update status, etc.
      break;
      
    case 'deployment.error':
      console.log(\`Deployment failed: \${deployment.url}\`);
      // Send alerts, log errors, etc.
      break;
      
    default:
      console.log(\`Unknown webhook type: \${type}\`);
  }
  
  res.status(200).json({ received: true });
}`}
        javascript={`// CI/CD deployment function
async function cicdDeployment() {
  const deployment = await vercel.createDeployment({
    name: 'my-app',
    gitSource: {
      type: 'github',
      repo: process.env.GITHUB_REPOSITORY,
      ref: process.env.GITHUB_REF_NAME
    },
    env: {
      NODE_ENV: 'production'
    }
  });
  
  console.log(\`Deployment: \${deployment.url}\`);
}`}
        title="CI/CD integration"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        The Vercel API has rate limits. Implement proper error handling to manage rate limit responses gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { VercelAPI } from 'macro_api';

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN!
});

// Comprehensive error handling
async function robustVercelOperation() {
  try {
    const projects = await vercel.listProjects();
    return projects;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('401')) {
        console.error('Invalid access token. Please check your credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('403')) {
        console.error('Insufficient permissions for this operation.');
        throw new Error('Permission denied');
      } else if (error.message.includes('404')) {
        console.error('Resource not found. Check your project ID or team settings.');
        return null;
      } else if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement exponential backoff
        await new Promise(resolve => setTimeout(resolve, 5000));
        return await robustVercelOperation(); // Retry once
      } else {
        console.error('Vercel API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(\`Retry attempt \${attempt} in \${delay}ms...\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Max retries exceeded');
}

// Usage with error handling
async function safeDeployment() {
  try {
    const deployment = await retryWithBackoff(async () => {
      return await vercel.createDeployment({
        name: 'my-app',
        files: [
          { file: 'index.html', data: '<h1>Hello World</h1>' }
        ]
      });
    });
    
    console.log(\`Deployment successful: \${deployment.url}\`);
    return deployment;
  } catch (error) {
    console.error('Failed to create deployment after retries:', error);
    throw error;
  }
}`}
        javascript={`const { VercelAPI } = require('macro_api');

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});

// Basic error handling
async function robustVercelOperation() {
  try {
    const projects = await vercel.listProjects();
    return projects;
  } catch (error) {
    if (error.message.includes('401')) {
      console.error('Invalid access token');
      throw new Error('Authentication failed');
    } else if (error.message.includes('429')) {
      console.error('Rate limit exceeded');
      // Wait and retry
      await new Promise(resolve => setTimeout(resolve, 5000));
      return await robustVercelOperation();
    }
    
    throw error;
  }
}`}
        title="Robust error handling"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Cache project IDs to avoid repeated API calls
        - Use specific filters when listing deployments
        - Monitor deployment status rather than polling frequently
        - Implement proper retry logic for transient failures
      </InfoBox>

      ### Deployment Best Practices

      <CodeExampleSwitcher
        typescript={`// Best practices for production deployments
class VercelDeploymentManager {
  private vercel: VercelAPI;
  private projectCache = new Map<string, string>();
  
  constructor(accessToken: string) {
    this.vercel = new VercelAPI({ accessToken });
  }
  
  // Cache project IDs to reduce API calls
  async getProjectId(projectName: string): Promise<string> {
    if (this.projectCache.has(projectName)) {
      return this.projectCache.get(projectName)!;
    }
    
    const { projects } = await this.vercel.listProjects({
      search: projectName,
      limit: 1
    });
    
    if (projects.length === 0) {
      throw new Error(\`Project not found: \${projectName}\`);
    }
    
    const projectId = projects[0].id;
    this.projectCache.set(projectName, projectId);
    return projectId;
  }
  
  // Deploy with environment-specific configuration
  async deployWithEnvironment(
    projectName: string,
    environment: 'development' | 'staging' | 'production',
    gitRef: string = 'main'
  ) {
    const projectId = await this.getProjectId(projectName);
    
    // Environment-specific settings
    const envConfig = {
      development: {
        target: 'preview' as const,
        env: { NODE_ENV: 'development', DEBUG: 'true' }
      },
      staging: {
        target: 'preview' as const,
        env: { NODE_ENV: 'staging', DEBUG: 'false' }
      },
      production: {
        target: 'production' as const,
        env: { NODE_ENV: 'production', DEBUG: 'false' }
      }
    };
    
    const config = envConfig[environment];
    
    const deployment = await this.vercel.createDeployment({
      name: projectName,
      gitSource: {
        type: 'github',
        repo: \`username/\${projectName}\`,
        ref: gitRef
      },
      env: config.env,
      target: config.target
    });
    
    console.log(\`\${environment} deployment: \${deployment.url}\`);
    
    // Wait for completion with timeout
    try {
      await this.vercel.waitForDeployment(deployment.uid, 600000);
      console.log(\`✅ \${environment} deployment completed\`);
    } catch (error) {
      console.error(\`❌ \${environment} deployment failed:\`, error);
      throw error;
    }
    
    return deployment;
  }
  
  // Atomic environment variable updates
  async updateEnvironmentVariables(
    projectName: string,
    variables: { [key: string]: { value: string; target: string[] } }
  ) {
    const projectId = await this.getProjectId(projectName);
    
    // Get existing environment variables
    const { envs } = await this.vercel.getEnvironmentVariables(projectId);
    
    const updates: Promise<any>[] = [];
    
    for (const [key, config] of Object.entries(variables)) {
      const existing = envs.find((env: any) => env.key === key);
      
      if (existing) {
        // Update existing
        updates.push(
          this.vercel.updateEnvironmentVariable(projectId, existing.id!, {
            value: config.value,
            target: config.target
          })
        );
      } else {
        // Create new
        updates.push(
          this.vercel.createEnvironmentVariable(
            projectId,
            key,
            config.value,
            config.target
          )
        );
      }
    }
    
    await Promise.all(updates);
    console.log(\`Updated \${updates.length} environment variables\`);
  }
}`}
        javascript={`// Deployment manager class
class VercelDeploymentManager {
  constructor(accessToken) {
    this.vercel = new VercelAPI({ accessToken });
    this.projectCache = new Map();
  }
  
  async getProjectId(projectName) {
    if (this.projectCache.has(projectName)) {
      return this.projectCache.get(projectName);
    }
    
    const { projects } = await this.vercel.listProjects({
      search: projectName,
      limit: 1
    });
    
    if (projects.length === 0) {
      throw new Error(\`Project not found: \${projectName}\`);
    }
    
    const projectId = projects[0].id;
    this.projectCache.set(projectName, projectId);
    return projectId;
  }
  
  async deployWithEnvironment(projectName, environment, gitRef = 'main') {
    const projectId = await this.getProjectId(projectName);
    
    const deployment = await this.vercel.createDeployment({
      name: projectName,
      gitSource: {
        type: 'github',
        repo: \`username/\${projectName}\`,
        ref: gitRef
      },
      env: { NODE_ENV: environment }
    });
    
    console.log(\`Deployment: \${deployment.url}\`);
    return deployment;
  }
}`}
        title="Deployment best practices"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit the [official Vercel API documentation](https://vercel.com/docs/rest-api).

      ### Rate Limits

      Vercel API rate limits vary by plan:
      - **Hobby**: 100 requests per minute
      - **Pro**: 1,000 requests per minute  
      - **Enterprise**: Custom limits

      ### Supported Frameworks

      The Vercel API supports automatic detection of popular frameworks:
      - Next.js
      - React (Create React App)
      - Vue.js
      - Nuxt.js
      - Svelte
      - Angular
      - Gatsby
      - Static sites

      ### Support

      - [Vercel Documentation](https://vercel.com/docs)
      - [Vercel API Reference](https://vercel.com/docs/rest-api)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default VercelDocs;