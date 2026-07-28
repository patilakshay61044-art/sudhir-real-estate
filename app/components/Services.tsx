const services = [
  {
    title: 'Buying',
    description:
      'Whether you\'re a first-time buyer or seasoned investor, I\'ll help you find the right property at the right price. From neighborhood tours to closing day, I make the buying process smooth and stress-free.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Personalized property search', 'Market analysis & pricing', 'Inspection coordination', 'Closing support'],
  },
  {
    title: 'Selling',
    description:
      'Maximize your home\'s value with a strategic marketing plan. From professional staging to targeted digital campaigns, I ensure your property reaches the right buyers and sells for top dollar.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Home valuation & pricing', 'Professional photography', 'Digital marketing campaigns', 'Offer negotiation'],
  },
  {
    title: 'Investing',
    description:
      'Build wealth through San Diego real estate. I help investors identify high-potential properties, analyze ROI, and build portfolios that generate long-term returns in one of California\'s strongest markets.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Investment property analysis', 'ROI & cash flow projections', 'Portfolio strategy', '1031 exchange guidance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            What I Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 animate-fade-up-delay-1">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-gray-600 text-lg mt-5 animate-fade-up-delay-2">
            From buying your first home to building an investment portfolio, I
            provide end-to-end real estate services tailored to your goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-fade-up-delay-${idx + 1}`}
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
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
