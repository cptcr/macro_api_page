// src/components/common/Navbar.tsx
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
  ChevronDown
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
      external: true
    },
    {
      href: 'https://npmjs.com/package/macro_api',
      label: 'NPM Package',
      description: 'Install and version information',
      icon: Package,
      external: true
    },
    {
      href: '/documentation',
      label: 'Documentation',
      description: 'Complete API reference',
      icon: FileText,
      external: false
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Database className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                macro_api
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Resources Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full mt-2 right-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 animate-in slide-in-from-top-2 duration-200">
                    {resourceLinks.map((resource) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target={resource.external ? '_blank' : undefined}
                        rel={resource.external ? 'noopener noreferrer' : undefined}
                        className="flex items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
                          <resource.icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {resource.label}
                            </span>
                            {resource.external && (
                              <ExternalLink className="h-3 w-3 ml-1 text-gray-400" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {resource.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://github.com/cptcr/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <ThemeToggle />
              
              <Link 
                href="/documentation" 
                className="btn btn-primary px-4 py-2 text-sm"
              >
                <Code className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 animate-in slide-in-from-top duration-200">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
              {/* Navigation Links */}
              <div className="space-y-2 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Resources
                </h3>
                <div className="space-y-2">
                  {resourceLinks.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <resource.icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {resource.label}
                          </span>
                          {resource.external && (
                            <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {resource.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/documentation"
                className="btn btn-primary w-full py-3 text-base justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5 mr-2" />
                Get Started
              </Link>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    <span>10+ APIs</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    <span>
                      {stats.loading ? (
                        <div className="animate-pulse bg-gray-300 h-3 w-8 rounded inline-block" />
                      ) : stats.github ? (
                        `${formatNumber(stats.github.stargazers_count)} stars`
                      ) : (
                        '1.2k+ stars'
                      )}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    <span>Apache 2.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;