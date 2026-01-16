export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: 'ro-purifier' | 'vacuum-cleaner' | 'water-softener' | 'commercial-purifier' | 'accessories' | 'installation-service';
  brand?: string;
  price?: string;
  features?: string[];
  featured?: boolean;
  order?: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  width?: number;
  height?: number;
  thumbnail?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: FormValidationError[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
