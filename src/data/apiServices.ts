// src/data/apiServices.ts
import { ApiService } from '@/types/apiService';

const apiServices: ApiService[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT/OpenAI',
    description: 'Complete OpenAI API wrapper with chat completions, embeddings, streaming, and vision capabilities.',
    icon: 'MessageSquare',
    color: 'text-green-600',
    docsLink: '/documentation#chatgpt',
    className: 'ChatGPT',
    variableName: 'gpt',
    authParams: ['apiKey: process.env.OPENAI_API_KEY'],
    docsUrl: 'https://platform.openai.com/docs',
    methods: [
      { name: 'chat(prompt, systemPrompt?, model?)', description: 'Simple chat completion' },
      { name: 'createChatCompletion(options)', description: 'Advanced chat completion with full options' },
      { name: 'createStreamingChatCompletion(options, onData)', description: 'Real-time streaming responses' },
      { name: 'withFunctions(prompt, functions)', description: 'Function calling capabilities' },
      { name: 'withTools(prompt, tools)', description: 'Modern tool calling' },
      { name: 'createEmbeddings(options)', description: 'Generate text embeddings' },
      { name: 'embed(text, model?)', description: 'Simple embedding helper' }
    ],
    features: [
      { name: 'Chat Completions', description: 'Generate conversational AI responses with various models' },
      { name: 'Function Calling', description: 'Allow AI to call external functions and tools' },
      { name: 'Streaming', description: 'Real-time response streaming for better UX' },
      { name: 'Embeddings', description: 'Create semantic embeddings for search and similarity' },
      { name: 'Vision', description: 'Analyze images with GPT-4 Vision models' },
      { name: 'Token Management', description: 'Automatic token counting and cost estimation' }
    ],
    tokenGuide: {
      title: 'Getting Your OpenAI API Key',
      steps: [
        'Go to the OpenAI Platform at https://platform.openai.com',
        'Sign in to your account or create a new one',
        'Navigate to the API Keys section in your account settings',
        'Click "Create new secret key" and give it a descriptive name',
        'Copy the generated API key and store it securely',
        'Add the key to your environment variables as OPENAI_API_KEY'
      ],
      url: 'https://platform.openai.com/account/api-keys',
      expiryInfo: 'API keys do not expire but can be revoked'
    },
    examples: {
      typescript: `import { ChatGPT } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat
const response = await gpt.chat(
  'Explain quantum computing',
  'You are a helpful physics teacher'
);

// Advanced completion
const completion = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: 'You are a coding assistant' },
    { role: 'user', content: 'Write a TypeScript function to sort an array' }
  ],
  temperature: 0.7,
  max_tokens: 1000
});

// Function calling
const functions = [{
  name: 'get_weather',
  description: 'Get weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: { type: 'string', description: 'City name' }
    },
    required: ['location']
  }
}];

const functionResponse = await gpt.withFunctions(
  'What\\'s the weather in Paris?',
  functions
);

// Embeddings
const embeddings = await gpt.embed([
  'Machine learning is fascinating',
  'AI will change the world'
]);`,
      javascript: `const { ChatGPT } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat
const response = await gpt.chat(
  'Explain quantum computing',
  'You are a helpful physics teacher'
);

// Advanced completion
const completion = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: 'You are a coding assistant' },
    { role: 'user', content: 'Write a JavaScript function to sort an array' }
  ],
  temperature: 0.7,
  max_tokens: 1000
});`
    }
  },
  {
    id: 'spotify',
    name: 'Spotify API',
    description: 'Comprehensive Spotify Web API wrapper with OAuth2 authentication, playlist management, and player controls.',
    icon: 'Music',
    color: 'text-green-500',
    docsLink: '/documentation#spotify',
    className: 'SpotifyAPI',
    variableName: 'spotify',
    authParams: [
      'clientId: process.env.SPOTIFY_CLIENT_ID',
      'clientSecret: process.env.SPOTIFY_CLIENT_SECRET',
      'redirectUri: "http://localhost:3000/callback"'
    ],
    docsUrl: 'https://developer.spotify.com/documentation/web-api',
    methods: [
      { name: 'getAuthorizationUrl(scopes)', description: 'Generate OAuth authorization URL' },
      { name: 'exchangeCode(code)', description: 'Exchange authorization code for tokens' },
      { name: 'getCurrentUser()', description: 'Get current user profile' },
      { name: 'search(query, types, params?)', description: 'Search for tracks, artists, albums, playlists' },
      { name: 'createPlaylist(userId, name, isPublic?, description?)', description: 'Create a new playlist' },
      { name: 'addTracksToPlaylist(playlistId, trackUris)', description: 'Add tracks to playlist' },
      { name: 'getCurrentlyPlaying()', description: 'Get currently playing track' },
      { name: 'controlPlayback(action, deviceId?)', description: 'Control playback (play/pause/next/previous)' }
    ],
    features: [
      { name: 'OAuth2 Authentication', description: 'Secure user authentication flow' },
      { name: 'Playlist Management', description: 'Create, modify, and manage playlists' },
      { name: 'Music Search', description: 'Search tracks, artists, albums, and playlists' },
      { name: 'Player Control', description: 'Control Spotify playback (Premium required)' },
      { name: 'User Library', description: 'Access user\'s saved tracks and top music' },
      { name: 'Recommendations', description: 'Get personalized music recommendations' }
    ],
    tokenGuide: {
      title: 'Setting Up Spotify App Credentials',
      steps: [
        'Go to the Spotify Developer Dashboard at https://developer.spotify.com/dashboard',
        'Log in with your Spotify account',
        'Click "Create App" and fill in the required information',
        'Add your redirect URI (e.g., http://localhost:3000/callback)',
        'Copy your Client ID and Client Secret from the app settings',
        'Add them to your environment variables'
      ],
      url: 'https://developer.spotify.com/dashboard',
      expiryInfo: 'Access tokens expire after 1 hour, use refresh tokens for renewal'
    },
    examples: {
      typescript: `import { SpotifyAPI } from 'macro_api';

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// OAuth flow
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'playlist-modify-public',
  'user-read-playback-state'
]);

// After getting code from callback
await spotify.exchangeCode(authorizationCode);

// Get user profile
const user = await spotify.getCurrentUser();
console.log(\`Welcome, \${user.display_name}!\`);

// Search for music
const results = await spotify.search('Daft Punk', ['track', 'artist'], {
  limit: 10,
  market: 'US'
});

// Create playlist and add tracks
const playlist = await spotify.createPlaylist(
  user.id,
  'My Awesome Playlist',
  true,
  'Created with macro_api'
);

const trackUris = results.tracks.items.map(track => track.uri);
await spotify.addTracksToPlaylist(playlist.id, trackUris);

// Control playback (requires Premium)
await spotify.controlPlayback('play');`,
      javascript: `const { SpotifyAPI } = require('macro_api');

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// OAuth flow
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'playlist-modify-public'
]);

// After authorization
await spotify.exchangeCode(authorizationCode);

// Create and manage playlists
const user = await spotify.getCurrentUser();
const playlist = await spotify.createPlaylist(
  user.id,
  'My Playlist',
  true
);`
    }
  },
  {
    id: 'stripe',
    name: 'Stripe API',
    description: 'Complete payment processing solution with subscriptions, webhooks, and comprehensive financial operations.',
    icon: 'CreditCard',
    color: 'text-blue-600',
    docsLink: '/documentation#stripe',
    className: 'StripeAPI',
    variableName: 'stripe',
    authParams: ['secretKey: process.env.STRIPE_SECRET_KEY'],
    docsUrl: 'https://stripe.com/docs/api',
    methods: [
      { name: 'createCustomer(params)', description: 'Create a new customer' },
      { name: 'createPaymentIntent(params)', description: 'Create payment intent' },
      { name: 'createSubscription(params)', description: 'Create recurring subscription' },
      { name: 'updateSubscription(id, params)', description: 'Update existing subscription' },
      { name: 'cancelSubscription(id, params?)', description: 'Cancel subscription' },
      { name: 'createProduct(params)', description: 'Create a product' },
      { name: 'createPrice(params)', description: 'Create pricing for products' },
      { name: 'processWebhook(payload, signature)', description: 'Handle webhook events' }
    ],
    features: [
      { name: 'Payment Processing', description: 'Accept one-time and recurring payments' },
      { name: 'Subscription Management', description: 'Handle complex subscription logic' },
      { name: 'Customer Management', description: 'Store and manage customer information' },
      { name: 'Webhook Handling', description: 'Process real-time payment events' },
      { name: 'Multi-currency', description: 'Support for global currencies' },
      { name: 'Compliance', description: 'PCI DSS compliant payment processing' }
    ],
    tokenGuide: {
      title: 'Getting Your Stripe API Keys',
      steps: [
        'Sign up for a Stripe account at https://stripe.com',
        'Go to your Stripe Dashboard',
        'Navigate to Developers > API keys',
        'Copy your Secret key (starts with sk_test_ for test mode)',
        'For production, use your live Secret key (starts with sk_live_)',
        'Add the key to your environment variables as STRIPE_SECRET_KEY'
      ],
      url: 'https://dashboard.stripe.com/apikeys',
      expiryInfo: 'API keys do not expire but can be regenerated'
    },
    examples: {
      typescript: `import { StripeAPI } from 'macro_api';

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a customer
const customer = await stripe.createCustomer({
  email: 'customer@example.com',
  name: 'John Doe',
  metadata: { userId: '12345' }
});

// Create a payment intent
const paymentIntent = await stripe.createPaymentIntent({
  amount: 2000, // $20.00
  currency: 'usd',
  customer: customer.id,
  automatic_payment_methods: { enabled: true }
});

// Create a subscription
const subscription = await stripe.createSubscription({
  customer: customer.id,
  items: [{ price: 'price_your_price_id' }],
  trial_period_days: 14,
  metadata: { plan: 'premium' }
});

// Handle webhooks
app.post('/webhook', (req, res) => {
  const signature = req.headers['stripe-signature'];
  
  try {
    const event = stripe.processWebhook(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('Payment succeeded!');
        break;
      case 'customer.subscription.updated':
        console.log('Subscription updated');
        break;
    }
    
    res.status(200).send('OK');
  } catch (error) {
    res.status(400).send('Webhook Error');
  }
});`,
      javascript: `const { StripeAPI } = require('macro_api');

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create customer and subscription
const customer = await stripe.createCustomer({
  email: 'customer@example.com',
  name: 'John Doe'
});

const subscription = await stripe.createSubscription({
  customer: customer.id,
  items: [{ price: 'price_your_price_id' }]
});`
    }
  },
  {
    id: 'slack',
    name: 'Slack API',
    description: 'Comprehensive Slack integration for team communication, file sharing, and workflow automation.',
    icon: 'Slack',
    color: 'text-purple-600',
    docsLink: '/documentation#slack',
    className: 'SlackAPI',
    variableName: 'slack',
    authParams: [
      'botToken: process.env.SLACK_BOT_TOKEN',
      'signingSecret: process.env.SLACK_SIGNING_SECRET'
    ],
    docsUrl: 'https://api.slack.com/',
    methods: [
      { name: 'sendMessage(channel, text, options?)', description: 'Send message to channel' },
      { name: 'uploadFile(channel, file, options?)', description: 'Upload file to channel' },
      { name: 'createChannel(name, isPrivate?)', description: 'Create new channel' },
      { name: 'getUserInfo(userId)', description: 'Get user information' },
      { name: 'getChannelHistory(channel, options?)', description: 'Get channel message history' },
      { name: 'setChannelTopic(channel, topic)', description: 'Set channel topic' },
      { name: 'reactToMessage(channel, timestamp, emoji)', description: 'Add reaction to message' }
    ],
    features: [
      { name: 'Message Sending', description: 'Send rich messages with attachments and formatting' },
      { name: 'File Sharing', description: 'Upload and share files in channels' },
      { name: 'Channel Management', description: 'Create and manage channels programmatically' },
      { name: 'User Interactions', description: 'Get user info and manage interactions' },
      { name: 'Slash Commands', description: 'Create custom slash commands' },
      { name: 'Interactive Components', description: 'Buttons, modals, and form handling' }
    ],
    tokenGuide: {
      title: 'Setting Up Slack App and Bot Token',
      steps: [
        'Go to https://api.slack.com/apps and click "Create New App"',
        'Choose "From scratch" and enter your app name and workspace',
        'Go to "OAuth & Permissions" and add required scopes',
        'Install the app to your workspace',
        'Copy the "Bot User OAuth Token" (starts with xoxb-)',
        'Go to "Basic Information" and copy the "Signing Secret"',
        'Add both to your environment variables'
      ],
      url: 'https://api.slack.com/apps',
      expiryInfo: 'Bot tokens do not expire unless manually revoked'
    },
    examples: {
      typescript: `import { SlackAPI } from 'macro_api';

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Send a simple message
await slack.sendMessage('#general', 'Hello from macro_api!');

// Send a rich message with attachments
await slack.sendMessage('#general', 'Deployment Status', {
  attachments: [{
    color: 'good',
    title: 'Deployment Successful',
    text: 'Version 2.1.0 has been deployed to production',
    fields: [
      { title: 'Environment', value: 'Production', short: true },
      { title: 'Version', value: '2.1.0', short: true }
    ],
    footer: 'CI/CD Pipeline',
    ts: Math.floor(Date.now() / 1000)
  }]
});

// Upload a file
const fileBuffer = fs.readFileSync('./report.pdf');
await slack.uploadFile('#reports', fileBuffer, {
  filename: 'monthly-report.pdf',
  title: 'Monthly Analytics Report',
  initial_comment: 'Here\\'s the monthly report for review'
});

// Get channel history
const history = await slack.getChannelHistory('#general', {
  limit: 50,
  oldest: '1609459200' // Unix timestamp
});

// React to a message
await slack.reactToMessage('#general', '1234567890.123456', 'thumbsup');

// Create a private channel
const channel = await slack.createChannel('project-secret', true);`,
      javascript: `const { SlackAPI } = require('macro_api');

const slack = new SlackAPI({
  botToken: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Send messages and manage channels
await slack.sendMessage('#general', 'Hello World!');

const channel = await slack.createChannel('new-project');
await slack.uploadFile('#general', fileBuffer, {
  filename: 'document.pdf'
});`
    }
  },
  {
    id: 'vercel',
    name: 'Vercel API',
    description: 'Deployment automation and project management for the Vercel platform with comprehensive DevOps integration.',
    icon: 'Cloud',
    color: 'text-gray-900',
    docsLink: '/documentation#vercel',
    className: 'VercelAPI',
    variableName: 'vercel',
    authParams: ['accessToken: process.env.VERCEL_ACCESS_TOKEN'],
    docsUrl: 'https://vercel.com/docs/rest-api',
    methods: [
      { name: 'getProjects()', description: 'List all projects' },
      { name: 'createProject(params)', description: 'Create new project' },
      { name: 'getDeployments(projectId?)', description: 'List deployments' },
      { name: 'createDeployment(params)', description: 'Trigger new deployment' },
      { name: 'getProject(projectId)', description: 'Get project details' },
      { name: 'updateProject(projectId, params)', description: 'Update project settings' },
      { name: 'getDomains()', description: 'List domains' },
      { name: 'addDomain(domain)', description: 'Add custom domain' }
    ],
    features: [
      { name: 'Project Management', description: 'Create and manage Vercel projects' },
      { name: 'Deployment Control', description: 'Trigger and monitor deployments' },
      { name: 'Domain Management', description: 'Add and configure custom domains' },
      { name: 'Environment Variables', description: 'Manage environment variables' },
      { name: 'Team Collaboration', description: 'Manage team access and permissions' },
      { name: 'Analytics', description: 'Access deployment and usage analytics' }
    ],
    tokenGuide: {
      title: 'Creating a Vercel Access Token',
      steps: [
        'Log in to your Vercel dashboard at https://vercel.com/dashboard',
        'Go to Account Settings by clicking your avatar',
        'Navigate to the "Tokens" section',
        'Click "Create Token" and give it a descriptive name',
        'Set the appropriate scope (usually "Full Access" for development)',
        'Copy the generated token and store it securely',
        'Add it to your environment variables as VERCEL_ACCESS_TOKEN'
      ],
      url: 'https://vercel.com/account/tokens',
      expiryInfo: 'Tokens can be set to never expire or have custom expiration dates'
    },
    examples: {
      typescript: `import { VercelAPI } from 'macro_api';

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});

// List all projects
const projects = await vercel.getProjects();
console.log(\`Found \${projects.length} projects\`);

// Create a new project
const newProject = await vercel.createProject({
  name: 'my-awesome-app',
  framework: 'nextjs',
  gitRepository: {
    type: 'github',
    repo: 'username/my-awesome-app'
  }
});

// Get recent deployments
const deployments = await vercel.getDeployments(newProject.id);
console.log('Recent deployments:', deployments.slice(0, 5));

// Trigger a new deployment
const deployment = await vercel.createDeployment({
  name: newProject.name,
  files: [
    {
      file: 'index.html',
      data: '<html><body><h1>Hello World!</h1></body></html>'
    },
    {
      file: 'package.json',
      data: JSON.stringify({
        name: 'hello-world',
        scripts: { build: 'echo \\"Build complete\\"' }
      })
    }
  ],
  projectSettings: {
    framework: 'static'
  }
});

console.log(\`Deployment URL: \${deployment.url}\`);

// Add a custom domain
await vercel.addDomain('my-awesome-app.com');

// Update project settings
await vercel.updateProject(newProject.id, {
  environmentVariables: [
    {
      key: 'API_URL',
      value: 'https://api.example.com',
      target: ['production']
    }
  ]
});`,
      javascript: `const { VercelAPI } = require('macro_api');

const vercel = new VercelAPI({
  accessToken: process.env.VERCEL_ACCESS_TOKEN
});

// Manage projects and deployments
const projects = await vercel.getProjects();
const deployment = await vercel.createDeployment({
  name: 'my-app',
  files: [/* your files */]
});`
    }
  },
  {
    id: 'github',
    name: 'GitHub API',
    description: 'Complete GitHub integration for repository management, issues, pull requests, and CI/CD automation.',
    icon: 'Github',
    color: 'text-gray-800',
    docsLink: '/documentation#github',
    className: 'GitHubAPI',
    variableName: 'github',
    authParams: ['token: process.env.GITHUB_TOKEN'],
    docsUrl: 'https://docs.github.com/en/rest',
    methods: [
      { name: 'getRepository(owner, repo)', description: 'Get repository information' },
      { name: 'createRepository(params)', description: 'Create new repository' },
      { name: 'getIssues(owner, repo, params?)', description: 'List repository issues' },
      { name: 'createIssue(owner, repo, params)', description: 'Create new issue' },
      { name: 'getPullRequests(owner, repo, params?)', description: 'List pull requests' },
      { name: 'createPullRequest(owner, repo, params)', description: 'Create pull request' },
      { name: 'getCommits(owner, repo, params?)', description: 'Get commit history' },
      { name: 'createRelease(owner, repo, params)', description: 'Create new release' }
    ],
    features: [
      { name: 'Repository Management', description: 'Create and manage GitHub repositories' },
      { name: 'Issue Tracking', description: 'Create and manage issues and labels' },
      { name: 'Pull Requests', description: 'Handle pull request workflows' },
      { name: 'Release Management', description: 'Create and manage releases' },
      { name: 'Webhook Integration', description: 'Handle GitHub webhook events' },
      { name: 'Actions Integration', description: 'Trigger and monitor GitHub Actions' }
    ],
    tokenGuide: {
      title: 'Creating a GitHub Personal Access Token',
      steps: [
        'Go to GitHub.com and sign in to your account',
        'Click your profile picture and go to Settings',
        'Scroll down and click "Developer settings"',
        'Click "Personal access tokens" > "Tokens (classic)"',
        'Click "Generate new token (classic)"',
        'Select the scopes you need (repo, issues, etc.)',
        'Copy the generated token and store it securely'
      ],
      url: 'https://github.com/settings/tokens',
      expiryInfo: 'Tokens can be set to expire or never expire'
    },
    examples: {
      typescript: `import { GitHubAPI } from 'macro_api';

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});

// Get repository info
const repo = await github.getRepository('octocat', 'Hello-World');
console.log(\`Repository: \${repo.full_name}\`);
console.log(\`Stars: \${repo.stargazers_count}\`);

// Create a new issue
const issue = await github.createIssue('owner', 'repo', {
  title: 'Bug: Application crashes on startup',
  body: 'The application crashes when I try to start it...',
  labels: ['bug', 'high-priority'],
  assignees: ['developer1']
});

// List recent pull requests
const pullRequests = await github.getPullRequests('owner', 'repo', {
  state: 'open',
  sort: 'created',
  direction: 'desc'
});

// Create a pull request
const pr = await github.createPullRequest('owner', 'repo', {
  title: 'Add new feature',
  head: 'feature-branch',
  base: 'main',
  body: 'This PR adds a new feature that...'
});

// Get commit history
const commits = await github.getCommits('owner', 'repo', {
  since: '2024-01-01T00:00:00Z',
  per_page: 50
});

// Create a release
const release = await github.createRelease('owner', 'repo', {
  tag_name: 'v1.0.0',
  name: 'Version 1.0.0',
  body: 'First stable release with new features...',
  draft: false,
  prerelease: false
});`,
      javascript: `const { GitHubAPI } = require('macro_api');

const github = new GitHubAPI({
  token: process.env.GITHUB_TOKEN
});

// Repository and issue management
const repo = await github.getRepository('owner', 'repo');
const issue = await github.createIssue('owner', 'repo', {
  title: 'New Issue',
  body: 'Issue description'
});`
    }
  }
];

export default apiServices;