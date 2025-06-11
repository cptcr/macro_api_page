// src/hooks/useRealtimeStats.ts
'use client';

import { useState, useEffect } from 'react';

interface GitHubStats {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  language: string;
  topics: string[];
}

interface NPMStats {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

interface RealtimeStats {
  github: GitHubStats | null;
  npm: NPMStats | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export const useRealtimeStats = (repoOwner = 'cptcr', repoName = 'macro_api', packageName = 'macro_api') => {
  const [stats, setStats] = useState<RealtimeStats>({
    github: null,
    npm: null,
    loading: true,
    error: null,
    lastUpdated: null
  });

  const fetchGitHubStats = async (): Promise<GitHubStats | null> => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`, {
        headers: {
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        stargazers_count: data.stargazers_count || 0,
        forks_count: data.forks_count || 0,
        open_issues_count: data.open_issues_count || 0,
        subscribers_count: data.subscribers_count || 0,
        size: data.size || 0,
        created_at: data.created_at,
        updated_at: data.updated_at,
        language: data.language || 'TypeScript',
        topics: data.topics || []
      };
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      return null;
    }
  };

  const fetchNPMStats = async (): Promise<NPMStats | null> => {
    try {
      // Get last week's downloads using npm registry API
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const response = await fetch(
        `https://api.npmjs.org/downloads/point/${startDate}:${endDate}/${packageName}`
      );

      if (!response.ok) {
        throw new Error(`NPM API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        downloads: data.downloads || 0,
        start: data.start || startDate,
        end: data.end || endDate,
        package: data.package || packageName
      };
    } catch (error) {
      console.error('Error fetching NPM stats:', error);
      return null;
    }
  };

  const fetchAllStats = async () => {
    setStats(prev => ({ ...prev, loading: true, error: null }));

    try {
      const [githubData, npmData] = await Promise.all([
        fetchGitHubStats(),
        fetchNPMStats()
      ]);

      setStats({
        github: githubData,
        npm: npmData,
        loading: false,
        error: null,
        lastUpdated: new Date()
      });
    } catch (error) {
      setStats(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch stats',
        lastUpdated: new Date()
      }));
    }
  };

  const refreshStats = () => {
    fetchAllStats();
  };

  useEffect(() => {
    fetchAllStats();

    // Refresh stats every 5 minutes
    const interval = setInterval(fetchAllStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [repoOwner, repoName, packageName]);

  return {
    ...stats,
    refreshStats
  };
};

// Utility functions for formatting stats
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatDownloads = (downloads: number): string => {
  if (downloads >= 1000000) {
    return (downloads / 1000000).toFixed(1) + 'M';
  }
  if (downloads >= 1000) {
    return (downloads / 1000).toFixed(1) + 'K';
  }
  return downloads.toString();
};

export const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};