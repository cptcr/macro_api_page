// src/components/common/CodeBlock.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  Check, 
  Copy, 
  Code, 
  Download, 
  Maximize2, 
  Minimize2,
  Play,
  Eye,
  EyeOff
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
  filename?: string;
  highlightLines?: number[];
  showCopyButton?: boolean;
  showDownloadButton?: boolean;
  showExpandButton?: boolean;
  showRunButton?: boolean;
  maxHeight?: string;
  editable?: boolean;
  onCodeChange?: (code: string) => void;
  onRun?: (code: string) => void;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = true,
  title,
  filename,
  highlightLines = [],
  showCopyButton = true,
  showDownloadButton = false,
  showExpandButton = false,
  showRunButton = false,
  maxHeight = 'none',
  editable = false,
  onCodeChange,
  onRun,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableCode, setEditableCode] = useState(code);
  const [showPreview, setShowPreview] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditableCode(code);
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editableCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([editableCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || `code.${getFileExtension(language)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRun = () => {
    if (onRun) {
      onRun(editableCode);
    }
  };

  const handleCodeEdit = (newCode: string) => {
    setEditableCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const getFileExtension = (lang: string): string => {
    const extensions: { [key: string]: string } = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      c: 'c',
      csharp: 'cs',
      php: 'php',
      ruby: 'rb',
      go: 'go',
      rust: 'rs',
      swift: 'swift',
      kotlin: 'kt',
      scala: 'scala',
      html: 'html',
      css: 'css',
      scss: 'scss',
      sass: 'sass',
      json: 'json',
      xml: 'xml',
      yaml: 'yml',
      sql: 'sql',
      bash: 'sh',
      shell: 'sh',
      powershell: 'ps1',
      dockerfile: 'dockerfile',
      markdown: 'md'
    };
    return extensions[lang.toLowerCase()] || 'txt';
  };

  const getLanguageLabel = (lang: string): string => {
    const labels: { [key: string]: string } = {
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      python: 'Python',
      java: 'Java',
      cpp: 'C++',
      c: 'C',
      csharp: 'C#',
      php: 'PHP',
      ruby: 'Ruby',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      kotlin: 'Kotlin',
      scala: 'Scala',
      html: 'HTML',
      css: 'CSS',
      scss: 'SCSS',
      sass: 'Sass',
      json: 'JSON',
      xml: 'XML',
      yaml: 'YAML',
      sql: 'SQL',
      bash: 'Bash',
      shell: 'Shell',
      powershell: 'PowerShell',
      dockerfile: 'Dockerfile',
      markdown: 'Markdown'
    };
    return labels[lang.toLowerCase()] || lang.toUpperCase();
  };

  const customStyle = {
    margin: 0,
    padding: '1.25rem',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    borderRadius: 0,
    maxHeight: expanded ? 'none' : maxHeight,
    overflow: expanded ? 'visible' : (maxHeight !== 'none' ? 'auto' : 'visible')
  };

  const containerClasses = `
    rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 
    transition-all duration-300 ${expanded ? 'fixed inset-4 z-50 max-w-none max-h-none' : 'my-6'}
    ${className}
  `;

  return (
    <>
      {expanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setExpanded(false)} />
      )}
      
      <div className={containerClasses}>
        {/* Header */}
        {(title || filename || showCopyButton || showDownloadButton || showExpandButton || showRunButton) && (
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              {filename && (
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {filename}
                  </span>
                </div>
              )}
              {title && !filename && (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {title}
                </span>
              )}
              <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                {getLanguageLabel(language)}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {editable && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors px-2 py-1 rounded"
                  title={isEditing ? "View mode" : "Edit mode"}
                >
                  {isEditing ? <Eye className="h-3 w-3 mr-1" /> : <EyeOff className="h-3 w-3 mr-1" />}
                  {isEditing ? 'View' : 'Edit'}
                </button>
              )}
              
              {showRunButton && (
                <button
                  onClick={handleRun}
                  className="flex items-center text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors px-2 py-1 rounded"
                  title="Run code"
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run
                </button>
              )}
              
              {showDownloadButton && (
                <button
                  onClick={handleDownload}
                  className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors px-2 py-1 rounded"
                  title="Download file"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </button>
              )}
              
              {showExpandButton && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors px-2 py-1 rounded"
                  title={expanded ? "Minimize" : "Expand"}
                >
                  {expanded ? (
                    <>
                      <Minimize2 className="h-3 w-3 mr-1" />
                      Minimize
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-3 w-3 mr-1" />
                      Expand
                    </>
                  )}
                </button>
              )}
              
              {showCopyButton && (
                <button
                  onClick={handleCopy}
                  className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors px-2 py-1 rounded"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Code Content */}
        <div className="relative">
          {isEditing ? (
            <textarea
              ref={textareaRef}
              value={editableCode}
              onChange={(e) => handleCodeEdit(e.target.value)}
              className="w-full h-96 p-5 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
              spellCheck={false}
            />
          ) : (
            <SyntaxHighlighter
              language={language}
              style={isDark ? vscDarkPlus : vs}
              showLineNumbers={showLineNumbers}
              customStyle={customStyle}
              wrapLines={highlightLines.length > 0}
              lineProps={(lineNumber) => ({
                style: {
                  backgroundColor: highlightLines.includes(lineNumber)
                    ? 'rgba(255, 255, 0, 0.1)'
                    : 'transparent'
                }
              })}
            >
              {editableCode}
            </SyntaxHighlighter>
          )}
          
          {/* Line count indicator */}
          <div className="absolute top-2 right-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {editableCode.split('\n').length} lines
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBlock;