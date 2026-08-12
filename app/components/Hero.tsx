export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[78vh] lg:min-h-[82vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/home-image.jpeg"
          alt="San Diego luxury home"
          className="w-full h-full object-cover"
        />

        {/* Overall subtle darkening */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Strong text-protection overlay on the left */}
        <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        {/* Bottom readability overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="max-w-2xl">

          {/* Main Heading */}
          <h1
            className="
              font-serif
              text-[3.4rem]
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              leading-[0.98]
              tracking-[-0.02em]
              drop-shadow-lg
              animate-fade-up
            "
          >
            Your Trusted
            <br />
            San Diego
            <br />
            REALTOR®️
          </h1>

          {/* Description */}
          <p
            className="
              text-white/95
              text-base
              md:text-lg
              lg:text-xl
              mt-5
              leading-relaxed
              max-w-lg
              drop-shadow-lg
              animate-fade-up-delay-2
            "
          >
            Whether you&apos;re buying your first home, selling property,
            exploring investment opportunities, or looking for professional
            property management, I provide honest guidance, personalized
            service, and local market expertise to help you make confident
            real estate decisions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3.5 animate-fade-up-delay-3">
            <a
              href="#contact"
              className="
                bg-brand-600
                text-white
                px-7
                py-3.5
                rounded-full
                text-sm
                md:text-base
                font-semibold
                hover:bg-brand-500
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-0.5
                shadow-lg
                shadow-black/30
                text-center
              "
            >
              Schedule a Free Consultation
            </a>

            <a
              href="#services"
              className="
                border
                border-white/60
                bg-black/10
                text-white
                px-7
                py-3.5
                rounded-full
                text-sm
                md:text-base
                font-semibold
                hover:bg-white/15
                transition-all
                duration-300
                text-center
              "
            >
              View My Services
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/95 text-xs md:text-sm drop-shadow-lg">
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in-delay-3 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}