// src/data/apiServices.ts
import { LucideIcon } from 'lucide-react';

export interface APIService {
  id: string;
  name: string;
  className: string;
  variableName: string;
  icon: string;
  color: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'alpha';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number; // 1-100
  authParams: string[];
  docsLink: string;
  officialDocs?: string;
  features?: Array<{
    name: string;
    description: string;
    premium?: boolean;
  }>;
  methods?: Array<{
    name: string;
    description: string;
    returnType: string;
    category: string;
  }>;
  useCases: string[];
  limitations?: string[];
  pricing?: {
    free: boolean;
    freeTier?: string;
    paidPlans?: string;
  };
}

const apiServices: APIService[] = [
  // AI & Machine Learning
  {
    id: 'chatgpt',
    name: 'ChatGPT / OpenAI',
    className: 'ChatGPT',
    variableName: 'chatgpt',
    icon: 'Bot',
    color: 'text-green-600',
    description: 'Complete OpenAI API integration with ChatGPT, GPT-4, embeddings, and function calling capabilities.',
    category: 'AI & Machine Learning',
    status: 'stable',
    difficulty: 'beginner',
    popularity: 98,
    authParams: ['apiKey: "your-openai-api-key"'],
    docsLink: '/documentation/chatgpt',
    officialDocs: 'https://platform.openai.com/docs',
    features: [
      { name: 'Chat Completions', description: 'GPT-3.5, GPT-4, and GPT-4 Turbo models' },
      { name: 'Streaming Responses', description: 'Real-time response streaming' },
      { name: 'Function Calling', description: 'Tool integration and function execution' },
      { name: 'Embeddings', description: 'Text embeddings for semantic search' },
      { name: 'Image Generation', description: 'DALL-E image generation', premium: true },
      { name: 'Vision', description: 'Image analysis with GPT-4V', premium: true }
    ],
    methods: [
      { name: 'chat', description: 'Generate chat completions', returnType: 'string', category: 'Chat' },
      { name: 'createChatCompletion', description: 'Advanced chat completion', returnType: 'ChatCompletion', category: 'Chat' },
      { name: 'createStreamingChatCompletion', description: 'Streaming chat responses', returnType: 'Stream', category: 'Chat' },
      { name: 'createEmbeddings', description: 'Generate text embeddings', returnType: 'Embedding[]', category: 'Embeddings' },
      { name: 'withFunctions', description: 'Chat with function calling', returnType: 'FunctionResponse', category: 'Functions' },
      { name: 'withTools', description: 'Chat with tool integration', returnType: 'ToolResponse', category: 'Tools' }
    ],
    useCases: ['Chatbots', 'Content Generation', 'Code Assistance', 'Document Analysis', 'Customer Support'],
    pricing: {
      free: false,
      paidPlans: 'Pay-per-token pricing starting at $0.0015/1K tokens'
    }
  },
  {
    id: 'deepseek',
    name: 'DeepSeek AI',
    className: 'DeepSeek',
    variableName: 'deepseek',
    icon: 'Brain',
    color: 'text-purple-600',
    description: 'DeepSeek AI models for code generation, reasoning, and advanced AI capabilities.',
    category: 'AI & Machine Learning',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 75,
    authParams: ['apiKey: "your-deepseek-api-key"'],
    docsLink: '/documentation/deepseek',
    officialDocs: 'https://platform.deepseek.com/docs',
    features: [
      { name: 'Code Generation', description: 'Specialized code generation models' },
      { name: 'Reasoning Models', description: 'Advanced reasoning capabilities' },
      { name: 'Chat Completions', description: 'Conversational AI interface' },
      { name: 'Streaming', description: 'Real-time response streaming' }
    ],
    methods: [
      { name: 'chat', description: 'Generate chat responses', returnType: 'string', category: 'Chat' },
      { name: 'generateCode', description: 'Generate code completions', returnType: 'CodeCompletion', category: 'Code' },
      { name: 'createChatCompletion', description: 'Advanced chat completion', returnType: 'ChatCompletion', category: 'Chat' },
      { name: 'createCompletion', description: 'Text completion', returnType: 'Completion', category: 'Completion' }
    ],
    useCases: ['Code Generation', 'Technical Writing', 'Problem Solving', 'Code Review'],
    pricing: {
      free: true,
      freeTier: 'Limited free tier available',
      paidPlans: 'Competitive pricing for production use'
    }
  },

  // Payment & Commerce
  {
    id: 'stripe',
    name: 'Stripe',
    className: 'StripeAPI',
    variableName: 'stripe',
    icon: 'CreditCard',
    color: 'text-indigo-600',
    description: 'Complete Stripe payment processing with subscriptions, invoices, and comprehensive financial operations.',
    category: 'Payment & Commerce',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 95,
    authParams: ['secretKey: "sk_test_..."'],
    docsLink: '/documentation/stripe',
    officialDocs: 'https://stripe.com/docs/api',
    features: [
      { name: 'Payment Processing', description: 'Accept payments worldwide' },
      { name: 'Subscriptions', description: 'Recurring billing management' },
      { name: 'Invoicing', description: 'Professional invoice generation' },
      { name: 'Marketplace', description: 'Multi-party payments' },
      { name: 'Fraud Prevention', description: 'Built-in fraud detection' },
      { name: 'Webhooks', description: 'Real-time event notifications' }
    ],
    methods: [
      { name: 'createPaymentIntent', description: 'Create payment intent', returnType: 'PaymentIntent', category: 'Payments' },
      { name: 'createCustomer', description: 'Create customer record', returnType: 'Customer', category: 'Customers' },
      { name: 'createSubscription', description: 'Create subscription', returnType: 'Subscription', category: 'Subscriptions' },
      { name: 'createInvoice', description: 'Create invoice', returnType: 'Invoice', category: 'Invoicing' },
      { name: 'createRefund', description: 'Process refund', returnType: 'Refund', category: 'Refunds' },
      { name: 'listCharges', description: 'List charges', returnType: 'Charge[]', category: 'Charges' }
    ],
    useCases: ['E-commerce', 'SaaS Billing', 'Marketplace Payments', 'Subscription Services'],
    pricing: {
      free: true,
      freeTier: 'No monthly fees, pay-per-transaction',
      paidPlans: '2.9% + 30¢ per successful transaction'
    }
  },
  {
    id: 'paypal',
    name: 'PayPal',
    className: 'PayPalAPI',
    variableName: 'paypal',
    icon: 'Wallet',
    color: 'text-blue-600',
    description: 'PayPal payment processing with orders, subscriptions, and invoice management capabilities.',
    category: 'Payment & Commerce',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 85,
    authParams: ['clientId: "your-client-id"', 'clientSecret: "your-client-secret"'],
    docsLink: '/documentation/paypal',
    officialDocs: 'https://developer.paypal.com/docs/api/',
    features: [
      { name: 'Order Management', description: 'Create and manage orders' },
      { name: 'Payment Processing', description: 'Accept PayPal payments' },
      { name: 'Invoicing', description: 'Send professional invoices' },
      { name: 'Subscriptions', description: 'Recurring payment plans' },
      { name: 'Refunds', description: 'Process payment refunds' }
    ],
    methods: [
      { name: 'createOrder', description: 'Create payment order', returnType: 'Order', category: 'Orders' },
      { name: 'captureOrder', description: 'Capture payment', returnType: 'Capture', category: 'Orders' },
      { name: 'createInvoice', description: 'Create invoice', returnType: 'Invoice', category: 'Invoicing' },
      { name: 'refundPayment', description: 'Process refund', returnType: 'Refund', category: 'Refunds' }
    ],
    useCases: ['E-commerce', 'Digital Products', 'Services', 'International Payments'],
    pricing: {
      free: true,
      freeTier: 'No setup fees',
      paidPlans: '2.9% + $0.30 per transaction'
    }
  },

  // Communication & Social
  {
    id: 'slack',
    name: 'Slack',
    className: 'SlackAPI',
    variableName: 'slack',
    icon: 'MessageSquare',
    color: 'text-purple-600',
    description: 'Complete Slack integration for team communication, workflow automation, and bot development.',
    category: 'Communication & Social',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 90,
    authParams: ['botToken: "xoxb-..."'],
    docsLink: '/documentation/slack',
    officialDocs: 'https://api.slack.com/',
    features: [
      { name: 'Messaging', description: 'Send and manage messages' },
      { name: 'File Uploads', description: 'Share files and documents' },
      { name: 'Channel Management', description: 'Create and manage channels' },
      { name: 'Slash Commands', description: 'Custom command handlers' },
      { name: 'Interactive Components', description: 'Buttons and modals' },
      { name: 'Webhooks', description: 'Real-time event handling' }
    ],
    methods: [
      { name: 'sendMessage', description: 'Send message to channel', returnType: 'MessageResponse', category: 'Messaging' },
      { name: 'uploadFile', description: 'Upload file to Slack', returnType: 'FileResponse', category: 'Files' },
      { name: 'createChannel', description: 'Create new channel', returnType: 'Channel', category: 'Channels' },
      { name: 'getUserInfo', description: 'Get user information', returnType: 'User', category: 'Users' },
      { name: 'handleSlashCommand', description: 'Handle slash commands', returnType: 'CommandResponse', category: 'Commands' }
    ],
    useCases: ['Team Communication', 'Workflow Automation', 'Bot Development', 'Notifications'],
    pricing: {
      free: true,
      freeTier: 'Free plan with 10,000 messages',
      paidPlans: 'Pro plan starts at $7.25/user/month'
    }
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    className: 'SendGridAPI',
    variableName: 'sendgrid',
    icon: 'Mail',
    color: 'text-blue-600',
    description: 'Professional email delivery with templates, marketing campaigns, and comprehensive analytics.',
    category: 'Communication & Social',
    status: 'stable',
    difficulty: 'beginner',
    popularity: 85,
    authParams: ['apiKey: "SG...."'],
    docsLink: '/documentation/sendgrid',
    officialDocs: 'https://docs.sendgrid.com/',
    features: [
      { name: 'Transactional Email', description: 'Reliable email delivery' },
      { name: 'Email Templates', description: 'Dynamic email templates' },
      { name: 'Marketing Campaigns', description: 'Email marketing tools' },
      { name: 'Analytics', description: 'Email performance tracking' },
      { name: 'Contact Management', description: 'Manage email lists' },
      { name: 'Email Validation', description: 'Validate email addresses' }
    ],
    methods: [
      { name: 'sendEmail', description: 'Send transactional email', returnType: 'EmailResponse', category: 'Email' },
      { name: 'sendTemplateEmail', description: 'Send template email', returnType: 'EmailResponse', category: 'Templates' },
      { name: 'createTemplate', description: 'Create email template', returnType: 'Template', category: 'Templates' },
      { name: 'validateEmail', description: 'Validate email address', returnType: 'ValidationResult', category: 'Validation' },
      { name: 'addToList', description: 'Add contacts to list', returnType: 'ContactResponse', category: 'Contacts' }
    ],
    useCases: ['Transactional Emails', 'Marketing Campaigns', 'User Notifications', 'Email Verification'],
    pricing: {
      free: true,
      freeTier: '100 emails/day forever free',
      paidPlans: 'Essentials plan starts at $19.95/month'
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    className: 'SpotifyAPI',
    variableName: 'spotify',
    icon: 'Music',
    color: 'text-green-600',
    description: 'Comprehensive Spotify integration for music discovery, playlist management, and user data access.',
    category: 'Communication & Social',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 80,
    authParams: ['clientId: "your-client-id"', 'clientSecret: "your-client-secret"'],
    docsLink: '/documentation/spotify',
    officialDocs: 'https://developer.spotify.com/documentation/web-api/',
    features: [
      { name: 'Music Search', description: 'Search tracks, albums, artists' },
      { name: 'Playlist Management', description: 'Create and manage playlists' },
      { name: 'User Data', description: 'Access user listening data' },
      { name: 'Playback Control', description: 'Control user playback' },
      { name: 'Recommendations', description: 'Get music recommendations' },
      { name: 'OAuth Integration', description: 'Secure user authentication' }
    ],
    methods: [
      { name: 'search', description: 'Search Spotify catalog', returnType: 'SearchResult', category: 'Search' },
      { name: 'createPlaylist', description: 'Create user playlist', returnType: 'Playlist', category: 'Playlists' },
      { name: 'getRecommendations', description: 'Get music recommendations', returnType: 'Recommendations', category: 'Discovery' },
      { name: 'getCurrentlyPlaying', description: 'Get current track', returnType: 'Track', category: 'Playback' },
      { name: 'controlPlayback', description: 'Control playback', returnType: 'PlaybackState', category: 'Playback' }
    ],
    useCases: ['Music Apps', 'Playlist Generators', 'Music Discovery', 'Audio Analysis'],
    pricing: {
      free: true,
      freeTier: 'Free tier with rate limits',
      paidPlans: 'Commercial use requires agreement'
    }
  },

  // Development & Cloud
  {
    id: 'github',
    name: 'GitHub',
    className: 'GitHubAPI',
    variableName: 'github',
    icon: 'Github',
    color: 'text-gray-700',
    description: 'Complete GitHub integration for repository management, issues, pull requests, and collaboration.',
    category: 'Development & Cloud',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 95,
    authParams: ['token: "ghp_..."'],
    docsLink: '/documentation/github',
    officialDocs: 'https://docs.github.com/en/rest',
    features: [
      { name: 'Repository Management', description: 'Create and manage repositories' },
      { name: 'Issue Tracking', description: 'Manage issues and bug reports' },
      { name: 'Pull Requests', description: 'Handle code reviews and merges' },
      { name: 'Content Management', description: 'Read and write repository files' },
      { name: 'Collaboration', description: 'Team and organization features' },
      { name: 'Webhooks', description: 'Real-time event notifications' }
    ],
    methods: [
      { name: 'getRepo', description: 'Get repository information', returnType: 'Repository', category: 'Repositories' },
      { name: 'createRepo', description: 'Create new repository', returnType: 'Repository', category: 'Repositories' },
      { name: 'createIssue', description: 'Create new issue', returnType: 'Issue', category: 'Issues' },
      { name: 'createPullRequest', description: 'Create pull request', returnType: 'PullRequest', category: 'Pull Requests' },
      { name: 'getContents', description: 'Get file contents', returnType: 'Content', category: 'Content' },
      { name: 'searchRepositories', description: 'Search repositories', returnType: 'SearchResult', category: 'Search' }
    ],
    useCases: ['CI/CD Automation', 'Code Management', 'Issue Tracking', 'Team Collaboration'],
    pricing: {
      free: true,
      freeTier: 'Free for public repositories',
      paidPlans: 'GitHub Pro starts at $4/month'
    }
  },
  {
    id: 'vercel',
    name: 'Vercel',
    className: 'VercelAPI',
    variableName: 'vercel',
    icon: 'Zap',
    color: 'text-black',
    description: 'Vercel deployment automation with project management, domain configuration, and analytics.',
    category: 'Development & Cloud',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 85,
    authParams: ['accessToken: "your-access-token"'],
    docsLink: '/documentation/vercel',
    officialDocs: 'https://vercel.com/docs/rest-api',
    features: [
      { name: 'Deployment Management', description: 'Deploy and manage applications' },
      { name: 'Project Configuration', description: 'Manage project settings' },
      { name: 'Domain Management', description: 'Configure custom domains' },
      { name: 'Environment Variables', description: 'Manage environment configuration' },
      { name: 'Analytics', description: 'Monitor application performance' },
      { name: 'Team Collaboration', description: 'Team and organization features' }
    ],
    methods: [
      { name: 'createDeployment', description: 'Deploy application', returnType: 'Deployment', category: 'Deployments' },
      { name: 'getProject', description: 'Get project details', returnType: 'Project', category: 'Projects' },
      { name: 'addDomain', description: 'Add custom domain', returnType: 'Domain', category: 'Domains' },
      { name: 'createEnvironmentVariable', description: 'Set environment variable', returnType: 'EnvVar', category: 'Environment' },
      { name: 'waitForDeployment', description: 'Wait for deployment completion', returnType: 'Deployment', category: 'Deployments' }
    ],
    useCases: ['CI/CD Pipelines', 'Automated Deployment', 'Preview Environments', 'Static Site Hosting'],
    pricing: {
      free: true,
      freeTier: 'Hobby plan with generous limits',
      paidPlans: 'Pro plan starts at $20/month'
    }
  },
  {
    id: 's3',
    name: 'AWS S3',
    className: 'S3API',
    variableName: 's3',
    icon: 'Database',
    color: 'text-orange-600',
    description: 'Complete AWS S3 object storage with upload, download, and advanced file management capabilities.',
    category: 'Development & Cloud',
    status: 'stable',
    difficulty: 'advanced',
    popularity: 90,
    authParams: ['accessKeyId: "AKIA..."', 'secretAccessKey: "your-secret"', 'region: "us-east-1"'],
    docsLink: '/documentation/s3',
    officialDocs: 'https://docs.aws.amazon.com/s3/',
    features: [
      { name: 'Object Storage', description: 'Store and retrieve any amount of data' },
      { name: 'Pre-signed URLs', description: 'Secure temporary access URLs' },
      { name: 'Bucket Management', description: 'Create and configure buckets' },
      { name: 'Access Control', description: 'Fine-grained permissions' },
      { name: 'Lifecycle Management', description: 'Automated data archiving' },
      { name: 'Encryption', description: 'Server-side encryption support' }
    ],
    methods: [
      { name: 'uploadObject', description: 'Upload file to S3', returnType: 'UploadResult', category: 'Objects' },
      { name: 'getObject', description: 'Download file from S3', returnType: 'S3Object', category: 'Objects' },
      { name: 'listObjects', description: 'List bucket objects', returnType: 'ObjectList', category: 'Objects' },
      { name: 'generatePresignedUrl', description: 'Generate signed URL', returnType: 'string', category: 'URLs' },
      { name: 'copyObject', description: 'Copy object within S3', returnType: 'CopyResult', category: 'Objects' }
    ],
    useCases: ['File Storage', 'Content Delivery', 'Data Backup', 'Static Website Hosting'],
    pricing: {
      free: true,
      freeTier: '5GB storage, 20,000 GET requests',
      paidPlans: 'Pay-as-you-go pricing'
    }
  },
  {
    id: 'dockerhub',
    name: 'Docker Hub',
    className: 'DockerHubAPI',
    variableName: 'dockerhub',
    icon: 'Box',
    color: 'text-blue-600',
    description: 'Docker Hub container registry management with repository operations and automated builds.',
    category: 'Development & Cloud',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 75,
    authParams: ['token: "your-docker-token"'],
    docsLink: '/documentation/dockerhub',
    officialDocs: 'https://docs.docker.com/docker-hub/api/latest/',
    features: [
      { name: 'Repository Management', description: 'Manage Docker repositories' },
      { name: 'Image Operations', description: 'Push, pull, and manage images' },
      { name: 'Automated Builds', description: 'Set up automated builds' },
      { name: 'Webhooks', description: 'Build and push notifications' },
      { name: 'Team Management', description: 'Collaborate on repositories' },
      { name: 'Security Scanning', description: 'Vulnerability assessment' }
    ],
    methods: [
      { name: 'getRepository', description: 'Get repository info', returnType: 'Repository', category: 'Repositories' },
      { name: 'listTags', description: 'List image tags', returnType: 'Tag[]', category: 'Tags' },
      { name: 'createRepository', description: 'Create new repository', returnType: 'Repository', category: 'Repositories' },
      { name: 'deleteTag', description: 'Delete image tag', returnType: 'DeleteResult', category: 'Tags' },
      { name: 'getBuildTriggers', description: 'Get build triggers', returnType: 'BuildTrigger[]', category: 'Builds' }
    ],
    useCases: ['Container Registry', 'CI/CD Pipelines', 'Image Distribution', 'Team Collaboration'],
    pricing: {
      free: true,
      freeTier: '1 private repository, unlimited public',
      paidPlans: 'Pro plan starts at $5/month'
    }
  },

  // Productivity & Content
  {
    id: 'notion',
    name: 'Notion',
    className: 'NotionAPI',
    variableName: 'notion',
    icon: 'FileText',
    color: 'text-gray-800',
    description: 'Complete Notion integration for database operations, page management, and content automation.',
    category: 'Productivity & Content',
    status: 'stable',
    difficulty: 'intermediate',
    popularity: 80,
    authParams: ['apiKey: "secret_..."'],
    docsLink: '/documentation/notion',
    officialDocs: 'https://developers.notion.com/',
    features: [
      { name: 'Database Operations', description: 'Query and update databases' },
      { name: 'Page Management', description: 'Create and edit pages' },
      { name: 'Block Operations', description: 'Manage page content blocks' },
      { name: 'Search', description: 'Search across workspace' },
      { name: 'Comments', description: 'Add and manage comments' },
      { name: 'Rich Content', description: 'Support for rich text and media' }
    ],
    methods: [
      { name: 'queryDatabase', description: 'Query database entries', returnType: 'DatabaseResult', category: 'Databases' },
      { name: 'createPage', description: 'Create new page', returnType: 'Page', category: 'Pages' },
      { name: 'getBlockChildren', description: 'Get page blocks', returnType: 'Block[]', category: 'Blocks' },
      { name: 'appendBlockChildren', description: 'Add content blocks', returnType: 'Block[]', category: 'Blocks' },
      { name: 'search', description: 'Search workspace', returnType: 'SearchResult', category: 'Search' }
    ],
    useCases: ['Content Management', 'Database Integration', 'Workflow Automation', 'Knowledge Base'],
    pricing: {
      free: true,
      freeTier: 'Personal use with limits',
      paidPlans: 'Plus plan starts at $8/month'
    }
  },
  {
    id: 'youtube',
    name: 'YouTube',
    className: 'YouTubeNotify',
    variableName: 'youtube',
    icon: 'Play',
    color: 'text-red-600',
    description: 'YouTube channel monitoring with real-time notifications and webhook integration for new video alerts.',
    category: 'Productivity & Content',
    status: 'stable',
    difficulty: 'beginner',
    popularity: 70,
    authParams: ['channelId: "UC..."', 'apiKey: "your-youtube-api-key"'],
    docsLink: '/documentation/youtube',
    officialDocs: 'https://developers.google.com/youtube/v3',
    features: [
      { name: 'Channel Monitoring', description: 'Monitor YouTube channels for new videos' },
      { name: 'Webhook Integration', description: 'Discord and Slack notifications' },
      { name: 'Video Metadata', description: 'Extract video information' },
      { name: 'Real-time Updates', description: 'Instant new video notifications' },
      { name: 'Customizable Alerts', description: 'Configure notification format' }
    ],
    methods: [
      { name: 'startMonitoring', description: 'Start channel monitoring', returnType: 'void', category: 'Monitoring' },
      { name: 'setWebhook', description: 'Set Discord webhook', returnType: 'void', category: 'Webhooks' },
      { name: 'manualCheck', description: 'Manual video check', returnType: 'Video[]', category: 'Monitoring' },
      { name: 'stopMonitoring', description: 'Stop monitoring', returnType: 'void', category: 'Monitoring' }
    ],
    useCases: ['Content Monitoring', 'Social Media Automation', 'Fan Communities', 'Content Aggregation'],
    pricing: {
      free: true,
      freeTier: 'Free with YouTube API quota',
      paidPlans: 'Paid quota available from Google'
    }
  },

  // Gaming & Entertainment
  {
    id: 'valorant',
    name: 'Valorant',
    className: 'Valorant',
    variableName: 'valorant',
    icon: 'Target',
    color: 'text-red-500',
    description: 'Valorant player statistics, match history, leaderboards, and competitive ranking data.',
    category: 'Gaming & Entertainment',
    status: 'stable',
    difficulty: 'beginner',
    popularity: 65,
    authParams: ['apiKey?: "optional-henrik-api-key"'],
    docsLink: '/documentation/valorant',
    officialDocs: 'https://docs.henrikdev.xyz/',
    features: [
      { name: 'Player Stats', description: 'Comprehensive player statistics' },
      { name: 'Match History', description: 'Detailed match information' },
      { name: 'Leaderboards', description: 'Regional competitive rankings' },
      { name: 'Agent Data', description: 'Character information and stats' },
      { name: 'Map Data', description: 'Map information and statistics' },
      { name: 'Weapon Stats', description: 'Weapon damage and statistics' }
    ],
    methods: [
      { name: 'getAccount', description: 'Get player account info', returnType: 'Account', category: 'Accounts' },
      { name: 'getMMR', description: 'Get player ranking', returnType: 'MMRData', category: 'Rankings' },
      { name: 'getMatchHistory', description: 'Get match history', returnType: 'Match[]', category: 'Matches' },
      { name: 'getLeaderboard', description: 'Get regional leaderboard', returnType: 'LeaderboardEntry[]', category: 'Leaderboards' },
      { name: 'getPlayerStats', description: 'Get detailed player stats', returnType: 'PlayerStats', category: 'Statistics' }
    ],
    useCases: ['Gaming Statistics', 'Player Tracking', 'Esports Analytics', 'Gaming Communities'],
    pricing: {
      free: true,
      freeTier: 'Free tier with rate limits',
      paidPlans: 'Premium API access available'
    }
  },
  {
    id: 'football',
    name: 'Football API',
    className: 'FootballAPI',
    variableName: 'football',
    icon: 'Target',
    color: 'text-green-700',
    description: 'Comprehensive football/soccer data including leagues, teams, players, fixtures, and live scores.',
    category: 'Gaming & Entertainment',
    status: 'stable',
    difficulty: 'beginner',
    popularity: 70,
    authParams: ['apiKey: "your-api-football-key"'],
    docsLink: '/documentation/football',
    officialDocs: 'https://api-sports.io/documentation/football/v3',
    features: [
      { name: 'Live Scores', description: 'Real-time match scores and updates' },
      { name: 'League Data', description: 'Comprehensive league information' },
      { name: 'Team Statistics', description: 'Detailed team performance data' },
      { name: 'Player Stats', description: 'Individual player statistics' },
      { name: 'Fixtures', description: 'Match schedules and results' },
      { name: 'Standings', description: 'League tables and rankings' }
    ],
    methods: [
      { name: 'getLeagues', description: 'Get football leagues', returnType: 'League[]', category: 'Leagues' },
      { name: 'getTeams', description: 'Get team information', returnType: 'Team[]', category: 'Teams' },
      { name: 'getFixtures', description: 'Get match fixtures', returnType: 'Fixture[]', category: 'Fixtures' },
      { name: 'getStandings', description: 'Get league standings', returnType: 'Standing[]', category: 'Standings' },
      { name: 'getTopScorers', description: 'Get top scorers', returnType: 'Player[]', category: 'Statistics' }
    ],
    useCases: ['Sports Apps', 'Fantasy Football', 'Live Score Displays', 'Sports Analytics'],
    pricing: {
      free: true,
      freeTier: '100 requests/day',
      paidPlans: 'Paid plans start at $5/month'
    }
  }
];

export const categories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Integrate powerful AI capabilities for chat, code generation, and intelligent automation',
    icon: 'Bot',
    gradient: 'from-green-500 to-emerald-600',
    count: apiServices.filter(s => s.category === 'AI & Machine Learning').length
  },
  {
    id: 'payment-commerce',
    name: 'Payment & Commerce',
    description: 'Handle payments, subscriptions, and financial transactions securely',
    icon: 'CreditCard',
    gradient: 'from-blue-500 to-blue-600',
    count: apiServices.filter(s => s.category === 'Payment & Commerce').length
  },
  {
    id: 'communication-social',
    name: 'Communication & Social',
    description: 'Connect with users through messaging, email, and social platforms',
    icon: 'MessageSquare',
    gradient: 'from-purple-500 to-purple-600',
    count: apiServices.filter(s => s.category === 'Communication & Social').length
  },
  {
    id: 'development-cloud',
    name: 'Development & Cloud',
    description: 'Deploy, manage, and scale your applications in the cloud',
    icon: 'Cloud',
    gradient: 'from-gray-600 to-gray-700',
    count: apiServices.filter(s => s.category === 'Development & Cloud').length
  },
  {
    id: 'productivity-content',
    name: 'Productivity & Content',
    description: 'Manage content, automate workflows, and boost productivity',
    icon: 'FileText',
    gradient: 'from-indigo-500 to-indigo-600',
    count: apiServices.filter(s => s.category === 'Productivity & Content').length
  },
  {
    id: 'gaming-entertainment',
    name: 'Gaming & Entertainment',
    description: 'Access gaming statistics, sports data, and entertainment content',
    icon: 'Gamepad2',
    gradient: 'from-red-500 to-red-600',
    count: apiServices.filter(s => s.category === 'Gaming & Entertainment').length
  }
];

export default apiServices;