import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, FileText, Calendar } from 'lucide-react';

const NotionDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-gray-800 dark:text-gray-200">
            <FileText className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Notion API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete workspace and database management with the Notion API
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm">
            Database Operations
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Page Management
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Block Editing
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            User Management
          </span>
        </div>
      </div>

      ## Overview

      The Notion API wrapper provides comprehensive access to Notion's workspace functionality. Create and manage databases, pages, blocks, and user permissions programmatically with full TypeScript support.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Database Operations</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create, query, and manage Notion databases</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <FileText className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Page Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create, update, and organize pages</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Block Editing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manipulate page content with blocks</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-orange-600 mb-2" />
          <h3 className="font-semibold mb-1">User Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage workspace users and permissions</p>
        </div>
      </div>

      ## Installation

      <CodeExampleSwitcher
        typescript="npm install macro_api"
        javascript="npm install macro_api"
        title="Install the package"
      />

      ## Quick Start

      <CodeExampleSwitcher
        typescript={`import { NotionAPI } from 'macro_api';

// Initialize the client
const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Create a new page
async function createPage() {
  try {
    const page = await notion.createPage({
      parent: {
        database_id: 'your-database-id'
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: 'My New Page'
              }
            }
          ]
        }
      }
    });
    console.log('Page created:', page.id);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        javascript={`const { NotionAPI } = require('macro_api');

// Initialize the client
const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Create a new page
async function createPage() {
  try {
    const page = await notion.createPage({
      parent: {
        database_id: 'your-database-id'
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: 'My New Page'
              }
            }
          ]
        }
      }
    });
    console.log('Page created:', page.id);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a Notion integration and API key to use the Notion API service.
      </InfoBox>

      ### Getting Your Notion API Key

      1. Go to [My Integrations](https://www.notion.so/my-integrations) in your Notion workspace
      2. Click "Create new integration"
      3. Fill in the integration details (name, logo, etc.)
      4. Select the capabilities your integration needs
      5. Choose the content capabilities (Read content, Update content, Insert content)
      6. Submit and copy your Internal Integration Token
      7. Share your database or pages with your integration

      <CodeExampleSwitcher
        typescript={`// .env file
NOTION_API_KEY=secret_your_notion_integration_token_here

// In your application
import { NotionAPI } from 'macro_api';

const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});`}
        javascript={`// .env file
NOTION_API_KEY=secret_your_notion_integration_token_here

// In your application
const { NotionAPI } = require('macro_api');

const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Integration Permissions">
        Remember to share your databases and pages with your integration. Without proper sharing, your integration won't be able to access the content.
      </InfoBox>

      ## Configuration

      ### Constructor Options

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Property</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Required</th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">apiKey</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your Notion integration token</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">version</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">API version (defaults to 2022-06-28)</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Database Operations

      <CodeExampleSwitcher
        typescript={`// Get database information
async function getDatabase(databaseId: string) {
  const database = await notion.getDatabase(databaseId);
  console.log('Database:', database.title);
  console.log('Properties:', Object.keys(database.properties));
  return database;
}

// Query database entries
async function queryDatabase(databaseId: string) {
  const response = await notion.queryDatabase(databaseId, {
    filter: {
      property: 'Status',
      select: {
        equals: 'Done'
      }
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending'
      }
    ],
    page_size: 50
  });
  
  console.log(\`Found \${response.results.length} entries\`);
  return response.results;
}

// Create a new database
async function createDatabase(parentPageId: string) {
  const database = await notion.createDatabase({
    parent: {
      page_id: parentPageId
    },
    title: [
      {
        text: {
          content: 'Task Database'
        }
      }
    ],
    properties: {
      Name: {
        title: {}
      },
      Status: {
        select: {
          options: [
            { name: 'Not started', color: 'gray' },
            { name: 'In progress', color: 'yellow' },
            { name: 'Done', color: 'green' }
          ]
        }
      },
      Priority: {
        select: {
          options: [
            { name: 'Low', color: 'green' },
            { name: 'Medium', color: 'yellow' },
            { name: 'High', color: 'red' }
          ]
        }
      },
      'Due Date': {
        date: {}
      },
      Notes: {
        rich_text: {}
      }
    }
  });
  
  console.log('Database created:', database.id);
  return database;
}`}
        javascript={`// Get database information
async function getDatabase(databaseId) {
  const database = await notion.getDatabase(databaseId);
  console.log('Database:', database.title);
  console.log('Properties:', Object.keys(database.properties));
  return database;
}

// Query database entries
async function queryDatabase(databaseId) {
  const response = await notion.queryDatabase(databaseId, {
    filter: {
      property: 'Status',
      select: {
        equals: 'Done'
      }
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending'
      }
    ],
    page_size: 50
  });
  
  console.log(\`Found \${response.results.length} entries\`);
  return response.results;
}

// Create a new database
async function createDatabase(parentPageId) {
  const database = await notion.createDatabase({
    parent: {
      page_id: parentPageId
    },
    title: [
      {
        text: {
          content: 'Task Database'
        }
      }
    ],
    properties: {
      Name: {
        title: {}
      },
      Status: {
        select: {
          options: [
            { name: 'Not started', color: 'gray' },
            { name: 'In progress', color: 'yellow' },
            { name: 'Done', color: 'green' }
          ]
        }
      },
      Priority: {
        select: {
          options: [
            { name: 'Low', color: 'green' },
            { name: 'Medium', color: 'yellow' },
            { name: 'High', color: 'red' }
          ]
        }
      },
      'Due Date': {
        date: {}
      },
      Notes: {
        rich_text: {}
      }
    }
  });
  
  console.log('Database created:', database.id);
  return database;
}`}
        title="Database operations"
      />

      ### Page Management

      <CodeExampleSwitcher
        typescript={`// Get page information
async function getPage(pageId: string) {
  const page = await notion.getPage(pageId);
  console.log('Page title:', page.properties?.Name?.title?.[0]?.text?.content);
  return page;
}

// Create a new page in a database
async function createDatabasePage(databaseId: string) {
  const page = await notion.createPage({
    parent: {
      database_id: databaseId
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: 'Complete project documentation'
            }
          }
        ]
      },
      Status: {
        select: {
          name: 'In progress'
        }
      },
      Priority: {
        select: {
          name: 'High'
        }
      },
      'Due Date': {
        date: {
          start: '2024-12-31'
        }
      },
      Notes: {
        rich_text: [
          {
            text: {
              content: 'This task involves writing comprehensive documentation for the new project features.'
            }
          }
        ]
      }
    }
  });
  
  console.log('Page created:', page.id);
  return page;
}

// Create a standalone page
async function createStandalonePage(parentPageId: string) {
  const page = await notion.createPage({
    parent: {
      page_id: parentPageId
    },
    properties: {
      title: [
        {
          text: {
            content: 'Meeting Notes - Project Kickoff'
          }
        }
      ]
    }
  });
  
  console.log('Standalone page created:', page.id);
  return page;
}

// Update page properties
async function updatePage(pageId: string) {
  const updatedPage = await notion.updatePage(pageId, {
    properties: {
      Status: {
        select: {
          name: 'Done'
        }
      },
      Notes: {
        rich_text: [
          {
            text: {
              content: 'Task completed successfully. All documentation has been updated.'
            }
          }
        ]
      }
    }
  });
  
  console.log('Page updated:', updatedPage.id);
  return updatedPage;
}`}
        javascript={`// Get page information
async function getPage(pageId) {
  const page = await notion.getPage(pageId);
  console.log('Page title:', page.properties?.Name?.title?.[0]?.text?.content);
  return page;
}

// Create a new page in a database
async function createDatabasePage(databaseId) {
  const page = await notion.createPage({
    parent: {
      database_id: databaseId
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: 'Complete project documentation'
            }
          }
        ]
      },
      Status: {
        select: {
          name: 'In progress'
        }
      },
      Priority: {
        select: {
          name: 'High'
        }
      },
      'Due Date': {
        date: {
          start: '2024-12-31'
        }
      },
      Notes: {
        rich_text: [
          {
            text: {
              content: 'This task involves writing comprehensive documentation.'
            }
          }
        ]
      }
    }
  });
  
  console.log('Page created:', page.id);
  return page;
}

// Update page properties
async function updatePage(pageId) {
  const updatedPage = await notion.updatePage(pageId, {
    properties: {
      Status: {
        select: {
          name: 'Done'
        }
      }
    }
  });
  
  console.log('Page updated:', updatedPage.id);
  return updatedPage;
}`}
        title="Page management"
      />

      ### Block Operations

      <CodeExampleSwitcher
        typescript={`// Get page blocks
async function getPageBlocks(pageId: string) {
  const blocks = await notion.getBlocks(pageId);
  console.log(\`Found \${blocks.results.length} blocks\`);
  
  blocks.results.forEach((block, index) => {
    console.log(\`Block \${index + 1}: \${block.type}\`);
  });
  
  return blocks.results;
}

// Add content blocks to a page
async function addContentBlocks(pageId: string) {
  const blocks = await notion.appendBlocks(pageId, {
    children: [
      {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Project Overview'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'This document outlines the key objectives and deliverables for our upcoming project.'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Complete requirements analysis'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Develop prototype'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'to_do',
        to_do: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Review and approve final design'
              }
            }
          ],
          checked: false
        }
      }
    ]
  });
  
  console.log(\`Added \${blocks.results.length} blocks\`);
  return blocks;
}

// Update a specific block
async function updateBlock(blockId: string) {
  const updatedBlock = await notion.updateBlock(blockId, {
    paragraph: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'This paragraph has been updated with new content.'
          }
        }
      ]
    }
  });
  
  console.log('Block updated:', updatedBlock.id);
  return updatedBlock;
}

// Delete a block
async function deleteBlock(blockId: string) {
  const deletedBlock = await notion.deleteBlock(blockId);
  console.log('Block deleted:', deletedBlock.id);
  return deletedBlock;
}`}
        javascript={`// Get page blocks
async function getPageBlocks(pageId) {
  const blocks = await notion.getBlocks(pageId);
  console.log(\`Found \${blocks.results.length} blocks\`);
  
  blocks.results.forEach((block, index) => {
    console.log(\`Block \${index + 1}: \${block.type}\`);
  });
  
  return blocks.results;
}

// Add content blocks to a page
async function addContentBlocks(pageId) {
  const blocks = await notion.appendBlocks(pageId, {
    children: [
      {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Project Overview'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'This document outlines the key objectives.'
              }
            }
          ]
        }
      },
      {
        object: 'block',
        type: 'to_do',
        to_do: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Review and approve final design'
              }
            }
          ],
          checked: false
        }
      }
    ]
  });
  
  console.log(\`Added \${blocks.results.length} blocks\`);
  return blocks;
}`}
        title="Block operations"
      />

      ### User Management

      <CodeExampleSwitcher
        typescript={`// Get current user (the integration)
async function getCurrentUser() {
  const user = await notion.getCurrentUser();
  console.log('Current user:', user.name);
  console.log('User type:', user.type);
  return user;
}

// List all users in the workspace
async function listUsers() {
  const users = await notion.listUsers();
  console.log(\`Found \${users.results.length} users\`);
  
  users.results.forEach(user => {
    console.log(\`- \${user.name} (\${user.type})\`);
  });
  
  return users.results;
}

// Get specific user information
async function getUser(userId: string) {
  const user = await notion.getUser(userId);
  console.log('User details:', user);
  return user;
}

// Search for users (if you have workspace admin permissions)
async function searchUsers(query: string) {
  const users = await notion.searchUsers({
    query: query,
    page_size: 10
  });
  
  console.log(\`Found \${users.results.length} users matching "\${query}"\`);
  return users.results;
}`}
        javascript={`// Get current user (the integration)
async function getCurrentUser() {
  const user = await notion.getCurrentUser();
  console.log('Current user:', user.name);
  console.log('User type:', user.type);
  return user;
}

// List all users in the workspace
async function listUsers() {
  const users = await notion.listUsers();
  console.log(\`Found \${users.results.length} users\`);
  
  users.results.forEach(user => {
    console.log(\`- \${user.name} (\${user.type})\`);
  });
  
  return users.results;
}

// Get specific user information
async function getUser(userId) {
  const user = await notion.getUser(userId);
  console.log('User details:', user);
  return user;
}`}
        title="User management"
      />

      ### Search Functionality

      <CodeExampleSwitcher
        typescript={`// Search across the workspace
async function searchWorkspace(query: string) {
  const results = await notion.search({
    query: query,
    filter: {
      value: 'page',
      property: 'object'
    },
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time'
    },
    page_size: 20
  });
  
  console.log(\`Found \${results.results.length} pages matching "\${query}"\`);
  
  results.results.forEach(page => {
    const title = page.properties?.title?.title?.[0]?.text?.content || 
                 page.properties?.Name?.title?.[0]?.text?.content || 
                 'Untitled';
    console.log(\`- \${title}\`);
  });
  
  return results.results;
}

// Search for databases only
async function searchDatabases(query?: string) {
  const results = await notion.search({
    query: query,
    filter: {
      value: 'database',
      property: 'object'
    },
    page_size: 50
  });
  
  console.log(\`Found \${results.results.length} databases\`);
  
  results.results.forEach(database => {
    const title = database.title?.[0]?.text?.content || 'Untitled Database';
    console.log(\`- \${title}\`);
  });
  
  return results.results;
}

// Search with pagination
async function searchWithPagination(query: string) {
  let allResults: any[] = [];
  let hasMore = true;
  let startCursor: string | undefined;
  
  while (hasMore) {
    const response = await notion.search({
      query: query,
      start_cursor: startCursor,
      page_size: 100
    });
    
    allResults.push(...response.results);
    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }
  
  console.log(\`Total results found: \${allResults.length}\`);
  return allResults;
}`}
        javascript={`// Search across the workspace
async function searchWorkspace(query) {
  const results = await notion.search({
    query: query,
    filter: {
      value: 'page',
      property: 'object'
    },
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time'
    },
    page_size: 20
  });
  
  console.log(\`Found \${results.results.length} pages matching "\${query}"\`);
  return results.results;
}

// Search for databases only
async function searchDatabases(query) {
  const results = await notion.search({
    query: query,
    filter: {
      value: 'database',
      property: 'object'
    },
    page_size: 50
  });
  
  console.log(\`Found \${results.results.length} databases\`);
  return results.results;
}`}
        title="Search functionality"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        The Notion API has rate limits. Implement proper error handling to manage rate limit responses gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { NotionAPI } from 'macro_api';

const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Comprehensive error handling
async function safeNotionOperation() {
  try {
    const databases = await notion.search({
      filter: {
        value: 'database',
        property: 'object'
      }
    });
    
    return databases;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement retry logic with exponential backoff
        return await retryWithBackoff(() => notion.search({
          filter: { value: 'database', property: 'object' }
        }));
      } else if (error.message.includes('401')) {
        console.error('Unauthorized. Please check your API key.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('403')) {
        console.error('Forbidden. Check if the integration has access to the resource.');
        throw new Error('Access denied');
      } else if (error.message.includes('404')) {
        console.error('Resource not found. Check your database/page IDs.');
        return null;
      } else {
        console.error('Notion API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(
  apiCall: () => Promise<any>,
  maxRetries = 3,
  baseDelay = 1000
) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(\`Retry attempt \${attempt} in \${delay}ms...\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage with error handling
async function robustDataSync() {
  try {
    const [databases, users, recentPages] = await Promise.allSettled([
      safeNotionOperation(),
      notion.listUsers(),
      notion.search({ 
        sort: { direction: 'descending', timestamp: 'last_edited_time' },
        page_size: 10 
      })
    ]);
    
    console.log('Sync results:', { databases, users, recentPages });
  } catch (error) {
    console.error('Failed to sync data:', error);
  }
}`}
        javascript={`const { NotionAPI } = require('macro_api');

const notion = new NotionAPI({
  apiKey: process.env.NOTION_API_KEY
});

// Comprehensive error handling
async function safeNotionOperation() {
  try {
    const databases = await notion.search({
      filter: {
        value: 'database',
        property: 'object'
      }
    });
    
    return databases;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait.');
        return await retryWithBackoff(() => notion.search({
          filter: { value: 'database', property: 'object' }
        }));
      } else if (error.message.includes('401')) {
        console.error('Unauthorized. Check your API key.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('404')) {
        console.error('Resource not found.');
        return null;
      } else {
        console.error('Notion API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff(apiCall, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(\`Retry attempt \${attempt} in \${delay}ms...\`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}
        title="Robust error handling and retry logic"
      />

      ## Advanced Examples

      ### Building a Task Management System

      <CodeExampleSwitcher
        typescript={`// Complete task management system example
class NotionTaskManager {
  private notion: NotionAPI;
  private taskDatabaseId: string;

  constructor(apiKey: string, taskDatabaseId: string) {
    this.notion = new NotionAPI({ apiKey });
    this.taskDatabaseId = taskDatabaseId;
  }

  // Create a new task
  async createTask(task: {
    title: string;
    description?: string;
    priority: 'Low' | 'Medium' | 'High';
    dueDate?: string;
    assignee?: string;
  }) {
    const page = await this.notion.createPage({
      parent: {
        database_id: this.taskDatabaseId
      },
      properties: {
        Name: {
          title: [{ text: { content: task.title } }]
        },
        Status: {
          select: { name: 'Not started' }
        },
        Priority: {
          select: { name: task.priority }
        },
        ...(task.dueDate && {
          'Due Date': {
            date: { start: task.dueDate }
          }
        }),
        ...(task.assignee && {
          Assignee: {
            people: [{ id: task.assignee }]
          }
        })
      }
    });

    // Add description as page content
    if (task.description) {
      await this.notion.appendBlocks(page.id, {
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [{ text: { content: task.description } }]
            }
          }
        ]
      });
    }

    return page;
  }

  // Get tasks by status
  async getTasksByStatus(status: string) {
    const response = await this.notion.queryDatabase(this.taskDatabaseId, {
      filter: {
        property: 'Status',
        select: { equals: status }
      },
      sorts: [
        {
          property: 'Priority',
          direction: 'ascending'
        },
        {
          property: 'Due Date',
          direction: 'ascending'
        }
      ]
    });

    return response.results;
  }

  // Update task status
  async updateTaskStatus(taskId: string, status: string) {
    return await this.notion.updatePage(taskId, {
      properties: {
        Status: {
          select: { name: status }
        }
      }
    });
  }

  // Get overdue tasks
  async getOverdueTasks() {
    const today = new Date().toISOString().split('T')[0];
    
    const response = await this.notion.queryDatabase(this.taskDatabaseId, {
      filter: {
        and: [
          {
            property: 'Due Date',
            date: { before: today }
          },
          {
            property: 'Status',
            select: { does_not_equal: 'Done' }
          }
        ]
      }
    });

    return response.results;
  }

  // Generate task summary
  async generateTaskSummary() {
    const [notStarted, inProgress, done, overdue] = await Promise.all([
      this.getTasksByStatus('Not started'),
      this.getTasksByStatus('In progress'),
      this.getTasksByStatus('Done'),
      this.getOverdueTasks()
    ]);

    return {
      notStarted: notStarted.length,
      inProgress: inProgress.length,
      done: done.length,
      overdue: overdue.length,
      total: notStarted.length + inProgress.length + done.length
    };
  }
}

// Usage example
async function taskManagementExample() {
  const taskManager = new NotionTaskManager(
    process.env.NOTION_API_KEY!,
    'your-task-database-id'
  );

  // Create a new task
  const newTask = await taskManager.createTask({
    title: 'Implement user authentication',
    description: 'Add JWT-based authentication to the application',
    priority: 'High',
    dueDate: '2024-01-15'
  });

  console.log('Task created:', newTask.id);

  // Get task summary
  const summary = await taskManager.generateTaskSummary();
  console.log('Task Summary:', summary);

  // Update task status
  await taskManager.updateTaskStatus(newTask.id, 'In progress');
  console.log('Task status updated');
}`}
        javascript={`// Complete task management system example
class NotionTaskManager {
  constructor(apiKey, taskDatabaseId) {
    this.notion = new NotionAPI({ apiKey });
    this.taskDatabaseId = taskDatabaseId;
  }

  // Create a new task
  async createTask(task) {
    const page = await this.notion.createPage({
      parent: {
        database_id: this.taskDatabaseId
      },
      properties: {
        Name: {
          title: [{ text: { content: task.title } }]
        },
        Status: {
          select: { name: 'Not started' }
        },
        Priority: {
          select: { name: task.priority }
        }
      }
    });

    // Add description as page content
    if (task.description) {
      await this.notion.appendBlocks(page.id, {
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [{ text: { content: task.description } }]
            }
          }
        ]
      });
    }

    return page;
  }

  // Get tasks by status
  async getTasksByStatus(status) {
    const response = await this.notion.queryDatabase(this.taskDatabaseId, {
      filter: {
        property: 'Status',
        select: { equals: status }
      }
    });

    return response.results;
  }

  // Generate task summary
  async generateTaskSummary() {
    const [notStarted, inProgress, done] = await Promise.all([
      this.getTasksByStatus('Not started'),
      this.getTasksByStatus('In progress'),
      this.getTasksByStatus('Done')
    ]);

    return {
      notStarted: notStarted.length,
      inProgress: inProgress.length,
      done: done.length,
      total: notStarted.length + inProgress.length + done.length
    };
  }
}`}
        title="Task management system"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use pagination for large datasets to avoid timeouts
        - Cache frequently accessed data to reduce API calls
        - Implement proper error handling for rate limits
        - Use specific property filters to reduce response size
      </InfoBox>

      ### Caching Example

      <CodeExampleSwitcher
        typescript={`// Simple in-memory cache for Notion data
class NotionCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  set(key: string, data: any, ttlMinutes = 30) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMinutes * 60 * 1000
    });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }
}

// Cached Notion operations
class CachedNotionAPI {
  private notion: NotionAPI;
  private cache = new NotionCache();

  constructor(apiKey: string) {
    this.notion = new NotionAPI({ apiKey });
  }

  async getCachedDatabase(databaseId: string) {
    const cacheKey = \`database-\${databaseId}\`;
    
    let database = this.cache.get(cacheKey);
    if (!database) {
      database = await this.notion.getDatabase(databaseId);
      this.cache.set(cacheKey, database, 60); // Cache for 1 hour
    }
    
    return database;
  }

  async getCachedUsers() {
    const cacheKey = 'users-list';
    
    let users = this.cache.get(cacheKey);
    if (!users) {
      users = await this.notion.listUsers();
      this.cache.set(cacheKey, users, 30); // Cache for 30 minutes
    }
    
    return users;
  }
}`}
        javascript={`// Simple in-memory cache for Notion data
class NotionCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, data, ttlMinutes = 30) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMinutes * 60 * 1000
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }
}

// Cached Notion operations
class CachedNotionAPI {
  constructor(apiKey) {
    this.notion = new NotionAPI({ apiKey });
    this.cache = new NotionCache();
  }

  async getCachedDatabase(databaseId) {
    const cacheKey = \`database-\${databaseId}\`;
    
    let database = this.cache.get(cacheKey);
    if (!database) {
      database = await this.notion.getDatabase(databaseId);
      this.cache.set(cacheKey, database, 60); // Cache for 1 hour
    }
    
    return database;
  }
}`}
        title="Simple caching implementation"
      />

      ## Common Property Types

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Notion Property Types Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Basic Types</h4>
              <ul className="space-y-1">
                <li><code>title</code> - Page title (required)</li>
                <li><code>rich_text</code> - Formatted text</li>
                <li><code>number</code> - Numeric values</li>
                <li><code>select</code> - Single select dropdown</li>
                <li><code>multi_select</code> - Multiple select</li>
                <li><code>date</code> - Date and time</li>
                <li><code>checkbox</code> - Boolean values</li>
                <li><code>url</code> - Web links</li>
                <li><code>email</code> - Email addresses</li>
                <li><code>phone_number</code> - Phone numbers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Advanced Types</h4>
              <ul className="space-y-1">
                <li><code>people</code> - User references</li>
                <li><code>files</code> - File attachments</li>
                <li><code>relation</code> - Links to other pages</li>
                <li><code>rollup</code> - Calculated from relations</li>
                <li><code>formula</code> - Computed values</li>
                <li><code>created_time</code> - Auto-generated</li>
                <li><code>created_by</code> - Auto-generated</li>
                <li><code>last_edited_time</code> - Auto-generated</li>
                <li><code>last_edited_by</code> - Auto-generated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## API Reference

      For complete API documentation and additional endpoints, visit the [official Notion API documentation](https://developers.notion.com/).

      ### Rate Limits

      The Notion API has the following rate limits:
      - **Personal**: 3 requests per second
      - **Internal Integrations**: 3 requests per second
      - **Public Integrations**: 3 requests per second (subject to approval)

      ### Integration Capabilities

      When creating your integration, you can choose from these capabilities:
      - **Read content** - Access to pages and databases
      - **Update content** - Modify existing content
      - **Insert content** - Create new pages and database entries
      - **User information** - Access to user data

      ### Support

      - [Notion Developer Documentation](https://developers.notion.com/)
      - [Notion API Changelog](https://developers.notion.com/changelog)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default NotionDocs;