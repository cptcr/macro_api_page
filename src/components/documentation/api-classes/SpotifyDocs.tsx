import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Copy, Music, Play, Search, User, Album, Heart, List, CheckCircle, ExternalLink, Code, Download, Sparkles, ArrowRight, Key, Shield } from 'lucide-react';

const SpotifyDocs: React.FC = () => {
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

  const basicSetupCode = `import { SpotifyAPI } from 'macro_api';

const spotify = new SpotifyAPI({
  clientId: 'your-spotify-client-id',
  clientSecret: 'your-spotify-client-secret',
  redirectUri: 'http://localhost:3000/callback' // Optional for OAuth
});`;

  const authorizationCode = `// Get authorization URL for OAuth flow
const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private'];
const authUrl = spotify.getAuthorizationUrl(scopes, 'random-state-string');

// Redirect user to authUrl, then handle callback
await spotify.exchangeCode(authorizationCode);

// Or set access token manually
spotify.setAccessToken('access-token', 3600, 'refresh-token');`;

  const userExampleCode = `// Get current user profile
const user = await spotify.getCurrentUser();
console.log(user);

// Get another user's profile
const userProfile = await spotify.getUser('spotify-user-id');`;

  const trackExampleCode = `// Get a single track
const track = await spotify.getTrack('4iV5W9uYEdYUVa79Axb7Rh');

// Get multiple tracks
const tracks = await spotify.getTracks(['4iV5W9uYEdYUVa79Axb7Rh', '1301WleyT98MSxVHPZCA6M']);`;

  const methods = [
    {
      name: 'getAuthorizationUrl',
      description: 'Generate OAuth authorization URL',
      params: 'scopes: string[], state?: string',
      returns: 'string',
      icon: <User className="h-4 w-4" />
    },
    {
      name: 'exchangeCode',
      description: 'Exchange authorization code for access token',
      params: 'code: string',
      returns: 'Promise<void>',
      icon: <User className="h-4 w-4" />
    },
    {
      name: 'getCurrentUser',
      description: 'Get current user profile',
      params: 'None',
      returns: 'Promise<User>',
      icon: <User className="h-4 w-4" />
    },
    {
      name: 'getTrack',
      description: 'Get track by ID',
      params: 'trackId: string',
      returns: 'Promise<Track>',
      icon: <Music className="h-4 w-4" />
    },
    {
      name: 'getTracks',
      description: 'Get multiple tracks by IDs',
      params: 'trackIds: string[]',
      returns: 'Promise<TrackResponse>',
      icon: <Music className="h-4 w-4" />
    },
    {
      name: 'getAlbum',
      description: 'Get album by ID',
      params: 'albumId: string',
      returns: 'Promise<Album>',
      icon: <Album className="h-4 w-4" />
    },
    {
      name: 'getPlaylist',
      description: 'Get playlist by ID',
      params: 'playlistId: string',
      returns: 'Promise<Playlist>',
      icon: <List className="h-4 w-4" />
    },
    {
      name: 'search',
      description: 'Search Spotify catalog',
      params: 'query: string, types: SearchType[], params?: SearchParams',
      returns: 'Promise<SearchResults>',
      icon: <Search className="h-4 w-4" />
    }
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
            <Music className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              API Integration
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-green-500 p-3 rounded-full">
              <Music className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Spotify API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete TypeScript wrapper for the Spotify Web API
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            Complete TypeScript wrapper for the Spotify Web API with built-in OAuth flow, automatic token refresh, 
            and comprehensive endpoint coverage for music streaming integration.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">OAuth 2.0</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Token Refresh</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">TypeScript</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Music Streaming</span>
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
              <TabsTrigger value="authentication" className="glass-button">Auth</TabsTrigger>
              <TabsTrigger value="examples" className="glass-button">Examples</TabsTrigger>
              <TabsTrigger value="methods" className="glass-button">Methods</TabsTrigger>
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
                  <p className="text-muted-foreground mb-4">Initialize the Spotify API client</p>
                  <CodeBlock code={basicSetupCode} id="basic-setup" />
                </div>

                <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 dark:border-green-400/20">
                  <div className="flex items-start space-x-4">
                    <Music className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Spotify App Required</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                        You'll need to create a Spotify app at <a href="https://developer.spotify.com/dashboard" className="underline" target="_blank" rel="noopener noreferrer">developer.spotify.com</a> to get your client credentials.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Play className="h-5 w-5 mr-2 text-primary" />
                    Simple Example
                  </h3>
                  <p className="text-muted-foreground mb-4">Get track information</p>
                  <CodeBlock 
                    code={`// After setting up authentication
const track = await spotify.getTrack('4iV5W9uYEdYUVa79Axb7Rh');
console.log(\`Playing: \${track.name} by \${track.artists[0].name}\`);`}
                    id="simple-example"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Authentication */}
            <TabsContent value="authentication" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  OAuth Flow
                </h3>
                <p className="text-muted-foreground mb-4">Complete OAuth 2.0 implementation with automatic token management</p>
                <CodeBlock code={authorizationCode} id="oauth-flow" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    OAuth Scopes
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <code className="glass px-2 py-1 rounded text-xs">user-read-private</code>
                      <span className="ml-2 text-muted-foreground">- Read user profile</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <code className="glass px-2 py-1 rounded text-xs">user-read-email</code>
                      <span className="ml-2 text-muted-foreground">- Read user email</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <code className="glass px-2 py-1 rounded text-xs">playlist-read-private</code>
                      <span className="ml-2 text-muted-foreground">- Read private playlists</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <code className="glass px-2 py-1 rounded text-xs">user-modify-playback-state</code>
                      <span className="ml-2 text-muted-foreground">- Control playback</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Token Management
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Automatic token refresh</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Token expiry handling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Secure token storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>OAuth state validation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Error recovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Examples */}
            <TabsContent value="examples" className="space-y-6">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    User Operations
                  </h3>
                  <CodeBlock code={userExampleCode} id="user-examples" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Music className="h-5 w-5 mr-2 text-primary" />
                    Track Operations
                  </h3>
                  <CodeBlock code={trackExampleCode} id="track-examples" />
                </div>
              </div>
            </TabsContent>

            {/* Methods */}
            <TabsContent value="methods" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Available Methods
                </h3>
                <p className="text-muted-foreground mb-6">Complete list of Spotify API methods</p>
                <div className="grid gap-4">
                  {methods.map((method, index) => (
                    <div key={index} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-600 mb-2 group-hover:text-primary transition-colors">
                            {method.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                          <div className="grid md:grid-cols-2 gap-2 text-xs">
                            <div><strong>Parameters:</strong> <code className="glass px-1 py-0.5 rounded text-xs">{method.params}</code></div>
                            <div><strong>Returns:</strong> <code className="glass px-1 py-0.5 rounded text-xs">{method.returns}</code></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Advanced */}
            <TabsContent value="advanced" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
                  <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Automatic token refresh</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Built-in retry logic</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Rate limit handling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Request/response typing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Error categorization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>OAuth 2.0 flow</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Pagination support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Market localization</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20">
                  <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Common Errors
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>401:</strong> Invalid or expired token</li>
                    <li><strong>403:</strong> Insufficient permissions</li>
                    <li><strong>404:</strong> Resource not found</li>
                    <li><strong>429:</strong> Rate limit exceeded</li>
                    <li><strong>500:</strong> Spotify server error</li>
                    <li><strong>503:</strong> Service unavailable</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
                <div className="flex items-start space-x-4">
                  <Music className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Production Ready</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                      The Spotify API class includes built-in error handling, automatic token refresh, and comprehensive TypeScript support for production applications.
                    </p>
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
};

export default SpotifyDocs;