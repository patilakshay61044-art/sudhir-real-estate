'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', interest: 'Buying', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 animate-fade-up-delay-1">
            Let&apos;s Find Your Dream Home
          </h2>
          <p className="text-gray-600 text-lg mt-6 animate-fade-up-delay-2">
            Ready to take the next step? Book a free consultation and let&apos;s
            discuss how I can help you achieve your real estate goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="animate-fade-up-delay-1">
            <div className="bg-brand-800 rounded-3xl p-10 text-white h-full">
              <h3 className="font-serif text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a href="tel:+14255333478" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Phone</p>
                    <p className="font-semibold group-hover:text-brand-200 transition-colors">(425) 533-3478</p>
                  </div>
                </a>

                <a href="mailto:sudhirpatil.realestate@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Email</p>
                    <p className="font-semibold group-hover:text-brand-200 transition-colors break-all">sudhirpatil.realestate@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">Service Area</p>
                    <p className="font-semibold">San Diego, California</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-200">License</p>
                    <p className="font-semibold">DRE #02387796</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-brand-700 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107253.5702567949!2d-117.2776!3d32.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95c0d0b6e6c37%3A0x5b1b2c2a2c2c2c2c!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="San Diego Service Area Map"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-up-delay-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent. I&apos;ll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Book Your Free Consultation
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I&apos;m Interested In
                      </label>
                      <select
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all bg-white"
                      >
                        <option>Buying</option>
                        <option>Selling</option>
                        <option>Investing</option>
                        <option>Just exploring</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
                        placeholder="Tell me about your real estate goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-700 text-white py-4 rounded-xl font-semibold text-base hover:bg-brand-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Book Consultation
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to be contacted regarding your
                      real estate inquiry. Your information is never shared.
                    </p>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
