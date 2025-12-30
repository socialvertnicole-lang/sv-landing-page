
export interface Step {
  number: number;
  title: string;
  description: string;
  details?: string;
}

export interface Testimonial {
  name: string;
  headline: string;
  stats: string;
  image: string;
  platform?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
