// src/pages/ServiceDetail.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt,
  FaTruckMoving,
  FaUsers,
  FaRegSmileBeam,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaBoxOpen,
} from "react-icons/fa";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.path.endsWith(serviceSlug));

  if (!service) {
    return (
      <div className="text-center py-24 text-[#E10600] text-xl font-semibold">
        Service not found.
      </div>
    );
  }

  const { name, image, icon: Icon, description, features } = service;

  return (
    <section className="mt-24 min-h-screen bg-[#F4F4F4]">

      {/* ================= HERO HEADER ================= */}
      <div className="bg-gradient-to-r from-[#0F0F0F] to-[#2A2A2A] py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center text-white"
        >
          <p className="text-xs sm:text-sm text-[#E10600] mb-2">
            <Link to="/" className="hover:underline">Home</Link> / {name}
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            {name}
          </h1>

          <p className="text-sm sm:text-base text-[#E0E0E0] max-w-3xl mx-auto">
            Reliable, secure, and professional relocation solutions by{" "}
            <span className="text-[#E10600] font-semibold">
              Mathura Packers & Movers
            </span>
          </p>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        {/* IMPORTANT: items-stretch ensures equal column height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* IMAGE SECTION — MATCHES RIGHT HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E0E0E0]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              <Icon className="absolute bottom-4 right-4 text-[#E10600] text-5xl opacity-30" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="h-full bg-[#FFFFFF] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-6 border border-[#E0E0E0]">

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#F4F4F4]">
                  <Icon className="text-[#E10600] text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#111111]">
                  {name}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                {description}
              </p>

              {/* WHY CHOOSE */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0F0F0F] mb-3">
                  Why Choose Mathura Packers & Movers
                </h3>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#111111]"
                    >
                      <FaCheckCircle className="text-[#1FAA59] mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EXTRA STATIC FEATURES */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: FaBoxOpen, text: "Premium Packing Materials" },
                  { icon: FaShieldAlt, text: "100% Damage Protection" },
                  { icon: FaClock, text: "On-Time Delivery Promise" },
                  { icon: FaMapMarkedAlt, text: "Pan India Coverage" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#F4F4F4] rounded-lg p-3"
                  >
                    <item.icon className="text-[#E10600]" />
                    <span className="text-sm text-[#111111] font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA STICKS TO BOTTOM */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                  bg-[#2A2A2A] text-white hover:bg-[#0F0F0F] transition-all"
                >
                  <FaArrowLeft />
                  Back
                </Link>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                  bg-[#E10600] text-white hover:bg-[#B30400] transition-all shadow-md"
                >
                  <FaPhoneAlt />
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= TRUST STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { icon: FaTruckMoving, title: "5000+ Successful Moves" },
            { icon: FaUsers, title: "Happy & Trusted Clients" },
            { icon: FaClock, title: "On-Time Delivery" },
            { icon: FaShieldAlt, title: "Safety Guaranteed" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 text-center border border-[#E0E0E0]"
            >
              <item.icon className="text-[#E10600] text-3xl mx-auto mb-2" />
              <h4 className="text-sm sm:text-base font-semibold text-[#111111]">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            "Expert Packing Team",
            "Careful Handling",
            "Transparent Pricing",
            "24×7 Customer Support",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-[#0F0F0F] text-white rounded-xl p-5 text-center hover:bg-[#2A2A2A] transition-all"
            >
              <FaRegSmileBeam className="text-[#E10600] text-2xl mx-auto mb-2" />
              <h4 className="text-sm sm:text-base font-medium">{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
