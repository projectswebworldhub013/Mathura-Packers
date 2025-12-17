
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import GalleryHero from "../Components/GalleryHero";

// 9 Gallery Images
import img1 from "../assets/images/gallery/g1.jpg";
import img2 from "../assets/images/gallery/g2.jpg";
import img3 from "../assets/images/gallery/g3.jpg";
import img4 from "../assets/images/gallery/g4.jpg";
import img5 from "../assets/images/gallery/g5.jpg";
import img6 from "../assets/images/gallery/g6.jpg";
import img7 from "../assets/images/gallery/g7.jpg";
import img8 from "../assets/images/gallery/g8.jpg";
import img9 from "../assets/images/gallery/g9.jpg";

export default function GalleryPage() {
  const images = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      <GalleryHero />

      {/* Gallery Section */}
      <section className="bg-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold bg-[#E10600]/10 text-[#E10600]">
              Our Work Portfolio
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F0F0F]">
              Real Relocations by Mathura Packers & Movers
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#5F5F5F]">
              A glimpse into our professional packing, loading, transportation,
              and delivery processes — showcasing the care, precision, and
              reliability we bring to every relocation.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer rounded-xl overflow-hidden bg-[#F4F4F4] border border-[#E0E0E0] shadow-sm"
              >
                <img
                  src={img}
                  alt={`Mathura Packers Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-[#E10600] hover:bg-[#B30400] p-3 rounded-full text-white transition"
            >
              <X size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-5xl w-full bg-[#2A2A2A] p-4 rounded-2xl border border-[#E0E0E0]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={images[selectedIndex]}
                alt="Gallery Preview"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#E10600] hover:bg-[#B30400] text-white p-3 rounded-full transition"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#E10600] hover:bg-[#B30400] text-white p-3 rounded-full transition"
              >
                <ChevronRight size={26} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
