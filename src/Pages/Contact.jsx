// src/Pages/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";
import contactBg from "../assets/images/contact-hero.jpg";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="flex flex-col lg:flex-row items-stretch lg:min-h-screen font-sans bg-[#F4F4F4]">
        {/* ───────── LEFT : CONTACT INFO ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 h-[520px] lg:h-auto text-white p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center overflow-hidden rounded-br-[40px] lg:rounded-br-[60px]"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0F0F0F]/80 z-0" />

          <div className="relative z-10 max-w-xl text-left space-y-6 overflow-y-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Contact{" "}
              <span className="text-[#E10600]">Mathura Packers & Movers</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-200">
              Our team is always ready to assist you with reliable relocation
              solutions, expert guidance, and prompt support.
            </p>

            {/* Emails */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-[#1FAA59] text-lg" />
              <div>
                <h4 className="font-semibold text-white">Email Us</h4>
                <p className="text-sm text-gray-300">
                  mathurapackerandmover@gmail.com
                </p>
                <p className="text-sm text-gray-300">
                  info@mathurapackerandmover.com
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-[#1FAA59] text-lg" />
              <div>
                <h4 className="font-semibold text-white">Call Us</h4>
                <p className="text-sm text-gray-300">+91 79835 77815</p>
                <p className="text-sm text-gray-300">+91 84454 21299</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-[#1FAA59] text-lg" />
              <div>
                <h4 className="font-semibold text-white">Our Locations</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-2">
                  House No. 96, Ground Floor, Nearby Shiv Mandir / Primary School,
                  Sonkh Road, Tehsil Goverdhan, Village Uspar, Mathura – 281001,
                  Uttar Pradesh, India
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Shop No. A-57, Ground Floor, Yatayat Nagar Colony, Opposite BSNL
                  Exchange, Behind Shadowfax Tech Pvt. Ltd., Transport Nagar,
                  Surya Nagar, Mathura – 281004, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───────── RIGHT : CONTACT FORM ───────── */}
        <motion.div
          id="contactform"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-white shadow-2xl px-6 sm:px-10 py-10 sm:py-14 rounded-bl-[40px] lg:rounded-bl-[60px]"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0F0F] mb-8 border-b border-[#E10600] pb-3">
              Send Us a Message
            </h2>

            <form
              action="https://formsubmit.co/info@mathurapackerandmover.com"
              method="POST"
              className="grid grid-cols-1 gap-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/" />

              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#E10600] outline-none"
              />

              <input
                type="tel"
                name="Contact Number"
                placeholder="Contact Number"
                required
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#E10600] outline-none"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#E10600] outline-none"
              />

              <textarea
                name="Message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#E10600] outline-none"
              ></textarea>

              <div className="text-left">
                <button
                  type="submit"
                  className="cursor-pointer bg-[#E10600] hover:bg-[#B30400] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;
