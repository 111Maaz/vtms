import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { business, whatsappInquiryUrl } from '@/data/business';

type FormFields = { name: string; phone: string; message: string };
type FormErrors = Partial<Record<keyof FormFields, string>>;
const initialFields: FormFields = { name: '', phone: '', message: '' };

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!fields.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[\d\s+\-()]{8,15}$/.test(fields.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!fields.message.trim()) errors.message = 'Please tell us how we can help.';
  else if (fields.message.trim().length < 10) errors.message = 'Please provide a bit more detail (at least 10 characters).';
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'error' | 'validated'>('idle');

  const update = (key: keyof FormFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    const message = `Hello ${business.name}, I'm ${fields.name.trim()}. Phone: ${fields.phone.trim()}. ${fields.message.trim()}`;
    const inquiryUrl = whatsappInquiryUrl(message);
    if (inquiryUrl) window.open(inquiryUrl, '_blank', 'noopener,noreferrer');
    setStatus('validated');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Name *</span>
          <input type="text" name="name" value={fields.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} autoComplete="name" />
          {errors.name && <em role="alert">{errors.name}</em>}
        </label>
        <label className="contact-form__field">
          <span>Phone *</span>
          <input type="tel" name="phone" value={fields.phone} onChange={(event) => update('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} autoComplete="tel" />
          {errors.phone && <em role="alert">{errors.phone}</em>}
        </label>
        <label className="contact-form__field contact-form__field--full">
          <span>Message *</span>
          <textarea name="message" rows={5} value={fields.message} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} />
          {errors.message && <em role="alert">{errors.message}</em>}
        </label>
      </div>

      {status === 'error' && <p className="contact-form__banner contact-form__banner--error" role="alert">Please correct the highlighted fields before submitting.</p>}
      {status === 'validated' && <p className="contact-form__banner contact-form__banner--info" role="status">Your WhatsApp message is ready. If it did not open, call us at <a href={`tel:${business.phoneTel}`}>{business.phone}</a>.</p>}

      <button type="submit" className="button button--dark">Send on WhatsApp <ArrowUpRight size={17} /></button>
    </form>
  );
}
