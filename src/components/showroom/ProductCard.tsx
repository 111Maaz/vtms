import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '@/types';
import { whatsappUrl } from '@/components/common/WhatsAppButton';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__image-wrap">
        <img src={product.images[0]} alt={product.name} loading="lazy" className="product-card__image" />
        <span className="product-card__view">View details <ArrowUpRight size={16} /></span>
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta"><span>{product.category}</span><span>{product.dimensions.split(' × ')[0]} cm</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__actions">
          <Link to={`/product/${product.slug}`} className="text-link">Explore piece <ArrowUpRight size={15} /></Link>
          <a href={`${whatsappUrl}&item=${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer" className="product-card__inquire">Inquire</a>
        </div>
      </div>
    </motion.article>
  );
}
