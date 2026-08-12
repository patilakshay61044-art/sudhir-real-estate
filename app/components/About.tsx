export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Image */}
          <div className="relative animate-fade-up lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="/images/sudhir-patil.jpeg"
                alt="Sudhir Patil, California REALTOR®"
                className="w-full h-[460px] sm:h-[540px] lg:h-[620px] object-cover object-top"
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up-delay-2">

            {/* Section Label */}
            <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm">
              About Sudhir Patil
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-[1.1]">
              Your Local San Diego County REALTOR®
            </h2>

            {/* Intro */}
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              As a California-licensed REALTOR® serving San Diego County, I
              help clients Buy, Sell, Invest, Rent and Manage Property with
              confidence.
            </p>

            {/* Core Services */}
            <div className="mt-8 space-y-6">

              <div className="border-l-2 border-brand-200 pl-5">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Buying, Selling & Investing
                </h3>

                <p className="text-gray-600 text-base mt-1.5 leading-relaxed">
                  Personalized guidance from pricing strategy to closing.
                </p>
              </div>

              <div className="border-l-2 border-brand-200 pl-5">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Property Management
                </h3>

                <p className="text-gray-600 text-base mt-1.5 leading-relaxed">
                  Tenant placement, rent collection, maintenance and lease
                  compliance.
                </p>
              </div>
            </div>

            {/* Experience */}
            <p className="text-gray-600 text-lg mt-8 leading-relaxed">
              With 15+ years of combined real estate experience across the
              U.S. and India, I offer honest guidance, transparent
              communication and dedicated support. Building long-term
              relationships rooted in trust and integrity is at the heart of
              how I work.
            </p>

            {/* Service Areas */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 text-lg">
                Serving San Diego County
              </h3>

              <p className="text-gray-600 text-base mt-2 leading-relaxed">
                Scripps Ranch, Mira Mesa, Rancho Peñasquitos, Rancho Bernardo,
                4S Ranch, Poway, Carmel Valley, UTC, La Jolla, Escondido,
                San Marcos, Vista and Carlsbad.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Sudhir
              </a>

              <div className="text-sm text-gray-500">
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}