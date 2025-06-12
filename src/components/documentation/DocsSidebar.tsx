// src/components/documentation/DocsSidebar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Download, 
  Code, 
  Shield, 
  Database, 
  Settings, 
  AlertCircle, 
  Layers, 
  MessageSquare, 
  Music, 
  CreditCard, 
  FileText, 
  Dribbble, 
  DollarSign, 
  Brain, 
  Target, 
  Youtube, 
  Github, 
  Slack, 
  Mail, 
  Cloud, 
  Container, 
  Server,
  ChevronRight,
  ChevronDown,
  Search,
  Wrench,
  Zap,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavigationItem[];
}

interface DocsSidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({
  activeSection,
  onSectionChange,
  searchTerm,
  onSearchChange
}) => {
  type ExpandedSections = {
    [key: string]: boolean;
  };
  
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    'quick-start': true,
    'core-infrastructure': true, // NEW SECTION
    'core-features': true,
    'api-classes': true,
    'production-apis': true
  });

  // UPDATED navigation with new Core Infrastructure section
  const navigation: NavigationSection[] = [
    {
      id: 'quick-start',
      title: 'Quick Start',
      icon: BookOpen,
      items: [
        { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
        { id: 'installation', title: 'Installation', icon: Download },
        { id: 'basic-usage', title: 'Basic Usage', icon: Code },
        { id: 'authentication', title: 'Authentication', icon: Shield }
      ]
    },
    {
      id: 'core-infrastructure', // NEW SECTION
      title: 'Core Infrastructure',
      icon: Wrench,
      items: [
        { id: 'core-cache', title: 'Cache System', icon: Database },
        { id: 'core-errors', title: 'Error Handling', icon: AlertCircle },
        { id: 'core-utils', title: 'Utilities & Entry Point', icon: Settings }
      ]
    },
    {
      id: 'core-features',
      title: 'Core Features', // Legacy section for backward compatibility
      icon: Layers,
      items: [
        { id: 'error-handling', title: 'Error Handling (Legacy)', icon: AlertCircle },
        { id: 'caching', title: 'Caching System (Legacy)', icon: Database },
        { id: 'retry-logic', title: 'Retry Logic', icon: RefreshCw },
        { id: 'circuit-breaker', title: 'Circuit Breaker', icon: Shield }
      ]
    },
    {
      id: 'api-classes',
      title: 'API Classes',
      icon: Layers,
      items: [
        { id: 'chatgpt', title: 'ChatGPT/OpenAI', icon: MessageSquare },
        { id: 'spotify', title: 'Spotify API', icon: Music },
        { id: 'stripe', title: 'Stripe API', icon: CreditCard },
        { id: 'notion', title: 'Notion API', icon: FileText },
        { id: 'football', title: 'Football API', icon: Dribbble },
        { id: 'paypal', title: 'PayPal API', icon: DollarSign },
        { id: 'deepseek', title: 'DeepSeek API', icon: Brain },
        { id: 'valorant', title: 'Valorant API', icon: Target },
        { id: 'youtube', title: 'YouTube Notifications', icon: Youtube },
        { id: 'github', title: 'GitHub API', icon: Github }
      ]
    },
    {
      id: 'production-apis',
      title: 'Production APIs',
      icon: Server,
      items: [
        { id: 'slack', title: 'Slack API', icon: Slack },
        { id: 'sendgrid', title: 'SendGrid API', icon: Mail },
        { id: 'vercel', title: 'Vercel API', icon: Cloud },
        { id: 's3', title: 'AWS S3 API', icon: Database },
        { id: 'dockerhub', title: 'Docker Hub API', icon: Container }
      ]
    }
  ];

  // Filter sections based on search term
  const filteredSections = React.useMemo(() => {
    if (!searchTerm.trim()) {
      return navigation;
    }

    return navigation
      .map(section => ({
        ...section,
        items: section.items.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.id.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(section => section.items.length > 0);
  }, [searchTerm]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="w-80 h-screen overflow-hidden flex flex-col bg-gradient-to-b from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-900/30 backdrop-glass">
      {/* Enhanced Header with gradient */}
      <div className="p-6 border-b border-white/20 dark:border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 glass rounded-xl">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gradient">Documentation</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">Complete API Reference</p>
          </div>
        </div>
        
        {/* Enhanced Search with glassmorphism */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm input-glass placeholder:text-gray-500 dark:placeholder:text-gray-400 
                     focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-modern p-4 space-y-2">
        {(filteredSections.length > 0 ? filteredSections : navigation).map((section) => (
          <div key={section.id} className="mb-2">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left px-3 py-3 text-sm font-semibold 
                       glass-button hover:bg-white/20 dark:hover:bg-white/10 rounded-xl 
                       transition-all duration-300 group border border-white/20 dark:border-white/10"
            >
              <section.icon className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="flex-1 text-gray-900 dark:text-gray-100">{section.title}</span>
              <div className={`transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-90' : ''}`}>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </button>
            
            {expandedSections[section.id] && (
              <div className="ml-4 mt-2 space-y-1 animate-slide-up">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-xl 
                              transition-all duration-300 group border ${
                      activeSection === item.id
                        ? 'glass bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 font-medium shadow-lg'
                        : 'border-transparent hover:glass hover:bg-white/10 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <item.icon className={`h-4 w-4 mr-3 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 dark:text-blue-400 scale-110'
                        : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:scale-105'
                    }`} />
                    <span className="truncate">{item.title}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto">
                        <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Enhanced No results message */}
        {searchTerm && filteredSections.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="glass-card p-6 border border-white/20 dark:border-white/10">
              <Search className="h-8 w-8 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                No documentation found for "{searchTerm}"
              </p>
              <button
                onClick={() => onSearchChange('')}
                className="btn-secondary text-sm px-4 py-2"
              >
                Clear search
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Footer with version info and glassmorphism */}
      <div className="border-t border-white/20 dark:border-white/10 p-4">
        <div className="glass-card p-4 text-xs text-gray-500 dark:text-gray-400 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Version</span>
            <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-lg text-blue-700 dark:text-blue-300">3.0.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Last updated</span>
            <span>June 2025</span>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Sparkles className="h-3 w-3" />
              <span className="text-xs font-medium">Core Infrastructure docs added</span>
            </div>
          </div>
          
          {/* Quick actions with enhanced styling */}
          <div className="flex space-x-2 mt-3">
            <a
              href="https://github.com/cptcr/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-ghost text-xs py-2 text-center rounded-lg hover:bg-blue-500/10"
            >
              GitHub
            </a>
            <a
              href="https://github.com/cptcr/macro_api/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-ghost text-xs py-2 text-center rounded-lg hover:bg-red-500/10"
            >
              Issues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsSidebar;