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
  Linkedin,
  Star,
  Users,
  Globe,
  Shield
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
    'OpenAI', 'Spotify', 'Stripe', 'GitHub', 'Slack', 'Vercel', 'PayPal', 'Notion'
  ];
  
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20" />
        
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-16 sm:-top-40 sm:-right-32 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-16 sm:-bottom-40 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-responsive py-12 sm:py-16 lg:py-20">
          {/* Newsletter Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="glass-card p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Stay Connected</span>
                </div>
                <h3 className="text-responsive-md font-bold mb-4 text-gradient">
                  Stay Updated with macro_api
                </h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                  Get notified about new API integrations, features, and updates. Join our community of developers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input-glass flex-1 text-sm sm:text-base"
                  />
                  <button className="btn btn-primary px-6 py-3 text-sm sm:text-base whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold text-gradient block">
                    macro_api
                  </span>
                  <span className="text-sm text-muted-foreground">
                    API Integration Library
                  </span>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                The most comprehensive TypeScript/JavaScript library for API integrations. 
                Simplify your development workflow with our unified interface.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground">APIs</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">10+</div>
                </div>
                <div className="glass-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-foreground">Stars</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">1.2k+</div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-nav p-2.5 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {footerSections.map((section, index) => (
                <div key={section.title} style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
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
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group text-sm"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
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
          <div className="mb-12 sm:mb-16">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6 text-center">
              Supported APIs
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {supportedApis.map((api, index) => (
                <div
                  key={api}
                  className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {api}
                </div>
              ))}
              <div className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-primary font-medium border border-primary/20 hover:scale-105 transition-all duration-300">
                +2 more
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 dark:border-white/10">
          <div className="container-responsive py-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                <span>© {currentYear} macro_api. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
                  <span>by developers, for developers</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 text-sm">
                <Link 
                  href="https://github.com/cptcr/macro_api/blob/main/PRIVACY.md"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="https://github.com/cptcr/macro_api/blob/main/TERMS.md"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <div className="flex items-center text-muted-foreground">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>MIT License</span>
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