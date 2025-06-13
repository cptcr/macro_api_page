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

// Core Infrastructure Documentation
import CoreCacheDocs from '@/components/documentation/core/CoreCacheDocs';
import CoreUtilsDocs from '@/components/documentation/core/CoreUtilsDocs';

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

  // Component mapping
  const getDocumentationComponent = () => {
    const components: Record<string, React.ComponentType> = {
      // Quick Start
      'getting-started': GettingStartedDocs,
      'installation': InstallationDocs,
      'basic-usage': BasicUsageDocs,
      
      // Core Infrastructure
      'core-cache': CoreCacheDocs,
      'core-utils': CoreUtilsDocs,
      
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative">
      {/* Background effects matching main page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      {/* Enhanced Navbar with glassmorphism */}
      <div className="sticky top-0 z-50 backdrop-glass-strong border-b border-white/20 dark:border-white/10">
        <Navbar />
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Enhanced Sidebar with glassmorphism */}
        <div className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
          <div className="sticky top-16 h-[calc(100vh-4rem)] glass border-r border-white/20 dark:border-white/10 backdrop-glass-strong">
            <DocsSidebar
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm hidden" id="mobile-sidebar-overlay">
          <div className="w-80 h-full glass backdrop-glass-strong border-r border-white/20 dark:border-white/10">
            <DocsSidebar
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>
        
        {/* Main Content Area with enhanced styling */}
        <div className="flex-1 flex overflow-hidden">
          {/* Documentation Content */}
          <main 
            id="documentation-content"
            className="flex-1 overflow-y-auto scrollbar-modern"
            data-content-area
          >
            <div className="relative">
              {/* Content container with enhanced padding and max-width */}
              <div className="w-full">
                {/* Background decorative elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Enhanced content wrapper - Full width for each component to handle its own layout */}
                <div className="relative z-10 w-full">
                  {getDocumentationComponent()}
                </div>
              </div>
            </div>
          </main>
          
          {/* Enhanced Table of Contents for Desktop */}
          <div className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-16 h-[calc(100vh-4rem)] glass border-l border-white/20 dark:border-white/10 backdrop-glass">
              <TableOfContents activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with glassmorphism */}
      <div className="glass border-t border-white/20 dark:border-white/10 backdrop-glass-strong">
        <Footer />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden fixed bottom-6 right-6 z-50 glass-button p-4 rounded-full shadow-2xl"
        onClick={() => {
          const overlay = document.getElementById('mobile-sidebar-overlay');
          if (overlay) {
            overlay.classList.toggle('hidden');
          }
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default DocumentationPage;