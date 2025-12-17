import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTruckMoving,
  FaClipboardList,
  FaClock,
} from "react-icons/fa";
import { X } from "lucide-react";

export default function EnquiryForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative w-full max-w-4xl
              bg-[#FFFFFF] rounded-2xl shadow-2xl
              border border-[#E0E0E0]
              overflow-hidden
            "
          >
            {/* Top Accent */}
            <div className="h-1 w-full bg-[#E10600]" />

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4
                text-[#5F5F5F] hover:text-[#E10600] cursor-pointer
                transition
              "
            >
              <X size={26} />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  text-2xl sm:text-3xl md:text-4xl
                  font-bold text-center mb-3
                  text-[#0F0F0F]
                "
              >
                Get a <span className="text-[#E10600]">Free Moving Quote</span>
              </motion.h2>

              <p className="text-center text-[#5F5F5F] mb-8 text-sm sm:text-base max-w-2xl mx-auto">
                Share your relocation details and our experts at{" "}
                <span className="font-semibold text-[#111111]">
                  Mathura Packer and Mover
                </span>{" "}
                will connect with you shortly for a safe, affordable, and
                stress-free move.
              </p>

              {/* Form */}
              <form
                action="https://formsubmit.co/info@mathurapackerandmover.com"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                {/* Moving From */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaMapMarkerAlt className="text-[#E10600] mr-3 text-lg" />
                  <input
                    type="text"
                    name="moving_from"
                    placeholder="Moving From *"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] placeholder-[#5F5F5F]
                      text-sm sm:text-base
                    "
                  />
                </div>

                {/* Moving To */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaMapMarkerAlt className="text-[#2A2A2A] mr-3 text-lg" />
                  <input
                    type="text"
                    name="moving_to"
                    placeholder="Moving To *"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] placeholder-[#5F5F5F]
                      text-sm sm:text-base
                    "
                  />
                </div>

                {/* Moving Type */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaTruckMoving className="text-[#E10600] mr-3 text-lg" />
                  <select
                    name="moving_type"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] text-sm sm:text-base
                    "
                  >
                    <option value="">Moving Type</option>
                    <option>Local Shifting</option>
                    <option>Within State</option>
                    <option>Interstate</option>
                  </select>
                </div>

                {/* Services */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaClipboardList className="text-[#2A2A2A] mr-3 text-lg" />
                  <select
                    name="services"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] text-sm sm:text-base
                    "
                  >
                    <option value="">Select Service</option>
                    <option>Household Shifting</option>
                    <option>Office / Corporate Relocation</option>
                    <option>Car Transportation</option>
                    <option>Bike Transportation</option>
                    <option>Few Items Shifting</option>
                    <option>Packing & Unpacking</option>
                    <option>Storage / Warehousing</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaPhoneAlt className="text-[#E10600] mr-3 text-lg" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] placeholder-[#5F5F5F]
                      text-sm sm:text-base
                    "
                  />
                </div>

                {/* Moving Time */}
                <div className="flex items-center bg-[#F4F4F4] rounded-xl p-3 border border-[#E0E0E0]">
                  <FaClock className="text-[#2A2A2A] mr-3 text-lg" />
                  <select
                    name="moving_time"
                    required
                    className="
                      w-full bg-transparent outline-none
                      text-[#111111] text-sm sm:text-base
                    "
                  >
                    <option value="">Expected Moving Time</option>
                    <option>Urgent</option>
                    <option>Within a Week</option>
                    <option>Within 15 Days</option>
                    <option>Within a Month</option>
                    <option>Not Decided</option>
                  </select>
                </div>

                {/* Hidden Settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.mathurapackerandmover.com/"
                />

                {/* Submit */}
                <div className="md:col-span-2 flex justify-center mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="
                      px-8 py-3 cursor-pointer
                      rounded-full font-semibold
                      text-white
                      bg-[#E10600] hover:bg-[#B30400]
                      shadow-lg hover:shadow-xl
                      transition-all duration-300
                      text-sm sm:text-base
                    "
                  >
                    Submit Enquiry
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
