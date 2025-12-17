// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import contactBg from "../assets/images/contact-hero.jpg"; // you can change if needed

export default function ContactHero() {
  return (
    <section
      className="relative py-8 mt-28 w-full min-h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/75"></div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#E10600]/15 text-[#E10600]">
            Get in Touch
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-snug sm:leading-tight mb-3 sm:mb-4">
            Contact Mathura Packers & Movers
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Have questions or planning a move? Our relocation experts are always
            ready to assist you with reliable guidance, transparent pricing, and
            prompt support — every step of the way.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex gap-3 bg-[#2A2A2A]/80 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4">
              <FaPhoneAlt className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Call Us Anytime
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  +91 84454 21299
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-[#2A2A2A]/80 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4">
              <FaEnvelope className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Email Support
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  info@mathurapackers.com
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-[#2A2A2A]/80 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Service Coverage
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Local & Pan India Relocation
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
            <motion.a
              href="#contactform"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center justify-center gap-1.5
                px-4 py-2.5 sm:px-6 sm:py-3
                rounded-full font-semibold
                text-white bg-[#E10600] hover:bg-[#B30400]
                transition shadow-md sm:shadow-lg
                text-xs sm:text-base
                whitespace-nowrap
              "
            >
              <FaCheckCircle className="text-sm sm:text-base" />
              Send Enquiry
            </motion.a>

            <motion.a
              href="tel:+918445421299"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center justify-center gap-1.5
                px-4 py-2.5 sm:px-6 sm:py-3
                rounded-full font-semibold
                text-[#E10600] bg-white hover:bg-[#F4F4F4]
                transition shadow-md sm:shadow-lg
                text-xs sm:text-base
                whitespace-nowrap
              "
            >
              <FaHeadset className="text-sm sm:text-base" />
              Call Support
            </motion.a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
