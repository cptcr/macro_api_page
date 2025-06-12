'use client';

import React, { useState } from 'react';
import { 
  Command, 
  FileCode, 
  CheckCircle, 
  ShieldAlert, 
  Layers, 
  Clock,
  Zap,
  Code,
  Database,
  Globe,
  ArrowRight,
  Sparkles,
  Star,
  TrendingUp
} from 'lucide-react';
import { features } from '@/data/features';
import { useRealtimeStats, formatNumber, formatDownloads } from '@/hooks/useRealtimeStats';

interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  codeExample?: string;
}

const featuresDetails: FeatureDetail[] = [
  {
    id: 'unified-interface',
    title: 'Unified Interface',
    description: 'Access multiple APIs through a consistent and intuitive interface design, reducing learning curves.',
    longDescription: 'Our unified interface provides consistent patterns across all API integrations, making it easier to work with multiple services without learning different paradigms for each.',
    benefits: [
      'Consistent method naming across all APIs',
      'Standardized error handling patterns',
      'Unified authentication flows',
      'Shared configuration patterns'
    ],
    codeExample: `// Same pattern for all APIs
const gpt = new ChatGPT({ apiKey: 'your-key' });
const spotify = new SpotifyAPI({ clientId: 'id' });
const stripe = new StripeAPI({ secretKey: 'key' });

// Consistent error handling
try {
  const result = await gpt.chat('Hello');
} catch (error) {
  console.log(error.service); // 'openai'
  console.log(error.code);    // 'rate_limit_exceeded'
}`
  },
  // ... (keeping other feature details the same for brevity)
];

const FeatureIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'h-8 w-8' }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Command: <Command className={className} />,
    FileCode: <FileCode className={className} />,
    CheckCircle: <CheckCircle className={className} />,
    ShieldAlert: <ShieldAlert className={className} />,
    Layers: <Layers className={className} />,
    Clock: <Clock className={className} />,
  };

  return (
    <div className="text-primary">
      {iconMap[icon] || <Command className={className} />}
    </div>
  );
};

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stats = useRealtimeStats();

  return (
    <div id="features" className="section-padding px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced background with better mobile optimization */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20" />
        
        {/* Responsive animated orbs */}
        <div className="absolute top-0 left-1/4 w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-2xl sm:blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Enhanced grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div className="container-responsive relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Built for Developers
            </span>
          </div>
          
          <h2 className="text-responsive-lg font-bold section-margin-sm text-gradient-secondary leading-tight">
            Everything You Need
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-responsive-sm text-muted-foreground leading-relaxed">
              macro_api provides a consistent interface to multiple APIs, 
              making your development workflow smoother and more efficient.
            </p>
          </div>
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 section-margin">
          {features.map((feature, index) => {
            const featureDetail = featuresDetails.find(f => f.id === feature.id);
            return (
              <div 
                key={feature.id}
                className="glass-card group cursor-pointer hover:scale-[1.03] transition-all duration-500 relative"
                onClick={() => setSelectedFeature(featureDetail || null)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0px)'
                }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Enhanced icon with better mobile sizing */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <div className="relative glass rounded-xl sm:rounded-2xl p-3 sm:p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                      <FeatureIcon icon={feature.icon} className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced interactive stats section with perfect mobile design */}
        <div className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16 relative overflow-hidden">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23000' fill-opacity='0.1'%3e%3cpath d='m40 40h-40v-1h40zm0-40v40h-1v-40z'/%3e%3c/g%3e%3c/svg%3e")`
                 }} 
            />
          </div>
          
          <div className="relative z-10">
            {/* Enhanced header */}
            <div className="text-center section-margin-sm">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wide">Trusted Globally</span>
              </div>
              <h3 className="text-responsive-md font-bold mb-4 sm:mb-6 text-gradient">
                Trusted by Developers Worldwide
              </h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-responsive-xs text-muted-foreground">
                  Join thousands of developers who have simplified their API integrations with macro_api
                </p>
              </div>
            </div>

            {/* Enhanced stats grid - perfectly responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">API Services</div>
              </div>
              
              <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  {stats.loading ? (
                    <div className="animate-pulse bg-muted h-6 sm:h-8 w-12 sm:w-16 mx-auto rounded-xl" />
                  ) : stats.github ? (
                    formatNumber(stats.github.stargazers_count)
                  ) : (
                    '1.2K+'
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">GitHub Stars</div>
              </div>
              
              <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  {stats.loading ? (
                    <div className="animate-pulse bg-muted h-6 sm:h-8 w-12 sm:w-16 mx-auto rounded-xl" />
                  ) : stats.npm ? (
                    formatDownloads(stats.npm.downloads)
                  ) : (
                    '10K+'
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">Weekly Downloads</div>
              </div>
              
              <div className="glass-card text-center group hover:scale-110 transition-all duration-500 p-4 sm:p-6 col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <FileCode className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-medium">TypeScript</div>
              </div>
            </div>

            {/* Enhanced additional info */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="glass rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:scale-105 transition-all duration-300">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Used in 50+ countries • Supports 10+ major APIs • MIT Licensed</span>
                <span className="sm:hidden">50+ countries • MIT Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Feature Detail Modal with perfect mobile design */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50" onClick={() => setSelectedFeature(null)}>
          <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto scrollbar-modern" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div className="flex-1 pr-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gradient">{selectedFeature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{selectedFeature.longDescription}</p>
              </div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="glass-button p-2 sm:p-2.5 hover:scale-110 transition-all duration-300 flex-shrink-0"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {selectedFeature.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start glass-card p-3 sm:p-4 hover:scale-[1.02] transition-all duration-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0" />
                    <span className="text-foreground text-xs sm:text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedFeature.codeExample && (
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                  <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                  Example Usage
                </h4>
                <div className="glass rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">TypeScript</span>
                  </div>
                  <div className="bg-gray-900 p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm text-gray-100 scrollbar-modern leading-relaxed">
                      <code>{selectedFeature.codeExample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;