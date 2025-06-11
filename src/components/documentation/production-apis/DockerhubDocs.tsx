import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Container, Users, Download, Upload, Settings, Globe, Lock, Trash2, RefreshCw } from 'lucide-react';

const DockerhubDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            <Container className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Docker Hub API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Production-ready Docker Hub API wrapper for container registry management
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Repository Management
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Container Registry
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Webhooks
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Automated Builds
          </span>
        </div>
      </div>

      ## Overview

      The Docker Hub API wrapper provides comprehensive access to Docker Hub's container registry services. 
      Manage repositories, tags, automated builds, webhooks, and monitor download statistics with a production-ready interface.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Repository Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create, update, and delete Docker repositories</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Container className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Tag Operations</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">List, inspect, and manage container tags</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Settings className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Automated Builds</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Configure and trigger automated builds</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Globe className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Webhooks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Real-time notifications for registry events</p>
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
        typescript={`import { DockerHubAPI } from 'macro_api';

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
}`}
        javascript={`const { DockerHubAPI } = require('macro_api');

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
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="Access Token Required">
        You need a valid Docker Hub access token to use the API. Personal Access Tokens are recommended for security.
      </InfoBox>

      ### Getting Your Docker Hub Token

      1. Log in to [Docker Hub](https://hub.docker.com)
      2. Go to Account Settings → Security
      3. Click "New Access Token"
      4. Give it a descriptive name and set appropriate permissions
      5. Copy the generated token immediately (it won't be shown again)
      6. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
DOCKER_HUB_TOKEN=dckr_pat_your_personal_access_token_here

// In your application
import { DockerHubAPI } from 'macro_api';

const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN,
  namespace: 'myusername' // Optional default namespace
});`}
        javascript={`// .env file
DOCKER_HUB_TOKEN=dckr_pat_your_personal_access_token_here

// In your application
const { DockerHubAPI } = require('macro_api');

const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN,
  namespace: 'myusername' // Optional default namespace
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Use Personal Access Tokens instead of passwords. Store tokens securely as environment variables and rotate them regularly.
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">token</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Docker Hub Personal Access Token</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">namespace</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Default namespace for repository operations</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Repository Management

      ### Basic Repository Operations

      <CodeExampleSwitcher
        typescript={`// Get repository information
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
}`}
        javascript={`// Get repository information
async function getRepositoryDetails() {
  const repo = await dockerHub.getRepository('nginx');
  console.log(\`Repository: \${repo.name}\`);
  console.log(\`Description: \${repo.description}\`);
  console.log(\`Pull count: \${repo.pullCount}\`);
  console.log(\`Star count: \${repo.starCount}\`);
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
}`}
        title="Repository information and listing"
      />

      ### Creating and Managing Repositories

      <CodeExampleSwitcher
        typescript={`// Create a new repository
async function createRepository() {
  const newRepo = await dockerHub.createRepository('myusername/new-app', {
    description: 'My awesome application container',
    fullDescription: \`# My New App

This container includes:
- Node.js application
- Production optimizations
- Health checks included

## Usage

\\\`\\\`\\\`bash
docker run -p 3000:3000 myusername/new-app
\\\`\\\`\\\`\`,
    isPrivate: false
  });
  
  console.log(\`Created repository: \${newRepo.name}\`);
  console.log(\`Repository URL: https://hub.docker.com/r/\${newRepo.namespace}/\${newRepo.name}\`);
}

// Update repository information
async function updateRepository() {
  const updatedRepo = await dockerHub.updateRepository('myusername/myapp', {
    description: 'Updated description for my app',
    fullDescription: 'Updated full description with new features',
    isPrivate: false
  });
  
  console.log('Repository updated successfully');
}

// Delete a repository (use with caution!)
async function deleteRepository() {
  await dockerHub.deleteRepository('myusername/old-app');
  console.log('Repository deleted');
}`}
        javascript={`// Create a new repository
async function createRepository() {
  const newRepo = await dockerHub.createRepository('myusername/new-app', {
    description: 'My awesome application container',
    isPrivate: false
  });
  
  console.log(\`Created repository: \${newRepo.name}\`);
}

// Update repository information
async function updateRepository() {
  const updatedRepo = await dockerHub.updateRepository('myusername/myapp', {
    description: 'Updated description for my app'
  });
  
  console.log('Repository updated successfully');
}`}
        title="Creating and updating repositories"
      />

      ## Tag Management

      ### Listing and Inspecting Tags

      <CodeExampleSwitcher
        typescript={`// List all tags for a repository
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
  
  // Show layer information
  tagDetails.images.forEach((image, index) => {
    console.log(\`Image \${index + 1} (\${image.architecture}/\${image.os}):\`);
    console.log(\`  Size: \${(image.size / 1024 / 1024).toFixed(1)} MB\`);
    if (image.layers) {
      console.log(\`  Layers: \${image.layers.length}\`);
    }
  });
}

// Check if a tag exists
async function checkTag() {
  const exists = await dockerHub.tagExists('nginx', 'latest');
  console.log(\`Tag exists: \${exists}\`);
}`}
        javascript={`// List all tags for a repository
async function listTags() {
  const result = await dockerHub.listTags('nginx', {
    page: 1,
    pageSize: 50,
    ordering: '-last_updated'
  });
  
  console.log(\`Total tags: \${result.count}\`);
  result.results.forEach(tag => {
    console.log(\`Tag: \${tag.name}\`);
    console.log(\`  Size: \${(tag.fullSize / 1024 / 1024).toFixed(1)} MB\`);
    console.log(\`  Last updated: \${tag.lastUpdated}\`);
  });
}

// Get detailed information about a specific tag
async function getTagDetails() {
  const tagDetails = await dockerHub.getTagDetails('nginx', 'latest');
  
  console.log(\`Tag: \${tagDetails.name}\`);
  console.log(\`Full size: \${(tagDetails.fullSize / 1024 / 1024).toFixed(1)} MB\`);
}`}
        title="Tag listing and inspection"
      />

      ### Tag Operations

      <CodeExampleSwitcher
        typescript={`// Delete a tag (use with caution!)
async function deleteTag() {
  const result = await dockerHub.deleteTag('myusername/myapp', 'old-version');
  
  if (result.success) {
    console.log('Tag deleted successfully');
  } else {
    console.error('Failed to delete tag:', result.message);
  }
}

// Get vulnerability report for a tag
async function getVulnerabilities() {
  const vulnerabilities = await dockerHub.getVulnerabilityReport('nginx', 'latest');
  
  if (vulnerabilities) {
    console.log('Vulnerability scan results:');
    console.log(JSON.stringify(vulnerabilities, null, 2));
  } else {
    console.log('No vulnerability data available');
  }
}

// Get manifest information
async function getManifest() {
  const manifest = await dockerHub.getManifest('nginx', 'latest');
  console.log('Manifest information:');
  console.log(JSON.stringify(manifest, null, 2));
}`}
        javascript={`// Delete a tag (use with caution!)
async function deleteTag() {
  const result = await dockerHub.deleteTag('myusername/myapp', 'old-version');
  
  if (result.success) {
    console.log('Tag deleted successfully');
  } else {
    console.error('Failed to delete tag:', result.message);
  }
}

// Get vulnerability report for a tag
async function getVulnerabilities() {
  const vulnerabilities = await dockerHub.getVulnerabilityReport('nginx', 'latest');
  
  if (vulnerabilities) {
    console.log('Vulnerability scan results available');
  }
}`}
        title="Tag operations and security"
      />

      ## Search and Discovery

      <CodeExampleSwitcher
        typescript={`// Search for repositories
async function searchRepositories() {
  const results = await dockerHub.searchRepositories('node', {
    limit: 20,
    filters: {
      isOfficial: true,
      starCount: 100 // Minimum stars
    }
  });
  
  console.log(\`Found \${results.count} repositories\`);
  results.results.forEach(repo => {
    console.log(\`\${repo.name} - \${repo.description}\`);
    console.log(\`  Stars: \${repo.starCount}, Pulls: \${repo.pullCount}\`);
    console.log(\`  Official: \${repo.isAutomated ? 'Yes' : 'No'}\`);
  });
}

// Search with advanced filters
async function advancedSearch() {
  const officialImages = await dockerHub.searchRepositories('', {
    limit: 50,
    filters: {
      isOfficial: true,
      starCount: 500
    }
  });
  
  console.log('Official images with high stars:');
  officialImages.results
    .sort((a, b) => b.starCount - a.starCount)
    .slice(0, 10)
    .forEach(repo => {
      console.log(\`\${repo.name}: \${repo.starCount} stars\`);
    });
}`}
        javascript={`// Search for repositories
async function searchRepositories() {
  const results = await dockerHub.searchRepositories('node', {
    limit: 20,
    filters: {
      isOfficial: true,
      starCount: 100
    }
  });
  
  console.log(\`Found \${results.count} repositories\`);
  results.results.forEach(repo => {
    console.log(\`\${repo.name} - \${repo.description}\`);
    console.log(\`  Stars: \${repo.starCount}, Pulls: \${repo.pullCount}\`);
  });
}`}
        title="Repository search and discovery"
      />

      ## Download Statistics

      <CodeExampleSwitcher
        typescript={`// Get download statistics
async function getDownloadStats() {
  const stats = await dockerHub.getDownloadStats('nginx', 'month');
  
  console.log('Download Statistics:');
  console.log(\`Total downloads: \${stats.total_downloads.toLocaleString()}\`);
  console.log(\`Daily downloads: \${stats.daily_downloads.toLocaleString()}\`);
  console.log(\`Weekly downloads: \${stats.weekly_downloads.toLocaleString()}\`);
  console.log(\`Monthly downloads: \${stats.monthly_downloads.toLocaleString()}\`);
  console.log(\`Period: \${stats.period_start} to \${stats.period_end}\`);
  
  // Show breakdown by date if available
  if (stats.breakdown_by_date) {
    console.log('\\nDaily breakdown:');
    stats.breakdown_by_date.forEach(day => {
      console.log(\`  \${day.date}: \${day.downloads} downloads\`);
    });
  }
  
  // Show breakdown by country if available
  if (stats.breakdown_by_country) {
    console.log('\\nTop countries:');
    stats.breakdown_by_country
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, 5)
      .forEach(country => {
        console.log(\`  \${country.country}: \${country.downloads} downloads\`);
      });
  }
}

// Monitor repository popularity
async function monitorPopularity() {
  const repos = ['nginx', 'node', 'alpine', 'ubuntu'];
  
  for (const repo of repos) {
    try {
      const info = await dockerHub.getRepository(repo);
      const stats = await dockerHub.getDownloadStats(repo);
      
      console.log(\`\${repo}:\`);
      console.log(\`  Total pulls: \${info.pullCount.toLocaleString()}\`);
      console.log(\`  Stars: \${info.starCount}\`);
      console.log(\`  Monthly downloads: \${stats.monthly_downloads.toLocaleString()}\`);
    } catch (error) {
      console.error(\`Error fetching data for \${repo}:, error\`);
    }
  }
}`}
        javascript={`// Get download statistics
async function getDownloadStats() {
  const stats = await dockerHub.getDownloadStats('nginx', 'month');
  
  console.log('Download Statistics:');
  console.log(\`Total downloads: \${stats.total_downloads}\`);
  console.log(\`Daily downloads: \${stats.daily_downloads}\`);
  console.log(\`Weekly downloads: \${stats.weekly_downloads}\`);
  console.log(\`Monthly downloads: \${stats.monthly_downloads}\`);
}`}
        title="Download statistics and analytics"
      />

      ## Automated Builds

      <CodeExampleSwitcher
        typescript={`// Get build triggers for a repository
async function getBuildTriggers() {
  const triggers = await dockerHub.getBuildTriggers('myusername/myapp');
  
  console.log('Build triggers:');
  triggers.forEach(trigger => {
    console.log(\`- \${trigger.name}\`);
    console.log(\`  Type: \${trigger.source_type}\`);
    console.log(\`  Source: \${trigger.source_name}\`);
    console.log(\`  Dockerfile: \${trigger.dockerfile_location}\`);
    console.log(\`  Tag: \${trigger.tag}\`);
    console.log(\`  Status: \${trigger.status}\`);
  });
}

// Create a build trigger
async function createBuildTrigger() {
  const trigger = await dockerHub.createBuildTrigger('myusername/myapp', {
    name: 'main-branch-trigger',
    sourceType: 'Branch',
    sourceName: 'main',
    dockerfileLocation: '/Dockerfile',
    buildContext: '/',
    tag: 'latest',
    buildArgs: {
      NODE_ENV: 'production',
      VERSION: '1.0.0'
    }
  });
  
  console.log(\`Created build trigger: \${trigger.name}\`);
}

// Trigger a build manually
async function triggerBuild() {
  const buildResult = await dockerHub.triggerBuild('myusername/myapp', {
    sourceType: 'Branch',
    sourceName: 'main'
  });
  
  console.log(\`Build triggered: \${buildResult.build_tag}\`);
  console.log(\`Request ID: \${buildResult.request_id}\`);
}

// Delete a build trigger
async function deleteBuildTrigger() {
  await dockerHub.deleteBuildTrigger('myusername/myapp', 'trigger-id-here');
  console.log('Build trigger deleted');
}`}
        javascript={`// Get build triggers for a repository
async function getBuildTriggers() {
  const triggers = await dockerHub.getBuildTriggers('myusername/myapp');
  
  console.log('Build triggers:');
  triggers.forEach(trigger => {
    console.log(\`- \${trigger.name}\`);
    console.log(\`  Type: \${trigger.source_type}\`);
    console.log(\`  Source: \${trigger.source_name}\`);
    console.log(\`  Status: \${trigger.status}\`);
  });
}

// Create a build trigger
async function createBuildTrigger() {
  const trigger = await dockerHub.createBuildTrigger('myusername/myapp', {
    name: 'main-branch-trigger',
    sourceType: 'Branch',
    sourceName: 'main',
    tag: 'latest'
  });
  
  console.log(\`Created build trigger: \${trigger.name}\`);
}`}
        title="Automated build management"
      />

      ## Webhook Integration

      <CodeExampleSwitcher
        typescript={`// Get webhooks for a repository
async function getWebhooks() {
  const webhooks = await dockerHub.getWebhooks('myusername/myapp');
  
  console.log('Configured webhooks:');
  webhooks.forEach(webhook => {
    console.log(\`- \${webhook.name}\`);
    console.log(\`  URL: \${webhook.webhook_url}\`);
    console.log(\`  Active: \${webhook.active}\`);
    console.log(\`  Created: \${webhook.created_date}\`);
    console.log(\`  Last called: \${webhook.last_called || 'Never'}\`);
  });
}

// Create a webhook
async function createWebhook() {
  const webhook = await dockerHub.createWebhook('myusername/myapp', {
    name: 'deployment-webhook',
    webhookUrl: 'https://myapp.com/api/docker-webhook',
    expectFinalCallback: true
  });
  
  console.log(\`Created webhook: \${webhook.name}\`);
  console.log(\`Webhook ID: \${webhook.id}\`);
}

// Update webhook settings
async function updateWebhook() {
  const updatedWebhook = await dockerHub.updateWebhook(
    'myusername/myapp',
    'webhook-id-here',
    {
      name: 'updated-deployment-webhook',
      active: true,
      expectFinalCallback: false
    }
  );
  
  console.log('Webhook updated successfully');
}

// Delete a webhook
async function deleteWebhook() {
  await dockerHub.deleteWebhook('myusername/myapp', 'webhook-id-here');
  console.log('Webhook deleted');
}

// Example webhook handler (Express.js)
app.post('/api/docker-webhook', (req, res) => {
  const payload = req.body;
  
  console.log('Docker Hub webhook received:');
  console.log(\`Repository: \${payload.repository.repo_name}\`);
  console.log(\`Tag: \${payload.push_data.tag}\`);
  console.log(\`Pushed by: \${payload.push_data.pusher}\`);
  
  // Trigger deployment or other actions
  triggerDeployment(payload.repository.repo_name, payload.push_data.tag);
  
  res.status(200).send('Webhook processed');
});`}
        javascript={`// Get webhooks for a repository
async function getWebhooks() {
  const webhooks = await dockerHub.getWebhooks('myusername/myapp');
  
  console.log('Configured webhooks:');
  webhooks.forEach(webhook => {
    console.log(\`- \${webhook.name}\`);
    console.log(\`  URL: \${webhook.webhook_url}\`);
    console.log(\`  Active: \${webhook.active}\`);
  });
}

// Create a webhook
async function createWebhook() {
  const webhook = await dockerHub.createWebhook('myusername/myapp', {
    name: 'deployment-webhook',
    webhookUrl: 'https://myapp.com/api/docker-webhook'
  });
  
  console.log(\`Created webhook: \${webhook.name}\`);
}`}
        title="Webhook management and handling"
      />

      ## User and Organization Management

      <CodeExampleSwitcher
        typescript={`// Get current user information
async function getCurrentUser() {
  const user = await dockerHub.getCurrentUser();
  console.log('Current user:', user);
}

// Get user's organizations
async function getUserOrganizations() {
  const orgs = await dockerHub.getUserOrganizations();
  
  console.log('Organizations:');
  orgs.forEach(org => {
    console.log(\`- \${org.orgname || org.name}\`);
  });
}

// Star a repository
async function starRepository() {
  await dockerHub.starRepository('nginx');
  console.log('Repository starred');
}

// Unstar a repository
async function unstarRepository() {
  await dockerHub.unstarRepository('nginx');
  console.log('Repository unstarred');
}

// Test API connection
async function testConnection() {
  const isConnected = await dockerHub.testConnection();
  console.log(\`API connection: \${isConnected ? 'OK' : 'Failed'}\`);
}`}
        javascript={`// Get current user information
async function getCurrentUser() {
  const user = await dockerHub.getCurrentUser();
  console.log('Current user:', user);
}

// Get user's organizations
async function getUserOrganizations() {
  const orgs = await dockerHub.getUserOrganizations();
  
  console.log('Organizations:');
  orgs.forEach(org => {
    console.log(\`- \${org.name}\`);
  });
}

// Test API connection
async function testConnection() {
  const isConnected = await dockerHub.testConnection();
  console.log(\`API connection: \${isConnected ? 'OK' : 'Failed'}\`);
}`}
        title="User and organization operations"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        Docker Hub API has rate limits. Implement proper error handling and respect rate limit headers to avoid API throttling.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { DockerHubAPI } from 'macro_api';

const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN
});

// Comprehensive error handling
async function robustDockerHubOperation() {
  try {
    const repo = await dockerHub.getRepository('nginx');
    console.log(\`Repository: \${repo.name}\`);
    
    return repo;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('401')) {
        console.error('Authentication failed. Check your Docker Hub token.');
        throw new Error('Invalid Docker Hub credentials');
      } else if (error.message.includes('404')) {
        console.error('Repository not found.');
        return null;
      } else if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Implement exponential backoff.');
        // Implement retry logic
        return await retryWithBackoff(() => dockerHub.getRepository('nginx'));
      } else {
        console.error('Docker Hub API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(
  operation: () => Promise<any>,
  maxRetries = 3,
  baseDelay = 1000
) {
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
}

// Batch operations with error handling
async function batchRepositoryOperations(repositories: string[]) {
  const results = [];
  const errors = [];
  
  for (const repo of repositories) {
    try {
      const info = await dockerHub.getRepository(repo);
      results.push(info);
    } catch (error) {
      errors.push({ repository: repo, error: error.message });
    }
    
    // Rate limit protection - wait between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return { results, errors };
}

// Usage with comprehensive error handling
async function managementDashboard() {
  try {
    // Test connection first
    const isConnected = await dockerHub.testConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to Docker Hub API');
    }
    
    // Get user info
    const user = await dockerHub.getCurrentUser();
    console.log(\`Connected as: \${user.username || 'Unknown'}\`);
    
    // Get repositories with error handling
    const repositories = await dockerHub.listRepositories();
    console.log(\`Found \${repositories.results.length} repositories\`);
    
    // Process each repository
    for (const repo of repositories.results.slice(0, 5)) {
      try {
        const tags = await dockerHub.listTags(repo.name, { pageSize: 5 });
        console.log(\`\${repo.name}: \${tags.count} tags\`);
      } catch (error) {
        console.warn(\`Could not fetch tags for \${repo.name}\`);
      }
    }
    
  } catch (error) {
    console.error('Dashboard error:', error);
  }
}`}
        javascript={`const { DockerHubAPI } = require('macro_api');

const dockerHub = new DockerHubAPI({
  token: process.env.DOCKER_HUB_TOKEN
});

// Comprehensive error handling
async function robustDockerHubOperation() {
  try {
    const repo = await dockerHub.getRepository('nginx');
    console.log(\`Repository: \${repo.name}\`);
    
    return repo;
  } catch (error) {
    if (error.message.includes('401')) {
      console.error('Authentication failed. Check your Docker Hub token.');
      throw new Error('Invalid Docker Hub credentials');
    } else if (error.message.includes('404')) {
      console.error('Repository not found.');
      return null;
    } else if (error.message.includes('429')) {
      console.error('Rate limit exceeded.');
      // Implement retry logic
      return await retryOperation();
    }
    
    throw error;
  }
}

// Usage with error handling
async function managementDashboard() {
  try {
    const isConnected = await dockerHub.testConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to Docker Hub API');
    }
    
    const repositories = await dockerHub.listRepositories();
    console.log(\`Found \${repositories.results.length} repositories\`);
    
  } catch (error) {
    console.error('Dashboard error:', error);
  }
}`}
        title="Robust error handling and retry logic"
      />

      ## Advanced Use Cases

      ### CI/CD Integration

      <CodeExampleSwitcher
        typescript={`// CI/CD Pipeline Integration
class DockerHubCIPipeline {
  private dockerHub: DockerHubAPI;
  
  constructor(token: string) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  // Deploy and monitor pipeline
  async deployPipeline(repoName: string, version: string) {
    console.log(\`Starting deployment for \${repoName}:\${version}\`);
    
    // 1. Verify the tag exists
    const tagExists = await this.dockerHub.tagExists(repoName, version);
    if (!tagExists) {
      throw new Error(\`Tag \${version} not found in \${repoName}\`);
    }
    
    // 2. Get tag details for verification
    const tagDetails = await this.dockerHub.getTagDetails(repoName, version);
    console.log(\`Deploying image size: \${(tagDetails.fullSize / 1024 / 1024).toFixed(1)} MB\`);
    
    // 3. Check for security vulnerabilities
    if (tagDetails.vulnerabilities) {
      const critical = tagDetails.vulnerabilities.critical;
      const high = tagDetails.vulnerabilities.high;
      
      if (critical > 0) {
        throw new Error(\`Critical vulnerabilities found: \${critical}\`);
      }
      
      if (high > 5) {
        console.warn(\`High vulnerabilities found: \${high}\`);
      }
    }
    
    // 4. Trigger deployment webhook
    await this.triggerDeploymentWebhook(repoName, version);
    
    // 5. Monitor deployment
    await this.monitorDeployment(repoName, version);
  }
  
  // Monitor repository for new builds
  async monitorRepository(repoName: string, callback: (tag: any) => void) {
    let lastCheck = new Date();
    
    setInterval(async () => {
      try {
        const tags = await this.dockerHub.listTags(repoName, {
          pageSize: 10,
          ordering: '-last_updated'
        });
        
        const newTags = tags.results.filter(tag => 
          new Date(tag.lastUpdated) > lastCheck
        );
        
        newTags.forEach(callback);
        lastCheck = new Date();
        
      } catch (error) {
        console.error('Monitor error:', error);
      }
    }, 60000); // Check every minute
  }
  
  private async triggerDeploymentWebhook(repo: string, tag: string) {
    // Implementation depends on your deployment system
    console.log(\`Triggering deployment for \${repo}:\${tag}\`);
  }
  
  private async monitorDeployment(repo: string, tag: string) {
    // Monitor deployment status
    console.log(\`Monitoring deployment of \${repo}:\${tag}\`);
  }
}

// Usage in CI/CD
const pipeline = new DockerHubCIPipeline(process.env.DOCKER_HUB_TOKEN);

// Deploy specific version
await pipeline.deployPipeline('mycompany/api', 'v1.2.3');

// Monitor for new builds
pipeline.monitorRepository('mycompany/api', (tag) => {
  console.log(\`New build detected: \${tag.name}\`);
  // Trigger tests or deployment
});`}
        javascript={`// CI/CD Pipeline Integration
class DockerHubCIPipeline {
  constructor(token) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  async deployPipeline(repoName, version) {
    console.log(\`Starting deployment for \${repoName}:\${version}\`);
    
    // Verify the tag exists
    const tagExists = await this.dockerHub.tagExists(repoName, version);
    if (!tagExists) {
      throw new Error(\`Tag \${version} not found\`);
    }
    
    // Get tag details
    const tagDetails = await this.dockerHub.getTagDetails(repoName, version);
    console.log(\`Deploying image size: \${(tagDetails.fullSize / 1024 / 1024).toFixed(1)} MB\`);
    
    // Check vulnerabilities
    if (tagDetails.vulnerabilities && tagDetails.vulnerabilities.critical > 0) {
      throw new Error('Critical vulnerabilities found');
    }
    
    console.log('Deployment ready');
  }
}

const pipeline = new DockerHubCIPipeline(process.env.DOCKER_HUB_TOKEN);
await pipeline.deployPipeline('mycompany/api', 'v1.2.3');`}
        title="CI/CD pipeline integration"
      />

      ### Repository Analytics Dashboard

      <CodeExampleSwitcher
        typescript={`// Repository Analytics Dashboard
class DockerHubAnalytics {
  private dockerHub: DockerHubAPI;
  
  constructor(token: string) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  async generateReport(repositories: string[]) {
    const report = {
      overview: {
        totalRepositories: repositories.length,
        totalPulls: 0,
        totalStars: 0,
        generatedAt: new Date().toISOString()
      },
      repositories: [] as any[],
      topPerformers: {
        mostPulled: null as any,
        mostStarred: null as any,
        newestUpdated: null as any
      }
    };
    
    console.log('Generating analytics report...');
    
    for (const repoName of repositories) {
      try {
        const repo = await this.dockerHub.getRepository(repoName);
        const tags = await this.dockerHub.listTags(repoName, { pageSize: 5 });
        const stats = await this.dockerHub.getDownloadStats(repoName);
        
        const repoData = {
          name: repo.name,
          description: repo.description,
          pullCount: repo.pullCount,
          starCount: repo.starCount,
          isPrivate: repo.isPrivate,
          lastUpdated: repo.lastUpdated,
          tagCount: tags.count,
          recentTags: tags.results.map(tag => ({
            name: tag.name,
            size: tag.fullSize,
            lastUpdated: tag.lastUpdated
          })),
          downloadStats: {
            daily: stats.daily_downloads,
            weekly: stats.weekly_downloads,
            monthly: stats.monthly_downloads
          }
        };
        
        report.repositories.push(repoData);
        report.overview.totalPulls += repo.pullCount;
        report.overview.totalStars += repo.starCount;
        
        // Track top performers
        if (!report.topPerformers.mostPulled || 
            repo.pullCount > report.topPerformers.mostPulled.pullCount) {
          report.topPerformers.mostPulled = repoData;
        }
        
        if (!report.topPerformers.mostStarred || 
            repo.starCount > report.topPerformers.mostStarred.starCount) {
          report.topPerformers.mostStarred = repoData;
        }
        
        if (!report.topPerformers.newestUpdated || 
            new Date(repo.lastUpdated) > new Date(report.topPerformers.newestUpdated.lastUpdated)) {
          report.topPerformers.newestUpdated = repoData;
        }
        
      } catch (error) {
        console.error(\`Error processing \${repoName}:, error\`);
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    return report;
  }
  
  printReport(report: any) {
    console.log('\\n=== Docker Hub Analytics Report ===');
    console.log(\`Generated: \${new Date(report.overview.generatedAt).toLocaleString()}\`);
    console.log(\`Total Repositories: \${report.overview.totalRepositories}\`);
    console.log(\`Total Pulls: \${report.overview.totalPulls.toLocaleString()}\`);
    console.log(\`Total Stars: \${report.overview.totalStars.toLocaleString()}\`);
    
    console.log('\\n=== Top Performers ===');
    console.log(\`Most Pulled: \${report.topPerformers.mostPulled?.name} (\${report.topPerformers.mostPulled?.pullCount.toLocaleString()} pulls)\`);
    console.log(\`Most Starred: \${report.topPerformers.mostStarred?.name} (\${report.topPerformers.mostStarred?.starCount} stars)\`);
    console.log(\`Recently Updated: \${report.topPerformers.newestUpdated?.name}\`);
    
    console.log('\\n=== Repository Details ===');
    report.repositories
      .sort((a: any, b: any) => b.pullCount - a.pullCount)
      .forEach((repo: any) => {
        console.log(\`\\n\${repo.name}:\`);
        console.log(\`  Pulls: \${repo.pullCount.toLocaleString()}\`);
        console.log(\`  Stars: \${repo.starCount}\`);
        console.log(\`  Tags: \${repo.tagCount}\`);
        console.log(\`  Monthly Downloads: \${repo.downloadStats.monthly.toLocaleString()}\`);
        console.log(\`  Last Updated: \${new Date(repo.lastUpdated).toLocaleDateString()}\`);
      });
  }
}

// Usage
const analytics = new DockerHubAnalytics(process.env.DOCKER_HUB_TOKEN);

// Generate report for your repositories
const repositories = [
  'mycompany/web-app',
  'mycompany/api-server',
  'mycompany/worker',
  'mycompany/database'
];

const report = await analytics.generateReport(repositories);
analytics.printReport(report);

// Save report to file
import fs from 'fs';
fs.writeFileSync('docker-hub-report.json', JSON.stringify(report, null, 2));`}
        javascript={`// Repository Analytics Dashboard
class DockerHubAnalytics {
  constructor(token) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  async generateReport(repositories) {
    const report = {
      overview: {
        totalRepositories: repositories.length,
        totalPulls: 0,
        totalStars: 0,
        generatedAt: new Date().toISOString()
      },
      repositories: []
    };
    
    console.log('Generating analytics report...');
    
    for (const repoName of repositories) {
      try {
        const repo = await this.dockerHub.getRepository(repoName);
        const tags = await this.dockerHub.listTags(repoName, { pageSize: 5 });
        
        const repoData = {
          name: repo.name,
          pullCount: repo.pullCount,
          starCount: repo.starCount,
          tagCount: tags.count,
          lastUpdated: repo.lastUpdated
        };
        
        report.repositories.push(repoData);
        report.overview.totalPulls += repo.pullCount;
        report.overview.totalStars += repo.starCount;
        
      } catch (error) {
        console.error(\`Error processing \${repoName}\`);
      }
    }
    
    return report;
  }
}

const analytics = new DockerHubAnalytics(process.env.DOCKER_HUB_TOKEN);
const report = await analytics.generateReport(['mycompany/web-app', 'mycompany/api']);
console.log(report);`}
        title="Analytics dashboard and reporting"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance and Security Tips">
        - Use Personal Access Tokens instead of passwords
        - Implement rate limiting to avoid API throttling  
        - Cache repository information to reduce API calls
        - Monitor vulnerability reports for security compliance
        - Use webhooks for real-time notifications instead of polling
      </InfoBox>

      ### Security and Compliance

      <CodeExampleSwitcher
        typescript={`// Security compliance checker
class DockerHubSecurityChecker {
  private dockerHub: DockerHubAPI;
  
  constructor(token: string) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  async auditRepository(repoName: string) {
    const auditReport = {
      repository: repoName,
      isPrivate: false,
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0
      },
      tags: [] as any[],
      recommendations: [] as string[],
      complianceScore: 0
    };
    
    try {
      // Get repository info
      const repo = await this.dockerHub.getRepository(repoName);
      auditReport.isPrivate = repo.isPrivate;
      
      // Check recent tags for vulnerabilities
      const tags = await this.dockerHub.listTags(repoName, {
        pageSize: 10,
        ordering: '-last_updated'
      });
      
      for (const tag of tags.results.slice(0, 5)) {
        const tagDetails = await this.dockerHub.getTagDetails(repoName, tag.name);
        
        if (tagDetails.vulnerabilities) {
          const vulns = tagDetails.vulnerabilities;
          auditReport.vulnerabilities.critical += vulns.critical;
          auditReport.vulnerabilities.high += vulns.high;
          auditReport.vulnerabilities.medium += vulns.medium;
          auditReport.vulnerabilities.low += vulns.low;
          
          auditReport.tags.push({
            name: tag.name,
            vulnerabilities: vulns,
            size: tagDetails.fullSize,
            lastUpdated: tag.lastUpdated
          });
        }
      }
      
      // Generate recommendations
      if (auditReport.vulnerabilities.critical > 0) {
        auditReport.recommendations.push('URGENT: Address critical vulnerabilities immediately');
      }
      
      if (auditReport.vulnerabilities.high > 10) {
        auditReport.recommendations.push('High number of high-severity vulnerabilities detected');
      }
      
      if (!auditReport.isPrivate) {
        auditReport.recommendations.push('Consider making sensitive repositories private');
      }
      
      // Calculate compliance score (0-100)
      let score = 100;
      score -= auditReport.vulnerabilities.critical * 20;
      score -= auditReport.vulnerabilities.high * 5;
      score -= auditReport.vulnerabilities.medium * 1;
      
      auditReport.complianceScore = Math.max(0, score);
      
    } catch (error) {
      console.error(\`Audit failed for \${repoName}:, error\`);
    }
    
    return auditReport;
  }
  
  printAuditReport(report: any) {
    console.log(\`\\n=== Security Audit: \${report.repository} ===\`);
    console.log(\`Compliance Score: \${report.complianceScore}/100\`);
    console.log(\`Repository Type: \${report.isPrivate ? 'Private' : 'Public'}\`);
    
    console.log('\\nVulnerability Summary:');
    console.log(\`  Critical: \${report.vulnerabilities.critical}\`);
    console.log(\`  High: \${report.vulnerabilities.high}\`);
    console.log(\`  Medium: \${report.vulnerabilities.medium}\`);
    console.log(\`  Low: \${report.vulnerabilities.low}\`);
    
    if (report.recommendations.length > 0) {
      console.log('\\nRecommendations:');
      report.recommendations.forEach((rec: string) => {
        console.log(\`  - \${rec}\`);
      });
    }
    
    console.log('\\nTag Analysis:');
    report.tags.forEach((tag: any) => {
      console.log(\`  \${tag.name}: \${tag.vulnerabilities.critical}C/\${tag.vulnerabilities.high}H/\${tag.vulnerabilities.medium}M/\${tag.vulnerabilities.low}L\`);
    });
  }
}

// Usage
const securityChecker = new DockerHubSecurityChecker(process.env.DOCKER_HUB_TOKEN);

// Audit multiple repositories
const repositories = ['mycompany/web-app', 'mycompany/api'];
for (const repo of repositories) {
  const audit = await securityChecker.auditRepository(repo);
  securityChecker.printAuditReport(audit);
}`}
        javascript={`// Security compliance checker
class DockerHubSecurityChecker {
  constructor(token) {
    this.dockerHub = new DockerHubAPI({ token });
  }
  
  async auditRepository(repoName) {
    const auditReport = {
      repository: repoName,
      isPrivate: false,
      vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
      recommendations: []
    };
    
    try {
      const repo = await this.dockerHub.getRepository(repoName);
      auditReport.isPrivate = repo.isPrivate;
      
      const tags = await this.dockerHub.listTags(repoName, { pageSize: 5 });
      
      for (const tag of tags.results) {
        const tagDetails = await this.dockerHub.getTagDetails(repoName, tag.name);
        
        if (tagDetails.vulnerabilities) {
          const vulns = tagDetails.vulnerabilities;
          auditReport.vulnerabilities.critical += vulns.critical;
          auditReport.vulnerabilities.high += vulns.high;
        }
      }
      
      if (auditReport.vulnerabilities.critical > 0) {
        auditReport.recommendations.push('Address critical vulnerabilities');
      }
      
    } catch (error) {
      console.error(\`Audit failed for \${repoName}\`);
    }
    
    return auditReport;
  }
}

const securityChecker = new DockerHubSecurityChecker(process.env.DOCKER_HUB_TOKEN);
const audit = await securityChecker.auditRepository('mycompany/web-app');
console.log(audit);`}
        title="Security compliance and vulnerability management"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit the [official Docker Hub API documentation](https://docs.docker.com/docker-hub/api/latest/).

      ### Core Methods Summary

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Method</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Repository</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">getRepository()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Get repository information</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">createRepository()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Create new repository</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">updateRepository()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Update repository settings</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Tags</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">listTags()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">List repository tags</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">getTagDetails()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Get detailed tag information</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">deleteTag()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Delete specific tag</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Builds</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">getBuildTriggers()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">List automated build triggers</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">triggerBuild()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Manually trigger build</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Webhooks</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">getWebhooks()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">List repository webhooks</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">createWebhook()</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Create new webhook</td>
            </tr>
          </tbody>
        </table>
      </div>

      ### Rate Limits

      Docker Hub API has the following rate limits:
      - **Free accounts**: 100 pulls per 6 hours
      - **Pro/Team accounts**: 200 pulls per 6 hours  
      - **API requests**: 100 requests per hour for anonymous, 200+ for authenticated

      ### Support

      - [Docker Hub API Documentation](https://docs.docker.com/docker-hub/api/latest/)
      - [Docker Hub Support](https://hub.docker.com/support/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default DockerhubDocs;