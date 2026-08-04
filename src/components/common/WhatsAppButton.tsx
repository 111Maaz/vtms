import { MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/919000000000?text=Hello%20Sri%20Videm%27s%20Furniture%2C%20I%27d%20like%20to%20make%20an%20inquiry.';

export function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Sri Videm's Furniture on WhatsApp" className={`whatsapp-button group ${compact ? 'whatsapp-button--compact' : ''}`}>
      <MessageCircle size={compact ? 18 : 22} strokeWidth={1.7} />
      <span className="whatsapp-label">{compact ? 'Inquire' : 'WhatsApp us'}</span>
    </a>
  );
}

export { whatsappUrl };
