import type { Category, Product } from '@/types';

export const heroImages = ['/images/hero/Showroom1.png', '/images/hero/Showroom2.png'];

export const categories: Category[] = [
  { slug: 'sofas', name: 'Sofas', description: 'Deep comfort, considered silhouettes.', image: '/images/products/L_shape_corner_sofa_4.png' },
  { slug: 'beds', name: 'Beds', description: 'Restful forms for quieter rooms.', image: '/images/products/Designer_Bed.png' },
  { slug: 'dining', name: 'Dining Sets', description: 'Gather around something beautiful.', image: '/images/products/Dining_Table.png' },
  { slug: 'wardrobes', name: 'Wardrobes', description: 'Storage with a sense of permanence.', image: '/images/products/Designer_Bed.png' },
  { slug: 'dressing', name: 'Dressing Tables', description: 'Small rituals, beautifully framed.', image: '/images/products/Designer_Bed.png' },
  { slug: 'tv-units', name: 'TV Units', description: 'A composed centre for the living room.', image: '/images/products/L_shape_corner_sofa_4.png' },
  { slug: 'coffee-tables', name: 'Coffee Tables', description: 'The finishing note to a room.', image: '/images/products/L_shape_corner_sofa_4.png' },
  { slug: 'office', name: 'Office Furniture', description: 'Workspaces with intention.', image: '/images/products/Dining_Table.png' },
  { slug: 'swing', name: 'Swing Sofas', description: 'A gentler way to unwind.', image: '/images/products/L_shape_corner_sofa_4.png' },
  { slug: 'wooden', name: 'Wooden Furniture', description: 'Warm grain, crafted to last.', image: '/images/products/Dining_Table.png' },
  { slug: 'display', name: 'Display Units', description: 'Make space for what matters.', image: '/images/products/Designer_Bed.png' },
  { slug: 'drawers', name: 'Drawers', description: 'Everyday order, elevated.', image: '/images/products/Designer_Bed.png' },
  { slug: 'chairs', name: 'Chairs', description: 'A beautiful place to pause.', image: '/images/products/Dining_Table.png' },
  { slug: 'decor', name: 'Home Decor', description: 'Details that make a house yours.', image: '/images/products/L_shape_corner_sofa_4.png' },
];

export const products: Product[] = [
  {
    id: 'videm-sofa-01', slug: 'the-haven-sectional', name: 'The Haven Sectional', category: 'Sofas',
    description: 'A generous L-shaped silhouette designed for slow Sunday afternoons and long conversations.', dimensions: '310 × 210 × 88 cm', materials: ['Performance fabric', 'Seasoned hardwood frame', 'High-resilience foam'], images: ['/images/products/L_shape_corner_sofa_4.png'], featured: true, createdAt: '2024-04-01',
  },
  {
    id: 'videm-dining-01', slug: 'the-heritage-dining-set', name: 'The Heritage Dining Set', category: 'Dining Sets',
    description: 'A statement dining table with sculpted legs and upholstered dining chairs for memorable gatherings.', dimensions: '240 × 110 × 78 cm', materials: ['Italian marble finish', 'Solid wood', 'Textured upholstery'], images: ['/images/products/Dining_Table.png'], featured: true, createdAt: '2024-04-02',
  },
  {
    id: 'videm-bed-01', slug: 'the-atelier-bed', name: 'The Atelier Bed', category: 'Beds',
    description: 'A softly architectural bed with deep teal detailing and generous integrated storage.', dimensions: 'King: 210 × 195 × 125 cm', materials: ['Teak veneer', 'Velvet upholstery', 'Brass inlay'], images: ['/images/products/Designer_Bed.png'], featured: true, createdAt: '2024-04-03',
  },
  {
    id: 'videm-sofa-02', slug: 'the-conversation-sofa', name: 'The Conversation Sofa', category: 'Sofas',
    description: 'Low, relaxed and beautifully balanced, made for rooms that invite people to stay.', dimensions: '245 × 105 × 82 cm', materials: ['Bouclé fabric', 'Solid wood frame', 'Feather blend cushions'], images: ['/images/products/L_shape_corner_sofa_4.png'], featured: false, createdAt: '2024-04-04',
  },
  {
    id: 'videm-office-01', slug: 'the-studio-writing-desk', name: 'The Studio Writing Desk', category: 'Office Furniture',
    description: 'A calm, considered desk that brings the warmth of the home into a productive space.', dimensions: '160 × 75 × 76 cm', materials: ['Natural wood veneer', 'Powder-coated steel', 'Leather inlay'], images: ['/images/products/Dining_Table.png'], featured: false, createdAt: '2024-04-05',
  },
  {
    id: 'videm-bed-02', slug: 'the-courtyard-bed', name: 'The Courtyard Bed', category: 'Beds',
    description: 'Contemporary timber lines softened by tactile upholstery and a restful, grounded presence.', dimensions: 'Queen: 195 × 160 × 118 cm', materials: ['Oak veneer', 'Linen blend', 'Brushed brass'], images: ['/images/products/Designer_Bed.png'], featured: false, createdAt: '2024-04-06',
  },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
