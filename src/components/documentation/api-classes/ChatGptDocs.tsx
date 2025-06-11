// src/components/documentation/api-classes/ChatGptDocs.tsx
import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, Brain, MessageSquare } from 'lucide-react';

const ChatGptDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-green-600 dark:text-green-400">
            <MessageSquare className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">ChatGPT/OpenAI API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete OpenAI API wrapper with chat completions, embeddings, streaming, and vision capabilities
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Chat Completions
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Function Calling
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Streaming
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Embeddings
          </span>
        </div>
      </div>

      ## Overview

      The ChatGPT API wrapper provides comprehensive access to OpenAI's powerful language models including GPT-4, GPT-3.5-turbo, and more. 
      Support for chat completions, embeddings, function calling, streaming responses, and vision capabilities.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Chat Completions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Generate conversational AI responses with various models</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Zap className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Function Calling</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Allow AI to call external functions and tools</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Database className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Streaming Responses</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Real-time response streaming for better UX</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Brain className="h-6 w-6 text-orange-600 mb-2" />
          <h3 className="font-semibold mb-1">Embeddings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create semantic embeddings for search and similarity</p>
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
        typescript={`import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat completion
async function simpleChat() {
  try {
    const response = await gpt.chat(
      'Explain quantum computing in simple terms',
      'You are a helpful physics teacher'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        javascript={`const { ChatGPT } = require('macro_api');

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Simple chat completion
async function simpleChat() {
  try {
    const response = await gpt.chat(
      'Explain quantum computing in simple terms',
      'You are a helpful physics teacher'
    );
    
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a valid API key from OpenAI to use the ChatGPT API service.
      </InfoBox>

      ### Getting Your OpenAI API Key

      1. Visit the [OpenAI Platform](https://platform.openai.com)
      2. Sign in to your account or create a new one
      3. Navigate to the API Keys section in your account settings
      4. Click "Create new secret key" and give it a descriptive name
      5. Copy the generated API key and store it securely
      6. Add it to your environment variables as OPENAI_API_KEY

      <CodeExampleSwitcher
        typescript={`// .env file
OPENAI_API_KEY=sk-your-openai-key-here
OPENAI_ORG_ID=org-your-organization-id-optional

// In your application
import { ChatGPT } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: process.env.OPENAI_ORG_ID // Optional
});`}
        javascript={`// .env file
OPENAI_API_KEY=sk-your-openai-key-here
OPENAI_ORG_ID=org-your-organization-id-optional

// In your application
const { ChatGPT } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
  organizationId: process.env.OPENAI_ORG_ID // Optional
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your OpenAI API key</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">organizationId</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Optional organization ID for team accounts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">baseUrl</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Custom API base URL (default: https://api.openai.com/v1)</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Methods

      ### Simple Chat Interface

      <CodeExampleSwitcher
        typescript={`// Simple chat with default model (gpt-4o)
const response = await gpt.chat(
  'Write a Python function to calculate fibonacci numbers'
);

// With system prompt
const response = await gpt.chat(
  'Explain recursion',
  'You are a computer science professor teaching beginners',
  'gpt-4' // Optional model specification
);

console.log(response);`}
        javascript={`// Simple chat with default model
const response = await gpt.chat(
  'Write a Python function to calculate fibonacci numbers'
);

// With system prompt
const response = await gpt.chat(
  'Explain recursion',
  'You are a computer science professor teaching beginners'
);

console.log(response);`}
        title="chat() - Simple interface"
      />

      ### Advanced Chat Completions

      <CodeExampleSwitcher
        typescript={`// Advanced chat completion with full control
const completion = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful coding assistant specialized in TypeScript.'
    },
    {
      role: 'user',
      content: 'How do I handle async/await errors properly?'
    }
  ],
  temperature: 0.7,
  max_tokens: 1000,
  top_p: 1,
  presence_penalty: 0,
  frequency_penalty: 0
});

console.log(completion.choices[0]?.message?.content);

// Multi-turn conversation
const conversation = await gpt.conversation([
  { role: 'user', content: 'What is TypeScript?' },
  { role: 'assistant', content: 'TypeScript is a superset of JavaScript...' },
  { role: 'user', content: 'How does it help with large applications?' }
]);`}
        javascript={`// Advanced chat completion
const completion = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful coding assistant.'
    },
    {
      role: 'user',
      content: 'How do I handle async/await errors properly?'
    }
  ],
  temperature: 0.7,
  max_tokens: 1000
});

console.log(completion.choices[0]?.message?.content);`}
        title="createChatCompletion() - Advanced interface"
      />

      ### Streaming Responses

      <CodeExampleSwitcher
        typescript={`// Stream responses for real-time UI updates
await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Write a story about a robot learning to paint' }
    ],
    temperature: 0.8,
    max_tokens: 500
  },
  // OnData callback - called for each chunk
  (chunk) => {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      process.stdout.write(content); // Stream to console
      // In a web app, you'd update your UI here
    }
  },
  // OnError callback
  (error) => {
    console.error('Streaming error:', error);
  },
  // OnEnd callback
  () => {
    console.log('\\n\\nStreaming complete!');
  }
);

// Using with React (example)
const [streamedText, setStreamedText] = useState('');

await gpt.createStreamingChatCompletion(
  options,
  (chunk) => {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      setStreamedText(prev => prev + content);
    }
  }
);`}
        javascript={`// Stream responses for real-time UI updates
await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Write a story about a robot' }
    ],
    temperature: 0.8
  },
  // OnData callback
  (chunk) => {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      process.stdout.write(content);
    }
  },
  // OnError callback
  (error) => {
    console.error('Streaming error:', error);
  },
  // OnEnd callback
  () => {
    console.log('\\nStreaming complete!');
  }
);`}
        title="Streaming responses for real-time UX"
      />

      ### Function Calling

      <CodeExampleSwitcher
        typescript={`// Define functions the AI can call
const functions = [
  {
    name: 'get_weather',
    description: 'Get current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'City name, e.g. San Francisco, CA'
        },
        unit: {
          type: 'string',
          enum: ['celsius', 'fahrenheit'],
          description: 'Temperature unit'
        }
      },
      required: ['location']
    }
  },
  {
    name: 'calculate_tip',
    description: 'Calculate tip amount for a bill',
    parameters: {
      type: 'object',
      properties: {
        bill_amount: { type: 'number', description: 'Total bill amount' },
        tip_percentage: { type: 'number', description: 'Tip percentage (e.g., 18)' }
      },
      required: ['bill_amount', 'tip_percentage']
    }
  }
];

// Use functions in chat
const response = await gpt.withFunctions(
  'What\\'s the weather in Tokyo and calculate a 20% tip on a $85 bill?',
  functions
);

console.log('Response:', response);

// The AI might return function calls that you need to execute
if (response.function_call) {
  const { name, arguments: args } = response.function_call;
  const parsedArgs = JSON.parse(args);
  
  if (name === 'get_weather') {
    // Call your weather API
    const weather = await getWeatherAPI(parsedArgs.location);
    console.log(\`Weather in \${parsedArgs.location}: \${weather}\`);
  } else if (name === 'calculate_tip') {
    // Calculate tip
    const tip = (parsedArgs.bill_amount * parsedArgs.tip_percentage) / 100;
    console.log(\`Tip amount: $\${tip.toFixed(2)}\`);
  }
}`}
        javascript={`// Define functions the AI can call
const functions = [
  {
    name: 'get_weather',
    description: 'Get current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: {
          type: 'string',
          description: 'City name'
        }
      },
      required: ['location']
    }
  }
];

// Use functions in chat
const response = await gpt.withFunctions(
  'What\\'s the weather in Tokyo?',
  functions
);

// Handle function calls
if (response.function_call) {
  const { name, arguments: args } = response.function_call;
  const parsedArgs = JSON.parse(args);
  
  if (name === 'get_weather') {
    const weather = await getWeatherAPI(parsedArgs.location);
    console.log(\`Weather: \${weather}\`);
  }
}`}
        title="Function calling capabilities"
      />

      ### Modern Tool Calling

      <CodeExampleSwitcher
        typescript={`// Modern tool calling (recommended over functions)
const tools = [
  {
    type: 'function',
    function: {
      name: 'search_database',
      description: 'Search for information in the company database',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search query'
          },
          category: {
            type: 'string',
            enum: ['users', 'products', 'orders'],
            description: 'Database category to search'
          }
        },
        required: ['query']
      }
    }
  }
];

const response = await gpt.withTools(
  'Find all orders for customer John Doe',
  tools
);

console.log('Tool response:', response);

// Handle tool calls
if (response.tool_calls) {
  for (const toolCall of response.tool_calls) {
    const { function: func } = toolCall;
    const args = JSON.parse(func.arguments);
    
    if (func.name === 'search_database') {
      const results = await searchDatabase(args.query, args.category);
      console.log('Search results:', results);
    }
  }
}`}
        javascript={`// Modern tool calling
const tools = [
  {
    type: 'function',
    function: {
      name: 'search_database',
      description: 'Search database',
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string' }
        },
        required: ['query']
      }
    }
  }
];

const response = await gpt.withTools(
  'Find customer data',
  tools
);

// Handle tool calls
if (response.tool_calls) {
  for (const toolCall of response.tool_calls) {
    const func = toolCall.function;
    const args = JSON.parse(func.arguments);
    const results = await searchDatabase(args.query);
    console.log('Results:', results);
  }
}`}
        title="Modern tool calling interface"
      />

      ### Embeddings

      <CodeExampleSwitcher
        typescript={`// Create embeddings for text similarity and search
const embeddings = await gpt.createEmbeddings({
  model: 'text-embedding-3-small',
  input: [
    'Machine learning is a subset of artificial intelligence',
    'Deep learning uses neural networks with multiple layers',
    'Natural language processing helps computers understand text',
    'Computer vision enables machines to interpret images'
  ]
});

console.log('Embeddings created:', embeddings.data.length);

// Simple helper for single text
const singleEmbedding = await gpt.embed(
  'What is artificial intelligence?',
  'text-embedding-3-large' // Optional model
);

// Calculate similarity between embeddings
function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Example: Find most similar text
const queryEmbedding = await gpt.embed('How do neural networks work?');
const similarities = embeddings.data.map((emb, index) => ({
  index,
  similarity: cosineSimilarity(queryEmbedding[0].embedding, emb.embedding)
}));

const mostSimilar = similarities.sort((a, b) => b.similarity - a.similarity)[0];
console.log('Most similar text index:', mostSimilar.index);`}
        javascript={`// Create embeddings for text similarity
const embeddings = await gpt.createEmbeddings({
  model: 'text-embedding-3-small',
  input: [
    'Machine learning is a subset of AI',
    'Deep learning uses neural networks',
    'NLP helps computers understand text'
  ]
});

// Simple helper for single text
const singleEmbedding = await gpt.embed(
  'What is artificial intelligence?'
);

// Calculate similarity (simplified)
function cosineSimilarity(a, b) {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}`}
        title="Text embeddings for similarity and search"
      />

      ### Model Information

      <CodeExampleSwitcher
        typescript={`// List available models
const models = await gpt.listModels();
console.log('Available models:', models.data.map(m => m.id));

// Filter for specific model types
const chatModels = models.data.filter(model => 
  model.id.includes('gpt') && 
  !model.id.includes('instruct')
);

const embeddingModels = models.data.filter(model => 
  model.id.includes('embedding')
);

console.log('Chat models:', chatModels.map(m => m.id));
console.log('Embedding models:', embeddingModels.map(m => m.id));`}
        javascript={`// List available models
const models = await gpt.listModels();
console.log('Available models:', models.data.map(m => m.id));

// Filter models
const chatModels = models.data.filter(model => 
  model.id.includes('gpt')
);

console.log('Chat models:', chatModels.map(m => m.id));`}
        title="Available models information"
      />

      ## Advanced Examples

      ### Building a Chatbot

      <CodeExampleSwitcher
        typescript={`class ChatBot {
  private gpt: ChatGPT;
  private conversationHistory: Array<{role: string, content: string}> = [];
  
  constructor(apiKey: string) {
    this.gpt = new ChatGPT({ apiKey });
    // Initialize with system message
    this.conversationHistory.push({
      role: 'system',
      content: 'You are a helpful assistant that provides concise, accurate answers.'
    });
  }
  
  async chat(userMessage: string): Promise<string> {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });
    
    try {
      const response = await this.gpt.createChatCompletion({
        model: 'gpt-4',
        messages: this.conversationHistory,
        temperature: 0.7,
        max_tokens: 500
      });
      
      const assistantMessage = response.choices[0]?.message?.content || '';
      
      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });
      
      // Keep conversation history manageable (last 20 messages)
      if (this.conversationHistory.length > 21) {
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system message
          ...this.conversationHistory.slice(-20)
        ];
      }
      
      return assistantMessage;
    } catch (error) {
      console.error('Chat error:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }
  }
  
  clearHistory(): void {
    this.conversationHistory = [this.conversationHistory[0]]; // Keep system message
  }
}

// Usage
const bot = new ChatBot(process.env.OPENAI_API_KEY!);
const response1 = await bot.chat('Hello, what can you help me with?');
const response2 = await bot.chat('Tell me about TypeScript benefits');
console.log(response1, response2);`}
        javascript={`class ChatBot {
  constructor(apiKey) {
    this.gpt = new ChatGPT({ apiKey });
    this.conversationHistory = [{
      role: 'system',
      content: 'You are a helpful assistant.'
    }];
  }
  
  async chat(userMessage) {
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });
    
    try {
      const response = await this.gpt.createChatCompletion({
        model: 'gpt-4',
        messages: this.conversationHistory,
        temperature: 0.7
      });
      
      const assistantMessage = response.choices[0]?.message?.content || '';
      
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });
      
      return assistantMessage;
    } catch (error) {
      console.error('Chat error:', error);
      return 'Sorry, I encountered an error.';
    }
  }
}

// Usage
const bot = new ChatBot(process.env.OPENAI_API_KEY);
const response = await bot.chat('Hello!');`}
        title="Building a conversational chatbot"
      />

      ### Semantic Search System

      <CodeExampleSwitcher
        typescript={`class SemanticSearch {
  private gpt: ChatGPT;
  private documents: Array<{id: string, text: string, embedding: number[]}> = [];
  
  constructor(apiKey: string) {
    this.gpt = new ChatGPT({ apiKey });
  }
  
  async indexDocuments(docs: Array<{id: string, text: string}>): Promise<void> {
    console.log('Creating embeddings for documents...');
    
    // Create embeddings for all documents
    const texts = docs.map(doc => doc.text);
    const embeddings = await this.gpt.createEmbeddings({
      model: 'text-embedding-3-small',
      input: texts
    });
    
    // Store documents with their embeddings
    this.documents = docs.map((doc, index) => ({
      id: doc.id,
      text: doc.text,
      embedding: embeddings.data[index].embedding
    }));
    
    console.log(\`Indexed \${this.documents.length} documents\`);
  }
  
  async search(query: string, topK = 5): Promise<Array<{id: string, text: string, similarity: number}>> {
    if (this.documents.length === 0) {
      throw new Error('No documents indexed. Call indexDocuments() first.');
    }
    
    // Create embedding for the query
    const queryEmbedding = await this.gpt.embed(query);
    
    // Calculate similarities
    const similarities = this.documents.map(doc => ({
      id: doc.id,
      text: doc.text,
      similarity: this.cosineSimilarity(queryEmbedding[0].embedding, doc.embedding)
    }));
    
    // Sort by similarity and return top K
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);
  }
  
  private cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }
}

// Usage example
const search = new SemanticSearch(process.env.OPENAI_API_KEY!);

// Index some documents
await search.indexDocuments([
  { id: '1', text: 'TypeScript is a programming language that builds on JavaScript' },
  { id: '2', text: 'React is a library for building user interfaces' },
  { id: '3', text: 'Node.js is a runtime for executing JavaScript on the server' },
  { id: '4', text: 'Express.js is a web framework for Node.js applications' }
]);

// Search for relevant documents
const results = await search.search('frontend development framework');
console.log('Search results:', results);`}
        javascript={`class SemanticSearch {
  constructor(apiKey) {
    this.gpt = new ChatGPT({ apiKey });
    this.documents = [];
  }
  
  async indexDocuments(docs) {
    const texts = docs.map(doc => doc.text);
    const embeddings = await this.gpt.createEmbeddings({
      model: 'text-embedding-3-small',
      input: texts
    });
    
    this.documents = docs.map((doc, index) => ({
      id: doc.id,
      text: doc.text,
      embedding: embeddings.data[index].embedding
    }));
  }
  
  async search(query, topK = 5) {
    const queryEmbedding = await this.gpt.embed(query);
    
    const similarities = this.documents.map(doc => ({
      id: doc.id,
      text: doc.text,
      similarity: this.cosineSimilarity(queryEmbedding[0].embedding, doc.embedding)
    }));
    
    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);
  }
  
  cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }
}

// Usage
const search = new SemanticSearch(process.env.OPENAI_API_KEY);
await search.indexDocuments([
  { id: '1', text: 'TypeScript programming language' },
  { id: '2', text: 'React user interface library' }
]);

const results = await search.search('frontend development');`}
        title="Semantic search with embeddings"
      />

      ## Available Models

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Popular OpenAI Models</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-green-600">Chat Models</h4>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">gpt-4o</code> - Latest GPT-4 Omni model</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">gpt-4</code> - Most capable model</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">gpt-4-turbo</code> - Faster GPT-4 variant</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">gpt-3.5-turbo</code> - Fast and cost-effective</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-blue-600">Embedding Models</h4>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">text-embedding-3-large</code> - Highest quality</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">text-embedding-3-small</code> - Good balance</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">text-embedding-ada-002</code> - Legacy model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits & Usage">
        OpenAI has rate limits and usage quotas. Implement proper error handling to manage rate limit responses and monitor your usage.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { ChatGPT, MacroApiError } from 'macro_api';

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY!
});

// Comprehensive error handling
async function robustChat(prompt: string): Promise<string> {
  try {
    const response = await gpt.chat(prompt);
    return response;
  } catch (error) {
    if (error instanceof MacroApiError) {
      switch (error.code) {
        case 'RATE_LIMIT_ERROR':
          console.error('Rate limit exceeded. Please wait before retrying.');
          // Implement exponential backoff
          await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute
          return await robustChat(prompt); // Retry
          
        case 'AUTHENTICATION_ERROR':
          console.error('Invalid API key. Please check your credentials.');
          throw new Error('Authentication failed');
          
        case 'QUOTA_EXCEEDED_ERROR':
          console.error('Usage quota exceeded. Please check your billing.');
          throw new Error('Quota exceeded');
          
        case 'VALIDATION_ERROR':
          console.error('Invalid request parameters:', error.details);
          throw new Error('Invalid request');
          
        default:
          console.error('OpenAI API Error:', error.message);
          throw error;
      }
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}

// Usage with retry logic
async function chatWithRetry(prompt: string, maxRetries = 3): Promise<string> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await gpt.chat(prompt);
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      console.log(\`Attempt \${attempt} failed, retrying...\`);
      
      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Max retries exceeded');
}`}
        javascript={`const { ChatGPT, MacroApiError } = require('macro_api');

const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY
});

// Error handling
async function robustChat(prompt) {
  try {
    const response = await gpt.chat(prompt);
    return response;
  } catch (error) {
    if (error instanceof MacroApiError) {
      switch (error.code) {
        case 'RATE_LIMIT_ERROR':
          console.error('Rate limit exceeded');
          await new Promise(resolve => setTimeout(resolve, 60000));
          return await robustChat(prompt);
          
        case 'AUTHENTICATION_ERROR':
          console.error('Invalid API key');
          throw new Error('Authentication failed');
          
        default:
          console.error('API Error:', error.message);
          throw error;
      }
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}

// Retry logic
async function chatWithRetry(prompt, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await gpt.chat(prompt);
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = Math.pow(2, attempt) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}
        title="Robust error handling and retry logic"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance & Cost Optimization">
        - Use appropriate models for your use case (GPT-3.5-turbo for simple tasks, GPT-4 for complex reasoning)
        - Implement streaming for better user experience with long responses
        - Cache embeddings to avoid repeated API calls
        - Monitor token usage to control costs
      </InfoBox>

      ### Token Management

      <CodeExampleSwitcher
        typescript={`// Estimate tokens before making API calls
function estimateTokens(text: string): number {
  // Rough estimation: ~4 characters per token for English
  return Math.ceil(text.length / 4);
}

// Token-aware chat function
async function tokenAwareChat(prompt: string, maxTokens = 4000): Promise<string> {
  const estimatedPromptTokens = estimateTokens(prompt);
  const maxCompletionTokens = maxTokens - estimatedPromptTokens - 100; // Buffer
  
  if (maxCompletionTokens < 100) {
    throw new Error('Prompt too long for the specified token limit');
  }
  
  const response = await gpt.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: maxCompletionTokens
  });
  
  console.log('Token usage:', response.usage);
  return response.choices[0]?.message?.content || '';
}

// Cost tracking
class CostTracker {
  private totalTokens = 0;
  private readonly costPerToken = 0.00003; // Example rate for GPT-4
  
  trackUsage(usage: { total_tokens: number }): void {
    this.totalTokens += usage.total_tokens;
  }
  
  getEstimatedCost(): number {
    return this.totalTokens * this.costPerToken;
  }
  
  getTotalTokens(): number {
    return this.totalTokens;
  }
}

const costTracker = new CostTracker();

// Track costs in your API calls
const response = await gpt.createChatCompletion({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello' }]
});

costTracker.trackUsage(response.usage);
console.log(\`Estimated cost so far: $\${costTracker.getEstimatedCost().toFixed(4)}\`);`}
        javascript={`// Token estimation
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// Token-aware function
async function tokenAwareChat(prompt, maxTokens = 4000) {
  const estimatedTokens = estimateTokens(prompt);
  const maxCompletion = maxTokens - estimatedTokens - 100;
  
  if (maxCompletion < 100) {
    throw new Error('Prompt too long');
  }
  
  const response = await gpt.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: maxCompletion
  });
  
  console.log('Token usage:', response.usage);
  return response.choices[0]?.message?.content || '';
}

// Simple cost tracking
let totalTokens = 0;
const costPerToken = 0.00003;

function trackCost(usage) {
  totalTokens += usage.total_tokens;
  console.log(\`Cost: $\${(totalTokens * costPerToken).toFixed(4)}\`);
}`}
        title="Token management and cost tracking"
      />

      ### Prompt Engineering Tips

      <CodeExampleSwitcher
        typescript={`// Effective prompt patterns
class PromptTemplates {
  // Few-shot learning pattern
  static fewShotClassification(examples: Array<{input: string, output: string}>, input: string): string {
    const exampleText = examples
      .map(ex => \`Input: \${ex.input}\\nOutput: \${ex.output}\`)
      .join('\\n\\n');
    
    return \`\${exampleText}\\n\\nInput: \${input}\\nOutput:\`;
  }
  
  // Chain of thought reasoning
  static chainOfThought(problem: string): string {
    return \`Solve this step by step, showing your reasoning clearly:

Problem: \${problem}

Let me think through this step by step:
1.\`;
  }
  
  // Role-based prompting
  static roleBasedPrompt(role: string, task: string, context?: string): string {
    let prompt = \`You are a \${role}. \${task}\`;
    
    if (context) {
      prompt += \`\\n\\nContext: \${context}\`;
    }
    
    prompt += \`\\n\\nPlease provide a detailed and professional response:\`;
    return prompt;
  }
  
  // Structured output format
  static structuredOutput(task: string, format: string): string {
    return \`\${task}

Please format your response exactly as follows:
\${format}

Your response:\`;
  }
}

// Usage examples
const classificationPrompt = PromptTemplates.fewShotClassification([
  { input: 'I love this product!', output: 'Positive' },
  { input: 'This is terrible quality.', output: 'Negative' },
  { input: 'It\\'s okay, nothing special.', output: 'Neutral' }
], 'The service was amazing!');

const mathPrompt = PromptTemplates.chainOfThought(
  'If a train travels at 80 mph for 2.5 hours, how far does it travel?'
);

const expertPrompt = PromptTemplates.roleBasedPrompt(
  'senior software architect',
  'Design a scalable microservices architecture for an e-commerce platform',
  'The platform needs to handle 100k concurrent users and process 1M orders per day'
);

const structuredPrompt = PromptTemplates.structuredOutput(
  'Analyze the pros and cons of remote work',
  \`Pros:
- [List 3-5 advantages]

Cons:
- [List 3-5 disadvantages]

Conclusion:
[1-2 sentence summary]\`
);`}
        javascript={`// Prompt engineering examples
function fewShotPrompt(examples, input) {
  const exampleText = examples
    .map(ex => \`Input: \${ex.input}\\nOutput: \${ex.output}\`)
    .join('\\n\\n');
  
  return \`\${exampleText}\\n\\nInput: \${input}\\nOutput:\`;
}

function chainOfThoughtPrompt(problem) {
  return \`Solve this step by step:

Problem: \${problem}

Step by step solution:
1.\`;
}

function roleBasedPrompt(role, task) {
  return \`You are a \${role}. \${task}

Please provide a professional response:\`;
}

// Usage
const prompt = fewShotPrompt([
  { input: 'Great product!', output: 'Positive' },
  { input: 'Not good.', output: 'Negative' }
], 'Amazing service!');`}
        title="Effective prompt engineering patterns"
      />

      ## API Reference

      For complete OpenAI API documentation and additional features, visit the [official OpenAI API documentation](https://platform.openai.com/docs/api-reference).

      ### Rate Limits

      Rate limits vary by model and tier:
      - **Free tier**: Limited requests per minute/day
      - **Pay-as-you-go**: Higher limits based on usage history
      - **Enterprise**: Custom limits available

      ### Pricing

      Pricing is based on tokens used:
      - **GPT-4**: ~$0.03 per 1K tokens
      - **GPT-3.5-turbo**: ~$0.002 per 1K tokens
      - **Embeddings**: ~$0.0001 per 1K tokens

      Check the [OpenAI pricing page](https://openai.com/pricing) for current rates.

      ### Support

      - [OpenAI Platform Documentation](https://platform.openai.com/docs)
      - [OpenAI Community Forum](https://community.openai.com)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default ChatGptDocs;