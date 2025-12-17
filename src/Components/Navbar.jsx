import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaServicestack,

  FaImages,
  FaBars,
  FaTruckMoving,
  FaChevronDown,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaWarehouse,
  FaEnvelope,
  FaIdCard,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowRightArrowLeft,
  FaHouse,
  FaCircleInfo,
  FaMapLocationDot,
  FaPeopleGroup,
  FaPhoneFlip,
  FaXmark,
  FaChevronUp,
} from "react-icons/fa6";

import logo from "../assets/images/logo-mathura.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHouse /> },
    { name: "About Us", path: "/about", icon: <FaCircleInfo /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Certificates", path: "/certificates", icon: <FaMapLocationDot /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneFlip /> },
  ];

  const services = [
    { name: "Packers & Movers Service", path: "/services/packers-movers", icon: <FaPeopleGroup /> },
    { name: "Home Shifting Service", path: "/services/home-shifting", icon: <FaTruckMoving /> },
    { name: "Office Relocation Service", path: "/services/office-relocation", icon: <FaArrowRightArrowLeft /> },
    { name: "Household Item Shifting", path: "/services/household-shifting", icon: <FaDolly /> },
    { name: "Intercity Relocation", path: "/services/intercity-relocation", icon: <FaTruckMoving /> },
    { name: "Car Transport Service", path: "/services/car-transport", icon: <FaCarSide /> },
    { name: "Bike Transport Service", path: "/services/bike-transport", icon: <FaMotorcycle /> },
    { name: "Pet Relocation Service", path: "/services/pet-relocation", icon: <FaDog /> },
    { name: "Loading & Unloading Service", path: "/services/loading-unloading", icon: <FaDolly /> },
    { name: "Warehouse & Storage Service", path: "/services/warehouse-storage", icon: <FaWarehouse /> },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(window.scrollY <= lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔴 TOP INFO BAR */}
<div
  className={`bg-[#0F0F0F] text-white text-sm transition-all duration-500 ${
    showTop ? "h-10 opacity-100" : "h-0 opacity-0"
  }`}
>
  <div className="max-w-[1400px] mx-auto px-4 h-10 flex items-center">
    
    {/* 📱 MOBILE VIEW — ONLY EMAIL */}
    <div className="flex w-full justify-center items-center gap-2 md:hidden">
      <FaEnvelope className="text-[#E10600]" />
      <span className="truncate">info@mathurapackerandmover.com</span>
    </div>

    {/* 🖥️ DESKTOP VIEW — FULL INFO */}
    <div className="hidden md:flex w-full items-center gap-6">
      <span className="flex items-center gap-2">
        <FaIdCard className="text-[#E10600]" />
        GSTIN: 09KLIPS5035Q1Z
      </span>

      <span className="flex items-center gap-2">
        <FaIdCard className="text-[#E10600]" />
        UDYAM-UP-54-0074494
      </span>

      <span className="ml-auto flex items-center gap-2 font-semibold">
        <FaPhoneFlip className="text-[#E10600]" />
        +91 84454 21299
      </span>

      <span className="flex items-center gap-2">
        <FaEnvelope className="text-[#E10600]" />
        info@mathurapackerandmover.com
      </span>
    </div>

  </div>
</div>


      {/* 🔹 MAIN NAVBAR */}
      <nav className="bg-white shadow-md border-b border-[#E0E0E0] px-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Mathura Packer & Mover" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[#111111]">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group">
                {link.name === "Services" ? (
                  <>
                    <button className="flex items-center gap-2 hover:text-[#E10600]">
                      {link.icon} {link.name}
                      <FaChevronDown className="text-xs" />
                    </button>
                    <ul className="absolute left-0 mt-1 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      {services.map((s, i) => (
                        <li key={i}>
                          <Link
                            to={s.path}
                            className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#F4F4F4] hover:text-[#E10600]"
                          >
                            {s.icon}
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={link.path} className="flex items-center gap-2 hover:text-[#E10600]">
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* 🔗 SOCIAL ICONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="text-[#1877F2] hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" className="text-[#E4405F] hover:scale-110 transition"><FaInstagram /></a>
            <a href="https://x.com" target="_blank" className="text-black hover:scale-110 transition"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" className="text-[#0A66C2] hover:scale-110 transition"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" className="text-[#FF0000] hover:scale-110 transition"><FaYoutube /></a>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* 🔹 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaXmark />
          </button>
        </div>

        <div className="px-4">
          {navLinks.map((link, idx) => (
            <div key={idx}>
              {link.name === "Services" ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between w-full py-3 border-b"
                  >
                    <span className="flex items-center gap-2">{link.icon} {link.name}</span>
                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {services.map((s, i) => (
                        <Link
                          key={i}
                          to={s.path}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm hover:text-[#E10600]"
                        >
                          {s.icon}
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-3 border-b hover:text-[#E10600]"
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* 🔗 MOBILE SOCIAL ICONS */}
        <div className="flex justify-center gap-5 text-xl py-6 border-t">
          <a href="https://facebook.com" className="text-[#1877F2]"><FaFacebookF /></a>
          <a href="https://instagram.com" className="text-[#E4405F]"><FaInstagram /></a>
          <a href="https://x.com" className="text-black"><FaXTwitter /></a>
          <a href="https://linkedin.com" className="text-[#0A66C2]"><FaLinkedinIn /></a>
          <a href="https://youtube.com" className="text-[#FF0000]"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
}
