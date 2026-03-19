"use client";

import Image from "next/image";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            What is{" "}
            <span className="text-[#c8a46a]">PravRaha</span> and <br />
            why PravRaha?
          </h1>

          <div className="w-20 h-1 bg-[#c8a46a] mt-4 mb-6 rounded"></div>

          <p className="text-gray-600 leading-relaxed mb-4">
            PravRaha, derived from the Sanskrit word meaning{" "}
            <span className="font-semibold text-[#c8a46a]">
              "High Quality,"
            </span>{" "}
            is a product-based technology company committed to delivering
            excellence through innovation.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our commitment to "High Quality" is embedded in our platform,
            every service we deliver, and every relationship we build—
            helping organizations achieve sustainable growth and competitive
            advantage.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="/business.jpg"
            alt="About PravRaha"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          {/* Glass Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg">
            <p className="text-sm text-white">
              Driving innovation with high-quality technology solutions.
            </p>
          </div>
        </div>
      </section>

  {/* WHAT WE OFFER (GLASS MORPHISM) */}
<section className="py-24 relative">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#c8a46a]/10 via-transparent to-[#6c8486]/10 blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative">
    <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
    <div className="w-20 h-1 bg-[#c8a46a] mx-auto mt-4 mb-14 rounded"></div>

    {/*  FIXED GRID */}
    <div className="grid md:grid-cols-2 gap-12 items-stretch">

      {/* Product Card */}
      <div className="relative group flex h-full">
        <div className="absolute inset-0 bg-[#c8a46a]/30 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300 overflow-hidden flex flex-col h-full w-full">
          
          {/* Top Border */}
          <div className="h-1 w-full bg-gradient-to-r from-[#c8a46a] to-yellow-300"></div>

          <div className="p-10 md:p-12 flex flex-col justify-between h-full text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#c8a46a]">
                Our Product
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                We offer a powerful AI-driven platform for B2B lead generation,
                combining extensive prospect data with automated multichannel
                outreach to consistently deliver high-quality, sales-ready leads
                and accelerate your revenue growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Card */}
      <div className="relative group flex h-full">
        <div className="absolute inset-0 bg-[#6c8486]/30 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

        <div className="relative bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300 overflow-hidden flex flex-col h-full w-full">
          
          {/* Top Border */}
          <div className="h-1 w-full bg-gradient-to-r from-[#6c8486] to-teal-300"></div>

          <div className="p-10 md:p-12 flex flex-col justify-between h-full text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#6c8486]">
                Our Services
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Alongside our platform, we offer expert technology and staffing
                services. We modernize applications, manage cloud infrastructure,
                and augment your teams with skilled professionals to drive
                success.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CORE VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 mb-12 rounded"></div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {
                title: "Innovation",
                desc: "We constantly evolve...",
                img: "/about1.jpg",
              },
              {
                title: "Customer Success",
                desc: "Your success is our success.",
                img: "/about2.jpg",
              },
              {
                title: "Data-Driven Results",
                desc: "Every decision is backed by data.",
                img: "/about4.jpg",
              },
              {
                title: "Transparency",
                desc: "We believe in open communication.",
                img: "/business.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transition"
              >
                <div className="relative h-40">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
                <div className="bg-[#6c8486] text-white p-4 text-left">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 mb-8 rounded"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Founded by seasoned technologists and sales leaders, PravRaha merges
            deep technical expertise with real-world sales experience.
          </p>

          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/products3.avif"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-gray-600 space-y-4 max-w-3xl mx-auto text-left">
            <p>
              Our team builds powerful AI-driven software that automates lead
              generation, simplifies outreach, and delivers clean, actionable
              data.
            </p>

            <p>
              PravRaha isn't just a platform, it's a{" "}
              <span className="text-[#c8a46a] font-semibold">
                technology powerhouse
              </span>{" "}
              dedicated to transforming how companies grow.
            </p>

            <p>
              Today, PravRaha stands as a trusted partner for companies that want
              to leverage cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

    </main>
  );
}