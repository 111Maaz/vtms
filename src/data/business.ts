export const business = {
  name: 'Videms Furniture',
  type: 'Home Goods Store / Furniture Showroom',
  rating: 4.0,
  reviewCount: 418,
  phone: '+91 96661 14610',
  phoneTel: '+919666114610',
  email: null as string | null,
  whatsapp: '919666114610',
  website: null as string | null,
  instagram: null as string | null,
  facebook: null as string | null,
  linkedin: null as string | null,
  youtube: null as string | null,
  address: {
    lines: [
      'Panama Godowns,',
      '5-5-184,',
      'Vanasthalipuram Main Road,',
      'Beside Videms Silks,',
      'Saheb Nagar,',
      'Hyderabad,',
      'Telangana 500070,',
      'India',
    ],
    footerLines: [
      'Panama Godowns,',
      '5-5-184,',
      'Vanasthalipuram Main Road,',
      'Beside Videms Silks,',
      'Saheb Nagar,',
      'Hyderabad,',
      'Telangana 500070',
    ],
    mapQuery:
      'Panama+Godowns,+5-5-184+Vanasthalipuram+Main+Road,+Beside+Videms+Silks,+Saheb+Nagar,+Hyderabad,+Telangana+500070',
    mapLabel: 'Vanasthalipuram Main Road · Saheb Nagar',
  },
  hours: '9:00 AM onwards',
  hoursShort: '9:00 AM onwards · Mon – Sun',
  logo: '/images/logos/LOGO.png',
  favicon: '/images/logos/logo_favicon.png',
  since: 2015,
} as const;

export const googleMapsUrl = 'https://maps.google.com/?q=Panama+Godowns,+5-5-184+Vanasthalipuram+Main+Road,+Beside+Videms+Silks,+Saheb+Nagar,+Hyderabad,+Telangana+500070';

export const googleMapsEmbedUrl = 'https://www.google.com/maps?q=Panama+Godowns,+5-5-184+Vanasthalipuram+Main+Road,+Beside+Videms+Silks,+Saheb+Nagar,+Hyderabad,+Telangana+500070&t=k&z=18&output=embed';

export const whatsappUrl = business.whatsapp
  ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello ${business.name}, I'd like to make an inquiry.`)}`
  : null;

export function whatsappInquiryUrl(message: string) {
  if (!business.whatsapp) return null;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const reviews = [
  {
    author: 'Vinod Vanam',
    text: 'Good service best price. I am a regular customer for the last 8 years.',
  },
  {
    author: 'Lakshmiprasad Reddy',
    text: 'Delivered damaged dressing table, office table and chair...',
  },
  {
    author: 'Sangeetha Kumari',
    text: 'Nice showroom. Best management by the staff. Nice furniture.',
  },
] as const;
