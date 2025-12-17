// src/components/CertificatesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaShieldAlt,
  FaFileInvoice,
  FaHandshake,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import certBg from "../assets/images/certi.avif";

export default function CertificatesHero() {
  return (
    <section
      className="relative py-8 mt-28 sm:mt-28 w-full min-h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${certBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/70"></div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#E10600]/15 text-[#E10600]">
            Our Certifications & Compliance
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-snug sm:leading-tight mb-4">
            Certified & Trusted  
            <span className="block ">
              Packers & Movers in Mathura
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-7 max-w-2xl">
            Mathura Packers & Movers operates as a fully registered and compliant
            relocation company. Our certifications reflect our commitment to
            safety, transparency, and professional service standards — ensuring
            complete peace of mind for every customer.
          </p>

          {/* Certificate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-7">
            {/* GST */}
            <div className="flex gap-3 bg-[#2A2A2A]/85 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4">
              <FaFileInvoice className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  GST Registered
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Legal billing & tax compliance
                </p>
              </div>
            </div>

            {/* Government Approved */}
            <div className="flex gap-3 bg-[#2A2A2A]/85 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4">
              <FaCertificate className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Government Registered
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Recognized transport service
                </p>
              </div>
            </div>

            {/* Insurance & Safety */}
            <div className="flex gap-3 bg-[#2A2A2A]/85 border border-[#E0E0E0]/20 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
              <FaShieldAlt className="text-[#1FAA59] text-lg sm:text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Insured & Secure
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Goods safety & damage protection
                </p>
              </div>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center justify-center gap-2
                px-4 py-2.5 sm:px-6 sm:py-3
                rounded-full font-semibold
                text-white bg-[#E10600] hover:bg-[#B30400]
                transition shadow-md sm:shadow-lg
                text-xs sm:text-base
                whitespace-nowrap
              "
            >
              <FaCheckCircle />
              Verify Documents
            </motion.a>

            <motion.a
              href="tel:+918445421299"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center justify-center gap-2
                px-4 py-2.5 sm:px-6 sm:py-3
                rounded-full font-semibold
                text-[#E10600] bg-white hover:bg-[#F4F4F4]
                transition shadow-md sm:shadow-lg
                text-xs sm:text-base
                whitespace-nowrap
              "
            >
              <FaPhoneAlt />
              Call for Confirmation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
