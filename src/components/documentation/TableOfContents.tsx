// src/components/documentation/TableOfContents.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
  element?: HTMLElement;
}

interface TableOfContentsProps {
  content?: string; // HTML content to scan for headings
  activeSection?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  content, 
  activeSection 
}) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Generate TOC items from DOM headings
  useEffect(() => {
    const generateTocItems = () => {
      // Look for headings in the main content area
      const contentArea = document.querySelector('[data-content-area]') || document.querySelector('main') || document;
      const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      const items: TocItem[] = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        let id = heading.id;
        
        // Generate ID if heading doesn't have one
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

    // Generate TOC on mount and when content changes
    generateTocItems();
    
    // Set up intersection observer for active section tracking
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
    
    // Observe all headings
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

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(id);
    }
  };

  // Don't render if no TOC items
  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="hidden xl:block sticky top-24 w-64 pl-8">
      <div className="border-l border-gray-200 dark:border-gray-700 pl-4">
        <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-4 flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" />
          On This Page
        </h4>
        
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                activeId === item.id
                  ? 'text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              style={{
                paddingLeft: `${(item.level - 1) * 12}px`
              }}
            >
              <span className="block py-1 leading-relaxed">
                {item.title}
              </span>
            </button>
          ))}
        </nav>
        
        {/* Quick actions */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h5 className="font-medium text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Quick Actions
          </h5>
          <div className="space-y-2 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Back to top
            </button>
            <a
              href="https://github.com/cptcr/macro_api/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Report issue
            </a>
            <a
              href="https://github.com/cptcr/macro_api"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Edit on GitHub
            </a>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>Reading progress</span>
            <span id="reading-progress">0%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div 
              id="progress-bar"
              className="bg-primary-600 dark:bg-primary-400 h-1 rounded-full transition-all duration-300"
              style={{ width: '0%' }}
            />
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
    updateProgress(); // Initial call
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
};

export default TableOfContents;