'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-sm">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Let's Discuss Your Real Estate Goals
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            Whether you're buying, selling, or investing in San Diego, I'm here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-brand-800 rounded-3xl p-10 text-white">
            <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-4">
              <p><strong>Phone:</strong> (425) 533-3478</p>
              <p><strong>Email:</strong> sudhirpatil.realestate@gmail.com</p>
              <p><strong>Service Area:</strong> San Diego, California</p>
              <p><strong>DRE:</strong> #02387796</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mwvgdjqp"
            method="POST"
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100"
          >
            <h3 className="font-serif text-2xl font-bold mb-6">Schedule a Free Consultation</h3>

            <input type="text" name="name" required placeholder="Full Name" className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300" />
            <input type="email" name="email" required placeholder="Email" className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300" />
            <input type="tel" name="phone" placeholder="Phone" className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300" />

            <select name="interest" className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300">
              <option>Buying</option>
              <option>Selling</option>
              <option>Investing</option>
              <option>Just Exploring</option>
            </select>

            <textarea name="message" rows={5} placeholder="Tell me about your goals..." className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300"></textarea>

            <button type="submit" className="w-full bg-brand-700 text-white py-4 rounded-xl font-semibold">
              Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
