export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sudhir Patil"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up-delay-2">
            <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Your Trusted Partner in San Diego Real Estate
            </h2>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              I am a California REALTOR® based in San Diego, dedicated to
              helping families, investors, and first-time buyers find the
              right property. My approach combines deep local knowledge with a
              commitment to understanding each client&apos;s unique needs.
            </p>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              I believe that real estate is more than just transactions —
              it&apos;s about building relationships and helping people find a
              place to call home. From the first showing to the final
              handshake, I&apos;m with you every step of the way.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { title: 'Local Expertise', desc: 'Deep knowledge of San Diego neighborhoods' },
                { title: 'Personalized Service', desc: 'Tailored approach for every client' },
                { title: 'Expert Negotiation', desc: 'Getting you the best possible terms' },
                { title: 'Full-Service Support', desc: 'From search to closing and beyond' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
              </a>
              <div className="text-sm text-gray-500">
                <p className="font-semibold text-gray-700">Sudhir Patil</p>
                <p>California REALTOR® · DRE #02387796</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
