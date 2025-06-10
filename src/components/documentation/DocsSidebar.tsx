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
  Search
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
  const [expandedSections, setExpandedSections] = useState({
    'quick-start': true,
    'core-features': true,
    'api-classes': true,
    'production-apis': true
  });

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
      id: 'core-features',
      title: 'Core Features',
      icon: Layers,
      items: [
        { id: 'error-handling', title: 'Error Handling', icon: AlertCircle },
        { id: 'caching', title: 'Caching System', icon: Database },
        { id: 'retry-logic', title: 'Retry Logic', icon: Settings },
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
    <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {filteredSections.map((section) => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center w-full text-left px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors group"
            >
              <section.icon className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
              <span className="flex-1">{section.title}</span>
              {expandedSections[section.id] ? (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="ml-7 mt-2 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center w-full text-left px-3 py-2 text-sm rounded-md transition-colors group ${
                      activeSection === item.id
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <item.icon className={`h-4 w-4 mr-3 ${
                      activeSection === item.id
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                    }`} />
                    <span className="truncate">{item.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* No results message */}
        {searchTerm && filteredSections.length === 0 && (
          <div className="text-center py-8">
            <Search className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No documentation found for "{searchTerm}"
            </p>
            <button
              onClick={() => onSearchChange('')}
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline mt-2"
            >
              Clear search
            </button>
          </div>
        )}
      </nav>

      {/* Footer info */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4 mt-auto">
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <div className="flex items-center justify-between">
            <span>Version</span>
            <span className="font-mono">3.0.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Last updated</span>
            <span>Dec 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsSidebar;