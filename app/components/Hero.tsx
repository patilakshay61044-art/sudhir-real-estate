export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1066391/pexels-photo-1066391.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="San Diego luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <p className="text-brand-200 font-semibold uppercase tracking-[0.25em] text-sm animate-fade-up">
            San Diego Real Estate
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mt-5 animate-fade-up-delay-1">
            Helping You Find
            <br />
            Your Dream Home
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-7 leading-relaxed max-w-xl animate-fade-up-delay-2">
            Whether you&apos;re buying, selling, or investing, I provide
            personalized guidance and expert negotiation throughout every step
            of your journey.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a
              href="#contact"
              className="bg-brand-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 shadow-lg shadow-brand-900/30 text-center"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="border border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              Explore Services
            </a>
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
