import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SanDiegoLivingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/blog-living-san-diego.jpeg"
            alt="Living in San Diego County"
            className="w-full h-full object-cover"
          />

          {/* Overall dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Strong left-side gradient for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/15" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />
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
              San Diego Living
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mt-4 text-white drop-shadow-lg">
              The Ultimate Guide to Living in San Diego County
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mt-6 max-w-3xl drop-shadow-md">
              Discover the lifestyle, neighborhoods, transportation, outdoor
              recreation, dining and communities that make San Diego County
              unique.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        {/* Introduction */}
        <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
          <p>
            From 70 miles of sun-drenched coastline to bustling tech hubs and
            scenic mountain foothills, San Diego County offers a lifestyle that
            few places in the world can match. Known as &quot;America&apos;s Finest
            City,&quot; this dynamic region is far more than just a vacation
            destination—it is a collection of distinct communities, each
            offering its own unique charm, architectural style, and pace of
            life.
          </p>

          <p className="mt-5">
            Whether you are planning a local move or relocating from across the
            country, this comprehensive guide covers everything you need to
            know about living, working, and thriving in San Diego County.
          </p>

          {/* THE SAN DIEGO VIBE */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            The San Diego Vibe: Laid-Back Luxury Meets Innovation
          </h2>

          <p className="mt-5">
            San Diego’s lifestyle is rooted in outdoor living, wellness, and a
            relaxed yet driven culture. The region seamlessly balances a
            thriving business economy—anchored by biotechnology, defense,
            action sports, and tech innovation—with a health-conscious, active
            daily routine.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Outdoor-Centric Routine
              </h3>

              <p className="mt-3">
                Year-round temperatures averaging 72°F (22°C) mean weekends are
                spent surfing, hiking coastal bluffs, golfing, or dining
                outdoors.
              </p>
            </div>

            <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Neighborhood Diversity
              </h3>

              <p className="mt-3">
                You can surf in Pacific Beach in the morning, tour art
                galleries in North Park by afternoon, and enjoy world-class
                dining in Little Italy by evening.
              </p>
            </div>

            <div className="rounded-3xl bg-cream-50 border border-gray-100 p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Work-Life Harmony
              </h3>

              <p className="mt-3">
                Even in corporate centers like Sorrento Valley or UTC, the
                atmosphere remains warm, approachable, and balanced.
              </p>
            </div>
          </div>

          {/* PROPERTY TYPES */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Key Property Types Across the County
          </h2>

          <div className="mt-8 space-y-5">
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Coastal Luxury & Condos
              </h3>

              <p className="mt-3">
                High-rise luxury condos in Downtown San Diego and historic
                oceanfront estates in La Jolla, Del Mar, and Coronado.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Urban Character Homes
              </h3>

              <p className="mt-3">
                Historic 1920s Craftsman bungalows and Spanish Revival homes
                throughout Central San Diego enclaves like Mission Hills and
                Burlingame.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Suburban Master-Planned Communities
              </h3>

              <p className="mt-3">
                Spacious single-family homes with resort-style amenities,
                expansive parks, and top-rated schools in areas like Carmel
                Valley, Rancho Peñasquitos, 4S Ranch, and San Marcos.
              </p>
            </div>
          </div>

          {/* TRANSPORTATION */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Navigating Commutes & Transportation
          </h2>

          <p className="mt-5">
            San Diego County covers over 4,200 square miles, making
            transportation a key consideration when selecting your ideal
            neighborhood.
          </p>

          <h3 className="font-serif text-2xl font-bold text-gray-900 mt-9">
            Major Commute Corridors
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900">
                Interstate 5 (Coastal)
              </h4>

              <p className="mt-2">
                Connects North County coastal towns (Carlsbad, Encinitas)
                directly to Downtown San Diego, Sorrento Valley, and UC San
                Diego.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Interstate 15 (Inland Hub)
              </h4>

              <p className="mt-2">
                The primary north-south artery for inland communities like
                Poway, Rancho Bernardo, and Escondido.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Route 56 (Local Connector)
              </h4>

              <p className="mt-2">
                Seamlessly bridges Inland North County (I-15) to Coastal North
                County (I-5).
              </p>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-gray-900 mt-10">
            Transit Alternatives
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900">
                Coaster Train
              </h4>

              <p className="mt-2">
                A scenic commuter rail running along the coast from Oceanside
                to Downtown San Diego.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Trolley System
              </h4>

              <p className="mt-2">
                Provides light-rail service connecting Downtown, SDSU, Mission
                Valley, UTC, and the U.S.–Mexico border at San Ysidro.
              </p>
            </div>
          </div>

          {/* PARKS */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Top Parks & Outdoor Recreation
          </h2>

          <p className="mt-5">
          San Diego is an outdoor enthusiast&apos;s paradise, offering thousands
            of acres of preserved natural space.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Balboa Park
              </h3>

              <p className="mt-2">
                Larger than Central Park in NYC, this cultural hub features 17
                museums, lush botanical gardens, performing arts venues, and the
                world-famous San Diego Zoo.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Torrey Pines State Natural Reserve
              </h3>

              <p className="mt-2">
                Offers stunning coastal bluffs, rare Torrey pine trees, and
                hiking trails overlooking the Pacific Ocean.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Mission Trails Regional Park
              </h3>

              <p className="mt-2">
                Over 8,000 acres of rugged hiking and mountain biking trails,
                including the popular summit hike up Cowles Mountain.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Mission Bay Park
              </h3>

              <p className="mt-2">
                The largest man-made aquatic park in the country, ideal for
                paddleboarding, sailing, jet-skiing, and family picnics.
              </p>
            </div>
          </div>

          {/* CULINARY */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Culinary Scene: Craft Beer, Farm-to-Table & Baja-Med
          </h2>

          <p className="mt-5">
            San Diego’s food scene has evolved into a nationally recognized
            culinary power. Influenced by its coastal access and proximity to
            Mexico, the region offers an exceptional variety of dining
            experiences.
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Baja-Med & Authentic Mexican
              </h3>

              <p className="mt-2">
                From Michelin-recognized tacos in Barrio Logan to elevated
                Mexican dining in La Jolla, fresh mariscos and craft tortillas
                are local staples.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Little Italy
              </h3>

              <p className="mt-2">
                San Diego’s top culinary neighborhood, packed with patio dining,
                celebrity-chef concepts, artisanal bakeries, and a famous
                weekly Farmers&apos; Market.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                The Craft Beer Capital
              </h3>

              <p className="mt-2">
                Home to over 150 independent craft breweries, including
                pioneers like Stone Brewing, Ballast Point, and Pizza Port.
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Local School Districts & Education
          </h2>

          <p className="mt-5">
            For families relocating to San Diego County, educational quality is
            frequently a top priority. The region boasts several nationally
            recognized public school districts alongside premier private
            institutions.
          </p>

          <h3 className="font-serif text-2xl font-bold text-gray-900 mt-9">
            Top Public School Districts
          </h3>

          <div className="mt-6 space-y-5">
            <div>
              <h4 className="font-semibold text-gray-900">
                Poway Unified (PUSD)
              </h4>

              <p className="mt-1">
                Rancho Bernardo, Poway, 4S Ranch (Top STEM).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                San Dieguito Union High (SDUHSD)
              </h4>

              <p className="mt-1">
                Encinitas, Del Mar, Carmel Valley (Arts/Academic).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Carlsbad Unified (CUSD)
              </h4>

              <p className="mt-1">
                Coastal & Inland Carlsbad (Tech & Pathways).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                San Marcos Unified (SMUSD)
              </h4>

              <p className="mt-1">
                San Marcos, Elijo Hills (Modern Facilities).
              </p>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-gray-900 mt-10">
            Higher Education Highlights
          </h3>

          <p className="mt-5">
            San Diego is also a higher-education powerhouse, anchored by UC San
            Diego (UCSD) in La Jolla, San Diego State University (SDSU) in
            College Area, and the University of San Diego (USD) in Linda Vista.
          </p>

          {/* NEIGHBORHOOD */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-14">
            Find Your Ideal San Diego Neighborhood
          </h2>

          <p className="mt-5">
            Every corner of San Diego County offers a distinct lifestyle, price
            point, and community atmosphere. Whether you&apos;re searching for a
            coastal retreat, an urban condo, or a spacious family home in a top
            school district, having expert local guidance makes all the
            difference.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-brand-800 p-7 sm:p-10 lg:p-12 text-center text-white">
          <p className="text-brand-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Ready to Start?
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
            Ready to Start Your San Diego Home Search?
          </h2>

          <p className="text-white/75 mt-4 max-w-2xl mx-auto leading-relaxed">
            Get direct access to neighborhood market reports, customized
            property lists tailored to your lifestyle and budget.
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