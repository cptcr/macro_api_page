'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import DocsSidebar from '@/components/documentation/DocsSidebar';
import TableOfContents from '@/components/documentation/TableOfContents';
import ServiceDocs from '@/components/documentation/ServiceDocs';
import CodeBlock from '@/components/common/CodeBlock';
import apiServices from '@/data/apiServices';

export default function Documentation() {
  // Installation code examples
  const npmInstall = `npm install macro_api`;
  const yarnInstall = `yarn add macro_api`;
  const pnpmInstall = `pnpm add macro_api`;
  
  // Basic usage example
  const basicUsage = `import { ChatGPT, SpotifyAPI, StripeAPI } from 'macro_api';

// Initialize the clients with your API keys
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row">
          <DocsSidebar />
          
          <div className="lg:flex-1 lg:mx-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Documentation</h1>
              
              <section id="getting-started" className="mb-16 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Getting Started</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  macro_api is a unified TypeScript/JavaScript library designed to simplify integration with 
                  popular APIs. It provides consistent interfaces for services like OpenAI, Spotify, Stripe, 
                  PayPal, Notion, and more.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  With macro_api, you can access multiple API services using a consistent pattern, 
                  reducing the learning curve and simplifying your codebase.
                </p>
              </section>
              
              <section id="installation" className="mb-16 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Installation</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  You can install macro_api using npm, yarn, or pnpm:
                </p>
                
                <div className="space-y-4 mb-8">
                  <CodeBlock code={npmInstall} language="bash" title="npm" />
                  <CodeBlock code={yarnInstall} language="bash" title="yarn" />
                  <CodeBlock code={pnpmInstall} language="bash" title="pnpm" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  After installation, you can import and use any of the API wrappers:
                </p>
                
                <CodeBlock code={basicUsage} language="typescript" title="Basic Usage" />
                
                <p className="text-gray-700 dark:text-gray-300 mt-6">
                  Each API requires specific authentication credentials. Refer to the individual 
                  API documentation below for details on how to obtain these credentials.
                </p>
              </section>
              
              {/* API Service Documentation */}
              {apiServices.map((service) => (
                <section key={service.id} className="mb-16">
                  <ServiceDocs service={service} />
                </section>
              ))}
            </div>
          </div>
          
          <TableOfContents />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}