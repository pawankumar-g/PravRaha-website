"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does PravRaha offer?",
      answer:
        "PravRaha specializes in B2B Lead Generation, Technology Services (including custom software development, cloud solutions, and AI integration), and specialized Staffing services to help businesses scale efficiently.",
    },
    {
      question: "How can I get a consultation?",
      answer:
        "You can schedule a consultation by filling out the contact form on this page, sending us an email at support@pravraha.com, or calling us during business hours.",
    },
    {
      question: "Where are your offices located?",
      answer:
        "Our headquarters is in Scottsdale, Arizona, USA, and we have a global delivery center in Ranchi, Jharkhand, India.",
    },
    {
      question: "What makes your lead generation different?",
      answer:
        "Our lead generation is data-driven and highly targeted using advanced analytics and intent data.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-[#f7f7f7] text-gray-800">

      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Accelerate Your Growth with
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#c8a46a] mt-4">
            Targeted Lead Generation
          </h2>

          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-4 rounded"></div>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Whether you have a question, need a consultation, or want to discuss a project,
            our team is ready to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION (UPGRADED) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 rounded"></div>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* EMAIL */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#c8a46a]/10 text-[#c8a46a] mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-500 mt-2">General inquiries & support</p>
              <p className="mt-4 font-medium">support@pravraha.com</p>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#6c8486]/10 text-[#6c8486] mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-500 mt-2">Customer support</p>
              <p className="mt-4 font-medium">+1 (555) 123-4567</p>
            </div>

            {/* HOURS */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-200 text-gray-700 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p className="text-gray-500 mt-2">Availability</p>
              <p className="mt-4 font-medium">Mon - Fri: 9AM – 6PM</p>
            </div>

          </div>

          {/* COMPANY INFO PANEL */}
          <div className="mt-16 bg-gradient-to-r from-[#6c8486] to-[#4f6364] text-white rounded-3xl p-10 shadow-xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Pravraha Technologies
                </h3>

                <p className="text-white/90 leading-relaxed">
                  We are a product-focused company delivering scalable digital solutions
                  across global markets with strong expertise in lead generation and technology services.
                </p>

                <div className="mt-6 space-y-2 text-white/90">
                  <p><strong>Headquarters:</strong> Arizona, USA</p>
                  <p><strong>Delivery Center:</strong> Ranchi, India</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4">Quick Info</h4>

                <div className="space-y-3 text-sm">
                  <p><strong>Email:</strong> support@pravraha.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Hours:</strong> Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 mb-12 rounded"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#c8a46a] bg-white shadow-md"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#c8a46a]" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <div className="w-10 h-1 bg-[#c8a46a] mb-4 rounded"></div>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}