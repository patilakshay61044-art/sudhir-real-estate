import { MapPin } from "lucide-react";

const areas = [
  "Scripps Ranch",
  "Mira Mesa",
  "Rancho Peñasquitos",
  "Rancho Bernardo",
  "4S Ranch",
  "Poway",
  "Carmel Valley",
  "UTC",
  "La Jolla",
  "Escondido",
  "San Marcos",
  "Vista",
  "Carlsbad",
];

export default function AreasServed() {
  return (
    <section id="areas" className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Service Area
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight animate-fade-up-delay-1">
            Serving San Diego County
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-relaxed animate-fade-up-delay-2">
            Helping buyers, sellers, investors and property owners across
            communities throughout San Diego County.
          </p>
        </div>

        {/* Main San Diego Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-800 rounded-3xl px-7 py-8 md:px-10 md:py-9 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <MapPin
                  className="w-7 h-7 text-brand-200"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p className="text-brand-200 uppercase tracking-[0.18em] text-xs font-semibold">
                  Primary Service Area
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-1">
                  San Diego County, California
                </h3>

                <p className="text-white/70 mt-2">
                  Local real estate guidance for buying, selling, investing,
                  renting and property management.
                </p>
              </div>
            </div>
          </div>

          {/* Communities */}
          <div className="mt-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-6">
              Communities Served
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MapPin
                    className="w-4 h-4 text-brand-600 flex-shrink-0"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-brand-700 transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <p className="text-center text-gray-500 text-sm mt-7">
            Don&apos;t see your neighborhood listed? Contact me to discuss your
            real estate needs anywhere in San Diego County.
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-700 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Discuss Your Property
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}