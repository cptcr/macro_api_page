'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import DocsSidebar from '@/components/documentation/DocsSidebar';
import TableOfContents from '@/components/documentation/TableOfContents';
import { useReadingProgress } from '@/components/documentation/TableOfContents';

// Import all documentation components
import GettingStartedDocs from '@/components/documentation/sections/GettingStartedDocs';
import InstallationDocs from '@/components/documentation/sections/InstallationDocs';
import BasicUsageDocs from '@/components/documentation/sections/BasicUsageDocs';

// Core Infrastructure Documentation (NEW)
import CoreCacheDocs from '@/components/documentation/core/CoreCacheDocs';
import CoreUtilsDocs from '@/components/documentation/core/CoreUtilsDocs';

// Legacy core features (keep these for backward compatibility)
/** 
import ErrorHandlingDocs from '@/components/documentation/sections/ErrorHandlingDocs';
import CachingDocs from '@/components/documentation/core/CoreCacheDocs';
import RetryLogicDocs from '@/components/documentation/sections/RetryLogicDocs';
import CircuitBreakerDocs from '@/components/documentation/sections/CircuitBreakerDocs';
*/
// API Class Components
import FootballApiDocs from '@/components/documentation/api-classes/FootballApiDocs';
import ChatGptDocs from '@/components/documentation/api-classes/ChatGptDocs';
import SpotifyDocs from '@/components/documentation/api-classes/SpotifyDocs';
import StripeDocs from '@/components/documentation/api-classes/StripeDocs';
import NotionDocs from '@/components/documentation/api-classes/NotionDocs';
import PaypalDocs from '@/components/documentation/api-classes/PaypalDocs';
import DeepseekDocs from '@/components/documentation/api-classes/DeepseekDocs';
import ValorantDocs from '@/components/documentation/api-classes/ValorantDocs';
import YoutubeDocs from '@/components/documentation/api-classes/YoutubeDocs';
import GithubDocs from '@/components/documentation/api-classes/GithubDocs';

// Production API Components
import SlackDocs from '@/components/documentation/production-apis/SlackDocs';
import SendgridDocs from '@/components/documentation/production-apis/SendgridDocs';
import VercelDocs from '@/components/documentation/production-apis/VercelDocs';
import S3Docs from '@/components/documentation/production-apis/S3Docs';
import DockerhubDocs from '@/components/documentation/production-apis/DockerhubDocs';

const DocumentationPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use reading progress hook
  useReadingProgress();

  // Handle URL parameters
  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  // Update URL when section changes
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.history.pushState({}, '', `/documentation?section=${sectionId}`);
    
    // Scroll to top of content
    const contentArea = document.getElementById('documentation-content');
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  };

  // Component mapping - UPDATED with new core infrastructure docs
  const getDocumentationComponent = () => {
    const components: Record<string, React.ComponentType> = {
      // Quick Start
      'getting-started': GettingStartedDocs,
      'installation': InstallationDocs,
      'basic-usage': BasicUsageDocs,
      
      // Core Infrastructure (NEW SECTION)
      'core-cache': CoreCacheDocs,
      'core-utils': CoreUtilsDocs,
      /**
      // Legacy Core Features (for backward compatibility)
      'error-handling': ErrorHandlingDocs,
      'caching': CachingDocs,
      'retry-logic': RetryLogicDocs,
      'circuit-breaker': CircuitBreakerDocs,
       */
      // API Classes
      'football': FootballApiDocs,
      'chatgpt': ChatGptDocs,
      'spotify': SpotifyDocs,
      'stripe': StripeDocs,
      'notion': NotionDocs,
      'paypal': PaypalDocs,
      'deepseek': DeepseekDocs,
      'valorant': ValorantDocs,
      'youtube': YoutubeDocs,
      'github': GithubDocs,
      
      // Production APIs
      'slack': SlackDocs,
      'sendgrid': SendgridDocs,
      'vercel': VercelDocs,
      's3': S3Docs,
      'dockerhub': DockerhubDocs,
    };

    const Component = components[activeSection] || GettingStartedDocs;
    return <Component />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* Enhanced Navbar with backdrop blur */}
      <div className="sticky top-0 z-50 backdrop-glass border-b border-white/20 dark:border-white/10">
        <Navbar />
      </div>

      <div className="flex min-h-screen">
        {/* Enhanced Sidebar with glassmorphism */}
        <div className="glass border-r border-white/20 dark:border-white/10 backdrop-glass-strong">
          <DocsSidebar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        
        {/* Main Content Area with enhanced styling */}
        <div className="flex-1 flex overflow-hidden">
          {/* Documentation Content with glassmorphism background */}
          <main 
            id="documentation-content"
            className="flex-1 overflow-y-auto scrollbar-modern"
            data-content-area
          >
            <div className="relative">
              {/* Content container with enhanced padding and max-width */}
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Enhanced content wrapper */}
                <div className="relative z-10">
                  <div className="glass-card border border-white/20 dark:border-white/10 shadow-2xl">
                    {getDocumentationComponent()}
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          {/* Enhanced Table of Contents */}
          <div className="hidden xl:block sticky top-0 h-screen">
            <div className="glass-nav border-l border-white/20 dark:border-white/10 backdrop-glass h-full">
              <TableOfContents activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with glassmorphism */}
      <div className="glass border-t border-white/20 dark:border-white/10 backdrop-glass-strong">
        <Footer />
      </div>
    </div>
  );
};

export default DocumentationPage;