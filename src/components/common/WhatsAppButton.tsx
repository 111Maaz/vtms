import { MessageCircle } from 'lucide-react';
import { business, whatsappUrl } from '@/data/business';

export function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  if (!whatsappUrl) {
    return (
      <span
        className={`whatsapp-button whatsapp-button--inactive group ${compact ? 'whatsapp-button--compact' : ''}`}
        aria-disabled="true"
        title="WhatsApp contact not available"
      >
        <MessageCircle size={compact ? 18 : 22} strokeWidth={1.7} />
        <span className="whatsapp-label">{compact ? 'Inquire' : 'WhatsApp us'}</span>
      </span>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${business.name} on WhatsApp`}
      className={`whatsapp-button group ${compact ? 'whatsapp-button--compact' : ''}`}
    >
      <MessageCircle size={compact ? 18 : 22} strokeWidth={1.7} />
      <span className="whatsapp-label">{compact ? 'Inquire' : 'WhatsApp us'}</span>
    </a>
  );
}
