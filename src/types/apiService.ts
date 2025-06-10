export interface ApiMethod {
  name: string;
  description?: string;
  parameters?: string[];
  returnType?: string;
}

export interface ApiFeature {
  name: string;
  description: string;
}

export interface ApiService {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  docsLink: string;
  className?: string;
  variableName?: string;
  authParams: string[];
  docsUrl?: string;
  methods?: ApiMethod[];
  features?: ApiFeature[];
  tokenGuide: {
    title: string;
    steps: string[];
    url: string;
  };
  examples: {
    typescript: string;
    javascript: string;
    esm?: string;
  };
}