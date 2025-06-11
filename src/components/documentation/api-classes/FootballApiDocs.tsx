import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Trophy, Calendar } from 'lucide-react';

const FootballApiDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-green-600 dark:text-green-400">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Football API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive football data from leagues worldwide
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Live Scores
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Player Stats
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Team Data
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Standings
          </span>
        </div>
      </div>

      ## Overview

      The Football API wrapper provides access to comprehensive football data from the API-Football service via RapidAPI. 
      Get live scores, detailed statistics, player information, team data, and much more from football leagues around the world.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Calendar className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Live Fixtures</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Real-time match data and live scores</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Player Statistics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Detailed player performance data</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Team Information</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Complete team profiles and statistics</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Trophy className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">League Standings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Current league tables and positions</p>
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
        typescript={`import { FootballAPI } from 'macro_api';

// Initialize the client
const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get today's fixtures
async function getTodayMatches() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const fixtures = await football.getFixtures({ date: today });
    console.log('Today matches:', fixtures);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        javascript={`const { FootballAPI } = require('macro_api');

// Initialize the client
const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Get today's fixtures
async function getTodayMatches() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const fixtures = await football.getFixtures({ date: today });
    console.log('Today matches:', fixtures);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a valid API key from RapidAPI to use the Football API service.
      </InfoBox>

      ### Getting Your API Key

      1. Visit [API-Football on RapidAPI](https://rapidapi.com/api-sports/api/api-football)
      2. Sign up or log in to your RapidAPI account
      3. Subscribe to the API-Football service (free tier available)
      4. Copy your API key from the request headers section
      5. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
FOOTBALL_API_KEY=your_rapidapi_key_here

// In your application
import { FootballAPI } from 'macro_api';

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});`}
        javascript={`// .env file
FOOTBALL_API_KEY=your_rapidapi_key_here

// In your application
const { FootballAPI } = require('macro_api');

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never hardcode your API key in your source code. Always use environment variables or a secure configuration management system.
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">apiKey</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your RapidAPI key for API-Football</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Status & Health Check

      <CodeExampleSwitcher
        typescript={`// Check API status and usage
async function checkApiStatus() {
  const status = await football.getStatus();
  console.log('API Status:', status);
  
  // Response includes:
  // - Current subscription tier
  // - Requests made today
  // - Requests remaining
  // - Rate limit information
}`}
        javascript={`// Check API status and usage
async function checkApiStatus() {
  const status = await football.getStatus();
  console.log('API Status:', status);
  
  // Response includes:
  // - Current subscription tier
  // - Requests made today
  // - Requests remaining
  // - Rate limit information
}`}
        title="getStatus() - Monitor API usage"
      />

      ### Countries & Leagues

      <CodeExampleSwitcher
        typescript={`// Get available countries
async function getCountries() {
  const countries = await football.getCountries();
  console.log('Available countries:', countries);
}

// Get leagues for a specific country
async function getLeagues() {
  const leagues = await football.getLeagues({
    country: 'England',
    season: 2023
  });
  console.log('English leagues:', leagues);
}

// Get all available seasons
async function getSeasons() {
  const seasons = await football.getSeasons();
  console.log('Available seasons:', seasons);
}`}
        javascript={`// Get available countries
async function getCountries() {
  const countries = await football.getCountries();
  console.log('Available countries:', countries);
}

// Get leagues for a specific country
async function getLeagues() {
  const leagues = await football.getLeagues({
    country: 'England',
    season: 2023
  });
  console.log('English leagues:', leagues);
}

// Get all available seasons
async function getSeasons() {
  const seasons = await football.getSeasons();
  console.log('Available seasons:', seasons);
}`}
        title="Countries and leagues data"
      />

      ### Team Information

      <CodeExampleSwitcher
        typescript={`// Get teams in a league
async function getTeams() {
  const teams = await football.getTeams({
    league: 39, // Premier League ID
    season: 2023
  });
  console.log('Premier League teams:', teams);
}

// Get detailed team statistics
async function getTeamStats() {
  const stats = await football.getTeamStatistics({
    league: 39,
    team: 33, // Manchester United ID
    season: 2023
  });
  console.log('Manchester United stats:', stats);
}

// Search for specific teams
async function searchTeam() {
  const teams = await football.getTeams({
    search: 'Manchester'
  });
  console.log('Teams matching "Manchester":', teams);
}

// Get team's seasons history
async function getTeamSeasons() {
  const seasons = await football.getTeamSeasons(33); // Manchester United
  console.log('Team seasons:', seasons);
}`}
        javascript={`// Get teams in a league
async function getTeams() {
  const teams = await football.getTeams({
    league: 39, // Premier League ID
    season: 2023
  });
  console.log('Premier League teams:', teams);
}

// Get detailed team statistics
async function getTeamStats() {
  const stats = await football.getTeamStatistics({
    league: 39,
    team: 33, // Manchester United ID
    season: 2023
  });
  console.log('Manchester United stats:', stats);
}

// Search for specific teams
async function searchTeam() {
  const teams = await football.getTeams({
    search: 'Manchester'
  });
  console.log('Teams matching "Manchester":', teams);
}

// Get team's seasons history
async function getTeamSeasons() {
  const seasons = await football.getTeamSeasons(33); // Manchester United
  console.log('Team seasons:', seasons);
}`}
        title="Team data and statistics"
      />

      ### Fixtures & Matches

      <CodeExampleSwitcher
        typescript={`// Get fixtures by date
async function getFixturesByDate() {
  const today = new Date().toISOString().split('T')[0];
  const fixtures = await football.getFixtures({
    date: today
  });
  console.log('Today fixtures:', fixtures);
}

// Get fixtures for a specific league
async function getLeagueFixtures() {
  const fixtures = await football.getFixtures({
    league: 39, // Premier League
    season: 2023,
    from: '2023-08-01',
    to: '2023-08-31'
  });
  console.log('August fixtures:', fixtures);
}

// Get live fixtures
async function getLiveFixtures() {
  const liveFixtures = await football.getFixtures({
    live: 'all'
  });
  console.log('Live matches:', liveFixtures);
}

// Get detailed fixture information
async function getFixtureDetails(fixtureId: number) {
  // Basic fixture info
  const fixture = await football.getFixtures({ id: fixtureId });
  
  // Match statistics
  const stats = await football.getFixtureStatistics(fixtureId);
  
  // Match events (goals, cards, etc.)
  const events = await football.getFixtureEvents(fixtureId);
  
  // Team lineups
  const lineups = await football.getFixtureLineups(fixtureId);
  
  console.log('Fixture:', fixture);
  console.log('Statistics:', stats);
  console.log('Events:', events);
  console.log('Lineups:', lineups);
}

// Get head-to-head record
async function getHeadToHead() {
  const h2h = await football.getHeadToHead({
    h2h: '33-34', // Manchester United vs Manchester City
    last: 10 // Last 10 meetings
  });
  console.log('Head-to-head record:', h2h);
}`}
        javascript={`// Get fixtures by date
async function getFixturesByDate() {
  const today = new Date().toISOString().split('T')[0];
  const fixtures = await football.getFixtures({
    date: today
  });
  console.log('Today fixtures:', fixtures);
}

// Get fixtures for a specific league
async function getLeagueFixtures() {
  const fixtures = await football.getFixtures({
    league: 39, // Premier League
    season: 2023,
    from: '2023-08-01',
    to: '2023-08-31'
  });
  console.log('August fixtures:', fixtures);
}

// Get live fixtures
async function getLiveFixtures() {
  const liveFixtures = await football.getFixtures({
    live: 'all'
  });
  console.log('Live matches:', liveFixtures);
}

// Get detailed fixture information
async function getFixtureDetails(fixtureId) {
  // Basic fixture info
  const fixture = await football.getFixtures({ id: fixtureId });
  
  // Match statistics
  const stats = await football.getFixtureStatistics(fixtureId);
  
  // Match events (goals, cards, etc.)
  const events = await football.getFixtureEvents(fixtureId);
  
  // Team lineups
  const lineups = await football.getFixtureLineups(fixtureId);
  
  console.log('Fixture:', fixture);
  console.log('Statistics:', stats);
  console.log('Events:', events);
  console.log('Lineups:', lineups);
}

// Get head-to-head record
async function getHeadToHead() {
  const h2h = await football.getHeadToHead({
    h2h: '33-34', // Manchester United vs Manchester City
    last: 10 // Last 10 meetings
  });
  console.log('Head-to-head record:', h2h);
}`}
        title="Fixtures and match data"
      />

      ### Player Statistics

      <CodeExampleSwitcher
        typescript={`// Get players for a team
async function getTeamPlayers() {
  const players = await football.getPlayers({
    team: 33, // Manchester United
    season: 2023
  });
  console.log('Team players:', players);
}

// Get top scorers in a league
async function getTopScorers() {
  const scorers = await football.getTopScorers({
    league: 39, // Premier League
    season: 2023
  });
  console.log('Top scorers:', scorers);
}

// Get top assists providers
async function getTopAssists() {
  const assists = await football.getTopAssists({
    league: 39,
    season: 2023
  });
  console.log('Top assists:', assists);
}

// Get disciplinary statistics
async function getDisciplinaryStats() {
  const yellowCards = await football.getTopYellowCards({
    league: 39,
    season: 2023
  });
  
  const redCards = await football.getTopRedCards({
    league: 39,
    season: 2023
  });
  
  console.log('Most yellow cards:', yellowCards);
  console.log('Most red cards:', redCards);
}

// Get available player seasons
async function getPlayerSeasons() {
  const seasons = await football.getPlayerSeasons();
  console.log('Available player seasons:', seasons);
}`}
        javascript={`// Get players for a team
async function getTeamPlayers() {
  const players = await football.getPlayers({
    team: 33, // Manchester United
    season: 2023
  });
  console.log('Team players:', players);
}

// Get top scorers in a league
async function getTopScorers() {
  const scorers = await football.getTopScorers({
    league: 39, // Premier League
    season: 2023
  });
  console.log('Top scorers:', scorers);
}

// Get top assists providers
async function getTopAssists() {
  const assists = await football.getTopAssists({
    league: 39,
    season: 2023
  });
  console.log('Top assists:', assists);
}

// Get disciplinary statistics
async function getDisciplinaryStats() {
  const yellowCards = await football.getTopYellowCards({
    league: 39,
    season: 2023
  });
  
  const redCards = await football.getTopRedCards({
    league: 39,
    season: 2023
  });
  
  console.log('Most yellow cards:', yellowCards);
  console.log('Most red cards:', redCards);
}

// Get available player seasons
async function getPlayerSeasons() {
  const seasons = await football.getPlayerSeasons();
  console.log('Available player seasons:', seasons);
}`}
        title="Player statistics and rankings"
      />

      ### League Standings

      <CodeExampleSwitcher
        typescript={`// Get current league standings
async function getStandings() {
  const standings = await football.getStandings({
    league: 39, // Premier League
    season: 2023
  });
  console.log('League standings:', standings);
}

// Get standings for a specific team
async function getTeamStanding() {
  const standings = await football.getStandings({
    league: 39,
    season: 2023,
    team: 33 // Manchester United only
  });
  console.log('Team position:', standings);
}`}
        javascript={`// Get current league standings
async function getStandings() {
  const standings = await football.getStandings({
    league: 39, // Premier League
    season: 2023
  });
  console.log('League standings:', standings);
}

// Get standings for a specific team
async function getTeamStanding() {
  const standings = await football.getStandings({
    league: 39,
    season: 2023,
    team: 33 // Manchester United only
  });
  console.log('Team position:', standings);
}`}
        title="League tables and positions"
      />

      ### Advanced Features

      <CodeExampleSwitcher
        typescript={`// Get match predictions
async function getPredictions(fixtureId: number) {
  const predictions = await football.getPredictions(fixtureId);
  console.log('Match predictions:', predictions);
}

// Get betting odds
async function getOdds() {
  const odds = await football.getOdds({
    fixture: 868847, // Specific fixture
    bookmaker: 6 // Specific bookmaker
  });
  console.log('Betting odds:', odds);
}

// Get player transfers
async function getTransfers() {
  const transfers = await football.getTransfers({
    player: 276 // Specific player
  });
  console.log('Player transfers:', transfers);
}

// Get player trophies
async function getPlayerTrophies() {
  const trophies = await football.getPlayerTrophies(276); // Cristiano Ronaldo
  console.log('Player trophies:', trophies);
}

// Get venues information
async function getVenues() {
  const venues = await football.getVenues({
    country: 'England'
  });
  console.log('Venues:', venues);
}

// Get injury reports
async function getInjuries() {
  const injuries = await football.getInjuries({
    league: 39,
    season: 2023
  });
  console.log('Injury reports:', injuries);
}`}
        javascript={`// Get match predictions
async function getPredictions(fixtureId) {
  const predictions = await football.getPredictions(fixtureId);
  console.log('Match predictions:', predictions);
}

// Get betting odds
async function getOdds() {
  const odds = await football.getOdds({
    fixture: 868847, // Specific fixture
    bookmaker: 6 // Specific bookmaker
  });
  console.log('Betting odds:', odds);
}

// Get player transfers
async function getTransfers() {
  const transfers = await football.getTransfers({
    player: 276 // Specific player
  });
  console.log('Player transfers:', transfers);
}

// Get player trophies
async function getPlayerTrophies() {
  const trophies = await football.getPlayerTrophies(276); // Cristiano Ronaldo
  console.log('Player trophies:', trophies);
}

// Get venues information
async function getVenues() {
  const venues = await football.getVenues({
    country: 'England'
  });
  console.log('Venues:', venues);
}

// Get injury reports
async function getInjuries() {
  const injuries = await football.getInjuries({
    league: 39,
    season: 2023
  });
  console.log('Injury reports:', injuries);
}`}
        title="Predictions, odds, transfers, and more"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        The Football API has rate limits based on your subscription tier. Implement proper error handling to manage rate limit responses gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { FootballAPI } from 'macro_api';

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Comprehensive error handling
async function safeApiCall() {
  try {
    const leagues = await football.getLeagues({
      country: 'England',
      season: 2023
    });
    
    return leagues;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement retry logic with exponential backoff
        return await retryWithBackoff(() => football.getLeagues({
          country: 'England',
          season: 2023
        }));
      } else if (error.message.includes('401')) {
        console.error('Invalid API key. Please check your credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('404')) {
        console.error('Resource not found. Check your parameters.');
        return null;
      } else {
        console.error('API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(
  apiCall: () => Promise<any>,
  maxRetries = 3,
  baseDelay = 1000
) {
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
}

// Usage with error handling
async function robustDataFetching() {
  try {
    const [leagues, teams, fixtures] = await Promise.allSettled([
      safeApiCall(),
      football.getTeams({ league: 39, season: 2023 }),
      football.getFixtures({ date: new Date().toISOString().split('T')[0] })
    ]);
    
    console.log('Results:', { leagues, teams, fixtures });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}`}
        javascript={`const { FootballAPI } = require('macro_api');

const football = new FootballAPI({
  apiKey: process.env.FOOTBALL_API_KEY
});

// Comprehensive error handling
async function safeApiCall() {
  try {
    const leagues = await football.getLeagues({
      country: 'England',
      season: 2023
    });
    
    return leagues;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement retry logic with exponential backoff
        return await retryWithBackoff(() => football.getLeagues({
          country: 'England',
          season: 2023
        }));
      } else if (error.message.includes('401')) {
        console.error('Invalid API key. Please check your credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('404')) {
        console.error('Resource not found. Check your parameters.');
        return null;
      } else {
        console.error('API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(
  apiCall,
  maxRetries = 3,
  baseDelay = 1000
) {
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
}

// Usage with error handling
async function robustDataFetching() {
  try {
    const [leagues, teams, fixtures] = await Promise.allSettled([
      safeApiCall(),
      football.getTeams({ league: 39, season: 2023 }),
      football.getFixtures({ date: new Date().toISOString().split('T')[0] })
    ]);
    
    console.log('Results:', { leagues, teams, fixtures });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}`}
        title="Robust error handling and retry logic"
      />

      ## Common League IDs

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Popular League IDs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">European Leagues</h4>
              <ul className="space-y-1">
                <li><code>39</code> - Premier League (England)</li>
                <li><code>140</code> - La Liga (Spain)</li>
                <li><code>78</code> - Bundesliga (Germany)</li>
                <li><code>135</code> - Serie A (Italy)</li>
                <li><code>61</code> - Ligue 1 (France)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">International</h4>
              <ul className="space-y-1">
                <li><code>2</code> - UEFA Champions League</li>
                <li><code>3</code> - UEFA Europa League</li>
                <li><code>1</code> - World Cup</li>
                <li><code>4</code> - European Championship</li>
                <li><code>9</code> - Copa America</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Cache frequently accessed data like team IDs and league information
        - Use specific parameters to reduce response size
        - Implement proper error handling for rate limits
        - Monitor your API usage to avoid hitting limits
      </InfoBox>

      ### Caching Example

      <CodeExampleSwitcher
        typescript={`// Simple in-memory cache
class FootballCache {
  private cache = new Map<string, any>();
  private ttl = new Map<string, number>();
  
  set(key: string, value: any, expireMinutes = 30) {
    this.cache.set(key, value);
    this.ttl.set(key, Date.now() + expireMinutes * 60 * 1000);
  }
  
  get(key: string) {
    const expiry = this.ttl.get(key);
    if (expiry && Date.now() > expiry) {
      this.cache.delete(key);
      this.ttl.delete(key);
      return null;
    }
    return this.cache.get(key) || null;
  }
}

const cache = new FootballCache();

// Cached API calls
async function getCachedLeagues(country: string, season: number) {
  const cacheKey = \`leagues-\${country}-\${season}\`;
  
  let leagues = cache.get(cacheKey);
  if (!leagues) {
    leagues = await football.getLeagues({ country, season });
    cache.set(cacheKey, leagues, 60); // Cache for 1 hour
  }
  
  return leagues;
}`}
        javascript={`// Simple in-memory cache
class FootballCache {
  constructor() {
    this.cache = new Map();
    this.ttl = new Map();
  }
  
  set(key, value, expireMinutes = 30) {
    this.cache.set(key, value);
    this.ttl.set(key, Date.now() + expireMinutes * 60 * 1000);
  }
  
  get(key) {
    const expiry = this.ttl.get(key);
    if (expiry && Date.now() > expiry) {
      this.cache.delete(key);
      this.ttl.delete(key);
      return null;
    }
    return this.cache.get(key) || null;
  }
}

const cache = new FootballCache();

// Cached API calls
async function getCachedLeagues(country, season) {
  const cacheKey = \`leagues-\${country}-\${season}\`;
  
  let leagues = cache.get(cacheKey);
  if (!leagues) {
    leagues = await football.getLeagues({ country, season });
    cache.set(cacheKey, leagues, 60); // Cache for 1 hour
  }
  
  return leagues;
}`}
        title="Simple caching implementation"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit the [official API-Football documentation](https://www.api-football.com/documentation-v3).

      ### Rate Limits

      Rate limits vary by subscription tier:
      - **Free**: 100 requests per day
      - **Basic**: 1,000 requests per day
      - **Pro**: 10,000 requests per day
      - **Ultra**: 100,000 requests per day

      ### Support

      - [API-Football Documentation](https://www.api-football.com/documentation-v3)
      - [RapidAPI Support](https://rapidapi.com/api-sports/api/api-football)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default FootballApiDocs;