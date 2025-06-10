import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Book, 
  ChevronRight, 
  ChevronDown, 
  Copy, 
  Check, 
  ExternalLink,
  Code,
  Package,
  Zap,
  Shield,
  Layers,
  Database,
  MessageSquare,
  Music,
  CreditCard,
  FileText,
  Dribbble,
  DollarSign,
  Brain,
  Target,
  Youtube,
  Github,
  Slack,
  Mail,
  Cloud,
  Container,
  Server,
  Settings,
  AlertCircle,
  Info,
  CheckCircle,
  Home,
  Menu,
  X,
  Monitor,
  HardDrive,
  Send,
  PlayCircle,
  PauseCircle,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Users,
  User,
  Star,
  Flag,
  Tag,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Image,
  FileImage,
  FileVideo,
  FileAudio,
  FilePlus,
  FolderPlus,
  Archive,
  Hash,
  AtSign,
  Link,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Activity,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  MoreHorizontal,
  MoreVertical
} from 'lucide-react';

// Type definitions
type LucideIcon = React.ComponentType<{ className?: string }>;

interface NavigationItem {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: LucideIcon;
  items: NavigationItem[];
}

interface ExpandedSections {
  [key: string]: boolean;
}

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

interface InfoBoxProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'note';
  title?: string;
  children: React.ReactNode;
}

interface MethodProps {
  name: string;
  description: string;
  parameters?: Array<{
    name: string;
    type: string;
    description: string;
    required?: boolean;
    default?: string;
  }>;
  returns?: {
    type: string;
    description: string;
  };
  example: string;
  throws?: string[];
}

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    'quick-start': true,
    'api-classes': true,
    'core-features': true,
    'production-apis': true,
    'games-apis': true,
    'utility-apis': true
  });
  const [copiedCode, setCopiedCode] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filteredSections, setFilteredSections] = useState<NavigationSection[]>([]);

  // Navigation structure with comprehensive API coverage
  const navigation: NavigationSection[] = [
    {
      id: 'quick-start',
      title: 'Quick Start',
      icon: Zap,
      items: [
        { id: 'getting-started', title: 'Getting Started', icon: Home },
        { id: 'installation', title: 'Installation', icon: Package },
        { id: 'basic-usage', title: 'Basic Usage', icon: Code },
        { id: 'authentication', title: 'Authentication', icon: Shield },
        { id: 'unified-client', title: 'Unified Client', icon: Layers }
      ]
    },
    {
      id: 'core-features',
      title: 'Core Features',
      icon: Layers,
      items: [
        { id: 'error-handling', title: 'Error Handling', icon: AlertCircle },
        { id: 'caching', title: 'Caching System', icon: Database },
        { id: 'retry-logic', title: 'Retry Logic', icon: RefreshCw },
        { id: 'circuit-breaker', title: 'Circuit Breaker', icon: Shield },
        { id: 'cache-providers', title: 'Cache Providers', icon: Server }
      ]
    },
    {
      id: 'ai-ml-apis',
      title: 'AI/ML APIs',
      icon: Brain,
      items: [
        { id: 'chatgpt', title: 'ChatGPT/OpenAI', icon: MessageSquare },
        { id: 'deepseek', title: 'DeepSeek API', icon: Brain }
      ]
    },
    {
      id: 'payment-apis',
      title: 'Payment APIs',
      icon: CreditCard,
      items: [
        { id: 'stripe', title: 'Stripe API', icon: CreditCard },
        { id: 'paypal', title: 'PayPal API', icon: DollarSign }
      ]
    },
    {
      id: 'communication-apis',
      title: 'Communication',
      icon: MessageSquare,
      items: [
        { id: 'slack', title: 'Slack API', icon: Slack },
        { id: 'sendgrid', title: 'SendGrid API', icon: Mail }
      ]
    },
    {
      id: 'cloud-apis',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { id: 'vercel', title: 'Vercel API', icon: Cloud },
        { id: 's3', title: 'AWS S3 API', icon: Database },
        { id: 'dockerhub', title: 'Docker Hub API', icon: Container }
      ]
    },
    {
      id: 'media-apis',
      title: 'Media & Social',
      icon: Music,
      items: [
        { id: 'spotify', title: 'Spotify API', icon: Music },
        { id: 'youtube', title: 'YouTube Notifications', icon: Youtube }
      ]
    },
    {
      id: 'developer-apis',
      title: 'Developer Tools',
      icon: Code,
      items: [
        { id: 'github', title: 'GitHub API', icon: Github },
        { id: 'notion', title: 'Notion API', icon: FileText }
      ]
    },
    {
      id: 'games-apis',
      title: 'Gaming APIs',
      icon: Target,
      items: [
        { id: 'valorant', title: 'Valorant API', icon: Target }
      ]
    },
    {
      id: 'utility-apis',
      title: 'Utility APIs',
      icon: Settings,
      items: [
        { id: 'football', title: 'Football API', icon: Dribbble }
      ]
    }
  ];

  // Filter sections based on search
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSections(navigation);
      return;
    }

    const filtered = navigation.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);

    setFilteredSections(filtered);
  }, [searchTerm]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript', title }) => (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700 my-6">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <button
            onClick={() => copyToClipboard(code)}
            className="flex items-center text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded"
          >
            {copiedCode === code ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );

  const InfoBox: React.FC<InfoBoxProps> = ({ type = 'info', title, children }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
      success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
      error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
      note: 'bg-purple-50 border-purple-200 text-purple-800 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-200'
    };

    const icons: Record<string, LucideIcon> = {
      info: Info,
      warning: AlertCircle,
      success: CheckCircle,
      error: AlertCircle,
      note: Book
    };

    const Icon = icons[type];

    return (
      <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
        <div className="flex items-start">
          <Icon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            {title && <div className="font-semibold mb-1">{title}</div>}
            <div className="text-sm">{children}</div>
          </div>
        </div>
      </div>
    );
  };

  const Method: React.FC<MethodProps> = ({ name, description, parameters, returns, example, throws }) => (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 my-6">
      <div className="flex items-center mb-4">
        <Code className="h-5 w-5 mr-2 text-blue-600" />
        <h4 className="text-lg font-semibold font-mono text-blue-600">{name}</h4>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      
      {parameters && parameters.length > 0 && (
        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Parameters</h5>
          <div className="space-y-2">
            {parameters.map((param, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="font-mono text-sm font-semibold text-purple-600">{param.name}</span>
                    {param.required && <span className="text-red-500 text-xs ml-1">*</span>}
                    <span className="text-gray-500 text-sm ml-2">({param.type})</span>
                    {param.default && <span className="text-gray-500 text-xs ml-2">= {param.default}</span>}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{param.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {returns && (
        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Returns</h5>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
            <span className="font-mono text-sm font-semibold text-green-600">{returns.type}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{returns.description}</p>
          </div>
        </div>
      )}
      
      {throws && throws.length > 0 && (
        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Throws</h5>
          <div className="space-y-1">
            {throws.map((error, index) => (
              <div key={index} className="bg-red-50 dark:bg-red-900/20 rounded p-2">
                <span className="font-mono text-sm text-red-600">{error}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h5 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Example</h5>
        <CodeBlock code={example} />
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {(filteredSections.length > 0 ? filteredSections : navigation).map((section) => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <section.icon className="h-4 w-4 mr-2" />
              {section.title}
              {expandedSections[section.id] ? (
                <ChevronDown className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronRight className="h-4 w-4 ml-auto" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="ml-6 mt-2 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center w-full text-left px-2 py-1.5 text-sm rounded transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Getting Started with macro_api</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A comprehensive, production-ready TypeScript/JavaScript library for unified API integrations with built-in error handling, caching, retry logic, and circuit breakers.
            </p>
            
            <InfoBox type="info" title="What is macro_api?">
              macro_api is a powerful library that provides unified interfaces for popular APIs, complete with enterprise-grade features like automatic retries, intelligent caching, circuit breakers, and comprehensive error handling. It's designed to make API integration robust, reliable, and developer-friendly.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Shield className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Production Ready</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Built-in error handling, retry logic, circuit breakers, and monitoring.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Code className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">TypeScript First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete TypeScript definitions with IntelliSense support.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Database className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Intelligent Caching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Memory, Redis, and hybrid caching with LRU eviction.</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Layers className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Unified Interface</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consistent patterns across all API integrations.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Supported Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-green-600 flex items-center mb-2">
                  <Brain className="h-4 w-4 mr-2" />
                  AI/ML Services
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• ChatGPT/OpenAI - Chat, embeddings, images</li>
                  <li>• DeepSeek - Code generation, chat</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-blue-600 flex items-center mb-2">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payments
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Stripe - Complete payment processing</li>
                  <li>• PayPal - Orders, invoices, webhooks</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-purple-600 flex items-center mb-2">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Communication
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Slack - Messages, files, webhooks</li>
                  <li>• SendGrid - Email delivery, templates</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-orange-600 flex items-center mb-2">
                  <Cloud className="h-4 w-4 mr-2" />
                  Cloud & Infrastructure
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Vercel - Deployments, projects</li>
                  <li>• AWS S3 - Object storage</li>
                  <li>• Docker Hub - Container registry</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-red-600 flex items-center mb-2">
                  <Music className="h-4 w-4 mr-2" />
                  Media & Social
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Spotify - Music streaming, playlists</li>
                  <li>• YouTube - Notifications, monitoring</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-indigo-600 flex items-center mb-2">
                  <Code className="h-4 w-4 mr-2" />
                  Developer Tools
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• GitHub - Repositories, issues, PRs</li>
                  <li>• Notion - Pages, databases, blocks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Quick Example</h2>
            <CodeBlock
              title="Basic Usage"
              code={`import { ChatGPT, SpotifyAPI, StripeAPI, MacroAPIClient } from 'macro_api';

// Initialize clients with your API keys
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create unified client with caching and retries
const client = new MacroAPIClient({
  cache: {
    type: 'hybrid',
    ttl: 3600,
    maxSize: 1000,
    redis: { url: process.env.REDIS_URL }
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000
  }
});

// Use with automatic error handling and caching
const response = await client.execute(
  () => gpt.chat('Hello, world!'),
  { service: 'openai', method: 'chat' }
);

const user = await spotify.getCurrentUser();
const customer = await stripe.createCustomer({ 
  email: 'user@example.com' 
});`}
            />

            <InfoBox type="success" title="Ready to Start?">
              Check out the Installation guide to set up macro_api in your project, or explore the API documentation to see what's possible with each service.
            </InfoBox>
          </div>
        );

      case 'installation':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Installation</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Package Manager</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Install macro_api using your preferred package manager:
            </p>

            <CodeBlock
              title="npm"
              code="npm install macro_api"
              language="bash"
            />

            <CodeBlock
              title="yarn"
              code="yarn add macro_api"
              language="bash"
            />

            <CodeBlock
              title="pnpm"
              code="pnpm add macro_api"
              language="bash"
            />

            <CodeBlock
              title="bun"
              code="bun add macro_api"
              language="bash"
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Environment Setup</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create a <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">.env</code> file to store your API credentials:
            </p>

            <CodeBlock
              title=".env"
              code={`# AI/ML Services
OPENAI_API_KEY=sk-your_openai_api_key
DEEPSEEK_API_KEY=sk-your_deepseek_api_key

# Payment Services
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# Communication Services
SLACK_BOT_TOKEN=xoxb-your_slack_bot_token
SLACK_SIGNING_SECRET=your_slack_signing_secret
SENDGRID_API_KEY=SG.your_sendgrid_api_key

# Cloud & Infrastructure
VERCEL_ACCESS_TOKEN=your_vercel_token
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
DOCKERHUB_TOKEN=your_dockerhub_token

# Media & Social
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
YOUTUBE_API_KEY=your_youtube_api_key

# Developer Tools
GITHUB_TOKEN=ghp_your_github_token
NOTION_API_KEY=secret_your_notion_key

# Gaming & Sports
VALORANT_API_KEY=your_valorant_api_key
FOOTBALL_API_KEY=your_football_api_key

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379`}
              language="bash"
            />

            <InfoBox type="warning" title="Security Best Practices">
              <ul className="list-disc list-inside space-y-1">
                <li>Never commit API keys to version control</li>
                <li>Use environment variables or secure key management</li>
                <li>Rotate keys regularly</li>
                <li>Use the principle of least privilege for API permissions</li>
                <li>Monitor API usage and set up alerts for unusual activity</li>
              </ul>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">TypeScript Configuration</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For TypeScript projects, ensure your <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">tsconfig.json</code> includes:
            </p>

            <CodeBlock
              title="tsconfig.json"
              code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}`}
              language="json"
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Optional Dependencies</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For enhanced functionality, you can install these optional dependencies:
            </p>

            <CodeBlock
              title="Redis Support (for caching)"
              code="npm install ioredis @types/ioredis"
              language="bash"
            />

            <CodeBlock
              title="Development Dependencies"
              code={`npm install --save-dev \\
  @types/node \\
  typescript \\
  ts-node \\
  nodemon \\
  jest \\
  @types/jest`}
              language="bash"
            />

            <InfoBox type="info" title="Optional Dependencies">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>ioredis</strong>: Required for Redis caching support</li>
                <li><strong>@types/node</strong>: Node.js type definitions</li>
                <li><strong>jest</strong>: For testing your API integrations</li>
              </ul>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verification</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Verify your installation with a simple test:
            </p>

            <CodeBlock
              title="test.js"
              code={`const { ChatGPT, VERSION, PACKAGE_INFO } = require('macro_api');

console.log('macro_api version:', VERSION);
console.log('Package info:', PACKAGE_INFO);

// Test basic functionality
const gpt = new ChatGPT({
  apiKey: 'test-key' // This won't work but validates the import
});

console.log('✅ macro_api installed successfully!');`}
              language="javascript"
            />

            <CodeBlock
              title="Run verification"
              code="node test.js"
              language="bash"
            />

            <InfoBox type="success" title="Installation Complete!">
              You're ready to start using macro_api! Check out the Basic Usage guide to see how to initialize and use the API clients.
            </InfoBox>
          </div>
        );

      case 'basic-usage':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Basic Usage</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Import and Initialize</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start by importing the API classes you need and initializing them with your credentials:
            </p>

            <CodeBlock
              title="ES Modules (Recommended)"
              code={`import { 
  ChatGPT, 
  SpotifyAPI, 
  StripeAPI,
  SlackAPI,
  SendGridAPI,
  MacroAPIClient 
} from 'macro_api';

// Initialize individual clients
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`}
            />

            <CodeBlock
              title="CommonJS"
              code={`const { 
  ChatGPT, 
  SpotifyAPI, 
  StripeAPI,
  MacroAPIClient 
} = require('macro_api');

// Same initialization as above
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Making API Calls</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All API methods return Promises and include built-in error handling:
            </p>

            <CodeBlock
              title="Async/Await Pattern"
              code={`async function example() {
  try {
    // ChatGPT example
    const chatResponse = await gpt.chat(
      'Explain quantum computing',
      'You are a helpful assistant'
    );
    console.log('AI Response:', chatResponse);

    // Stripe example
    const customer = await stripe.createCustomer({
      email: 'customer@example.com',
      name: 'John Doe'
    });
    console.log('Customer created:', customer.id);

    // Slack example
    const message = await slack.sendMessage(
      '#general', 
      'Hello from macro_api!'
    );
    console.log('Message sent:', message.ts);

  } catch (error) {
    // All errors follow consistent patterns
    console.error('API Error:', error.message);
    console.error('Service:', error.service);
    console.error('Status Code:', error.statusCode);
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Error Handling</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              macro_api provides comprehensive error handling with specific error types:
            </p>

            <CodeBlock
              title="Error Handling Patterns"
              code={`import { 
  MacroApiError, 
  AuthenticationError, 
  RateLimitError, 
  NotFoundError,
  ValidationError 
} from 'macro_api';

async function robustApiCall() {
  try {
    const result = await gpt.chat('Hello world');
    return result;
  } catch (error) {
    if (error instanceof AuthenticationError) {
      console.error('Invalid API key:', error.message);
      // Handle auth error - maybe refresh token
    } else if (error instanceof RateLimitError) {
      console.warn(\`Rate limited. Retry after: \${error.retryAfter}s\`);
      // Implement exponential backoff
      await new Promise(resolve => 
        setTimeout(resolve, error.retryAfter * 1000)
      );
      return robustApiCall(); // Retry
    } else if (error instanceof ValidationError) {
      console.error('Validation failed:');
      error.issues.forEach(issue => {
        console.error(\`- \${issue.field}: \${issue.message}\`);
      });
    } else if (error instanceof NotFoundError) {
      console.error('Resource not found:', error.message);
    } else if (error instanceof MacroApiError) {
      console.error(\`API Error [\${error.code}]: \${error.message}\`);
      console.error('Service:', error.service);
      console.error('Details:', error.details);
    } else {
      console.error('Unexpected error:', error);
    }
    
    throw error;
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Using the Unified Client</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The MacroAPIClient provides centralized caching, retry logic, and monitoring:
            </p>

            <CodeBlock
              title="Unified Client Setup"
              code={`const client = new MacroAPIClient({
  cache: {
    type: 'hybrid', // memory + redis
    ttl: 3600, // 1 hour default
    maxSize: 1000, // memory cache size
    redis: {
      url: process.env.REDIS_URL,
      keyPrefix: 'myapp'
    }
  },
  retries: {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 30000
  }
});

// All operations are automatically cached and retried
const response = await client.execute(
  () => gpt.chat('Hello world'),
  {
    service: 'openai',
    method: 'chat',
    params: { message: 'Hello world' },
    cacheTtl: 1800, // 30 minutes
    skipCache: false,
    skipRetry: false
  }
);

// Get cache statistics
const stats = await client.getCacheStats();
console.log(\`Cache hit rate: \${(stats.hitRate * 100).toFixed(1)}%\`);
console.log(\`Total requests: \${stats.hits + stats.misses}\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Configuration Patterns</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Common configuration patterns for different environments:
            </p>

            <CodeBlock
              title="Environment-specific Configuration"
              code={`// config.js
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

export const apiConfig = {
  // OpenAI Configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    // Use cheaper model in development
    defaultModel: isDevelopment ? 'gpt-3.5-turbo' : 'gpt-4',
    timeout: isDevelopment ? 10000 : 30000
  },
  
  // Stripe Configuration
  stripe: {
    secretKey: isDevelopment 
      ? process.env.STRIPE_TEST_KEY 
      : process.env.STRIPE_LIVE_KEY,
    webhook: {
      secret: process.env.STRIPE_WEBHOOK_SECRET
    }
  },
  
  // Cache Configuration
  cache: {
    type: isProduction ? 'hybrid' : 'memory',
    ttl: isDevelopment ? 300 : 3600, // 5 min dev, 1 hour prod
    maxSize: isDevelopment ? 100 : 1000,
    redis: isProduction ? {
      url: process.env.REDIS_URL,
      keyPrefix: 'myapp:prod'
    } : undefined
  },
  
  // Retry Configuration
  retries: {
    maxRetries: isDevelopment ? 1 : 3,
    baseDelay: 1000,
    maxDelay: isDevelopment ? 5000 : 30000
  }
};

// Usage
const gpt = new ChatGPT(apiConfig.openai);
const stripe = new StripeAPI(apiConfig.stripe);
const client = new MacroAPIClient({
  cache: apiConfig.cache,
  retries: apiConfig.retries
});`}
            />

            <InfoBox type="info" title="Best Practices">
              <ul className="list-disc list-inside space-y-1">
                <li>Always use environment variables for API keys</li>
                <li>Implement proper error handling for each API</li>
                <li>Use the unified client for automatic caching and retries</li>
                <li>Configure different settings for development and production</li>
                <li>Monitor API usage and implement rate limiting</li>
                <li>Use TypeScript for better development experience</li>
              </ul>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <Shield className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn about different authentication methods for each API service.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <Layers className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Core Features</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explore caching, retry logic, and error handling in detail.
                </p>
              </div>
            </div>
          </div>
        );

      case 'chatgpt':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <MessageSquare className="inline h-10 w-10 mr-3 text-green-500" />
              ChatGPT/OpenAI API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete OpenAI API wrapper with support for chat completions, embeddings, streaming, function calling, tool calling, and vision capabilities.
            </p>

            <InfoBox type="info" title="API Key Required">
              Get your API key from <a href="https://platform.openai.com/account/api-keys" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">OpenAI Platform</a>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Constructor</h2>
            
            <Method
              name="new ChatGPT(config)"
              description="Creates a new ChatGPT API client instance."
              parameters={[
                {
                  name: "config",
                  type: "ChatGPTConfig",
                  description: "Configuration object for the ChatGPT client",
                  required: true
                },
                {
                  name: "config.apiKey",
                  type: "string",
                  description: "Your OpenAI API key",
                  required: true
                },
                {
                  name: "config.organizationId",
                  type: "string",
                  description: "Optional organization ID for API usage tracking",
                  required: false
                },
                {
                  name: "config.baseUrl",
                  type: "string",
                  description: "Custom API base URL",
                  required: false,
                  default: "https://api.openai.com/v1"
                }
              ]}
              returns={{
                type: "ChatGPT",
                description: "A new ChatGPT client instance"
              }}
              example={`const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: 'org-your-org-id', // Optional
  baseUrl: 'https://api.openai.com/v1' // Optional
});`}
              throws={["ConfigurationError - if apiKey is missing"]}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Chat Methods</h2>

            <Method
              name="chat(prompt, systemPrompt?, model?)"
              description="Generate a chat completion with a simple interface."
              parameters={[
                {
                  name: "prompt",
                  type: "string",
                  description: "The user message to send to the model",
                  required: true
                },
                {
                  name: "systemPrompt",
                  type: "string",
                  description: "Optional system message to set behavior",
                  required: false
                },
                {
                  name: "model",
                  type: "string",
                  description: "Model to use for the completion",
                  required: false,
                  default: "gpt-4o"
                }
              ]}
              returns={{
                type: "Promise<string>",
                description: "The model's response as a string"
              }}
              example={`// Simple chat
const response = await gpt.chat(
  'Explain quantum computing in simple terms',
  'You are a helpful physics teacher'
);

// With custom model
const response = await gpt.chat(
  'Write a haiku about programming',
  'You are a creative poet',
  'gpt-4-turbo'
);`}
              throws={[
                "AuthenticationError - Invalid API key",
                "RateLimitError - Rate limit exceeded",
                "ValidationError - Invalid parameters"
              ]}
            />

            <Method
              name="createChatCompletion(options)"
              description="Create a chat completion with full control over all parameters."
              parameters={[
                {
                  name: "options",
                  type: "ChatCompletionOptions",
                  description: "Complete options for chat completion",
                  required: true
                },
                {
                  name: "options.model",
                  type: "string",
                  description: "Model to use (e.g., 'gpt-4', 'gpt-3.5-turbo')",
                  required: true
                },
                {
                  name: "options.messages",
                  type: "Message[]",
                  description: "Array of message objects",
                  required: true
                },
                {
                  name: "options.temperature",
                  type: "number",
                  description: "Sampling temperature (0-2)",
                  required: false,
                  default: "1"
                },
                {
                  name: "options.max_tokens",
                  type: "number",
                  description: "Maximum tokens to generate",
                  required: false
                },
                {
                  name: "options.top_p",
                  type: "number",
                  description: "Nucleus sampling parameter",
                  required: false,
                  default: "1"
                },
                {
                  name: "options.frequency_penalty",
                  type: "number",
                  description: "Frequency penalty (-2 to 2)",
                  required: false,
                  default: "0"
                },
                {
                  name: "options.presence_penalty",
                  type: "number",
                  description: "Presence penalty (-2 to 2)",
                  required: false,
                  default: "0"
                }
              ]}
              returns={{
                type: "Promise<ChatCompletionResponse>",
                description: "Complete response object with usage metrics"
              }}
              example={`const response = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant specialized in technology.'
    },
    {
      role: 'user',
      content: 'What are the latest developments in AI?'
    }
  ],
  temperature: 0.7,
  max_tokens: 1000,
  frequency_penalty: 0.1,
  presence_penalty: 0.1
});

console.log(response.choices[0].message.content);
console.log('Tokens used:', response.usage.total_tokens);`}
            />

            <Method
              name="conversation(messages, model?)"
              description="Continue a multi-turn conversation with message history."
              parameters={[
                {
                  name: "messages",
                  type: "Message[]",
                  description: "Array of conversation messages",
                  required: true
                },
                {
                  name: "model",
                  type: "string",
                  description: "Model to use for the completion",
                  required: false,
                  default: "gpt-4o"
                }
              ]}
              returns={{
                type: "Promise<string>",
                description: "The assistant's response"
              }}
              example={`const conversation = [
  { role: 'system', content: 'You are a coding assistant.' },
  { role: 'user', content: 'How do I create a REST API?' },
  { role: 'assistant', content: 'I can help you create a REST API...' },
  { role: 'user', content: 'Can you show me an Express.js example?' }
];

const reply = await gpt.conversation(conversation);
console.log(reply);

// Add the response back to conversation for next turn
conversation.push({ role: 'assistant', content: reply });`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Streaming Methods</h2>

            <Method
              name="createStreamingChatCompletion(options, onData, onError?, onEnd?)"
              description="Create a streaming chat completion for real-time responses."
              parameters={[
                {
                  name: "options",
                  type: "ChatCompletionOptions",
                  description: "Chat completion options (stream will be set to true)",
                  required: true
                },
                {
                  name: "onData",
                  type: "(chunk: any) => void",
                  description: "Callback for each data chunk received",
                  required: true
                },
                {
                  name: "onError",
                  type: "(error: any) => void",
                  description: "Callback for handling errors",
                  required: false
                },
                {
                  name: "onEnd",
                  type: "() => void",
                  description: "Callback when stream ends",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<ReadableStream>",
                description: "The stream object that can be cancelled"
              }}
              example={`// Stream to console
await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Write a short story about a robot' }
    ],
    temperature: 0.8
  },
  (chunk) => {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      process.stdout.write(content);
    }
  },
  (error) => console.error('Stream error:', error),
  () => console.log('\\nStream completed')
);

// Stream to web client
async function streamToClient(ws, prompt) {
  await gpt.createStreamingChatCompletion(
    {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    },
    (chunk) => {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        ws.send(JSON.stringify({ type: 'content', data: content }));
      }
    },
    (error) => {
      ws.send(JSON.stringify({ type: 'error', data: error.message }));
    },
    () => {
      ws.send(JSON.stringify({ type: 'complete' }));
    }
  );
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Function & Tool Calling</h2>

            <Method
              name="withFunctions(prompt, functions, model?)"
              description="Generate text with function calling capabilities (legacy format)."
              parameters={[
                {
                  name: "prompt",
                  type: "string",
                  description: "User message that may trigger function calls",
                  required: true
                },
                {
                  name: "functions",
                  type: "Function[]",
                  description: "Array of function definitions",
                  required: true
                },
                {
                  name: "model",
                  type: "string",
                  description: "Model to use for the completion",
                  required: false,
                  default: "gpt-4o"
                }
              ]}
              returns={{
                type: "Promise<Message>",
                description: "Message that may contain function calls"
              }}
              example={`const functions = [
  {
    name: 'get_weather',
    description: 'Get current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'City name'
        }
      },
      required: ['location']
    }
  }
];

const response = await gpt.withFunctions(
  'What\\'s the weather like in New York?',
  functions
);

if (response.function_call) {
  const { name, arguments: args } = response.function_call;
  console.log(\`AI wants to call: \${name}\`);
  console.log(\`With arguments: \${args}\`);
  
  // Execute the function and continue conversation
  const result = await getWeather(JSON.parse(args).location);
  // ... continue with result
}`}
            />

            <Method
              name="withTools(prompt, tools, model?)"
              description="Generate text with modern tool calling capabilities."
              parameters={[
                {
                  name: "prompt",
                  type: "string",
                  description: "User message that may trigger tool calls",
                  required: true
                },
                {
                  name: "tools",
                  type: "Tool[]",
                  description: "Array of tool definitions",
                  required: true
                },
                {
                  name: "model",
                  type: "string",
                  description: "Model to use for the completion",
                  required: false,
                  default: "gpt-4o"
                }
              ]}
              returns={{
                type: "Promise<Message>",
                description: "Message that may contain tool calls"
              }}
              example={`const tools = [
  {
    type: 'function',
    function: {
      name: 'web_search',
      description: 'Search the web for information',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search query'
          }
        },
        required: ['query']
      }
    }
  }
];

const response = await gpt.withTools(
  'Search for the latest AI news',
  tools
);

if (response.tool_calls) {
  for (const toolCall of response.tool_calls) {
    const { id, function: func } = toolCall;
    const { name, arguments: args } = func;
    
    if (name === 'web_search') {
      const result = await webSearch(JSON.parse(args).query);
      // Continue conversation with tool result
    }
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Embeddings</h2>

            <Method
              name="createEmbeddings(options)"
              description="Create text embeddings for semantic search and similarity."
              parameters={[
                {
                  name: "options",
                  type: "EmbeddingOptions",
                  description: "Embedding creation options",
                  required: true
                },
                {
                  name: "options.model",
                  type: "string",
                  description: "Embedding model to use",
                  required: true
                },
                {
                  name: "options.input",
                  type: "string | string[]",
                  description: "Text(s) to embed",
                  required: true
                },
                {
                  name: "options.encoding_format",
                  type: "'float' | 'base64'",
                  description: "Format for returned embeddings",
                  required: false,
                  default: "float"
                }
              ]}
              returns={{
                type: "Promise<EmbeddingResponse>",
                description: "Response containing embeddings and usage info"
              }}
              example={`// Create embeddings for multiple texts
const embeddings = await gpt.createEmbeddings({
  model: 'text-embedding-3-small',
  input: [
    'The quick brown fox jumps over the lazy dog',
    'Machine learning is a subset of artificial intelligence',
    'Python is a popular programming language'
  ]
});

embeddings.data.forEach((embedding, index) => {
  console.log(\`Embedding \${index}: \${embedding.embedding.length} dimensions\`);
});

// Use for semantic search
const queryEmbedding = await gpt.createEmbeddings({
  model: 'text-embedding-3-small',
  input: 'artificial intelligence programming'
});

// Calculate cosine similarity with stored embeddings
const similarities = embeddings.data.map(embedding => {
  return cosineSimilarity(queryEmbedding.data[0].embedding, embedding.embedding);
});`}
            />

            <Method
              name="embed(text, model?)"
              description="Simple helper method to create embeddings for a single text."
              parameters={[
                {
                  name: "text",
                  type: "string | string[]",
                  description: "Text or array of texts to embed",
                  required: true
                },
                {
                  name: "model",
                  type: "string",
                  description: "Embedding model to use",
                  required: false,
                  default: "text-embedding-3-small"
                }
              ]}
              returns={{
                type: "Promise<EmbeddingData[]>",
                description: "Array of embedding data objects"
              }}
              example={`// Simple embedding
const embeddings = await gpt.embed('Hello world');
console.log('Embedding vector:', embeddings[0].embedding);

// Multiple texts
const embeddings = await gpt.embed([
  'First document',
  'Second document',
  'Third document'
]);

embeddings.forEach((emb, i) => {
  console.log(\`Document \${i + 1}: \${emb.embedding.length} dimensions\`);
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Vision Capabilities</h2>

            <InfoBox type="note" title="Vision Models">
              Vision capabilities require GPT-4 Vision models (gpt-4-vision-preview, gpt-4o, etc.)
            </InfoBox>

            <CodeBlock
              title="Image Analysis Example"
              code={`// Analyze image from URL
const imageResponse = await gpt.createChatCompletion({
  model: 'gpt-4-vision-preview',
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What do you see in this image? Describe it in detail.'
        },
        {
          type: 'image_url',
          image_url: {
            url: 'https://example.com/image.jpg',
            detail: 'high' // 'low', 'high', or 'auto'
          }
        }
      ]
    }
  ],
  max_tokens: 500
});

// Analyze local image (base64)
const fs = require('fs');
const imageBuffer = fs.readFileSync('image.jpg');
const base64Image = imageBuffer.toString('base64');

const localImageResponse = await gpt.createChatCompletion({
  model: 'gpt-4-vision-preview',
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'Analyze this chart and extract key insights.'
        },
        {
          type: 'image_url',
          image_url: {
            url: \`data:image/jpeg;base64,\${base64Image}\`
          }
        }
      ]
    }
  ]
});

// Multiple images comparison
const multiImageResponse = await gpt.createChatCompletion({
  model: 'gpt-4-vision-preview',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: 'Compare these two images:' },
        { type: 'image_url', image_url: { url: 'https://example.com/image1.jpg' } },
        { type: 'image_url', image_url: { url: 'https://example.com/image2.jpg' } }
      ]
    }
  ]
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Model Management</h2>

            <Method
              name="listModels()"
              description="Get a list of available models from OpenAI."
              returns={{
                type: "Promise<ModelListResponse>",
                description: "List of available models with metadata"
              }}
              example={`const models = await gpt.listModels();
console.log('Available models:');
models.data.forEach(model => {
  console.log(\`- \${model.id} (created: \${new Date(model.created * 1000)})\`);
});

// Filter for specific types
const gpt4Models = models.data.filter(m => m.id.includes('gpt-4'));
const embeddingModels = models.data.filter(m => m.id.includes('embedding'));`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Utility Methods</h2>

            <CodeBlock
              title="Model Selection Helper"
              code={`// Smart model selection based on task
function selectModel(task, budget = 'medium') {
  const models = {
    'creative': {
      high: 'gpt-4-turbo',
      medium: 'gpt-4',
      low: 'gpt-3.5-turbo'
    },
    'analytical': {
      high: 'gpt-4',
      medium: 'gpt-4',
      low: 'gpt-3.5-turbo'
    },
    'coding': {
      high: 'gpt-4-turbo',
      medium: 'gpt-4',
      low: 'gpt-3.5-turbo'
    },
    'vision': {
      high: 'gpt-4-vision-preview',
      medium: 'gpt-4-vision-preview',
      low: 'gpt-4-vision-preview'
    }
  };
  
  return models[task]?.[budget] || 'gpt-3.5-turbo';
}

// Usage
const model = selectModel('creative', 'high');
const response = await gpt.chat('Write a creative story', '', model);`}
            />

            <CodeBlock
              title="Token Estimation"
              code={`// Simple token estimation (rough approximation)
function estimateTokens(text) {
  // Rough estimate: ~4 characters per token for English
  return Math.ceil(text.length / 4);
}

function estimateCost(tokens, model) {
  const pricing = {
    'gpt-4-turbo': { input: 0.01, output: 0.03 }, // per 1K tokens
    'gpt-4': { input: 0.03, output: 0.06 },
    'gpt-3.5-turbo': { input: 0.002, output: 0.002 }
  };
  
  const rates = pricing[model] || pricing['gpt-3.5-turbo'];
  return {
    input: (tokens / 1000) * rates.input,
    output: (tokens / 1000) * rates.output
  };
}

// Usage
const prompt = 'Explain quantum computing in detail';
const estimatedTokens = estimateTokens(prompt);
const estimatedCost = estimateCost(estimatedTokens, 'gpt-4');
console.log(\`Estimated cost: $\${estimatedCost.input.toFixed(4)}\`);`}
            />

            <InfoBox type="warning" title="Rate Limits & Costs">
              <ul className="list-disc list-inside space-y-1">
                <li>OpenAI has rate limits based on your tier and model</li>
                <li>Costs vary significantly between models (GPT-4 vs GPT-3.5)</li>
                <li>Vision models have higher costs and different rate limits</li>
                <li>Implement proper error handling for rate limit errors</li>
                <li>Monitor usage to avoid unexpected costs</li>
              </ul>
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Error Handling Specifics</h2>

            <CodeBlock
              title="OpenAI-Specific Error Handling"
              code={`try {
  const response = await gpt.chat('Hello world');
} catch (error) {
  if (error instanceof RateLimitError) {
    console.log('Rate limit hit. Headers:', error.details?.headers);
    // OpenAI provides retry-after header
    const retryAfter = error.retryAfter || 60;
    await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
  } else if (error.code === 'context_length_exceeded') {
    console.log('Message too long for model context window');
    // Truncate or split the message
  } else if (error.code === 'model_not_found') {
    console.log('Invalid model specified');
    // Fallback to default model
  } else if (error.code === 'insufficient_quota') {
    console.log('API quota exceeded');
    // Handle billing issues
  }
}`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Advanced Usage Examples</h2>

            <CodeBlock
              title="Conversation Manager"
              code={`class ConversationManager {
  constructor(gpt, maxTokens = 4000) {
    this.gpt = gpt;
    this.maxTokens = maxTokens;
    this.messages = [];
  }
  
  addMessage(role, content) {
    this.messages.push({ role, content });
    this.trimMessages();
  }
  
  async getResponse(model = 'gpt-4') {
    const response = await this.gpt.conversation(this.messages, model);
    this.addMessage('assistant', response);
    return response;
  }
  
  trimMessages() {
    // Keep system message and trim old messages if needed
    const systemMessage = this.messages.find(m => m.role === 'system');
    let totalTokens = 0;
    const keptMessages = [];
    
    // Add system message first
    if (systemMessage) {
      keptMessages.push(systemMessage);
      totalTokens += this.estimateTokens(systemMessage.content);
    }
    
    // Add messages from newest to oldest
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const message = this.messages[i];
      if (message.role === 'system') continue;
      
      const messageTokens = this.estimateTokens(message.content);
      if (totalTokens + messageTokens > this.maxTokens) break;
      
      keptMessages.unshift(message);
      totalTokens += messageTokens;
    }
    
    this.messages = keptMessages;
  }
  
  estimateTokens(text) {
    return Math.ceil(text.length / 4);
  }
  
  export() {
    return {
      messages: this.messages,
      timestamp: new Date().toISOString()
    };
  }
}

// Usage
const conversation = new ConversationManager(gpt);
conversation.addMessage('system', 'You are a helpful coding assistant.');
conversation.addMessage('user', 'How do I implement a binary tree?');

const response = await conversation.getResponse();
console.log(response);`}
            />

            <CodeBlock
              title="Batch Processing"
              code={`// Process multiple prompts with rate limiting
async function batchProcess(prompts, options = {}) {
  const {
    batchSize = 5,
    delayMs = 1000,
    model = 'gpt-3.5-turbo',
    maxRetries = 3
  } = options;
  
  const results = [];
  
  for (let i = 0; i < prompts.length; i += batchSize) {
    const batch = prompts.slice(i, i + batchSize);
    
    const batchPromises = batch.map(async (prompt, index) => {
      let attempts = 0;
      
      while (attempts < maxRetries) {
        try {
          const response = await gpt.chat(prompt.message, prompt.system, model);
          return { 
            index: i + index,
            prompt: prompt.message,
            response,
            success: true 
          };
        } catch (error) {
          attempts++;
          if (error instanceof RateLimitError && attempts < maxRetries) {
            const delay = Math.min(error.retryAfter * 1000, 60000);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }
          return { 
            index: i + index,
            prompt: prompt.message,
            error: error.message,
            success: false 
          };
        }
      }
    });
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // Delay between batches
    if (i + batchSize < prompts.length) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
    
    console.log(\`Processed batch \${Math.floor(i / batchSize) + 1}/\${Math.ceil(prompts.length / batchSize)}\`);
  }
  
  return results;
}

// Usage
const prompts = [
  { message: 'Explain photosynthesis', system: 'You are a biology teacher' },
  { message: 'What is calculus?', system: 'You are a math tutor' },
  { message: 'How do computers work?', system: 'You are a tech expert' }
];

const results = await batchProcess(prompts, {
  batchSize: 2,
  delayMs: 2000,
  model: 'gpt-4'
});

console.log(\`Processed \${results.length} prompts\`);
console.log(\`Success rate: \${results.filter(r => r.success).length / results.length * 100}%\`);`}
            />

            <InfoBox type="success" title="Best Practices">
              <ul className="list-disc list-inside space-y-1">
                <li>Use appropriate models for different tasks (GPT-4 for complex reasoning, GPT-3.5 for simple tasks)</li>
                <li>Implement conversation management for multi-turn chats</li>
                <li>Handle rate limits gracefully with exponential backoff</li>
                <li>Monitor token usage and costs</li>
                <li>Use streaming for real-time applications</li>
                <li>Implement proper error handling for all edge cases</li>
                <li>Cache responses when appropriate to reduce costs</li>
              </ul>
            </InfoBox>
          </div>
        );

      case 'spotify':
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <Music className="inline h-10 w-10 mr-3 text-green-500" />
              Spotify API
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete Spotify Web API wrapper with OAuth2 authentication, playlist management, search, player controls, and music analytics.
            </p>

            <InfoBox type="info" title="Spotify App Required">
              Create a Spotify app at <a href="https://developer.spotify.com/dashboard/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Spotify Developer Dashboard</a> to get your credentials.
            </InfoBox>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Constructor & Authentication</h2>
            
            <Method
              name="new SpotifyAPI(options)"
              description="Creates a new Spotify API client instance."
              parameters={[
                {
                  name: "options",
                  type: "SpotifyAuthOptions",
                  description: "Configuration object for the Spotify client",
                  required: true
                },
                {
                  name: "options.clientId",
                  type: "string",
                  description: "Your Spotify app client ID",
                  required: true
                },
                {
                  name: "options.clientSecret",
                  type: "string",
                  description: "Your Spotify app client secret",
                  required: true
                },
                {
                  name: "options.redirectUri",
                  type: "string",
                  description: "OAuth redirect URI configured in your app",
                  required: false
                }
              ]}
              returns={{
                type: "SpotifyAPI",
                description: "A new Spotify API client instance"
              }}
              example={`const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback'
});`}
            />

            <Method
              name="getAuthorizationUrl(scopes, state?)"
              description="Generate OAuth authorization URL for user consent."
              parameters={[
                {
                  name: "scopes",
                  type: "string[]",
                  description: "Array of permission scopes to request",
                  required: true
                },
                {
                  name: "state",
                  type: "string",
                  description: "Optional state parameter for security",
                  required: false
                }
              ]}
              returns={{
                type: "string",
                description: "Authorization URL to redirect user to"
              }}
              example={`const authUrl = spotify.getAuthorizationUrl([
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-modify-public',
  'user-read-playback-state',
  'user-modify-playback-state'
], 'random-state-string');

// Redirect user to authUrl
res.redirect(authUrl);`}
            />

            <Method
              name="exchangeCode(code)"
              description="Exchange authorization code for access tokens."
              parameters={[
                {
                  name: "code",
                  type: "string",
                  description: "Authorization code from callback",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<void>",
                description: "Sets internal tokens for authenticated requests"
              }}
              example={`// In your callback route
app.get('/callback', async (req, res) => {
  const { code, error, state } = req.query;
  
  if (error) {
    return res.status(400).send('Authorization failed');
  }
  
  try {
    await spotify.exchangeCode(code);
    res.send('Authorization successful!');
  } catch (error) {
    res.status(400).send('Token exchange failed');
  }
});`}
              throws={[
                "AuthenticationError - Invalid authorization code",
                "ValidationError - Missing redirect URI"
              ]}
            />

            <Method
              name="setAccessToken(token, expiresIn, refreshToken?)"
              description="Manually set access token (for existing tokens)."
              parameters={[
                {
                  name: "token",
                  type: "string",
                  description: "Access token",
                  required: true
                },
                {
                  name: "expiresIn",
                  type: "number",
                  description: "Token expiry time in seconds",
                  required: true
                },
                {
                  name: "refreshToken",
                  type: "string",
                  description: "Refresh token for automatic renewal",
                  required: false
                }
              ]}
              returns={{
                type: "void",
                description: "Sets internal authentication state"
              }}
              example={`// Set tokens from database
const userTokens = await getUserTokens(userId);
spotify.setAccessToken(
  userTokens.accessToken,
  userTokens.expiresIn,
  userTokens.refreshToken
);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Profile Methods</h2>

            <Method
              name="getCurrentUser()"
              description="Get the current user's profile information."
              returns={{
                type: "Promise<SpotifyUser>",
                description: "Current user's profile data"
              }}
              example={`const user = await spotify.getCurrentUser();
console.log(\`Welcome, \${user.display_name}!\`);
console.log(\`Followers: \${user.followers.total}\`);
console.log(\`Country: \${user.country}\`);
console.log(\`Subscription: \${user.product}\`); // free, premium
console.log(\`Profile Image: \${user.images[0]?.url}\`);`}
              throws={[
                "AuthenticationError - Invalid or expired token",
                "PermissionError - Missing user-read-private scope"
              ]}
            />

            <Method
              name="getUser(userId)"
              description="Get another user's public profile information."
              parameters={[
                {
                  name: "userId",
                  type: "string",
                  description: "Spotify user ID",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<SpotifyUser>",
                description: "User's public profile data"
              }}
              example={`const user = await spotify.getUser('spotify');
console.log(\`User: \${user.display_name}\`);
console.log(\`Followers: \${user.followers.total}\`);
console.log(\`Public playlists: \${user.public_playlists?.total || 'Unknown'}\`);`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Music Catalog Methods</h2>

            <Method
              name="search(query, types, params?)"
              description="Search Spotify's catalog for tracks, artists, albums, and playlists."
              parameters={[
                {
                  name: "query",
                  type: "string",
                  description: "Search query string",
                  required: true
                },
                {
                  name: "types",
                  type: "('track' | 'artist' | 'album' | 'playlist')[]",
                  description: "Types of items to search for",
                  required: true
                },
                {
                  name: "params",
                  type: "SearchParams",
                  description: "Additional search parameters",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<SearchResults>",
                description: "Search results containing requested types"
              }}
              example={`// Basic search
const results = await spotify.search(
  'Never Gonna Give You Up',
  ['track', 'artist'],
  { limit: 10, market: 'US' }
);

console.log('Tracks found:', results.tracks.items.length);
console.log('Artists found:', results.artists.items.length);

// Advanced search with filters
const rockTracks = await spotify.search(
  'genre:rock year:2020-2023',
  ['track'],
  { limit: 50, market: 'US' }
);

// Search for specific artist
const beatlesTracks = await spotify.search(
  'artist:Beatles album:Abbey Road',
  ['track'],
  { limit: 20 }
);

beatlesTracks.tracks.items.forEach(track => {
  console.log(\`\${track.name} - \${track.artists[0].name}\`);
  console.log(\`Album: \${track.album.name}\`);
  console.log(\`Popularity: \${track.popularity}/100\`);
});`}
            />

            <Method
              name="getTrack(trackId)"
              description="Get detailed information about a specific track."
              parameters={[
                {
                  name: "trackId",
                  type: "string",
                  description: "Spotify track ID",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<Track>",
                description: "Detailed track information"
              }}
              example={`const track = await spotify.getTrack('4iV5W9uYEdYUVa79Axb7Rh');
console.log(\`Track: \${track.name}\`);
console.log(\`Artist: \${track.artists[0].name}\`);
console.log(\`Album: \${track.album.name}\`);
console.log(\`Duration: \${Math.floor(track.duration_ms / 1000)}s\`);
console.log(\`Explicit: \${track.explicit}\`);
console.log(\`Preview: \${track.preview_url}\`);`}
            />

            <Method
              name="getTracks(trackIds)"
              description="Get detailed information about multiple tracks."
              parameters={[
                {
                  name: "trackIds",
                  type: "string[]",
                  description: "Array of Spotify track IDs (max 50)",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<TracksResponse>",
                description: "Array of track information"
              }}
              example={`const tracks = await spotify.getTracks([
  '4iV5W9uYEdYUVa79Axb7Rh',
  '1Je1IMUlBXcx1Fz0WE7oPT',
  '6y0igZArWVi6Iz0rj35c1Y'
]);

tracks.tracks.forEach(track => {
  if (track) { // Can be null if track not found
    console.log(\`\${track.name} by \${track.artists[0].name}\`);
  }
});`}
            />

            <Method
              name="getArtist(artistId)"
              description="Get detailed information about an artist."
              parameters={[
                {
                  name: "artistId",
                  type: "string",
                  description: "Spotify artist ID",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<Artist>",
                description: "Detailed artist information"
              }}
              example={`const artist = await spotify.getArtist('4NHQUGzhtTLFvgF5SZesLK');
console.log(\`Artist: \${artist.name}\`);
console.log(\`Genres: \${artist.genres.join(', ')}\`);
console.log(\`Followers: \${artist.followers.total.toLocaleString()}\`);
console.log(\`Popularity: \${artist.popularity}/100\`);
console.log(\`Image: \${artist.images[0]?.url}\`);`}
            />

            <Method
              name="getArtistTopTracks(artistId, market?)"
              description="Get an artist's top tracks in a specific market."
              parameters={[
                {
                  name: "artistId",
                  type: "string",
                  description: "Spotify artist ID",
                  required: true
                },
                {
                  name: "market",
                  type: "string",
                  description: "ISO country code",
                  required: false,
                  default: "US"
                }
              ]}
              returns={{
                type: "Promise<TracksResponse>",
                description: "Artist's top tracks"
              }}
              example={`const topTracks = await spotify.getArtistTopTracks(
  '4NHQUGzhtTLFvgF5SZesLK', // Tina Turner
  'US'
);

console.log('Top tracks:');
topTracks.tracks.forEach((track, index) => {
  console.log(\`\${index + 1}. \${track.name}\`);
  console.log(\`   Album: \${track.album.name}\`);
  console.log(\`   Popularity: \${track.popularity}/100\`);
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Playlist Methods</h2>

            <Method
              name="createPlaylist(userId, name, isPublic?, description?)"
              description="Create a new playlist for a user."
              parameters={[
                {
                  name: "userId",
                  type: "string",
                  description: "Spotify user ID",
                  required: true
                },
                {
                  name: "name",
                  type: "string",
                  description: "Playlist name",
                  required: true
                },
                {
                  name: "isPublic",
                  type: "boolean",
                  description: "Whether playlist is public",
                  required: false,
                  default: "true"
                },
                {
                  name: "description",
                  type: "string",
                  description: "Playlist description",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<Playlist>",
                description: "Created playlist information"
              }}
              example={`const playlist = await spotify.createPlaylist(
  'username',
  'My Awesome Playlist',
  true,
  'A collection of my favorite tracks'
);

console.log(\`Created playlist: \${playlist.name}\`);
console.log(\`Playlist ID: \${playlist.id}\`);
console.log(\`URL: \${playlist.external_urls.spotify}\`);`}
              throws={[
                "PermissionError - Missing playlist-modify-public/private scope",
                "ValidationError - Invalid playlist name"
              ]}
            />

            <Method
              name="getPlaylist(playlistId)"
              description="Get detailed information about a playlist."
              parameters={[
                {
                  name: "playlistId",
                  type: "string",
                  description: "Spotify playlist ID",
                  required: true
                }
              ]}
              returns={{
                type: "Promise<Playlist>",
                description: "Detailed playlist information"
              }}
              example={`const playlist = await spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M');
console.log(\`Playlist: \${playlist.name}\`);
console.log(\`Description: \${playlist.description}\`);
console.log(\`Tracks: \${playlist.tracks.total}\`);
console.log(\`Followers: \${playlist.followers.total}\`);
console.log(\`Owner: \${playlist.owner.display_name}\`);
console.log(\`Public: \${playlist.public}\`);`}
            />

            <Method
              name="addTracksToPlaylist(playlistId, trackUris, position?)"
              description="Add tracks to a playlist."
              parameters={[
                {
                  name: "playlistId",
                  type: "string",
                  description: "Spotify playlist ID",
                  required: true
                },
                {
                  name: "trackUris",
                  type: "string[]",
                  description: "Array of Spotify track URIs (max 100)",
                  required: true
                },
                {
                  name: "position",
                  type: "number",
                  description: "Position to insert tracks",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<{ snapshot_id: string }>",
                description: "Playlist snapshot ID after modification"
              }}
              example={`// Add tracks to end of playlist
const result = await spotify.addTracksToPlaylist(
  'playlist_id',
  [
    'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
    'spotify:track:1Je1IMUlBXcx1Fz0WE7oPT'
  ]
);

console.log('Playlist updated, snapshot:', result.snapshot_id);

// Add tracks at specific position
await spotify.addTracksToPlaylist(
  'playlist_id',
  ['spotify:track:6y0igZArWVi6Iz0rj35c1Y'],
  0 // Add at beginning
);`}
              throws={[
                "PermissionError - Cannot modify playlist",
                "ValidationError - Invalid track URIs or too many tracks"
              ]}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Player Control Methods</h2>

            <InfoBox type="warning" title="Premium Required">
              Player control methods require Spotify Premium subscription and active device.
            </InfoBox>

            <Method
              name="getCurrentlyPlaying()"
              description="Get information about the user's currently playing track."
              returns={{
                type: "Promise<CurrentlyPlaying | null>",
                description: "Currently playing track info or null if nothing playing"
              }}
              example={`const current = await spotify.getCurrentlyPlaying();

if (current && current.is_playing) {
  console.log(\`Now playing: \${current.item.name}\`);
  console.log(\`Artist: \${current.item.artists[0].name}\`);
  console.log(\`Album: \${current.item.album.name}\`);
  console.log(\`Progress: \${current.progress_ms}ms / \${current.item.duration_ms}ms\`);
  console.log(\`Device: \${current.device.name}\`);
  console.log(\`Volume: \${current.device.volume_percent}%\`);
} else {
  console.log('Nothing currently playing');
}`}
              throws={[
                "PermissionError - Missing user-read-currently-playing scope",
                "ServiceUnreachableError - No active device"
              ]}
            />

            <Method
              name="getPlaybackState()"
              description="Get full playback state including queue and context."
              returns={{
                type: "Promise<PlaybackState | null>",
                description: "Complete playback state or null if no active session"
              }}
              example={`const state = await spotify.getPlaybackState();

if (state) {
  console.log(\`Device: \${state.device.name} (\${state.device.type})\`);
  console.log(\`Volume: \${state.device.volume_percent}%\`);
  console.log(\`Shuffle: \${state.shuffle_state}\`);
  console.log(\`Repeat: \${state.repeat_state}\`); // off, track, context
  console.log(\`Playing: \${state.is_playing}\`);
  
  if (state.context) {
    console.log(\`Context: \${state.context.type} - \${state.context.uri}\`);
  }
} else {
  console.log('No active playback session');
}`}
            />

            <Method
              name="controlPlayback(action, deviceId?)"
              description="Control playback (play, pause, next, previous)."
              parameters={[
                {
                  name: "action",
                  type: "'play' | 'pause' | 'next' | 'previous'",
                  description: "Playback action to perform",
                  required: true
                },
                {
                  name: "deviceId",
                  type: "string",
                  description: "Specific device to control",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<void>",
                description: "Action completed"
              }}
              example={`// Basic playback control
await spotify.controlPlayback('play');
await spotify.controlPlayback('pause');
await spotify.controlPlayback('next');
await spotify.controlPlayback('previous');

// Control specific device
const devices = await spotify.getDevices();
const phoneDevice = devices.devices.find(d => d.type === 'Smartphone');
if (phoneDevice) {
  await spotify.controlPlayback('play', phoneDevice.id);
}`}
              throws={[
                "PermissionError - Missing user-modify-playback-state scope",
                "ServiceUnreachableError - No active device",
                "ValidationError - Invalid action"
              ]}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Recommendations</h2>

            <Method
              name="getRecommendations(params)"
              description="Get track recommendations based on seeds and audio features."
              parameters={[
                {
                  name: "params",
                  type: "RecommendationParams",
                  description: "Recommendation parameters",
                  required: true
                },
                {
                  name: "params.seed_artists",
                  type: "string[]",
                  description: "Artist IDs for seed (max 5 total seeds)",
                  required: false
                },
                {
                  name: "params.seed_tracks",
                  type: "string[]",
                  description: "Track IDs for seed (max 5 total seeds)",
                  required: false
                },
                {
                  name: "params.seed_genres",
                  type: "string[]",
                  description: "Genre names for seed (max 5 total seeds)",
                  required: false
                },
                {
                  name: "params.limit",
                  type: "number",
                  description: "Number of recommendations (1-100)",
                  required: false,
                  default: "20"
                }
              ]}
              returns={{
                type: "Promise<RecommendationsResponse>",
                description: "Recommended tracks with seed information"
              }}
              example={`// Get recommendations based on artists and audio features
const recommendations = await spotify.getRecommendations({
  seed_artists: ['4NHQUGzhtTLFvgF5SZesLK'], // Tina Turner
  seed_genres: ['rock', 'pop'],
  limit: 10,
  target_energy: 0.8,
  target_danceability: 0.7,
  min_popularity: 30
});

console.log('Recommended tracks:');
recommendations.tracks.forEach((track, index) => {
  console.log(\`\${index + 1}. \${track.name} by \${track.artists[0].name}\`);
  console.log(\`   Popularity: \${track.popularity}/100\`);
  console.log(\`   Preview: \${track.preview_url || 'No preview'}\`);
});

// Audio feature based recommendations
const energeticTracks = await spotify.getRecommendations({
  seed_genres: ['electronic', 'dance'],
  target_energy: 0.9,
  target_valence: 0.8, // Positivity
  target_tempo: 128,
  min_popularity: 50,
  limit: 20
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">User Library Methods</h2>

            <Method
              name="getMyTopTracks(params?)"
              description="Get user's top tracks over different time periods."
              parameters={[
                {
                  name: "params",
                  type: "TopItemsParams",
                  description: "Parameters for top tracks",
                  required: false
                },
                {
                  name: "params.time_range",
                  type: "'short_term' | 'medium_term' | 'long_term'",
                  description: "Time period (4 weeks, 6 months, all time)",
                  required: false,
                  default: "medium_term"
                },
                {
                  name: "params.limit",
                  type: "number",
                  description: "Number of tracks (1-50)",
                  required: false,
                  default: "20"
                }
              ]}
              returns={{
                type: "Promise<PagingObject<Track>>",
                description: "User's top tracks"
              }}
              example={`// Get top tracks for different periods
const shortTerm = await spotify.getMyTopTracks({
  time_range: 'short_term', // Last 4 weeks
  limit: 10
});

const allTime = await spotify.getMyTopTracks({
  time_range: 'long_term', // All time
  limit: 50
});

console.log('Your top tracks (last 4 weeks):');
shortTerm.items.forEach((track, index) => {
  console.log(\`\${index + 1}. \${track.name} - \${track.artists[0].name}\`);
});

console.log('\\nYour all-time favorites:');
allTime.items.slice(0, 5).forEach((track, index) => {
  console.log(\`\${index + 1}. \${track.name} - \${track.artists[0].name}\`);
});`}
              throws={[
                "PermissionError - Missing user-top-read scope"
              ]}
            />

            <Method
              name="getMyTopArtists(params?)"
              description="Get user's top artists over different time periods."
              parameters={[
                {
                  name: "params",
                  type: "TopItemsParams",
                  description: "Parameters for top artists",
                  required: false
                }
              ]}
              returns={{
                type: "Promise<PagingObject<Artist>>",
                description: "User's top artists"
              }}
              example={`const topArtists = await spotify.getMyTopArtists({
  time_range: 'medium_term', // Last 6 months
  limit: 20
});

console.log('Your top artists:');
topArtists.items.forEach((artist, index) => {
  console.log(\`\${index + 1}. \${artist.name}\`);
  console.log(\`   Genres: \${artist.genres.slice(0, 3).join(', ')}\`);
  console.log(\`   Followers: \${artist.followers.total.toLocaleString()}\`);
});`}
            />

            <h2 className="text-2xl font-semibold mb-4 mt-8">Advanced Usage Examples</h2>

            <CodeBlock
              title="Music Discovery Bot"
              code={`class MusicDiscoveryBot {
  constructor(spotify) {
    this.spotify = spotify;
  }
  
  async discoverNewMusic(userId, preferences = {}) {
    try {
      // Get user's top artists and tracks as seeds
      const [topArtists, topTracks] = await Promise.all([
        this.spotify.getMyTopArtists({ limit: 5 }),
        this.spotify.getMyTopTracks({ limit: 5 })
      ]);
      
      // Extract IDs for recommendations
      const seedArtists = topArtists.items.slice(0, 2).map(a => a.id);
      const seedTracks = topTracks.items.slice(0, 2).map(t => t.id);
      
      // Get recommendations with user preferences
      const recommendations = await this.spotify.getRecommendations({
        seed_artists: seedArtists,
        seed_tracks: seedTracks,
        limit: 30,
        target_popularity: preferences.popularity || 50,
        target_energy: preferences.energy || 0.7,
        target_danceability: preferences.danceability || 0.6
      });
      
      // Filter out tracks user already knows
      const newTracks = await this.filterKnownTracks(
        recommendations.tracks,
        userId
      );
      
      return {
        recommendations: newTracks.slice(0, 10),
        totalFound: newTracks.length,
        basedOn: {
          artists: topArtists.items.slice(0, 2).map(a => a.name),
          tracks: topTracks.items.slice(0, 2).map(t => t.name)
        }
      };
    } catch (error) {
      console.error('Discovery error:', error);
      throw error;
    }
  }
  
  async filterKnownTracks(tracks, userId) {
    // This would typically check against user's saved tracks
    // For demo, we'll just return all tracks
    return tracks;
  }
  
  async createDiscoveryPlaylist(userId, tracks, name) {
    try {
      // Create new playlist
      const playlist = await this.spotify.createPlaylist(
        userId,
        name || \`Discovery \${new Date().toLocaleDateString()}\`,
        false, // Private
        'AI-generated music discovery playlist'
      );
      
      // Add tracks to playlist
      const trackUris = tracks.map(track => \`spotify:track:\${track.id}\`);
      await this.spotify.addTracksToPlaylist(playlist.id, trackUris);
      
      return {
        playlist,
        tracksAdded: tracks.length,
        url: playlist.external_urls.spotify
      };
    } catch (error) {
      console.error('Playlist creation error:', error);
      throw error;
    }
  }
}

// Usage
const bot = new MusicDiscoveryBot(spotify);

const discovery = await bot.discoverNewMusic('user123', {
  energy: 0.8,
  danceability: 0.7,
  popularity: 60
});

console.log('Found', discovery.totalFound, 'new tracks');
console.log('Based on artists:', discovery.basedOn.artists.join(', '));

const playlist = await bot.createDiscoveryPlaylist(
  'user123',
  discovery.recommendations,
  'Weekly Discovery'
);

console.log('Created playlist:', playlist.url);`}
            />

            <InfoBox type="success" title="Best Practices">
              <ul className="list-disc list-inside space-y-1">
                <li>Always handle OAuth flow properly with state parameter</li>
                <li>Store and refresh tokens securely</li>
                <li>Respect rate limits (typically 100 requests per minute)</li>
                <li>Use appropriate scopes - only request what you need</li>
                <li>Handle premium-required features gracefully</li>
                <li>Cache expensive operations like search results</li>
                <li>Implement proper error handling for network issues</li>
              </ul>
            </InfoBox>
          </div>
        );

      // Add more cases for other APIs here...
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Select a topic from the sidebar to view detailed documentation and examples.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <MessageSquare className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">ChatGPT/OpenAI</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Complete API wrapper for OpenAI with streaming, function calling, and vision support.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Music className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Spotify API</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  OAuth authentication, playlist management, search, and player controls.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Stripe API</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Complete payment processing with subscriptions, webhooks, and analytics.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Slack className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Slack API</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Team communication with messages, files, channels, and slash commands.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Cloud className="h-8 w-8 text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vercel API</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Deployment automation, project management, and environment variables.
                </p>
              </div>
              
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Database className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">AWS S3</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Object storage with upload, download, and advanced S3 operations.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold flex items-center">
          <Book className="h-6 w-6 mr-2 text-blue-600" />
          macro_api docs
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block fixed lg:relative inset-y-0 left-0 z-50 lg:z-0`}>
          <Sidebar />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}