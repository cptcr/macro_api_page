import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Calendar, Play, Search, User, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, Users, Trophy, CheckCircle, ExternalLink } from 'lucide-react';

const FootballApiDocs: React.FC = () => {
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

  const basicSetupCode = `import { FootballAPI } from 'macro_api';

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
}`;

  const fixturesCode = `// Get fixtures by date
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
}`;

  const features = [
    {
      name: 'Live Fixtures',
      description: 'Real-time match data and live scores',
      icon: <Calendar className="h-4 w-4" />
    },
    {
      name: 'Player Statistics',
      description: 'Detailed player performance data',
      icon: <Users className="h-4 w-4" />
    },
    {
      name: 'Team Information',
      description: 'Complete team profiles and statistics',
      icon: <Database className="h-4 w-4" />
    },
    {
      name: 'League Standings',
      description: 'Current league tables and positions',
      icon: <Trophy className="h-4 w-4" />
    }
  ];

  const leagues = [
    { id: '39', name: 'Premier League (England)', region: 'European Leagues' },
    { id: '140', name: 'La Liga (Spain)', region: 'European Leagues' },
    { id: '78', name: 'Bundesliga (Germany)', region: 'European Leagues' },
    { id: '135', name: 'Serie A (Italy)', region: 'European Leagues' },
    { id: '61', name: 'Ligue 1 (France)', region: 'European Leagues' },
    { id: '2', name: 'UEFA Champions League', region: 'International' },
    { id: '3', name: 'UEFA Europa League', region: 'International' },
    { id: '1', name: 'World Cup', region: 'International' },
    { id: '4', name: 'European Championship', region: 'International' },
    { id: '9', name: 'Copa America', region: 'International' }
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
            <svg className="h-4 w-4 mr-2 text-primary animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-medium text-foreground">
              Sports Data API
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-green-500 p-3 rounded-full">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Football API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Comprehensive football data from leagues worldwide
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Football API wrapper provides access to comprehensive football data from the API-Football service via RapidAPI. 
            Get live scores, detailed statistics, player information, team data, and much more from football leagues around the world.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Live Scores</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Player Stats</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Team Data</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Standings</span>
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
              <TabsTrigger value="fixtures" className="glass-button">Fixtures</TabsTrigger>
              <TabsTrigger value="leagues" className="glass-button">League IDs</TabsTrigger>
              <TabsTrigger value="advanced" className="glass-button">Advanced</TabsTrigger>
            </div>

            {/* Quick Start */}
            <TabsContent value="quickstart" className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Basic Setup
                  </h3>
                  <p className="text-muted-foreground mb-4">Initialize the Football API client</p>
                  <CodeBlock code={basicSetupCode} id="basic-setup" />
                </div>

                <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 dark:border-green-400/20">
                  <div className="flex items-start space-x-4">
                    <Key className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">RapidAPI Key Required</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                        You need a valid API key from RapidAPI to use the Football API service.
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
                  Getting Your API Key
                </h3>
                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Visit <a href="https://rapidapi.com/api-sports/api/api-football" className="underline" target="_blank" rel="noopener noreferrer">API-Football on RapidAPI</a></span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Sign up or log in to your RapidAPI account</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Subscribe to the API-Football service (free tier available)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy your API key from the request headers section</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Add it to your environment variables</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Fixtures */}
            <TabsContent value="fixtures" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Fixtures and Match Data
                </h3>
                <p className="text-muted-foreground mb-4">Get live and scheduled football matches</p>
                <CodeBlock code={fixturesCode} id="fixtures-examples" />
              </div>
            </TabsContent>

            {/* League IDs */}
            <TabsContent value="leagues" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Popular League IDs
                </h3>
                <div className="grid gap-4">
                  {Array.from(new Set(leagues.map(l => l.region))).map(region => (
                    <div key={region} className="glass-card">
                      <h4 className="font-semibold text-lg mb-3">{region}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {leagues.filter(l => l.region === region).map(league => (
                          <div key={league.id} className="flex items-center justify-between p-2 rounded glass">
                            <span className="text-sm">{league.name}</span>
                            <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{league.id}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Advanced */}
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Performance Tips
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Cache frequently accessed data</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Use specific parameters to reduce response size</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Implement proper error handling for rate limits</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Monitor your API usage to avoid hitting limits</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Rate Limits
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Free:</strong> 100 requests per day</div>
                    <div><strong>Basic:</strong> 1,000 requests per day</div>
                    <div><strong>Pro:</strong> 10,000 requests per day</div>
                    <div><strong>Ultra:</strong> 100,000 requests per day</div>
                  </div>
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
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Caching Guide</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn how to optimize performance with caching</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn Caching</span>
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
}
export default FootballApiDocs;