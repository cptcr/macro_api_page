import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, CreditCard, Building, Globe } from 'lucide-react';

const StripeDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            <CreditCard className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Stripe API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete payment processing solution with subscriptions, webhooks, and comprehensive financial operations
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Payment Processing
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Subscriptions
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Webhooks
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Multi-currency
          </span>
        </div>
      </div>

      ## Overview

      The Stripe API wrapper provides comprehensive payment processing capabilities for modern applications. Handle one-time payments, recurring subscriptions, customer management, and complex financial operations with ease.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <CreditCard className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Payment Processing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Accept payments from customers worldwide</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Users className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Customer Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Store and manage customer information securely</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Building className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Subscription Billing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Flexible recurring billing and subscription management</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Globe className="h-6 w-6 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Global Commerce</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Support for 135+ currencies and global payment methods</p>
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
        typescript={`import { StripeAPI } from 'macro_api';

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
}`}
        javascript={`const { StripeAPI } = require('macro_api');

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
}`}
        title="Basic payment processing"
      />

      ## Authentication

      <InfoBox type="info" title="API Key Required">
        You need a valid Stripe secret key to use the Stripe API. Never expose your secret key in client-side code.
      </InfoBox>

      ### Getting Your Stripe API Key

      1. Sign up for a Stripe account at [stripe.com](https://stripe.com)
      2. Go to your Stripe Dashboard
      3. Navigate to Developers {'>'} API keys
      4. Copy your Secret key (starts with `sk_test_` for test mode)
      5. For production, use your live Secret key (starts with `sk_live_`)
      6. Add the key to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

// In your application
import { StripeAPI } from 'macro_api';

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`}
        javascript={`// .env file
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

// In your application
const { StripeAPI } = require('macro_api');

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Always use environment variables for API keys. The secret key should only be used in server-side code. For client-side applications, use Stripe's publishable key with Stripe.js.
      </InfoBox>

      ## Core Methods

      ### Customer Management

      <CodeExampleSwitcher
        typescript={`// Create a customer
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
}

// Retrieve a customer
async function getCustomer(customerId: string) {
  const customer = await stripe.getCustomer(customerId);
  console.log('Customer:', customer);
  return customer;
}

// Update customer information
async function updateCustomer(customerId: string) {
  const updatedCustomer = await stripe.updateCustomer(customerId, {
    name: 'John Smith',
    email: 'johnsmith@example.com',
    metadata: {
      lastUpdated: new Date().toISOString()
    }
  });
  
  return updatedCustomer;
}

// List customers with pagination
async function listCustomers() {
  const customers = await stripe.listCustomers({
    limit: 10,
    created: {
      gte: Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60 // Last 30 days
    }
  });
  
  console.log(\`Found \${customers.data.length} customers\`);
  return customers;
}

// Delete a customer
async function deleteCustomer(customerId: string) {
  const deleted = await stripe.deleteCustomer(customerId);
  console.log('Customer deleted:', deleted.deleted);
  return deleted;
}`}
        javascript={`// Create a customer
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
}

// Retrieve and update customers
async function getCustomer(customerId) {
  const customer = await stripe.getCustomer(customerId);
  return customer;
}

async function updateCustomer(customerId) {
  const updatedCustomer = await stripe.updateCustomer(customerId, {
    name: 'John Smith',
    email: 'johnsmith@example.com'
  });
  
  return updatedCustomer;
}`}
        title="Customer management operations"
      />

      ### Payment Processing

      <CodeExampleSwitcher
        typescript={`// Create a payment intent for one-time payments
async function createPaymentIntent() {
  const paymentIntent = await stripe.createPaymentIntent({
    amount: 5000, // $50.00
    currency: 'usd',
    customer: 'cus_customer_id',
    payment_method_types: ['card'],
    description: 'Premium plan subscription',
    receipt_email: 'customer@example.com',
    metadata: {
      orderId: 'order_123',
      productId: 'premium_plan'
    },
    shipping: {
      name: 'John Doe',
      address: {
        line1: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94111',
        country: 'US'
      }
    }
  });
  
  return paymentIntent;
}

// Confirm a payment intent
async function confirmPayment(paymentIntentId: string, paymentMethodId: string) {
  const confirmedPayment = await stripe.confirmPaymentIntent(paymentIntentId, {
    payment_method: paymentMethodId,
    return_url: 'https://your-website.com/return'
  });
  
  console.log('Payment status:', confirmedPayment.status);
  return confirmedPayment;
}

// Capture a payment (for manual capture)
async function capturePayment(paymentIntentId: string) {
  const capturedPayment = await stripe.capturePaymentIntent(paymentIntentId, {
    amount_to_capture: 5000
  });
  
  return capturedPayment;
}

// Cancel a payment intent
async function cancelPayment(paymentIntentId: string) {
  const canceledPayment = await stripe.cancelPaymentIntent(paymentIntentId, {
    cancellation_reason: 'requested_by_customer'
  });
  
  return canceledPayment;
}

// List payment intents
async function listPayments() {
  const payments = await stripe.listPaymentIntents({
    limit: 20,
    customer: 'cus_customer_id'
  });
  
  return payments;
}`}
        javascript={`// Create and manage payment intents
async function createPaymentIntent() {
  const paymentIntent = await stripe.createPaymentIntent({
    amount: 5000, // $50.00
    currency: 'usd',
    customer: 'cus_customer_id',
    payment_method_types: ['card'],
    description: 'Premium plan subscription'
  });
  
  return paymentIntent;
}

async function confirmPayment(paymentIntentId, paymentMethodId) {
  const confirmedPayment = await stripe.confirmPaymentIntent(paymentIntentId, {
    payment_method: paymentMethodId,
    return_url: 'https://your-website.com/return'
  });
  
  return confirmedPayment;
}`}
        title="Payment intent operations"
      />

      ### Subscription Management

      <CodeExampleSwitcher
        typescript={`// Create a subscription
async function createSubscription(customerId: string, priceId: string) {
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
}

// Update a subscription
async function updateSubscription(subscriptionId: string) {
  const updatedSubscription = await stripe.updateSubscription(subscriptionId, {
    items: [
      {
        id: 'si_item_id',
        price: 'price_new_plan',
        quantity: 2
      }
    ],
    proration_behavior: 'create_prorations',
    metadata: {
      updated: new Date().toISOString(),
      reason: 'plan_upgrade'
    }
  });
  
  return updatedSubscription;
}

// Cancel a subscription
async function cancelSubscription(subscriptionId: string, immediate = false) {
  if (immediate) {
    // Cancel immediately
    const canceledSubscription = await stripe.cancelSubscription(subscriptionId);
    return canceledSubscription;
  } else {
    // Cancel at period end
    const subscription = await stripe.updateSubscription(subscriptionId, {
      cancel_at_period_end: true
    });
    return subscription;
  }
}

// List subscriptions
async function listSubscriptions(customerId?: string) {
  const subscriptions = await stripe.listSubscriptions({
    customer: customerId,
    status: 'active',
    limit: 50
  });
  
  console.log(\`Found \${subscriptions.data.length} active subscriptions\`);
  return subscriptions;
}

// Get subscription details
async function getSubscription(subscriptionId: string) {
  const subscription = await stripe.getSubscription(subscriptionId);
  
  console.log('Subscription status:', subscription.status);
  console.log('Current period:', {
    start: new Date(subscription.current_period_start * 1000),
    end: new Date(subscription.current_period_end * 1000)
  });
  
  return subscription;
}`}
        javascript={`// Subscription management
async function createSubscription(customerId, priceId) {
  const subscription = await stripe.createSubscription({
    customer: customerId,
    items: [{ price: priceId }],
    trial_period_days: 14
  });
  
  return subscription;
}

async function cancelSubscription(subscriptionId, immediate = false) {
  if (immediate) {
    return await stripe.cancelSubscription(subscriptionId);
  } else {
    return await stripe.updateSubscription(subscriptionId, {
      cancel_at_period_end: true
    });
  }
}`}
        title="Subscription lifecycle management"
      />

      ### Product and Pricing

      <CodeExampleSwitcher
        typescript={`// Create a product
async function createProduct() {
  const product = await stripe.createProduct({
    name: 'Premium Plan',
    description: 'Full access to all premium features',
    images: ['https://example.com/product-image.jpg'],
    metadata: {
      category: 'subscription',
      features: 'unlimited_usage,priority_support'
    },
    statement_descriptor: 'PREMIUM PLAN'
  });
  
  console.log('Product created:', product.id);
  return product;
}

// Create pricing for a product
async function createPrice(productId: string) {
  const price = await stripe.createPrice({
    product: productId,
    unit_amount: 2999, // $29.99
    currency: 'usd',
    recurring: {
      interval: 'month',
      interval_count: 1,
      usage_type: 'licensed'
    },
    metadata: {
      plan: 'premium_monthly'
    }
  });
  
  console.log('Price created:', price.id);
  return price;
}

// Create usage-based pricing
async function createUsageBasedPrice(productId: string) {
  const price = await stripe.createPrice({
    product: productId,
    currency: 'usd',
    recurring: {
      interval: 'month',
      usage_type: 'metered'
    },
    billing_scheme: 'per_unit',
    unit_amount: 500, // $5.00 per unit
    metadata: {
      billing_type: 'usage_based'
    }
  });
  
  return price;
}

// List products and prices
async function listProducts() {
  const products = await stripe.listProducts({
    active: true,
    limit: 20
  });
  
  for (const product of products.data) {
    const prices = await stripe.listPrices({
      product: product.id,
      active: true
    });
    
    console.log(\`Product: \${product.name} has \${prices.data.length} prices\`);
  }
  
  return products;
}

// Update product information
async function updateProduct(productId: string) {
  const updatedProduct = await stripe.updateProduct(productId, {
    name: 'Premium Plan Pro',
    description: 'Enhanced premium features with AI support',
    metadata: {
      lastUpdated: new Date().toISOString(),
      version: '2.0'
    }
  });
  
  return updatedProduct;
}`}
        javascript={`// Product and pricing management
async function createProduct() {
  const product = await stripe.createProduct({
    name: 'Premium Plan',
    description: 'Full access to all premium features'
  });
  
  return product;
}

async function createPrice(productId) {
  const price = await stripe.createPrice({
    product: productId,
    unit_amount: 2999, // $29.99
    currency: 'usd',
    recurring: {
      interval: 'month'
    }
  });
  
  return price;
}`}
        title="Product catalog management"
      />

      ### Webhook Handling

      <CodeExampleSwitcher
        typescript={`import express from 'express';
import { StripeAPI } from 'macro_api';

const app = express();
const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Webhook endpoint
app.post('/stripe/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['stripe-signature'] as string;
  
  try {
    // Verify and parse the webhook
    const event = stripe.constructWebhookEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    
    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(\`Payment \${paymentIntent.id} succeeded!\`);
        // Update your database, send confirmation email, etc.
        break;
        
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log(\`Payment \${failedPayment.id} failed:\`, failedPayment.last_payment_error);
        // Handle failed payment, notify customer, etc.
        break;
        
      case 'customer.subscription.created':
        const newSubscription = event.data.object;
        console.log(\`New subscription \${newSubscription.id} created\`);
        // Activate user account, send welcome email
        break;
        
      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object;
        console.log(\`Subscription \${updatedSubscription.id} updated\`);
        // Update user plan, handle upgrades/downgrades
        break;
        
      case 'customer.subscription.deleted':
        const canceledSubscription = event.data.object;
        console.log(\`Subscription \${canceledSubscription.id} canceled\`);
        // Deactivate user account, send cancellation email
        break;
        
      case 'invoice.payment_succeeded':
        const paidInvoice = event.data.object;
        console.log(\`Invoice \${paidInvoice.id} paid\`);
        // Extend subscription, send receipt
        break;
        
      case 'invoice.payment_failed':
        const unpaidInvoice = event.data.object;
        console.log(\`Invoice \${unpaidInvoice.id} payment failed\`);
        // Handle dunning, send payment retry email
        break;
        
      default:
        console.log(\`Unhandled event type: \${event.type}\`);
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send('Webhook Error');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        javascript={`const express = require('express');
const { StripeAPI } = require('macro_api');

const app = express();
const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Webhook endpoint
app.post('/stripe/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['stripe-signature'];
  
  try {
    const event = stripe.constructWebhookEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    // Handle events
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('Payment succeeded!');
        break;
      case 'customer.subscription.created':
        console.log('New subscription created');
        break;
      default:
        console.log(\`Unhandled event: \${event.type}\`);
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send('Webhook Error');
  }
});`}
        title="Webhook event handling"
      />

      ## Advanced Features

      ### Refunds and Disputes

      <CodeExampleSwitcher
        typescript={`// Create a refund
async function createRefund(paymentIntentId: string, amount?: number) {
  const refund = await stripe.createRefund({
    payment_intent: paymentIntentId,
    amount: amount, // Optional: partial refund
    reason: 'requested_by_customer',
    metadata: {
      refundDate: new Date().toISOString(),
      processedBy: 'customer_service'
    }
  });
  
  console.log('Refund created:', refund.id);
  return refund;
}

// List refunds
async function listRefunds(chargeId?: string) {
  const refunds = await stripe.listRefunds({
    charge: chargeId,
    limit: 50
  });
  
  return refunds;
}

// Update refund metadata
async function updateRefund(refundId: string) {
  const updatedRefund = await stripe.updateRefund(refundId, {
    metadata: {
      status: 'processed',
      notes: 'Customer service approved refund'
    }
  });
  
  return updatedRefund;
}`}
        javascript={`// Refund management
async function createRefund(paymentIntentId, amount) {
  const refund = await stripe.createRefund({
    payment_intent: paymentIntentId,
    amount: amount,
    reason: 'requested_by_customer'
  });
  
  return refund;
}

async function listRefunds(chargeId) {
  return await stripe.listRefunds({
    charge: chargeId,
    limit: 50
  });
}`}
        title="Refund processing"
      />

      ### Payment Methods

      <CodeExampleSwitcher
        typescript={`// Create a payment method
async function createPaymentMethod() {
  const paymentMethod = await stripe.createPaymentMethod({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2025,
      cvc: '123'
    },
    billing_details: {
      name: 'John Doe',
      email: 'john@example.com',
      address: {
        line1: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94111',
        country: 'US'
      }
    }
  });
  
  return paymentMethod;
}

// Attach payment method to customer
async function attachPaymentMethod(paymentMethodId: string, customerId: string) {
  const attachedPaymentMethod = await stripe.attachPaymentMethod(paymentMethodId, {
    customer: customerId
  });
  
  return attachedPaymentMethod;
}

// List customer's payment methods
async function listPaymentMethods(customerId: string) {
  const paymentMethods = await stripe.listPaymentMethods({
    customer: customerId,
    type: 'card'
  });
  
  console.log(\`Customer has \${paymentMethods.data.length} saved cards\`);
  return paymentMethods;
}

// Detach payment method
async function detachPaymentMethod(paymentMethodId: string) {
  const detachedPaymentMethod = await stripe.detachPaymentMethod(paymentMethodId);
  return detachedPaymentMethod;
}`}
        javascript={`// Payment method management
async function createPaymentMethod() {
  const paymentMethod = await stripe.createPaymentMethod({
    type: 'card',
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2025,
      cvc: '123'
    }
  });
  
  return paymentMethod;
}

async function attachPaymentMethod(paymentMethodId, customerId) {
  return await stripe.attachPaymentMethod(paymentMethodId, {
    customer: customerId
  });
}`}
        title="Payment method management"
      />

      ## Error Handling

      <InfoBox type="warning" title="Rate Limits">
        Stripe has rate limits on API requests. The macro_api wrapper includes automatic retry logic for rate-limited requests.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { StripeAPI, MacroApiError } from 'macro_api';

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Comprehensive error handling
async function robustPaymentProcessing() {
  try {
    const paymentIntent = await stripe.createPaymentIntent({
      amount: 2000,
      currency: 'usd',
      payment_method_types: ['card']
    });
    
    return paymentIntent;
  } catch (error) {
    if (error instanceof MacroApiError) {
      // Handle specific Stripe errors
      switch (error.code) {
        case 'card_declined':
          console.error('Card was declined:', error.message);
          // Show user-friendly message
          break;
        case 'insufficient_funds':
          console.error('Insufficient funds:', error.message);
          // Suggest alternative payment method
          break;
        case 'authentication_required':
          console.error('Authentication required:', error.message);
          // Redirect to 3D Secure
          break;
        case 'rate_limit_error':
          console.error('Rate limit exceeded:', error.message);
          // Implement exponential backoff
          break;
        default:
          console.error('Stripe error:', error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    
    throw error;
  }
}

// Retry logic for network issues
async function retryableStripeOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (error instanceof MacroApiError && 
          error.statusCode === 429 && 
          attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(\`Rate limited, retrying in \${delay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  
  throw new Error('Max retries exceeded');
}

// Usage with retry logic
async function createPaymentWithRetry() {
  return await retryableStripeOperation(() => 
    stripe.createPaymentIntent({
      amount: 5000,
      currency: 'usd'
    })
  );
}`}
        javascript={`const { StripeAPI, MacroApiError } = require('macro_api');

const stripe = new StripeAPI({
  secretKey: process.env.STRIPE_SECRET_KEY
});

// Error handling
async function robustPaymentProcessing() {
  try {
    const paymentIntent = await stripe.createPaymentIntent({
      amount: 2000,
      currency: 'usd',
      payment_method_types: ['card']
    });
    
    return paymentIntent;
  } catch (error) {
    if (error instanceof MacroApiError) {
      switch (error.code) {
        case 'card_declined':
          console.error('Card declined:', error.message);
          break;
        case 'rate_limit_error':
          console.error('Rate limit exceeded');
          break;
        default:
          console.error('Stripe error:', error.message);
      }
    }
    throw error;
  }
}`}
        title="Robust error handling"
      />

      ## Testing

      <InfoBox type="tip" title="Test Mode">
        Always test your integration using Stripe's test mode before going live. Use test card numbers and API keys that start with `sk_test_`.
      </InfoBox>

      ### Test Card Numbers

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Common Test Cards</h3>
          <div className="space-y-3 text-sm font-mono">
            <div className="flex justify-between">
              <span>4242424242424242</span>
              <span className="text-gray-500">Visa - Always succeeds</span>
            </div>
            <div className="flex justify-between">
              <span>4000000000000002</span>
              <span className="text-gray-500">Visa - Always declined</span>
            </div>
            <div className="flex justify-between">
              <span>4000000000009995</span>
              <span className="text-gray-500">Visa - Always fails with insufficient funds</span>
            </div>
            <div className="flex justify-between">
              <span>4000002500003155</span>
              <span className="text-gray-500">Visa - Requires authentication (3D Secure)</span>
            </div>
            <div className="flex justify-between">
              <span>5555555555554444</span>
              <span className="text-gray-500">Mastercard - Always succeeds</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Use any future expiry date and any 3-digit CVC for test cards.
          </p>
        </div>
      </div>

      <CodeExampleSwitcher
        typescript={`// Test payment creation
async function testPayment() {
  const testPayment = await stripe.createPaymentIntent({
    amount: 1000, // $10.00
    currency: 'usd',
    payment_method_types: ['card'],
    confirm: true,
    payment_method: {
      type: 'card',
      card: {
        number: '4242424242424242', // Test card
        exp_month: 12,
        exp_year: 2025,
        cvc: '123'
      }
    },
    return_url: 'https://your-website.com/return'
  });
  
  console.log('Test payment status:', testPayment.status);
  return testPayment;
}

// Test webhook locally with Stripe CLI
// Install: npm install -g stripe-cli
// Login: stripe login
// Forward webhooks: stripe listen --forward-to localhost:3000/stripe/webhook`}
        javascript={`// Test payment creation
async function testPayment() {
  const testPayment = await stripe.createPaymentIntent({
    amount: 1000,
    currency: 'usd',
    payment_method_types: ['card'],
    confirm: true,
    payment_method: {
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2025,
        cvc: '123'
      }
    }
  });
  
  return testPayment;
}`}
        title="Testing payments"
      />

      ## Best Practices

      <InfoBox type="tip" title="Performance Tips">
        - Use idempotency keys for critical operations to prevent duplicate charges
        - Implement webhook handling for reliable event processing
        - Store Stripe IDs in your database for easy reference
        - Use metadata to link Stripe objects to your application data
      </InfoBox>

      ### Security Considerations

      <CodeExampleSwitcher
        typescript={`// Best practices for secure Stripe integration

// 1. Always validate webhooks
function validateWebhook(payload: Buffer, signature: string): boolean {
  try {
    stripe.constructWebhookEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET!);
    return true;
  } catch (error) {
    return false;
  }
}

// 2. Use idempotency keys for critical operations
async function idempotentPayment(customerId: string, amount: number) {
  const idempotencyKey = \`payment_\${customerId}_\${amount}_\${Date.now()}\`;
  
  const paymentIntent = await stripe.createPaymentIntent({
    amount,
    currency: 'usd',
    customer: customerId
  }, {
    idempotencyKey // Prevents duplicate charges
  });
  
  return paymentIntent;
}

// 3. Store minimal PII, use Stripe Customer objects
async function createSecureCustomer(email: string, name: string) {
  // Store sensitive data in Stripe, reference by ID
  const customer = await stripe.createCustomer({
    email,
    name,
    metadata: {
      internalUserId: 'user_12345' // Your internal reference
    }
  });
  
  // Store only the Stripe customer ID in your database
  await database.users.update('user_12345', {
    stripeCustomerId: customer.id
  });
  
  return customer;
}

// 4. Implement proper error boundaries
class PaymentService {
  private stripe: StripeAPI;
  
  constructor() {
    this.stripe = new StripeAPI({
      secretKey: process.env.STRIPE_SECRET_KEY!
    });
  }
  
  async processPayment(amount: number, customerId: string) {
    try {
      const paymentIntent = await this.stripe.createPaymentIntent({
        amount,
        currency: 'usd',
        customer: customerId,
        confirmation_method: 'manual',
        capture_method: 'manual' // Manual capture for review
      });
      
      // Log successful payment creation
      console.log(\`Payment intent created: \${paymentIntent.id}\`);
      
      return paymentIntent;
    } catch (error) {
      // Log error for monitoring
      console.error('Payment creation failed:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        customerId,
        amount,
        timestamp: new Date().toISOString()
      });
      
      throw error;
    }
  }
}`}
        javascript={`// Security best practices

// Validate webhooks
function validateWebhook(payload, signature) {
  try {
    stripe.constructWebhookEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

// Use idempotency keys
async function idempotentPayment(customerId, amount) {
  const idempotencyKey = \`payment_\${customerId}_\${amount}_\${Date.now()}\`;
  
  const paymentIntent = await stripe.createPaymentIntent({
    amount,
    currency: 'usd',
    customer: customerId
  }, {
    idempotencyKey
  });
  
  return paymentIntent;
}`}
        title="Security and reliability patterns"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit the [official Stripe API documentation](https://stripe.com/docs/api).

      ### Rate Limits

      - Test mode: 25 requests per second
      - Live mode: 100 requests per second (can be increased)
      - Webhook endpoints: 100 requests per second

      ### Supported Currencies

      Stripe supports 135+ currencies including USD, EUR, GBP, JPY, CAD, AUD, and many more. Check the [supported currencies list](https://stripe.com/docs/currencies) for the complete list.

      ### Support

      - [Stripe API Documentation](https://stripe.com/docs/api)
      - [Stripe Dashboard](https://dashboard.stripe.com/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default StripeDocs;