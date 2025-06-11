import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Copy, Music, Play, Search, User, Album, Heart, List } from 'lucide-react';

const SpotifyDocs: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language = 'typescript', id }: { code: string; language?: string; id: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute top-2 right-2 h-8 w-8 p-0"
        onClick={() => copyToClipboard(code, id)}
      >
        <Copy className="h-3 w-3" />
      </Button>
      {copiedCode === id && (
        <div className="absolute top-2 right-12 bg-green-500 text-white px-2 py-1 rounded text-xs">
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

  const albumExampleCode = `// Get an album
const album = await spotify.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

// Get album tracks with pagination
const albumTracks = await spotify.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy', {
  limit: 20,
  offset: 0
});`;

  const artistExampleCode = `// Get an artist
const artist = await spotify.getArtist('0TnOYISbd1XYRBk9myaseg');

// Get artist's albums
const artistAlbums = await spotify.getArtistAlbums('0TnOYISbd1XYRBk9myaseg', {
  include_groups: 'album,single',
  market: 'US',
  limit: 20
});

// Get artist's top tracks
const topTracks = await spotify.getArtistTopTracks('0TnOYISbd1XYRBk9myaseg', 'US');`;

  const playlistExampleCode = `// Get a playlist
const playlist = await spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M');

// Get playlist tracks
const playlistTracks = await spotify.getPlaylistTracks('37i9dQZF1DXcBWIGoYBM5M', {
  limit: 50,
  offset: 0
});

// Create a new playlist
const newPlaylist = await spotify.createPlaylist(
  'user-id',
  'My Awesome Playlist',
  true, // public
  'Created with macro_api'
);

// Add tracks to playlist
await spotify.addTracksToPlaylist(
  'playlist-id',
  ['spotify:track:4iV5W9uYEdYUVa79Axb7Rh', 'spotify:track:1301WleyT98MSxVHPZCA6M'],
  0 // position
);`;

  const playerExampleCode = `// Get currently playing track
const currentlyPlaying = await spotify.getCurrentlyPlaying();

// Get playback state
const playbackState = await spotify.getPlaybackState();

// Control playback
await spotify.controlPlayback('play'); // or 'pause', 'next', 'previous'
await spotify.controlPlayback('play', 'device-id'); // with specific device`;

  const searchExampleCode = `// Search for tracks, artists, albums, playlists
const searchResults = await spotify.search(
  'The Beatles',
  ['artist', 'album', 'track'],
  {
    limit: 20,
    offset: 0,
    market: 'US'
  }
);`;

  const recommendationsCode = `// Get track recommendations
const recommendations = await spotify.getRecommendations({
  seed_artists: ['4NHQUGzhtTLFvgF5SZesLK'],
  seed_tracks: ['0c6xIDDpzE81m2q797ordA'],
  seed_genres: ['pop', 'rock'],
  limit: 20,
  min_popularity: 50,
  target_energy: 0.6
});`;

  const errorHandlingCode = `import { SpotifyAPI } from 'macro_api';

try {
  const spotify = new SpotifyAPI({
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret'
  });
  
  const track = await spotify.getTrack('track-id');
  console.log(track);
} catch (error) {
  console.error('Spotify API Error:', error.message);
  
  // Handle specific error types
  if (error.message.includes('401')) {
    console.log('Authentication required');
  } else if (error.message.includes('404')) {
    console.log('Track not found');
  }
}`;

  const configInterface = `interface SpotifyAuthOptions {
  clientId: string;
  clientSecret: string;
  redirectUri?: string;
}

interface SpotifyPaginationParams {
  limit?: number;
  offset?: number;
}

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
  refresh_token?: string;
}`;

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
      name: 'setAccessToken',
      description: 'Set access token manually',
      params: 'token: string, expiresIn: number, refreshToken?: string',
      returns: 'void',
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
      name: 'getUser',
      description: 'Get user profile by ID',
      params: 'userId: string',
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
      name: 'getAlbumTracks',
      description: 'Get album tracks with pagination',
      params: 'albumId: string, params?: SpotifyPaginationParams',
      returns: 'Promise<TrackResponse>',
      icon: <Album className="h-4 w-4" />
    },
    {
      name: 'getArtist',
      description: 'Get artist by ID',
      params: 'artistId: string',
      returns: 'Promise<Artist>',
      icon: <User className="h-4 w-4" />
    },
    {
      name: 'getArtistAlbums',
      description: 'Get artist albums with options',
      params: 'artistId: string, params?: AlbumParams',
      returns: 'Promise<AlbumResponse>',
      icon: <Album className="h-4 w-4" />
    },
    {
      name: 'getArtistTopTracks',
      description: 'Get artist top tracks',
      params: 'artistId: string, market?: string',
      returns: 'Promise<TrackResponse>',
      icon: <Music className="h-4 w-4" />
    },
    {
      name: 'getPlaylist',
      description: 'Get playlist by ID',
      params: 'playlistId: string',
      returns: 'Promise<Playlist>',
      icon: <List className="h-4 w-4" />
    },
    {
      name: 'getPlaylistTracks',
      description: 'Get playlist tracks with pagination',
      params: 'playlistId: string, params?: SpotifyPaginationParams',
      returns: 'Promise<PlaylistTrackResponse>',
      icon: <List className="h-4 w-4" />
    },
    {
      name: 'createPlaylist',
      description: 'Create new playlist',
      params: 'userId: string, name: string, isPublic?: boolean, description?: string',
      returns: 'Promise<Playlist>',
      icon: <List className="h-4 w-4" />
    },
    {
      name: 'addTracksToPlaylist',
      description: 'Add tracks to playlist',
      params: 'playlistId: string, trackUris: string[], position?: number',
      returns: 'Promise<SnapshotResponse>',
      icon: <List className="h-4 w-4" />
    },
    {
      name: 'getCurrentlyPlaying',
      description: 'Get currently playing track',
      params: 'None',
      returns: 'Promise<CurrentlyPlaying>',
      icon: <Play className="h-4 w-4" />
    },
    {
      name: 'getPlaybackState',
      description: 'Get playback state',
      params: 'None',
      returns: 'Promise<PlaybackState>',
      icon: <Play className="h-4 w-4" />
    },
    {
      name: 'controlPlayback',
      description: 'Control playback (play/pause/next/previous)',
      params: 'action: PlaybackAction, deviceId?: string',
      returns: 'Promise<void>',
      icon: <Play className="h-4 w-4" />
    },
    {
      name: 'search',
      description: 'Search Spotify catalog',
      params: 'query: string, types: SearchType[], params?: SearchParams',
      returns: 'Promise<SearchResults>',
      icon: <Search className="h-4 w-4" />
    },
    {
      name: 'getRecommendations',
      description: 'Get track recommendations',
      params: 'params: RecommendationParams',
      returns: 'Promise<RecommendationResponse>',
      icon: <Heart className="h-4 w-4" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-green-500 p-3 rounded-full">
            <Music className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Spotify API
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete TypeScript wrapper for the Spotify Web API with built-in OAuth flow, automatic token refresh, 
          and comprehensive endpoint coverage for music streaming integration.
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">OAuth 2.0</Badge>
          <Badge variant="secondary">Token Refresh</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Music Streaming</Badge>
        </div>
      </div>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>Install the macro_api package to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code={installCode} language="bash" id="install" />
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="quickstart" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
          <TabsTrigger value="authentication">Auth</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* Quick Start */}
        <TabsContent value="quickstart" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Setup</CardTitle>
              <CardDescription>Initialize the Spotify API client</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={basicSetupCode} id="basic-setup" />
            </CardContent>
          </Card>

          <Alert>
            <Music className="h-4 w-4" />
            <AlertDescription>
              You'll need to create a Spotify app at <a href="https://developer.spotify.com/dashboard" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">developer.spotify.com</a> to get your client credentials.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Simple Example</CardTitle>
              <CardDescription>Get track information</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock 
                code={`// After setting up authentication
const track = await spotify.getTrack('4iV5W9uYEdYUVa79Axb7Rh');
console.log(\`Playing: \${track.name} by \${track.artists[0].name}\`);`}
                id="simple-example"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Authentication */}
        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>OAuth Flow</CardTitle>
              <CardDescription>Complete OAuth 2.0 implementation with automatic token management</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={authorizationCode} id="oauth-flow" />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">OAuth Scopes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><code className="bg-gray-100 px-2 py-1 rounded">user-read-private</code> - Read user profile</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">user-read-email</code> - Read user email</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">playlist-read-private</code> - Read private playlists</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">playlist-modify-public</code> - Modify public playlists</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">user-modify-playback-state</code> - Control playback</div>
                  <div><code className="bg-gray-100 px-2 py-1 rounded">user-read-playback-state</code> - Read playback state</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Token Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✅ Automatic token refresh</li>
                  <li>✅ Token expiry handling</li>
                  <li>✅ Secure token storage</li>
                  <li>✅ OAuth state validation</li>
                  <li>✅ Error recovery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Examples */}
        <TabsContent value="examples" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  User Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={userExampleCode} id="user-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  Track Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={trackExampleCode} id="track-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Album className="h-5 w-5" />
                  Album Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={albumExampleCode} id="album-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Artist Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={artistExampleCode} id="artist-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Playlist Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={playlistExampleCode} id="playlist-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Player Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock code={playerExampleCode} id="player-examples" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search & Discovery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock code={searchExampleCode} id="search-examples" />
                <CodeBlock code={recommendationsCode} id="recommendations-examples" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Methods */}
        <TabsContent value="methods" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Methods</CardTitle>
              <CardDescription>Complete list of Spotify API methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      {method.icon}
                      <code className="font-semibold text-blue-600">{method.name}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                    <div className="grid md:grid-cols-2 gap-2 text-xs">
                      <div><strong>Parameters:</strong> <code className="bg-gray-100 px-1 rounded">{method.params}</code></div>
                      <div><strong>Returns:</strong> <code className="bg-gray-100 px-1 rounded">{method.returns}</code></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Types */}
        <TabsContent value="types" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript Interfaces</CardTitle>
              <CardDescription>Type definitions for configuration and responses</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={configInterface} id="config-interface" />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Configuration Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li><code>SpotifyAuthOptions</code> - Authentication config</li>
                  <li><code>SpotifyPaginationParams</code> - Pagination options</li>
                  <li><code>SpotifyTokenResponse</code> - Token response format</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Response Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li><code>Track</code> - Track information</li>
                  <li><code>Album</code> - Album information</li>
                  <li><code>Artist</code> - Artist information</li>
                  <li><code>Playlist</code> - Playlist information</li>
                  <li><code>User</code> - User profile data</li>
                  <li><code>SearchResults</code> - Search response</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Advanced */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Error Handling</CardTitle>
              <CardDescription>Robust error handling for production applications</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={errorHandlingCode} id="error-handling" />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✅ Automatic token refresh</li>
                  <li>✅ Built-in retry logic</li>
                  <li>✅ Rate limit handling</li>
                  <li>✅ Request/response typing</li>
                  <li>✅ Error categorization</li>
                  <li>✅ OAuth 2.0 flow</li>
                  <li>✅ Pagination support</li>
                  <li>✅ Market localization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Common Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>401:</strong> Invalid or expired token</li>
                  <li><strong>403:</strong> Insufficient permissions</li>
                  <li><strong>404:</strong> Resource not found</li>
                  <li><strong>429:</strong> Rate limit exceeded</li>
                  <li><strong>500:</strong> Spotify server error</li>
                  <li><strong>503:</strong> Service unavailable</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <Music className="h-4 w-4" />
            <AlertDescription>
              The Spotify API class includes built-in error handling, automatic token refresh, and comprehensive TypeScript support for production applications.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpotifyDocs;