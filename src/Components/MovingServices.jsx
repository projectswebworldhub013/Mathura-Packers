// src/components/MovingServices.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons
import {
  FaPeopleCarry,
  FaTruckMoving,
//   FaArrowRightArrowLeft,
  FaDolly,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaWarehouse,
  FaArrowRight,
} from "react-icons/fa";

// Images
import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";
import s7 from "../assets/images/services/s7.jpg";
import s8 from "../assets/images/services/s8.jpg";
import s9 from "../assets/images/services/s9.jpg";
import s10 from "../assets/images/services/s10.jpg"; // reuse if no extra image

import bg from "../assets/images/bg.jpg";

// Services Data (Mathura Packers & Movers)
const movingServices = [
  {
    id: 1,
    name: "Packers & Movers Service",
    path: "/services/packers-movers",
    icon: <FaPeopleCarry />,
    image: s1,
    description:
      "Complete packing and moving solutions with professional handling and safe nationwide transportation.",
  },
  {
    id: 2,
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: <FaTruckMoving />,
    image: s2,
    description:
      "Secure and hassle-free home relocation services ensuring safety of all household belongings.",
  },
  {
    id: 3,
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: <FaArrowRight />,
    image: s3,
    description:
      "Efficient office relocation with minimal downtime, including IT equipment and furniture shifting.",
  },
  {
    id: 4,
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: <FaDolly />,
    image: s4,
    description:
      "Careful packing and transport of furniture, appliances, and fragile household items.",
  },
  {
    id: 5,
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: <FaTruckMoving />,
    image: s5,
    description:
      "Reliable intercity shifting services with timely delivery and real-time coordination.",
  },
  {
    id: 6,
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: <FaCarSide />,
    image: s6,
    description:
      "Safe and damage-free car transportation using specialized carriers and trained staff.",
  },
  {
    id: 7,
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: <FaMotorcycle />,
    image: s7,
    description:
      "Affordable bike transport service with secure packing and scratch-free delivery.",
  },
  {
    id: 8,
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: <FaDog />,
    image: s8,
    description:
      "Comfortable and compassionate pet relocation ensuring safety and well-being of your pets.",
  },
  {
    id: 9,
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: <FaDolly />,
    image: s9,
    description:
      "Experienced manpower for safe loading and unloading of goods at any location.",
  },
  {
    id: 10,
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: <FaWarehouse />,
    image: s10,
    description:
      "Secure warehouse and storage solutions for short-term and long-term goods safety.",
  },
];

export default function MovingServices() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section
      className="relative py-16 text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#FFFFFFE6]" />

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="uppercase tracking-wider text-sm font-semibold text-[#5F5F5F]">
          Trusted Relocation Experts
        </h2>

        <h3 className="text-3xl sm:text-4xl font-bold text-[#0F0F0F] mt-3">
          Our <span className="text-[#E10600]">Moving Services</span>
        </h3>

        <p className="text-[#5F5F5F] max-w-3xl mx-auto mt-4 mb-12 text-sm sm:text-base">
          Mathura Packers & Movers offers professional relocation solutions
          including packing, shifting, transport, and storage—ensuring a smooth,
          safe, and stress-free moving experience.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {movingServices.slice(0, visibleCount).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl w-80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 text-left flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[#E10600] text-xl mb-2">
                  {service.icon}
                  <h4 className="text-base font-bold text-[#0F0F0F] uppercase">
                    {service.name}
                  </h4>
                </div>

                <p className="text-sm text-[#5F5F5F] flex-1">
                  {service.description}
                </p>

                <Link
                  to={service.path}
                  className="mt-4 inline-block text-center px-4 py-2 bg-[#E10600] text-white rounded-full font-semibold text-sm hover:bg-[#B30400] transition"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < movingServices.length && (
          <div className="mt-12">
            <button
              onClick={() => setVisibleCount(movingServices.length)}
              className="bg-[#E10600] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#B30400] transition"
            >
              Load More Services
            </button>
          </div>
        )}

        {/* CTA */}
        <p className="mt-12 text-[#111111] text-sm sm:text-base">
          Planning a move?{" "}
          <Link
            to="/contact"
            className="text-[#E10600] font-semibold underline hover:text-[#B30400]"
          >
            Get Your Free Quote
          </Link>
        </p>
      </div>
    </section>
  );
}
