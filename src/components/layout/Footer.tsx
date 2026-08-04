import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, googleMapsUrl } from '@/data/business';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand brand--footer" aria-label={`${business.name} home`}>
            <img src={business.logo} alt={business.name} className="brand-logo brand-logo--footer" />
          </Link>
          <p className="footer-intro">
            {business.type} in Hyderabad — furniture for considered living since {business.since}.
          </p>
          <address className="footer-address">
            {business.address.footerLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          <Link to="/collections">Collections</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Showroom</Link>
        </div>
        <div>
          <span className="footer-label">Connect</span>
          <a href={`tel:${business.phoneTel}`}>
            <Phone size={15} /> {business.phone}
          </a>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={15} /> {business.address.mapLabel}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span>Made for considered living</span>
      </div>
    </footer>
  );
}
