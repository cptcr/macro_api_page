import { ApiService } from '../types/apiService';

export const apiServices: ApiService[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT/OpenAI',
    description: 'Interface with OpenAI\'s powerful language models for AI-powered text generation and embeddings.',
    icon: 'MessageSquare',
    color: 'text-green-500',
    docsLink: '/documentation#chatgpt',
    tokenGuide: {
      title: 'How to Get OpenAI API Key',
      steps: [
        'Sign up for an OpenAI account at https://openai.com',
        'Navigate to the API section',
        'Go to "API Keys" and click "Create new secret key"',
        'Copy your API key and store it securely',
        'Set a spending limit in your account settings to avoid unexpected charges'
      ],
      url: 'https://platform.openai.com/account/api-keys'
    },
    examples: {
      typescript: `import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}

// Streaming example
const stream = await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: 'Write a poem about programming' }
    ],
    temperature: 0.7
  },
  (chunk) => console.log(chunk),
  (error) => console.error(error),
  () => console.log('Stream ended')
);`,
      javascript: `const { ChatGPT } = require('macro_api');

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}

// Streaming example
gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: 'Write a poem about programming' }
    ],
    temperature: 0.7
  },
  (chunk) => console.log(chunk),
  (error) => console.error(error),
  () => console.log('Stream ended')
);`
    }
  },
  {
    id: 'spotify',
    name: 'Spotify API',
    description: 'Interact with the Spotify platform - access music, playlists, user data, and control playback features.',
    icon: 'Music',
    color: 'text-green-500',
    docsLink: '/documentation#spotify',
    tokenGuide: {
      title: 'How to Get Spotify API Credentials',
      steps: [
        'Log in to Spotify Developer Dashboard at https://developer.spotify.com/dashboard/',
        'Create a new app by clicking "Create An App"',
        'Fill in the app name, description, and accept the terms',
        'Once created, you\'ll see your Client ID and can view the Client Secret',
        'Add a redirect URI in the app settings if you need OAuth authentication'
      ],
      url: 'https://developer.spotify.com/dashboard/'
    },
    examples: {
      typescript: `import { SpotifyAPI } from 'macro_api';

// Create API client
const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// Get authorization URL for user login
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'playlist-read-private'
]);

// Exchange code from callback for access token
async function handleCallback(code: string) {
  await spotify.exchangeCode(code);
  
  // Get current user's profile
  const user = await spotify.getCurrentUser();
  console.log(\`Hello, \${user.display_name}!\`);
  
  // Search for tracks
  const searchResults = await spotify.search(
    'Never Gonna Give You Up',
    ['track'],
    { limit: 5 }
  );
  
  console.log(searchResults);
}`,
      javascript: `const { SpotifyAPI } = require('macro_api');

// Create API client
const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// Get authorization URL for user login
const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'playlist-read-private'
]);

// Exchange code from callback for access token
async function handleCallback(code) {
  await spotify.exchangeCode(code);
  
  // Get current user's profile
  const user = await spotify.getCurrentUser();
  console.log(\`Hello, \${user.display_name}!\`);
  
  // Search for tracks
  const searchResults = await spotify.search(
    'Never Gonna Give You Up',
    ['track'],
    { limit: 5 }
  );
  
  console.log(searchResults);
}`
    }
  },
  {
    id: 'stripe',
    name: 'Stripe API',
    description: 'Process payments, manage subscriptions, handle customers, and integrate Stripe payment solutions.',
    icon: 'CreditCard',
    color: 'text-purple-500',
    docsLink: '/documentation#stripe',
    tokenGuide: {
      title: 'How to Get Stripe API Keys',
      steps: [
        'Create a Stripe account at https://stripe.com',
        'Navigate to the Developers section from the dashboard',
        'Go to "API keys" tab',
        'Use the "Test" key for development and testing',
        'When ready for production, use the "Live" key (requires business verification)'
      ],
      url: 'https://dashboard.stripe.com/apikeys'
    },
    examples: {
      typescript: `import { StripeAPI } from 'macro_api';

// Initialize Stripe client
const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a customer
async function createCustomer() {
  const customer = await stripe.createCustomer({
    email: 'customer@example.com',
    name: 'John Doe',
    description: 'New customer from website'
  });
  
  console.log('Customer created:', customer.id);
  return customer;
}

// Create and process a payment
async function processPayment(customerId: string) {
  const paymentIntent = await stripe.createPaymentIntent({
    amount: 2000, // $20.00
    currency: 'usd',
    customer: customerId,
    payment_method_types: ['card'],
    description: 'Purchase from website'
  });
  
  return paymentIntent;
}`,
      javascript: `const { StripeAPI } = require('macro_api');

// Initialize Stripe client
const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a customer
async function createCustomer() {
  const customer = await stripe.createCustomer({
    email: 'customer@example.com',
    name: 'John Doe',
    description: 'New customer from website'
  });
  
  console.log('Customer created:', customer.id);
  return customer;
}

// Create and process a payment
async function processPayment(customerId) {
  const paymentIntent = await stripe.createPaymentIntent({
    amount: 2000, // $20.00
    currency: 'usd',
    customer: customerId,
    payment_method_types: ['card'],
    description: 'Purchase from website'
  });
  
  return paymentIntent;
}`
    }
  },
  {
    id: 'notion',
    name: 'Notion API',
    description: 'Create and manage Notion databases, pages, and blocks programmatically with a simple interface.',
    icon: 'FileText',
    color: 'text-gray-600',
    docsLink: '/documentation#notion',
    tokenGuide: {
      title: 'How to Get Notion API Key',
      steps: [
        'Visit https://www.notion.so/my-integrations',
        'Click "New integration" and fill out the form',
        'Select the capabilities your integration needs',
        'Submit the form to create your integration',
        'Copy your "Internal Integration Token"',
        'Share the databases/pages with your integration in Notion'
      ],
      url: 'https://www.notion.so/my-integrations'
    },
    examples: {
      typescript: `import { NotionAPI } from 'macro_api';

// Initialize the Notion client
const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Query a database
async function queryDatabase(databaseId: string) {
  const response = await notion.queryDatabase(databaseId, {
    filter: {
      property: 'Status',
      status: {
        equals: 'Done'
      }
    },
    sorts: [
      {
        property: 'LastUpdated',
        direction: 'descending'
      }
    ]
  });
  
  console.log('Results:', response.results);
  return response;
}

// Create a new page in a database
async function createDatabaseItem(databaseId: string, title: string) {
  const page = await notion.createPage({
    parent: {
      type: 'database_id',
      database_id: databaseId
    },
    properties: {
      'Title': {
        title: [
          {
            text: {
              content: title
            }
          }
        ]
      },
      'Status': {
        status: {
          name: 'In Progress'
        }
      }
    }
  });
  
  return page;
}`,
      javascript: `const { NotionAPI } = require('macro_api');

// Initialize the Notion client
const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Query a database
async function queryDatabase(databaseId) {
  const response = await notion.queryDatabase(databaseId, {
    filter: {
      property: 'Status',
      status: {
        equals: 'Done'
      }
    },
    sorts: [
      {
        property: 'LastUpdated',
        direction: 'descending'
      }
    ]
  });
  
  console.log('Results:', response.results);
  return response;
}

// Create a new page in a database
async function createDatabaseItem(databaseId, title) {
  const page = await notion.createPage({
    parent: {
      type: 'database_id',
      database_id: databaseId
    },
    properties: {
      'Title': {
        title: [
          {
            text: {
              content: title
            }
          }
        ]
      },
      'Status': {
        status: {
          name: 'In Progress'
        }
      }
    }
  });
  
  return page;
}`
    }
  },
  {
    id: 'football',
    name: 'Football API',
    description: 'Access comprehensive football (soccer) data including teams, leagues, fixtures, and player statistics.',
    icon: 'Dribbble',
    color: 'text-blue-500',
    docsLink: '/documentation#football',
    tokenGuide: {
      title: 'How to Get Football API Key',
      steps: [
        'Sign up for an account at https://rapidapi.com',
        'Search for "API-Football" in the RapidAPI marketplace',
        'Subscribe to a plan that fits your needs',
        'Copy your API key from the API-Football dashboard',
        'Use this key when initializing the FootballAPI client'
      ],
      url: 'https://rapidapi.com/api-sports/api/api-football/'
    },
    examples: {
      typescript: `import { FootballAPI } from 'macro_api';

// Initialize the Football API client
const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get available leagues
async function getLeagues() {
  const response = await football.getLeagues({
    country: 'England',
    season: 2023
  });
  
  console.log('Available leagues:', response.response);
  return response;
}

// Get fixtures for a specific league
async function getFixtures(leagueId: number) {
  const response = await football.getFixtures({
    league: leagueId,
    season: 2023,
    from: '2023-01-01',
    to: '2023-01-15'
  });
  
  console.log('Fixtures:', response.response);
  return response;
}

// Get team statistics
async function getTeamStats(teamId: number, leagueId: number) {
  const stats = await football.getTeamStatistics({
    team: teamId,
    league: leagueId,
    season: 2023
  });
  
  console.log('Team stats:', stats.response);
  return stats;
}`,
      javascript: `const { FootballAPI } = require('macro_api');

// Initialize the Football API client
const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get available leagues
async function getLeagues() {
  const response = await football.getLeagues({
    country: 'England',
    season: 2023
  });
  
  console.log('Available leagues:', response.response);
  return response;
}

// Get fixtures for a specific league
async function getFixtures(leagueId) {
  const response = await football.getFixtures({
    league: leagueId,
    season: 2023,
    from: '2023-01-01',
    to: '2023-01-15'
  });
  
  console.log('Fixtures:', response.response);
  return response;
}

// Get team statistics
async function getTeamStats(teamId, leagueId) {
  const stats = await football.getTeamStatistics({
    team: teamId,
    league: leagueId,
    season: 2023
  });
  
  console.log('Team stats:', stats.response);
  return stats;
}`
    }
  },
  {
    id: 'paypal',
    name: 'PayPal API',
    description: 'Process payments, manage orders, issue refunds, and handle subscriptions through PayPal.',
    icon: 'DollarSign',
    color: 'text-blue-500',
    docsLink: '/documentation#paypal',
    tokenGuide: {
      title: 'How to Get PayPal API Credentials',
      steps: [
        'Sign up for a PayPal Developer account at https://developer.paypal.com/',
        'Log in to the Developer Dashboard',
        'Navigate to "My Apps & Credentials"',
        'Create a new app under either Sandbox (testing) or Live',
        'Copy your Client ID and Secret',
        'For testing, use Sandbox credentials'
      ],
      url: 'https://developer.paypal.com/dashboard/'
    },
    examples: {
      typescript: `import { PayPalAPI } from 'macro_api';

// Initialize PayPal client
const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: true // Use true for testing, false for production
});

// Create an order
async function createOrder(amount: string) {
  const order = await paypal.createOrder({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount
        },
        description: 'Digital product purchase'
      }
    ],
    application_context: {
      brand_name: 'Your Brand',
      return_url: 'https://yourwebsite.com/success',
      cancel_url: 'https://yourwebsite.com/cancel'
    }
  });
  
  console.log('Order created:', order.id);
  return order;
}

// Capture an order payment after approval
async function capturePayment(orderId: string) {
  const captureData = await paypal.captureOrder(orderId);
  console.log('Payment captured:', captureData);
  return captureData;
}`,
      javascript: `const { PayPalAPI } = require('macro_api');

// Initialize PayPal client
const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: true // Use true for testing, false for production
});

// Create an order
async function createOrder(amount) {
  const order = await paypal.createOrder({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount
        },
        description: 'Digital product purchase'
      }
    ],
    application_context: {
      brand_name: 'Your Brand',
      return_url: 'https://yourwebsite.com/success',
      cancel_url: 'https://yourwebsite.com/cancel'
    }
  });
  
  console.log('Order created:', order.id);
  return order;
}

// Capture an order payment after approval
async function capturePayment(orderId) {
  const captureData = await paypal.captureOrder(orderId);
  console.log('Payment captured:', captureData);
  return captureData;
}`
    }
  },
  {
    id: 'deepseek',
    name: 'DeepSeek API',
    description: 'Interact with DeepSeek\'s AI models for text generation, embedding, and completion tasks.',
    icon: 'Brain',
    color: 'text-pink-500',
    docsLink: '/documentation#deepseek',
    tokenGuide: {
      title: 'How to Get DeepSeek API Key',
      steps: [
        'Sign up for a DeepSeek account at https://deepseek.ai',
        'Navigate to your account settings or API section',
        'Generate a new API key',
        'Copy and store your API key securely',
        'Set usage limits to control API costs'
      ],
      url: 'https://deepseek.ai'
    },
    examples: {
      typescript: `import { DeepSeek } from 'macro_api';

// Initialize DeepSeek client
const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Generate text with a simple chat
async function generateText() {
  const response = await deepseek.chat(
    'Explain quantum computing in simple terms',
    'You are a helpful assistant who explains complex topics simply'
  );
  
  console.log(response);
  return response;
}

// Generate code using DeepSeek Coder model
async function generateCode() {
  const code = await deepseek.generateCode(
    'Create a React component that shows a counter with increment and decrement buttons',
    {
      model: 'deepseek-coder-1.3b-instruct',
      temperature: 0.2,
      max_tokens: 1000
    }
  );
  
  console.log(code.choices[0].text);
  return code;
}`,
      javascript: `const { DeepSeek } = require('macro_api');

// Initialize DeepSeek client
const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Generate text with a simple chat
async function generateText() {
  const response = await deepseek.chat(
    'Explain quantum computing in simple terms',
    'You are a helpful assistant who explains complex topics simply'
  );
  
  console.log(response);
  return response;
}

// Generate code using DeepSeek Coder model
async function generateCode() {
  const code = await deepseek.generateCode(
    'Create a React component that shows a counter with increment and decrement buttons',
    {
      model: 'deepseek-coder-1.3b-instruct',
      temperature: 0.2,
      max_tokens: 1000
    }
  );
  
  console.log(code.choices[0].text);
  return code;
}`
    }
  },
  {
    id: 'valorant',
    name: 'Valorant API',
    description: 'Access game data, player statistics, match information, and leaderboards for Valorant.',
    icon: 'Target',
    color: 'text-red-500',
    docsLink: '/documentation#valorant',
    tokenGuide: {
      title: 'How to Access Valorant API',
      steps: [
        'The Valorant API wrapper uses Henrik\'s Valorant API',
        'Visit https://docs.henrikdev.xyz/valorant.html for API documentation',
        'While many endpoints don\'t require authentication, an API key will provide higher rate limits',
        'Register at https://auth.henrikdev.xyz/ to get an API key',
        'Use the API key when initializing the Valorant client'
      ],
      url: 'https://docs.henrikdev.xyz/valorant.html'
    },
    examples: {
      typescript: `import { Valorant } from 'macro_api';

// Initialize the Valorant client
// API key is optional but recommended for higher rate limits
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Get account details
async function getAccountDetails(name: string, tag: string) {
  const account = await valorant.getAccount(name, tag);
  console.log('Account details:', account);
  return account;
}

// Get player MMR (Match Making Rating)
async function getPlayerMMR(name: string, tag: string) {
  const mmr = await valorant.getMMR(name, tag, { region: 'na' });
  console.log('Player MMR:', mmr);
  return mmr;
}

// Get match history
async function getMatchHistory(name: string, tag: string) {
  const matches = await valorant.getMatchHistory('na', name, tag, {
    queue: 'competitive'
  });
  
  console.log('Recent matches:', matches);
  return matches;
}`,
      javascript: `const { Valorant } = require('macro_api');

// Initialize the Valorant client
// API key is optional but recommended for higher rate limits
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Get account details
async function getAccountDetails(name, tag) {
  const account = await valorant.getAccount(name, tag);
  console.log('Account details:', account);
  return account;
}

// Get player MMR (Match Making Rating)
async function getPlayerMMR(name, tag) {
  const mmr = await valorant.getMMR(name, tag, { region: 'na' });
  console.log('Player MMR:', mmr);
  return mmr;
}

// Get match history
async function getMatchHistory(name, tag) {
  const matches = await valorant.getMatchHistory('na', name, tag, {
    queue: 'competitive'
  });
  
  console.log('Recent matches:', matches);
  return matches;
}`
    }
  },
  {
    id: 'youtube',
    name: 'YouTube Notifications',
    description: 'Monitor YouTube channels for new videos and send notifications through webhooks.',
    icon: 'Youtube',
    color: 'text-red-600',
    docsLink: '/documentation#youtube',
    tokenGuide: {
      title: 'How to Get YouTube API Key',
      steps: [
        'Go to the Google Cloud Console at https://console.cloud.google.com/',
        'Create a new project or select an existing one',
        'Enable the YouTube Data API v3 from the library',
        'Go to "Credentials" and create an API Key',
        'Restrict the API key to YouTube Data API v3 for security',
        'For Discord webhook notifications, you\'ll also need a webhook URL from Discord'
      ],
      url: 'https://console.cloud.google.com/apis/dashboard'
    },
    examples: {
      typescript: `import { YouTubeNotify } from 'macro_api';

// Initialize the YouTube notification system
const youtubeMonitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',  // Google Developers channel
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 600000,  // Check every 10 minutes
  maxResults: 5,
  includeDescription: true,
  mentionEveryone: false
});

// Set the Discord webhook URL
youtubeMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
youtubeMonitor.startMonitoring();

// You can also manually check for new videos
async function manualCheck() {
  const newVideos = await youtubeMonitor.manualCheck();
  console.log('New videos found:', newVideos.length);
  
  newVideos.forEach(video => {
    console.log(\`\${video.title} - https://www.youtube.com/watch?v=\${video.videoId}\`);
  });
  
  return newVideos;
}

// To stop monitoring later
// youtubeMonitor.stopMonitoring();`,
      javascript: `const { YouTubeNotify } = require('macro_api');

// Initialize the YouTube notification system
const youtubeMonitor = new YouTubeNotify({
  channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',  // Google Developers channel
  apiKey: process.env.YOUTUBE_API_KEY,
  checkIntervalMs: 600000,  // Check every 10 minutes
  maxResults: 5,
  includeDescription: true,
  mentionEveryone: false
});

// Set the Discord webhook URL
youtubeMonitor.setWebhook(process.env.DISCORD_WEBHOOK_URL);

// Start monitoring
youtubeMonitor.startMonitoring();

// You can also manually check for new videos
async function manualCheck() {
  const newVideos = await youtubeMonitor.manualCheck();
  console.log('New videos found:', newVideos.length);
  
  newVideos.forEach(video => {
    console.log(\`\${video.title} - https://www.youtube.com/watch?v=\${video.videoId}\`);
  });
  
  return newVideos;
}

// To stop monitoring later
// youtubeMonitor.stopMonitoring();`
    }
  }
];

export default apiServices;