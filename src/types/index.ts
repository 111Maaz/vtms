export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  dimensions: string;
  materials: string[];
  images: string[];
  featured: boolean;
  createdAt: string;
};
