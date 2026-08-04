import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export function SiteLayout() {
  const location = useLocation();
  const overlay = location.pathname === '/';
  return <><Header overlay={overlay} /><AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}><Outlet /></motion.main></AnimatePresence><WhatsAppButton /><Footer /></>;
}
