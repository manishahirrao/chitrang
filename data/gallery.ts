import { GalleryImage } from '@/types';

export const galleryImages: GalleryImage[] = [
  // RO Water Purifier Installations
  {
    id: 'img-1',
    src: '/images/gallery/residential-ro-system.jpg',
    alt: 'Residential RO System Setup',
    category: 'installations',
    title: 'Residential RO System Setup',
    description: 'Complete Kent Ace RO water purifier installation for residential client with proper plumbing and electrical connections.',
    location: 'Bhopal, MP',
    date: '2024-01-15',
    client: 'Residential Client'
  },
  {
    id: 'img-2',
    src: '/images/gallery/commercial-system-setup.webp',
    alt: 'Commercial RO Plant Installation',
    category: 'installations',
    title: 'Commercial RO Plant Installation',
    description: '100 LPH commercial RO plant installation for manufacturing unit with complete pipeline and storage tank setup.',
    location: 'Mandideep, MP',
    date: '2024-02-20',
    client: 'Manufacturing Unit'
  },
  
  // Water Softener Installations
  {
    id: 'img-3',
    src: '/images/gallery/Automatic Water Softener Setup.jpg',
    alt: 'Automatic Water Softener Setup',
    category: 'installations',
    title: 'Automatic Water Softener Setup',
    description: 'Kent automatic water softener installation for luxury apartment complex with regeneration system setup.',
    location: 'Bhopal, MP',
    date: '2024-01-25',
    client: 'Apartment Complex'
  },
  
  // Vacuum Cleaner Installations
  {
    id: 'img-4',
    src: '/images/gallery/Commercial Vacuum System.jpg',
    alt: 'Commercial Vacuum System',
    category: 'installations',
    title: 'Commercial Vacuum System',
    description: 'Eureka Forbes commercial vacuum cleaner installation for office complex with training provided.',
    location: 'Bhopal, MP',
    date: '2024-03-05',
    client: 'Office Complex'
  },
  
  // Product Showcases
  {
    id: 'img-5',
    src: '/images/gallery/Premium RO Collection.webp',
    alt: 'Premium RO Collection',
    category: 'products',
    title: 'Premium RO Collection',
    description: 'Complete range of RO water purifiers including Kent, LG, AquaGuard, and other premium brands.',
    location: 'Showroom',
    date: '2024-01-01',
    client: 'Product Showcase'
  },
  {
    id: 'img-6',
    src: '/images/gallery/Water Softener Solutions.jpeg',
    alt: 'Water Softener Solutions',
    category: 'products',
    title: 'Water Softener Solutions',
    description: 'Complete range of water softeners from Kent, Zero B, and other leading brands for hard water treatment.',
    location: 'Showroom',
    date: '2024-01-15',
    client: 'Product Showcase'
  },
  {
    id: 'img-7',
    src: '/images/gallery/Professional Vacuum Cleaners.jpeg',
    alt: 'Professional Vacuum Cleaners',
    category: 'products',
    title: 'Professional Vacuum Cleaners',
    description: 'Complete range of vacuum cleaners including Eureka Forbes, Kent, and Dulevo for home and commercial use.',
    location: 'Showroom',
    date: '2024-02-20',
    client: 'Product Showcase'
  },
  
  // Showroom & Display
  {
    id: 'img-8',
    src: '/images/gallery/Our Bhopal Showroom.jpeg',
    alt: 'Our Bhopal Showroom',
    category: 'showroom',
    title: 'Our Bhopal Showroom',
    description: 'Main showroom displaying complete range of water purifiers, vacuum cleaners, and water treatment solutions.',
    location: 'Bhopal, MP',
    date: '2024-01-01',
    client: 'Showroom'
  },
  
  // Service & Maintenance
  {
    id: 'img-9',
    src: '/images/gallery/Professional Installation Service.webp',
    alt: 'Professional Installation Service',
    category: 'service',
    title: 'Professional Installation Service',
    description: 'Professional installation service for RO systems with proper plumbing and electrical connections.',
    location: 'Bhopal, MP',
    date: '2024-03-05',
    client: 'Service Call'
  },
  
  // Customer Stories
  {
    id: 'img-10',
    src: '/images/gallery/Educational Institute Project.avif',
    alt: 'Educational Institute Project',
    category: 'customers',
    title: 'Educational Institute Project',
    description: 'Complete water purification system installation for leading educational institution in Bhopal.',
    location: 'Bhopal, MP',
    date: '2024-02-15',
    client: 'Educational Institute'
  }
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'installations', label: 'Installations' },
  { value: 'products', label: 'Products' },
  { value: 'showroom', label: 'Showroom' },
  { value: 'service', label: 'Service & Maintenance' },
  { value: 'customers', label: 'Customer Stories' },
];
