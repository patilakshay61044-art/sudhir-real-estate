export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="images/home-image.jpeg"
          alt="San Diego luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-900/40" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <p className="text-brand-200 font-semibold uppercase tracking-[0.25em] text-sm animate-fade-up">
            Sudhir Patil • California REALTOR®
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mt-5 animate-fade-up-delay-1">
            Your Trusted
            <br />
            San Diego REALTOR®
          </h1>

          <p className="text-white/80 text-lg md:text-xl mt-7 leading-relaxed max-w-xl animate-fade-up-delay-2">
            Whether you're buying your first home, selling a property, or
            exploring investment opportunities, I provide honest guidance,
            personalized service, and local market expertise to help you make
            confident real estate decisions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a
              href="#contact"
              className="bg-brand-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 shadow-lg shadow-brand-900/30 text-center"
            >
              Schedule a Free Consultation
            </a>

            <a
              href="#services"
              className="border border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              View My Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-white/80 text-sm">
            <span>✓ California DRE #02387796</span>
            <span>✓ Personalized Client Service</span>
            <span>✓ Serving San Diego, California</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}