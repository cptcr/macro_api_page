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
  Sparkles,
  Star,
  TrendingUp,
  Clock,
  Users,
  Globe,
  Eye,
  EyeOff
} from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  isNew?: boolean;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavigationItem[];
  badge?: string;
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
    'core-infrastructure': true,
    'api-classes': true,
    'production-apis': true
  });

  // Enhanced navigation with new sections and badges
  const navigation: NavigationSection[] = [
    {
      id: 'quick-start',
      title: 'Quick Start',
      icon: BookOpen,
      items: [
        { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
        { id: 'installation', title: 'Installation', icon: Download },
        { id: 'basic-usage', title: 'Basic Usage', icon: Code },
      ]
    },
    {
      id: 'core-infrastructure',
      title: 'Core Infrastructure',
      icon: Wrench,
      badge: 'New',
      items: [
        { id: 'core-cache', title: 'Cache System', icon: Database, isNew: true },
        { id: 'core-utils', title: 'Utilities & Entry Point', icon: Settings }
      ]
    },
    {
      id: 'api-classes',
      title: 'API Classes',
      icon: Layers,
      badge: '10+',
      items: [
        { id: 'chatgpt', title: 'ChatGPT/OpenAI', icon: MessageSquare, badge: 'Popular' },
        { id: 'spotify', title: 'Spotify API', icon: Music },
        { id: 'stripe', title: 'Stripe API', icon: CreditCard, badge: 'Popular' },
        { id: 'notion', title: 'Notion API', icon: FileText },
        { id: 'football', title: 'Football API', icon: Dribbble },
        { id: 'paypal', title: 'PayPal API', icon: DollarSign },
        { id: 'deepseek', title: 'DeepSeek API', icon: Brain, isNew: true },
        { id: 'valorant', title: 'Valorant API', icon: Target },
        { id: 'youtube', title: 'YouTube Notifications', icon: Youtube },
        { id: 'github', title: 'GitHub API', icon: Github }
      ]
    },
    {
      id: 'production-apis',
      title: 'Production APIs',
      icon: Server,
      badge: 'Enterprise',
      items: [
        { id: 'slack', title: 'Slack API', icon: Slack, badge: 'Popular' },
        { id: 'sendgrid', title: 'SendGrid API', icon: Mail },
        { id: 'vercel', title: 'Vercel API', icon: Cloud },
        { id: 's3', title: 'AWS S3 API', icon: Database },
        { id: 'dockerhub', title: 'Docker Hub API', icon: Container, isNew: true }
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
    <div className="h-screen overflow-hidden flex flex-col bg-gradient-to-b from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-900/30 backdrop-glass">
      {/* Enhanced Header */}
      <div className="p-4 sm:p-6 border-b border-white/20 dark:border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <div className="glass rounded-xl p-2">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-base sm:text-lg font-bold text-gradient">Documentation</h2>
            <p className="text-xs text-muted-foreground">Complete API Reference</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Live</span>
          </div>
        </div>
        
        {/* Enhanced Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search docs..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm input-glass placeholder:text-muted-foreground 
                     focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              ×
            </button>
          )}
        </div>

        {/* Quick stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="glass rounded-lg p-2 hover:scale-105 transition-all duration-300">
            <div className="text-sm font-bold text-foreground">15+</div>
            <div className="text-xs text-muted-foreground">APIs</div>
          </div>
          <div className="glass rounded-lg p-2 hover:scale-105 transition-all duration-300">
            <div className="text-sm font-bold text-foreground">100+</div>
            <div className="text-xs text-muted-foreground">Methods</div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-modern p-3 sm:p-4 space-y-2">
        {(filteredSections.length > 0 ? filteredSections : navigation).map((section, sectionIndex) => (
          <div key={section.id} className="mb-2 animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.05}s` }}>
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left px-3 py-2.5 sm:py-3 text-sm font-semibold 
                       glass-button hover:bg-white/20 dark:hover:bg-white/10 rounded-xl 
                       transition-all duration-300 group border border-white/20 dark:border-white/10 hover:scale-[1.02]"
            >
              <section.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="flex-1 text-foreground">{section.title}</span>
              
              {/* Section badges */}
              {section.badge && (
                <span className="glass px-2 py-0.5 text-xs font-medium text-primary rounded-full border border-primary/20 mr-2">
                  {section.badge}
                </span>
              )}
              
              <div className={`transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-90' : ''}`}>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </div>
            </button>
            
            {expandedSections[section.id] && (
              <div className="ml-2 sm:ml-4 mt-2 space-y-1 animate-slide-up">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-xl 
                              transition-all duration-300 group border ${
                      activeSection === item.id
                        ? 'glass bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 font-medium shadow-lg scale-[1.02]'
                        : 'border-transparent hover:glass hover:bg-white/10 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground hover:scale-[1.01]'
                    }`}
                    style={{ animationDelay: `${itemIndex * 0.02}s` }}
                  >
                    <item.icon className={`h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 dark:text-blue-400 scale-110'
                        : 'text-muted-foreground group-hover:text-foreground group-hover:scale-105'
                    }`} />
                    <span className="truncate flex-1">{item.title}</span>
                    
                    {/* Item badges */}
                    {item.badge && (
                      <span className="glass px-1.5 py-0.5 text-xs font-medium text-orange-600 dark:text-orange-400 rounded-full border border-orange-500/20 ml-2">
                        {item.badge}
                      </span>
                    )}
                    
                    {item.isNew && (
                      <div className="ml-2 flex items-center">
                        <Sparkles className="h-3 w-3 text-purple-500 animate-pulse" />
                      </div>
                    )}
                    
                    {activeSection === item.id && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
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
          <div className="text-center py-8 sm:py-12 animate-fade-in">
            <div className="glass-card p-4 sm:p-6 border border-white/20 dark:border-white/10">
              <Search className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-2">
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

      {/* Enhanced Footer */}
      <div className="border-t border-white/20 dark:border-white/10 p-3 sm:p-4">
        <div className="glass-card p-3 sm:p-4 text-xs text-muted-foreground space-y-3">
          {/* Version and status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Version</span>
              <span className="font-mono glass px-2 py-1 rounded-lg text-blue-700 dark:text-blue-300 border border-blue-500/20">3.0.0</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-green-500" />
              <span className="text-green-600 dark:text-green-400">Live</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium">Last updated</span>
            <span>June 2025</span>
          </div>
          
          {/* New features highlight */}
          <div className="pt-3 border-t border-white/20 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="h-3 w-3" />
              <span className="text-xs font-medium">What's New</span>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                Core Infrastructure docs
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                Docker Hub API added
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                Enhanced error handling
              </li>
            </ul>
          </div>
          
          {/* Quick actions */}
          <div className="flex space-x-2 mt-3">
            <a
              href="https://github.com/cptcr/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-button text-xs py-2 text-center rounded-lg hover:bg-blue-500/10 flex items-center justify-center space-x-1 group"
            >
              <Github className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/cptcr/macro_api/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-button text-xs py-2 text-center rounded-lg hover:bg-red-500/10 flex items-center justify-center space-x-1 group"
            >
              <AlertCircle className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span>Issues</span>
            </a>
          </div>
          
          {/* Progress indicator */}
          <div className="pt-3 border-t border-white/20 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                Documentation Progress
              </span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500 relative" style={{ width: '95%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsSidebar;