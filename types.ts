
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'tech' | 'finance';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  location: string;
}
