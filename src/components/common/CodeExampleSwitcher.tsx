'use client';

import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExampleSwitcherProps {
  typescript: string;
  javascript: string;
  esm?: string;
  title?: string;
  description?: string;
}

type CodeLanguage = 'typescript' | 'javascript' | 'esm';

const CodeExampleSwitcher: React.FC<CodeExampleSwitcherProps> = ({
  typescript,
  javascript,
  esm,
  title,
  description
}) => {
  const [activeTab, setActiveTab] = useState<CodeLanguage>('typescript');
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const handleCopy = async () => {
    const codeToCopy = activeTab === 'typescript' 
      ? typescript 
      : activeTab === 'javascript' 
        ? javascript 
        : esm || '';
    
    await navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'typescript':
        return typescript;
      case 'javascript':
        return javascript;
      case 'esm':
        return esm || '';
      default:
        return typescript;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
      {(title || description) && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      )}
      
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button 
          className={`py-3 px-6 font-medium transition-colors ${
            activeTab === 'typescript' 
              ? 'bg-primary-600 text-white dark:bg-primary-500' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          onClick={() => setActiveTab('typescript')}
        >
          TypeScript
        </button>
        <button 
          className={`py-3 px-6 font-medium transition-colors ${
            activeTab === 'javascript' 
              ? 'bg-primary-600 text-white dark:bg-primary-500' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          onClick={() => setActiveTab('javascript')}
        >
          JavaScript
        </button>
        {esm && (
          <button 
            className={`py-3 px-6 font-medium transition-colors ${
              activeTab === 'esm' 
                ? 'bg-primary-600 text-white dark:bg-primary-500' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('esm')}
          >
            ES Modules
          </button>
        )}
        
        <div className="ml-auto flex items-center mr-4">
          <button
            onClick={handleCopy}
            className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none p-1 rounded"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="relative">
        <SyntaxHighlighter
          language={activeTab === 'esm' ? 'javascript' : activeTab}
          style={isDark ? vscDarkPlus : vs}
          showLineNumbers={true}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            borderRadius: 0,
          }}
        >
          {getActiveCode()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeExampleSwitcher;