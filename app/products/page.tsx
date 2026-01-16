import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Browse our range of RO Water Purifiers, Vacuum Cleaners, Water Softeners, and accessories. Quality products for residential and commercial use.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}
