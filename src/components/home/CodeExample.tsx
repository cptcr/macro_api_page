// src/components/home/CodeExample.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, Play, Copy, Check, Code, Terminal, FileCode } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import codeExamples from '@/data/codeExamples';

const CodeExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typescript' | 'javascript'>('typescript');
  const [activeExample, setActiveExample] = useState(codeExamples[0].id);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string>('');
  const { resolvedTheme } = useTheme();
  
  const selectedExample = codeExamples.find(example => example.id === activeExample) || codeExamples[0];

  const copyCode = async () => {
    const code = activeTab === 'typescript' ? selectedExample.typescript : selectedExample.javascript;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateRun = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate running the code with realistic output
    setTimeout(() => {
      const outputs = {
        'basic-usage': '✅ macro_api initialized successfully!\n📦 ChatGPT client ready\n🎵 Spotify client ready\n💳 Stripe client ready',
        'chatgpt-completion': '🤖 Generating response...\n✅ Response: "REST APIs are..."',
        'spotify-playlist': '🎵 Searching for tracks...\n✅ Found 5 tracks by Daft Punk\n📝 Playlist "My Awesome Playlist" created!',
        'stripe-subscription': '💳 Creating customer...\n✅ Customer created: cus_abc123\n📅 Subscription created with 14-day trial',
        'football-leagues': '⚽ Fetching leagues...\n✅ Found 15 leagues for England 2023\n📊 Standings loaded for Premier League'
      };
      setOutput(outputs[activeExample as keyof typeof outputs] || '✅ Code executed successfully!');
      setIsRunning(false);
    }, 2000);
  };

  const getLanguageColor = (lang: string) => {
    return {
      typescript: 'from-blue-500 to-blue-600',
      javascript: 'from-yellow-500 to-yellow-600'
    }[lang] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="py-24 px-4 md:px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Code className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Interactive Examples
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
            See It in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore real-world examples and see how easy it is to work with different APIs using macro_api.
          </p>
        </div>
        
        {/* Example selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {codeExamples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveExample(example.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeExample === example.id 
                  ? 'text-white shadow-lg transform scale-105' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {activeExample === example.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              )}
              <span className="relative z-10">{example.title}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Code Panel */}
          <div className="lg:col-span-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {selectedExample.title}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={simulateRun}
                      disabled={isRunning}
                      className="flex items-center space-x-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-xs font-medium rounded-md transition-colors duration-200"
                    >
                      <Play className={`h-3 w-3 ${isRunning ? 'animate-spin' : ''}`} />
                      <span>{isRunning ? 'Running...' : 'Run'}</span>
                    </button>
                    
                    <button
                      onClick={copyCode}
                      className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Language tabs */}
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  {(['typescript', 'javascript'] as const).map((lang) => (
                    <button 
                      key={lang}
                      className={`relative px-6 py-3 text-sm font-medium transition-all duration-200 ${
                        activeTab === lang 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                      }`}
                      onClick={() => setActiveTab(lang)}
                    >
                      {activeTab === lang && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${getLanguageColor(lang)}`} />
                      )}
                      <span className="relative z-10 flex items-center">
                        <FileCode className="h-4 w-4 mr-2" />
                        {lang === 'typescript' ? 'TypeScript' : 'JavaScript'}
                      </span>
                    </button>
                  ))}
                </div>
                
                {/* Code content */}
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-black text-gray-100 p-6 overflow-x-auto" style={{ minHeight: '400px' }}>
                    <pre className="text-sm leading-relaxed font-mono">
                      <code>
                        {activeTab === 'typescript' ? selectedExample.typescript : selectedExample.javascript}
                      </code>
                    </pre>
                  </div>
                  
                  {/* Line numbers */}
                  <div className="absolute left-0 top-0 p-6 text-gray-500 select-none pointer-events-none">
                    <pre className="text-sm leading-relaxed font-mono">
                      {(activeTab === 'typescript' ? selectedExample.typescript : selectedExample.javascript)
                        .split('\n')
                        .map((_, index) => (
                          <div key={index}>{(index + 1).toString().padStart(2, ' ')}</div>
                        ))}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                About This Example
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedExample.description}
              </p>
            </div>

            {/* Output */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Play className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                Output
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 min-h-[120px] font-mono text-sm">
                {isRunning ? (
                  <div className="flex items-center text-yellow-400">
                    <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full mr-2" />
                    Executing code...
                  </div>
                ) : output ? (
                  <div className="text-green-400 whitespace-pre-line">{output}</div>
                ) : (
                  <div className="text-gray-500 italic">Click "Run" to see the output</div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Install macro_api and start building with these powerful APIs today.
              </p>
              <div className="space-y-3">
                <div className="bg-black/20 rounded-lg p-3 font-mono text-sm">
                  $ npm install macro_api
                </div>
                <Link 
                  href="/documentation" 
                  className="block w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                >
                  View Full Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/documentation" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg group"
          >
            <span>Explore all examples in documentation</span>
            <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeExample;