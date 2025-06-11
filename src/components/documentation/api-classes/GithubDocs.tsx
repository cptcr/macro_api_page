import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, GitBranch, GitCommit, GitPullRequest, GitMerge, Code, Github, Star, Eye, Activity } from 'lucide-react';

const GithubDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-gray-800 dark:text-gray-200">
            <Github className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">GitHub API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete GitHub integration for repository management, issues, pull requests, and CI/CD automation
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm">
            Repository Management
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Issue Tracking
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Pull Requests
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Release Management
          </span>
        </div>
      </div>

      ## Overview

      The GitHub API wrapper provides comprehensive access to GitHub's REST API v3, enabling you to manage repositories, issues, pull requests, releases, and more. Build powerful integrations and automate your development workflow with full TypeScript support.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Repository Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create, update, and manage repositories programmatically</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <GitPullRequest className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Pull Request Workflow</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Handle PR creation, review, and merging</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <AlertCircle className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Issue Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create and manage issues, labels, and milestones</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <GitBranch className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Branch Operations</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage branches, commits, and releases</p>
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
        typescript={`import { GitHubAPI } from 'macro_api';

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
}`}
        javascript={`const { GitHubAPI } = require('macro_api');

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
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="Personal Access Token Required">
        You need a GitHub Personal Access Token (PAT) to use the GitHub API. The token determines what resources you can access.
      </InfoBox>

      ### Getting Your GitHub Token

      1. Go to [GitHub Settings](https://github.com/settings/tokens)
      2. Click "Generate new token" → "Generate new token (classic)"
      3. Give your token a descriptive name
      4. Select the scopes you need:
         - `repo` - Full control of private repositories
         - `public_repo` - Access to public repositories
         - `user` - Read user profile data
         - `admin:org` - Organization management
         - `write:packages` - Package management
      5. Click "Generate token" and copy it immediately
      6. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
GITHUB_TOKEN=ghp_your_personal_access_token_here

// In your application
import { GitHubAPI } from 'macro_api';

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});`}
        javascript={`// .env file
GITHUB_TOKEN=ghp_your_personal_access_token_here

// In your application
const { GitHubAPI } = require('macro_api');

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never commit your GitHub token to version control. Always use environment variables and consider using fine-grained personal access tokens for enhanced security.
      </InfoBox>

      ## Repository Management

      ### Basic Repository Operations

      <CodeExampleSwitcher
        typescript={`// Get repository details
async function getRepository() {
  const repo = await github.getRepo('owner', 'repo-name');
  
  console.log('Repository Info:', {
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    size: repo.size,
    defaultBranch: repo.default_branch,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    isPrivate: repo.private,
    archived: repo.archived
  });
}

// Create a new repository
async function createRepository() {
  const newRepo = await github.createRepo({
    name: 'my-awesome-project',
    description: 'A fantastic new project built with macro_api',
    private: false,
    auto_init: true,
    gitignore_template: 'Node',
    license_template: 'mit',
    has_issues: true,
    has_projects: true,
    has_wiki: false
  });
  
  console.log(\`Created repository: \${newRepo.html_url}\`);
}

// Update repository settings
async function updateRepository() {
  const updatedRepo = await github.updateRepo('owner', 'repo', {
    description: 'Updated description',
    has_issues: true,
    has_projects: false,
    default_branch: 'main',
    allow_squash_merge: true,
    allow_merge_commit: false,
    allow_rebase_merge: true,
    delete_branch_on_merge: true
  });
  
  console.log('Repository updated:', updatedRepo.name);
}

// Delete a repository
async function deleteRepository() {
  await github.deleteRepo('owner', 'repo');
  console.log('Repository deleted successfully');
}`}
        javascript={`// Get repository details
async function getRepository() {
  const repo = await github.getRepo('owner', 'repo-name');
  
  console.log('Repository Info:', {
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openIssues: repo.open_issues_count,
    defaultBranch: repo.default_branch,
    isPrivate: repo.private
  });
}

// Create a new repository
async function createRepository() {
  const newRepo = await github.createRepo({
    name: 'my-awesome-project',
    description: 'A fantastic new project',
    private: false,
    auto_init: true,
    gitignore_template: 'Node',
    license_template: 'mit'
  });
  
  console.log(\`Created: \${newRepo.html_url}\`);
}`}
        title="Repository operations"
      />

      ### Branch Management

      <CodeExampleSwitcher
        typescript={`// List all branches
async function getBranches() {
  const branches = await github.getRepoBranches('owner', 'repo');
  
  branches.forEach(branch => {
    console.log(\`Branch: \${branch.name}\`);
    console.log(\`  Protected: \${branch.protected}\`);
    console.log(\`  SHA: \${branch.commit.sha}\`);
  });
}

// Get specific branch details
async function getBranchDetails() {
  const branch = await github.getBranch('owner', 'repo', 'main');
  
  console.log('Branch Details:', {
    name: branch.name,
    protected: branch.protected,
    commit: {
      sha: branch.commit.sha,
      message: branch.commit.commit.message,
      author: branch.commit.commit.author.name,
      date: branch.commit.commit.author.date
    }
  });
}`}
        javascript={`// List all branches
async function getBranches() {
  const branches = await github.getRepoBranches('owner', 'repo');
  
  branches.forEach(branch => {
    console.log(\`Branch: \${branch.name}\`);
    console.log(\`  SHA: \${branch.commit.sha}\`);
  });
}

// Get specific branch details
async function getBranchDetails() {
  const branch = await github.getBranch('owner', 'repo', 'main');
  
  console.log('Branch Details:', {
    name: branch.name,
    protected: branch.protected,
    lastCommit: branch.commit.commit.message
  });
}`}
        title="Branch management"
      />

      ## User Management

      ### User Information

      <CodeExampleSwitcher
        typescript={`// Get authenticated user information
async function getCurrentUser() {
  const user = await github.getAuthenticatedUser();
  
  console.log('Current User:', {
    login: user.login,
    name: user.name,
    email: user.email,
    company: user.company,
    location: user.location,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    createdAt: user.created_at
  });
}

// Get user by username
async function getUserInfo(username) {
  const user = await github.getUser(username);
  
  console.log(\`User Info for \${username}:\`, {
    name: user.name,
    bio: user.bio,
    company: user.company,
    location: user.location,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos
  });
}

// Get user's repositories
async function getUserRepositories(username) {
  const repos = await github.getUserRepos(username, {
    type: 'all',
    sort: 'updated',
    direction: 'desc',
    per_page: 20
  });
  
  repos.forEach(repo => {
    console.log(\`Repository: \${repo.name}\`);
    console.log(\`  Stars: \${repo.stargazers_count}\`);
    console.log(\`  Language: \${repo.language}\`);
    console.log(\`  Updated: \${repo.updated_at}\`);
  });
}

// Get user's organizations
async function getUserOrganizations(username) {
  const orgs = await github.getUserOrgs(username);
  
  orgs.forEach(org => {
    console.log(\`Organization: \${org.login}\`);
    console.log(\`  Description: \${org.description}\`);
    console.log(\`  URL: \${org.html_url}\`);
  });
}`}
        javascript={`// Get authenticated user information
async function getCurrentUser() {
  const user = await github.getAuthenticatedUser();
  
  console.log('Current User:', {
    login: user.login,
    name: user.name,
    email: user.email,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos
  });
}

// Get user by username
async function getUserInfo(username) {
  const user = await github.getUser(username);
  console.log(\`User: \${user.name} (\${user.login})\`);
  console.log(\`Followers: \${user.followers}\`);
}

// Get user's repositories
async function getUserRepositories(username) {
  const repos = await github.getUserRepos(username);
  
  repos.forEach(repo => {
    console.log(\`\${repo.name}: \${repo.stargazers_count} stars\`);
  });
}`}
        title="User information and repositories"
      />

      ## Issue Management

      ### Creating and Managing Issues

      <CodeExampleSwitcher
        typescript={`// List issues with filters
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
Application should start normally

## Environment
- OS: macOS 13.0
- Node.js: 18.17.0
- Package version: 1.2.3\`,
    labels: ['bug', 'high-priority'],
    assignees: ['developer1', 'developer2'],
    milestone: 1
  });
  
  console.log(\`Created issue #\${issue.number}: \${issue.html_url}\`);
}

// Update an existing issue
async function updateIssue(issueNumber) {
  const updatedIssue = await github.updateIssue('owner', 'repo', issueNumber, {
    title: 'Bug: Application crashes on startup [FIXED]',
    state: 'closed',
    labels: ['bug', 'fixed'],
    body: 'Issue has been resolved in PR #123'
  });
  
  console.log(\`Updated issue #\${updatedIssue.number}\`);
}

// Get specific issue details
async function getIssueDetails(issueNumber) {
  const issue = await github.getIssue('owner', 'repo', issueNumber);
  
  console.log('Issue Details:', {
    number: issue.number,
    title: issue.title,
    state: issue.state,
    author: issue.user.login,
    assignees: issue.assignees.map(a => a.login),
    labels: issue.labels.map(l => l.name),
    milestone: issue.milestone?.title,
    comments: issue.comments,
    createdAt: issue.created_at,
    updatedAt: issue.updated_at,
    closedAt: issue.closed_at
  });
}`}
        javascript={`// List and manage issues
async function getIssues() {
  const issues = await github.getIssues('owner', 'repo', {
    state: 'open',
    labels: 'bug,enhancement',
    per_page: 20
  });
  
  issues.forEach(issue => {
    console.log(\`#\${issue.number}: \${issue.title}\`);
    console.log(\`  Author: \${issue.user.login}\`);
    console.log(\`  Labels: \${issue.labels.map(l => l.name).join(', ')}\`);
  });
}

// Create a new issue
async function createIssue() {
  const issue = await github.createIssue('owner', 'repo', {
    title: 'Bug: Application crashes on startup',
    body: 'Detailed description of the issue...',
    labels: ['bug', 'high-priority'],
    assignees: ['developer1']
  });
  
  console.log(\`Created issue: \${issue.html_url}\`);
}`}
        title="Issue management"
      />

      ### Issue Comments

      <CodeExampleSwitcher
        typescript={`// Get comments for an issue
async function getIssueComments(issueNumber) {
  const comments = await github.getIssueComments('owner', 'repo', issueNumber);
  
  comments.forEach(comment => {
    console.log(\`Comment by \${comment.user.login}:\`);
    console.log(\`  Created: \${comment.created_at}\`);
    console.log(\`  Body: \${comment.body.substring(0, 100)}...\`);
  });
}

// Add a comment to an issue
async function addIssueComment(issueNumber) {
  const comment = await github.createIssueComment('owner', 'repo', issueNumber, {
    body: \`Thanks for reporting this issue! 

I've investigated and found that this is related to a configuration problem. Here's how to fix it:

\\\`\\\`\\\`bash
npm install --save-dev @types/node
\\\`\\\`\\\`

This should resolve the startup crash. Let me know if you continue to experience issues.\`
  });
  
  console.log(\`Added comment: \${comment.html_url}\`);
}

// Update an existing comment
async function updateIssueComment(commentId) {
  const updatedComment = await github.updateIssueComment('owner', 'repo', commentId, {
    body: 'Updated comment with additional information...'
  });
  
  console.log('Comment updated:', updatedComment.id);
}

// Delete a comment
async function deleteIssueComment(commentId) {
  await github.deleteIssueComment('owner', 'repo', commentId);
  console.log('Comment deleted');
}`}
        javascript={`// Get and manage issue comments
async function getIssueComments(issueNumber) {
  const comments = await github.getIssueComments('owner', 'repo', issueNumber);
  
  comments.forEach(comment => {
    console.log(\`Comment by \${comment.user.login}: \${comment.body}\`);
  });
}

// Add a comment
async function addIssueComment(issueNumber) {
  const comment = await github.createIssueComment('owner', 'repo', issueNumber, {
    body: 'Thanks for the bug report! We are investigating.'
  });
  
  console.log('Comment added:', comment.html_url);
}`}
        title="Issue comments"
      />

      ## Pull Request Management

      ### Creating and Managing Pull Requests

      <CodeExampleSwitcher
        typescript={`// List pull requests
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
}

// Get detailed pull request information
async function getPullRequestDetails(prNumber) {
  const pr = await github.getPullRequest('owner', 'repo', prNumber);
  
  console.log('Pull Request Details:', {
    number: pr.number,
    title: pr.title,
    state: pr.state,
    merged: pr.merged,
    mergeable: pr.mergeable,
    author: pr.user.login,
    reviewers: pr.requested_reviewers?.map(r => r.login) || [],
    labels: pr.labels.map(l => l.name),
    commits: pr.commits,
    additions: pr.additions,
    deletions: pr.deletions,
    changedFiles: pr.changed_files,
    createdAt: pr.created_at,
    updatedAt: pr.updated_at,
    mergedAt: pr.merged_at
  });
}

// Update an existing pull request
async function updatePullRequest(prNumber) {
  const updatedPr = await github.updatePullRequest('owner', 'repo', prNumber, {
    title: 'feat: Add user authentication system (updated)',
    body: 'Updated PR description with additional details...',
    state: 'open',
    base: 'main'
  });
  
  console.log(\`Updated PR #\${updatedPr.number}\`);
}

// Merge a pull request
async function mergePullRequest(prNumber) {
  const mergeResult = await github.mergePullRequest('owner', 'repo', prNumber, {
    commit_title: 'feat: Add user authentication system',
    commit_message: 'Merging feature branch with user authentication implementation',
    merge_method: 'squash' // Options: 'merge', 'squash', 'rebase'
  });
  
  if (mergeResult.merged) {
    console.log(\`PR #\${prNumber} successfully merged!\`);
    console.log(\`Merge commit SHA: \${mergeResult.sha}\`);
  }
}`}
        javascript={`// List and manage pull requests
async function getPullRequests() {
  const pullRequests = await github.getPullRequests('owner', 'repo', {
    state: 'open',
    sort: 'created',
    direction: 'desc'
  });
  
  pullRequests.forEach(pr => {
    console.log(\`PR #\${pr.number}: \${pr.title}\`);
    console.log(\`  Branch: \${pr.head.ref} → \${pr.base.ref}\`);
    console.log(\`  Author: \${pr.user.login}\`);
  });
}

// Create a pull request
async function createPullRequest() {
  const pr = await github.createPullRequest('owner', 'repo', {
    title: 'Add new feature',
    head: 'feature-branch',
    base: 'main',
    body: 'Description of the changes made...'
  });
  
  console.log(\`Created PR: \${pr.html_url}\`);
}`}
        title="Pull request management"
      />

      ## Content Management

      ### Working with Files and Directories

      <CodeExampleSwitcher
        typescript={`// Get file or directory contents
async function getFileContents(filePath) {
  const content = await github.getContents('owner', 'repo', filePath, 'main');
  
  if (Array.isArray(content)) {
    // Directory listing
    console.log(\`Directory contents for \${filePath}:\`);
    content.forEach(item => {
      console.log(\`  \${item.type}: \${item.name} (\${item.size} bytes)\`);
    });
  } else {
    // File content
    console.log(\`File: \${content.name}\`);
    console.log(\`Size: \${content.size} bytes\`);
    console.log(\`Encoding: \${content.encoding}\`);
    
    if (content.encoding === 'base64') {
      const fileContent = Buffer.from(content.content, 'base64').toString('utf8');
      console.log('Content:', fileContent);
    }
  }
}

// Create or update a file
async function createOrUpdateFile(filePath, content, commitMessage) {
  // First check if file exists to get SHA for updates
  let sha;
  try {
    const existingFile = await github.getContents('owner', 'repo', filePath);
    if (!Array.isArray(existingFile)) {
      sha = existingFile.sha;
    }
  } catch (error) {
    // File doesn't exist, that's fine for creation
  }
  
  const encodedContent = Buffer.from(content).toString('base64');
  
  const result = await github.createOrUpdateFile('owner', 'repo', filePath, {
    message: commitMessage,
    content: encodedContent,
    sha, // Required for updates, undefined for creation
    branch: 'main',
    committer: {
      name: 'API Bot',
      email: 'bot@example.com'
    },
    author: {
      name: 'API Bot',
      email: 'bot@example.com'
    }
  });
  
  console.log(\`File \${sha ? 'updated' : 'created'}: \${result.content.html_url}\`);
  console.log(\`Commit SHA: \${result.commit.sha}\`);
}

// Delete a file
async function deleteFile(filePath) {
  // Get current file to get SHA
  const file = await github.getContents('owner', 'repo', filePath);
  
  if (Array.isArray(file)) {
    throw new Error('Cannot delete a directory');
  }
  
  const result = await github.deleteFile('owner', 'repo', filePath, {
    message: \`Delete \${filePath}\`,
    sha: file.sha,
    branch: 'main'
  });
  
  console.log(\`File deleted: \${result.commit.html_url}\`);
}

// Get README
async function getReadme() {
  const readme = await github.getReadme('owner', 'repo', 'main');
  
  console.log('README:', {
    name: readme.name,
    path: readme.path,
    size: readme.size,
    downloadUrl: readme.download_url,
    htmlUrl: readme.html_url
  });
  
  if (readme.encoding === 'base64') {
    const content = Buffer.from(readme.content, 'base64').toString('utf8');
    console.log('Content preview:', content.substring(0, 200) + '...');
  }
}`}
        javascript={`// Content management
async function getFileContents(filePath) {
  const content = await github.getContents('owner', 'repo', filePath);
  
  if (Array.isArray(content)) {
    console.log(\`Directory: \${filePath}\`);
    content.forEach(item => {
      console.log(\`  \${item.name} (\${item.type})\`);
    });
  } else {
    console.log(\`File: \${content.name}, Size: \${content.size}\`);
    const fileContent = Buffer.from(content.content, 'base64').toString();
    console.log('Content:', fileContent.substring(0, 100) + '...');
  }
}`}
        title="Content management"
      />

      ## Commit and Release Management

      ### Working with Commits

      <CodeExampleSwitcher
        typescript={`// Get commit history
async function getCommits() {
  const commits = await github.getCommits('owner', 'repo', {
    sha: 'main',
    since: '2024-01-01T00:00:00Z',
    until: '2024-12-31T23:59:59Z',
    per_page: 50
  });
  
  commits.forEach(commit => {
    console.log(\`Commit: \${commit.sha.substring(0, 7)}\`);
    console.log(\`  Author: \${commit.commit.author.name}\`);
    console.log(\`  Date: \${commit.commit.author.date}\`);
    console.log(\`  Message: \${commit.commit.message}\`);
    console.log(\`  URL: \${commit.html_url}\`);
  });
}

// Get specific commit details
async function getCommitDetails(sha) {
  const commit = await github.getCommit('owner', 'repo', sha);
  
  console.log('Commit Details:', {
    sha: commit.sha,
    message: commit.commit.message,
    author: {
      name: commit.commit.author.name,
      email: commit.commit.author.email,
      date: commit.commit.author.date
    },
    committer: {
      name: commit.commit.committer.name,
      email: commit.commit.committer.email,
      date: commit.commit.committer.date
    },
    stats: {
      additions: commit.stats.additions,
      deletions: commit.stats.deletions,
      total: commit.stats.total
    },
    files: commit.files.map(file => ({
      filename: file.filename,
      status: file.status,
      additions: file.additions,
      deletions: file.deletions,
      changes: file.changes
    }))
  });
}

// Compare commits
async function compareCommits(base, head) {
  const comparison = await github.compareCommits('owner', 'repo', base, head);
  
  console.log('Comparison Results:', {
    status: comparison.status,
    aheadBy: comparison.ahead_by,
    behindBy: comparison.behind_by,
    totalCommits: comparison.total_commits,
    commits: comparison.commits.length,
    files: comparison.files.map(file => ({
      filename: file.filename,
      status: file.status,
      changes: file.changes
    }))
  });
}`}
        javascript={`// Get commit history
async function getCommits() {
  const commits = await github.getCommits('owner', 'repo', {
    sha: 'main',
    per_page: 20
  });
  
  commits.forEach(commit => {
    console.log(\`\${commit.sha.substring(0, 7)}: \${commit.commit.message}\`);
    console.log(\`  By: \${commit.commit.author.name}\`);
  });
}

// Get specific commit
async function getCommitDetails(sha) {
  const commit = await github.getCommit('owner', 'repo', sha);
  
  console.log('Commit:', {
    sha: commit.sha,
    message: commit.commit.message,
    author: commit.commit.author.name,
    files: commit.files.length
  });
}`}
        title="Commit operations"
      />

      ### Release Management

      <CodeExampleSwitcher
        typescript={`// List releases
async function getReleases() {
  const releases = await github.getReleases('owner', 'repo', {
    per_page: 10
  });
  
  releases.forEach(release => {
    console.log(\`Release: \${release.tag_name}\`);
    console.log(\`  Name: \${release.name}\`);
    console.log(\`  Published: \${release.published_at}\`);
    console.log(\`  Prerelease: \${release.prerelease}\`);
    console.log(\`  Draft: \${release.draft}\`);
    console.log(\`  Downloads: \${release.assets.reduce((sum, asset) => sum + asset.download_count, 0)}\`);
  });
}

// Get latest release
async function getLatestRelease() {
  const release = await github.getLatestRelease('owner', 'repo');
  
  console.log('Latest Release:', {
    version: release.tag_name,
    name: release.name,
    publishedAt: release.published_at,
    body: release.body,
    assets: release.assets.map(asset => ({
      name: asset.name,
      size: asset.size,
      downloadCount: asset.download_count,
      downloadUrl: asset.browser_download_url
    }))
  });
}

// Create a new release
async function createRelease() {
  const release = await github.createRelease('owner', 'repo', {
    tag_name: 'v2.1.0',
    target_commitish: 'main',
    name: 'Version 2.1.0 - Enhanced Performance',
    body: \`## 🚀 What's New

### Features
- ✨ Added real-time notifications
- 🔧 Improved API response times by 40%
- 📊 New analytics dashboard
- 🔐 Enhanced security features

### Bug Fixes
- 🐛 Fixed memory leak in background processes
- 🔨 Resolved login redirect issues
- 📱 Fixed mobile responsiveness on iOS

### Performance Improvements
- ⚡ Optimized database queries
- 🏃‍♂️ Reduced bundle size by 15%
- 🚀 Improved page load speeds

## 📦 Installation

\\\`\\\`\\\`bash
npm install your-package@2.1.0
\\\`\\\`\\\`

## 🙏 Contributors

Special thanks to all contributors who made this release possible!\`,
    draft: false,
    prerelease: false
  });
  
  console.log(\`Created release: \${release.html_url}\`);
  console.log(\`Tag: \${release.tag_name}\`);
  console.log(\`Upload URL: \${release.upload_url}\`);
}

// Get specific release
async function getReleaseDetails(releaseId) {
  const release = await github.getRelease('owner', 'repo', releaseId);
  
  console.log('Release Details:', {
    id: release.id,
    tagName: release.tag_name,
    name: release.name,
    author: release.author.login,
    publishedAt: release.published_at,
    assets: release.assets.length,
    body: release.body
  });
}`}
        javascript={`// Release management
async function getReleases() {
  const releases = await github.getReleases('owner', 'repo');
  
  releases.forEach(release => {
    console.log(\`\${release.tag_name}: \${release.name}\`);
    console.log(\`  Published: \${release.published_at}\`);
    console.log(\`  Assets: \${release.assets.length}\`);
  });
}

// Create a release
async function createRelease() {
  const release = await github.createRelease('owner', 'repo', {
    tag_name: 'v1.0.0',
    name: 'Version 1.0.0',
    body: 'First stable release with new features...',
    draft: false,
    prerelease: false
  });
  
  console.log(\`Created release: \${release.html_url}\`);
}`}
        title="Release management"
      />

      ## Search Operations

      ### Searching Repositories, Code, and Issues

      <CodeExampleSwitcher
        typescript={`// Search repositories
async function searchRepositories(query) {
  const results = await github.searchRepositories(query, {
    sort: 'stars',
    order: 'desc',
    per_page: 10
  });
  
  console.log(\`Found \${results.total_count} repositories\`);
  
  results.items.forEach(repo => {
    console.log(\`\${repo.full_name}\`);
    console.log(\`  ⭐ \${repo.stargazers_count} stars\`);
    console.log(\`  📝 \${repo.description}\`);
    console.log(\`  🔗 \${repo.html_url}\`);
  });
}

// Search code
async function searchCode(query) {
  const results = await github.searchCode(query, {
    sort: 'indexed',
    order: 'desc',
    per_page: 5
  });
  
  console.log(\`Found \${results.total_count} code results\`);
  
  results.items.forEach(item => {
    console.log(\`File: \${item.path}\`);
    console.log(\`  Repository: \${item.repository.full_name}\`);
    console.log(\`  URL: \${item.html_url}\`);
  });
}

// Search issues and pull requests
async function searchIssues(query) {
  const results = await github.searchIssues(query, {
    sort: 'updated',
    order: 'desc',
    per_page: 10
  });
  
  console.log(\`Found \${results.total_count} issues/PRs\`);
  
  results.items.forEach(item => {
    const type = item.pull_request ? 'PR' : 'Issue';
    console.log(\`\${type} #\${item.number}: \${item.title}\`);
    console.log(\`  Repository: \${item.repository_url.split('/').slice(-2).join('/')}\`);
    console.log(\`  State: \${item.state}\`);
    console.log(\`  Updated: \${item.updated_at}\`);
  });
}`}
        javascript={`// Search operations
async function searchRepositories(query) {
  const results = await github.searchRepositories(query, {
    sort: 'stars',
    order: 'desc',
    per_page: 10
  });
  
  console.log(\`Found \${results.total_count} repositories\`);
  results.items.forEach(repo => {
    console.log(\`\${repo.full_name}: \${repo.stargazers_count} stars\`);
  });
}

async function searchCode(query) {
  const results = await github.searchCode(query);
  console.log(\`Found \${results.total_count} code results\`);
}`}
        title="Search operations"
      />

      ## Additional Repository Features

      ### Forking and Repository Utilities

      <CodeExampleSwitcher
        typescript={`// Fork a repository
async function forkRepository() {
  const fork = await github.forkRepo('original-owner', 'repo-name', {
    organization: 'my-org', // Optional: fork to organization
    name: 'my-fork-name'     // Optional: custom fork name
  });
  
  console.log(\`Forked repository: \${fork.html_url}\`);
  console.log(\`Clone URL: \${fork.clone_url}\`);
}

// Get repository contributors
async function getRepositoryContributors() {
  try {
    // Note: This method would need to be added to the GitHubAPI class
    const contributors = await github.getContributors('owner', 'repo');
    
    contributors.forEach(contributor => {
      console.log(\`Contributor: \${contributor.login}\`);
      console.log(\`  Contributions: \${contributor.contributions}\`);
      console.log(\`  Profile: \${contributor.html_url}\`);
    });
  } catch (error) {
    console.log('Contributors endpoint would need to be implemented');
  }
}

// Get repository languages
async function getRepositoryLanguages() {
  try {
    // Note: This method would need to be added to the GitHubAPI class
    const languages = await github.getLanguages('owner', 'repo');
    
    console.log('Repository Languages:');
    Object.entries(languages).forEach(([language, bytes]) => {
      console.log(\`  \${language}: \${bytes} bytes\`);
    });
  } catch (error) {
    console.log('Languages endpoint would need to be implemented');
  }
}`}
        javascript={`// Repository utilities
async function forkRepository() {
  const fork = await github.forkRepo('original-owner', 'repo-name');
  console.log(\`Forked: \${fork.html_url}\`);
}

// Additional utility functions would require extending the GitHubAPI class
async function getRepoStats() {
  const repo = await github.getRepo('owner', 'repo');
  
  console.log('Stats:', {
    name: repo.full_name,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    size: repo.size
  });
}`}
        title="Repository utilities"
      />

      ## Error Handling and Best Practices

      <InfoBox type="warning" title="Rate Limits">
        GitHub API has rate limits: 5,000 requests per hour for authenticated requests, 60 for unauthenticated. Use conditional requests and caching when possible.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { GitHubAPI } from 'macro_api';

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});

// Comprehensive error handling
async function robustGitHubOperation() {
  try {
    const repo = await github.getRepo('owner', 'repo');
    return repo;
  } catch (error) {
    if (error instanceof Error) {
      // Handle different types of GitHub API errors
      if (error.message.includes('404')) {
        console.error('Repository not found or no access');
        return null;
      } else if (error.message.includes('403')) {
        if (error.message.includes('rate limit')) {
          console.error('Rate limit exceeded. Please wait before making more requests.');
          // Implement retry logic with exponential backoff
          return await retryWithBackoff(() => github.getRepo('owner', 'repo'));
        } else {
          console.error('Access forbidden. Check your token permissions.');
        }
      } else if (error.message.includes('401')) {
        console.error('Authentication failed. Check your GitHub token.');
      } else {
        console.error('GitHub API Error:', error.message);
      }
    }
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
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

// Batch operations with rate limiting
async function batchOperation<T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10,
  delayBetweenBatches = 1000
): Promise<R[]> {
  const results: R[] = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    
    console.log(\`Processing batch \${Math.floor(i / batchSize) + 1}/\${Math.ceil(items.length / batchSize)}\`);
    
    const batchResults = await Promise.all(
      batch.map(item => operation(item).catch(error => {
        console.error(\`Error processing item \${JSON.stringify(item)}:\`, error);
        return null;
      }))
    );
    
    results.push(...batchResults.filter(result => result !== null) as R[]);
    
    // Add delay between batches to respect rate limits
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, delayBetweenBatches));
    }
  }
  
  return results;
}`}
        javascript={`const { GitHubAPI } = require('macro_api');

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});

// Error handling
async function robustGitHubOperation() {
  try {
    const repo = await github.getRepo('owner', 'repo');
    return repo;
  } catch (error) {
    if (error.message.includes('404')) {
      console.error('Repository not found');
      return null;
    } else if (error.message.includes('403')) {
      console.error('Rate limit or access denied');
    } else if (error.message.includes('401')) {
      console.error('Authentication failed');
    }
    throw error;
  }
}

// Batch processing with rate limiting
async function batchOperation(items, operation, batchSize = 5) {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(operation)
    );
    
    batchResults.forEach(result => {
      if (result.status === 'fulfilled') {
        results.push(result.value);
      }
    });
    
    // Rate limiting delay
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
}`}
        title="Error handling and best practices"
      />

      ## API Reference Summary

      <InfoBox type="info" title="Complete Method List">
        Here are all the available methods in the GitHubAPI class, organized by functionality.
      </InfoBox>

      ### User Methods
      - `getAuthenticatedUser()` - Get current authenticated user
      - `getUser(username)` - Get user by username
      - `getUserRepos(username, params?)` - Get user's repositories
      - `getUserOrgs(username, params?)` - Get user's organizations

      ### Repository Methods
      - `getRepo(owner, repo)` - Get repository details
      - `createRepo(data, org?)` - Create new repository
      - `updateRepo(owner, repo, data)` - Update repository
      - `deleteRepo(owner, repo)` - Delete repository
      - `getRepoBranches(owner, repo, params?)` - List branches
      - `getBranch(owner, repo, branch)` - Get branch details
      - `forkRepo(owner, repo, options?)` - Fork repository

      ### Content Methods
      - `getContents(owner, repo, path, ref?)` - Get file/directory contents
      - `createOrUpdateFile(owner, repo, path, data)` - Create or update file
      - `deleteFile(owner, repo, path, data)` - Delete file
      - `getReadme(owner, repo, ref?)` - Get repository README

      ### Issue Methods
      - `getIssues(owner, repo, params?)` - List issues
      - `getIssue(owner, repo, issueNumber)` - Get specific issue
      - `createIssue(owner, repo, data)` - Create new issue
      - `updateIssue(owner, repo, issueNumber, data)` - Update issue

      ### Comment Methods
      - `getIssueComments(owner, repo, issueNumber, params?)` - Get issue comments
      - `createIssueComment(owner, repo, issueNumber, data)` - Create comment
      - `updateIssueComment(owner, repo, commentId, data)` - Update comment
      - `deleteIssueComment(owner, repo, commentId)` - Delete comment

      ### Pull Request Methods
      - `getPullRequests(owner, repo, params?)` - List pull requests
      - `getPullRequest(owner, repo, pullNumber)` - Get specific PR
      - `createPullRequest(owner, repo, data)` - Create new PR
      - `updatePullRequest(owner, repo, pullNumber, data)` - Update PR
      - `mergePullRequest(owner, repo, pullNumber, data?)` - Merge PR

      ### Commit Methods
      - `getCommits(owner, repo, params?)` - List commits
      - `getCommit(owner, repo, sha)` - Get specific commit
      - `compareCommits(owner, repo, base, head)` - Compare commits

      ### Release Methods
      - `getReleases(owner, repo, params?)` - List releases
      - `getRelease(owner, repo, releaseId)` - Get specific release
      - `createRelease(owner, repo, data)` - Create new release
      - `getLatestRelease(owner, repo)` - Get latest release

      ### Search Methods
      - `searchRepositories(query, params?)` - Search repositories
      - `searchCode(query, params?)` - Search code
      - `searchIssues(query, params?)` - Search issues and PRs

      ## Next Steps

      <InfoBox type="success" title="You're Ready!">
        You now have comprehensive knowledge of the GitHub API wrapper. Start building powerful integrations and automations!
      </InfoBox>

      ### Recommended Next Steps

      1. **[Basic Usage Guide](/documentation?section=basic-usage)** - Learn the fundamentals
      2. **[Error Handling](/documentation?section=error-handling)** - Implement robust error management  
      3. **[Caching](/documentation?section=caching)** - Optimize performance with intelligent caching
      4. **[Other APIs](/documentation?section=slack)** - Explore other available API integrations

      ### Additional Resources

      - **[GitHub REST API Documentation](https://docs.github.com/en/rest)** - Official GitHub API reference
      - **[GitHub Webhooks Guide](https://docs.github.com/en/developers/webhooks-and-events)** - Complete webhook documentation
      - **[GitHub Apps vs OAuth Apps](https://docs.github.com/en/developers/apps)** - Choose the right authentication method
      - **[Rate Limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)** - Understanding GitHub's rate limits

      ### Support

      - 📖 **Documentation**: Complete API reference for each method
      - 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/cptcr/macro_api/issues)  
      - 💬 **Community**: Join discussions and get help from other developers
      - 📧 **Support**: Enterprise support available for custom integrations
    </div>
  );
};

export default GithubDocs;