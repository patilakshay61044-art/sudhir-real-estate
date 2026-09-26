const blogs = [
  {
    title: "The Ultimate Guide to Living in San Diego County",
    category: "San Diego Living",
    description:
      "Explore San Diego County's neighborhoods, lifestyle, transportation, outdoor recreation, education and the communities that make the region unique.",
    image: "/images/blog-living-san-diego.jpeg",
    href: "/blog/living-in-san-diego-county",
  },
  {
    title: "How to Buy Your First Home in San Diego",
    category: "Home Buying",
    description:
      "A practical step-by-step roadmap covering budgeting, financing, inspections, closing costs and the homebuying process.",
    image: "/images/blog-first-home-san-diego.jpeg",
    href: "/blog/first-home-san-diego",
  },
  {
    title: "7 Home Upgrades That Offer the Highest ROI in San Diego County",
    category: "Home Selling",
    description:
      "Discover improvements that can enhance presentation, buyer appeal and potential value before putting your San Diego home on the market.",
    image: "/images/blog-home-upgrades.jpeg",
    href: "/blog/home-upgrades-roi-san-diego",
  },
  {
    title: "Renting vs. Buying in San Diego County",
    category: "Buying vs. Renting",
    description:
      "Understand the monthly costs, equity considerations and long-term factors to evaluate when comparing renting with homeownership.",
    image: "/images/renting-vs-buying-san-diego.jpeg",
    href: "/blog/renting-vs-buying-san-diego",
  },
  {
    title: "The Essential Relocation Checklist for Moving to San Diego County",
    category: "Relocation",
    description:
      "A practical relocation guide covering moving preparation, utilities, schools, DMV requirements and settling into your new home.",
    image: "/images/blog-san-diego-relocation.jpeg",
    href: "/blog/san-diego-relocation-checklist",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-16 sm:py-20 lg:py-24 bg-cream-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <p className="text-brand-600 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
            Insights &amp; Resources
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 leading-[1.1]">
            Real Estate Insights for San Diego
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-5 leading-relaxed">
            Helpful guides and local insights for buyers, sellers, homeowners,
            investors and anyone planning a move to San Diego County.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.title}
              className={`group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                index === 3 ? "lg:col-start-1" : ""
              }`}
            >
              {/* Image */}
              <a
                href={blog.href}
                aria-label={`Read ${blog.title}`}
                className="block"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <span className="absolute bottom-4 left-5 bg-white/95 text-brand-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                  {blog.description}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href={blog.href}
                    className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-900 transition-colors"
                  >
                    Read Article
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Relocation CTA */}
        <div className="mt-10 sm:mt-12 rounded-3xl bg-brand-800 px-6 py-8 sm:px-10 sm:py-10 text-center text-white">
          <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
            Free Resource
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
            Planning a Move to San Diego?
          </h3>

          <p className="text-white/70 max-w-2xl mx-auto mt-3 leading-relaxed">
            Explore our relocation guide for practical information to help
            organize your move, prepare your home and settle into San Diego
            County.
          </p>

          <a
            href="/blog/san-diego-relocation-checklist"
            className="inline-flex items-center justify-center mt-6 bg-white text-brand-800 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-brand-50 transition-all duration-300"
          >
            View Relocation Guide
            <span className="ml-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}