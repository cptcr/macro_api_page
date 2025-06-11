import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Users, CreditCard, DollarSign, FileText, RefreshCw } from 'lucide-react';

const PaypalDocs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            <DollarSign className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">PayPal API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete PayPal integration for payments, invoicing, and financial operations
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            Payment Processing
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Order Management
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            Invoicing
          </span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Refunds
          </span>
        </div>
      </div>

      ## Overview

      The PayPal API wrapper provides comprehensive access to PayPal's payment processing capabilities, including order management, invoicing, refunds, and payment verification. Built for production use with proper error handling and OAuth2 authentication.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <CreditCard className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Order Management</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create, capture, and authorize payment orders</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <FileText className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Invoicing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Create and manage professional invoices</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <RefreshCw className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Refund Processing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Handle refunds and payment reversals</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Shield className="h-6 w-6 text-red-600 mb-2" />
          <h3 className="font-semibold mb-1">OAuth2 Security</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Secure authentication with automatic token management</p>
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
        typescript={`import { PayPalAPI } from 'macro_api';

// Initialize the client
const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: true // Use false for production
});

// Create a simple order
async function createSimpleOrder() {
  try {
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '100.00'
        },
        description: 'Product purchase'
      }],
      application_context: {
        return_url: 'https://yoursite.com/success',
        cancel_url: 'https://yoursite.com/cancel'
      }
    });
    
    console.log('Order created:', order.id);
    return order;
  } catch (error) {
    console.error('Error creating order:', error);
  }
}`}
        javascript={`const { PayPalAPI } = require('macro_api');

// Initialize the client
const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: true // Use false for production
});

// Create a simple order
async function createSimpleOrder() {
  try {
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '100.00'
        },
        description: 'Product purchase'
      }],
      application_context: {
        return_url: 'https://yoursite.com/success',
        cancel_url: 'https://yoursite.com/cancel'
      }
    });
    
    console.log('Order created:', order.id);
    return order;
  } catch (error) {
    console.error('Error creating order:', error);
  }
}`}
        title="Basic order creation"
      />

      ## Authentication

      <InfoBox type="info" title="PayPal App Required">
        You need to create a PayPal app to get your Client ID and Client Secret.
      </InfoBox>

      ### Getting Your PayPal App Credentials

      1. Go to the [PayPal Developer Dashboard](https://developer.paypal.com/developer/applications/)
      2. Sign in with your PayPal account
      3. Click "Create App"
      4. Fill in your app details and select your merchant account
      5. Choose "Default Application" or create a new one
      6. Copy your Client ID and Client Secret
      7. Add them to your environment variables

      <CodeExampleSwitcher
        typescript={`// .env file
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

// In your application
import { PayPalAPI } from 'macro_api';

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID!,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET!,
  sandbox: process.env.NODE_ENV !== 'production'
});`}
        javascript={`// .env file
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

// In your application
const { PayPalAPI } = require('macro_api');

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: process.env.NODE_ENV !== 'production'
});`}
        title="Environment setup"
      />

      <InfoBox type="security" title="Security Best Practice">
        Always use environment variables for your PayPal credentials. Never commit them to version control. Use sandbox mode for development and testing.
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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">clientId</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your PayPal app's Client ID</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">clientSecret</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Your PayPal app's Client Secret</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">sandbox</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">boolean</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Use sandbox environment (default: false)</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Order Management

      ### Creating Orders

      <CodeExampleSwitcher
        typescript={`// Create a comprehensive order
async function createDetailedOrder() {
  const order = await paypal.createOrder({
    intent: 'CAPTURE',
    purchase_units: [{
      reference_id: 'order-12345',
      description: 'Premium Software License',
      custom_id: 'customer-abc-123',
      invoice_id: 'INV-2024-001',
      amount: {
        currency_code: 'USD',
        value: '299.99',
        breakdown: {
          item_total: { currency_code: 'USD', value: '249.99' },
          tax_total: { currency_code: 'USD', value: '25.00' },
          shipping: { currency_code: 'USD', value: '25.00' }
        }
      },
      items: [{
        name: 'Premium Software License',
        description: 'Annual subscription to premium features',
        quantity: '1',
        unit_amount: { currency_code: 'USD', value: '249.99' },
        sku: 'PREM-001',
        category: 'DIGITAL_GOODS'
      }],
      shipping: {
        name: { full_name: 'John Doe' },
        address: {
          address_line_1: '123 Main Street',
          admin_area_2: 'San Jose',
          admin_area_1: 'CA',
          postal_code: '95131',
          country_code: 'US'
        }
      }
    }],
    application_context: {
      brand_name: 'Your Company Name',
      locale: 'en-US',
      landing_page: 'BILLING',
      shipping_preference: 'SET_PROVIDED_ADDRESS',
      user_action: 'PAY_NOW',
      return_url: 'https://yoursite.com/payment/success',
      cancel_url: 'https://yoursite.com/payment/cancel'
    }
  });

  console.log('Order ID:', order.id);
  console.log('Approval URL:', order.links?.find(link => link.rel === 'approve')?.href);
  
  return order;
}`}
        javascript={`// Create a comprehensive order
async function createDetailedOrder() {
  const order = await paypal.createOrder({
    intent: 'CAPTURE',
    purchase_units: [{
      reference_id: 'order-12345',
      description: 'Premium Software License',
      custom_id: 'customer-abc-123',
      invoice_id: 'INV-2024-001',
      amount: {
        currency_code: 'USD',
        value: '299.99',
        breakdown: {
          item_total: { currency_code: 'USD', value: '249.99' },
          tax_total: { currency_code: 'USD', value: '25.00' },
          shipping: { currency_code: 'USD', value: '25.00' }
        }
      },
      items: [{
        name: 'Premium Software License',
        description: 'Annual subscription to premium features',
        quantity: '1',
        unit_amount: { currency_code: 'USD', value: '249.99' },
        sku: 'PREM-001',
        category: 'DIGITAL_GOODS'
      }]
    }],
    application_context: {
      brand_name: 'Your Company Name',
      user_action: 'PAY_NOW',
      return_url: 'https://yoursite.com/payment/success',
      cancel_url: 'https://yoursite.com/payment/cancel'
    }
  });

  console.log('Order ID:', order.id);
  return order;
}`}
        title="Detailed order creation"
      />

      ### Capturing Orders

      <CodeExampleSwitcher
        typescript={`// Capture an approved order
async function captureOrder(orderId: string) {
  try {
    const capture = await paypal.captureOrder(orderId);
    
    console.log('Payment captured:', capture.id);
    console.log('Status:', capture.status);
    console.log('Amount:', capture.purchase_units[0]?.payments?.captures?.[0]?.amount);
    
    // Handle successful payment
    if (capture.status === 'COMPLETED') {
      await processSuccessfulPayment(capture);
    }
    
    return capture;
  } catch (error) {
    console.error('Capture failed:', error);
    throw error;
  }
}

async function processSuccessfulPayment(capture: any) {
  // Update your database
  // Send confirmation emails
  // Activate user account/subscription
  console.log('Processing successful payment for order:', capture.id);
}`}
        javascript={`// Capture an approved order
async function captureOrder(orderId) {
  try {
    const capture = await paypal.captureOrder(orderId);
    
    console.log('Payment captured:', capture.id);
    console.log('Status:', capture.status);
    
    // Handle successful payment
    if (capture.status === 'COMPLETED') {
      await processSuccessfulPayment(capture);
    }
    
    return capture;
  } catch (error) {
    console.error('Capture failed:', error);
    throw error;
  }
}

async function processSuccessfulPayment(capture) {
  // Update your database
  // Send confirmation emails
  // Activate user account/subscription
  console.log('Processing successful payment for order:', capture.id);
}`}
        title="Order capture handling"
      />

      ### Order Authorization (Advanced)

      <CodeExampleSwitcher
        typescript={`// For scenarios where you need to authorize first, capture later
async function authorizeAndCaptureFlow(orderId: string) {
  // Step 1: Authorize the payment
  const authorization = await paypal.authorizeOrder(orderId);
  
  console.log('Payment authorized:', authorization.id);
  const authId = authorization.purchase_units[0]?.payments?.authorizations?.[0]?.id;
  
  if (authId) {
    // Step 2: Capture the authorized payment (within 3 days)
    const capture = await paypal.captureAuthorization(authId, {
      amount: {
        currency_code: 'USD',
        value: '100.00'
      },
      final_capture: true,
      note_to_payer: 'Thank you for your purchase!'
    });
    
    console.log('Authorization captured:', capture.id);
    return capture;
  }
}

// Void an authorization if needed
async function voidAuthorization(authorizationId: string) {
  const result = await paypal.voidAuthorization(authorizationId);
  console.log('Authorization voided:', result);
}`}
        javascript={`// For scenarios where you need to authorize first, capture later
async function authorizeAndCaptureFlow(orderId) {
  // Step 1: Authorize the payment
  const authorization = await paypal.authorizeOrder(orderId);
  
  console.log('Payment authorized:', authorization.id);
  const authId = authorization.purchase_units[0]?.payments?.authorizations?.[0]?.id;
  
  if (authId) {
    // Step 2: Capture the authorized payment
    const capture = await paypal.captureAuthorization(authId, {
      amount: {
        currency_code: 'USD',
        value: '100.00'
      },
      final_capture: true
    });
    
    console.log('Authorization captured:', capture.id);
    return capture;
  }
}`}
        title="Authorization and capture flow"
      />

      ## Payment Management

      ### Processing Refunds

      <CodeExampleSwitcher
        typescript={`// Full refund
async function processFullRefund(captureId: string) {
  const refund = await paypal.refundPayment(captureId, {
    note_to_payer: 'Refund for cancelled order'
  });
  
  console.log('Refund processed:', refund.id);
  console.log('Status:', refund.status);
  return refund;
}

// Partial refund
async function processPartialRefund(captureId: string) {
  const refund = await paypal.refundPayment(captureId, {
    amount: {
      value: '50.00',
      currency_code: 'USD'
    },
    invoice_id: 'REFUND-2024-001',
    note_to_payer: 'Partial refund for returned item'
  });
  
  console.log('Partial refund processed:', refund.id);
  return refund;
}

// Check refund status
async function checkRefundStatus(refundId: string) {
  const refund = await paypal.getRefund(refundId);
  console.log('Refund status:', refund.status);
  console.log('Refund amount:', refund.amount);
  return refund;
}`}
        javascript={`// Full refund
async function processFullRefund(captureId) {
  const refund = await paypal.refundPayment(captureId, {
    note_to_payer: 'Refund for cancelled order'
  });
  
  console.log('Refund processed:', refund.id);
  return refund;
}

// Partial refund
async function processPartialRefund(captureId) {
  const refund = await paypal.refundPayment(captureId, {
    amount: {
      value: '50.00',
      currency_code: 'USD'
    },
    note_to_payer: 'Partial refund for returned item'
  });
  
  console.log('Partial refund processed:', refund.id);
  return refund;
}`}
        title="Refund processing"
      />

      ## Invoicing System

      ### Creating Invoices

      <CodeExampleSwitcher
        typescript={`// Create a professional invoice
async function createInvoice() {
  // First, generate an invoice number
  const invoiceNumber = await paypal.generateInvoiceNumber();
  
  const invoice = await paypal.createInvoice({
    detail: {
      invoice_number: invoiceNumber.invoice_number,
      reference: 'REF-2024-001',
      invoice_date: new Date().toISOString().split('T')[0],
      currency_code: 'USD',
      note: 'Thank you for your business!',
      term: 'Due on receipt',
      memo: 'Professional services rendered',
      payment_term: {
        term_type: 'NET_30',
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    },
    invoicer: {
      name: {
        given_name: 'John',
        surname: 'Doe'
      },
      address: {
        address_line_1: '123 Business Street',
        admin_area_2: 'San Jose',
        admin_area_1: 'CA',
        postal_code: '95131',
        country_code: 'US'
      },
      email_address: 'john@business.com',
      phones: [{
        phone_type: 'MOBILE',
        phone_number: {
          national_number: '5551234567'
        }
      }],
      website: 'https://business.com',
      tax_id: '123-45-6789',
      logo_url: 'https://business.com/logo.png'
    },
    primary_recipients: [{
      billing_info: {
        name: {
          given_name: 'Jane',
          surname: 'Smith'
        },
        address: {
          address_line_1: '456 Client Avenue',
          admin_area_2: 'Austin',
          admin_area_1: 'TX',
          postal_code: '78701',
          country_code: 'US'
        },
        email_address: 'jane@client.com'
      }
    }],
    items: [{
      name: 'Web Development Services',
      description: 'Frontend and backend development work',
      quantity: '40',
      unit_amount: {
        currency_code: 'USD',
        value: '150.00'
      },
      tax: {
        name: 'Sales Tax',
        percent: '8.25'
      },
      unit_of_measure: 'HOURS'
    }, {
      name: 'Hosting Setup',
      description: 'Server configuration and deployment',
      quantity: '1',
      unit_amount: {
        currency_code: 'USD',
        value: '500.00'
      }
    }],
    configuration: {
      partial_payment: {
        allow_partial_payment: true,
        minimum_amount_due: {
          currency_code: 'USD',
          value: '1000.00'
        }
      },
      allow_tip: false,
      tax_calculated_after_discount: true,
      tax_inclusive: false
    }
  });
  
  console.log('Invoice created:', invoice.id);
  return invoice;
}`}
        javascript={`// Create a professional invoice
async function createInvoice() {
  // First, generate an invoice number
  const invoiceNumber = await paypal.generateInvoiceNumber();
  
  const invoice = await paypal.createInvoice({
    detail: {
      invoice_number: invoiceNumber.invoice_number,
      currency_code: 'USD',
      note: 'Thank you for your business!',
      payment_term: {
        term_type: 'NET_30'
      }
    },
    primary_recipients: [{
      billing_info: {
        email_address: 'client@example.com'
      }
    }],
    items: [{
      name: 'Web Development Services',
      quantity: '40',
      unit_amount: {
        currency_code: 'USD',
        value: '150.00'
      }
    }]
  });
  
  console.log('Invoice created:', invoice.id);
  return invoice;
}`}
        title="Professional invoice creation"
      />

      ### Managing Invoices

      <CodeExampleSwitcher
        typescript={`// Send an invoice
async function sendInvoice(invoiceId: string) {
  await paypal.sendInvoice(invoiceId, {
    send_to_recipient: true,
    send_to_invoicer: false
  });
  
  console.log('Invoice sent to recipient');
}

// Search invoices
async function searchInvoices() {
  const results = await paypal.searchInvoices({
    total_amount_range: {
      lower_amount: { currency_code: 'USD', value: '100.00' },
      upper_amount: { currency_code: 'USD', value: '10000.00' }
    },
    invoice_date_range: {
      start: '2024-01-01',
      end: '2024-12-31'
    },
    status: 'SENT',
    page: 1,
    page_size: 20,
    total_count_required: true
  });
  
  console.log('Found invoices:', results.total_items);
  console.log('Invoices:', results.items);
  return results;
}

// Get specific invoice
async function getInvoiceDetails(invoiceId: string) {
  const invoice = await paypal.getInvoice(invoiceId);
  
  console.log('Invoice status:', invoice.status);
  console.log('Total amount:', invoice.amount?.currency_code, invoice.amount?.value);
  console.log('Due date:', invoice.detail?.payment_term?.due_date);
  
  return invoice;
}

// Delete draft invoice
async function deleteDraftInvoice(invoiceId: string) {
  await paypal.deleteInvoice(invoiceId);
  console.log('Draft invoice deleted');
}`}
        javascript={`// Send an invoice
async function sendInvoice(invoiceId) {
  await paypal.sendInvoice(invoiceId, {
    send_to_recipient: true
  });
  
  console.log('Invoice sent to recipient');
}

// Search invoices
async function searchInvoices() {
  const results = await paypal.searchInvoices({
    status: 'SENT',
    page: 1,
    page_size: 20
  });
  
  console.log('Found invoices:', results.total_items);
  return results;
}

// Get specific invoice
async function getInvoiceDetails(invoiceId) {
  const invoice = await paypal.getInvoice(invoiceId);
  console.log('Invoice status:', invoice.status);
  return invoice;
}`}
        title="Invoice management operations"
      />

      ## Complete Integration Example

      <CodeExampleSwitcher
        typescript={`import { PayPalAPI } from 'macro_api';
import express from 'express';

const app = express();
app.use(express.json());

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID!,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET!,
  sandbox: process.env.NODE_ENV !== 'production'
});

// Create order endpoint
app.post('/api/orders', async (req, res) => {
  try {
    const { amount, currency = 'USD', items = [] } = req.body;
    
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString()
        },
        items: items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity.toString(),
          unit_amount: {
            currency_code: currency,
            value: item.price.toString()
          }
        }))
      }],
      application_context: {
        return_url: \`\${process.env.BASE_URL}/payment/success\`,
        cancel_url: \`\${process.env.BASE_URL}/payment/cancel\`,
        user_action: 'PAY_NOW'
      }
    });

    res.json({
      id: order.id,
      status: order.status,
      approval_url: order.links?.find(link => link.rel === 'approve')?.href
    });
  } catch (error) {
    console.error('Order creation failed:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Capture order endpoint
app.post('/api/orders/:orderId/capture', async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const capture = await paypal.captureOrder(orderId);
    
    if (capture.status === 'COMPLETED') {
      // Process successful payment
      await processOrderCompletion(capture);
      
      res.json({
        id: capture.id,
        status: capture.status,
        payment_id: capture.purchase_units[0]?.payments?.captures?.[0]?.id
      });
    } else {
      res.status(400).json({ error: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Order capture failed:', error);
    res.status(500).json({ error: 'Failed to capture order' });
  }
});

// Refund endpoint
app.post('/api/payments/:captureId/refund', async (req, res) => {
  try {
    const { captureId } = req.params;
    const { amount, reason } = req.body;
    
    const refund = await paypal.refundPayment(captureId, {
      amount: amount ? {
        currency_code: 'USD',
        value: amount.toString()
      } : undefined,
      note_to_payer: reason || 'Refund processed'
    });
    
    res.json({
      id: refund.id,
      status: refund.status,
      amount: refund.amount
    });
  } catch (error) {
    console.error('Refund failed:', error);
    res.status(500).json({ error: 'Failed to process refund' });
  }
});

async function processOrderCompletion(capture: any) {
  // Update database
  // Send confirmation email
  // Fulfill order
  console.log('Processing completed order:', capture.id);
}

app.listen(3000, () => {
  console.log('PayPal integration server running on port 3000');
});`}
        javascript={`const { PayPalAPI } = require('macro_api');
const express = require('express');

const app = express();
app.use(express.json());

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: process.env.NODE_ENV !== 'production'
});

// Create order endpoint
app.post('/api/orders', async (req, res) => {
  try {
    const { amount, currency = 'USD' } = req.body;
    
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString()
        }
      }],
      application_context: {
        return_url: process.env.BASE_URL + '/payment/success',
        cancel_url: process.env.BASE_URL + '/payment/cancel'
      }
    });

    res.json({
      id: order.id,
      status: order.status
    });
  } catch (error) {
    console.error('Order creation failed:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Capture order endpoint
app.post('/api/orders/:orderId/capture', async (req, res) => {
  try {
    const { orderId } = req.params;
    const capture = await paypal.captureOrder(orderId);
    
    if (capture.status === 'COMPLETED') {
      res.json({ id: capture.id, status: capture.status });
    } else {
      res.status(400).json({ error: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Order capture failed:', error);
    res.status(500).json({ error: 'Failed to capture order' });
  }
});

app.listen(3000, () => {
  console.log('PayPal integration server running on port 3000');
});`}
        title="Complete Express.js integration"
      />

      ## Error Handling

      <InfoBox type="warning" title="PayPal Error Codes">
        PayPal returns specific error codes for different scenarios. Always implement proper error handling to provide meaningful feedback to users.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { PayPalAPI } from 'macro_api';

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID!,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET!,
  sandbox: true
});

async function handlePayPalErrors() {
  try {
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '100.00'
        }
      }]
    });
    
    return order;
  } catch (error: any) {
    // Handle different types of PayPal errors
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('Bad Request:', data.message);
          if (data.details) {
            data.details.forEach((detail: any) => {
              console.error(\`- \${detail.field}: \${detail.issue}\`);
            });
          }
          break;
          
        case 401:
          console.error('Authentication failed - check your credentials');
          break;
          
        case 403:
          console.error('Forbidden - insufficient permissions');
          break;
          
        case 404:
          console.error('Resource not found');
          break;
          
        case 422:
          console.error('Unprocessable Entity:', data.message);
          // Handle validation errors
          break;
          
        case 429:
          console.error('Rate limit exceeded - please retry later');
          break;
          
        case 500:
          console.error('PayPal server error - please retry');
          break;
          
        default:
          console.error(\`PayPal API Error (\${status}):\`, data.message);
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - PayPal is not responding');
    } else if (error.code === 'ENOTFOUND') {
      console.error('Network error - cannot reach PayPal');
    } else {
      console.error('Unexpected error:', error.message);
    }
    
    throw error;
  }
}

// Retry logic for transient errors
async function createOrderWithRetry(orderData: any, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await paypal.createOrder(orderData);
    } catch (error: any) {
      const shouldRetry = error.response?.status >= 500 || 
                         error.code === 'ECONNABORTED' ||
                         error.response?.status === 429;
      
      if (shouldRetry && attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(\`Attempt \${attempt} failed, retrying in \${delay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      throw error;
    }
  }
}`}
        javascript={`const { PayPalAPI } = require('macro_api');

const paypal = new PayPalAPI({
  clientId: process.env.PAYPAL_CLIENT_ID,
  clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  sandbox: true
});

async function handlePayPalErrors() {
  try {
    const order = await paypal.createOrder({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '100.00'
        }
      }]
    });
    
    return order;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('Bad Request:', data.message);
          break;
        case 401:
          console.error('Authentication failed');
          break;
        case 429:
          console.error('Rate limit exceeded');
          break;
        default:
          console.error('PayPal API Error:', data.message);
      }
    } else {
      console.error('Network or unexpected error:', error.message);
    }
    
    throw error;
  }
}`}
        title="Comprehensive error handling"
      />

      ## Best Practices

      <InfoBox type="tip" title="Production Tips">
        - Always validate webhook signatures in production
        - Use HTTPS for all return URLs and webhooks
        - Implement idempotency for critical operations
        - Store order and payment IDs for reconciliation
        - Monitor PayPal's system status page for outages
      </InfoBox>

      ### Security Considerations

      <CodeExampleSwitcher
        typescript={`// Environment-specific configuration
const config = {
  development: {
    clientId: process.env.PAYPAL_SANDBOX_CLIENT_ID!,
    clientSecret: process.env.PAYPAL_SANDBOX_CLIENT_SECRET!,
    sandbox: true
  },
  production: {
    clientId: process.env.PAYPAL_LIVE_CLIENT_ID!,
    clientSecret: process.env.PAYPAL_LIVE_CLIENT_SECRET!,
    sandbox: false
  }
};

const paypalConfig = config[process.env.NODE_ENV as keyof typeof config] || config.development;
const paypal = new PayPalAPI(paypalConfig);

// Webhook signature verification (implement with PayPal SDK)
function verifyWebhookSignature(headers: any, body: string): boolean {
  // Implement webhook signature verification
  // This is crucial for production security
  return true; // Placeholder
}

// Idempotent order creation
const orderCache = new Map<string, string>();

async function createIdempotentOrder(idempotencyKey: string, orderData: any) {
  if (orderCache.has(idempotencyKey)) {
    return { id: orderCache.get(idempotencyKey), cached: true };
  }
  
  const order = await paypal.createOrder(orderData);
  orderCache.set(idempotencyKey, order.id);
  
  return order;
}`}
        javascript={`// Environment-specific configuration
const paypalConfig = process.env.NODE_ENV === 'production' 
  ? {
      clientId: process.env.PAYPAL_LIVE_CLIENT_ID,
      clientSecret: process.env.PAYPAL_LIVE_CLIENT_SECRET,
      sandbox: false
    }
  : {
      clientId: process.env.PAYPAL_SANDBOX_CLIENT_ID,
      clientSecret: process.env.PAYPAL_SANDBOX_CLIENT_SECRET,
      sandbox: true
    };

const paypal = new PayPalAPI(paypalConfig);

// Basic idempotency
const orderCache = new Map();

async function createIdempotentOrder(idempotencyKey, orderData) {
  if (orderCache.has(idempotencyKey)) {
    return { id: orderCache.get(idempotencyKey), cached: true };
  }
  
  const order = await paypal.createOrder(orderData);
  orderCache.set(idempotencyKey, order.id);
  
  return order;
}`}
        title="Security and production considerations"
      />

      ## API Reference

      For complete API documentation and additional endpoints, visit the [PayPal Developer Documentation](https://developer.paypal.com/docs/api/).

      ### Supported Payment Methods

      PayPal supports various payment methods including:
      - PayPal account payments
      - Credit and debit cards
      - PayPal Credit
      - Bank transfers (ACH)
      - Local payment methods (varies by country)

      ### Currency Support

      PayPal supports 100+ currencies including USD, EUR, GBP, JPY, CAD, AUD, and many more. Check the [PayPal currency list](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/) for the complete list.

      ### Rate Limits

      PayPal enforces rate limits to ensure service stability:
      - **Sandbox**: 50 calls per minute
      - **Live**: Varies by account type and history

      ## Support

      - [PayPal Developer Documentation](https://developer.paypal.com/docs/)
      - [PayPal Developer Community](https://www.paypal-community.com/t5/Developer-Portal/ct-p/developer-portal)
      - [PayPal Status Page](https://www.paypal-status.com/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default PaypalDocs;