import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Brain, Play, Search, User, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, CheckCircle, ExternalLink } from 'lucide-react';

const DeepseekDocs: React.FC = () => {
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

  const basicSetupCode = `import { DeepSeek } from 'macro_api';

// Initialize the client
const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Generate code
async function generateCode() {
  try {
    const response = await deepseek.generateCode(
      'Create a TypeScript function to validate email addresses',
      {
        model: 'deepseek-coder-1.3b-instruct',
        temperature: 0.2,
        max_tokens: 500
      }
    );
    
    console.log('Generated code:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

  const chatCode = `// Simple chat with DeepSeek
async function chatWithDeepSeek() {
  const response = await deepseek.chat(
    'Explain how async/await works in JavaScript',
    'You are a helpful programming instructor'
  );
  
  console.log(response);
}

// Advanced chat completion
async function advancedChat() {
  const response = await deepseek.createChatCompletion({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: 'You are an expert software engineer specializing in TypeScript.'
      },
      {
        role: 'user',
        content: 'How do I implement a generic repository pattern in TypeScript?'
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  console.log(response.choices[0]?.message?.content);
}`;

  const features = [
    {
      name: 'Code Generation',
      description: 'Generate high-quality code in multiple languages',
      icon: <Code className="h-4 w-4" />
    },
    {
      name: 'Code Understanding',
      description: 'Analyze and explain existing code',
      icon: <Brain className="h-4 w-4" />
    },
    {
      name: 'Fast Response',
      description: 'Optimized for quick code generation',
      icon: <Zap className="h-4 w-4" />
    },
    {
      name: 'Multiple Models',
      description: 'Access different specialized models',
      icon: <Database className="h-4 w-4" />
    }
  ];

  const models = [
    {
      name: 'deepseek-chat',
      description: 'General-purpose conversational model for various tasks',
      color: 'purple'
    },
    {
      name: 'deepseek-coder-1.3b-instruct',
      description: 'Smaller, faster code generation model',
      color: 'blue'
    },
    {
      name: 'deepseek-coder-6.7b-instruct',
      description: 'Larger, more capable code generation model',
      color: 'green'
    },
    {
      name: 'deepseek-embedding',
      description: 'Text embedding model for similarity and search',
      color: 'orange'
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
            <Brain className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              AI Code Generation
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-purple-500 p-3 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                DeepSeek API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Advanced AI code generation and assistance with DeepSeek models
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            Advanced AI code generation and assistance with DeepSeek models. The DeepSeek API wrapper provides access to 
            DeepSeek's advanced AI models, specializing in code generation, programming assistance, and general language understanding.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Code Generation</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Chat Completion</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Embeddings</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Streaming</span>
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
              <TabsTrigger value="chat" className="glass-button">Chat</TabsTrigger>
              <TabsTrigger value="models" className="glass-button">Models</TabsTrigger>
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
                  <p className="text-muted-foreground mb-4">Initialize the DeepSeek API client for code generation</p>
                  <CodeBlock code={basicSetupCode} id="basic-setup" />
                </div>

                <div className="glass-card bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 dark:border-purple-400/20">
                  <div className="flex items-start space-x-4">
                    <Key className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">API Key Required</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
                        You need a valid API key from DeepSeek to use this service.
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
                      <span>Visit <a href="https://platform.deepseek.com" className="underline" target="_blank" rel="noopener noreferrer">DeepSeek Platform</a></span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Sign up or log in to your account</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Navigate to the API section in your dashboard</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Generate a new API key</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy the API key and store it securely</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Chat */}
            <TabsContent value="chat" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  Chat Completions
                </h3>
                <p className="text-muted-foreground mb-4">Use DeepSeek for programming assistance and code explanations</p>
                <CodeBlock code={chatCode} id="chat-examples" />
              </div>
            </TabsContent>

            {/* Models */}
            <TabsContent value="models" className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Available Models
                </h3>
                <div className="grid gap-4">
                  {models.map((model, index) => (
                    <div key={index} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-4 h-4 rounded-full bg-${model.color}-500 mt-2`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {model.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">{model.description}</p>
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
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Advanced Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Multi-language code generation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Code explanation and analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Streaming responses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Text embeddings</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Best Practices
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Use lower temperature for code</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Provide clear, detailed prompts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Use appropriate models</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      <span>Implement error handling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=chatgpt" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">ChatGPT/OpenAI API</h3>
                  <p className="text-muted-foreground text-sm mb-3">Explore other AI capabilities with OpenAI integration</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-purple-600" />
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

export default DeepseekDocs;