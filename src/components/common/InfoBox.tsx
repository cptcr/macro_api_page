// src/components/common/InfoBox.tsx
'use client';

import React from 'react';
import { 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  Shield, 
  Zap, 
  AlertCircle,
  Sparkles,
  Target
} from 'lucide-react';

type InfoBoxType = 'info' | 'warning' | 'error' | 'success' | 'tip' | 'security' | 'performance' | 'note';

interface InfoBoxProps {
  type: InfoBoxType;
  title?: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  type,
  title,
  children,
  className = '',
  showIcon = true
}) => {
  const getIconAndStyles = () => {
    switch (type) {
      case 'info':
        return {
          icon: Info,
          containerClasses: 'border-blue-500/30 dark:border-blue-400/30 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/50',
          iconClasses: 'text-blue-600 dark:text-blue-400',
          titleClasses: 'text-blue-800 dark:text-blue-200',
          textClasses: 'text-blue-700 dark:text-blue-300'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          containerClasses: 'border-yellow-500/30 dark:border-yellow-400/30 bg-gradient-to-r from-yellow-50/50 to-yellow-100/50 dark:from-yellow-950/50 dark:to-yellow-900/50',
          iconClasses: 'text-yellow-600 dark:text-yellow-400',
          titleClasses: 'text-yellow-800 dark:text-yellow-200',
          textClasses: 'text-yellow-700 dark:text-yellow-300'
        };
      case 'error':
        return {
          icon: XCircle,
          containerClasses: 'border-red-500/30 dark:border-red-400/30 bg-gradient-to-r from-red-50/50 to-red-100/50 dark:from-red-950/50 dark:to-red-900/50',
          iconClasses: 'text-red-600 dark:text-red-400',
          titleClasses: 'text-red-800 dark:text-red-200',
          textClasses: 'text-red-700 dark:text-red-300'
        };
      case 'success':
        return {
          icon: CheckCircle,
          containerClasses: 'border-green-500/30 dark:border-green-400/30 bg-gradient-to-r from-green-50/50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/50',
          iconClasses: 'text-green-600 dark:text-green-400',
          titleClasses: 'text-green-800 dark:text-green-200',
          textClasses: 'text-green-700 dark:text-green-300'
        };
      case 'tip':
        return {
          icon: Lightbulb,
          containerClasses: 'border-purple-500/30 dark:border-purple-400/30 bg-gradient-to-r from-purple-50/50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/50',
          iconClasses: 'text-purple-600 dark:text-purple-400',
          titleClasses: 'text-purple-800 dark:text-purple-200',
          textClasses: 'text-purple-700 dark:text-purple-300'
        };
      case 'security':
        return {
          icon: Shield,
          containerClasses: 'border-orange-500/30 dark:border-orange-400/30 bg-gradient-to-r from-orange-50/50 to-orange-100/50 dark:from-orange-950/50 dark:to-orange-900/50',
          iconClasses: 'text-orange-600 dark:text-orange-400',
          titleClasses: 'text-orange-800 dark:text-orange-200',
          textClasses: 'text-orange-700 dark:text-orange-300'
        };
      case 'performance':
        return {
          icon: Zap,
          containerClasses: 'border-indigo-500/30 dark:border-indigo-400/30 bg-gradient-to-r from-indigo-50/50 to-indigo-100/50 dark:from-indigo-950/50 dark:to-indigo-900/50',
          iconClasses: 'text-indigo-600 dark:text-indigo-400',
          titleClasses: 'text-indigo-800 dark:text-indigo-200',
          textClasses: 'text-indigo-700 dark:text-indigo-300'
        };
      case 'note':
        return {
          icon: AlertCircle,
          containerClasses: 'border-gray-500/30 dark:border-gray-400/30 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/50',
          iconClasses: 'text-gray-600 dark:text-gray-400',
          titleClasses: 'text-gray-800 dark:text-gray-200',
          textClasses: 'text-gray-700 dark:text-gray-300'
        };
      default:
        return {
          icon: Info,
          containerClasses: 'border-blue-500/30 dark:border-blue-400/30 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/50',
          iconClasses: 'text-blue-600 dark:text-blue-400',
          titleClasses: 'text-blue-800 dark:text-blue-200',
          textClasses: 'text-blue-700 dark:text-blue-300'
        };
    }
  };

  const { icon: Icon, containerClasses, iconClasses, titleClasses, textClasses } = getIconAndStyles();

  return (
    <div className={`my-6 ${className}`}>
      <div className={`glass-card border ${containerClasses} relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${
            type === 'info' ? 'from-blue-400 to-blue-600' :
            type === 'warning' ? 'from-yellow-400 to-yellow-600' :
            type === 'error' ? 'from-red-400 to-red-600' :
            type === 'success' ? 'from-green-400 to-green-600' :
            type === 'tip' ? 'from-purple-400 to-purple-600' :
            type === 'security' ? 'from-orange-400 to-orange-600' :
            type === 'performance' ? 'from-indigo-400 to-indigo-600' :
            'from-gray-400 to-gray-600'
          } blur-3xl transform translate-x-16 -translate-y-16`} />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="flex items-start space-x-4">
            {/* Enhanced Icon */}
            {showIcon && (
              <div className={`flex-shrink-0 p-2 glass rounded-xl ${
                type === 'tip' ? 'animate-pulse' : ''
              }`}>
                <Icon className={`h-5 w-5 ${iconClasses} ${
                  type === 'performance' ? 'animate-pulse' : ''
                }`} />
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              {title && (
                <div className="flex items-center space-x-2 mb-3">
                  <h4 className={`font-semibold text-sm ${titleClasses}`}>
                    {title}
                  </h4>
                  {type === 'tip' && (
                    <Sparkles className="h-3 w-3 text-purple-500 animate-pulse" />
                  )}
                  {type === 'performance' && (
                    <Target className="h-3 w-3 text-indigo-500" />
                  )}
                </div>
              )}
              
              <div className={`text-sm leading-relaxed ${textClasses} prose prose-sm max-w-none`}>
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced border effect */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${
          type === 'info' ? 'from-blue-500/20 via-transparent to-blue-500/20' :
          type === 'warning' ? 'from-yellow-500/20 via-transparent to-yellow-500/20' :
          type === 'error' ? 'from-red-500/20 via-transparent to-red-500/20' :
          type === 'success' ? 'from-green-500/20 via-transparent to-green-500/20' :
          type === 'tip' ? 'from-purple-500/20 via-transparent to-purple-500/20' :
          type === 'security' ? 'from-orange-500/20 via-transparent to-orange-500/20' :
          type === 'performance' ? 'from-indigo-500/20 via-transparent to-indigo-500/20' :
          'from-gray-500/20 via-transparent to-gray-500/20'
        } bg-origin-border mask-border mask-composite-exclude pointer-events-none`} />
      </div>
    </div>
  );
};

export default InfoBox;