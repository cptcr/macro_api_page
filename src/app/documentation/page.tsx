'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import DocsSidebar from '@/components/documentation/DocsSidebar';
import TableOfContents from '@/components/documentation/TableOfContents';
import { useReadingProgress } from '@/components/documentation/TableOfContents';

// Import all documentation components
import GettingStartedDocs from '@/components/documentation/sections/GettingStartedDocs';
import InstallationDocs from '@/components/documentation/sections/InstallationDocs';
import BasicUsageDocs from '@/components/documentation/sections/BasicUsageDocs';
import AuthenticationDocs from '@/components/documentation/sections/AuthenticationDocs';
import ErrorHandlingDocs from '@/components/documentation/sections/ErrorHandlingDocs';
import CachingDocs from '@/components/documentation/sections/CachingDocs';
import RetryLogicDocs from '@/components/documentation/sections/RetryLogicDocs';
import CircuitBreakerDocs from '@/components/documentation/sections/CircuitBreakerDocs';

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
      'authentication': AuthenticationDocs,
      
      // Core Features
      'error-handling': ErrorHandlingDocs,
      'caching': CachingDocs,
      'retry-logic': RetryLogicDocs,
      'circuit-breaker': CircuitBreakerDocs,
      
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen">
        {/* Sidebar */}
        <DocsSidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Documentation Content */}
          <main 
            id="documentation-content"
            className="flex-1 overflow-y-auto"
            data-content-area
          >
            <div className="max-w-4xl mx-auto px-8 py-12">
              {getDocumentationComponent()}
            </div>
          </main>
          
          {/* Table of Contents */}
          <TableOfContents activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;