import { ArrowUpRight } from 'lucide-react';
import { business, googleMapsEmbedUrl, googleMapsUrl } from '@/data/business';

export function GoogleMap() {
  return (
    <div className="map-card">
      <iframe
        title={`${business.name} location on Google Maps`}
        src={googleMapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="map-card__iframe"
      />
      {/* <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="map-card__link">
        Open in Google Maps <ArrowUpRight size={16} />
      </a> */}
    </div>
  );
}
