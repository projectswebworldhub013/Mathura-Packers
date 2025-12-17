// src/Components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="w-full bg-[#F4F4F4] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F0F0F] mb-4 flex items-center justify-center gap-3">
          <FaMapMarkedAlt className="text-[#E10600]" />
          Find Mathura Packers & Movers
        </h2>

        <p className="text-base sm:text-lg text-[#5F5F5F] mb-10 max-w-2xl mx-auto">
          Visit our Mathura office or get directions easily. We’re always ready
          to assist you with safe and reliable relocation services.
        </p>

        {/* Map Container */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#E0E0E0] bg-[#FFFFFF]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56637.371004277156!2d77.6841546!3d27.47437435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397373e23d7ecf5f%3A0x2ea151c7f4eaabe1!2sSurya%20Nagar%2C%20Mathura%2C%20Uttar%20Pradesh%20281004!3m2!1d27.4826062!2d77.65216029999999!5e0!3m2!1sen!2sin!4v1765957598165!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mathura Packers and Movers Location"
          ></iframe>

          {/* Accent Border Overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#2A2A2A]/10"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;
