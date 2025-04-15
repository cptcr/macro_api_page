import { CodeExample } from '../types/codeExample';

export const codeExamples: CodeExample[] = [
  {
    id: 'basic-usage',
    service: 'general',
    title: 'Basic Usage',
    description: 'How to install and import the library in your project.',
    typescript: `// Installation
// npm install macro_api

import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize the clients with your API keys
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`,
    javascript: `// Installation
// npm install macro_api

const { ChatGPT, SpotifyAPI, StripeAPI } = require('macro_api');

// Initialize the clients with your API keys
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`
  },
  {
    id: 'chatgpt-completion',
    service: 'chatgpt',
    title: 'Chat Completions',
    description: 'Generate text responses from OpenAI models with different parameters.',
    typescript: `import { ChatGPT } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat example
async function simpleChat() {
  const response = await gpt.chat(
    'What are the best practices for API design?',
    'You are a senior software engineer with expertise in API design.'
  );
  
  console.log(response);
}

// Custom chat completion with more options
async function customCompletion() {
  const response = await gpt.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a senior software engineer with expertise in API design.'
      },
      {
        role: 'user',
        content: 'What are the best practices for API design?'
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  console.log(response.choices[0]?.message?.content || '');
}`,
    javascript: `const { ChatGPT } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat example
async function simpleChat() {
  const response = await gpt.chat(
    'What are the best practices for API design?',
    'You are a senior software engineer with expertise in API design.'
  );
  
  console.log(response);
}

// Custom chat completion with more options
async function customCompletion() {
  const response = await gpt.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a senior software engineer with expertise in API design.'
      },
      {
        role: 'user',
        content: 'What are the best practices for API design?'
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  console.log(response.choices[0]?.message?.content || '');
}`
  },
  {
    id: 'spotify-playlist',
    service: 'spotify',
    title: 'Managing Playlists',
    description: 'Create playlists and add tracks using the Spotify API.',
    typescript: `import { SpotifyAPI } from 'macro_api';

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// First get authorization
const authUrl = spotify.getAuthorizationUrl([
  'playlist-modify-private',
  'playlist-modify-public',
  'user-read-email'
]);
console.log('Please authorize:', authUrl);

// After user authorizes and you get the code from the callback
async function handleCallback(code: string) {
  await spotify.exchangeCode(code);
  
  // Get the user ID
  const user = await spotify.getCurrentUser();
  
  // Create a new playlist
  const playlist = await spotify.createPlaylist(
    user.id,
    'My Awesome Playlist',
    false, // Not public
    'Created with macro_api'
  );
  
  // Search for tracks
  const searchResults = await spotify.search(
    'Daft Punk',
    ['track'],
    { limit: 5 }
  );
  
  // Get the track URIs from the search results
  const trackUris = searchResults.tracks.items.map((track: any) => track.uri);
  
  // Add tracks to the playlist
  await spotify.addTracksToPlaylist(playlist.id, trackUris);
  
  console.log(\`Playlist created: \${playlist.external_urls.spotify}\`);
}`,
    javascript: `const { SpotifyAPI } = require('macro_api');

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

// First get authorization
const authUrl = spotify.getAuthorizationUrl([
  'playlist-modify-private',
  'playlist-modify-public',
  'user-read-email'
]);
console.log('Please authorize:', authUrl);

// After user authorizes and you get the code from the callback
async function handleCallback(code) {
  await spotify.exchangeCode(code);
  
  // Get the user ID
  const user = await spotify.getCurrentUser();
  
  // Create a new playlist
  const playlist = await spotify.createPlaylist(
    user.id,
    'My Awesome Playlist',
    false, // Not public
    'Created with macro_api'
  );
  
  // Search for tracks
  const searchResults = await spotify.search(
    'Daft Punk',
    ['track'],
    { limit: 5 }
  );
  
  // Get the track URIs from the search results
  const trackUris = searchResults.tracks.items.map(track => track.uri);
  
  // Add tracks to the playlist
  await spotify.addTracksToPlaylist(playlist.id, trackUris);
  
  console.log(\`Playlist created: \${playlist.external_urls.spotify}\`);
}`
  },
  {
    id: 'stripe-subscription',
    service: 'stripe',
    title: 'Managing Subscriptions',
    description: 'Create and manage customer subscriptions with Stripe.',
    typescript: `import { StripeAPI } from 'macro_api';

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a complete subscription flow
async function createSubscription(email: string, paymentMethodId: string) {
  // Step 1: Create a customer
  const customer = await stripe.createCustomer({
    email,
    payment_method: paymentMethodId,
    invoice_settings: {
      default_payment_method: paymentMethodId
    }
  });
  
  console.log('Customer created:', customer.id);
  
  // Step 2: Create the subscription
  const subscription = await stripe.createSubscription({
    customer: customer.id,
    items: [
      {
        price: 'price_your_price_id' // Your Stripe Price ID
      }
    ],
    default_payment_method: paymentMethodId,
    trial_period_days: 14 // Optional 14-day trial
  });
  
  console.log('Subscription created:', subscription.id);
  return subscription;
}

// Update a subscription
async function updateSubscription(subscriptionId: string) {
  const updatedSubscription = await stripe.updateSubscription(
    subscriptionId,
    {
      cancel_at_period_end: true
    }
  );
  
  console.log('Subscription updated:', updatedSubscription.id);
  return updatedSubscription;
}

// Cancel a subscription immediately
async function cancelSubscription(subscriptionId: string) {
  const canceledSubscription = await stripe.cancelSubscription(
    subscriptionId,
    { prorate: true }
  );
  
  console.log('Subscription canceled:', canceledSubscription.id);
  return canceledSubscription;
}`,
    javascript: `const { StripeAPI } = require('macro_api');

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a complete subscription flow
async function createSubscription(email, paymentMethodId) {
  // Step 1: Create a customer
  const customer = await stripe.createCustomer({
    email,
    payment_method: paymentMethodId,
    invoice_settings: {
      default_payment_method: paymentMethodId
    }
  });
  
  console.log('Customer created:', customer.id);
  
  // Step 2: Create the subscription
  const subscription = await stripe.createSubscription({
    customer: customer.id,
    items: [
      {
        price: 'price_your_price_id' // Your Stripe Price ID
      }
    ],
    default_payment_method: paymentMethodId,
    trial_period_days: 14 // Optional 14-day trial
  });
  
  console.log('Subscription created:', subscription.id);
  return subscription;
}

// Update a subscription
async function updateSubscription(subscriptionId) {
  const updatedSubscription = await stripe.updateSubscription(
    subscriptionId,
    {
      cancel_at_period_end: true
    }
  );
  
  console.log('Subscription updated:', updatedSubscription.id);
  return updatedSubscription;
}

// Cancel a subscription immediately
async function cancelSubscription(subscriptionId) {
  const canceledSubscription = await stripe.cancelSubscription(
    subscriptionId,
    { prorate: true }
  );
  
  console.log('Subscription canceled:', canceledSubscription.id);
  return canceledSubscription;
}`
  },
  {
    id: 'football-leagues',
    service: 'football',
    title: 'Fetching League Data',
    description: 'Get information about football leagues, teams, and standings.',
    typescript: `import { FootballAPI } from 'macro_api';

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get list of leagues for a country and season
async function getLeagues(country: string, season: number) {
  const response = await football.getLeagues({
    country,
    season
  });
  
  console.log(\`Found \${response.response.length} leagues\`);
  return response.response;
}

// Get current league standings
async function getStandings(leagueId: number, season: number) {
  const response = await football.getStandings({
    league: leagueId,
    season
  });
  
  // The response contains standings data for the league
  console.log('League standings:', response.response);
  return response.response;
}

// Get top scorers in a league
async function getTopScorers(leagueId: number, season: number) {
  const response = await football.getTopScorers({
    league: leagueId,
    season
  });
  
  console.log('Top scorers:', response.response);
  return response.response;
}`,
    javascript: `const { FootballAPI } = require('macro_api');

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get list of leagues for a country and season
async function getLeagues(country, season) {
  const response = await football.getLeagues({
    country,
    season
  });
  
  console.log(\`Found \${response.response.length} leagues\`);
  return response.response;
}

// Get current league standings
async function getStandings(leagueId, season) {
  const response = await football.getStandings({
    league: leagueId,
    season
  });
  
  // The response contains standings data for the league
  console.log('League standings:', response.response);
  return response.response;
}

// Get top scorers in a league
async function getTopScorers(leagueId, season) {
  const response = await football.getTopScorers({
    league: leagueId,
    season
  });
  
  console.log('Top scorers:', response.response);
  return response.response;
}`
  }
];

export default codeExamples;