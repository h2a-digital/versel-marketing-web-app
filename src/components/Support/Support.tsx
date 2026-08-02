'use client';

import { site } from '@/content/site';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SupportPresenter from './Support.presenter';
import type { SupportFieldErrors, SupportFormState, SupportFieldName } from './Support.model';

export function Support() {
  const presenter = new SupportPresenter();
  const [formData, setFormData] = useState<SupportFormState>({
    name: '',
    email: '',
    message: '',
    hp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<SupportFieldErrors>({});

  const updateField = (field: SupportFieldName, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    const result = await presenter.submitForm(formData);

    setIsSubmitting(false);
    if (result.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', hp: '' });
      setFieldErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } else if (result.fieldErrors) {
      setFieldErrors(result.fieldErrors);
    }
  };

  return (
    <section id="support" className="bg-[#15110D] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <div className="mb-4 text-5xl">💬</div>
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">Get in touch</h2>
            <p className="text-xl text-zinc-400">
              Questions about Versel? We&apos;re here to help.
            </p>
          </div>

          <div className="rounded-3xl border border-[#44362B] bg-[#231D17] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  className={`w-full rounded-xl border bg-[#15110D] px-4 py-3 text-white transition-colors placeholder:text-zinc-500 focus:ring-2 focus:ring-[#C9823A] focus:ring-offset-2 focus:ring-offset-[#231D17] ${
                    fieldErrors.name
                      ? 'border-[#F28B82] focus:border-[#F28B82]'
                      : 'border-[#514033] focus:border-[#C9823A]'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-2 text-sm text-[#F28B82]">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  className={`w-full rounded-xl border bg-[#15110D] px-4 py-3 text-white transition-colors placeholder:text-zinc-500 focus:ring-2 focus:ring-[#C9823A] focus:ring-offset-2 focus:ring-offset-[#231D17] ${
                    fieldErrors.email
                      ? 'border-[#F28B82] focus:border-[#F28B82]'
                      : 'border-[#514033] focus:border-[#C9823A]'
                  }`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-2 text-sm text-[#F28B82]">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  className={`w-full resize-none rounded-xl border bg-[#15110D] px-4 py-3 text-white transition-colors placeholder:text-zinc-500 focus:ring-2 focus:ring-[#C9823A] focus:ring-offset-2 focus:ring-offset-[#231D17] ${
                    fieldErrors.message
                      ? 'border-[#F28B82] focus:border-[#F28B82]'
                      : 'border-[#514033] focus:border-[#C9823A]'
                  }`}
                  placeholder="Tell us how we can help..."
                  disabled={isSubmitting}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-2 text-sm text-[#F28B82]">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#A56A32] to-[#C9823A] px-8 py-4 font-bold text-[#FFF7EA] transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-semibold text-[#5FA66A]"
                >
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>

            <div className="mt-8 border-t border-[#44362B] pt-8">
              <p className="mb-4 text-center text-sm text-zinc-400">Or email us directly at</p>
              <a
                href={`mailto:${site.company.email}`}
                className="block text-center text-lg font-semibold text-white hover:text-[#F1C27D]"
              >
                {site.company.email}
              </a>
            </div>

            <div className="mt-8 border-t border-[#44362B] pt-8">
              <p className="mb-4 text-center text-sm font-semibold text-zinc-500">
                Legal Information
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/legal/privacy" className="font-medium text-zinc-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="/legal/terms" className="font-medium text-zinc-400 hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
