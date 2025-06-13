import React from 'react';
import { ExternalLink, Key, Lightbulb, Shield, AlertCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { ApiService } from '@/types/apiService';

interface ApiTokenGuideProps {
  service: ApiService;
}

const ApiTokenGuide: React.FC<ApiTokenGuideProps> = ({ service }) => {
  const { tokenGuide } = service;
  
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="glass-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20">
        <div className="flex items-center mb-6 pb-4 border-b border-white/10">
          <div className="glass rounded-xl p-3 mr-4">
            <Key className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gradient">{tokenGuide.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Follow these steps to get your API credentials
            </p>
          </div>
        </div>
        
        {/* Steps */}
        <div className="space-y-4">
          {tokenGuide.steps.map((step, index) => (
            <div key={index} className="glass-card group hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Security Best Practices */}
      <div className="glass-card bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 dark:border-orange-400/20">
        <div className="flex items-start space-x-4">
          <div className="glass rounded-xl p-3">
            <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
              <Lightbulb className="h-4 w-4 mr-2" />
              Security Best Practices
            </h4>
            <div className="space-y-3 text-sm text-orange-700 dark:text-orange-300">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Always store API keys securely as environment variables</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Never commit API keys to version control systems</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Use different keys for development and production environments</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Regularly rotate your API keys for enhanced security</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Monitor API usage for unusual activity patterns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Setup Example */}
      <div className="glass-card">
        <h4 className="font-semibold mb-4 flex items-center">
          <Key className="h-5 w-5 mr-2 text-primary" />
          Environment Setup Example
        </h4>
        
        <div className="glass rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-white/10">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">.env</span>
          </div>
          <div className="bg-gray-900 p-4 overflow-x-auto">
            <pre className="text-sm text-gray-100 scrollbar-modern">
              <code>
{`# ${service.name} API Configuration
${service.authParams.map(param => 
  `${param.toUpperCase().replace(/([A-Z])/g, '_$1')}=your-${param.toLowerCase()}-here`
).join('\n')}

# Optional: Set environment
NODE_ENV=development`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Actions and Links */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href={tokenGuide.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-card group hover:scale-[1.02] transition-all duration-300 flex-1"
        >
          <div className="flex items-center space-x-4">
            <div className="glass rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
              <ExternalLink className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                Official Documentation
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Visit the official {service.name} documentation for detailed setup instructions
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                <span>Visit Documentation</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </a>

        {tokenGuide.expiryInfo && (
          <div className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 dark:border-blue-400/20 flex-1">
            <div className="flex items-center space-x-4">
              <div className="glass rounded-xl p-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                  Token Expiry
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                  {tokenGuide.expiryInfo}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Tips */}
      <div className="glass-card bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 dark:border-purple-400/20">
        <div className="flex items-start space-x-4">
          <div className="glass rounded-xl p-3">
            <AlertCircle className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">
              Need Help?
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <p>If you're having trouble obtaining your API credentials:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Check the official {service.name} documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ensure you have the necessary permissions in your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Contact {service.name} support if issues persist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Check our <a href="https://github.com/cptcr/macro_api/issues" className="underline">GitHub issues</a> for common problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiTokenGuide;