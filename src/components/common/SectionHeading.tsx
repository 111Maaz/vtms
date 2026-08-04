import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: React.ReactNode; description?: string; light?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="section-heading">
      <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</span>
      <h2 className={light ? 'heading heading--light' : 'heading'}>{title}</h2>
      {description && <p className={light ? 'section-heading__description section-heading__description--light' : 'section-heading__description'}>{description}</p>}
    </motion.div>
  );
}
