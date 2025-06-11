import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Brain, Code } from 'lucide-react';

const DeepseekDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-purple-600 dark:text-purple-400">
            <Brain className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">DeepSeek API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced AI code generation and assistance with DeepSeek models
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Code Generation
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Chat Completion
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Embeddings
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Streaming
          </span>
        </div>
      </div>

      ## Overview

      The DeepSeek API wrapper provides access to DeepSeek's advanced AI models, specializing in code generation, 
      programming assistance, and general language understanding. DeepSeek models are particularly strong at 
      understanding and generating code across multiple programming languages.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Code className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Code Generation</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Generate high-quality code in multiple languages</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Brain className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Code Understanding</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Analyze and explain existing code</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Fast Response</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Optimized for quick code generation</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Multiple Models</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Access different specialized models</p>
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
        typescript={`import { DeepSeek } from 'macro_api';

// Initialize the client
const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Generate code
async function generateCode() {
  try {
    const response = await deepseek.generateCode(
      'Create a TypeScript function to validate email addresses',
      {
        model: 'deepseek-coder-1.3b-instruct',
        temperature: 0.2,
        max_tokens: 500
      }
    );
    
    console.log('Generated code:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        javascript={`const { DeepSeek } = require('macro_api');

// Initialize the client
const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Generate code
async function generateCode() {
  try {
    const response = await deepseek.generateCode(
      'Create a JavaScript function to validate email addresses',
      {
        model: 'deepseek-coder-1.3b-instruct',
        temperature: 0.2,
        max_tokens: 500
      }
    );
    
    console.log('Generated code:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        title="Basic code generation example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a valid API key from DeepSeek to use this service.
      </InfoBox>

      ### Getting Your API Key

      1. Visit [DeepSeek Platform](https://platform.deepseek.com)
      2. Sign up or log in to your account
      3. Navigate to the API section in your dashboard
      4. Generate a new API key
      5. Copy the API key and store it securely
      6. Add it to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
DEEPSEEK_API_KEY=your_deepseek_api_key_here

// In your application
import { DeepSeek } from 'macro_api';

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseUrl: 'https://api.deepseek.com/v1' // Optional, defaults to DeepSeek API
});`}
        javascript={`// .env file
DEEPSEEK_API_KEY=your_deepseek_api_key_here

// In your application
const { DeepSeek } = require('macro_api');

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseUrl: 'https://api.deepseek.com/v1' // Optional
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Never hardcode your API key in your source code. Always use environment variables or a secure configuration management system.
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your DeepSeek API key</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">baseUrl</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">API base URL (defaults to DeepSeek API)</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Chat Completions

      <CodeExampleSwitcher
        typescript={`// Simple chat with DeepSeek
async function chatWithDeepSeek() {
  const response = await deepseek.chat(
    'Explain how async/await works in JavaScript',
    'You are a helpful programming instructor'
  );
  
  console.log(response);
}

// Advanced chat completion
async function advancedChat() {
  const response = await deepseek.createChatCompletion({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: 'You are an expert software engineer specializing in TypeScript.'
      },
      {
        role: 'user',
        content: 'How do I implement a generic repository pattern in TypeScript?'
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  console.log(response.choices[0]?.message?.content);
}`}
        javascript={`// Simple chat with DeepSeek
async function chatWithDeepSeek() {
  const response = await deepseek.chat(
    'Explain how async/await works in JavaScript',
    'You are a helpful programming instructor'
  );
  
  console.log(response);
}

// Advanced chat completion
async function advancedChat() {
  const response = await deepseek.createChatCompletion({
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: 'You are an expert software engineer specializing in JavaScript.'
      },
      {
        role: 'user',
        content: 'How do I implement a repository pattern in JavaScript?'
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  console.log(response.choices[0]?.message?.content);
}`}
        title="Chat completions"
      />

      ### Code Generation

      <CodeExampleSwitcher
        typescript={`// Generate code with specific instructions
async function generateFunction() {
  const code = await deepseek.generateCode(
    'Create a TypeScript function that implements binary search',
    {
      model: 'deepseek-coder-1.3b-instruct',
      temperature: 0.1, // Lower temperature for more deterministic code
      max_tokens: 800,
      stop: ['\\n\\n\\n'] // Stop at triple newlines
    }
  );
  
  console.log('Generated function:', code);
}

// Generate code with context
async function generateWithContext() {
  const prompt = \`
Given this interface:
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

Create a TypeScript class UserService with methods to:
1. Create a new user
2. Find user by ID
3. Update user information
4. Delete user
\`;

  const code = await deepseek.generateCode(prompt, {
    model: 'deepseek-coder-6.7b-instruct',
    temperature: 0.2,
    max_tokens: 1500
  });
  
  console.log('Generated service class:', code);
}`}
        javascript={`// Generate code with specific instructions
async function generateFunction() {
  const code = await deepseek.generateCode(
    'Create a JavaScript function that implements binary search',
    {
      model: 'deepseek-coder-1.3b-instruct',
      temperature: 0.1,
      max_tokens: 800
    }
  );
  
  console.log('Generated function:', code);
}

// Generate code with context
async function generateWithContext() {
  const prompt = \`
Create a JavaScript class UserService with methods to:
1. Create a new user
2. Find user by ID  
3. Update user information
4. Delete user

Use ES6 classes and async/await for database operations.
\`;

  const code = await deepseek.generateCode(prompt, {
    model: 'deepseek-coder-6.7b-instruct',
    temperature: 0.2,
    max_tokens: 1500
  });
  
  console.log('Generated service class:', code);
}`}
        title="Code generation examples"
      />

      ### Text Completions

      <CodeExampleSwitcher
        typescript={`// Basic text completion
async function completeText() {
  const response = await deepseek.createCompletion({
    model: 'deepseek-chat',
    prompt: 'The best way to handle errors in async JavaScript functions is',
    temperature: 0.7,
    max_tokens: 200,
    stop: ['\\n\\n']
  });
  
  console.log('Completion:', response.choices[0]?.text);
}

// Code completion
async function completeCode() {
  const codePrompt = \`
function validateEmail(email) {
  // TODO: Implement email validation
  const regex = \`;

  const completion = await deepseek.createCompletion({
    model: 'deepseek-coder-1.3b-instruct',
    prompt: codePrompt,
    temperature: 0.1,
    max_tokens: 300,
    stop: ['}', '\\n\\n']
  });
  
  console.log('Code completion:', completion.choices[0]?.text);
}`}
        javascript={`// Basic text completion
async function completeText() {
  const response = await deepseek.createCompletion({
    model: 'deepseek-chat',
    prompt: 'The best way to handle errors in async JavaScript functions is',
    temperature: 0.7,
    max_tokens: 200
  });
  
  console.log('Completion:', response.choices[0]?.text);
}

// Code completion
async function completeCode() {
  const codePrompt = \`
function validateEmail(email) {
  // TODO: Implement email validation
  const regex = \`;

  const completion = await deepseek.createCompletion({
    model: 'deepseek-coder-1.3b-instruct',
    prompt: codePrompt,
    temperature: 0.1,
    max_tokens: 300
  });
  
  console.log('Code completion:', completion.choices[0]?.text);
}`}
        title="Text completions"
      />

      ### Embeddings

      <CodeExampleSwitcher
        typescript={`// Create embeddings for text similarity
async function createEmbeddings() {
  const texts = [
    'function fibonacci(n) { return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);',
    'class BinaryTree { constructor(value) { this.value = value; } }'
  ];
  
  const embeddings = await deepseek.createEmbeddings({
    model: 'deepseek-embedding',
    input: texts
  });
  
  console.log('Embeddings:', embeddings.data);
}

// Single text embedding
async function singleEmbedding() {
  const embedding = await deepseek.createEmbeddings({
    model: 'deepseek-embedding',
    input: 'How to implement a hash table in JavaScript'
  });
  
  console.log('Embedding vector length:', embedding.data[0].embedding.length);
}`}
        javascript={`// Create embeddings for text similarity
async function createEmbeddings() {
  const texts = [
    'function fibonacci(n) { return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);',
    'class BinaryTree { constructor(value) { this.value = value; } }'
  ];
  
  const embeddings = await deepseek.createEmbeddings({
    model: 'deepseek-embedding',
    input: texts
  });
  
  console.log('Embeddings:', embeddings.data);
}`}
        title="Creating embeddings"
      />

      ### Streaming Responses

      <CodeExampleSwitcher
        typescript={`// Streaming chat completion for real-time responses
async function streamingChat() {
  console.log('Starting streaming chat...');
  
  await deepseek.createStreamingChatCompletion(
    {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: 'Explain the concept of closures in JavaScript with examples'
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    },
    // onData callback - called for each chunk
    (data) => {
      const content = data.choices?.[0]?.delta?.content;
      if (content) {
        process.stdout.write(content);
      }
    },
    // onError callback
    (error) => {
      console.error('Streaming error:', error);
    },
    // onEnd callback
    () => {
      console.log('\\n\\nStreaming completed');
    }
  );
}

// Streaming code generation
async function streamingCodeGeneration() {
  const prompt = 'Create a React component that displays a list of users with search functionality';
  
  await deepseek.createStreamingChatCompletion(
    {
      model: 'deepseek-coder-6.7b-instruct',
      messages: [
        {
          role: 'system',
          content: 'You are an expert React developer. Write clean, modern React code with TypeScript.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3
    },
    (data) => {
      // Process streaming code chunks
      const content = data.choices?.[0]?.delta?.content;
      if (content) {
        process.stdout.write(content);
      }
    }
  );
}`}
        javascript={`// Streaming chat completion for real-time responses
async function streamingChat() {
  console.log('Starting streaming chat...');
  
  await deepseek.createStreamingChatCompletion(
    {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: 'Explain the concept of closures in JavaScript with examples'
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    },
    // onData callback
    (data) => {
      const content = data.choices?.[0]?.delta?.content;
      if (content) {
        process.stdout.write(content);
      }
    },
    // onError callback
    (error) => {
      console.error('Streaming error:', error);
    },
    // onEnd callback
    () => {
      console.log('\\n\\nStreaming completed');
    }
  );
}`}
        title="Streaming responses"
      />

      ### Conversation Management

      <CodeExampleSwitcher
        typescript={`// Multi-turn conversation
async function multiTurnConversation() {
  const conversation = [
    {
      role: 'system' as const,
      content: 'You are a helpful coding assistant specializing in web development.'
    },
    {
      role: 'user' as const,
      content: 'I need to create a REST API. What should I consider?'
    }
  ];
  
  // Get first response
  let response = await deepseek.conversation(conversation);
  console.log('Assistant:', response);
  
  // Add assistant's response to conversation
  conversation.push({
    role: 'assistant',
    content: response
  });
  
  // Continue conversation
  conversation.push({
    role: 'user',
    content: 'What about authentication? Should I use JWT?'
  });
  
  response = await deepseek.conversation(conversation);
  console.log('Assistant:', response);
}

// Helper function for interactive chat
class DeepSeekChat {
  private conversation: Array<{role: 'system' | 'user' | 'assistant', content: string}> = [];
  
  constructor(private deepseek: DeepSeek, systemPrompt?: string) {
    if (systemPrompt) {
      this.conversation.push({
        role: 'system',
        content: systemPrompt
      });
    }
  }
  
  async ask(question: string): Promise<string> {
    this.conversation.push({
      role: 'user',
      content: question
    });
    
    const response = await this.deepseek.conversation(this.conversation);
    
    this.conversation.push({
      role: 'assistant',
      content: response
    });
    
    return response;
  }
  
  getConversation() {
    return [...this.conversation];
  }
  
  reset(systemPrompt?: string) {
    this.conversation = [];
    if (systemPrompt) {
      this.conversation.push({
        role: 'system',
        content: systemPrompt
      });
    }
  }
}

// Usage
const chat = new DeepSeekChat(deepseek, 'You are a senior TypeScript developer.');
const answer1 = await chat.ask('How do I implement dependency injection in TypeScript?');
const answer2 = await chat.ask('Can you show me an example with decorators?');`}
        javascript={`// Multi-turn conversation
async function multiTurnConversation() {
  const conversation = [
    {
      role: 'system',
      content: 'You are a helpful coding assistant specializing in web development.'
    },
    {
      role: 'user',
      content: 'I need to create a REST API. What should I consider?'
    }
  ];
  
  // Get first response
  let response = await deepseek.conversation(conversation);
  console.log('Assistant:', response);
  
  // Continue conversation
  conversation.push({
    role: 'assistant',
    content: response
  });
  
  conversation.push({
    role: 'user',
    content: 'What about authentication? Should I use JWT?'
  });
  
  response = await deepseek.conversation(conversation);
  console.log('Assistant:', response);
}`}
        title="Conversation management"
      />

      ## Available Models

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">DeepSeek Model Options</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium text-purple-700 dark:text-purple-300">deepseek-chat</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">General-purpose conversational model for various tasks</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-blue-700 dark:text-blue-300">deepseek-coder-1.3b-instruct</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Smaller, faster code generation model</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-green-700 dark:text-green-300">deepseek-coder-6.7b-instruct</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Larger, more capable code generation model</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium text-orange-700 dark:text-orange-300">deepseek-embedding</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Text embedding model for similarity and search</p>
            </div>
          </div>
        </div>
      </div>

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        DeepSeek API has rate limits. Implement proper error handling to manage rate limit responses gracefully.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { DeepSeek } from 'macro_api';

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Comprehensive error handling
async function robustCodeGeneration(prompt: string) {
  try {
    const code = await deepseek.generateCode(prompt, {
      model: 'deepseek-coder-6.7b-instruct',
      temperature: 0.2,
      max_tokens: 1000
    });
    
    return code;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('429')) {
        console.error('Rate limit exceeded. Please wait before making more requests.');
        // Implement retry logic with exponential backoff
        return await retryWithBackoff(() => deepseek.generateCode(prompt));
      } else if (error.message.includes('401')) {
        console.error('Invalid API key. Please check your credentials.');
        throw new Error('Authentication failed');
      } else if (error.message.includes('400')) {
        console.error('Invalid request. Check your parameters.');
        return null;
      } else {
        console.error('API Error:', error.message);
      }
    }
    
    throw error;
  }
}

// Retry with exponential backoff
async function retryWithBackoff<T>(
  apiCall: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
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
  
  throw new Error('All retry attempts failed');
}

// Usage with error handling
async function safeCodeGeneration() {
  try {
    const code = await robustCodeGeneration('Create a TypeScript interface for a user profile');
    console.log('Generated code:', code);
  } catch (error) {
    console.error('Failed to generate code:', error);
  }
}`}
        javascript={`const { DeepSeek } = require('macro_api');

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Comprehensive error handling
async function robustCodeGeneration(prompt) {
  try {
    const code = await deepseek.generateCode(prompt, {
      model: 'deepseek-coder-6.7b-instruct',
      temperature: 0.2,
      max_tokens: 1000
    });
    
    return code;
  } catch (error) {
    if (error.message.includes('429')) {
      console.error('Rate limit exceeded. Please wait.');
      // Implement retry logic
      return await retryWithBackoff(() => deepseek.generateCode(prompt));
    } else if (error.message.includes('401')) {
      console.error('Invalid API key.');
      throw new Error('Authentication failed');
    } else {
      console.error('API Error:', error.message);
    }
    
    throw error;
  }
}

// Retry function
async function retryWithBackoff(apiCall, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}
        title="Robust error handling with retry logic"
      />

      ## Best Practices

      <InfoBox type="tip" title="Code Generation Tips">
        - Use lower temperature (0.1-0.3) for code generation to get more deterministic results
        - Provide clear, detailed prompts with context and requirements
        - Use appropriate models: coder models for code, chat models for explanations
        - Implement proper error handling and retry logic for production use
      </InfoBox>

      ### Optimizing Code Generation

      <CodeExampleSwitcher
        typescript={`// Best practices for code generation
class CodeGenerator {
  constructor(private deepseek: DeepSeek) {}

  async generateFunction(
    description: string,
    language: string = 'TypeScript',
    context?: string
  ): Promise<string> {
    const prompt = this.buildCodePrompt(description, language, context);
    
    return await this.deepseek.generateCode(prompt, {
      model: 'deepseek-coder-6.7b-instruct',
      temperature: 0.2, // Low for deterministic code
      max_tokens: 1500,
      stop: ['\\n\\n\\n', '// End of'] // Custom stop sequences
    });
  }

  private buildCodePrompt(
    description: string,
    language: string,
    context?: string
  ): string {
    let prompt = \`Language: \${language}\\n\\n\`;
    
    if (context) {
      prompt += \`Context:\\n\${context}\\n\\n\`;
    }
    
    prompt += \`Task: \${description}\\n\\n\`;
    prompt += \`Requirements:\\n\`;
    prompt += \`- Write clean, readable code\\n\`;
    prompt += \`- Include proper error handling\\n\`;
    prompt += \`- Add helpful comments\\n\`;
    prompt += \`- Follow best practices\\n\\n\`;
    prompt += \`Code:\\n\`;
    
    return prompt;
  }

  async explainCode(code: string): Promise<string> {
    return await this.deepseek.chat(
      \`Explain this code in detail:\\n\\n\${code}\`,
      'You are a senior developer who explains code clearly and thoroughly.'
    );
  }

  async reviewCode(code: string): Promise<string> {
    return await this.deepseek.chat(
      \`Review this code and suggest improvements:\\n\\n\${code}\`,
      'You are an expert code reviewer. Provide constructive feedback on code quality, performance, and best practices.'
    );
  }
}

// Usage
const generator = new CodeGenerator(deepseek);

const userValidationCode = await generator.generateFunction(
  'Create a function to validate user registration data',
  'TypeScript',
  \`interface User {
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
  }\`
);

const explanation = await generator.explainCode(userValidationCode);
const review = await generator.reviewCode(userValidationCode);`}
        javascript={`// Best practices for code generation
class CodeGenerator {
  constructor(deepseek) {
    this.deepseek = deepseek;
  }

  async generateFunction(description, language = 'JavaScript', context) {
    const prompt = this.buildCodePrompt(description, language, context);
    
    return await this.deepseek.generateCode(prompt, {
      model: 'deepseek-coder-6.7b-instruct',
      temperature: 0.2,
      max_tokens: 1500
    });
  }

  buildCodePrompt(description, language, context) {
    let prompt = \`Language: \${language}\\n\\n\`;
    
    if (context) {
      prompt += \`Context:\\n\${context}\\n\\n\`;
    }
    
    prompt += \`Task: \${description}\\n\\n\`;
    prompt += \`Requirements:\\n\`;
    prompt += \`- Write clean, readable code\\n\`;
    prompt += \`- Include proper error handling\\n\`;
    prompt += \`- Add helpful comments\\n\\n\`;
    prompt += \`Code:\\n\`;
    
    return prompt;
  }

  async explainCode(code) {
    return await this.deepseek.chat(
      \`Explain this code in detail:\\n\\n\${code}\`,
      'You are a senior developer who explains code clearly.'
    );
  }
}

// Usage
const generator = new CodeGenerator(deepseek);
const code = await generator.generateFunction(
  'Create a function to validate user data',
  'JavaScript'
);`}
        title="Code generation best practices"
      />

      ## Integration Examples

      ### Next.js API Route

      <CodeExampleSwitcher
        typescript={`// pages/api/code-assistant.ts
import { DeepSeek } from 'macro_api';
import type { NextApiRequest, NextApiResponse } from 'next';

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY!
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, type = 'code', language = 'TypeScript' } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    let response;

    if (type === 'code') {
      response = await deepseek.generateCode(prompt, {
        model: 'deepseek-coder-6.7b-instruct',
        temperature: 0.2,
        max_tokens: 1500
      });
    } else {
      response = await deepseek.chat(prompt, \`You are a helpful \${language} programming assistant.\`);
    }

    res.status(200).json({ response });
  } catch (error) {
    console.error('DeepSeek API error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}`}
        javascript={`// pages/api/code-assistant.js
const { DeepSeek } = require('macro_api');

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, type = 'code', language = 'JavaScript' } = req.body;

    let response;
    if (type === 'code') {
      response = await deepseek.generateCode(prompt, {
        model: 'deepseek-coder-6.7b-instruct',
        temperature: 0.2,
        max_tokens: 1500
      });
    } else {
      response = await deepseek.chat(prompt);
    }

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
}`}
        title="Next.js API integration"
      />

      ### Express.js Integration

      <CodeExampleSwitcher
        typescript={`import express from 'express';
import { DeepSeek } from 'macro_api';

const app = express();
app.use(express.json());

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY!
});

// Code generation endpoint
app.post('/api/generate-code', async (req, res) => {
  try {
    const { prompt, language = 'TypeScript', model = 'deepseek-coder-6.7b-instruct' } = req.body;

    const code = await deepseek.generateCode(prompt, {
      model,
      temperature: 0.2,
      max_tokens: 2000
    });

    res.json({ success: true, code });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Code generation failed' 
    });
  }
});

// Chat endpoint with streaming
app.post('/api/chat-stream', async (req, res) => {
  try {
    const { message, context = [] } = req.body;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const messages = [
      ...context,
      { role: 'user', content: message }
    ];

    await deepseek.createStreamingChatCompletion(
      {
        model: 'deepseek-chat',
        messages,
        temperature: 0.7
      },
      // onData
      (data) => {
        const content = data.choices?.[0]?.delta?.content;
        if (content) {
          res.write(\`data: \${JSON.stringify({ content })}\\n\\n\`);
        }
      },
      // onError
      (error) => {
        res.write(\`data: \${JSON.stringify({ error: 'Stream error' })}\\n\\n\`);
        res.end();
      },
      // onEnd
      () => {
        res.write('data: [DONE]\\n\\n');
        res.end();
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Chat failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        javascript={`const express = require('express');
const { DeepSeek } = require('macro_api');

const app = express();
app.use(express.json());

const deepseek = new DeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY
});

// Code generation endpoint
app.post('/api/generate-code', async (req, res) => {
  try {
    const { prompt, language = 'JavaScript' } = req.body;

    const code = await deepseek.generateCode(prompt, {
      model: 'deepseek-coder-6.7b-instruct',
      temperature: 0.2,
      max_tokens: 2000
    });

    res.json({ success: true, code });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Code generation failed' 
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        title="Express.js server integration"
      />

      ## Model Comparison

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Choosing the Right Model</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2">Model</th>
                  <th className="text-left py-2">Best For</th>
                  <th className="text-left py-2">Speed</th>
                  <th className="text-left py-2">Quality</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 font-mono text-purple-600">deepseek-chat</td>
                  <td className="py-2">General conversation, explanations</td>
                  <td className="py-2">⚡⚡⚡</td>
                  <td className="py-2">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 font-mono text-blue-600">deepseek-coder-1.3b</td>
                  <td className="py-2">Quick code completion, small functions</td>
                  <td className="py-2">⚡⚡⚡⚡</td>
                  <td className="py-2">⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-2 font-mono text-green-600">deepseek-coder-6.7b</td>
                  <td className="py-2">Complex code generation, refactoring</td>
                  <td className="py-2">⚡⚡</td>
                  <td className="py-2">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-orange-600">deepseek-embedding</td>
                  <td className="py-2">Code similarity, search, clustering</td>
                  <td className="py-2">⚡⚡⚡</td>
                  <td className="py-2">⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      ## API Reference

      For complete API documentation and additional features, visit the [official DeepSeek documentation](https://platform.deepseek.com/docs).

      ### Available Methods

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="font-semibold mb-4">Core Methods</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">chat()</code>
              <span>Simple chat completion with system prompt</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">createChatCompletion()</code>
              <span>Advanced chat completion with full options</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">createCompletion()</code>
              <span>Text completion for prompts</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">generateCode()</code>
              <span>Specialized method for code generation</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">createEmbeddings()</code>
              <span>Generate embeddings for text similarity</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">createStreamingChatCompletion()</code>
              <span>Real-time streaming responses</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">conversation()</code>
              <span>Multi-turn conversation management</span>
            </div>
            <div className="flex items-start">
              <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 mr-3">listModels()</code>
              <span>Get available models</span>
            </div>
          </div>
        </div>
      </div>

      ## Support

      - [DeepSeek Platform Documentation](https://platform.deepseek.com/docs)
      - [DeepSeek Community Forum](https://platform.deepseek.com/community)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)

      ---

      **Next Steps**: Explore other AI services in macro_api like [ChatGPT/OpenAI](/documentation?section=chatgpt) for additional AI capabilities.
    </div>
  );
};

export default DeepseekDocs;