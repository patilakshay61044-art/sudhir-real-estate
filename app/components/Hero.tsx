export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[72svh] sm:min-h-[76vh] lg:min-h-[82vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/home-image.jpeg"
          alt="San Diego luxury home"
          className="w-full h-full object-cover object-[62%_center] sm:object-center"
        />

        {/* Overall subtle darkening */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text-protection overlay */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[78%] lg:w-[72%] bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        {/* Bottom readability overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 w-full">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Main Heading */}
          <h1
            className="
              font-serif
              text-[2.75rem]
              leading-[1]
              sm:text-[3.5rem]
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              tracking-[-0.02em]
              drop-shadow-lg
              animate-fade-up
            "
          >
            Your Trusted
            <br />
            San Diego
            <br />
            REALTOR<span className="text-white">®</span>
          </h1>

          {/* Description */}
          <p
            className="
              text-white/95
              text-[15px]
              sm:text-base
              md:text-lg
              lg:text-xl
              mt-5
              sm:mt-6
              leading-relaxed
              max-w-lg
              drop-shadow-lg
              animate-fade-up-delay-2
            "
          >
            Whether you&apos;re buying your first home, selling property,
            exploring investment opportunities or looking for professional
            property management, I provide honest guidance, personalized
            service and local market expertise to help you make confident
            real estate decisions.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-7
              sm:mt-8
              flex
              flex-col
              sm:flex-row
              gap-3
              sm:gap-3.5
              animate-fade-up-delay-3
            "
          >
            {/* Schedule Consultation */}
            <a
              href="#consultation-form"
              className="
                bg-brand-600
                text-white
                px-6
                sm:px-7
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
                w-full
                sm:w-auto
              "
            >
              Schedule a Free Consultation
            </a>

            {/* Services */}
            <a
              href="#services"
              className="
                border
                border-white/60
                bg-black/15
                text-white
                px-6
                sm:px-7
                py-3.5
                rounded-full
                text-sm
                md:text-base
                font-semibold
                hover:bg-white/15
                transition-all
                duration-300
                text-center
                w-full
                sm:w-auto
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