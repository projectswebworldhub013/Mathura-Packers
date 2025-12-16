// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import hero1 from "../assets/images/hero/h1.jpg";
import hero2 from "../assets/images/hero/h2.jpg";
import hero3 from "../assets/images/hero/h4.jpg"; // add your 3rd image here

export default function HeroSection() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden mt-28">
      
      {/* 🌄 SLIDER BACKGROUND */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {images.map((img, index) =>
            index === current ? (
              <motion.img
                key={index}
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5 }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* 🎨 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* 🧱 CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-6 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* TRUST TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["ISO Certified", "100% Safe", "On-Time Delivery"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur border border-white/20 text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white leading-tight mb-6 min-h-[5rem]">
          <Typewriter
            words={[
              "Mathura Packers & Movers",
              "Trusted Movers Across India",
              "Safe • Reliable • Affordable",
              "Moving Homes & Offices Safely",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2200}
          />
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-200 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          From local shifting to nationwide relocation, we ensure{" "}
          <span className="text-red-500 font-semibold">
            safe handling, timely delivery,
          </span>{" "}
          and complete peace of mind for your belongings.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#E10600] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get Free Quote
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
