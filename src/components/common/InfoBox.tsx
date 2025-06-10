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
      warning: {
        containerClass: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
        iconClass: 'text-yellow-600 dark:text-yellow-400',
        titleClass: 'text-yellow-800 dark:text-yellow-200',
        textClass: 'text-yellow-700 dark:text-yellow-300',
        icon: AlertTriangle,
        defaultTitle: 'Warning'
      },
      success: {
        containerClass: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
        iconClass: 'text-green-600 dark:text-green-400',
        titleClass: 'text-green-800 dark:text-green-200',
        textClass: 'text-green-700 dark:text-green-300',
        icon: CheckCircle,
        defaultTitle: 'Success'
      },
      error: {
        containerClass: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
        iconClass: 'text-red-600 dark:text-red-400',
        titleClass: 'text-red-800 dark:text-red-200',
        textClass: 'text-red-700 dark:text-red-300',
        icon: XCircle,
        defaultTitle: 'Error'
      },
      tip: {
        containerClass: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
        iconClass: 'text-purple-600 dark:text-purple-400',
        titleClass: 'text-purple-800 dark:text-purple-200',
        textClass: 'text-purple-700 dark:text-purple-300',
        icon: Lightbulb,
        defaultTitle: 'Tip'
      },
      note: {
        containerClass: 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800',
        iconClass: 'text-gray-600 dark:text-gray-400',
        titleClass: 'text-gray-800 dark:text-gray-200',
        textClass: 'text-gray-700 dark:text-gray-300',
        icon: AlertCircle,
        defaultTitle: 'Note'
      },
      danger: {
        containerClass: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
        iconClass: 'text-red-600 dark:text-red-400',
        titleClass: 'text-red-800 dark:text-red-200',
        textClass: 'text-red-700 dark:text-red-300',
        icon: Zap,
        defaultTitle: 'Danger'
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