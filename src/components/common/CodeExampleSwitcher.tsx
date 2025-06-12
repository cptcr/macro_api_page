// src/components/common/CodeExampleSwitcher.tsx
'use client';

import React, { useState } from 'react';
import { Copy, Check, Code, FileCode, Download, ExternalLink, Play } from 'lucide-react';

interface CodeExampleSwitcherProps {
  typescript: string;
  javascript: string;
  esm?: string;
  title?: string;
  description?: string;
  showCopy?: boolean;
  showTitle?: boolean;
  className?: string;
}

const CodeExampleSwitcher: React.FC<CodeExampleSwitcherProps> = ({
  typescript,
  javascript,
  esm,
  title,
  description,
  showCopy = true,
  showTitle = true,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'typescript' | 'javascript' | 'esm'>('typescript');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    switch (activeTab) {
      case 'typescript':
        return typescript;
      case 'javascript':
        return javascript;
      case 'esm':
        return esm || typescript;
      default:
        return typescript;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const tabs = [
    { id: 'typescript' as const, label: 'TypeScript', icon: FileCode, available: !!typescript },
    { id: 'javascript' as const, label: 'JavaScript', icon: Code, available: !!javascript },
    ...(esm ? [{ id: 'esm' as const, label: 'ESM', icon: Download, available: true }] : [])
  ];

  return (
    <div className={`w-full my-6 ${className}`}>
      {/* Enhanced Header */}
      {(showTitle && title) && (
        <div className="mb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 glass rounded-lg">
              <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          </div>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Enhanced Code Block Container */}
      <div className="glass-card border border-white/20 dark:border-white/10 overflow-hidden shadow-xl">
        {/* Enhanced Tab Header */}
        <div className="bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 border-b border-white/20 dark:border-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Language Tabs */}
            <div className="flex space-x-1">
              {tabs.filter(tab => tab.available).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'glass bg-white/20 dark:bg-white/10 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-400/30 shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Run Button (Visual only) */}
              <button className="btn-ghost p-2 rounded-lg hover:bg-green-500/10 group">
                <Play className="h-4 w-4 text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400" />
              </button>

              {/* Copy Button */}
              {showCopy && (
                <button
                  onClick={copyToClipboard}
                  className={`btn-ghost p-2 rounded-lg transition-all duration-300 ${
                    copied
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'hover:bg-blue-500/10 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  title={copied ? 'Copied!' : 'Copy code'}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}

              {/* External Link Button */}
              <button className="btn-ghost p-2 rounded-lg hover:bg-purple-500/10 group">
                <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Code Content */}
        <div className="relative">
          {/* Code Block */}
          <pre className="overflow-x-auto p-6 text-sm leading-relaxed scrollbar-modern bg-gradient-to-br from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30">
            <code className={`language-${activeTab === 'esm' ? 'javascript' : activeTab} text-gray-800 dark:text-gray-200`}>
              {getCode()}
            </code>
          </pre>

          {/* Language Badge */}
          <div className="absolute top-4 right-4">
            <span className="glass px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full border border-white/20 dark:border-white/10">
              {tabs.find(tab => tab.id === activeTab)?.label || 'Code'}
            </span>
          </div>

          {/* Copy Success Overlay */}
          {copied && (
            <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center rounded-lg animate-fade-in">
              <div className="glass-card px-4 py-2 border border-green-500/30">
                <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-medium">Copied to clipboard!</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Footer with Syntax Info */}
        <div className="bg-gradient-to-r from-gray-50/30 to-gray-100/30 dark:from-gray-800/30 dark:to-gray-900/30 border-t border-white/20 dark:border-white/10 px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Syntax highlighted</span>
            </span>
            <span className="font-mono">
              {getCode().split('\n').length} lines
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Copy Notification */}
      {copied && (
        <div className="fixed top-4 right-4 z-50 animate-slide-up">
          <div className="glass-card px-4 py-3 border border-green-500/30 shadow-2xl">
            <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Code copied successfully!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExampleSwitcher;