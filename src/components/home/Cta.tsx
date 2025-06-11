// src/components/home/Cta.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Code, ArrowRight, Copy, Check, Github, Star, Zap, Users, Download } from 'lucide-react';
import { useRealtimeStats, formatNumber, formatDownloads } from '@/hooks/useRealtimeStats';

const Cta: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const stats = useRealtimeStats();

  const copyInstallCommand = async () => {
    await navigator.clipboard.writeText('npm install macro_api');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative py-24 px-4 md:px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23fff' fill-opacity='0.1' fill-rule='evenodd'%3e%3cpath d='m40 40h-40v-1h40zm0-40v40h-1v-40z'/%3e%3c/g%3e%3c/svg%3e")`
           }} />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Main content */}
        <div className="mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Zap className="h-4 w-4 mr-2 text-white" />
            <span className="text-sm font-medium text-white">
              Join 10,000+ developers
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Ship Faster?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop reinventing the wheel. Start building amazing applications with 
            <span className="font-semibold text-white"> macro_api </span>
            and focus on what makes your product unique.
          </p>
        </div>

        {/* Install command */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-white/80 text-sm">Get Started</span>
                </div>
                <button
                  onClick={copyInstallCommand}
                  className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <div className="text-left font-mono text-lg">
                <span className="text-blue-300">$</span>{' '}
                <span className="text-white">npm install macro_api</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link 
            href="/documentation" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Code className="h-5 w-5 mr-2 relative z-10" />
            <span className="relative z-10">Start Building</span>
            <ArrowRight className="h-4 w-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <a 
            href="https://github.com/cptcr/macro_api" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <Github className="h-5 w-5 mr-2" />
            <span>Star on GitHub</span>
            <div className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
              1.2k+
            </div>
          </a>
        </div>

        {/* Real-time Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Download className="h-6 w-6 text-blue-200 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stats.loading ? (
                  <div className="animate-pulse bg-white/20 h-8 w-16 rounded" />
                ) : stats.npm ? (
                  formatDownloads(stats.npm.downloads)
                ) : (
                  '10K+'
                )}
              </div>
            </div>
            <div className="text-blue-200 text-sm uppercase tracking-wide">Weekly Downloads</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-6 w-6 text-blue-200 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stats.loading ? (
                  <div className="animate-pulse bg-white/20 h-8 w-16 rounded" />
                ) : stats.github ? (
                  formatNumber(stats.github.stargazers_count)
                ) : (
                  '1.2K+'
                )}
              </div>
            </div>
            <div className="text-blue-200 text-sm uppercase tracking-wide">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-blue-200 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stats.loading ? (
                  <div className="animate-pulse bg-white/20 h-8 w-16 rounded" />
                ) : stats.github ? (
                  formatNumber(stats.github.forks_count * 10) // Estimate developers
                ) : (
                  '500+'
                )}
              </div>
            </div>
            <div className="text-blue-200 text-sm uppercase tracking-wide">Happy Developers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Code className="h-6 w-6 text-blue-200 mr-2" />
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
            </div>
            <div className="text-blue-200 text-sm uppercase tracking-wide">API Services</div>
          </div>
        </div>

        {/* Social proof */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Loved by Developers</h3>
            <p className="text-blue-100">See what the community is saying</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-sm mb-3">
                "macro_api saved me weeks of development time. The TypeScript support is incredible!"
              </p>
              <div className="text-blue-200 text-xs">@sarah_dev</div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-sm mb-3">
                "Finally, a unified interface for all my favorite APIs. Clean, simple, powerful."
              </p>
              <div className="text-blue-200 text-xs">@mike_codes</div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-sm mb-3">
                "The error handling and retry logic is production-ready out of the box."
              </p>
              <div className="text-blue-200 text-xs">@alex_builds</div>
            </div>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-12">
          <p className="text-blue-100 text-lg">
            Start building today • No vendor lock-in • Open source • MIT License
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;