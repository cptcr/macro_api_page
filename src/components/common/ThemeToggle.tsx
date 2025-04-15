'use client';

import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${
          theme === 'light'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${
          theme === 'dark'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full ${
          theme === 'system'
            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        aria-label="System preference"
      >
        <Laptop className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ThemeToggle;