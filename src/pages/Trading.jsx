import React from "react";
import about from "../assets/about3.png";

const Trading = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative mt-8 py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#ffac1c] rounded-full text-sm font-semibold">
            Global Trading Solutions
          </span>

          <h1 className="mt-6 text-2xl lg:text-5xl md:text-6xl font-bold text-white">
            Connecting Businesses Across
            <span className="text-[#ffac1c]"> International Markets</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            Shambhu Corporation facilitates seamless global trade by connecting
            manufacturers, suppliers, distributors, and buyers through trusted
            business networks and strategic market expertise.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={about}
                alt="Global Trading"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <span className="text-[#ffac1c] font-semibold uppercase tracking-wider">
                International Trade
              </span>

              <h2 className="mt-4 text-2xl lg:text-5xl font-bold text-slate-900">
                Expanding Business Beyond <span className="text-[#ffac1c]"> Borders</span>
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                We help businesses unlock growth opportunities in international
                markets by establishing strong trade connections across multiple
                countries. Our expertise in global commerce enables smooth
                transactions, market penetration, and long-term business
                expansion.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Through our extensive network of partners and distributors, we
                facilitate efficient sourcing, procurement, and movement of
                goods while ensuring compliance with international trade
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#ffac1c] font-semibold uppercase tracking-wider">
                Distribution Excellence
              </span>

              <h2 className="mt-4 text-2xl lg:text-5xl font-bold text-slate-900">
                Building Strong Global <span className="text-[#ffac1c]">Distribution</span> Networks
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Our distribution-focused approach helps brands strengthen their
                presence in domestic and international markets. We work closely
                with manufacturers, wholesalers, retailers, and channel
                partners to ensure products reach customers efficiently.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                With over two decades of industry experience, we develop
                sustainable distribution strategies that improve market reach,
                optimize supply chains, and drive profitable growth.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={about}
                alt="Distribution Network"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={about}
                alt="Business Development"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <span className="text-[#ffac1c] font-semibold uppercase tracking-wider">
                Strategic Business Development
              </span>

              <h2 className="mt-4 text-2xl lg:text-5xl font-bold text-slate-900">
                Creating  <span className="text-[#ffac1c]">Sustainable</span> Global Partnerships
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                At Shambhu Corporation, we focus on building long-term business
                relationships that create value for suppliers, distributors,
                government organizations, and corporate clients worldwide.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                From market research and product positioning to sales strategy
                and channel development, our team delivers tailored solutions
                that help businesses establish a strong global footprint and
                achieve sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default Trading;