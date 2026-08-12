import {
  Heart,
  MessageSquare,
  MapPinned,
  Handshake,
  Compass,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Client-First Service",
    desc: "Every client receives personalized attention, honest advice and dedicated support throughout the buying or selling process.",
    icon: Heart,
  },
  {
    title: "Transparent Communication",
    desc: "Clear updates, prompt responses and complete transparency from our first conversation to closing day.",
    icon: MessageSquare,
  },
  {
    title: "San Diego Market Focus",
    desc: "Focused on helping clients navigate the San Diego real estate market with confidence and local knowledge.",
    icon: MapPinned,
  },
  {
    title: "Professional Negotiation",
    desc: "Committed to protecting your interests and working toward the best possible outcome in every transaction.",
    icon: Handshake,
  },
  {
    title: "Guidance Every Step",
    desc: "Whether you're buying your first home, selling a property, investing or exploring property management, you'll have support at every stage.",
    icon: Compass,
  },
  {
    title: "Integrity & Trust",
    desc: "Building long-term relationships through professionalism, honesty and exceptional client care.",
    icon: ShieldCheck,
  },
];

export default function WhyWorkWithSudhir() {
  return (
    <section id="why-work" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm animate-fade-up">
            Why Choose Sudhir Patil
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 animate-fade-up-delay-1">
            Why Choose Sudhir Patil
          </h2>

          <p className="text-gray-600 text-lg mt-5 animate-fade-up-delay-2">
            Providing honest guidance, professional service and a personalized
            real estate experience for every client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group p-8 rounded-2xl bg-cream-50 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up-delay-${
                  idx + 1
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-100 group-hover:bg-brand-700 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 text-brand-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}