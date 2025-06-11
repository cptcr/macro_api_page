import React from 'react';
import CodeExampleSwitcher from '@/components/common/CodeExampleSwitcher';
import InfoBox from '@/components/common/InfoBox';
import { ExternalLink, Key, Shield, AlertCircle, CheckCircle, Zap, Database, Upload, Download, Copy, Trash2, Eye, Globe, Lock, Settings } from 'lucide-react';

const S3Docs: React.FC = () => {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Header */}
      <div className="not-prose mb-8">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-orange-600 dark:text-orange-400">
            <Database className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">AWS S3 API</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Production-ready object storage with comprehensive file management capabilities
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
            Object Storage
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
            File Upload
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
            Pre-signed URLs
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
            CDN Ready
          </span>
        </div>
      </div>

      ## Overview

      The S3API wrapper provides a comprehensive interface for AWS S3 object storage operations. It includes advanced features like pre-signed URLs, metadata management, and secure access controls, making it perfect for building scalable file storage solutions.

      ### Key Features

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Upload className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Object Upload</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Upload files with custom metadata and storage classes</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Download className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-semibold mb-1">Object Retrieval</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Download and stream objects with conditional requests</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Globe className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Pre-signed URLs</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Generate secure temporary URLs for direct client access</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <Lock className="h-6 w-6 text-red-600 mb-2" />
          <h3 className="font-semibold mb-1">Access Control</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage object permissions and ACLs</p>
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
        typescript={`import { S3API } from 'macro_api';

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
}`}
        javascript={`const { S3API } = require('macro_api');

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
}`}
        title="Basic usage example"
      />

      ## Authentication

      <InfoBox type="security" title="AWS Credentials Required">
        You need valid AWS credentials with S3 permissions to use this API wrapper.
      </InfoBox>

      ### Setting Up AWS Credentials

      1. **Create an AWS Account** at https://aws.amazon.com
      2. **Navigate to IAM** (Identity and Access Management)
      3. **Create a new user** with programmatic access
      4. **Attach the S3 permissions policy** (AmazonS3FullAccess or custom policy)
      5. **Save your Access Key ID and Secret Access Key**
      6. **Create an S3 bucket** in your preferred region

      <CodeExampleSwitcher
        typescript={`// .env file
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
});`}
        javascript={`// .env file
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_REGION=us-east-1
S3_BUCKET_NAME=my-application-bucket

// In your application
const { S3API } = require('macro_api');

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucketName: process.env.S3_BUCKET_NAME
});`}
        title="Environment setup"
      />

      <InfoBox type="warning" title="Security Best Practice">
        Never hardcode AWS credentials in your source code. Always use environment variables, IAM roles, or AWS credential providers.
      </InfoBox>

      ## Configuration Options

      ### Constructor Parameters

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
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">accessKeyId</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">AWS Access Key ID</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">secretAccessKey</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">AWS Secret Access Key</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">region</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">AWS region (e.g., us-east-1)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">bucketName</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">✅ Yes</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">S3 bucket name</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-mono">sessionToken</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">string</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">❌ No</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Temporary session token (for STS)</td>
            </tr>
          </tbody>
        </table>
      </div>

      ## Core Operations

      ### Object Upload

      <CodeExampleSwitcher
        typescript={`// Basic file upload
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
});`}
        javascript={`// Basic file upload
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
      classification: 'confidential'
    }
  }
);

console.log('Upload completed:', uploadResult.location);`}
        title="Upload objects with options"
      />

      ### Object Download

      <CodeExampleSwitcher
        typescript={`// Download complete object
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
});`}
        javascript={`// Download complete object
const object = await s3.getObject('documents/report.pdf');

console.log('Object downloaded:', {
  size: object.contentLength,
  type: object.contentType,
  metadata: object.metadata
});

// Save to file system
const fs = require('fs');
fs.writeFileSync('./downloaded-report.pdf', object.body);

// Download with range (partial content)
const partialObject = await s3.getObject('large-file.zip', {
  range: 'bytes=0-1023' // First 1KB only
});

// Get only metadata without downloading
const metadata = await s3.getObjectMetadata('info.txt');
console.log('File info:', metadata);`}
        title="Download objects and metadata"
      />

      ### Object Listing

      <CodeExampleSwitcher
        typescript={`// List all objects in bucket
const allObjects = await s3.listObjects();
console.log(\`Total objects: \${allObjects.keyCount}\`);

// List objects with prefix (folder-like structure)
const documentsObjects = await s3.listObjects('documents/', {
  maxKeys: 100,
  delimiter: '/'
});

console.log('Documents folder contents:');
documentsObjects.contents.forEach(obj => {
  console.log(\`- \${obj.key} (\${obj.size} bytes, modified: \${obj.lastModified})\`);
});

// Handle pagination for large buckets
async function listAllObjects(prefix?: string) {
  const allObjects: any[] = [];
  let continuationToken: string | undefined;
  
  do {
    const response = await s3.listObjects(prefix, {
      maxKeys: 1000,
      continuationToken
    });
    
    allObjects.push(...response.contents);
    continuationToken = response.nextContinuationToken;
    
    console.log(\`Loaded \${response.contents.length} objects...\`);
  } while (continuationToken);
  
  return allObjects;
}

// List with common prefixes (folder simulation)
const folderStructure = await s3.listObjects('', {
  delimiter: '/',
  maxKeys: 1000
});

console.log('Top-level folders:');
folderStructure.commonPrefixes?.forEach(prefix => {
  console.log(\`📁 \${prefix}\`);
});`}
        javascript={`// List all objects in bucket
const allObjects = await s3.listObjects();
console.log(\`Total objects: \${allObjects.keyCount}\`);

// List objects with prefix
const documents = await s3.listObjects('documents/', {
  maxKeys: 100,
  delimiter: '/'
});

documents.contents.forEach(obj => {
  console.log(\`File: \${obj.key} (Size: \${obj.size} bytes)\`);
});

// Pagination example
async function listAllObjects(prefix) {
  const allObjects = [];
  let continuationToken;
  
  do {
    const response = await s3.listObjects(prefix, {
      maxKeys: 1000,
      continuationToken
    });
    
    allObjects.push(...response.contents);
    continuationToken = response.nextContinuationToken;
  } while (continuationToken);
  
  return allObjects;
}`}
        title="List and browse objects"
      />

      ### Pre-signed URLs

      <CodeExampleSwitcher
        typescript={`// Generate download URL (valid for 1 hour)
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
});`}
        javascript={`// Generate download URL (valid for 1 hour)
const downloadUrl = await s3.generatePresignedUrl(
  'documents/contract.pdf',
  'GET',
  3600 // 1 hour
);

console.log('Download URL:', downloadUrl);

// Generate upload URL for client
const uploadUrl = await s3.generatePresignedUrl(
  'uploads/user-photo.jpg',
  'PUT',
  900, // 15 minutes
  { contentType: 'image/jpeg' }
);

// Express.js endpoint example
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
    
    res.json({ uploadUrl, key });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}
        title="Generate pre-signed URLs for secure access"
      />

      ## Advanced Operations

      ### Object Copy and Move

      <CodeExampleSwitcher
        typescript={`// Copy object within bucket
const copyResult = await s3.copyObject(
  'documents/original.pdf',
  'backups/original-backup.pdf',
  {
    metadataDirective: 'REPLACE',
    metadata: {
      backupDate: new Date().toISOString(),
      originalPath: 'documents/original.pdf'
    },
    storageClass: 'GLACIER'
  }
);

console.log('File copied:', copyResult.etag);

// Move object (copy + delete)
async function moveObject(sourceKey: string, destinationKey: string) {
  try {
    // Copy to new location
    await s3.copyObject(sourceKey, destinationKey);
    
    // Delete original
    await s3.deleteObject(sourceKey);
    
    console.log(\`Moved \${sourceKey} to \${destinationKey}\`);
  } catch (error) {
    console.error('Move failed:', error);
    throw error;
  }
}

await moveObject('temp/upload.jpg', 'processed/final.jpg');`}
        javascript={`// Copy object within bucket
const copyResult = await s3.copyObject(
  'documents/original.pdf',
  'backups/original-backup.pdf',
  {
    metadata: {
      backupDate: new Date().toISOString()
    },
    storageClass: 'GLACIER'
  }
);

// Move object function
async function moveObject(sourceKey, destinationKey) {
  try {
    await s3.copyObject(sourceKey, destinationKey);
    await s3.deleteObject(sourceKey);
    console.log('File moved successfully');
  } catch (error) {
    console.error('Move failed:', error);
  }
}

await moveObject('temp/file.txt', 'permanent/file.txt');`}
        title="Copy and move objects"
      />

      ### Access Control Lists (ACL)

      <CodeExampleSwitcher
        typescript={`// Set object ACL to public read
await s3.setObjectAcl('public/announcement.pdf', 'public-read');

// Set object ACL to private
await s3.setObjectAcl('private/confidential.doc', 'private');

// Upload with specific ACL
const publicUpload = await s3.uploadObject(
  'public/images/logo.png',
  logoBuffer,
  {
    contentType: 'image/png',
    acl: 'public-read',
    cacheControl: 'max-age=86400'
  }
);

// Available ACL options:
// - 'private' (default)
// - 'public-read'
// - 'public-read-write'
// - 'authenticated-read'
// - 'bucket-owner-read'
// - 'bucket-owner-full-control'

console.log('Public file URL:', \`https://\${bucketName}.s3.\${region}.amazonaws.com/public/images/logo.png\`);`}
        javascript={`// Set object permissions
await s3.setObjectAcl('public/announcement.pdf', 'public-read');
await s3.setObjectAcl('private/secret.txt', 'private');

// Upload with public access
const result = await s3.uploadObject(
  'public/logo.png',
  logoBuffer,
  {
    contentType: 'image/png',
    acl: 'public-read'
  }
);

console.log('Public URL:', result.location);`}
        title="Manage object permissions"
      />

      ### Object Existence and Metadata

      <CodeExampleSwitcher
        typescript={`// Check if object exists
const exists = await s3.objectExists('documents/important.pdf');
if (exists) {
  console.log('File exists in S3');
} else {
  console.log('File not found');
}

// Get detailed metadata without downloading
const metadata = await s3.getObjectMetadata('images/photo.jpg');
console.log('File metadata:', {
  contentType: metadata.contentType,
  size: metadata.contentLength,
  lastModified: metadata.lastModified,
  etag: metadata.etag,
  customMetadata: metadata.metadata
});

// Batch existence check
async function checkMultipleFiles(keys: string[]) {
  const results = await Promise.allSettled(
    keys.map(key => s3.objectExists(key))
  );
  
  return keys.map((key, index) => ({
    key,
    exists: results[index].status === 'fulfilled' && 
            (results[index] as PromiseFulfilledResult<boolean>).value
  }));
}

const fileStatuses = await checkMultipleFiles([
  'documents/file1.pdf',
  'documents/file2.pdf',
  'images/photo.jpg'
]);

fileStatuses.forEach(({ key, exists }) => {
  console.log(\`\${key}: \${exists ? 'EXISTS' : 'NOT FOUND'}\`);
});`}
        javascript={`// Check if file exists
const exists = await s3.objectExists('documents/file.pdf');
console.log('File exists:', exists);

// Get file metadata
const metadata = await s3.getObjectMetadata('photo.jpg');
console.log('File info:', {
  size: metadata.contentLength,
  type: metadata.contentType,
  modified: metadata.lastModified
});

// Check multiple files
async function checkFiles(keys) {
  const results = await Promise.allSettled(
    keys.map(key => s3.objectExists(key))
  );
  
  return keys.map((key, index) => ({
    key,
    exists: results[index].status === 'fulfilled' && results[index].value
  }));
}

const statuses = await checkFiles(['file1.txt', 'file2.txt']);
console.log('File statuses:', statuses);`}
        title="Check existence and get metadata"
      />

      ## Storage Classes and Lifecycle

      ### Storage Class Options

      <CodeExampleSwitcher
        typescript={`// Upload with different storage classes
const archiveUpload = await s3.uploadObject(
  'archives/old-data.zip',
  archiveBuffer,
  {
    storageClass: 'GLACIER', // For long-term archival
    metadata: {
      archiveDate: new Date().toISOString(),
      department: 'finance'
    }
  }
);

// Storage class options:
enum StorageClass {
  STANDARD = 'STANDARD',                    // Default, frequently accessed
  REDUCED_REDUNDANCY = 'REDUCED_REDUNDANCY', // Lower cost, less durable
  STANDARD_IA = 'STANDARD_IA',              // Infrequent access
  ONEZONE_IA = 'ONEZONE_IA',                // Single AZ, infrequent access
  INTELLIGENT_TIERING = 'INTELLIGENT_TIERING', // Automatic cost optimization
  GLACIER = 'GLACIER',                      // Long-term archive (3-5 hours retrieval)
  DEEP_ARCHIVE = 'DEEP_ARCHIVE'            // Lowest cost (12+ hours retrieval)
}

// Upload frequently accessed files
const standardUpload = await s3.uploadObject(
  'active/current-data.json',
  dataBuffer,
  { storageClass: 'STANDARD' }
);

// Upload backup files
const backupUpload = await s3.uploadObject(
  'backups/weekly-backup.tar.gz',
  backupBuffer,
  { storageClass: 'STANDARD_IA' }
);

// Upload archived logs
const logArchive = await s3.uploadObject(
  'logs/2023/application.log',
  logBuffer,
  { storageClass: 'DEEP_ARCHIVE' }
);`}
        javascript={`// Upload with storage classes
const archiveUpload = await s3.uploadObject(
  'archives/old-data.zip',
  archiveBuffer,
  { storageClass: 'GLACIER' }
);

const backupUpload = await s3.uploadObject(
  'backups/data.tar.gz',
  backupBuffer,
  { storageClass: 'STANDARD_IA' }
);

// Available storage classes:
// - STANDARD (default)
// - STANDARD_IA (infrequent access)
// - ONEZONE_IA (single zone)
// - INTELLIGENT_TIERING (automatic)
// - GLACIER (archive)
// - DEEP_ARCHIVE (long-term archive)`}
        title="Choose appropriate storage classes"
      />

      ## Error Handling and Best Practices

      <InfoBox type="warning" title="Production Considerations">
        Implement proper error handling, retry logic, and monitoring for production S3 operations.
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`import { S3API } from 'macro_api';

class RobustS3Service {
  private s3: S3API;
  
  constructor() {
    this.s3 = new S3API({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      region: process.env.AWS_REGION!,
      bucketName: process.env.S3_BUCKET_NAME!
    });
  }

  async uploadWithRetry(
    key: string, 
    data: Buffer, 
    options?: any,
    maxRetries: number = 3
  ) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const result = await this.s3.uploadObject(key, data, options);
        console.log(\`Upload successful on attempt \${attempt}\`);
        return result;
      } catch (error: any) {
        console.error(\`Upload attempt \${attempt} failed:\`, error.message);
        
        if (attempt === maxRetries) {
          throw new Error(\`Upload failed after \${maxRetries} attempts: \${error.message}\`);
        }
        
        // Exponential backoff
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  async safeDownload(key: string) {
    try {
      // Check if object exists first
      const exists = await this.s3.objectExists(key);
      if (!exists) {
        throw new Error(\`Object not found: \${key}\`);
      }

      // Get metadata to check size
      const metadata = await this.s3.getObjectMetadata(key);
      if (metadata.contentLength && metadata.contentLength > 100 * 1024 * 1024) {
        console.warn(\`Large file detected: \${metadata.contentLength} bytes\`);
      }

      // Download the object
      const object = await this.s3.getObject(key);
      return object;
    } catch (error: any) {
      if (error.message.includes('NoSuchKey')) {
        throw new Error(\`File not found: \${key}\`);
      } else if (error.message.includes('AccessDenied')) {
        throw new Error(\`Access denied for: \${key}\`);
      } else {
        throw new Error(\`Download failed: \${error.message}\`);
      }
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.s3.listObjects('', { maxKeys: 1 });
      return true;
    } catch (error) {
      console.error('S3 connection test failed:', error);
      return false;
    }
  }

  // Cleanup method for batch deletion
  async cleanupOldFiles(prefix: string, daysOld: number) {
    try {
      const objects = await this.s3.listObjects(prefix);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);

      const oldObjects = objects.contents.filter(obj => 
        obj.lastModified < cutoffDate
      );

      console.log(\`Found \${oldObjects.length} old objects to delete\`);

      // Delete in batches to avoid overwhelming the API
      const batchSize = 10;
      for (let i = 0; i < oldObjects.length; i += batchSize) {
        const batch = oldObjects.slice(i, i + batchSize);
        
        await Promise.all(
          batch.map(obj => this.s3.deleteObject(obj.key))
        );
        
        console.log(\`Deleted batch \${Math.floor(i / batchSize) + 1}\`);
        
        // Small delay between batches
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      return oldObjects.length;
    } catch (error: any) {
      throw new Error(\`Cleanup failed: \${error.message}\`);
    }
  }
}

// Usage
const s3Service = new RobustS3Service();

// Test connection before operations
if (await s3Service.testConnection()) {
  console.log('S3 connection successful');
} else {
  console.error('S3 connection failed');
}`}
        javascript={`const { S3API } = require('macro_api');

class RobustS3Service {
  constructor() {
    this.s3 = new S3API({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      bucketName: process.env.S3_BUCKET_NAME
    });
  }

  async uploadWithRetry(key, data, options, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const result = await this.s3.uploadObject(key, data, options);
        console.log(\`Upload successful on attempt \${attempt}\`);
        return result;
      } catch (error) {
        console.error(\`Attempt \${attempt} failed:\`, error.message);
        
        if (attempt === maxRetries) {
          throw new Error(\`Upload failed after \${maxRetries} attempts\`);
        }
        
        // Wait before retry
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, attempt) * 1000)
        );
      }
    }
  }

  async safeDownload(key) {
    try {
      const exists = await this.s3.objectExists(key);
      if (!exists) {
        throw new Error(\`File not found: \${key}\`);
      }

      return await this.s3.getObject(key);
    } catch (error) {
      if (error.message.includes('NoSuchKey')) {
        throw new Error(\`File not found: \${key}\`);
      }
      throw error;
    }
  }

  async testConnection() {
    try {
      await this.s3.listObjects('', { maxKeys: 1 });
      return true;
    } catch (error) {
      return false;
    }
  }
}

const s3Service = new RobustS3Service();`}
        title="Production-ready error handling"
      />

      ## Integration Examples

      ### Express.js File Upload API

      <CodeExampleSwitcher
        typescript={`import express from 'express';
import multer from 'multer';
import { S3API } from 'macro_api';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
  bucketName: process.env.S3_BUCKET_NAME!
});

// Upload endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const key = \`uploads/\${Date.now()}-\${req.file.originalname}\`;
    
    const uploadResult = await s3.uploadObject(
      key,
      req.file.buffer,
      {
        contentType: req.file.mimetype,
        metadata: {
          originalName: req.file.originalname,
          uploadedBy: req.user?.id || 'anonymous',
          uploadedAt: new Date().toISOString()
        }
      }
    );

    res.json({
      success: true,
      key: uploadResult.key,
      location: uploadResult.location,
      etag: uploadResult.etag
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    res.status(500).json({
      error: 'Upload failed',
      message: error.message
    });
  }
});

// Download endpoint
app.get('/api/download/:key(*)', async (req, res) => {
  try {
    const key = req.params.key;
    
    const object = await s3.getObject(key);
    
    res.setHeader('Content-Type', object.contentType || 'application/octet-stream');
    res.setHeader('Content-Length', object.contentLength || 0);
    res.setHeader('ETag', object.etag || '');
    
    if (object.metadata?.originalName) {
      res.setHeader(
        'Content-Disposition', 
        \`attachment; filename="\${object.metadata.originalName}"\`
      );
    }
    
    res.send(object.body);
  } catch (error: any) {
    console.error('Download error:', error);
    res.status(404).json({
      error: 'File not found',
      message: error.message
    });
  }
});

// Generate upload URL endpoint
app.post('/api/upload-url', async (req, res) => {
  try {
    const { filename, contentType } = req.body;
    
    if (!filename || !contentType) {
      return res.status(400).json({
        error: 'Filename and content type required'
      });
    }

    const key = \`uploads/\${Date.now()}-\${filename}\`;
    const uploadUrl = await s3.generatePresignedUrl(
      key,
      'PUT',
      900, // 15 minutes
      { contentType }
    );

    res.json({
      uploadUrl,
      key,
      expiresIn: 900
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Failed to generate upload URL',
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
        javascript={`const express = require('express');
const multer = require('multer');
const { S3API } = require('macro_api');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucketName: process.env.S3_BUCKET_NAME
});

// File upload endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const key = \`uploads/\${Date.now()}-\${req.file.originalname}\`;
    
    const result = await s3.uploadObject(
      key,
      req.file.buffer,
      {
        contentType: req.file.mimetype,
        metadata: {
          originalName: req.file.originalname,
          uploadedAt: new Date().toISOString()
        }
      }
    );

    res.json({
      success: true,
      location: result.location,
      key: result.key
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

// File download endpoint
app.get('/api/download/:key(*)', async (req, res) => {
  try {
    const object = await s3.getObject(req.params.key);
    
    res.setHeader('Content-Type', object.contentType);
    res.send(object.body);
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

app.listen(3000);`}
        title="Complete Express.js file upload/download API"
      />

      ### Next.js Integration

      <CodeExampleSwitcher
        typescript={`// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { S3API } from 'macro_api';
import formidable from 'formidable';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
  bucketName: process.env.S3_BUCKET_NAME!
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);
    
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileBuffer = await fs.readFile(file.filepath);
    const key = \`uploads/\${Date.now()}-\${file.originalFilename}\`;

    const uploadResult = await s3.uploadObject(
      key,
      fileBuffer,
      {
        contentType: file.mimetype || 'application/octet-stream',
        metadata: {
          originalName: file.originalFilename || 'unknown',
          size: file.size.toString(),
          uploadedAt: new Date().toISOString()
        }
      }
    );

    res.status(200).json({
      success: true,
      file: {
        key: uploadResult.key,
        location: uploadResult.location,
        size: file.size,
        type: file.mimetype
      }
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    res.status(500).json({
      error: 'Upload failed',
      message: error.message
    });
  }
}

// pages/api/files.ts - List user files
export async function listUserFiles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userId } = req.query;
    
    const objects = await s3.listObjects(\`users/\${userId}/\`);
    
    const files = objects.contents.map(obj => ({
      key: obj.key,
      name: obj.key.split('/').pop(),
      size: obj.size,
      lastModified: obj.lastModified,
      downloadUrl: \`/api/download/\${encodeURIComponent(obj.key)}\`
    }));

    res.status(200).json({ files });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}`}
        javascript={`// pages/api/upload.js
import { S3API } from 'macro_api';
import formidable from 'formidable';
import { promises as fs } from 'fs';

export const config = {
  api: { bodyParser: false }
};

const s3 = new S3API({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucketName: process.env.S3_BUCKET_NAME
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);
    
    const file = files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileBuffer = await fs.readFile(file.filepath);
    const key = \`uploads/\${Date.now()}-\${file.originalFilename}\`;

    const result = await s3.uploadObject(key, fileBuffer, {
      contentType: file.mimetype,
      metadata: { originalName: file.originalFilename }
    });

    res.json({ success: true, location: result.location });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}`}
        title="Next.js API routes with S3"
      />

      ## Performance Optimization

      <InfoBox type="tip" title="Performance Tips">
        - Use multipart uploads for large files ({'>'}100MB)
        - Implement intelligent tiering for cost optimization
        - Use CloudFront CDN for frequently accessed content
        - Consider S3 Transfer Acceleration for global uploads
      </InfoBox>

      <CodeExampleSwitcher
        typescript={`// Performance optimization strategies
class OptimizedS3Service {
  private s3: S3API;
  private uploadCache = new Map<string, Promise<any>>();

  constructor() {
    this.s3 = new S3API({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      region: process.env.AWS_REGION!,
      bucketName: process.env.S3_BUCKET_NAME!
    });
  }

  // Deduplicate simultaneous uploads
  async deduplicatedUpload(key: string, data: Buffer, options?: any) {
    if (this.uploadCache.has(key)) {
      console.log(\`Reusing existing upload for: \${key}\`);
      return this.uploadCache.get(key);
    }

    const uploadPromise = this.s3.uploadObject(key, data, options)
      .finally(() => {
        // Clean up cache after upload completes
        this.uploadCache.delete(key);
      });

    this.uploadCache.set(key, uploadPromise);
    return uploadPromise;
  }

  // Parallel uploads for multiple files
  async batchUpload(files: Array<{key: string, data: Buffer, options?: any}>) {
    const batchSize = 5; // Process 5 files at a time
    const results = [];

    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize);
      
      const batchResults = await Promise.allSettled(
        batch.map(file => 
          this.s3.uploadObject(file.key, file.data, file.options)
        )
      );

      results.push(...batchResults);
      
      // Small delay between batches to avoid overwhelming S3
      if (i + batchSize < files.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return results;
  }

  // Optimized listing with caching
  private listCache = new Map<string, {data: any, timestamp: number}>();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  async cachedListObjects(prefix: string) {
    const cacheKey = \`list:\${prefix}\`;
    const cached = this.listCache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }

    const result = await this.s3.listObjects(prefix);
    this.listCache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });

    return result;
  }

  // Stream large file download
  async streamDownload(key: string, writeStream: NodeJS.WritableStream) {
    const object = await this.s3.getObject(key);
    
    return new Promise((resolve, reject) => {
      const readableStream = new ReadableStream({
        start(controller) {
          controller.enqueue(object.body);
          controller.close();
        }
      });

      readableStream
        .pipeTo(new WritableStream({
          write(chunk) {
            writeStream.write(chunk);
          },
          close() {
            writeStream.end();
            resolve(void 0);
          },
          abort(error) {
            reject(error);
          }
        }))
        .catch(reject);
    });
  }

  // Intelligent storage class selection
  determineStorageClass(fileSize: number, accessPattern: 'frequent' | 'infrequent' | 'archive') {
    if (accessPattern === 'archive') {
      return 'GLACIER';
    } else if (accessPattern === 'infrequent') {
      return fileSize > 128 * 1024 ? 'STANDARD_IA' : 'STANDARD';
    } else {
      return 'STANDARD';
    }
  }

  async smartUpload(key: string, data: Buffer, accessPattern: 'frequent' | 'infrequent' | 'archive' = 'frequent') {
    const storageClass = this.determineStorageClass(data.length, accessPattern);
    
    return this.s3.uploadObject(key, data, {
      storageClass,
      metadata: {
        accessPattern,
        uploadedAt: new Date().toISOString(),
        size: data.length.toString()
      }
    });
  }
}`}
        javascript={`// Performance optimization for JavaScript
class OptimizedS3Service {
  constructor() {
    this.s3 = new S3API({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      bucketName: process.env.S3_BUCKET_NAME
    });
    this.uploadCache = new Map();
    this.listCache = new Map();
  }

  // Batch upload multiple files
  async batchUpload(files) {
    const batchSize = 5;
    const results = [];

    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize);
      
      const batchResults = await Promise.allSettled(
        batch.map(file => 
          this.s3.uploadObject(file.key, file.data, file.options)
        )
      );

      results.push(...batchResults);
      
      // Small delay between batches
      if (i + batchSize < files.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return results;
  }

  // Smart storage class selection
  determineStorageClass(fileSize, accessPattern) {
    if (accessPattern === 'archive') return 'GLACIER';
    if (accessPattern === 'infrequent') return 'STANDARD_IA';
    return 'STANDARD';
  }

  async smartUpload(key, data, accessPattern = 'frequent') {
    const storageClass = this.determineStorageClass(data.length, accessPattern);
    
    return this.s3.uploadObject(key, data, {
      storageClass,
      metadata: {
        accessPattern,
        uploadedAt: new Date().toISOString()
      }
    });
  }
}`}
        title="Performance optimization strategies"
      />

      ## Best Practices Summary

      <div className="not-prose my-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Production Best Practices</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Security</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Use IAM roles instead of access keys when possible, implement least privilege access, enable bucket versioning</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Cost Optimization</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Use appropriate storage classes, implement lifecycle policies, monitor and analyze access patterns</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Use CloudFront for caching, implement multipart uploads for large files, optimize request patterns</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Reliability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Implement retry logic, handle errors gracefully, use cross-region replication for critical data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      ## API Reference

      For complete AWS S3 documentation and advanced features, visit the [official AWS S3 documentation](https://docs.aws.amazon.com/s3/).

      ### Rate Limits and Quotas

      - **Request Rate**: 3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD requests per second per prefix
      - **Object Size**: Maximum 5TB per object
      - **Bucket Limit**: 100 buckets per account (soft limit, can be increased)
      - **Multipart Upload**: Recommended for objects larger than 100MB

      ### Support

      - [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
      - [AWS Support Center](https://console.aws.amazon.com/support/)
      - [GitHub Issues](https://github.com/cptcr/macro_api/issues)
    </div>
  );
};

export default S3Docs;