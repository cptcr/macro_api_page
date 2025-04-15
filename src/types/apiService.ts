export interface ApiService {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    docsLink: string;
    tokenGuide: {
      title: string;
      steps: string[];
      url: string;
    };
    examples: {
      typescript: string;
      javascript: string;
    };
  }