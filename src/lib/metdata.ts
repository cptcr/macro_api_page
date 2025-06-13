// lib/metadata.ts
import { Metadata } from 'next';
import logoImage from '../../images/logo.png';

interface MetaConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  section?: string; // For documentation sections
}

const defaultConfig = {
  siteName: 'Macro API',
  defaultTitle: 'Macro API - Production-Ready TypeScript API Integrations',
  defaultDescription: 'Skip weeks of API integration. Get production-ready code in minutes with the most comprehensive TypeScript library for API integrations.',
  defaultImage: logoImage,
  domain: 'https://macro.cptcr.dev',
  twitterHandle: '@macro_api',
  author: 'Captain Creator',
};

// SEO keywords specifically for API integration tools
const coreKeywords = [
  'TypeScript API library',
  'API integration tools',
  'Node.js SDK',
  'REST API client',
  'ChatGPT API wrapper',
  'Stripe API integration',
  'Spotify API client',
  'GitHub API tools',
  'Slack API SDK',
  'PayPal API wrapper',
  'production-ready API',
  'unified API interface',
  'developer tools',
  'open source SDK',
  'API abstraction layer',
  'TypeScript utilities',
  'npm package API',
  'macro_api',
  'API development framework',
  'enterprise API client'
];

export function generateMetadata(config: MetaConfig = {}): Metadata {
  const {
    title = defaultConfig.defaultTitle,
    description = defaultConfig.defaultDescription,
    keywords = [],
    image = defaultConfig.defaultImage,
    url = '',
    type = 'website',
    section
  } = config;

  const fullUrl = url ? `${defaultConfig.domain}${url}` : defaultConfig.domain;
  const imagePath = typeof image === 'string' ? image : image.src;
  const fullImageUrl = imagePath.startsWith('http') ? imagePath : `${defaultConfig.domain}${imagePath}`;
  
  // Combine core keywords with page-specific keywords
  const allKeywords = [...coreKeywords, ...keywords];

  // Enhanced title for documentation sections
  const enhancedTitle = section 
    ? `${title} - ${section} | ${defaultConfig.siteName}`
    : title;

  return {
    title: enhancedTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: defaultConfig.author }],
    creator: defaultConfig.author,
    publisher: defaultConfig.siteName,
    
    // Open Graph - optimized for developer tools
    openGraph: {
      title: enhancedTitle,
      description,
      url: fullUrl,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${defaultConfig.siteName} - ${title}`,
        }
      ],
      type: "website",
      locale: 'en_US',
    },
    
    // Twitter Cards - great for dev community sharing
    twitter: {
      card: 'summary_large_image',
      title: enhancedTitle,
      description,
      images: [fullImageUrl],
      creator: defaultConfig.twitterHandle,
      site: defaultConfig.twitterHandle,
    },
    
    // Enhanced SEO for developer tools
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
    
    // Additional metadata for developer tools
    other: {
      'og:site_name': defaultConfig.siteName,
      'article:author': defaultConfig.author,
      // GitHub/NPM discovery
      'npm-package': 'macro_api',
      'github-repo': 'cptcr/macro_api',
      // Developer-specific meta
      'target-audience': 'developers',
      'programming-language': 'TypeScript,JavaScript',
      'framework': 'Node.js',
      'category': 'Developer Tools',
    },
  };
}

// Utility for documentation pages with sections
export function generateDocsMetadata(
  pageTitle: string,
  config: Omit<MetaConfig, 'title'> = {}
): Metadata {
  return generateMetadata({
    ...config,
    title: `${pageTitle} | Documentation | ${defaultConfig.siteName}`,
    type: 'article',
  });
}
// 2. HOME PAGE (src/app/page.tsx):
/*
// Remove 'use client' and add metadata export
import { generateMetadata as generateMeta } from '@/lib/metadata';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ApiServices from '@/components/home/ApiServices';
import CodeExample from '@/components/home/CodeExample';
import Cta from '@/components/home/Cta';

export const metadata = generateMeta({
  title: 'Macro API - Production-Ready TypeScript API Integrations',
  description: 'Skip weeks of API integration. Get production-ready code in minutes with the most comprehensive TypeScript library for API integrations.',
  keywords: ['API integration', 'TypeScript SDK', 'ChatGPT API', 'Stripe API', 'production ready'],
  url: '/',
});

// Convert to Server Component
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <div id="main-content">
        <Hero />
        <Features />
        <ApiServices />
        <CodeExample />
        <Cta />
      </div>
      
      <Footer />
    </main>
  );
}
*/

// 3. DOCUMENTATION WITH SECTIONS (src/app/documentation/page.tsx):
/*
// Remove 'use client' and convert to Server Component with generateMetadata
import { generateDocsMetadata } from '@/lib/metadata';
import DocumentationClient from './DocumentationClient';

interface Props {
  searchParams: { section?: string };
}

const sectionInfo = {
  'getting-started': {
    title: 'Getting Started',
    description: 'Quick start guide to integrate Macro API in your project.',
    keywords: ['getting started', 'installation', 'setup', 'quick start']
  },
  'chatgpt': {
    title: 'ChatGPT Integration',
    description: 'Complete OpenAI ChatGPT API integration with streaming and function calling.',
    keywords: ['ChatGPT', 'OpenAI', 'AI integration', 'GPT-4', 'streaming']
  },
  'stripe': {
    title: 'Stripe Payments',
    description: 'Stripe payment processing with subscriptions, invoices, and webhooks.',
    keywords: ['Stripe', 'payments', 'subscriptions', 'invoices', 'webhooks']
  },
  'spotify': {
    title: 'Spotify API',
    description: 'Spotify integration for music search, playlists, and user data.',
    keywords: ['Spotify', 'music API', 'playlists', 'search', 'OAuth']
  },
  'github': {
    title: 'GitHub Integration',
    description: 'GitHub API for repository management, issues, and pull requests.',
    keywords: ['GitHub', 'repository', 'issues', 'pull requests', 'git']
  },
  'slack': {
    title: 'Slack Bot Development',
    description: 'Build Slack bots with messaging, slash commands, and interactive components.',
    keywords: ['Slack', 'bot development', 'messaging', 'slash commands']
  },
  'paypal': {
    title: 'PayPal Integration',
    description: 'PayPal payment processing with orders and subscription management.',
    keywords: ['PayPal', 'payments', 'orders', 'subscriptions']
  },
  'sendgrid': {
    title: 'SendGrid Email',
    description: 'Email delivery with templates, campaigns, and analytics.',
    keywords: ['SendGrid', 'email', 'templates', 'campaigns', 'SMTP']
  },
  'vercel': {
    title: 'Vercel Deployment',
    description: 'Automated deployment with project management and domain configuration.',
    keywords: ['Vercel', 'deployment', 'hosting', 'domains', 'CI/CD']
  },
  's3': {
    title: 'AWS S3 Storage',
    description: 'File storage and management with AWS S3 integration.',
    keywords: ['AWS S3', 'file storage', 'cloud storage', 'uploads']
  },
  'notion': {
    title: 'Notion Integration',
    description: 'Notion database operations and content management.',
    keywords: ['Notion', 'database', 'content management', 'automation']
  },
  'youtube': {
    title: 'YouTube Monitoring',
    description: 'YouTube channel monitoring with real-time notifications.',
    keywords: ['YouTube', 'monitoring', 'notifications', 'webhooks']
  },
  'valorant': {
    title: 'Valorant Statistics',
    description: 'Valorant player stats, match history, and leaderboards.',
    keywords: ['Valorant', 'gaming', 'statistics', 'esports', 'leaderboards']
  },
  'football': {
    title: 'Football API',
    description: 'Football data including leagues, teams, fixtures, and live scores.',
    keywords: ['football', 'soccer', 'sports data', 'live scores', 'fixtures']
  },
  'dockerhub': {
    title: 'Docker Hub',
    description: 'Docker Hub container registry management and automated builds.',
    keywords: ['Docker Hub', 'containers', 'registry', 'builds']
  },
  'deepseek': {
    title: 'DeepSeek AI',
    description: 'DeepSeek AI models for code generation and reasoning.',
    keywords: ['DeepSeek', 'AI', 'code generation', 'reasoning']
  }
};

export async function generateMetadata({ searchParams }: Props) {
  const section = searchParams.section;
  
  if (!section || !sectionInfo[section as keyof typeof sectionInfo]) {
    return generateDocsMetadata('Documentation', {
      description: 'Complete documentation for Macro API - from installation to advanced usage patterns.',
      keywords: ['documentation', 'API docs', 'tutorials', 'examples'],
      url: '/documentation',
    });
  }
  
  const info = sectionInfo[section as keyof typeof sectionInfo];
  
  return generateDocsMetadata(info.title, {
    description: info.description,
    keywords: info.keywords,
    url: `/documentation?section=${section}`,
    section: info.title,
  });
}

// Create a new client component file
export default function DocumentationPage({ searchParams }: Props) {
  return <DocumentationClient searchParams={searchParams} />;
}
*/

// 4. CREATE NEW FILE: src/app/documentation/DocumentationClient.tsx
/*
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import DocsSidebar from '@/components/documentation/DocsSidebar';
import TableOfContents from '@/components/documentation/TableOfContents';
import { useReadingProgress } from '@/components/documentation/TableOfContents';

// Import all your documentation components...
import GettingStartedDocs from '@/components/documentation/sections/GettingStartedDocs';
// ... rest of your imports

interface Props {
  searchParams: { section?: string };
}

const DocumentationClient: React.FC<Props> = ({ searchParams }) => {
  // Your existing DocumentationPage component logic here
  // Just copy everything from the current DocumentationPage component
  
  return (
    // Your existing JSX
  );
};

export default DocumentationClient;
*/

// 5. ROBOTS.TXT (src/app/robots.ts):
/*
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://macro.cptcr.dev/sitemap.xml',
  };
}
*/

// 6. SITEMAP (src/app/sitemap.ts):
/*
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://macro.cptcr.dev';
  
  const staticPages = [
    '',
    '/documentation',
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Documentation sections
  const docSections = [
    'getting-started', 'chatgpt', 'stripe', 'spotify', 'github', 'slack',
    'paypal', 'sendgrid', 'vercel', 's3', 'notion', 'youtube', 'valorant',
    'football', 'dockerhub', 'deepseek'
  ];
  
  const docRoutes = docSections.map((section) => ({
    url: `${baseUrl}/documentation?section=${section}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...docRoutes];
}
*/

// 7. MANIFEST (src/app/manifest.ts):
/*
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Macro API - TypeScript API Integration Library',
    short_name: 'Macro API',
    description: 'Production-ready TypeScript library for API integrations',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    categories: ['developer tools', 'productivity'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
*/

// 8. JSON-LD STRUCTURED DATA (src/components/StructuredData.tsx):
/*
import React from 'react';

interface StructuredDataProps {
  type?: 'SoftwareApplication' | 'WebApplication' | 'Article';
  data?: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'SoftwareApplication',
  data = {}
}) => {
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Macro API',
    description: 'Production-ready TypeScript library for API integrations',
    url: 'https://macro.cptcr.dev',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    programmingLanguage: ['TypeScript', 'JavaScript'],
    author: {
      '@type': 'Person',
      name: 'Captain Creator',
      url: 'https://github.com/cptcr'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    codeRepository: 'https://github.com/cptcr/macro_api',
    downloadUrl: 'https://npmjs.com/package/macro_api',
    softwareVersion: '1.0.0',
    keywords: [
      'TypeScript', 'API integration', 'Developer tools', 'SDK', 'npm package'
    ],
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(defaultData, null, 2)
      }}
    />
  );
};

export default StructuredData;
*/