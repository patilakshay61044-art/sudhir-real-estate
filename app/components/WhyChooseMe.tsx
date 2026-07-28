const reasons = [
  {
    title: 'Deep Local Knowledge',
    description: 'I know every neighborhood, school district, and market trend that matters to your decision.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Client-First Approach',
    description: 'Your goals are my priority. I listen, advise honestly, and never push a sale that isn\'t right for you.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'Skilled Negotiation',
    description: 'Years of experience at the negotiating table mean I consistently secure the best terms for my clients.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    title: 'Full-Service Support',
    description: 'From the first conversation to well after closing, I handle every detail so you can focus on your new home.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Marketing Excellence',
    description: 'Professional photography, drone footage, and targeted digital campaigns ensure maximum exposure.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
  {
    title: 'Trusted Guidance',
    description: 'I provide honest, straightforward advice to help you make confident, informed decisions.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 lg:py-24 bg-brand-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-300 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Why Choose Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 animate-fade-up-delay-1">
            The Difference Is in the Details
          </h2>
          <p className="text-white/70 text-lg mt-5 animate-fade-up-delay-2">
            I don&apos;t just sell homes — I build lasting relationships based on
            trust, transparency, and results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className={`group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-400/30 transition-all duration-300 hover:-translate-y-1 animate-fade-up-delay-${idx + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-700/30 group-hover:bg-brand-600 flex items-center justify-center mb-5 transition-colors duration-300">
                <svg className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
