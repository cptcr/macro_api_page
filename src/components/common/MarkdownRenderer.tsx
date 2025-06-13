'use client';

import React from 'react';
import { CheckCircle, AlertTriangle, Info, Lightbulb, Code, ExternalLink, Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  // Simple markdown parser for documentation
  const parseMarkdown = (text: string): JSX.Element => {
    // Split by lines for processing
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex].trim();
      
      // Skip empty lines
      if (!line) {
        currentIndex++;
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={currentIndex} className="text-responsive-lg font-bold mb-6 text-gradient-secondary">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={currentIndex} className="text-responsive-md font-bold mb-4 text-gradient mt-8">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="text-xl sm:text-2xl font-semibold mb-3 mt-6">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={currentIndex} className="text-lg sm:text-xl font-semibold mb-2 mt-4">
            {line.substring(5)}
          </h4>
        );
      }
      
      // Code blocks
      else if (line.startsWith('```')) {
        const language = line.substring(3);
        const codeLines: string[] = [];
        currentIndex++;
        
        while (currentIndex < lines.length && !lines[currentIndex].startsWith('```')) {
          codeLines.push(lines[currentIndex]);
          currentIndex++;
        }
        
        const codeContent = codeLines.join('\n');
        elements.push(
          <div key={currentIndex} className="glass-card my-6 overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {language || 'code'}
                </span>
              </div>
              <button
                onClick={() => handleCopyCode(codeContent, `code-${currentIndex}`)}
                className="glass-button px-3 py-1 text-sm flex items-center space-x-2"
              >
                {copied === `code-${currentIndex}` ? (
                  <>
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100 scrollbar-modern">
                <code>{codeContent}</code>
              </pre>
            </div>
          </div>
        );
      }
      
      // Info boxes (custom syntax)
      else if (line.startsWith(':::')) {
        const type = line.substring(3).trim();
        const infoLines: string[] = [];
        currentIndex++;
        
        while (currentIndex < lines.length && !lines[currentIndex].startsWith(':::')) {
          infoLines.push(lines[currentIndex]);
          currentIndex++;
        }
        
        const infoContent = infoLines.join('\n');
        elements.push(renderInfoBox(type, infoContent, currentIndex));
      }
      
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItems: string[] = [];
        let listIndex = currentIndex;
        
        while (listIndex < lines.length && (lines[listIndex].startsWith('- ') || lines[listIndex].startsWith('* '))) {
          listItems.push(lines[listIndex].substring(2));
          listIndex++;
        }
        
        elements.push(
          <ul key={currentIndex} className="space-y-2 mb-6 ml-6">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{parseInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
        
        currentIndex = listIndex - 1;
      }
      
      // Numbered lists
      else if (/^\d+\.\s/.test(line)) {
        const listItems: string[] = [];
        let listIndex = currentIndex;
        
        while (listIndex < lines.length && /^\d+\.\s/.test(lines[listIndex])) {
          listItems.push(lines[listIndex].replace(/^\d+\.\s/, ''));
          listIndex++;
        }
        
        elements.push(
          <ol key={currentIndex} className="space-y-2 mb-6 ml-6">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-xs font-medium flex items-center justify-center mr-3 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-muted-foreground">{parseInlineMarkdown(item)}</span>
              </li>
            ))}
          </ol>
        );
        
        currentIndex = listIndex - 1;
      }
      
      // Regular paragraphs
      else {
        elements.push(
          <p key={currentIndex} className="text-muted-foreground leading-relaxed mb-4">
            {parseInlineMarkdown(line)}
          </p>
        );
      }
      
      currentIndex++;
    }

    return <div className="space-y-2">{elements}</div>;
  };

  // Parse inline markdown (bold, italic, links, code)
  const parseInlineMarkdown = (text: string): React.ReactNode => {
    // Split text by markdown patterns while preserving the patterns
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[([^\]]+)\]\(([^)]+)\))/);
    
    return parts.map((part, index) => {
      // Bold text
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      }
      // Italic text
      else if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="italic">{part.slice(1, -1)}</em>;
      }
      // Inline code
      else if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="glass px-2 py-1 rounded text-sm font-mono text-primary">
            {part.slice(1, -1)}
          </code>
        );
      }
      // Links
      else if (part.match(/\[([^\]]+)\]\(([^)]+)\)/)) {
        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          const [, linkText, linkUrl] = match;
          return (
            <a
              key={index}
              href={linkUrl}
              target={linkUrl.startsWith('http') ? '_blank' : undefined}
              rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-primary hover:text-primary/80 underline inline-flex items-center"
            >
              {linkText}
              {linkUrl.startsWith('http') && <ExternalLink className="h-3 w-3 ml-1" />}
            </a>
          );
        }
      }
      // Regular text
      return part;
    });
  };

  // Render info boxes based on type
  const renderInfoBox = (type: string, content: string, key: number): JSX.Element => {
    const getInfoBoxConfig = (boxType: string) => {
      switch (boxType.toLowerCase()) {
        case 'tip':
        case 'hint':
          return {
            icon: Lightbulb,
            bgColor: 'from-blue-500/10 to-purple-500/10',
            borderColor: 'border-blue-500/20 dark:border-blue-400/20',
            iconColor: 'text-blue-600',
            textColor: 'text-blue-800 dark:text-blue-200',
            title: 'Tip'
          };
        case 'warning':
        case 'caution':
          return {
            icon: AlertTriangle,
            bgColor: 'from-yellow-500/10 to-orange-500/10',
            borderColor: 'border-yellow-500/20 dark:border-yellow-400/20',
            iconColor: 'text-yellow-600',
            textColor: 'text-yellow-800 dark:text-yellow-200',
            title: 'Warning'
          };
        case 'danger':
        case 'error':
          return {
            icon: AlertTriangle,
            bgColor: 'from-red-500/10 to-pink-500/10',
            borderColor: 'border-red-500/20 dark:border-red-400/20',
            iconColor: 'text-red-600',
            textColor: 'text-red-800 dark:text-red-200',
            title: 'Important'
          };
        case 'success':
          return {
            icon: CheckCircle,
            bgColor: 'from-green-500/10 to-emerald-500/10',
            borderColor: 'border-green-500/20 dark:border-green-400/20',
            iconColor: 'text-green-600',
            textColor: 'text-green-800 dark:text-green-200',
            title: 'Success'
          };
        default:
          return {
            icon: Info,
            bgColor: 'from-gray-500/10 to-slate-500/10',
            borderColor: 'border-gray-500/20 dark:border-gray-400/20',
            iconColor: 'text-gray-600',
            textColor: 'text-gray-800 dark:text-gray-200',
            title: 'Note'
          };
      }
    };

    const config = getInfoBoxConfig(type);
    const Icon = config.icon;

    return (
      <div key={key} className={`glass-card bg-gradient-to-r ${config.bgColor} ${config.borderColor} my-6`}>
        <div className="flex items-start space-x-4">
          <div className="glass rounded-xl p-3">
            <Icon className={`h-5 w-5 ${config.iconColor}`} />
          </div>
          <div className="flex-1">
            <h4 className={`font-semibold text-sm ${config.textColor} mb-2`}>
              {config.title}
            </h4>
            <div className={`text-sm leading-relaxed ${config.textColor}`}>
              {parseMarkdown(content)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`markdown-content ${className}`}>
      {parseMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;