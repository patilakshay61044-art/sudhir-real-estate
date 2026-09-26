export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-cream-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">

              <img
                src="/images/sudhir-patil.jpeg"
                alt="Sudhir Patil, California REALTOR®"
                className="
                  w-full
                  h-[420px]
                  sm:h-[500px]
                  lg:h-[600px]
                  object-cover
                  object-top
                "
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up-delay-2">

            {/* Section Label */}
            <p className="text-brand-600 font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              About Sudhir Patil
            </p>

            {/* Heading */}
            <h2
              className="
                font-serif
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                text-gray-900
                mt-3
                sm:mt-4
                leading-[1.1]
              "
            >
              Your Local San Diego County REALTOR®
            </h2>

            {/* Intro */}
            <p
              className="
                text-gray-600
                text-base
                sm:text-lg
                mt-5
                sm:mt-6
                leading-relaxed
                max-w-2xl
              "
            >
              As a California-licensed REALTOR®, I help clients Buy, Sell,
              Invest, Rent and Manage Property with confidence throughout
              San Diego County.
            </p>

            {/* Core Services */}
            <div className="mt-7 sm:mt-8 space-y-5 sm:space-y-6">

              {/* Buying / Selling / Investing */}
              <div className="border-l-2 border-brand-200 pl-4 sm:pl-5">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Buying, Selling &amp; Investing
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                  Personalized guidance from pricing strategy to closing.
                </p>
              </div>

              {/* Property Management */}
              <div className="border-l-2 border-brand-200 pl-4 sm:pl-5">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Property Management
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                  Tenant placement, rent collection, maintenance and lease
                  compliance.
                </p>
              </div>

            </div>

            {/* Experience */}
            <p
              className="
                text-gray-600
                text-base
                sm:text-lg
                mt-7
                sm:mt-8
                leading-relaxed
                max-w-2xl
              "
            >
              With 15+ years of combined real estate experience across the
              U.S. and India, I offer honest guidance, transparent
              communication and dedicated support. Building long-term
              relationships rooted in trust and integrity is at the heart of
              how I work.
            </p>

            {/* Service Areas */}
            <div className="mt-7 sm:mt-8">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                Serving San Diego County
              </h3>

              <p
                className="
                  text-gray-600
                  text-sm
                  sm:text-base
                  mt-2
                  leading-relaxed
                  max-w-2xl
                "
              >
                Scripps Ranch, Mira Mesa, Rancho Peñasquitos, Rancho Bernardo,
                4S Ranch, Poway, Carmel Valley, UTC, La Jolla, Escondido,
                San Marcos, Vista and Carlsbad.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">

              <a
                href="#consultation-form"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  bg-brand-700
                  text-white
                  px-8
                  py-3.5
                  sm:py-4
                  rounded-full
                  text-sm
                  sm:text-base
                  font-semibold
                  hover:bg-brand-800
                  transition-all
                  duration-300
                  hover:shadow-lg
                  hover:-translate-y-0.5
                "
              >
                Contact Sudhir
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}