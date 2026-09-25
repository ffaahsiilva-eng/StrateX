export interface Plan {
  id: 'simples' | 'mediano' | 'empresarial';
  name: string;
  tagline: string;
  price: string;
  priceValue: number;
  period?: string;
  highlight?: boolean;
  popularBadge?: string;
  idealFor: string;
  deliveryTime: string;
  monthlyNote?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  rating: number;
  comment: string;
  planUsed: string;
  result: string;
  date: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'simples' | 'mediano' | 'empresarial';
  categoryLabel: string;
  client: string;
  description: string;
  metrics: string;
  tags: string[];
  features: string[];
  previewUrl?: string;
  desktopPreview: {
    heroTitle: string;
    heroSubtitle: string;
    accentColor: string;
    mockupType: 'landing' | 'portal' | 'dashboard';
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
