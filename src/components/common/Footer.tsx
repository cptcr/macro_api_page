// src/components/common/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Database, 
  Github, 
  Package, 
  ExternalLink, 
  ArrowUpRight,
  Heart,
  Code,
  FileText,
  Zap,
  MessageSquare,
  Mail,
  Twitter,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Product',
      links: [
        { href: '/#features', label: 'Features', external: false },
        { href: '/#api-services', label: 'API Services', external: false },
        { href: '/documentation', label: 'Documentation', external: false },
        { href: '/documentation#getting-started', label: 'Quick Start', external: false }
      ]
    },
    {
      title: 'Developers',
      links: [
        { href: 'https://github.com/cptcr/macro_api', label: 'GitHub', external: true },
        { href: 'https://npmjs.com/package/macro_api', label: 'npm Package', external: true },
        { href: '/documentation#examples', label: 'Examples', external: false },
        { href: 'https://github.com/cptcr/macro_api/blob/main/CONTRIBUTING.md', label: 'Contributing', external: true }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: 'https://github.com/cptcr/macro_api/blob/main/README.md', label: 'Guide', external: true },
        { href: 'https://github.com/cptcr/macro_api/releases', label: 'Changelog', external: true },
        { href: 'https://github.com/cptcr/macro_api/issues', label: 'Support', external: true },
        { href: 'https://github.com/cptcr/macro_api/blob/main/LICENSE', label: 'License', external: true }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: 'https://github.com/cptcr', label: 'About', external: true },
        { href: 'mailto:support@macro-api.dev', label: 'Contact', external: true },
        { href: 'https://github.com/cptcr/macro_api/security', label: 'Security', external: true },
        { href: 'https://github.com/cptcr/macro_api/blob/main/PRIVACY.md', label: 'Privacy', external: true }
      ]
    }
  ];

  const socialLinks = [
    { href: 'https://github.com/cptcr/macro_api', icon: Github, label: 'GitHub' },
    { href: 'https://twitter.com/macro_api', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/company/macro-api', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:support@macro-api.dev', icon: Mail, label: 'Email' }
  ];

  const supportedApis = [
    'OpenAI', 'Spotify', 'Stripe', 'GitHub', 'Slack', 'Vercel'
  ];
  
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="py-16">
            {/* Top section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand section */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center group mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    macro_api
                  </span>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
                  The most comprehensive TypeScript/JavaScript library for API integrations. 
                  Simplify your development workflow with our unified interface.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">APIs</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">10+</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Github className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Stars</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">1.2k+</div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation sections */}
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported APIs showcase */}
            <div className="mb-12">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-4 text-center">
                Supported APIs
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {supportedApis.map((api) => (
                  <div
                    key={api}
                    className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400"
                  >
                    {api}
                  </div>
                ))}
                <div className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-sm text-blue-800 dark:text-blue-300 font-medium">
                  +4 more
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Get notified about new API integrations, features, and updates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-blue-200 mt-3">
                    No spam, unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>© {currentYear} macro_api. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                  <span>by developers, for developers</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="https://github.com/cptcr/macro_api/blob/main/PRIVACY.md"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="https://github.com/cptcr/macro_api/blob/main/TERMS.md"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Code className="h-4 w-4 mr-1" />
                  <span>Apache 2.0 License</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;