
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Calculator, 
  HeartHandshake 
} from 'lucide-react';
import { Service, Project, ContactInfo } from './types';

export const COMPANY_NAME = "Future Bound Tech";

export const CONTACT: ContactInfo = {
  phone: "99512 99524",
  email: "info@futureboundtech.online",
  address: "Kovur, Andhra Pradesh",
  location: "India"
};

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Application',
    description: 'High-performance, scalable web ecosystems built with modern stacks like React, Node, and Cloud infrastructure.',
    icon: 'globe',
    category: 'tech'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application',
    description: 'Bespoke iOS and Android experiences designed for maximum engagement and seamless performance.',
    icon: 'smartphone',
    category: 'tech'
  },
  {
    id: 'custom-soft',
    title: 'Custom Software',
    description: 'Tailor-made enterprise solutions that solve complex business challenges with precision engineering.',
    icon: 'cpu',
    category: 'tech'
  },
  {
    id: 'it-return',
    title: 'IT Return Filing',
    description: 'Expert income tax return processing ensuring compliance and maximizing your returns with professional oversight.',
    icon: 'file-text',
    category: 'finance'
  },
  {
    id: 'gst-reg',
    title: 'GST Registration',
    description: 'Hassle-free GST enrollment and structural setup for businesses of all sizes across India.',
    icon: 'layers',
    category: 'finance'
  },
  {
    id: 'gst-filing',
    title: 'GST Filing',
    description: 'Accurate and timely GST return submission to keep your business fully compliant and transparent.',
    icon: 'calculator',
    category: 'finance'
  },
  {
    id: 'lic-policy',
    title: 'LIC Policy',
    description: 'Comprehensive life insurance solutions and policy management to secure your family\'s financial future.',
    icon: 'heart-handshake',
    category: 'finance'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'OmniChain ERP',
    description: 'A futuristic supply chain management platform with real-time tracking and automated inventory.',
    image: 'https://picsum.photos/seed/tech1/800/600',
    tags: ['Next.js', 'PostgreSQL', 'Cloud']
  },
  {
    id: 'p2',
    title: 'ZenPay Wallet',
    description: 'A secure, lightning-fast mobile payment solution with advanced biometric encryption.',
    image: 'https://picsum.photos/seed/tech2/800/600',
    tags: ['React Native', 'Firebase', 'FinTech']
  },
  {
    id: 'p3',
    title: 'TaxFlow Pro',
    description: 'A specialized dashboard for finance professionals to track multi-client GST filings and IT returns.',
    image: 'https://picsum.photos/seed/tech3/800/600',
    tags: ['Dashboard', 'React', 'Analytics']
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'globe': return <Globe className="w-6 h-6" />;
    case 'smartphone': return <Smartphone className="w-6 h-6" />;
    case 'cpu': return <Cpu className="w-6 h-6" />;
    case 'file-text': return <FileText className="w-6 h-6" />;
    case 'layers': return <Layers className="w-6 h-6" />;
    case 'calculator': return <Calculator className="w-6 h-6" />;
    case 'heart-handshake': return <HeartHandshake className="w-6 h-6" />;
    default: return <ShieldCheck className="w-6 h-6" />;
  }
};
