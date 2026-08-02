export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Ready to Achieve Your Real Estate Goals?
            </h3>
            <p className="text-white/60 mt-2">
              Whether you&apos;re buying, selling, or investing in San Diego, I&apos;m
              here to guide you every step of the way.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
          >
            Contact Sudhir
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold">
              Sudhir Patil
            </h2>

            <p className="text-sm uppercase tracking-[0.2em] text-brand-300 mt-1">
              California REALTOR®
            </p>

            <p className="text-white/60 mt-6 leading-relaxed">
              Dedicated to providing honest guidance, responsive communication,
              and personalized real estate services throughout San Diego,
              California. My goal is to help every client make confident real
              estate decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Service Area", href: "#areas" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href="tel:+14255333478"
                  className="hover:text-brand-300 transition-colors"
                >
                  📞 (425) 533-3478
                </a>
              </li>

              <li>
                <a
                  href="mailto:sudhirpatil.realestate@gmail.com"
                  className="hover:text-brand-300 transition-colors break-all"
                >
                  ✉️ sudhirpatil.realestate@gmail.com
                </a>
              </li>

              <li>
                📍 San Diego, California
              </li>

              <li>
                California DRE #02387796
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Sudhir Patil. All Rights Reserved.
          </p>

          <p>
            California REALTOR® • DRE #02387796
          </p>
        </div>
      </div>
    </footer>
  );
}
