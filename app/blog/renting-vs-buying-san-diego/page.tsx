import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RentingVsBuyingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-end overflow-hidden">
        <img
          src="/images/renting-vs-buying-san-diego.jpeg"
          alt="Renting versus buying a home in San Diego County"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
            <a
              href="/#blog"
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              ← Back to Blog
            </a>

            <p className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
              Buying vs. Renting
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-[1.05] max-w-5xl">
              Renting vs. Buying in San Diego County: What Your Monthly
              Payment Actually Buys You
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl mt-6 max-w-3xl leading-relaxed">
              Understand the monthly costs, equity considerations and
              long-term factors to evaluate when comparing renting with
              homeownership.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* INTRO */}
        <section>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            It’s one of the most persistent debates for Southern California
            residents: Should I keep paying rent or buy a home?
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            With the median monthly rent in San Diego County hovering around
            $2,950 to $3,200 for a two-bedroom apartment and single-family
            median home prices sitting near $930,000 to $960,000, comparing
            the two is rarely an apples-to-apples exercise. On paper, renting
            can look like the lower monthly outlay. But looking strictly at
            the monthly sticker price misses the bigger picture: what your
            money actually accomplishes.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Here is an honest, transparent breakdown of where your monthly
            dollar goes when renting versus buying in San Diego County,
            including the hidden costs, long-term equity dynamics, and tax
            implications.
          </p>
        </section>

        {/* RENT */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            What a $3,200 Rent Check Actually Buys You
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            When you write a rent check in San Diego, 100% of that payment
            goes toward housing usage, landlord profit, and property
            maintenance.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
            <div className="bg-brand-800 text-white px-5 py-4 font-semibold">
              Where Your Rent Dollar Goes
            </div>

            <div className="divide-y divide-gray-200">
              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Housing Consumption</strong>
                <span className="text-gray-600">
                  100% of your payment funds short-term shelter
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Equity Built</strong>
                <span className="text-gray-600">
                  $0.00 — You build 100% equity for your landlord
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Tax Deductions</strong>
                <span className="text-gray-600">
                  $0.00 — Standard rent payments offer zero tax leverage
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Future Price Stability</strong>
                <span className="text-gray-600">
                  None — Subject to annual California AB 1482 rent hikes
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RENT INFLATION */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            The Unseen Cost of Rent Inflation
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            Under California’s Tenant Protection Act (AB 1482), annual rent
            increases for covered properties are capped at 5% plus local CPI
            (capped at 10% total).
          </p>

          <p className="text-gray-600 leading-relaxed mt-5">
            Even at a modest 4% annual rent increase:
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-cream-50 p-5">
              <p className="text-sm text-gray-500">Year 1 Rent</p>
              <p className="font-serif text-2xl font-bold mt-2">
                $3,200/month
              </p>
              <p className="text-gray-600 mt-1">$38,400/year</p>
            </div>

            <div className="rounded-2xl bg-cream-50 p-5">
              <p className="text-sm text-gray-500">Year 5 Rent</p>
              <p className="font-serif text-2xl font-bold mt-2">
                $3,743/month
              </p>
              <p className="text-gray-600 mt-1">$44,916/year</p>
            </div>

            <div className="rounded-2xl bg-cream-50 p-5">
              <p className="text-sm text-gray-500">Year 10 Rent</p>
              <p className="font-serif text-2xl font-bold mt-2">
                $4,554/month
              </p>
              <p className="text-gray-600 mt-1">$54,648/year</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mt-6">
            Over 10 years, you will have paid over $460,000 in rent—with zero
            residual assets or financial return to show for it.
          </p>
        </section>

        {/* MORTGAGE */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            What a $4,500 Mortgage Payment Actually Buys You
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            At first glance, a monthly mortgage payment of $4,500 on a starter
            home or condo appears higher than rent. However, a mortgage
            payment is not a single expense—it is a structured forced-savings
            and wealth-building mechanism.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
            <div className="bg-brand-800 text-white px-5 py-4 font-semibold">
              Breakdown of a Monthly Mortgage Payment
            </div>

            <div className="divide-y divide-gray-200">
              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Expenses (Sunk Costs)</strong>
                <span className="text-gray-600">
                  Interest to Lender, Property Taxes &amp; Insurance
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 px-5 py-4">
                <strong>Asset Accumulation</strong>
                <span className="text-gray-600">
                  Principal Reduction (Forced Savings), Long-Term Wealth &amp;
                  Home Equity
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPAL */}
        <section className="mt-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            1. Principal Reduction (Forced Savings)
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            Every month, a portion of your mortgage payment directly reduces
            your loan balance. While early mortgage payments lean heavily
            toward interest, a typical $4,500 monthly payment immediately
            returns $600 to $900+ per month back into your net worth as
            principal equity.
          </p>
        </section>

        {/* APPRECIATION */}
        <section className="mt-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            2. Appreciation &amp; Wealth Building
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            Over the past 30 years, San Diego County real estate has
            historically appreciated at an average rate of 4% to 6% annually.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            On a $800,000 home, a 4% annual appreciation rate adds $32,000 in
            home equity in Year 1 alone—wealth that accrues directly to you,
            not a landlord.
          </p>
        </section>

        {/* TAX */}
        <section className="mt-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            3. Tax Advantage &amp; Interest Deductions
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            As a primary homeowner, current federal tax law allows you to
            deduct mortgage interest on loan balances up to $750,000, along
            with state and local property tax (SALT) deductions (subject to
            current IRS caps). For high-earning households in California,
            these tax write-offs significantly lower your net effective
            monthly housing cost.
          </p>
        </section>

        {/* HIDDEN COSTS */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            The Honest Breakdown: Hidden Homeownership Costs
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            To give you a completely transparent picture, homeownership comes
            with ongoing expenses that renters never see. When evaluating your
            buying budget, you must factor in these three key costs:
          </p>
        </section>

        {/* TAXES */}
        <section className="mt-10 rounded-3xl bg-cream-50 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-gray-900">
            1. Property Taxes (Mello-Roos &amp; Local Bonds)
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            Base property taxes in California are capped at 1% of assessed
            value under Proposition 13, plus local voter-approved bonds
            (typically bringing the base rate to 1.2% – 1.25%).
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Example: On a $850,000 home, expect roughly $880 to $900/month in
            property taxes.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Note: In newer master-planned communities (such as Otay Ranch,
            Carmel Valley, or 4S Ranch), check for Mello-Roos special taxes,
            which can add 200–500+/month.
          </p>
        </section>

        {/* HOA */}
        <section className="mt-6 rounded-3xl bg-cream-50 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-gray-900">
            2. HOA (Homeowners Association) Fees
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            If you purchase a condo, townhome, or property in a planned
            community, HOA dues range from $250 to $600+/month. These fees
            cover common area maintenance, exterior building insurance,
            trash, landscaping, and community amenities (pools, fitness
            centers).
          </p>
        </section>

        {/* MAINTENANCE */}
        <section className="mt-6 rounded-3xl bg-cream-50 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-gray-900">
            3. Home Maintenance Reserve
          </h3>

          <p className="text-gray-600 leading-relaxed mt-4">
            A good rule of thumb is to budget 1% of the home&apos;s value annually
            for ongoing maintenance (roof repair, plumbing upgrades, exterior
            painting, appliances). On an $800,000 single-family home, set
            aside ~$650/month into a home maintenance reserve fund.
          </p>
        </section>

        {/* COMPARISON */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Side-by-Side: 10-Year Financial Comparison
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            Assuming a $3,200 initial monthly rent vs. purchasing an $800,000
            starter home/condo:
          </p>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-5 py-4">Financial Metric</th>
                  <th className="px-5 py-4">Renting (10-Year Projection)</th>
                  <th className="px-5 py-4">Owning (10-Year Projection)</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Out-of-Pocket Payments
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    ~$460,000 spent on rent
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    ~$540,000 paid toward housing
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Rent Inflation Risk
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    Subject to annual increases
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    Principal &amp; Interest fixed for 30 years
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Principal Paid Down
                  </td>
                  <td className="px-5 py-4 text-gray-600">$0</td>
                  <td className="px-5 py-4 text-gray-600">
                    ~$120,000+ in forced savings
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Appreciation Gain (at 4% avg)
                  </td>
                  <td className="px-5 py-4 text-gray-600">$0</td>
                  <td className="px-5 py-4 text-gray-600">
                    ~$380,000+ in equity growth
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Net Wealth Created
                  </td>
                  <td className="px-5 py-4 text-gray-600">$0</td>
                  <td className="px-5 py-4 text-gray-600">
                    ~$500,000+ total equity wealth
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* BOTTOM LINE */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            The Bottom Line
          </h2>

          <p className="text-gray-600 leading-relaxed mt-5">
            Renting offers flexibility and short-term lower payments. But in
            a high-appreciation market like San Diego County, renting long-term
            means missing out on the primary engine of middle-class wealth
            building in California: real estate equity.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-14 bg-brand-800 rounded-3xl p-7 sm:p-10 text-center text-white">
          <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
            Rent vs. Own Analysis
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
            Want to See Your Exact Rent vs. Own Numbers?
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto mt-4 leading-relaxed">
            General numbers are helpful, but your personal financial situation
            is unique. Your optimal choice depends on your tax bracket, down
            payment savings, target San Diego ZIP codes, and length of time
            you plan to stay in the home.
          </p>

          <a
            href="/#consultation-form"
            className="inline-flex items-center justify-center mt-6 bg-white text-brand-800 px-6 sm:px-7 py-3.5 rounded-full font-semibold hover:bg-brand-50 transition-colors"
          >
            Schedule a Free 15-Minute Call →
          </a>

          <p className="text-white/65 text-sm mt-5">
            Receive a side-by-side financial breakdown showing your exact
            monthly payments, potential tax savings, and a 5-year wealth
            projection tailored to your personal budget.
          </p>

          <a
            href="/#consultation-form"
            className="inline-flex items-center justify-center mt-5 border border-white/30 text-white px-6 sm:px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Schedule a Free 15-Minute Homebuyer Strategy Call →
          </a>
        </section>

        {/* DISCLAIMER */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-8">
          This article is for general informational purposes only and does not
          constitute financial, tax, legal, lending, or investment advice.
          Mortgage rates, taxes, rents, home values, tax rules and other
          figures can change. Consult qualified professionals regarding your
          individual circumstances.
        </p>

        <div className="text-center mt-8">
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
