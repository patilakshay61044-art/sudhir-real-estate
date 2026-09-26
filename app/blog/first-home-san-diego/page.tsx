import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FirstHomeSanDiegoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/blog-first-home-san-diego.jpeg"
            alt="Buying your first home in San Diego"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Stronger left gradient for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/55 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <a
            href="/#blog"
            className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors mb-8"
          >
            ← Back to Blog
          </a>

          <div className="max-w-4xl">
            <p className="text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] drop-shadow-md">
              Home Buying
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mt-4 text-white drop-shadow-lg">
              How to Buy Your First Home in San Diego: A Step-by-Step Roadmap
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-6 max-w-3xl drop-shadow-md">
              Buying your first home in San Diego is an exciting milestone.
              Here&apos;s a practical roadmap to help you understand the process
              from budgeting and financing to inspections and closing.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        {/* INTRODUCTION */}
        <div className="text-gray-600 text-base sm:text-lg leading-relaxed">

          <p>
            Buying your first home in San Diego is one of the most exciting
            financial milestones you will ever achieve. From the coastal
            communities of LA Jolla, Carlsbad and Encinitas to the vibrant
            neighborhoods of Carmel Valley, Rancho Penasquitos, Scripps Ranch
            and Rancho Bernardo, owning a piece of &quot;America&apos;s Finest City&quot;
            offers both unmatched lifestyle benefits and long-term wealth
            building.
          </p>

          <p className="mt-5">
            However, navigating the local real estate market can feel
            overwhelming if you don&apos;t have a clear plan. Between understanding
            down payment rules, estimating closing costs, and competing for
            local inventory, first-time buyers need a reliable roadmap.
          </p>

          <p className="mt-5">
            Here is your step-by-step guide to buying your first home in San
            Diego County with clarity and confidence.
          </p>

          {/* STEP 1 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                1
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Establish Your True Buying Budget
              </h2>
            </div>

            <p className="mt-6">
              Before browsing online listings, you need to understand your
              total financial picture. A realistic homebuying budget goes
              beyond just the purchase price—it accounts for your complete
              monthly housing expense, often called PITI:
            </p>

            <div className="mt-7 space-y-5">
              <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-7">
                <h3 className="font-semibold text-gray-900">
                  Principal
                </h3>

                <p className="mt-2">
                  The portion of your payment that reduces your loan balance.
                </p>
              </div>

              <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-7">
                <h3 className="font-semibold text-gray-900">
                  Interest
                </h3>

                <p className="mt-2">
                  The cost of borrowing your mortgage funds.
                </p>
              </div>

              <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-7">
                <h3 className="font-semibold text-gray-900">
                  Taxes
                </h3>

                <p className="mt-2">
                  Property taxes in California typically average around 1.2%
                  to 1.25% of the assessed value annually (including local
                  bonds).
                </p>
              </div>

              <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-7">
                <h3 className="font-semibold text-gray-900">
                  Insurance
                </h3>

                <p className="mt-2">
                  Homeowners insurance, plus private mortgage insurance (PMI)
                  if you put down less than 20%.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-10">
              Additional Local Budget Considerations
            </h3>

            <p className="mt-5">
              If you purchase a condo, townhome, or a house in a
              master-planned community (such as 4S Ranch, Otay Ranch, or Carmel
              Valley), budget for monthly HOA fees. In certain newer
              developments, you may also encounter Mello-Roos (special
              facility district taxes), which can add several hundred dollars
              to your monthly housing costs.
            </p>
          </section>

          {/* STEP 2 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                2
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Get Pre-Approved (Not Just Pre-Qualified)
              </h2>
            </div>

            <p className="mt-6">
              One of the most critical steps in the homebuying process is
              getting your financing lined up early. Many buyers confuse
              pre-qualification with pre-approval, but sellers view them very
              differently:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              {/* PRE-QUALIFICATION */}
              <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Pre-Qualification
                </h3>

                <ul className="mt-5 space-y-4 text-gray-600">
                  <li>• Based on unverified self-reported financial data</li>
                  <li>• Offers an informal ballpark estimate of budget</li>
                  <li>• Carries minimal weight with San Diego listing agents</li>
                </ul>
              </div>

              {/* PRE-APPROVAL */}
              <div className="border border-brand-200 bg-brand-50 rounded-3xl p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Fully Underwritten Pre-approval
                </h3>

                <ul className="mt-5 space-y-4 text-gray-600">
                  <li>• Involves verified tax returns, W-2s, and bank files</li>
                  <li>• Confirms exact purchasing power and loan terms</li>
                  <li>• Signals to sellers that your offer is rock-solid</li>
                </ul>
              </div>
            </div>

            <p className="mt-7">
              A fully underwritten pre-approval letter allows you to write
              competitive offers the moment the right home hits the market.
            </p>
          </section>

          {/* STEP 3 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                3
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Explore Down Payment Assistance (DPA) Programs
              </h2>
            </div>

            <p className="mt-6">
              A common myth among first-time buyers is that you need a 20%
              down payment to buy a home. In reality, conventional loans
              require as little as 3% down, and FHA loans require 3.5% down.
            </p>

            <p className="mt-5">
              Furthermore, state and local government assistance programs help
              qualified buyers cover initial costs:
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  CalHFA MyHome Assistance
                </h3>

                <p className="mt-2">
                  California&apos;s statewide flagship program offers deferred
                  junior loans covering up to 3% to 3.5% of the purchase price
                  to assist with your down payment.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  San Diego Housing Commission (SDHC) Programs
                </h3>

                <p className="mt-2">
                  For buyers purchasing within San Diego city limits (921 ZIP
                  codes), the SDHC offers dedicated down payment loans and
                  closing cost assistance grants tailored to low- and
                  middle-income households.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  County of San Diego Downpayment & Closing Cost Assistance
                  (DCCA)
                </h3>

                <p className="mt-2">
                  Designed for buyers purchasing in unincorporated areas or
                  participating cities outside the city core.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 4 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                4
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Account for Closing Costs (2% to 3%)
              </h2>
            </div>

            <p className="mt-6">
              In addition to your down payment, you must budget for closing
              costs. In San Diego County, closing costs typically range
              between 2% and 3% of the purchase price.
            </p>

            <p className="mt-5">
              These third-party administrative and lender charges cover the
              mechanics of transferring property ownership:
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Escrow & Title Fees
                </h3>

                <p className="mt-2">
                  Pays the neutral third-party escrow company and secures title
                  insurance to protect against past ownership defects.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Lender Origination & Appraisal
                </h3>

                <p className="mt-2">
                  Fees for processing your loan and verifying the home&apos;s fair
                  market value.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Prepaid Expenses
                </h3>

                <p className="mt-2">
                  Upfront contributions to establish your escrow impound
                  account for future property taxes and homeowner&apos;s insurance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Recording & Transfer Taxes
                </h3>

                <p className="mt-2">
                  Local county fees required to officially record your grant
                  deed.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 5 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                5
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Navigate Home Inspections & Escrow
              </h2>
            </div>

            <p className="mt-6">
              Once your offer is accepted, you enter escrow—a period that
              usually lasts 21 to 30 days. During this time, your main priority
              is complete physical due diligence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              <div className="rounded-2xl bg-cream-50 p-5 font-semibold text-gray-800">
                Roof, Structure & Plumbing
              </div>

              <div className="rounded-2xl bg-cream-50 p-5 font-semibold text-gray-800">
                Sewer Scope (Pipe Condition)
              </div>

              <div className="rounded-2xl bg-cream-50 p-5 font-semibold text-gray-800">
                HVAC, Electrical & Moisture
              </div>

              <div className="rounded-2xl bg-cream-50 p-5 font-semibold text-gray-800">
                Termite / Pest Inspection
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-10">
              Essential Inspections in San Diego
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">
                  General Home Inspection
                </h4>

                <p className="mt-2">
                  Evaluates the overall structural integrity, roof, electrical
                  panel, plumbing, and HVAC systems.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Wood-Destroying Pest (Termite) Inspection
                </h4>

                <p className="mt-2">
                  Crucial in Southern California, where drywood termites and
                  wood rot are common.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Sewer Lateral Scope
                </h4>

                <p className="mt-2">
                  A specialized camera inspection of the main line running
                  from the house to the street sewer—especially recommended for
                  homes built before 1980.
                </p>
              </div>
            </div>

            <p className="mt-7">
              If significant defects are discovered, your real estate agent
              will negotiate on your behalf to request seller repairs, price
              credits, or price reductions before your contingencies are
              removed.
            </p>
          </section>

          {/* STEP 6 */}
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-bold">
                6
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Close Escrow & Get Your Keys!
              </h2>
            </div>

            <p className="mt-6">
              After your loan receives final underwriting approval (&quot;Clear to
              Close&quot;), you will sign your final loan documents, wire your
              remaining closing funds, and the county recorder will record your
              deed. Once recorded, the keys are officially handed over, and you
              are a San Diego homeowner!
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-brand-800 p-7 sm:p-10 lg:p-12 text-center text-white">
          <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Start Your Homeownership Journey
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
            Take the First Step Toward Homeownership Today
          </h2>

          <p className="text-white/75 mt-4 max-w-2xl mx-auto leading-relaxed">
            Navigating the San Diego real estate market doesn&apos;t have to be
            stressful. Having an experienced local expert in your corner
            ensures you avoid costly mistakes and find the perfect home for
            your budget.
          </p>

          <p className="text-white font-semibold mt-5">
            Ready to build your personal strategy?
          </p>

          <a
            href="/#consultation-form"
            className="inline-flex items-center justify-center mt-7 bg-white text-brand-800 px-6 sm:px-8 py-3.5 rounded-full font-semibold hover:bg-brand-50 transition-colors"
          >
            Click Here to Schedule a Free 15-Minute Homebuyer Strategy Call
          </a>

          <p className="text-white/65 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Let&apos;s review your goals, analyze your buying power, and build a
            customized roadmap for your San Diego home search!
          </p>
        </div>

        {/* BACK TO BLOG */}
        <div className="text-center mt-10">
          <a
            href="/#blog"
            className="text-brand-700 font-semibold hover:text-brand-900 transition-colors"
          >
            ← Back to Real Estate Insights
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
