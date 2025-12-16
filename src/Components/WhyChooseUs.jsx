// src/components/WhyChooseUs.jsx
import React from "react";
import why1 from "../assets/images/hero/h1.jpg";
import why2 from "../assets/images/hero/h2.jpg";
import bgImg from "../assets/images/bg.jpg"; // Background image

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-12 px-6 md:px-16 relative text-[#111111]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#FFFFFFCC]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-[#0F0F0F]">
          WHY CHOOSE{" "}
          <span className="text-[#E10600] drop-shadow-lg">MATHURA PACKER & MOVER</span>?
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center border-t border-b border-[#E0E0E0] py-10">
          {/* Image Left */}
          <div>
            <img
              src={why1}
              alt="Safe Packers and Movers"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Right */}
          <div className="leading-relaxed text-[#111111]">
            <p className="text-base sm:text-lg md:text-lg">
              <span className="font-semibold text-[#E10600]">Mathura Packer & Mover</span> is one of the most trusted, professionally managed, and customer-centric relocation service providers in Northern India. We are known for excellence, reliability, and delivering a stress-free moving experience. With over two decades of expertise under the guidance of <span className="font-semibold text-[#E10600]">Mr. Satish Singh</span>, we ensure every relocation—homes, offices, vehicles, or valuable goods—is handled with utmost care and professionalism.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[#E0E0E0] py-10 mt-8">
          {/* Text Left */}
          <div className="leading-relaxed text-[#111111]">
            <p className="text-base sm:text-lg md:text-lg">
              Choosing <span className="font-semibold text-[#E10600]">Mathura Packer & Mover</span> means trusting a team that prioritizes your satisfaction. With skilled staff, certified drivers, modern tools, and high-quality packing materials, we guarantee safe, timely, and hassle-free relocation. Our mission is to make every move seamless, stress-free, and reliable, ensuring peace of mind for every customer.
            </p>
          </div>

          {/* Image Right */}
          <div>
            <img
              src={why2}
              alt="Professional Moving Services"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
