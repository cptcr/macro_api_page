'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowUp, Github, ExternalLink, BookOpen, Target, TrendingUp, Clock, Sparkles, Users, Star } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
  element?: HTMLElement;
}

interface TableOfContentsProps {
  content?: string;
  activeSection?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  content, 
  activeSection 
}) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const observer = useRef<IntersectionObserver | null>(null);

  // Generate TOC items from DOM headings
  useEffect(() => {
    const generateTocItems = () => {
      const contentArea = document.querySelector('[data-content-area]') || document.querySelector('main') || document;
      const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      const items: TocItem[] = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        let id = heading.id;
        
        if (!id) {
          id = heading.textContent
            ?.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim() || `heading-${index}`;
          heading.id = id;
        }
        
        return {
          id,
          title: heading.textContent || '',
          level,
          element: heading as HTMLElement
        };
      });
      
      setTocItems(items);
    };

    generateTocItems();
    
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );
    
    setTimeout(() => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading) => {
        if (observer.current) {
          observer.current.observe(heading);
        }
      });
    }, 100);
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [content, activeSection]);

  // Reading progress tracking
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (tocItems.length === 0) {
    return (
      <div className="w-full h-full flex flex-col bg-gradient-to-b from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-900/10 backdrop-glass">
        {/* Enhanced Header */}
        <div className="p-6 border-b border-white/20 dark:border-white/10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="glass rounded-lg p-2">
              <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-semibold text-sm text-foreground">
              Table of Contents
            </h4>
          </div>
          
          <div className="glass-card p-4 text-center">
            <Sparkles className="h-8 w-8 text-muted-foreground mx-auto mb-2 animate-pulse" />
            <p className="text-sm text-muted-foreground">
              No headings found on this page
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-white/30 to-white/10 dark:from-gray-900/30 dark:to-gray-900/10 backdrop-glass">
      {/* Enhanced Header */}
      <div className="p-6 border-b border-white/20 dark:border-white/10">
        <div className="flex items-center space-x-2 mb-4">
          <div className="glass rounded-lg p-2">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="font-semibold text-sm text-foreground">
            On This Page
          </h4>
        </div>
        
        {/* Enhanced Reading Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>Reading progress</span>
            </span>
            <span className="font-mono">{Math.round(readingProgress)}%</span>
          </div>
          <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden glass">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${readingProgress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-center">
          <div className="glass rounded-lg p-2">
            <div className="text-sm font-bold text-foreground">{tocItems.filter(item => item.level <= 2).length}</div>
            <div className="text-xs text-muted-foreground">Sections</div>
          </div>
          <div className="glass rounded-lg p-2">
            <div className="text-sm font-bold text-foreground">{Math.ceil(tocItems.length * 0.5)}</div>
            <div className="text-xs text-muted-foreground">Min Read</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Table of Contents */}
      <nav className="flex-1 overflow-y-auto scrollbar-modern p-4">
        <div className="space-y-1">
          {tocItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-sm transition-all duration-300 hover:scale-[1.02] rounded-lg p-2 group ${
                activeId === item.id
                  ? 'glass bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 font-medium border border-blue-500/30 dark:border-blue-400/30 shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:glass hover:bg-white/10 dark:hover:bg-white/5'
              }`}
              style={{
                paddingLeft: `${(item.level - 1) * 12 + 8}px`,
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div className="flex items-center space-x-2">
                {activeId === item.id && (
                  <Target className="h-3 w-3 text-blue-500 animate-pulse flex-shrink-0" />
                )}
                <span className="block leading-relaxed truncate">
                  {item.title}
                </span>
                {item.level === 2 && (
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </nav>
      
      {/* Enhanced Quick Actions */}
      <div className="border-t border-white/20 dark:border-white/10 p-4">
        <div className="space-y-3">
          <h5 className="font-medium text-xs text-muted-foreground uppercase tracking-wider mb-3 flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" />
            Quick Actions
          </h5>
          
          <div className="space-y-2">
            <button
              onClick={scrollToTop}
              className="w-full glass-button text-sm py-2 px-3 rounded-lg hover:bg-blue-500/10 flex items-center space-x-2 group"
            >
              <ArrowUp className="h-3 w-3 group-hover:animate-bounce" />
              <span>Back to top</span>
            </button>
            
            <a
              href="https://github.com/cptcr/macro_api/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-button text-sm py-2 px-3 rounded-lg hover:bg-red-500/10 flex items-center space-x-2 group"
            >
              <ExternalLink className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span>Report issue</span>
            </a>
            
            <a
              href="https://github.com/cptcr/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-button text-sm py-2 px-3 rounded-lg hover:bg-gray-500/10 flex items-center space-x-2 group"
            >
              <Github className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span>Edit on GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Enhanced Progress Stats */}
        <div className="mt-4 pt-4 border-t border-white/20 dark:border-gray-700">
          <div className="glass-card p-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Time to read
              </span>
              <span className="font-mono">{Math.ceil(tocItems.length * 0.5)} min</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Progress
              </span>
              <span className="font-mono">{Math.round(readingProgress)}%</span>
            </div>
          </div>
        </div>

        {/* Community info */}
        <div className="mt-4 text-center">
          <div className="glass rounded-full px-3 py-2 inline-flex items-center space-x-2 text-xs text-muted-foreground hover:scale-105 transition-all duration-300">
            <Users className="h-3 w-3" />
            <span>Trusted by 10K+ developers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook to track reading progress
export const useReadingProgress = () => {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
      
      const progressElement = document.getElementById('reading-progress');
      const progressBar = document.getElementById('progress-bar');
      
      if (progressElement) {
        progressElement.textContent = `${Math.round(progress)}%`;
      }
      
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
};

export default TableOfContents;