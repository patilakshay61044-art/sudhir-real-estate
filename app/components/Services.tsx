const services = [
  {
    title: 'Home Buying',
    description:
      'Whether you are buying your first home or your next property, I provide guidance throughout the buying process—from understanding your requirements to closing with confidence.',
    image: '/images/buying-image.jpeg',
    features: [
      'Personalized property search',
      'Neighborhood guidance',
      'Offer preparation',
      'Closing assistance',
    ],
  },
  {
    title: 'Home Selling',
    description:
      'Selling your home requires the right strategy and attention to detail. I work closely with you to help present your property effectively and guide you through every stage of the selling process.',
    image: '/images/selling-image.jpeg',
    features: [
      'Property pricing guidance',
      'Marketing support',
      'Buyer communication',
      'Negotiation assistance',
    ],
  },
  {
    title: 'Real Estate Consultation',
    description:
      'Whether you are relocating, investing, or simply exploring your options, I provide honest advice and market insights to help you make informed real estate decisions.',
    image: '/images/real-estate.jpeg',
    features: [
      'Market insights',
      'Investment guidance',
      'Local San Diego knowledge',
      'Professional support',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Services
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 animate-fade-up-delay-1">
            Professional Real Estate Services
          </h2>

          <p className="text-gray-600 text-lg mt-5 animate-fade-up-delay-2">
            Whether you&apos;re buying, selling, or looking for professional
            guidance, I am committed to providing honest advice, responsive
            communication, and personalized service throughout your real estate
            journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-fade-up-delay-${
                idx + 1
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />

                <h3 className="absolute bottom-4 left-6 font-serif text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              <div className="p-7">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-brand-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-block mt-8 text-brand-700 font-semibold hover:text-brand-800 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
