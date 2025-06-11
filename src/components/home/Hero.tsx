// src/components/home/Hero.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Github, ArrowRight, Zap, Database, Shield, Copy, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useRealtimeStats, formatNumber, formatDownloads } from '@/hooks/useRealtimeStats';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const stats = useRealtimeStats();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText('npm install macro_api');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3e%3cpath d='m40 40h-40v-1h40zm0-40v40h-1v-40z'/%3e%3c/g%3e%3c/svg%3e")`
        }} 
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
              Develop.
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Integrate.
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
              Ship.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            The most comprehensive TypeScript/JavaScript library for API integrations. 
            <br />
            <span className="font-semibold text-gray-800 dark:text-gray-300">
              One interface. Multiple services. Zero hassle.
            </span>
          </p>

          {/* Install command */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-black dark:bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <span className="text-gray-400 text-sm">Terminal</span>
                  </div>
                  <button
                    onClick={copyInstallCommand}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="mt-3 font-mono text-green-400">
                  <span className="text-blue-400">$</span> npm install macro_api
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              href="/documentation" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Code className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-4 w-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a 
              href="https://github.com/cptcr/macro_api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-600"
            >
              <Github className="h-5 w-5 mr-2" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-16 mx-auto rounded" />
                ) : stats.github ? (
                  formatNumber(stats.github.stargazers_count)
                ) : (
                  '1.2K+'
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-16 mx-auto rounded" />
                ) : stats.npm ? (
                  formatDownloads(stats.npm.downloads)
                ) : (
                  '10K+'
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Weekly Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">API Services</div>
            </div>
          </div>
        </div>
        
        {/* Code Example */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            
            {/* Code block */}
            <div className="relative bg-gray-900 dark:bg-black rounded-xl border border-gray-800 dark:border-gray-700 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-gray-300 text-sm font-mono">main.ts</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Database className="h-3 w-3" />
                  <span>macro_api</span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm leading-relaxed">
                  <code className="text-gray-100 font-mono">
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">{'{ ChatGPT, SpotifyAPI, StripeAPI }'}</span>
                    <span className="text-white"> </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-white"> </span>
                    <span className="text-green-300">'macro_api'</span>
                    <span className="text-gray-500">;</span>
                    <br /><br />
                    
                    <span className="text-gray-500">// Initialize clients with your API keys</span>
                    <br />
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">gpt</span>
                    <span className="text-white"> </span>
                    <span className="text-white">=</span>
                    <span className="text-white"> </span>
                    <span className="text-purple-400">new</span>
                    <span className="text-white"> </span>
                    <span className="text-yellow-300">ChatGPT</span>
                    <span className="text-white">({'{ '}</span>
                    <span className="text-blue-300">apiKey</span>
                    <span className="text-white">:</span>
                    <span className="text-white"> </span>
                    <span className="text-orange-300">process.env.OPENAI_API_KEY</span>
                    <span className="text-white"> </span>
                    <span className="text-white">{'});'}</span>
                    <br />
                    
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">spotify</span>
                    <span className="text-white"> </span>
                    <span className="text-white">=</span>
                    <span className="text-white"> </span>
                    <span className="text-purple-400">new</span>
                    <span className="text-white"> </span>
                    <span className="text-yellow-300">SpotifyAPI</span>
                    <span className="text-white">({'{ '}</span>
                    <br />
                    <span className="text-white">  </span>
                    <span className="text-blue-300">clientId</span>
                    <span className="text-white">:</span>
                    <span className="text-white"> </span>
                    <span className="text-orange-300">process.env.SPOTIFY_CLIENT_ID</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-white">  </span>
                    <span className="text-blue-300">clientSecret</span>
                    <span className="text-white">:</span>
                    <span className="text-white"> </span>
                    <span className="text-orange-300">process.env.SPOTIFY_CLIENT_SECRET</span>
                    <br />
                    <span className="text-white">{'});'}</span>
                    <br /><br />
                    
                    <span className="text-gray-500">// Generate AI response</span>
                    <br />
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">response</span>
                    <span className="text-white"> </span>
                    <span className="text-white">=</span>
                    <span className="text-white"> </span>
                    <span className="text-purple-400">await</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">gpt</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">chat</span>
                    <span className="text-white">(</span>
                    <br />
                    <span className="text-white">  </span>
                    <span className="text-green-300">'Explain REST APIs in simple terms'</span>
                    <span className="text-white">,</span>
                    <br />
                    <span className="text-white">  </span>
                    <span className="text-green-300">'You are a helpful programming tutor'</span>
                    <br />
                    <span className="text-white">);</span>
                    <br /><br />
                    
                    <span className="text-gray-500">// Search for music</span>
                    <br />
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">tracks</span>
                    <span className="text-white"> </span>
                    <span className="text-white">=</span>
                    <span className="text-white"> </span>
                    <span className="text-purple-400">await</span>
                    <span className="text-white"> </span>
                    <span className="text-blue-300">spotify</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">search</span>
                    <span className="text-white">(</span>
                    <span className="text-green-300">'Daft Punk'</span>
                    <span className="text-white">, [</span>
                    <span className="text-green-300">'track'</span>
                    <span className="text-white">], {'{ '}</span>
                    <span className="text-blue-300">limit</span>
                    <span className="text-white">:</span>
                    <span className="text-white"> </span>
                    <span className="text-orange-300">5</span>
                    <span className="text-white"> </span>
                    <span className="text-white">{'});'}</span>
                    <br /><br />
                    
                    <span className="text-gray-500">// All with built-in error handling and TypeScript support ✨</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Features highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Type Safe</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Built with TypeScript from the ground up with complete type definitions
                </p>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors duration-300">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Built-in error handling, retries, caching, and circuit breakers
                </p>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-green-300 dark:group-hover:border-green-600 transition-colors duration-300">
                <Database className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Unified Interface</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Consistent API patterns across all services for faster development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;