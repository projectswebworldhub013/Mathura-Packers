// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaBoxes, FaSmile } from "react-icons/fa";
import aboutImg from "../assets/images/about.jpg"; // Replace with actual Mathura Packers image
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#F4F4F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl relative z-10"
        >
          {/* Heading */}
          <div>
            <h2 className="text-[#0F0F0F] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              About <span className="text-[#E10600]">Mathura Packer & Mover</span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-[#5F5F5F] text-sm sm:text-base md:text-base lg:text-base leading-relaxed tracking-wide">
              Mathura Packer & Mover is a trusted and professionally managed relocation service provider in Northern India, known for reliability and a stress-free moving experience. 
              With over two decades of hands-on expertise under the leadership of 
              <span className="font-semibold text-[#E10600]"> Mr. Satish Singh</span>, we ensure that every relocation — homes, offices, vehicles, or valuable goods — is handled with utmost care and precision.
            </p>

        
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-6 flex  sm:flex-row sm:justify-start gap-4 sm:gap-4 items-center sm:items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className=" sm:w-auto px-5 py-2.5 bg-[#E10600] hover:bg-[#B30400] text-white font-semibold rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 text-sm sm:text-base text-center"
            >
              Get a free Quote
            </Link>
            <Link
              to="/about"
              className="sm:w-auto px-5 py-2.5 border border-[#2A2A2A] text-[#111111] rounded-full hover:bg-[#E10600] hover:text-white transition-colors duration-300 text-sm sm:text-base text-center"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-2xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition"
            >
              <FaTruckMoving className="text-[#E10600] text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#111111]">20+ Yrs</h3>
              <p className="text-[#5F5F5F] text-xs sm:text-sm mt-1">Industry Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-2xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition"
            >
              <FaBoxes className="text-[#E10600] text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#111111]">5000+</h3>
              <p className="text-[#5F5F5F] text-xs sm:text-sm mt-1">Successful Moves</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-2xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition"
            >
              <FaSmile className="text-[#E10600] text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#111111]">10K+</h3>
              <p className="text-[#5F5F5F] text-xs sm:text-sm mt-1">Happy Customers</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <motion.img
            src={aboutImg}
            alt="Mathura Packers & Movers"
            className="w-full h-full object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-40 transition duration-500 rounded-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
