// src/app/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ApiServices from '@/components/home/ApiServices';
import CodeExample from '@/components/home/CodeExample';
import Cta from '@/components/home/Cta';

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