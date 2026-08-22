'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-cream-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm">
            Get In Touch
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Let&apos;s Discuss Your Real Estate Goals
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-relaxed">
            Whether you&apos;re buying, selling, investing, renting or looking
            for professional property management in San Diego County, I&apos;m
            here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-stretch">

          {/* Contact Information */}
          <div className="bg-brand-800 rounded-3xl p-8 md:p-10 text-white shadow-xl">

            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Contact Information
            </h3>

            <p className="text-white/70 mt-3 leading-relaxed">
              Have a question or ready to discuss your property goals? Reach
              out directly or use the consultation form.
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone */}
              <a
                href="tel:+14255333478"
                className="block group"
              >
                <p className="text-brand-200 text-xs uppercase tracking-[0.15em] font-semibold">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-lg group-hover:text-brand-200 transition-colors">
                  (425) 533-3478
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:sudhirpatil.realestate@gmail.com"
                className="block group"
              >
                <p className="text-brand-200 text-xs uppercase tracking-[0.15em] font-semibold">
                  Email
                </p>

                <p className="mt-1 font-semibold break-all group-hover:text-brand-200 transition-colors">
                  sudhirpatil.realestate@gmail.com
                </p>
              </a>

              {/* Service Area */}
              <div>
                <p className="text-brand-200 text-xs uppercase tracking-[0.15em] font-semibold">
                  Service Area
                </p>

                <p className="mt-1 font-semibold text-lg">
                  San Diego County
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">
                Available for consultations
              </p>

              <p className="text-white/60 text-sm mt-1 leading-relaxed">
                In-person and virtual consultations available.
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div
            id="consultation-form"
            className="bg-white rounded-3xl p-7 md:p-10 shadow-xl border border-gray-100 scroll-mt-28"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
              Schedule a Free Consultation
            </h3>

            <p className="text-gray-500 mt-2 mb-7">
              Tell me a little about what you&apos;re looking for and I&apos;ll
              get back to you as soon as possible.
            </p>

            <form
              action="https://formspree.io/f/mwvgdjqp"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>

              </div>

              {/* Interest */}
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  I&apos;m Interested In
                </label>

                <select
                  id="interest"
                  name="interest"
                  defaultValue="Buying"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                >
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                  <option value="Investing">Investing</option>
                  <option value="Renting">Renting</option>
                  <option value="Property Management">
                    Property Management
                  </option>
                  <option value="Just Exploring">
                    Just Exploring
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your real estate goals..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
  type="submit"
  className="w-full bg-brand-700 text-white py-4 rounded-xl font-semibold text-base hover:bg-brand-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
>
  Book Consultation
</button>

{/* Terms & Conditions */}
<div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      name="terms"
      required
      className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-700 focus:ring-brand-500"
    />

    <span className="text-sm text-gray-600 leading-relaxed">
      I have read and agree to the Terms & Conditions
      <span className="text-red-500 ml-1">*</span>
    </span>
  </label>
</div>

{/* SMS Consent */}
<div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      name="sms_consent"
      className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-700 focus:ring-brand-500"
    />

    <span className="text-sm text-gray-600 leading-relaxed">
      By checking this box, I agree to receive SMS messages from Sudhir Patil
      related to my real estate inquiry and services, including appointment
      updates, service notifications, alerts, and other related communications.
      Message frequency may vary. Message and data rates may apply. Reply STOP
      to opt out or HELP for assistance.
    </span>
  </label>
</div>

<p className="text-xs text-gray-400 text-center leading-relaxed">
  By submitting this form, you agree to be contacted regarding your real
  estate inquiry. Your information is never shared.
</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}