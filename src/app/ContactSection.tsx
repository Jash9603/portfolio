'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  return (
    <section id="contact" className="py-16 max-w-xl mx-auto px-4 sm:px-0">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p className="mb-4 text-secondary">Want to connect, collaborate, or have questions? Reach out!</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={async e => {
          e.preventDefault();
          setLoading(true);
          setStatus('idle');
          setError('');
          const form = e.target as HTMLFormElement;
          const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
          const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
          const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, message }),
            });
            if (res.ok) {
              setStatus('success');
              form.reset();
            } else {
              const data = await res.json();
              setError(data.error || 'Failed to send.');
              setStatus('error');
            }
          } catch {
            setError('Failed to send.');
            setStatus('error');
          } finally {
            setLoading(false);
          }
        }}
      >
        <input name="name" type="text" placeholder="Your Name" className="p-2 rounded border focus:border-[var(--input-focus)] border-[var(--input-border)] bg-white" required />
        <input name="email" type="email" placeholder="Your Email" className="p-2 rounded border focus:border-[var(--input-focus)] border-[var(--input-border)] bg-white" required />
        <textarea name="message" placeholder="Your Message" className="p-2 rounded border focus:border-[var(--input-focus)] border-[var(--input-border)] bg-white" rows={4} required />
        <button type="submit" className="btn" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
      </form>
      {status === 'success' && <p className="mt-4 text-green-500">Message sent successfully!</p>}
      {status === 'error' && <p className="mt-4 text-red-500">{error}</p>}
    </section>
  );
} 