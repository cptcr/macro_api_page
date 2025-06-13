import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Github, GitBranch, GitCommit, GitPullRequest, GitMerge, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, Users, CheckCircle, ExternalLink, AlertCircle, FileText, Star, Eye, Activity } from 'lucide-react';

const GithubDocs: React.FC = () => {
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

  const basicSetupCode = `import { GitHubAPI } from 'macro_api';

// Initialize the client
const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});

// Get repository information
async function getRepoInfo() {
  try {
    const repo = await github.getRepo('octocat', 'Hello-World');
    console.log(\`Repository: \${repo.full_name}\`);
    console.log(\`Stars: \${repo.stargazers_count}\`);
    console.log(\`Language: \${repo.language}\`);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const issuesCode = `// List issues with filters
async function getIssues() {
  const issues = await github.getIssues('owner', 'repo', {
    state: 'open',
    labels: 'bug,enhancement',
    sort: 'created',
    direction: 'desc',
    per_page: 20
  });
  
  issues.forEach(issue => {
    console.log(\`#\${issue.number}: \${issue.title}\`);
    console.log(\`  State: \${issue.state}\`);
    console.log(\`  Author: \${issue.user.login}\`);
    console.log(\`  Labels: \${issue.labels.map(l => l.name).join(', ')}\`);
    console.log(\`  Created: \${issue.created_at}\`);
  });
}

// Create a new issue
async function createIssue() {
  const issue = await github.createIssue('owner', 'repo', {
    title: 'Bug: Application crashes on startup',
    body: \`## Description
The application crashes immediately when trying to start.

## Steps to Reproduce
1. Run \\\`npm start\\\`
2. Application crashes with error

## Expected Behavior
Application should start normally\`,
    labels: ['bug', 'high-priority'],
    assignees: ['developer1', 'developer2'],
    milestone: 1
  });
  
  console.log(\`Created issue #\${issue.number}: \${issue.html_url}\`);
}`;

  const pullRequestCode = `// List pull requests
async function getPullRequests() {
  const pullRequests = await github.getPullRequests('owner', 'repo', {
    state: 'open',
    sort: 'created',
    direction: 'desc',
    per_page: 10
  });
  
  pullRequests.forEach(pr => {
    console.log(\`PR #\${pr.number}: \${pr.title}\`);
    console.log(\`  Author: \${pr.user.login}\`);
    console.log(\`  Branch: \${pr.head.ref} → \${pr.base.ref}\`);
    console.log(\`  State: \${pr.state}\`);
    console.log(\`  Mergeable: \${pr.mergeable}\`);
    console.log(\`  Created: \${pr.created_at}\`);
  });
}

// Create a new pull request
async function createPullRequest() {
  const pr = await github.createPullRequest('owner', 'repo', {
    title: 'feat: Add user authentication system',
    head: 'feature/user-auth',
    base: 'main',
    body: \`## Changes
- Added JWT-based authentication
- Implemented user registration and login
- Added password hashing with bcrypt
- Created middleware for protected routes

## Testing
- All tests passing
- Manual testing completed
- Security review conducted

## Related Issues
Closes #45
Addresses #38\`,
    draft: false,
    maintainer_can_modify: true
  });
  
  console.log(\`Created PR #\${pr.number}: \${pr.html_url}\`);
}`;

  const features = [
    {
      name: 'Repository Management',
      description: 'Create, update, and manage repositories programmatically',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'Pull Request Workflow',
      description: 'Handle PR creation, review, and merging',
      icon: <GitPullRequest className="h-4 w-4" />
    },
    {
      name: 'Issue Management',
      description: 'Create and manage issues, labels, and milestones',
      icon: <AlertCircle className="h-4 w-4" />
    },
    {
      name: 'Branch Operations',
      description: 'Manage branches, commits, and releases',
      icon: <GitBranch className="h-4 w-4" />
    }
  ];

  const methods = [
    { category: 'User Methods', methods: ['getAuthenticatedUser()', 'getUser(username)', 'getUserRepos(username, params?)', 'getUserOrgs(username, params?)'] },
    { category: 'Repository Methods', methods: ['getRepo(owner, repo)', 'createRepo(data, org?)', 'updateRepo(owner, repo, data)', 'deleteRepo(owner, repo)', 'getRepoBranches(owner, repo, params?)', 'getBranch(owner, repo, branch)', 'forkRepo(owner, repo, options?)'] },
    { category: 'Content Methods', methods: ['getContents(owner, repo, path, ref?)', 'createOrUpdateFile(owner, repo, path, data)', 'deleteFile(owner, repo, path, data)', 'getReadme(owner, repo, ref?)'] },
    { category: 'Issue Methods', methods: ['getIssues(owner, repo, params?)', 'getIssue(owner, repo, issueNumber)', 'createIssue(owner, repo, data)', 'updateIssue(owner, repo, issueNumber, data)'] },
    { category: 'Pull Request Methods', methods: ['getPullRequests(owner, repo, params?)', 'getPullRequest(owner, repo, pullNumber)', 'createPullRequest(owner, repo, data)', 'updatePullRequest(owner, repo, pullNumber, data)', 'mergePullRequest(owner, repo, pullNumber, data?)'] },
    { category: 'Release Methods', methods: ['getReleases(owner, repo, params?)', 'getRelease(owner, repo, releaseId)', 'createRelease(owner, repo, data)', 'getLatestRelease(owner, repo)'] }
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
            <Github className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Version Control API
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gray-800 p-3 rounded-full">
              <Github className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                GitHub API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete GitHub integration for repository management, issues, pull requests, and CI/CD automation
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The GitHub API wrapper provides comprehensive access to GitHub's REST API v3, enabling you to manage repositories, 
            issues, pull requests, releases, and more. Build powerful integrations and automate your development workflow with full TypeScript support.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-500/20">Repository Management</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Issue Tracking</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Pull Requests</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Release Management</span>
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
          <Tabs defaultValue="quickstart" className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <TabsTrigger value="quickstart" className="glass-button">Quick Start</TabsTrigger>
              <TabsTrigger value="authentication" className="glass-button">Authentication</TabsTrigger>
              <TabsTrigger value="issues" className="glass-button">Issues</TabsTrigger>
              <TabsTrigger value="pullrequests" className="glass-button">Pull Requests</TabsTrigger>
              <TabsTrigger value="methods" className="glass-button">Methods</TabsTrigger>
            </div>

            {/* Quick Start */}
            <TabsContent value="quickstart" className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Basic Setup
                  </h3>
                  <p className="text-muted-foreground mb-4">Initialize the GitHub API client</p>
                  <CodeBlock code={basicSetupCode} id="basic-setup" />
                </div>

                <div className="glass-card bg-gradient-to-r from-gray-500/10 to-blue-500/10 border-gray-500/20 dark:border-gray-400/20">
                  <div className="flex items-start space-x-4">
                    <Key className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Personal Access Token Required</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        You need a GitHub Personal Access Token (PAT) to use the GitHub API. The token determines what resources you can access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Authentication */}
            <TabsContent value="authentication" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  Getting Your GitHub Token
                </h3>
                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Go to <a href="https://github.com/settings/tokens" className="underline" target="_blank" rel="noopener noreferrer">GitHub Settings</a></span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Click "Generate new token" → "Generate new token (classic)"</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Give your token a descriptive name</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Select the scopes you need (repo, user, admin:org, etc.)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Click "Generate token" and copy it immediately</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Issues */}
            <TabsContent value="issues" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                  Issue Management
                </h3>
                <p className="text-muted-foreground mb-4">Create and manage GitHub issues programmatically</p>
                <CodeBlock code={issuesCode} id="issues-examples" />
              </div>
            </TabsContent>

            {/* Pull Requests */}
            <TabsContent value="pullrequests" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <GitPullRequest className="h-5 w-5 mr-2 text-primary" />
                  Pull Request Management
                </h3>
                <p className="text-muted-foreground mb-4">Handle PR creation, review, and merging workflows</p>
                <CodeBlock code={pullRequestCode} id="pr-examples" />
              </div>
            </TabsContent>

            {/* Methods */}
            <TabsContent value="methods" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Available Methods
                </h3>
                <div className="grid gap-4">
                  {methods.map((category, index) => (
                    <div key={index} className="glass-card">
                      <h4 className="font-semibold text-lg mb-3">{category.category}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.methods.map((method, methodIndex) => (
                          <div key={methodIndex} className="flex items-center p-2 rounded glass">
                            <code className="text-sm">{method}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Basic Usage Guide</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn the fundamentals of using macro_api</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=error-handling" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Error Handling</h3>
                  <p className="text-muted-foreground text-sm mb-3">Implement robust error management</p>
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

export default GithubDocs;