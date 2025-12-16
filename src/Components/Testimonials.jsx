// src/components/Testimonials.jsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    text:
      "Mathura Packer and Mover handled my household shifting perfectly. The packing quality was excellent and delivery was completely damage-free.",
  },
  {
    name: "Neha Verma",
    rating: 4.5,
    text:
      "Very professional and polite staff. Everything was delivered on time and exactly as promised. Highly reliable service.",
  },
  {
    name: "Amit Singh",
    rating: 4,
    text:
      "From quotation to final delivery, the entire process was smooth and transparent. Truly a stress-free relocation experience.",
  },
  {
    name: "Pooja Gupta",
    rating: 4.5,
    text:
      "I was worried about my fragile items, but Mathura Packer and Mover packed everything safely. No damage at all.",
  },
  {
    name: "Rohit Malhotra",
    rating: 4,
    text:
      "Experienced team with proper planning and execution. Their punctuality and professionalism really impressed me.",
  },
  {
    name: "Anjali Mishra",
    rating: 5,
    text:
      "Excellent service and affordable pricing. The staff was cooperative and very careful with all belongings.",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-[#ffffff] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-3">
            Trusted by Happy Clients of{" "}
            <span className="text-[#E10600]">Mathura Packer and Mover</span>
          </h2>

          <p className="text-[#5F5F5F] text-sm sm:text-base">
            Real experiences from customers who trusted us with their relocation needs.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Desktop Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 
            w-10 h-10 rounded-full bg-[#FFFFFF] shadow-md 
            border border-[#E0E0E0] 
            hover:bg-[#E10600] hover:text-white transition z-10"
          >
            <FaChevronLeft className="m-auto" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 
            w-10 h-10 rounded-full bg-[#FFFFFF] shadow-md 
            border border-[#E0E0E0] 
            hover:bg-[#E10600] hover:text-white transition z-10"
          >
            <FaChevronRight className="m-auto" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, i) => (
              <div key={i} className="px-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative bg-[#FFFFFF] rounded-xl p-5 sm:p-6 
                  shadow-md border border-[#E0E0E0] 
                  flex flex-col min-h-[220px]"
                >
                  {/* Accent Stripe */}
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#E10600] rounded-l-xl" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-2 text-[#1FAA59] text-sm">
                    {renderStars(item.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
                    “{item.text}”
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#0F0F0F] text-white flex items-center justify-center text-lg">
                      <FaUserCircle />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#111111]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#5F5F5F]">
                        Verified Customer
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link to="/contact">
            <button className="px-8 py-2.5 rounded-full 
            bg-[#E10600] text-white text-sm sm:text-base font-semibold 
            hover:bg-[#B30400] transition shadow-md">
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
