// lib/metadata.ts
import { Metadata } from 'next';

const defaultConfig = {
  siteName: 'Macro API',
  defaultTitle: 'Macro API - Production-Ready TypeScript API Integrations',
  defaultDescription: 'Skip weeks of API integration. Get production-ready code in minutes with the most comprehensive TypeScript library for API integrations.',
  defaultImage: '/images/logo.png',
  domain: 'https://macro.cptcr.dev',
  author: 'Captain Creator',
};

// Auto-generate based on section name
function generateSectionInfo(section: string) {
  const sectionName = section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Auto-generate title, description, and keywords
  return {
    title: `${sectionName} - Macro API Documentation`,
    description: `Learn how to integrate ${sectionName} with Macro API. Complete TypeScript guide with examples and production-ready code.`,
    keywords: [
      `${section} api integration`,
      `${section} typescript`,
      `macro api ${section}`,
      'api integration',
      'typescript library',
      'production ready'
    ]
  };
}

export function generateMetadata(config: any = {}): Metadata {
  const {
    title = defaultConfig.defaultTitle,
    description = defaultConfig.defaultDescription,
    keywords = [],
    image = defaultConfig.defaultImage,
    url = '',
    section
  } = config;

  const fullUrl = url ? `${defaultConfig.domain}${url}` : defaultConfig.domain;
  const fullImageUrl = image.startsWith('http') ? image : `${defaultConfig.domain}${image}`;
  
  const finalTitle = section ? `${title} - ${section}` : title;

  return {
    title: finalTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: defaultConfig.author }],
    
    openGraph: {
      title: finalTitle,
      description,
      url: fullUrl,
      siteName: defaultConfig.siteName,
      images: [{ url: fullImageUrl, width: 1200, height: 630, alt: finalTitle }],
      type: 'website',
      locale: 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description,
      images: [fullImageUrl],
    },
    
    robots: { index: true, follow: true },
    alternates: { canonical: fullUrl },
  };
}

// Super simple docs metadata - everything auto-generated
export function generateDocsMetadata(section?: string): Metadata {
  if (!section) {
    return generateMetadata({
      title: 'Documentation - Macro API',
      description: 'Complete documentation for Macro API with TypeScript examples and production-ready code.',
      url: '/documentation',
    });
  }

  const info = generateSectionInfo(section);
  return generateMetadata({
    title: info.title,
    description: info.description,
    keywords: info.keywords,
    url: `/documentation?section=${section}`,
    section: info.title,
  });
}