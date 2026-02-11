export interface CalculatorInput {
  label: string;
  name: string;
  type: 'number' | 'select' | 'currency' | 'percent' | 'years' | 'months';
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  required?: boolean;
  hint?: string;
}

export interface CalculatorResult {
  label: string;
  value: number;
  formatted: string;
  isPrimary?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedCalculator {
  title: string;
  description: string;
  href: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export interface CalculatorPageData {
  title: string;
  description: string;
  intro: string;
  inputs: CalculatorInput[];
  calculate: (values: Record<string, number>) => CalculatorResult[];
  howItWorks: string[];
  example: {
    title: string;
    description: string;
    inputs: Record<string, number>;
    results: CalculatorResult[];
  };
  faqs: FAQItem[];
  relatedCalculators: RelatedCalculator[];
  seo: SEOMetadata;
}

export interface StateMortgageData {
  state: string;
  stateCode: string;
  propertyTaxRate: number;
  avgHomePrice: number;
  intro: string;
  propertyTaxDescription: string;
  localExample: string;
  stateSpecificFAQs: FAQItem[];
}
