import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTruckMoving,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaBoxes,
  FaRoute,
  FaWarehouse,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ───────── HEADER ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 rounded-full text-xs font-semibold bg-[#E10600]/10 text-[#E10600]">
            <FaShieldAlt />
            About Mathura Packers & Movers
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F0F] leading-tight">
            Relocation Built on Trust,<br className="hidden sm:block" />
            Powered by Experience
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
            We are a customer-focused relocation company delivering safe,
            reliable, and stress-free moving solutions across India. Every move
            is carefully planned, professionally executed, and personally
            supervised to ensure complete peace of mind.
          </p>
        </motion.div>

        {/* ───────── STATS STRIP ───────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {[
            { value: "20+", label: "Years of Expertise" },
            { value: "10,000+", label: "Successful Moves" },
            { value: "100%", label: "Customer Commitment" },
            { value: "Pan India", label: "Service Coverage" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E0E0E0] bg-[#F4F4F4] p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#E10600]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-[#5F5F5F]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ───────── STORY & PILLARS ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#0F0F0F] mb-5">
              Our Story & Legacy
            </h3>

            <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
              Mathura Packers & Movers was established with a simple yet powerful
              goal — to remove uncertainty and stress from the relocation
              process. Guided by <strong>Mr. Satish Singh</strong>, whose
              experience spans more than two decades, the company has evolved
              into a trusted relocation partner for households, businesses, and
              industries.
            </p>

            <p className="mt-4 text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
              Our growth is driven by disciplined processes, skilled manpower,
              modern logistics practices, and an uncompromising focus on safety,
              punctuality, and transparency.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E10600] hover:gap-3 transition-all"
              >
                Explore Our Work
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: FaUsers, label: "Skilled Workforce" },
              { icon: FaTruckMoving, label: "Modern Fleet" },
              { icon: FaShieldAlt, label: "Certified Operations" },
              { icon: FaHandshake, label: "Customer-First Approach" },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl border border-[#E0E0E0] bg-[#F4F4F4] hover:bg-white hover:shadow-lg transition"
              >
                <item.icon className="text-[#E10600] text-2xl mb-2" />
                <h4 className="text-sm font-semibold text-[#111111]">
                  {item.label}
                </h4>
                <p className="mt-1 text-xs text-[#5F5F5F]">
                  Professional standards maintained at every step
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ───────── SERVICES SNAPSHOT ───────── */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-center text-[#0F0F0F] mb-10">
            Complete Relocation Solutions
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { icon: FaBoxes, label: "Home Shifting" },
              { icon: FaCogs, label: "Office Relocation" },
              { icon: FaTruckMoving, label: "Vehicle Transport" },
              { icon: FaRoute, label: "Intercity Relocation" },
              { icon: FaUsers, label: "Local Shifting" },
              { icon: FaWarehouse, label: "Storage & Warehousing" },
              { icon: FaShieldAlt, label: "Premium Packing" },
              { icon: FaCheckCircle, label: "Damage-Free Handling" },
            ].map((service, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#F4F4F4] border border-[#E0E0E0] hover:bg-white hover:shadow-md transition"
              >
                <service.icon className="text-[#E10600] text-2xl group-hover:scale-110 transition" />
                <span className="text-sm font-semibold text-[#111111]">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── TRUST SECTION ───────── */}
        <div className="bg-[#0F0F0F] rounded-3xl p-10 sm:p-14 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Why Customers Trust Us
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our reputation is built on certified operations, transparent
            processes, skilled professionals, premium materials, and a deep
            understanding of what safe relocation truly means. We don’t just
            move goods — we move responsibility.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#E10600] text-white text-sm font-semibold hover:bg-[#B30400] transition"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/certificates"
              className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white hover:text-[#0F0F0F] transition"
            >
              Our Certifications
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
