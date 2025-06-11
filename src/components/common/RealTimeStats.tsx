// src/components/common/RealTimeStats.tsx
'use client';

import React from 'react';
import { Github, Download, Users, Star, GitFork, AlertCircle, RefreshCw } from 'lucide-react';
import { useGitHubStats, useAnimatedCount, formatNumber } from '@/hooks/useGitHubStats';

interface StatsItemProps {
  icon: React.ElementType;
  label: string;
  value: number;
  isLoading: boolean;
  color?: string;
  prefix?: string;
  suffix?: string;
}

const StatsItem: React.FC<StatsItemProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  isLoading, 
  color = 'text-blue-600 dark:text-blue-400',
  prefix = '',
  suffix = ''
}) => {
  const animatedValue = useAnimatedCount(value, 1500);
  
  return (
    <div className="text-center group">
      <div className="flex items-center justify-center mb-3">
        <div className={`p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 ${isLoading ? 'animate-pulse' : ''}`}>
          <Icon className={`h-6 w-6 ${color} ${isLoading ? 'animate-spin' : ''}`} />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {isLoading ? (
          <div className="h-10 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
        ) : (
          <span>
            {prefix}{formatNumber(animatedValue)}{suffix}
          </span>
        )}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  );
};

interface RealTimeStatsProps {
  variant?: 'default' | 'compact' | 'hero';
  showLabels?: boolean;
  className?: string;
}

const RealTimeStats: React.FC<RealTimeStatsProps> = ({ 
  variant = 'default', 
  showLabels = true,
  className = ''
}) => {
  const stats = useGitHubStats();

  if (variant === 'compact') {
    return (
      <div className={`flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-1" />
          <span>{stats.isLoading ? '...' : formatNumber(stats.stars)} stars</span>
        </div>
        <div className="flex items-center">
          <Download className="h-4 w-4 mr-1" />
          <span>{stats.isLoading ? '...' : formatNumber(stats.downloads)} downloads</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{stats.isLoading ? '...' : stats.contributors} contributors</span>
        </div>
        {stats.error && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span>Stats unavailable</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto ${className}`}>
        <StatsItem
          icon={Star}
          label="GitHub Stars"
          value={stats.stars}
          isLoading={stats.isLoading}
          color="text-yellow-500"
          suffix="+"
        />
        <StatsItem
          icon={Download}
          label="Downloads"
          value={stats.downloads}
          isLoading={stats.isLoading}
          color="text-green-500"
          suffix="+"
        />
        <StatsItem
          icon={Users}
          label="Contributors"
          value={stats.contributors}
          isLoading={stats.isLoading}
          color="text-purple-500"
          suffix="+"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <StatsItem
          icon={Star}
          label="GitHub Stars"
          value={stats.stars}
          isLoading={stats.isLoading}
          color="text-yellow-500"
        />
        <StatsItem
          icon={Download}
          label="Monthly Downloads"
          value={stats.downloads}
          isLoading={stats.isLoading}
          color="text-green-500"
        />
        <StatsItem
          icon={GitFork}
          label="Forks"
          value={stats.forks}
          isLoading={stats.isLoading}
          color="text-blue-500"
        />
        <StatsItem
          icon={Users}
          label="Contributors"
          value={stats.contributors}
          isLoading={stats.isLoading}
          color="text-purple-500"
        />
        <StatsItem
          icon={AlertCircle}
          label="Open Issues"
          value={stats.issues}
          isLoading={stats.isLoading}
          color="text-red-500"
        />
      </div>
      
      {/* Last updated indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
          <RefreshCw className={`h-3 w-3 mr-1 ${stats.isLoading ? 'animate-spin' : ''}`} />
          <span>
            {stats.isLoading ? 'Updating...' : `Last updated: ${new Date(stats.lastUpdate).toLocaleDateString()}`}
          </span>
        </div>
        {stats.error && (
          <div className="mt-2 text-xs text-red-500 flex items-center justify-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            <span>Live stats temporarily unavailable</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealTimeStats;