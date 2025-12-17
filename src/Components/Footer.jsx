// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
  FaPhoneAlt,
  FaPeopleCarry,
  FaExchangeAlt,
  FaBoxOpen,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaTruckMoving,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/bg.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Services (unchanged)
const servicesData = [
  { name: "Packers And Movers Service", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Movers And Packers Service", path: "/services/movers-and-packers", icon: FaTruckMoving },
  { name: "Relocation Service", path: "/services/relocation", icon: FaExchangeAlt },
  { name: "Household Shifting Service", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Transport Service", path: "/services/transport", icon: FaTruckMoving },
  { name: "Car Transport Service", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport Service", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Transport Service", path: "/services/pet-transport", icon: FaDog },
  { name: "Loading Unloading Service", path: "/services/loading-unloading", icon: FaDolly },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFFFFF]/80"></div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#111111]">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-bold text-[#0F0F0F] font-[italiana]">
            About Mathura Packer & Mover
          </h4>
          <p className="text-[#5F5F5F] leading-relaxed">
            Mathura Packer and Mover is a trusted relocation service provider
            offering safe, reliable, and affordable moving solutions across India.
            From household shifting to office, vehicle, and commercial relocations,
            we ensure complete peace of mind with professional handling.
          </p>

          {/* Webmail (unchanged) */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2 rounded-full bg-[#E10600] text-white font-semibold shadow-md hover:bg-[#B30400] transition"
          >
            Access Webmail
          </a>
          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-lg mt-4">
            <a href="#" className="text-[#1877F2] hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" className="text-[#E4405F] hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="text-[#FF0000] hover:scale-110 transition"><FaYoutube /></a>
            <a href="#" className="text-[#1DA1F2] hover:scale-110 transition"><FaTwitter /></a>
            <a href="#" className="text-[#0A66C2] hover:scale-110 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl font-bold text-[#0F0F0F] mb-4 font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact"],
              ["Certificates", "/certificates"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#E10600] transition"
                >
                  <FaArrowRight className="text-[#E10600]" /> {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* EMAILS */}
          <h4 className="mt-6 text-2xl font-bold text-[#0F0F0F] font-[italiana]">
            Email
          </h4>
          <ul className="mt-3 space-y-2">
            {[
              "mathurapackerandmover@gmail.com",
              "info@mathurapackerandmover.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-[#E10600] transition"
                >
                  <FaEnvelope className="text-[#E10600]" /> {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-2xl font-bold text-[#0F0F0F] mb-4 font-[italiana]">
            Our Services
          </h4>
          <ul className="space-y-2">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-[#E10600] transition"
                >
                  <Icon className="text-[#E10600]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ADDRESS, CONTACT & SOCIAL */}
        <div>
          <h4 className="text-2xl font-bold text-[#0F0F0F] mb-4 font-[italiana]">
            Address & Contact
          </h4>

          <address className="not-italic text-[#5F5F5F] leading-relaxed mb-4">
            Shop No. A-57 Ground Floor, Yatayat Nagar Colony,
            Opposite BSNL Exchange, Behind Shadowfax Tech Pvt. Ltd.,
            Transport Nagar, Surya Nagar, Mathura,
            Uttar Pradesh – 281004
          </address>

          <p className="mb-2">
            <FaPhoneAlt className="inline mr-2 text-[#1FAA59]" />
            +91 79835 77815
          </p>
          <p className="mb-4">
            <FaPhoneAlt className="inline mr-2 text-[#1FAA59]" />
            +91 84454 21299
          </p>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-44"></div>
          </div>

          
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 mt-10 pt-6 border-t border-[#E0E0E0] text-center text-xs text-[#5F5F5F] space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Mathura Packer and Mover. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#E10600]"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
