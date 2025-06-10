// src/components/common/InfoBox.tsx
'use client';

import React from 'react';
import { 
  Info, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Lightbulb,
  Zap,
  Shield,
  ExternalLink,
  X
} from 'lucide-react';

type InfoBoxType = 
  | 'info' 
  | 'warning' 
  | 'success' 
  | 'error' 
  | 'tip' 
  | 'note'
  | 'danger'
  | 'security';

interface InfoBoxProps {
  type?: InfoBoxType;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  icon?: React.ReactNode;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    href?: string;
    external?: boolean;
  }>;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  type = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = '',
  icon,
  actions = []
}) => {
  const getTypeConfig = (type: InfoBoxType) => {
    const configs = {
      info: {
        containerClass: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
        iconClass: 'text-blue-600 dark:text-blue-400',
        titleClass: 'text-blue-800 dark:text-blue-200',
        textClass: 'text-blue-700 dark:text-blue-300',
        icon: Info,
        defaultTitle: 'Note'
      },
      security: {
        containerClass: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800',
        iconClass: 'text-indigo-600 dark:text-indigo-400',
        titleClass: 'text-indigo-800 dark:text-indigo-200',
        textClass: 'text-indigo-700 dark:text-indigo-300',
        icon: Shield,
        defaultTitle: 'Security Note'
      }
    };
    
    return configs[type];
  };

  const config = getTypeConfig(type);
  const IconComponent = icon || config.icon;

  const renderAction = (action: NonNullable<InfoBoxProps['actions']>[0], index: number) => {
    const baseClasses = "px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const primaryClasses = `${baseClasses} bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500`;
    const secondaryClasses = `${baseClasses} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-primary-500`;
    
    const className = action.variant === 'primary' ? primaryClasses : secondaryClasses;

    if (action.href) {
      return (
        <a
          key={index}
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          className={`${className} inline-flex items-center`}
          onClick={action.onClick}
        >
          {action.label}
          {action.external && <ExternalLink className="ml-1 h-3 w-3" />}
        </a>
      );
    }

    return (
      <button
        key={index}
        onClick={action.onClick}
        className={className}
      >
        {action.label}
      </button>
    );
  };

  return (
    <div className={`border rounded-lg p-4 my-6 ${config.containerClass} ${className}`}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 ${config.iconClass}`}>
          {React.isValidElement(IconComponent) ? (
            IconComponent
          ) : (
            React.createElement(IconComponent as React.ComponentType<any>, {
              className: "h-5 w-5"
            })
          )}
        </div>
        
        <div className="ml-3 flex-1">
          {(title || config.defaultTitle) && (
            <h5 className={`font-semibold mb-2 ${config.titleClass}`}>
              {title || config.defaultTitle}
            </h5>
          )}
          
          <div className={`text-sm ${config.textClass}`}>
            {children}
          </div>
          
          {actions.length > 0 && (
            <div className="mt-4 flex items-center space-x-3">
              {actions.map(renderAction)}
            </div>
          )}
        </div>
        
        {dismissible && (
          <button
            onClick={onDismiss}
            className={`flex-shrink-0 ml-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors ${config.iconClass}`}
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoBox; 'Information'