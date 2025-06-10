import React from 'react';
import { ApiService } from '@/types/apiService';
import CodeExampleSwitcher from '../common/CodeExampleSwitcher';
import ApiTokenGuide from './ApiTokenGuide';
import * as LucideIcons from 'lucide-react';
import { Code, ExternalLink } from 'lucide-react';

interface ServiceDocsProps {
  service: ApiService;
}

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className = 'h-8 w-8' }) => {
  // Safe way to access icon components
  const IconComponent = React.useMemo(() => {
    // Cast to unknown first, then to any
    const icons = LucideIcons as unknown as Record<string, any>;
    return icons[name] || icons.Code;
  }, [name]);

  return <IconComponent className={className} />;
};

const ServiceDocs: React.FC<ServiceDocsProps> = ({ service }) => {
  return (
    <div id={service.id} className="scroll-mt-24">
      <div className="flex items-center mb-6">
        <div className={`mr-4 ${service.color}`}>
          <DynamicIcon name={service.icon} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{service.name}</h2>
      </div>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        {service.description}
      </p>
      
      {/* Documentation Sections */}
      <div className="space-y-12">
        {/* Getting Started */}
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="mr-2 h-5 w-5" />
            Getting Started
          </h3>
          <div className="mb-6 prose dark:prose-invert max-w-none">
            <p>
              The <code>{service.className || service.name}</code> class provides a comprehensive wrapper for the {service.name} API. 
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
        </section>
        
        {/* Authentication */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Authentication</h3>
          <ApiTokenGuide service={service} />
        </section>
        
        {/* Core Features */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {service.features?.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-lg mb-2">{feature.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Code Examples */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
          <CodeExampleSwitcher
            typescript={service.examples.typescript}
            javascript={service.examples.javascript}
            esm={service.examples.esm}
            title="Complete Example"
          />
        </section>
        
        {/* API Reference */}
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            API Reference
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <p className="mb-4">Explore the complete API reference for detailed method signatures and options:</p>
            
            <h4 className="font-semibold mb-2">Core Methods</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {service.methods?.map((method, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  <code className="font-mono bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">{method.name}</code>
                  {method.description && <span className="text-sm ml-2">- {method.description}</span>}
                </li>
              ))}
            </ul>
            
            <a 
              href={service.docsUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Official API Documentation
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDocs;