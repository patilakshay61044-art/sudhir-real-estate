import { MapPin } from 'lucide-react';

const areas = [
  'San Diego',
];

export default function AreasServed() {
  return (
    <section id="areas" className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Service Area
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 animate-fade-up-delay-1">
            Areas I Serve
          </h2>
          <p className="text-gray-600 text-lg mt-5 animate-fade-up-delay-2">
            Helping buyers, sellers, and investors throughout San Diego County.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {areas.map((area, idx) => (
            <div
              key={area}
              className={`group flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 animate-fade-up-delay-${idx + 1}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center transition-colors duration-300">
                <MapPin className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-lg font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
