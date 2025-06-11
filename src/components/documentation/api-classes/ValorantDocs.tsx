import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Target, Users, Trophy, Star } from 'lucide-react';

const ValorantDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-red-600 dark:text-red-400">
            <Target className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Valorant API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive Valorant player statistics and match data
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
            Player Stats
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Match History
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Leaderboards
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Game Data
          </span>
        </div>
      </div>

      ## Overview

      The Valorant API wrapper provides access to comprehensive player statistics, match history, and game data through Henrik's Valorant API. 
      Get detailed insights into player performance, rankings, and match analytics for the popular tactical shooter game.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Player Statistics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Detailed player performance and ranking data</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Target className="h-6 w-6 text-red-600 mb-2" />
          <h3 className="font-semibold mb-1">Match History</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Complete match history with detailed analytics</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Trophy className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Leaderboards</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Regional leaderboards and rankings</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Star className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Game Data</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Agents, weapons, maps, and game status information</p>
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
        typescript={`import { Valorant } from 'macro_api';

// Initialize the client (API key optional)
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Get player account information
async function getPlayerAccount() {
  try {
    const account = await valorant.getAccount('PlayerName', 'TAG');
    console.log('Player Account:', account);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPlayerAccount();`}
        javascript={`const { Valorant } = require('macro_api');

// Initialize the client (API key optional)
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Get player account information
async function getPlayerAccount() {
  try {
    const account = await valorant.getAccount('PlayerName', 'TAG');
    console.log('Player Account:', account);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPlayerAccount();`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Optional">
        The Valorant API can be used without an API key, but having one provides higher rate limits and better reliability.
      </InfoBox>

      ### Getting Your API Key (Optional)

      1. Visit [Henrik's Valorant API documentation](https://docs.henrikdev.xyz/valorant.html)
      2. Join their Discord server for API key requests
      3. Follow the process outlined in their documentation
      4. Add the key to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
VALORANT_API_KEY=your-api-key-here

// In your application
import { Valorant } from 'macro_api';

// With API key
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Without API key (limited rate limits)
const valorantPublic = new Valorant();`}
        javascript={`// .env file
VALORANT_API_KEY=your-api-key-here

// In your application
const { Valorant } = require('macro_api');

// With API key
const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Without API key (limited rate limits)
const valorantPublic = new Valorant();`}
        title="Environment setup"
      />

      ## Core Methods

      ### Player Account Information

      <CodeExampleSwitcher
        typescript={`// Get basic account information
async function getAccountInfo() {
  const account = await valorant.getAccount('PlayerName', 'TAG');
  console.log('Account Info:', {
    puuid: account.puuid,
    region: account.region,
    name: account.name,
    tag: account.tag
  });
}`}
        javascript={`// Get basic account information
async function getAccountInfo() {
  const account = await valorant.getAccount('PlayerName', 'TAG');
  console.log('Account Info:', {
    puuid: account.puuid,
    region: account.region,
    name: account.name,
    tag: account.tag
  });
}`}
        title="getAccount() - Get player account details"
      />

      ### Player MMR (Rank Information)

      <CodeExampleSwitcher
        typescript={`// Get player's current MMR and rank
async function getPlayerRank() {
  const mmr = await valorant.getMMR('PlayerName', 'TAG', {
    region: 'na' // Optional: na, eu, ap, kr, latam, br
  });
  
  console.log('Player Rank:', mmr);
  // Returns current tier, rank, MMR, and rank history
}

// Get MMR for different regions
async function getMultiRegionMMR() {
  const regions = ['na', 'eu', 'ap'];
  
  for (const region of regions) {
    try {
      const mmr = await valorant.getMMR('PlayerName', 'TAG', { region });
      console.log(\`\${region.toUpperCase()} MMR:\`, mmr);
    } catch (error) {
      console.log(\`No data for \${region}\`);
    }
  }
}`}
        javascript={`// Get player's current MMR and rank
async function getPlayerRank() {
  const mmr = await valorant.getMMR('PlayerName', 'TAG', {
    region: 'na' // Optional: na, eu, ap, kr, latam, br
  });
  
  console.log('Player Rank:', mmr);
  // Returns current tier, rank, MMR, and rank history
}

// Get MMR for different regions
async function getMultiRegionMMR() {
  const regions = ['na', 'eu', 'ap'];
  
  for (const region of regions) {
    try {
      const mmr = await valorant.getMMR('PlayerName', 'TAG', { region });
      console.log(\`\${region.toUpperCase()} MMR:\`, mmr);
    } catch (error) {
      console.log(\`No data for \${region}\`);
    }
  }
}`}
        title="getMMR() - Get player rank and MMR"
      />

      ### Match History

      <CodeExampleSwitcher
        typescript={`// Get recent match history
async function getRecentMatches() {
  const matches = await valorant.getMatchHistory('na', 'PlayerName', 'TAG', {
    queue: 'competitive', // competitive, unrated, spikerush, deathmatch
    startIndex: 0,
    endIndex: 9 // Get last 10 matches
  });
  
  console.log(\`Found \${matches.length} recent matches\`);
  return matches;
}

// Get matches for specific game modes
async function getMatchesByMode() {
  const gameModes = ['competitive', 'unrated', 'deathmatch'];
  
  for (const mode of gameModes) {
    const matches = await valorant.getMatchHistory('na', 'PlayerName', 'TAG', {
      queue: mode,
      startIndex: 0,
      endIndex: 4 // Last 5 matches per mode
    });
    
    console.log(\`\${mode} matches:\`, matches.length);
  }
}`}
        javascript={`// Get recent match history
async function getRecentMatches() {
  const matches = await valorant.getMatchHistory('na', 'PlayerName', 'TAG', {
    queue: 'competitive', // competitive, unrated, spikerush, deathmatch
    startIndex: 0,
    endIndex: 9 // Get last 10 matches
  });
  
  console.log(\`Found \${matches.length} recent matches\`);
  return matches;
}

// Get matches for specific game modes
async function getMatchesByMode() {
  const gameModes = ['competitive', 'unrated', 'deathmatch'];
  
  for (const mode of gameModes) {
    const matches = await valorant.getMatchHistory('na', 'PlayerName', 'TAG', {
      queue: mode,
      startIndex: 0,
      endIndex: 4 // Last 5 matches per mode
    });
    
    console.log(\`\${mode} matches:\`, matches.length);
  }
}`}
        title="getMatchHistory() - Get match history"
      />

      ### Player Statistics

      <CodeExampleSwitcher
        typescript={`// Get comprehensive player stats
async function getPlayerStats() {
  const stats = await valorant.getPlayerStats('na', 'PlayerName', 'TAG', 'competitive');
  
  console.log('Player Statistics:', {
    overview: stats.overview,
    combat: stats.combat,
    favorites: stats.favorites
  });
}

// Get lifetime statistics
async function getLifetimeStats() {
  const lifetime = await valorant.getLifetimeStats('na', 'PlayerName', 'TAG');
  console.log('Lifetime Stats:', lifetime);
}`}
        javascript={`// Get comprehensive player stats
async function getPlayerStats() {
  const stats = await valorant.getPlayerStats('na', 'PlayerName', 'TAG', 'competitive');
  
  console.log('Player Statistics:', {
    overview: stats.overview,
    combat: stats.combat,
    favorites: stats.favorites
  });
}

// Get lifetime statistics
async function getLifetimeStats() {
  const lifetime = await valorant.getLifetimeStats('na', 'PlayerName', 'TAG');
  console.log('Lifetime Stats:', lifetime);
}`}
        title="getPlayerStats() - Comprehensive player statistics"
      />

      ### Match Details

      <CodeExampleSwitcher
        typescript={`// Get detailed information about a specific match
async function getMatchDetails(matchId: string) {
  const match = await valorant.getMatch(matchId);
  
  console.log('Match Details:', {
    map: match.metadata?.map,
    mode: match.metadata?.mode,
    duration: match.metadata?.game_length,
    rounds: match.metadata?.rounds_played
  });
  
  // Analyze player performance in the match
  const players = match.players?.all_players || [];
  players.forEach((player: any) => {
    console.log(\`\${player.name}: \${player.stats?.kills}K/\${player.stats?.deaths}D/\${player.stats?.assists}A\`);
  });
}`}
        javascript={`// Get detailed information about a specific match
async function getMatchDetails(matchId) {
  const match = await valorant.getMatch(matchId);
  
  console.log('Match Details:', {
    map: match.metadata?.map,
    mode: match.metadata?.mode,
    duration: match.metadata?.game_length,
    rounds: match.metadata?.rounds_played
  });
  
  // Analyze player performance in the match
  const players = match.players?.all_players || [];
  players.forEach((player) => {
    console.log(\`\${player.name}: \${player.stats?.kills}K/\${player.stats?.deaths}D/\${player.stats?.assists}A\`);
  });
}`}
        title="getMatch() - Detailed match information"
      />

      ### Leaderboards

      <CodeExampleSwitcher
        typescript={`// Get regional leaderboard
async function getLeaderboard() {
  const leaderboard = await valorant.getLeaderboard({
    region: 'na',
    size: 50, // Top 50 players
    startIndex: 0
  });
  
  console.log('Top Players:');
  leaderboard.forEach((player: any, index: number) => {
    console.log(\`\${index + 1}. \${player.gameName}#\${player.tagLine} - \${player.rankedRating} RR\`);
  });
}

// Get leaderboard for different regions
async function getMultiRegionLeaderboards() {
  const regions = ['na', 'eu', 'ap', 'kr'] as const;
  
  for (const region of regions) {
    console.log(\`\\n=== \${region.toUpperCase()} Leaderboard ===\`);
    const leaderboard = await valorant.getLeaderboard({
      region,
      size: 10
    });
    
    leaderboard.slice(0, 5).forEach((player: any, index: number) => {
      console.log(\`\${index + 1}. \${player.gameName}#\${player.tagLine}\`);
    });
  }
}`}
        javascript={`// Get regional leaderboard
async function getLeaderboard() {
  const leaderboard = await valorant.getLeaderboard({
    region: 'na',
    size: 50, // Top 50 players
    startIndex: 0
  });
  
  console.log('Top Players:');
  leaderboard.forEach((player, index) => {
    console.log(\`\${index + 1}. \${player.gameName}#\${player.tagLine} - \${player.rankedRating} RR\`);
  });
}

// Get leaderboard for different regions
async function getMultiRegionLeaderboards() {
  const regions = ['na', 'eu', 'ap', 'kr'];
  
  for (const region of regions) {
    console.log(\`\\n=== \${region.toUpperCase()} Leaderboard ===\`);
    const leaderboard = await valorant.getLeaderboard({
      region,
      size: 10
    });
    
    leaderboard.slice(0, 5).forEach((player, index) => {
      console.log(\`\${index + 1}. \${player.gameName}#\${player.tagLine}\`);
    });
  }
}`}
        title="getLeaderboard() - Regional leaderboards"
      />

      ### Game Data

      <CodeExampleSwitcher
        typescript={`// Get all agents information
async function getAgents() {
  const agents = await valorant.getAgents('en-US');
  
  console.log('Available Agents:');
  agents.forEach((agent: any) => {
    console.log(\`- \${agent.displayName} (\${agent.role?.displayName})\`);
  });
}

// Get weapons data
async function getWeapons() {
  const weapons = await valorant.getWeapons('en-US');
  
  console.log('Available Weapons:');
  weapons.forEach((weapon: any) => {
    console.log(\`- \${weapon.displayName} (\${weapon.category})\`);
  });
}

// Get maps information
async function getMaps() {
  const maps = await valorant.getMaps('en-US');
  
  console.log('Available Maps:');
  maps.forEach((map: any) => {
    console.log(\`- \${map.displayName}\`);
  });
}

// Check Valorant server status
async function checkServerStatus() {
  const status = await valorant.getStatus('na');
  
  console.log('Valorant Status:', {
    region: 'North America',
    status: status.status,
    incidents: status.incidents?.length || 0,
    maintenances: status.maintenances?.length || 0
  });
}`}
        javascript={`// Get all agents information
async function getAgents() {
  const agents = await valorant.getAgents('en-US');
  
  console.log('Available Agents:');
  agents.forEach((agent) => {
    console.log(\`- \${agent.displayName} (\${agent.role?.displayName})\`);
  });
}

// Get weapons data
async function getWeapons() {
  const weapons = await valorant.getWeapons('en-US');
  
  console.log('Available Weapons:');
  weapons.forEach((weapon) => {
    console.log(\`- \${weapon.displayName} (\${weapon.category})\`);
  });
}

// Get maps information
async function getMaps() {
  const maps = await valorant.getMaps('en-US');
  
  console.log('Available Maps:');
  maps.forEach((map) => {
    console.log(\`- \${map.displayName}\`);
  });
}

// Check Valorant server status
async function checkServerStatus() {
  const status = await valorant.getStatus('na');
  
  console.log('Valorant Status:', {
    region: 'North America',
    status: status.status,
    incidents: status.incidents?.length || 0,
    maintenances: status.maintenances?.length || 0
  });
}`}
        title="Game data and server status"
      />

      ## Advanced Usage

      ### Complete Player Analysis

      <CodeExampleSwitcher
        typescript={`import { Valorant } from 'macro_api';

const valorant = new Valorant(process.env.VALORANT_API_KEY);

async function completePlayerAnalysis(playerName: string, playerTag: string) {
  try {
    console.log(\`Analyzing player: \${playerName}#\${playerTag}\`);
    
    // 1. Get account information
    const account = await valorant.getAccount(playerName, playerTag);
    console.log('Account found:', account.name, account.region);
    
    // 2. Get current rank
    const mmr = await valorant.getMMR(playerName, playerTag, { region: 'na' });
    console.log('Current Rank:', mmr);
    
    // 3. Get recent competitive matches
    const matches = await valorant.getMatchHistory('na', playerName, playerTag, {
      queue: 'competitive',
      startIndex: 0,
      endIndex: 19 // Last 20 matches
    });
    
    // 4. Calculate performance metrics
    const stats = await valorant.getPlayerStats('na', playerName, playerTag, 'competitive');
    
    // 5. Detailed analysis
    console.log('=== PLAYER ANALYSIS REPORT ===');
    console.log(\`Player: \${account.name}#\${account.tag}\`);
    console.log(\`Region: \${account.region}\`);
    console.log(\`Recent Matches: \${matches.length}\`);
    
    if (stats.overview) {
      console.log('\\nOverview:');
      console.log(\`- Matches Played: \${stats.overview.matches}\`);
      console.log(\`- Win Rate: \${stats.overview.winRate}\`);
      console.log(\`- Wins: \${stats.overview.wins}\`);
      console.log(\`- Losses: \${stats.overview.losses}\`);
    }
    
    if (stats.combat) {
      console.log('\\nCombat Stats:');
      console.log(\`- K/D Ratio: \${stats.combat.kd}\`);
      console.log(\`- Total Kills: \${stats.combat.kills}\`);
      console.log(\`- Total Deaths: \${stats.combat.deaths}\`);
      console.log(\`- Total Assists: \${stats.combat.assists}\`);
      console.log(\`- Headshot %: \${stats.combat.headshotPercentage}\`);
    }
    
    if (stats.favorites?.agents?.length > 0) {
      console.log('\\nFavorite Agents:');
      stats.favorites.agents.slice(0, 3).forEach((agent: any, index: number) => {
        console.log(\`\${index + 1}. \${agent.agent} (\${agent.count} matches)\`);
      });
    }
    
    if (stats.favorites?.maps?.length > 0) {
      console.log('\\nMost Played Maps:');
      stats.favorites.maps.slice(0, 3).forEach((map: any, index: number) => {
        console.log(\`\${index + 1}. \${map.map} (\${map.count} times)\`);
      });
    }
    
    return {
      account,
      mmr,
      matches,
      stats
    };
    
  } catch (error) {
    console.error('Analysis failed:', error);
    throw error;
  }
}

// Usage
completePlayerAnalysis('PlayerName', 'TAG')
  .then(analysis => {
    console.log('Analysis complete!');
  })
  .catch(error => {
    console.error('Failed to analyze player:', error);
  });`}
        javascript={`const { Valorant } = require('macro_api');

const valorant = new Valorant(process.env.VALORANT_API_KEY);

async function completePlayerAnalysis(playerName, playerTag) {
  try {
    console.log(\`Analyzing player: \${playerName}#\${playerTag}\`);
    
    // 1. Get account information
    const account = await valorant.getAccount(playerName, playerTag);
    console.log('Account found:', account.name, account.region);
    
    // 2. Get current rank
    const mmr = await valorant.getMMR(playerName, playerTag, { region: 'na' });
    console.log('Current Rank:', mmr);
    
    // 3. Get recent competitive matches
    const matches = await valorant.getMatchHistory('na', playerName, playerTag, {
      queue: 'competitive',
      startIndex: 0,
      endIndex: 19 // Last 20 matches
    });
    
    // 4. Calculate performance metrics
    const stats = await valorant.getPlayerStats('na', playerName, playerTag, 'competitive');
    
    // 5. Generate report
    console.log('=== PLAYER ANALYSIS REPORT ===');
    console.log(\`Player: \${account.name}#\${account.tag}\`);
    console.log(\`Win Rate: \${stats.overview?.winRate}\`);
    console.log(\`K/D Ratio: \${stats.combat?.kd}\`);
    
    return { account, mmr, matches, stats };
    
  } catch (error) {
    console.error('Analysis failed:', error);
    throw error;
  }
}

// Usage
completePlayerAnalysis('PlayerName', 'TAG')
  .then(analysis => console.log('Analysis complete!'))
  .catch(error => console.error('Failed:', error));`}
        title="Complete player analysis example"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        Be aware of rate limits when making multiple requests. The API has different limits for authenticated vs. unauthenticated requests.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { Valorant } from 'macro_api';

const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Robust error handling
async function safeApiCall() {
  try {
    const account = await valorant.getAccount('PlayerName', 'TAG');
    return account;
  } catch (error) {
    if (error instanceof Error) {
      // Handle different error scenarios
      if (error.message.includes('404')) {
        console.error('Player not found. Check the name and tag.');
        return null;
      } else if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement retry logic with delay
        await new Promise(resolve => setTimeout(resolve, 5000));
        return await valorant.getAccount('PlayerName', 'TAG');
      } else if (error.message.includes('403')) {
        console.error('Access forbidden. Check your API key.');
        throw new Error('Authentication failed');
      } else {
        console.error('API Error:', error.message);
      }
    }
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff<T>(
  apiCall: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
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
async function robustPlayerLookup() {
  try {
    const account = await retryWithBackoff(
      () => valorant.getAccount('PlayerName', 'TAG')
    );
    
    if (account) {
      console.log('Player found:', account);
      return account;
    } else {
      console.log('Player not found');
      return null;
    }
  } catch (error) {
    console.error('Failed to lookup player after retries:', error);
    return null;
  }
}`}
        javascript={`const { Valorant } = require('macro_api');

const valorant = new Valorant(process.env.VALORANT_API_KEY);

// Error handling for common scenarios
async function safeApiCall() {
  try {
    const account = await valorant.getAccount('PlayerName', 'TAG');
    return account;
  } catch (error) {
    if (error.message.includes('404')) {
      console.error('Player not found');
      return null;
    } else if (error.message.includes('429')) {
      console.error('Rate limit exceeded');
      await new Promise(resolve => setTimeout(resolve, 5000));
      return await valorant.getAccount('PlayerName', 'TAG');
    } else {
      console.error('API Error:', error.message);
    }
    throw error;
  }
}

// Simple retry function
async function retryApiCall(apiCall, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}`}
        title="Robust error handling"
      />

      ## Regional Information

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Supported Regions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Americas</h4>
              <ul className="space-y-1">
                <li><code>na</code> - North America</li>
                <li><code>latam</code> - Latin America</li>
                <li><code>br</code> - Brazil</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Asia-Pacific & Europe</h4>
              <ul className="space-y-1">
                <li><code>eu</code> - Europe</li>
                <li><code>ap</code> - Asia-Pacific</li>
                <li><code>kr</code> - Korea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Game Modes

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Supported Game Modes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Ranked Modes</h4>
              <ul className="space-y-1">
                <li><code>competitive</code> - Ranked matches</li>
                <li><code>unrated</code> - Unranked matches</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Casual Modes</h4>
              <ul className="space-y-1">
                <li><code>spikerush</code> - Spike Rush</li>
                <li><code>deathmatch</code> - Deathmatch</li>
                <li><code>escalation</code> - Escalation</li>
                <li><code>replication</code> - Replication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Cache player account data to avoid repeated lookups
        - Use appropriate batch sizes when fetching match history
        - Implement proper rate limiting in your application
        - Handle offline players gracefully
      </InfoBox>

      ### Efficient Data Fetching

      <CodeExampleSwitcher
        typescript={`// Efficient batch processing
class ValorantAnalyzer {
  private cache = new Map<string, any>();
  private lastRequest = 0;
  private readonly RATE_LIMIT_DELAY = 1000; // 1 second between requests

  async getPlayerWithCache(name: string, tag: string) {
    const key = \`\${name}#\${tag}\`;
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    // Rate limiting
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequest;
    if (timeSinceLastRequest < this.RATE_LIMIT_DELAY) {
      await new Promise(resolve => 
        setTimeout(resolve, this.RATE_LIMIT_DELAY - timeSinceLastRequest)
      );
    }
    
    try {
      const account = await valorant.getAccount(name, tag);
      this.cache.set(key, account);
      this.lastRequest = Date.now();
      return account;
    } catch (error) {
      console.error(\`Failed to fetch \${key}:\`, error);
      return null;
    }
  }

  async analyzeMultiplePlayers(players: Array<{name: string, tag: string}>) {
    const results = [];
    
    for (const player of players) {
      const account = await this.getPlayerWithCache(player.name, player.tag);
      if (account) {
        results.push(account);
      }
    }
    
    return results;
  }
}

// Usage
const analyzer = new ValorantAnalyzer();
const players = [
  { name: 'Player1', tag: 'TAG1' },
  { name: 'Player2', tag: 'TAG2' },
  { name: 'Player3', tag: 'TAG3' }
];

analyzer.analyzeMultiplePlayers(players)
  .then(results => console.log('Analyzed players:', results.length));`}
        javascript={`// Simple caching and rate limiting
class ValorantAnalyzer {
  constructor() {
    this.cache = new Map();
    this.lastRequest = 0;
    this.RATE_LIMIT_DELAY = 1000; // 1 second
  }

  async getPlayerWithCache(name, tag) {
    const key = \`\${name}#\${tag}\`;
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    // Rate limiting
    const now = Date.now();
    const delay = this.RATE_LIMIT_DELAY - (now - this.lastRequest);
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    try {
      const account = await valorant.getAccount(name, tag);
      this.cache.set(key, account);
      this.lastRequest = Date.now();
      return account;
    } catch (error) {
      console.error('Failed to fetch player:', error);
      return null;
    }
  }
}

const analyzer = new ValorantAnalyzer();`}
        title="Efficient data fetching with caching"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit [Henrik's Valorant API Documentation](https://docs.henrikdev.xyz/valorant.html).

      ### Rate Limits

      Rate limits depend on whether you have an API key:
      - **Without API key**: Limited requests per minute
      - **With API key**: Higher rate limits and priority access

      ### Data Accuracy

      - Player data is updated in real-time
      - Match history may have a slight delay after matches end
      - Leaderboards are updated regularly throughout the day

      ### Support

      - [Henrik's Valorant API Documentation](https://docs.henrikdev.xyz/valorant.html)
      - [Discord Server](https://discord.gg/X3GaVkX2YN) for API support
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues) for macro_api wrapper issues
    </div>
  );
};

export default ValorantDocs;