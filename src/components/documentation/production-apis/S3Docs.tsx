import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Database, Key, Shield, AlertCircle, CheckCircle, Zap, Upload, Download, Globe, Lock, Settings, Sparkles, ArrowRight, Code } from 'lucide-react';

const S3Docs: React.FC = () => {
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

  const basicSetupCode = `import { S3API } from 'macro_api';

// Initialize the S3 client
const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  bucketName: 'my-app-bucket'
});

// Upload a file
async function uploadFile() {
  try {
    const fileBuffer = Buffer.from('Hello, S3!');
    
    const result = await s3.uploadObject('documents/hello.txt', fileBuffer, {
      contentType: 'text/plain',
      metadata: {
        uploadedBy: 'user123',
        category: 'documents'
      }
    });
    
    console.log('File uploaded:', result.location);
  } catch (error) {
    console.error('Upload failed:', error);
  }
}`;

  const authenticationCode = `// .env file
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_REGION=us-east-1
S3_BUCKET_NAME=my-application-bucket

// In your application
import { S3API } from 'macro_api';

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
  bucketName: process.env.S3_BUCKET_NAME!,
  // Optional: for temporary credentials
  sessionToken: process.env.AWS_SESSION_TOKEN
});`;

  const uploadCode = `// Basic file upload
const uploadResult = await s3.uploadObject(
  'images/profile.jpg',
  imageBuffer,
  {
    contentType: 'image/jpeg',
    cacheControl: 'max-age=31536000',
    metadata: {
      userId: '12345',
      originalName: 'profile-picture.jpg'
    }
  }
);

// Upload with advanced options
const advancedUpload = await s3.uploadObject(
  'documents/sensitive.pdf',
  documentBuffer,
  {
    contentType: 'application/pdf',
    serverSideEncryption: 'AES256',
    storageClass: 'STANDARD_IA',
    acl: 'private',
    metadata: {
      department: 'legal',
      classification: 'confidential',
      uploadedAt: new Date().toISOString()
    },
    contentDisposition: 'attachment; filename="document.pdf"'
  }
);

console.log('Upload completed:', {
  location: uploadResult.location,
  etag: uploadResult.etag,
  bucket: uploadResult.bucket,
  key: uploadResult.key
});`;

  const downloadCode = `// Download complete object
const object = await s3.getObject('documents/report.pdf');

console.log('Object info:', {
  size: object.contentLength,
  type: object.contentType,
  lastModified: object.lastModified,
  etag: object.etag,
  metadata: object.metadata
});

// Save to file system
const fs = require('fs');
fs.writeFileSync('./downloaded-report.pdf', object.body);

// Download with conditional requests
const conditionalObject = await s3.getObject('images/large-image.jpg', {
  range: 'bytes=0-1023', // Download first 1KB
  ifModifiedSince: new Date('2024-01-01'),
  responseContentType: 'image/jpeg',
  responseContentDisposition: 'attachment; filename="image.jpg"'
});

// Download only metadata (HEAD request)
const metadata = await s3.getObjectMetadata('documents/info.txt');
console.log('File metadata:', {
  size: metadata.contentLength,
  lastModified: metadata.lastModified,
  customMetadata: metadata.metadata
});`;

  const presignedUrlsCode = `// Generate download URL (valid for 1 hour)
const downloadUrl = await s3.generatePresignedUrl(
  'documents/contract.pdf',
  'GET',
  3600, // 1 hour in seconds
  {
    responseContentDisposition: 'attachment; filename="contract.pdf"',
    responseContentType: 'application/pdf'
  }
);

console.log('Download URL:', downloadUrl);
// Users can now download directly: https://bucket.s3.region.amazonaws.com/...

// Generate upload URL for direct client uploads
const uploadUrl = await s3.generatePresignedUrl(
  'uploads/user-photo.jpg',
  'PUT',
  900, // 15 minutes
  {
    contentType: 'image/jpeg'
  }
);

// Client can now upload directly to S3
console.log('Upload URL for client:', uploadUrl);

// Example: Express.js endpoint for generating upload URLs
app.post('/api/upload-url', async (req, res) => {
  try {
    const { filename, contentType } = req.body;
    const key = \`uploads/\${Date.now()}-\${filename}\`;
    
    const uploadUrl = await s3.generatePresignedUrl(
      key,
      'PUT',
      900,
      { contentType }
    );
    
    res.json({
      uploadUrl,
      key,
      publicUrl: \`https://\${bucketName}.s3.\${region}.amazonaws.com/\${key}\`
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate upload URL' });
  }
});`;

  const features = [
    {
      name: 'Object Upload',
      description: 'Upload files with custom metadata and storage classes',
      icon: <Upload className="h-4 w-4" />
    },
    {
      name: 'Object Retrieval',
      description: 'Download and stream objects with conditional requests',
      icon: <Download className="h-4 w-4" />
    },
    {
      name: 'Pre-signed URLs',
      description: 'Generate secure temporary URLs for direct client access',
      icon: <Globe className="h-4 w-4" />
    },
    {
      name: 'Access Control',
      description: 'Manage object permissions and ACLs',
      icon: <Lock className="h-4 w-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Background effects matching main page */}
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
            <Database className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Production APIs
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-orange-500 p-3 rounded-full">
              <Database className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-responsive-lg font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                AWS S3 API
              </h1>
              <p className="text-responsive-xs text-muted-foreground">
                Production-ready object storage with comprehensive file management capabilities
              </p>
            </div>
          </div>

          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto mb-6">
            The S3API wrapper provides a comprehensive interface for AWS S3 object storage operations. It includes advanced features like pre-signed URLs, metadata management, and secure access controls, making it perfect for building scalable file storage solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/20">Object Storage</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500/20">File Upload</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20">Pre-signed URLs</span>
            <span className="glass px-3 py-1.5 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20">CDN Ready</span>
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
                onClick={() => setActiveTab('upload')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'upload' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Upload Operations
              </button>
              <button
                onClick={() => setActiveTab('download')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'download' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Download Operations
              </button>
              <button
                onClick={() => setActiveTab('presigned')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glass-button ${activeTab === 'presigned' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}
              >
                Pre-signed URLs
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
                  AWS Credentials Setup
                </h3>
                <p className="text-muted-foreground mb-4">You need valid AWS credentials with S3 permissions to use this API wrapper.</p>
                <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 mb-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Create an AWS Account at https://aws.amazon.com</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Navigate to IAM (Identity and Access Management)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Create a new user with programmatic access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Attach the S3 permissions policy (AmazonS3FullAccess or custom policy)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Save your Access Key ID and Secret Access Key</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span>Create an S3 bucket in your preferred region</span>
                    </div>
                  </div>
                </div>
                <CodeBlock code={authenticationCode} id="authentication" />
                <div className="glass-card bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20 mt-6">
                  <p className="text-sm">
                    <Shield className="h-4 w-4 inline mr-2 text-red-500" />
                    <strong>Security Best Practice:</strong> Never hardcode AWS credentials in your source code. Always use environment variables, IAM roles, or AWS credential providers.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'upload' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  Object Upload Operations
                </h3>
                <p className="text-muted-foreground mb-4">Upload files with custom metadata and advanced options</p>
                <CodeBlock code={uploadCode} id="upload" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'download' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-primary" />
                  Object Download Operations
                </h3>
                <p className="text-muted-foreground mb-4">Download and stream objects with conditional requests</p>
                <CodeBlock code={downloadCode} id="download" />
              </div>
            </div>

            <div className={`space-y-6 ${activeTab === 'presigned' ? 'block' : 'hidden'}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Pre-signed URLs
                </h3>
                <p className="text-muted-foreground mb-4">Generate secure temporary URLs for direct client access</p>
                <CodeBlock code={presignedUrlsCode} id="presigned" />
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Best Practices Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Security
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use IAM roles instead of access keys when possible, implement least privilege access, enable bucket versioning</span>
                </li>
              </ul>
            </div>

            <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <h4 className="font-semibold text-blue-600 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Performance
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use CloudFront for caching, implement multipart uploads for large files, optimize request patterns</span>
                </li>
              </ul>
            </div>

            <div className="glass-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <h4 className="font-semibold text-purple-600 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Cost Optimization
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use appropriate storage classes, implement lifecycle policies, monitor and analyze access patterns</span>
                </li>
              </ul>
            </div>

            <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
              <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Reliability
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement retry logic, handle errors gracefully, use cross-region replication for critical data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="glass-card mb-8 sm:mb-12">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">API Reference</h2>
          <p className="text-responsive-sm text-muted-foreground leading-relaxed mb-8">
            For complete AWS S3 documentation and advanced features, visit the <a href="https://docs.aws.amazon.com/s3/" className="text-primary underline">official AWS S3 documentation</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary" />
                Rate Limits and Quotas
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Request Rate:</strong> 3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD requests per second per prefix</li>
                <li><strong>Object Size:</strong> Maximum 5TB per object</li>
                <li><strong>Bucket Limit:</strong> 100 buckets per account (soft limit, can be increased)</li>
                <li><strong>Multipart Upload:</strong> Recommended for objects larger than 100MB</li>
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                Support Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://docs.aws.amazon.com/s3/" className="text-primary hover:underline flex items-center">
                    AWS S3 Documentation
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://console.aws.amazon.com/support/" className="text-primary hover:underline flex items-center">
                    AWS Support Center
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cptcr/macro_api/issues" className="text-primary hover:underline flex items-center">
                    GitHub Issues
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card">
          <h2 className="text-responsive-md font-bold mb-6 text-gradient">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/documentation?section=basic-usage" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Explore More APIs</h3>
                  <p className="text-muted-foreground text-sm mb-3">Discover other API integrations available in macro_api</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View All APIs</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/documentation?section=core-cache" className="glass-card group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-green-600" />
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

export default S3Docs;