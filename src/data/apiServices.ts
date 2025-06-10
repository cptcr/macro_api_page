// Example updated entry for the ChatGPT service in the apiServices.ts file

{
  id: 'chatgpt',
  name: 'ChatGPT/OpenAI',
  description: 'Interface with OpenAI\'s powerful language models for AI-powered text generation and embeddings.',
  icon: 'MessageSquare',
  color: 'text-green-500',
  docsLink: '/documentation#chatgpt',
  className: 'ChatGPT',
  variableName: 'gpt',
  authParams: [
    'apiKey: process.env.OPENAI_API_KEY',
    'organizationId: process.env.OPENAI_ORG_ID // Optional'
  ],
  docsUrl: 'https://platform.openai.com/docs/api-reference',
  methods: [
    {
      name: 'createChatCompletion(options: ChatCompletionOptions)',
      description: 'Generate a completion for a chat conversation'
    },
    {
      name: 'createStreamingChatCompletion(options, onData, onError?, onEnd?)',
      description: 'Stream a chat completion response in real-time'
    },
    {
      name: 'chat(prompt: string, systemPrompt?: string, model?: string)',
      description: 'Simplified method for quick chat completions'
    },
    {
      name: 'conversation(messages: Message[], model?: string)',
      description: 'Multi-turn conversations with history'
    },
    {
      name: 'createEmbeddings(options: EmbeddingOptions)',
      description: 'Generate embeddings for text'
    },
    {
      name: 'embed(text: string | string[], model?: string)',
      description: 'Simplified method for generating embeddings'
    },
    {
      name: 'withFunctions(prompt, functions, model?)',
      description: 'Use function calling capabilities'
    },
    {
      name: 'withTools(prompt, tools, model?)',
      description: 'Use tool calling capabilities'
    }
  ],
  features: [
    {
      name: 'Chat Completions',
      description: 'Generate text responses from OpenAI models with different parameters'
    },
    {
      name: 'Streaming Responses',
      description: 'Receive AI-generated content in real-time streams'
    },
    {
      name: 'Function Calling',
      description: 'Enable the model to call functions defined in your code'
    },
    {
      name: 'Tool Use',
      description: 'Allow the model to use tools defined in your application'
    },
    {
      name: 'Text Embeddings',
      description: 'Generate vector embeddings of text for semantic search and analysis'
    }
  ],
  tokenGuide: {
    title: 'How to Get OpenAI API Key',
    steps: [
      'Sign up for an OpenAI account at https://openai.com',
      'Navigate to the API section in your account dashboard',
      'Go to "API Keys" and click "Create new secret key"',
      'Copy your API key and store it securely in your environment variables',
      'Set a spending limit in your account settings to avoid unexpected charges'
    ],
    url: 'https://platform.openai.com/account/api-keys',
    expiryInfo: 'API keys do not expire unless manually revoked'
  },
  examples: {
    typescript: `import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}

// Streaming example
const stream = await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: 'Write a poem about programming' }
    ],
    temperature: 0.7
  },
  (chunk) => console.log(chunk),
  (error) => console.error(error),
  () => console.log('Stream ended')
);

// Function calling example
const functionResult = await gpt.withFunctions(
  'What's the weather like in San Francisco?',
  [
    {
      name: 'getCurrentWeather',
      description: 'Get the current weather in a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA'
          },
          unit: {
            type: 'string',
            enum: ['celsius', 'fahrenheit']
          }
        },
        required: ['location']
      }
    }
  ]
);

console.log(functionResult);`,
    javascript: `const { ChatGPT } = require('macro_api');

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}

// Streaming example
gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: 'Write a poem about programming' }
    ],
    temperature: 0.7
  },
  (chunk) => console.log(chunk),
  (error) => console.error(error),
  () => console.log('Stream ended')
);

// Function calling example
const functionResult = await gpt.withFunctions(
  'What's the weather like in San Francisco?',
  [
    {
      name: 'getCurrentWeather',
      description: 'Get the current weather in a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA'
          },
          unit: {
            type: 'string',
            enum: ['celsius', 'fahrenheit']
          }
        },
        required: ['location']
      }
    }
  ]
);

console.log(functionResult);`,
    esm: `import { ChatGPT } from 'macro_api';

// Initialize the client
const gpt = new ChatGPT({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple chat example
async function getAIResponse() {
  const response = await gpt.chat(
    'Explain APIs in simple terms',
    'You are a helpful assistant'
  );
  
  console.log(response);
}

// Streaming example
const stream = await gpt.createStreamingChatCompletion(
  {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant' },
      { role: 'user', content: 'Write a poem about programming' }
    ],
    temperature: 0.7
  },
  (chunk) => console.log(chunk),
  (error) => console.error(error),
  () => console.log('Stream ended')
);

// Function calling example
const functionResult = await gpt.withFunctions(
  'What's the weather like in San Francisco?',
  [
    {
      name: 'getCurrentWeather',
      description: 'Get the current weather in a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA'
          },
          unit: {
            type: 'string',
            enum: ['celsius', 'fahrenheit']
          }
        },
        required: ['location']
      }
    }
  ]
);

console.log(functionResult);`
  }
}