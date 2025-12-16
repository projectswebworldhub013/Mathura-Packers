// src/components/OwnerInfo.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaTruckMoving,
  FaUsers,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
//   {
//     icon: <FaTruckMoving />,
//     value: "10,000+",
//     label: "Successful Moves",
//   },
//   {
//     icon: <FaUsers />,
//     value: "8+ Years",
//     label: "Industry Experience",
//   },
  {
    icon: <FaShieldAlt />,
    value: "100%",
    label: "Safe Handling",
  },
  {
    icon: <FaMapMarkedAlt />,
    value: "PAN India",
    label: "Service Network",
  },
];

const OwnerInfo = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 overflow-hidden bg-[#F4F4F4]">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#E10600" stopOpacity="0.25" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#glowRed)"
            strokeWidth="4"
          >
            <animate
              attributeName="r"
              values="160;180;160"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="absolute -bottom-40 -right-40 z-0">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="glowDark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#2A2A2A" stopOpacity="0.25" />
            </radialGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="url(#glowDark)"
            strokeWidth="5"
          >
            <animate
              attributeName="r"
              values="140;160;140"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto bg-[#FFFFFF]/95 backdrop-blur-md 
        rounded-2xl shadow-2xl px-6 md:px-12 py-12 
        flex flex-col md:flex-row gap-10 border border-[#E0E0E0]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Owner Message */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center 
          border border-[#E0E0E0] bg-[#FFFFFF] shadow-lg 
          hover:shadow-2xl transition duration-500"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-[#E10600] text-4xl">
            <FaUserTie />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[#0F0F0F] mb-3">
            Message from the Owner
          </h2>

          <p className="text-[#5F5F5F] text-base md:text-lg italic mb-5 leading-relaxed">
            “At Mathura Packer and Mover, our mission is to deliver safe,
            reliable, and affordable relocation services across India.
            Every move is personally supervised to ensure your belongings
            reach their destination securely and on time.”
          </p>

          <p className="text-[#E10600] font-bold uppercase text-sm tracking-wide mb-2">
            — Mr. Satish Singh
          </p>

          <div className="text-[#5F5F5F] text-sm md:text-base space-y-2 mt-4">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#1FAA59]" />
              +91 84454 21299
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#1FAA59]" />
              info@mathurapackerandmover.com
            </p>
          </div>
        </motion.div>

        {/* Right: Trust + Stats + CTA */}
        <motion.div
          className="flex-1 w-full"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-4">
            Relocation You Can Trust
          </h2>

          <p className="text-[#5F5F5F] text-base md:text-lg mb-6">
            With years of hands-on experience, Mathura Packer and Mover has
            become a trusted name in household and commercial relocations.
            Our trained professionals handle packing, transportation, and
            delivery with precision, safety, and accountability.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FFFFFF] border border-[#E0E0E0] 
                rounded-xl p-4 text-center shadow-sm hover:shadow-md"
              >
                <div className="text-[#E10600] text-2xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0F0F0F]">
                  {stat.value}
                </h4>
                <p className="text-sm text-[#5F5F5F]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
  {/* Get in Touch */}
  <Link
    to="/contact"
    className="inline-flex items-center justify-center px-8 py-3 
    bg-[#E10600] text-white rounded-full 
    text-base md:text-lg font-semibold 
    hover:bg-[#B30400] hover:scale-105 
    transition-all duration-500 shadow-lg"
  >
    Get in Touch
  </Link>

  {/* Call Now */}
  <a
    href="tel:+918445421299"
    className="inline-flex items-center justify-center gap-2 px-8 py-3 
    border-2 border-[#E10600] text-[#E10600] rounded-full 
    text-base md:text-lg font-semibold 
    hover:bg-[#E10600] hover:text-white hover:scale-105 
    transition-all duration-500 shadow-md"
  >
    <FaPhoneAlt className="text-lg" />
    Call Now
  </a>
</div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default OwnerInfo;
