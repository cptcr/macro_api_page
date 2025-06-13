import React from 'react';
import { ApiService } from '@/types/apiService';
import CodeExampleSwitcher from '../common/CodeExampleSwitcher';
import ApiTokenGuide from './ApiTokenGuide';
import * as LucideIcons from 'lucide-react';
import { Code, ExternalLink, Sparkles, ArrowRight, CheckCircle, Key, Shield, Zap } from 'lucide-react';

interface ServiceDocsProps {
  service: ApiService;
}

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className = 'h-8 w-8' }) => {
  const IconComponent = React.useMemo(() => {
    const icons = LucideIcons as unknown as Record<string, any>;
    return icons[name] || icons.Code;
  }, [name]);

  return <IconComponent className={className} />;
};

const ServiceDocs: React.FC<ServiceDocsProps> = ({ service }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects matching main page */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div id={service.id} className="relative z-10 container-responsive section-padding scroll-mt-24">
        {/* Header Section */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <DynamicIcon name={service.icon} className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              API Integration
            </span>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className={`mr-4 sm:mr-6 ${service.color}`}>
              <DynamicIcon name={service.icon} className="h-12 w-12 sm:h-16 sm:w-16" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold mb-2 text-gradient-secondary">
                {service.name}
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Main content sections */}
        <div className="space-y-8 sm:space-y-12">
          
          {/* Getting Started Section */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
              <Code className="h-6 w-6 mr-2" />
              Getting Started
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-muted-foreground leading-relaxed">
                The <code className="glass px-2 py-1 rounded text-sm font-mono text-primary">{service.className || service.name}</code> class provides a comprehensive wrapper for the {service.name} API. 
                Here's how to get started with basic initialization and authentication.
              </p>
            </div>
            
            <CodeExampleSwitcher
              typescript={`import { ${service.className || service.name} } from 'macro_api';

// Initialize the client
const ${service.variableName || service.id} = new ${service.className || service.name}({
  ${service.authParams.join(',\n  ')}
});`}
              javascript={`const { ${service.className || service.name} } = require('macro_api');

// Initialize the client
const ${service.variableName || service.id} = new ${service.className || service.name}({
  ${service.authParams.join(',\n  ')}
});`}
              esm={`import { ${service.className || service.name} } from 'macro_api';

// Initialize the client
const ${service.variableName || service.id} = new ${service.className || service.name}({
  ${service.authParams.join(',\n  ')}
});`}
              title="Installation and Setup"
            />
          </div>
          
          {/* Authentication Section */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
              <Key className="h-6 w-6 mr-2" />
              Authentication
            </h2>
            <ApiTokenGuide service={service} />
          </div>
          
          {/* Core Features Section */}
          {service.features && (
            <div className="glass-card">
              <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
                <Sparkles className="h-6 w-6 mr-2" />
                Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {feature.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Code Examples Section */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
              <Code className="h-6 w-6 mr-2" />
              Code Examples
            </h2>
            <CodeExampleSwitcher
              typescript={service.examples.typescript}
              javascript={service.examples.javascript}
              esm={service.examples.esm}
              title="Complete Example"
            />
          </div>
          
          {/* API Reference Section */}
          <div className="glass-card">
            <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
              <ExternalLink className="h-6 w-6 mr-2" />
              API Reference
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore the complete API reference for detailed method signatures and options:
            </p>
            
            {service.methods && (
              <div className="mb-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Core Methods
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {service.methods.map((method, index) => (
                    <div key={index} className="glass-card group hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                        </div>
                        <div className="flex-1">
                          <code className="font-mono text-primary font-medium text-sm group-hover:text-blue-600 transition-colors">
                            {method.name}
                          </code>
                          {method.description && (
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                              {method.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={service.docsUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group hover:scale-[1.02] transition-all duration-300 flex-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      Official API Documentation
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Complete reference and advanced features
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Visit Documentation</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/cptcr/macro_api"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group hover:scale-[1.02] transition-all duration-300 flex-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      macro_api Documentation
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Implementation details and examples
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>View Examples</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 dark:border-green-400/20">
            <div className="flex items-start space-x-4">
              <div className="glass rounded-xl p-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">
                  Ready to Build!
                </h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed mb-4">
                  You're all set to integrate {service.name} into your application. The wrapper provides a clean, 
                  type-safe interface with built-in error handling and comprehensive documentation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/documentation?section=basic-usage" className="btn btn-secondary text-sm">
                    Basic Usage Guide
                  </a>
                  <a href="/documentation?section=core-cache" className="btn btn-secondary text-sm">
                    Caching Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDocs;