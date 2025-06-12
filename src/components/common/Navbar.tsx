'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Database,
  Menu,
  X,
  Github,
  Package,
  ExternalLink,
  Code,
  FileText,
  Zap,
  ChevronDown,
  Sparkles,
  Star,
  Shield,
  Users,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useRealtimeStats, formatNumber } from '@/hooks/useRealtimeStats';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();
  const stats = useRealtimeStats();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsResourcesOpen(false);
    };

    if (isResourcesOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isResourcesOpen]);

  const navLinks = [
    { href: '/#features', label: 'Features', external: false },
    { href: '/#api-services', label: 'Services', external: false },
    { href: '/documentation', label: 'Docs', external: false },
  ];

  const resourceLinks = [
    {
      href: 'https://github.com/cptcr/macro_api',
      label: 'GitHub Repository',
      description: 'View source code and contribute',
      icon: Github,
      external: true,
      badge: formatNumber(stats.github?.stargazers_count || 1200)
    },
    {
      href: 'https://npmjs.com/package/macro_api',
      label: 'NPM Package',
      description: 'Install and version information',
      icon: Package,
      external: true,
      badge: 'Latest'
    },
    {
      href: '/documentation',
      label: 'Documentation',
      description: 'Complete API reference',
      icon: FileText,
      external: false,
      badge: 'Updated'
    }
  ];

  const isActive = (href: string): boolean => {
    if (href.startsWith('/#')) {
      return pathname === '/' && href !== '/';
    }
    return pathname === href;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass backdrop-glass-strong py-2 shadow-lg shadow-black/5' 
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="container-responsive">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Enhanced Logo */}
            <Link href="/" className="group flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 scale-110" />
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-2.5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
              </div>
              <div className="ml-2 sm:ml-3 flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gradient leading-none">
                  macro_api
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground leading-none mt-0.5 hidden sm:block">
                  API Integration Library
                </span>
              </div>
            </Link>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`glass-nav px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/10 shadow-lg border border-primary/20'
                      : 'text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Enhanced Resources Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={`glass-nav px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                    isResourcesOpen ? 'bg-primary/10 text-primary border border-primary/20' : 'text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  Resources
                  <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 ml-1 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full mt-3 right-0 w-80 xl:w-96 glass rounded-3xl border border-white/20 py-4 animate-slide-up shadow-2xl">
                    {resourceLinks.map((resource, index) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target={resource.external ? '_blank' : undefined}
                        rel={resource.external ? 'noopener noreferrer' : undefined}
                        className="flex items-start px-6 py-4 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 group"
                        onClick={() => setIsResourcesOpen(false)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 p-2.5 glass rounded-2xl group-hover:scale-110 transition-all duration-300">
                          <resource.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">
                              {resource.label}
                            </span>
                            <div className="flex items-center space-x-2">
                              {resource.badge && (
                                <span className="glass px-2 py-0.5 rounded-full text-xs text-primary font-medium border border-primary/20">
                                  {resource.badge}
                                </span>
                              )}
                              {resource.external && (
                                <ExternalLink className="h-3 w-3 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                      </a>
                    ))}
                    
                    {/* Enhanced stats in dropdown */}
                    <div className="px-6 py-4 border-t border-white/10 mt-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Sparkles className="h-3 w-3 mr-1 text-primary" />
                          <span>10+ APIs</span>
                        </div>
                        <div className="flex items-center">
                          <Github className="h-3 w-3 mr-1" />
                          <span>
                            {stats.loading ? '...' : formatNumber(stats.github?.stargazers_count || 1200)} stars
                          </span>
                        </div>
                        <div className="glass px-2 py-0.5 rounded-full text-xs text-primary">
                          Production Ready
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Right side actions */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <a
                href="https://github.com/cptcr/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-nav p-2 xl:p-2.5 hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 xl:h-5 xl:w-5 group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <ThemeToggle />
              
              <Link 
                href="/documentation" 
                className="btn btn-primary text-xs xl:text-sm px-4 xl:px-6 py-2 xl:py-2.5 shadow-lg hover:shadow-xl"
              >
                <Code className="h-3 w-3 xl:h-4 xl:w-4 mr-2" />
                Get Started
              </Link>
            </div>
            
            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile menu with perfect responsive design */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="lg:hidden fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 glass rounded-3xl border border-white/20 z-50 animate-slide-up shadow-2xl max-h-[85vh] overflow-y-auto scrollbar-modern">
            <div className="p-4 sm:p-6">
              {/* Enhanced Navigation Links */}
              <div className="space-y-2 sm:space-y-3 mb-6">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-2">
                  Navigation
                </div>
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block glass-nav px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-foreground hover:bg-white/10 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Enhanced Resources Section */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4 px-2">
                  Resources
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {resourceLinks.map((resource, index) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center glass-nav px-4 py-3 transition-all duration-300 hover:scale-[1.02] group"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${(index + navLinks.length) * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 p-2 glass rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        <resource.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-medium text-foreground truncate">
                            {resource.label}
                          </span>
                          <div className="flex items-center space-x-2 ml-2">
                            {resource.badge && (
                              <span className="glass px-2 py-0.5 rounded-full text-xs text-primary font-medium border border-primary/20 flex-shrink-0">
                                {resource.badge}
                              </span>
                            )}
                            {resource.external && (
                              <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="mb-6">
                <Link
                  href="/documentation"
                  className="btn btn-primary w-full py-3 sm:py-4 text-base justify-center shadow-lg hover:shadow-xl font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Code className="h-5 w-5 mr-2" />
                  Get Started Now
                </Link>
              </div>

              {/* Enhanced Quick Stats */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4 text-center">
                  Project Stats
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="glass-card py-3 sm:py-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">10+</div>
                    <div className="text-xs text-muted-foreground">APIs</div>
                  </div>
                  <div className="glass-card py-3 sm:py-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">
                      {stats.loading ? '...' : formatNumber(stats.github?.stargazers_count || 1200)}
                    </div>
                    <div className="text-xs text-muted-foreground">Stars</div>
                  </div>
                  <div className="glass-card py-3 sm:py-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-1">
                      <Shield className="h-4 w-4 text-primary mr-1" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">MIT</div>
                    <div className="text-xs text-muted-foreground">License</div>
                  </div>
                </div>

                {/* Additional info */}
                <div className="mt-4 text-center">
                  <div className="glass rounded-full px-3 py-2 inline-flex items-center space-x-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Trusted by 10,000+ developers worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;