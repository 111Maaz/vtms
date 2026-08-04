import { ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return <footer className="site-footer"><div className="footer-grid"><div><Link to="/" className="brand brand--footer"><span className="brand-mark">V</span><span>Sri Videm's <small>Furniture</small></span></Link><p className="footer-intro">Furniture with a point of view, made for the way Hyderabad lives today.</p></div><div><span className="footer-label">Explore</span><Link to="/collections">Collections</Link><Link to="/about">Our story</Link><Link to="/contact">Showroom</Link></div><div><span className="footer-label">Connect</span><a href="tel:+919666114610"><Phone size={15} /> +919666114610</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="/contact"><MapPin size={15} /> Hyderabad, Telangana</a></div></div><div className="footer-bottom"><span>© 2024 Sri Videm's Furniture</span><span>Made for considered living</span></div></footer>;
}
