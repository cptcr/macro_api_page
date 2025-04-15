'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, Code } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = true,
  title,
}) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800 p-1 rounded"
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
      )}
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.5,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;