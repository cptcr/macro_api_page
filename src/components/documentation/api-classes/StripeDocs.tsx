import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, CreditCard, Building, Globe, Play, Search, User, Code, Download, Sparkles, ArrowRight, Key, Shield, Zap, Database, Users, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';

const StripeDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, language = 'typescript', id }: { code: string; language?: string; id: string }) => (
    <div className="relative glass-card">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{language}</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0 glass-button"
          onClick={() => copyToClipboard(code, id)}
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm scrollbar-modern">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      {copiedCode === id && (
        <div className="absolute top-2 right-12 glass px-2 py-1 rounded text-xs text-green-500 border border-green-500/20">
          Copied!
        </div>
      )}
    </div>
  );

  const installCode = `npm install macro_api`;

  const basicSetupCode = `import { StripeAPI } from 'macro_api';

// Initialize the client
const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Create a simple payment intent
async function createPayment() {
  try {
    const paymentIntent = await stripe.createPaymentIntent({
      amount: 2000, // $20.00 in cents
      currency: 'usd',
      payment_method_types: ['card'],
      description: 'Payment for premium subscription'
    });
    
    console.log('Payment Intent created:', paymentIntent.client_secret);
    return paymentIntent;
  } catch (error) {
    console.error('Payment failed:', error);
  }
}`;

  const customerCode = `// Create a customer
async function createCustomer() {
  const customer = await stripe.createCustomer({
    email: 'customer@example.com',
    name: 'John Doe',
    description: 'Premium customer',
    phone: '+1234567890',
    address: {
      line1: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94111',
      country: 'US'
    },
    metadata: {
      userId: '12345',
      plan: 'premium'
    }
  });
  
  console.log('Customer created:', customer.id);
  return customer;
}`;

  const subscriptionCode = `// Create a subscription
async function createSubscription(customerId, priceId) {
  const subscription = await stripe.createSubscription({
    customer: customerId,
    items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    trial_period_days: 14,
    billing_cycle_anchor: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Start tomorrow
    collection_method: 'charge_automatically',
    metadata: {
      plan: 'premium',
      source: 'website'
    }
  });
  
  console.log('Subscription created:', subscription.id);
  return subscription;
}`;

  const features = [
    {
      name: 'Payment Processing',
      description: 'Accept payments from customers worldwide',
      icon: <CreditCard className="h-4 w-4" />
    },
    {
      name: 'Customer Management',
      description: 'Store and manage customer information securely',
      icon: <Users className="h-4 w-4" />
    },
    {
      name: 'Subscription Billing',
      description: 'Flexible recurring billing and subscription management',
      icon: <Building className="h-4 w-4" />
    },
    {
      name: 'Global Commerce',
      description: 'Support for 135+ currencies and global payment methods',
      icon: <Globe className="h-4 w-4" />
    }
  ];

  const rateLimits = [
    { tier: 'Test mode', limit: '25 requests per second' },
    { tier: 'Live mode', limit: '100 requests per second (can be increased)' },
    { tier: 'Webhook endpoints', limit: '100 requests per second' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000' fill-opacity='0.4'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`
          }} 
        />
      </div>

      <div className="relative z-10 container-responsive section-padding">
        {/* Header */}
        <div className="text-center section-margin-sm">
          <div className="glass-nav inline-flex items-center mb-6 sm:mb-8">
            <CreditCard className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Payment Processing
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-blue-500 p-3 rounded-full">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Stripe API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Complete payment processing solution with subscriptions, webhooks, and comprehensive financial operations
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The Stripe API wrapper provides comprehensive payment processing capabilities for modern applications. 
            Handle one-time payments, recurring subscriptions, customer management, and complex financial operations with ease.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">Payment Processing</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Subscriptions</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">Webhooks</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Multi-currency</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient flex items-center">
            <Download className="h-6 w-6 mr-2" />
            Installation
          </h2>
          <CodeBlock code={installCode} language="bash" id="install" />
        </div>

        {/* Main Content Tabs */}
        <div className="glass-card mb-8 sm:mb-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab('quickstart')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'quickstart' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Quick Start
              </button>
              <button
                onClick={() => setActiveTab('authentication')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'authentication' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Authentication
              </button>
              <button
                onClick={() => setActiveTab('examples')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'examples' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Examples
              </button>
              <button
                onClick={() => setActiveTab('methods')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'methods' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Methods
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'advanced' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Advanced
              </button>
            </div>

            {/* Tab Contents */}
            <div className={`space-y-6 ${activeTab === 'quickstart' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Getting Started</h3>
                <CodeBlock code={basicSetupCode} id="basic-setup" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'authentication' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-primary" />
                  Stripe API Setup
                </h3>
                <p className="text-muted-foreground mb-4">Get your API keys from the Stripe Dashboard</p>
                <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Navigate to Developers → API keys</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Copy your Secret key (starts with `sk_test_` for test mode)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>For production, use your live Secret key (starts with `sk_live_`)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'examples' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Customer Management
                  </h3>
                  <p className="text-muted-foreground mb-4">Create and manage customer information securely</p>
                  <CodeBlock code={customerCode} id="customer-examples" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <RefreshCw className="h-5 w-5 mr-2 text-primary" />
                    Subscription Management
                  </h3>
                  <p className="text-muted-foreground mb-4">Handle recurring billing and subscription lifecycle</p>
                  <CodeBlock code={subscriptionCode} id="subscription-examples" />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'methods' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Available Methods
                </h3>
                <p className="text-muted-foreground mb-4">Complete API method reference</p>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'advanced' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Advanced Configuration</h3>
                <p className="text-muted-foreground mb-4">Advanced features and best practices</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                    <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Advanced Features
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Multi-currency support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Webhook event handling</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        <span>Advanced fraud protection</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                    <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Rate Limits
                    </h4>
                    <div className="space-y-2 text-sm">
                      {rateLimits.map((limit, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{limit.tier}:</span>
                          <span>{limit.limit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=paypal" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">PayPal API</h3>
                  <p className="text-muted-foreground text-sm mb-3">Explore PayPal integration for additional payment options</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Caching Guide</h3>
                  <p className="text-muted-foreground text-sm mb-3">Learn how to optimize performance with caching</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>Learn Caching</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeDocs;