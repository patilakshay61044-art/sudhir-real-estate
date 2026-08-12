export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">

      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
              Ready to Achieve Your Real Estate Goals?
            </h3>

            <p className="text-white/60 mt-2 leading-relaxed">
              Whether you&apos;re buying, selling or investing in San Diego,
              I&apos;m here to guide you every step of the way.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-brand-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
          >
            Contact Sudhir
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold">
              Sudhir Patil
            </h2>

            <div className="mt-3 space-y-1">
              <p className="text-sm font-medium text-brand-300">
                Realtor | Sterling Nests
              </p>

              <p className="text-sm font-medium text-brand-300">
                Property Manager | WeCare Asset
              </p>

              <p className="text-xs text-white/50 mt-2">
                DRE #02387796
              </p>
            </div>

            <p className="text-white/60 mt-6 leading-relaxed max-w-md">
              Dedicated to providing honest guidance, responsive communication
              and personalized real estate services throughout San Diego
              County. My goal is to help every client make confident real
              estate decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">
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
            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-white/60">

              <li>
                <a
                  href="tel:+14255333478"
                  className="flex items-start gap-3 hover:text-brand-300 transition-colors"
                >
                  <span>📞</span>
                  <span>(425) 533-3478</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:sudhirpatil.realestate@gmail.com"
                  className="flex items-start gap-3 hover:text-brand-300 transition-colors"
                >
                  <span>✉️</span>
                  <span className="break-all">
                    sudhirpatil.realestate@gmail.com
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>San Diego County, California</span>
              </li>

              <li className="pt-3 border-t border-white/10">
                <p className="text-white/80 font-medium">
                  DRE #02387796
                </p>
              </li>

              <li>
                <p className="text-white/80 font-medium">
                  Sterling Nests
                </p>

                <p className="text-white/45 text-sm mt-1">
                  DRE #02211620
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-white/40 text-center md:text-left">

          <p>
            © {new Date().getFullYear()} Sudhir Patil. All Rights Reserved.
          </p>

          <p>
            REALTOR® • DRE #02387796
          </p>
        </div>
      </div>

    </footer>
  );
}