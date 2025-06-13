import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Target, Users, Trophy, Star, Play, Search, User, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, CheckCircle, ExternalLink } from 'lucide-react';

const ValorantDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
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

  const basicSetupCode = `import { Valorant } from 'macro_api';

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

getPlayerAccount();`;

  const playerStatsCode = `// Get player's current MMR and rank
async function getPlayerRank() {
  const mmr = await valorant.getMMR('PlayerName', 'TAG', {
    region: 'na' // Optional: na, eu, ap, kr, latam, br
  });
  
  console.log('Player Rank:', mmr);
  // Returns current tier, rank, MMR, and rank history
}

// Get recent match history
async function getRecentMatches() {
  const matches = await valorant.getMatchHistory('na', 'PlayerName', 'TAG', {
    queue: 'competitive', // competitive, unrated, spikerush, deathmatch
    startIndex: 0,
    endIndex: 9 // Get last 10 matches
  });
  
  console.log(\`Found \${matches.length} recent matches\`);
  return matches;
}`;

  const leaderboardCode = `// Get regional leaderboard
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
}`;

  const features = [
    {
      name: 'Player Statistics',
      description: 'Detailed player performance and ranking data',
      icon: <Users className="h-4 w-4" />
    },
    {
      name: 'Match History',
      description: 'Complete match history with detailed analytics',
      icon: <Target className="h-4 w-4" />
    },
    {
      name: 'Leaderboards',
      description: 'Regional leaderboards and rankings',
      icon: <Trophy className="h-4 w-4" />
    },
    {
      name: 'Game Data',
      description: 'Agents, weapons, maps, and game status information',
      icon: <Star className="h-4 w-4" />
    }
  ];

  const regions = [
    { code: 'na', name: 'North America', category: 'Americas' },
    { code: 'latam', name: 'Latin America', category: 'Americas' },
    { code: 'br', name: 'Brazil', category: 'Americas' },
    { code: 'eu', name: 'Europe', category: 'Asia-Pacific & Europe' },
    { code: 'ap', name: 'Asia-Pacific', category: 'Asia-Pacific & Europe' },
    { code: 'kr', name: 'Korea', category: 'Asia-Pacific & Europe' }
  ];

  const gameModes = [
    { code: 'competitive', name: 'Ranked matches', category: 'Ranked Modes' },
    { code: 'unrated', name: 'Unranked matches', category: 'Ranked Modes' },
    { code: 'spikerush', name: 'Spike Rush', category: 'Casual Modes' },
    { code: 'deathmatch', name: 'Deathmatch', category: 'Casual Modes' },
    { code: 'escalation', name: 'Escalation', category: 'Casual Modes' },
    { code: 'replication', name: 'Replication', category: 'Casual Modes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects */}
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
            <Target className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Gaming API
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-red-500 p-3 rounded-full">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Valorant API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Comprehensive Valorant player statistics and match data
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Valorant API wrapper provides access to comprehensive player statistics, match history, and game data through Henrik's Valorant API. 
            Get detailed insights into player performance, rankings, and match analytics for the popular tactical shooter game.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-red-600 dark:text-red-400 border border-red-500/20">Player Stats</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Match History</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Leaderboards</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Game Data</span>
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
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('quickstart')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'quickstart' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Quick Start
              </button>
              <button
                onClick={() => setActiveTab('authentication')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'authentication' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Authentication
              </button>
              <button
                onClick={() => setActiveTab('examples')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'examples' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Examples
              </button>
              <button
                onClick={() => setActiveTab('methods')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'methods' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Methods
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'advanced' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Advanced
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'quickstart' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Getting Started</h3>
                <CodeBlock code={basicSetupCode} id="basic-setup" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'authentication' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  API Key (Optional)
                </h3>
                <p className="text-muted-foreground mb-4">API key is optional but recommended for higher rate limits</p>
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Follow the process outlined in their documentation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Add the key to your environment variables</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'examples' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Player Statistics & Match History
                  </h3>
                  <p className="text-muted-foreground mb-4">Get comprehensive player performance data and match analytics</p>
                  <CodeBlock code={playerStatsCode} id="player-stats-examples" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-primary" />
                    Regional Leaderboards
                  </h3>
                  <p className="text-muted-foreground mb-4">Access regional leaderboards and top player rankings</p>
                  <CodeBlock code={leaderboardCode} id="leaderboard-examples" />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'methods' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                      <Database className="h-5 w-5 mr-2 text-primary" />
                      Supported Regions
                    </h3>
                    <div className="grid gap-4">
                      {Array.from(new Set(regions.map(r => r.category))).map(category => (
                        <div key={category} className="glass-card">
                          <h4 className="font-semibold text-lg mb-3">{category}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {regions.filter(r => r.category === category).map(region => (
                              <div key={region.code} className="flex items-center justify-between p-2 rounded glass">
                                <span className="text-sm">{region.name}</span>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{region.code}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Supported Game Modes
                    </h3>
                    <div className="grid gap-4">
                      {Array.from(new Set(gameModes.map(m => m.category))).map(category => (
                        <div key={category} className="glass-card">
                          <h4 className="font-semibold text-lg mb-3">{category}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {gameModes.filter(m => m.category === category).map(mode => (
                              <div key={mode.code} className="flex items-center justify-between p-2 rounded glass">
                                <span className="text-sm">{mode.name}</span>
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{mode.code}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'advanced' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Advanced Configuration</h3>
                <p className="text-muted-foreground mb-4">Advanced features and best practices</p>
              </div>
            </div>
          </div>
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Explore More APIs</h3>
                  <p className="text-muted-foreground text-sm mb-3">Discover other API integrations available in macro_api</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View All APIs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Performance Tips</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn how to optimize your Valorant API usage</p>
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

export default ValorantDocs;