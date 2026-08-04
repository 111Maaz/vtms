import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

const links = [{ to: '/collections', label: 'Collections' }, { to: '/about', label: 'Our story' }, { to: '/contact', label: 'Visit us' }];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className={`site-header ${overlay ? 'site-header--overlay' : ''}`}>
    <Link to="/" className="brand" aria-label="Sri Videm's Furniture home"><span className="brand-mark">V</span><span>Sri Videm's <small>Furniture</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>)}<WhatsAppButton compact /></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="mobile-nav">{links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={17} /></NavLink>)}<WhatsAppButton compact /></motion.nav>}</AnimatePresence>
  </header>;
}
