'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Github, ArrowRight, Zap, Database, Shield, Copy, Check, Sparkles } from 'lucide-react';
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20">
      {/* Enhanced background with better mobile optimization */}
      <div className="absolute inset-0">
        {/* Animated orbs - better responsive sizes and positioning */}
        <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 lg:-top-40 lg:-right-32 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 lg:-bottom-40 lg:-left-32 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-10 blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
        
        {/* Enhanced grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div className="relative z-10 container-responsive">
        <div className="text-center max-w-6xl mx-auto pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
          {/* Enhanced floating badge with urgency */}
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8 animate-slide-up">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              🔥 Join 10,000+ developers building faster
            </span>
          </div>

          {/* Enhanced main heading with power words */}
          <h1 className="text-responsive-xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-[0.9] tracking-tight animate-fade-in">
            <span className="block text-gradient-secondary mb-2">
              Stop Reinventing.
            </span>
            <span className="block text-gradient mb-2">
              Start Shipping.
            </span>
            <span className="block text-gradient-secondary">
              Build Faster.
            </span>
          </h1>

          {/* Enhanced subtitle with compelling benefits */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-4">
              <span className="font-semibold text-foreground">Skip weeks of API integration.</span> Get production-ready code in minutes with the most comprehensive TypeScript library for API integrations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-responsive-xs font-medium text-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                <span>10+ APIs Ready</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                <span>Type-Safe</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
                <span>Production Ready</span>
              </div>
            </div>
          </div>

          {/* Enhanced install command with urgency and social proof */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 p-4 sm:p-6 relative overflow-hidden">
              {/* Urgency badge */}
              <div className="absolute top-2 right-2 glass px-2 py-1 rounded-full text-xs font-medium text-green-600 border border-green-500/20 animate-pulse">
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1" />
                  Live & Ready
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <span className="text-muted-foreground text-xs sm:text-sm font-mono">Get started in 30 seconds</span>
                </div>
                <button
                  onClick={copyInstallCommand}
                  className="glass-button text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2 hover:scale-110 px-2 sm:px-3 py-1 sm:py-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-sm sm:text-base lg:text-lg text-left bg-gray-900 rounded-xl p-3 sm:p-4">
                <span className="text-primary mr-2">$</span>
                <span className="text-green-600 dark:text-green-400">npm install macro_api</span>
              </div>
              
              {/* Social proof */}
              <div className="mt-3 flex items-center justify-center text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border border-white" />
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border border-white" />
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border border-white" />
                  </div>
                  <span>Downloaded {stats.loading ? '10K+' : formatDownloads(stats.npm?.downloads || 10000)} times this week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with urgency */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/documentation" 
              className="w-full sm:w-auto btn btn-primary group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2 relative z-10" />
              <span className="relative z-10">Start Building Now</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a 
              href="https://github.com/cptcr/macro_api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn btn-secondary group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span>See Live Examples</span>
              <div className="ml-2 glass px-2 py-0.5 rounded-full text-xs sm:text-sm border border-primary/20">
                {stats.loading ? '1.2K+' : formatNumber(stats.github?.stargazers_count || 1200)} ⭐
              </div>
            </a>
          </div>

          {/* Enhanced stats with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 sm:h-8 w-16 mx-auto rounded-xl" />
                ) : stats.github ? (
                  formatNumber(stats.github.stargazers_count)
                ) : (
                  '1.2K+'
                )}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">GitHub Stars</div>
            </div>
            <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stats.loading ? (
                  <div className="animate-pulse bg-muted h-6 sm:h-8 w-16 mx-auto rounded-xl" />
                ) : stats.npm ? (
                  formatDownloads(stats.npm.downloads)
                ) : (
                  '10K+'
                )}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">Weekly Downloads</div>
            </div>
            <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6 sm:col-span-3 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">API Services</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Code Example with perfect responsive design */}
        <div className="max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="glass-card group hover:scale-[1.01] transition-all duration-700 p-0 overflow-hidden">
            {/* Enhanced terminal header */}
            <div className="flex items-center justify-between p-4 sm:p-6 glass border-b border-white/10">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <span className="text-muted-foreground text-xs sm:text-sm font-mono">main.ts</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Database className="h-3 w-3" />
                <span className="hidden sm:inline">macro_api</span>
              </div>
            </div>
            
            {/* Enhanced code content with perfect mobile scaling */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 overflow-x-auto">
              <pre className="text-xs sm:text-sm lg:text-base leading-relaxed scrollbar-modern">
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
                  <span className="text-white"> = </span>
                  <span className="text-purple-400">new</span>
                  <span className="text-white"> </span>
                  <span className="text-yellow-300">ChatGPT</span>
                  <span className="text-white">({'{ '}</span>
                  <br className="block sm:hidden" />
                  <span className="text-blue-300">apiKey</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">process.env.OPENAI_API_KEY</span>
                  <span className="text-white"> {'});'}</span>
                  <br /><br />
                  
                  <span className="text-gray-500">// Generate AI response</span>
                  <br />
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> </span>
                  <span className="text-blue-300">response</span>
                  <span className="text-white"> = </span>
                  <span className="text-purple-400">await</span>
                  <span className="text-white"> </span>
                  <span className="text-blue-300">gpt</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">chat</span>
                  <span className="text-white">(</span>
                  <br />
                  <span className="text-white">  </span>
                  <span className="text-green-300">'Explain REST APIs'</span>
                  <br />
                  <span className="text-white">);</span>
                  <br /><br />
                  
                  <span className="text-gray-500">// Built-in error handling ✨</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Enhanced features highlight with perfect responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="glass-card text-center group hover:scale-105 transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6">
                <div className="glass rounded-2xl p-3 sm:p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Type Safe</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Complete TypeScript definitions for robust development
              </p>
            </div>
          </div>

          <div className="glass-card text-center group hover:scale-105 transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6">
                <div className="glass rounded-2xl p-3 sm:p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Production Ready</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Built-in error handling, retries, and circuit breakers
              </p>
            </div>
          </div>

          <div className="glass-card text-center group hover:scale-105 transition-all duration-500 relative md:col-span-3 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-4 sm:mb-6">
                <div className="glass rounded-2xl p-3 sm:p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Unified Interface</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Consistent patterns across all services for faster development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;