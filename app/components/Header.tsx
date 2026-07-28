'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Areas', href: '#areas' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-800">
            Sudhir Patil
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            San Diego REALTOR®
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-700 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+14255333478"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-700 transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            <span>(425) 533-3478</span>
          </a>
          <a
            href="#contact"
            className="bg-brand-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 shadow-md shadow-brand-700/20"
          >
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+14255333478"
              className="flex items-center gap-2 py-3 px-4 text-gray-700 font-medium"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              (425) 533-3478
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-brand-700 text-white px-6 py-3.5 rounded-full text-center text-sm font-semibold hover:bg-brand-800 transition"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
