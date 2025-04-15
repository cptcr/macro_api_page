import React from 'react';
import { ApiService } from '@/types/apiService';
import CodeBlock from '../common/CodeBlock';
import ApiTokenGuide from './ApiTokenGuide';
import * as LucideIcons from 'lucide-react';
import { Code } from 'lucide-react';

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
      
      <h3 className="text-xl font-semibold mb-4">Authentication</h3>
      <ApiTokenGuide service={service} />
      
      <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold">TypeScript Example</h4>
        </div>
        <div className="p-6">
          <CodeBlock 
            code={service.examples.typescript} 
            language="typescript" 
            showLineNumbers={true}
          />
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold">JavaScript Example</h4>
        </div>
        <div className="p-6">
          <CodeBlock 
            code={service.examples.javascript} 
            language="javascript" 
            showLineNumbers={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDocs;