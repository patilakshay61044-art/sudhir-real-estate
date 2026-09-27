import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SanDiegoRelocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] overflow-hidden">
        <img
          src="/images/blog-san-diego-relocation.jpeg"
          alt="Relocating to San Diego County"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Strong overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center">
          <div className="max-w-4xl pt-16 sm:pt-20">
            <a
              href="/#blog"
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-8"
            >
              ← Back to Blog
            </a>

            <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
              Relocation
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-4 leading-[1.05]">
              The Essential Relocation Checklist for Moving to San Diego
              County
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl mt-6 max-w-3xl leading-relaxed">
              A practical 60-day relocation timeline, utility guide, DMV
              information and local moving checklist to help make your
              transition to San Diego County easier.
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Introduction */}
        <section>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Relocating to San Diego County—whether you&apos;re moving across town
            from Downtown to North County or relocating from out of state—is an
            exciting milestone. With its year-round sunshine, diverse coastal
            and inland neighborhoods, and thriving job market, &quot;America&apos;s
            Finest City&quot; is an incredible place to call home.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mt-6">
            However, executing a smooth move requires careful timing, local
            coordination, and a clear plan. To take the stress out of your
            transition, use this step-by-step 60-day relocation timeline,
            essential utility directory, California DMV guide, and curated
            local service provider list.
          </p>
        </section>

        {/* Relocation Timeline */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            The Relocation Timeline
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            {[
              "Secure Movers & Organization",
              "Setup Utilities & School Transfer",
              "Address & DMV Updates",
              "Unpack, Register Voter Info & Settle",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl bg-cream-50 border border-gray-100 p-5"
              >
                <span className="text-brand-600 font-semibold text-sm">
                  0{index + 1}
                </span>

                <p className="font-semibold text-gray-900 mt-2 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 60 Days */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            60 Days Before the Move: Foundation & Logistics
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                Secure Your Moving Company or Container
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                San Diego is a high-demand relocation market. Book licensed
                professional movers or order portable storage units (e.g.,
                PODS) at least 8 weeks out.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Audit & Declutter
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Moving costs in California are largely based on weight and
                volume. Sort belongings into three categories: Keep, Donate,
                and Sell.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Organize Important Records
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Gather medical, dental, veterinary, and school records into a
                portable, secure physical binder or encrypted digital folder.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Review Lease or Housing Contingencies
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Confirm your move-out inspection date with your current
                landlord or align closing dates with your real estate agent.
              </p>
            </div>
          </div>
        </section>

        {/* 30 Days */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            30 Days Before the Move: Transfers & Local Setup
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                Schedule Local Utility Transfers
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Establish service start dates for your new San Diego
                residence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Initiate School Enrollment
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                If relocating with children, contact your new school district
                (e.g., Poway Unified, San Dieguito Union High, San Marcos
                Unified, or San Diego Unified) to submit residency verification
                and transfer immunization records.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
              Update Home/Renter&apos;s Insurance
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Transfer your policy to cover your new address starting on your
                possession date.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Reserve Building Elevators/Parking
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                If moving into an urban condo (such as in Little Italy, East
                Village, or UTC), reserve elevator time slots and street
                loading permits with the HOA or property manager.
              </p>
            </div>
          </div>
        </section>

        {/* 14 Days */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            14 Days Before the Move: Change of Address & Final Prep
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                Submit USPS Change of Address
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                File your official mail forwarding request online at usps.com.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Notify Financial Institutions
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Update your billing address with banks, credit cards, insurance
                providers, and subscription services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Plan the First-Night Essentials Box
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Pack a separate suitcase with 3 days of clothes, toiletries,
                chargers, basic tools, pet food, and paper goods so you aren&apos;t
                hunting through boxes on Night 1.
              </p>
            </div>
          </div>
        </section>

        {/* Moving Week */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Moving Week & First 7 Days: Settling In
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                Conduct Move-In Inspection
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Take photos/videos of your new property before unpackaging
                furniture to document existing conditions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Inspect Safety Features
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Test smoke detectors, locate the main water shut-off valve, and
                locate the main electrical breaker panel.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Update DMV & Voter Registration
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
              Complete California driver&apos;s license and vehicle registration
                updates within required state timeframes.
              </p>
            </div>
          </div>
        </section>

        {/* Utility Directory */}
        <section className="mt-16 rounded-3xl bg-cream-50 p-6 sm:p-8 lg:p-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            ⚡ San Diego County Utility Setup Directory
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            Setting up utilities early ensures power, water, and internet are
            fully functional the moment you turn the key.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="font-semibold text-gray-900">
                Electricity & Natural Gas
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                San Diego Gas & Electric (SDGE): Serves almost all of San Diego
                County. Set up or transfer service online at sdge.com or call
                (800) 411-7343.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Water & Sewer Service
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                City of San Diego Public Utilities: Serves city limits (921 ZIP
                codes). Visit sandiego.gov/public-utilities or call
                (619) 515-3500.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                North County Water Districts: Depending on your location,
                service is provided by Olivenhain Municipal Water District,
                Helix Water District, Carlsbad Municipal Water District, or
                Otay Water District.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Trash & Recycling
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                EDCO Disposal: Covers major portions of North & East County.
                Visit edcodisposal.com.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                Waste Management (WM): Serves various San Diego municipalities.
                Visit wm.com.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Internet & Cable Providers
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Spectrum & AT&T Fiber: The primary high-speed internet
                infrastructure providers across San Diego County.
              </p>
            </div>
          </div>
        </section>

        {/* DMV */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            🚗 California DMV & Voter Registration Guide
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            If you are moving to San Diego from out of state, California law
            requires prompt registration updates:
          </p>

          <div className="overflow-x-auto mt-7 rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">
                    California DMV Relocation Deadlines
                  </th>
                  <th className="px-5 py-4 font-semibold">Timeframe</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-5 py-4 text-gray-700">
                    Notice of Address Change
                  </td>
                  <td className="px-5 py-4 text-gray-700">
                    Submit within 10 days of moving
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="px-5 py-4 text-gray-700">
                  Driver&apos;s License Update
                  </td>
                  <td className="px-5 py-4 text-gray-700">
                  Apply for a CA Driver&apos;s License within 20 days
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-gray-700">
                    Vehicle Registration
                  </td>
                  <td className="px-5 py-4 text-gray-700">
                    Register out-of-state vehicles within 20 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Smog Check Certification
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Before registering an out-of-state gas or diesel vehicle in
                California, you must pass a smog check at a licensed station.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                DMV Appointment & REAL ID
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Visit a local DMV office (popular locations include Clairemont,
                Poway, San Marcos, and Chula Vista). Bring proof of identity,
                two residency documents (utility bill, lease/mortgage
                statement), and your out-of-state title/registration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Voter Registration
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                Register or update your voter registration address online via
                the California Secretary of State portal at
                registertovote.ca.gov or through your DMV application.
              </p>
            </div>
          </div>
        </section>

        {/* Local Providers */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Curated San Diego Local Service Provider List
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            Having trusted, vetted local professionals on hand makes your
            transition seamless.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Recommended Local Movers & Storage
              </h3>

              <p className="text-gray-600 leading-relaxed mt-3">
                Cross-Town & Local Moving: Choose licensed CA Bureau of
                Household Goods and Services (BHGS) movers with dedicated local
                San Diego crews.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                Specialty Item Handling: Ensure your mover offers dedicated
                packing for fine art, pianos, and delicate glass items.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Professional Move-In Cleaning Services
              </h3>

              <p className="text-gray-600 leading-relaxed mt-3">
                Deep Sanitization & Move-In Cleaners: Schedule professional
                cleaners to sanitize cabinets, appliances, baseboards, and
                bathrooms 24 to 48 hours before your moving truck arrives.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                Carpet & Hardwood Care: Steam clean carpets and treat hardwood
                or LVP flooring prior to furniture placement.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Licensed Home Inspectors & Contractors
              </h3>

              <p className="text-gray-600 leading-relaxed mt-3">
                Licensed General Contractors & Handymen: Essential for mounting
                TVs, installing custom closet systems, changing locks, or
                handling minor pre-move repairs.
              </p>

              <p className="text-gray-600 leading-relaxed mt-3">
                Pest & Termite Specialists: Local specialists to inspect and
                treat for Southern California drywood termites or install
                preventative barrier treatments.
              </p>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="mt-16 bg-brand-800 rounded-3xl p-7 sm:p-10 lg:p-12 text-center text-white">
          <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
            Free Resource
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
            Download Your Free Printable Relocation Checklist
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Keep your San Diego move organized with a simple printable
            checklist covering the key tasks before, during and after your
            relocation.
          </p>

          <a
            href="/#consultation-form"
            className="inline-flex items-center justify-center mt-7 bg-white text-brand-800 px-7 py-3.5 rounded-full font-semibold hover:bg-brand-50 transition-all duration-300"
          >
            Get the Relocation Checklist →
          </a>
        </section>

        {/* Final CTA */}
        <section className="mt-10 text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
          Moving doesn&apos;t have to be overwhelming when you have the right
            local roadmap.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Need local vendor recommendations or advice on finding the perfect
            San Diego neighborhood for your lifestyle? Reach out today for a
            complimentary relocation consultation!
          </p>

          <a
            href="/#consultation-form"
            className="inline-flex items-center justify-center mt-7 bg-brand-800 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-900 transition-all duration-300"
          >
            Schedule a Free Consultation →
          </a>
        </section>

        {/* Back */}
        <div className="text-center mt-10">
          <a
            href="/#blog"
            className="text-brand-700 font-semibold hover:text-brand-900"
          >
            ← Back to Real Estate Insights
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}