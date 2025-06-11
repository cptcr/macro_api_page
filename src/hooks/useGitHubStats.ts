// src/hooks/useGitHubStats.ts
'use client';

import { useState, useEffect } from 'react';

interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  downloads: number;
  contributors: number;
  lastUpdate: string;
  isLoading: boolean;
  error: string | null;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
}

interface NPMStats {
  downloads: {
    downloads: number;
  };
}

interface GitHubContributor {
  login: string;
  contributions: number;
}

export const useGitHubStats = (repo: string = 'cptcr/macro_api'): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 1200, // Fallback values
    forks: 89,
    issues: 12,
    downloads: 10000,
    contributors: 15,
    lastUpdate: new Date().toISOString(),
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setStats(prev => ({ ...prev, isLoading: true, error: null }));

        // Fetch GitHub repository stats
        const repoResponse = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!repoResponse.ok) {
          throw new Error(`GitHub API error: ${repoResponse.status}`);
        }

        const repoData: GitHubRepo = await repoResponse.json();

        // Fetch contributors count
        const contributorsResponse = await fetch(`https://api.github.com/repos/${repo}/contributors`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        let contributorsCount = 15; // Fallback
        if (contributorsResponse.ok) {
          const contributorsData: GitHubContributor[] = await contributorsResponse.json();
          contributorsCount = contributorsData.length;
        }

        // Fetch npm download stats (last 30 days)
        let downloadsCount = 10000; // Fallback
        try {
          const packageName = 'macro_api';
          const npmResponse = await fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
          
          if (npmResponse.ok) {
            const npmData: NPMStats = await npmResponse.json();
            downloadsCount = npmData.downloads.downloads || 10000;
          }
        } catch (npmError) {
          console.warn('NPM stats unavailable, using fallback');
        }

        setStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          issues: repoData.open_issues_count,
          downloads: downloadsCount,
          contributors: contributorsCount,
          lastUpdate: repoData.updated_at,
          isLoading: false,
          error: null
        });

      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch stats'
        }));
      }
    };

    fetchStats();

    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [repo]);

  return stats;
};

// Hook for animated counting effect
export const useAnimatedCount = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
};

// Format numbers for display
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};