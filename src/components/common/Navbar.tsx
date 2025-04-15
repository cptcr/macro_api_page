'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Database, Menu, X, Github, Package } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#api-services', label: 'API Services' },
    { href: '/documentation', label: 'Documentation' },
  ];

  const isActive = (href: string): boolean => {
    if (href.startsWith('/#')) {
      return pathname === '/' && href !== '/';
    }
    return pathname === href;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Database className="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">
              macro_api
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/cptcr/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://npmjs.com/package/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="NPM"
              >
                <Package className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Database className="h-6 w-6 mr-2 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold">macro_api</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/cptcr/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://npmjs.com/package/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="NPM"
              >
                <Package className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;