// src/data/servicesData.js

import {
  FaPeopleCarry,
  FaHome,
  FaExchangeAlt,
  FaBoxOpen,
  FaTruckMoving,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaWarehouse,
} from "react-icons/fa";

import s1 from "../assets/images/services/s1.jpg";
import s2 from "../assets/images/services/s2.jpg";
import s3 from "../assets/images/services/s3.jpg";
import s4 from "../assets/images/services/s4.jpg";
import s5 from "../assets/images/services/s5.jpg";
import s6 from "../assets/images/services/s6.jpg";
import s7 from "../assets/images/services/s7.jpg";
import s8 from "../assets/images/services/s8.jpg";
import s9 from "../assets/images/services/s9.jpg";
import s10 from "../assets/images/services/s10.jpg";

const servicesData = [
  {
    id: 1,
    name: "Packers & Movers Service",
    path: "/services/packers-movers",
    icon: FaPeopleCarry,
    image: s1,
    description:
      "Mathura Packers & Movers provides reliable and professional packers and movers services designed to ensure a smooth, secure, and stress-free relocation experience. From careful packing to safe transportation, we manage every step with precision and care.",
    features: [
      "Premium quality packing materials",
      "Experienced and trained professionals",
      "Safe loading and unloading process",
      "On-time and damage-free delivery",
    ],
  },

  {
    id: 2,
    name: "Home Shifting Service",
    path: "/services/home-shifting",
    icon: FaHome,
    image: s2,
    description:
      "Our home shifting service ensures your household relocation is handled with complete care, efficiency, and attention to detail. We treat every household item as valuable and ensure safe delivery to your new home.",
    features: [
      "Complete end-to-end home relocation",
      "Special handling for fragile belongings",
      "Door-to-door shifting service",
      "Total safety and peace of mind",
    ],
  },

  {
    id: 3,
    name: "Office Relocation Service",
    path: "/services/office-relocation",
    icon: FaExchangeAlt,
    image: s3,
    description:
      "Mathura Packers & Movers offers professional office relocation services with minimal business downtime. We ensure organized packing, secure transportation, and smooth setup at your new office location.",
    features: [
      "Planned and time-efficient relocation",
      "Safe handling of IT equipment & furniture",
      "Confidential document protection",
      "Corporate-level service standards",
    ],
  },

  {
    id: 4,
    name: "Household Item Shifting",
    path: "/services/household-shifting",
    icon: FaBoxOpen,
    image: s4,
    description:
      "Our household item shifting service focuses on the safe movement of furniture, appliances, and personal belongings using modern packing techniques and careful handling methods.",
    features: [
      "Secure packing of household items",
      "Furniture dismantling & reinstallation",
      "Scratch-free and damage-safe handling",
      "Customized shifting solutions",
    ],
  },

  {
    id: 5,
    name: "Intercity Relocation",
    path: "/services/intercity-relocation",
    icon: FaTruckMoving,
    image: s5,
    description:
      "We specialize in intercity relocation services, ensuring your belongings are transported safely and delivered on time across cities with complete tracking and care.",
    features: [
      "Expert long-distance relocation services",
      "Well-maintained and secure transport fleet",
      "Strong packaging for long transit",
      "Timely and monitored delivery",
    ],
  },

  {
    id: 6,
    name: "Car Transport Service",
    path: "/services/car-transport",
    icon: FaCarSide,
    image: s6,
    description:
      "Mathura Packers & Movers provides safe, secure, and insured car transport services using specialized carriers to ensure your vehicle reaches its destination without damage.",
    features: [
      "Door-to-door vehicle pickup & delivery",
      "Open and enclosed carrier options",
      "Pre & post transportation inspection",
      "Insurance coverage for added safety",
    ],
  },

  {
    id: 7,
    name: "Bike Transport Service",
    path: "/services/bike-transport",
    icon: FaMotorcycle,
    image: s7,
    description:
      "Our bike transport service ensures safe and affordable relocation of two-wheelers using professional packaging, secure loading, and careful transportation.",
    features: [
      "High-quality scratch-proof bike packaging",
      "Cost-effective transport solutions",
      "Secure loading and unloading",
      "On-time and safe delivery",
    ],
  },

  {
    id: 8,
    name: "Pet Relocation Service",
    path: "/services/pet-relocation",
    icon: FaDog,
    image: s8,
    description:
      "We understand pets are family. Our pet relocation service ensures a comfortable, safe, and stress-free journey for your pets with proper care and supervision throughout the move.",
    features: [
      "Pet-friendly relocation arrangements",
      "Safe and ventilated transport carriers",
      "Experienced and trained handlers",
      "Complete assistance for pet relocation",
    ],
  },

  {
    id: 9,
    name: "Loading & Unloading Service",
    path: "/services/loading-unloading",
    icon: FaDolly,
    image: s9,
    description:
      "Our loading and unloading services ensure safe and efficient handling of goods using proper tools, modern techniques, and experienced manpower.",
    features: [
      "Skilled manpower and equipment handling",
      "Scientific stacking and placement",
      "Damage prevention techniques",
      "Quick and efficient execution",
    ],
  },

  {
    id: 10,
    name: "Warehouse & Storage Service",
    path: "/services/warehouse-storage",
    icon: FaWarehouse,
    image: s10,
    description:
      "Mathura Packers & Movers offers secure warehouse and storage solutions for both short-term and long-term requirements, ensuring complete protection of your goods.",
    features: [
      "Clean, safe, and monitored storage facilities",
      "Flexible short & long-term storage options",
      "24/7 security and surveillance",
      "Easy access and inventory management",
    ],
  },
];

export default servicesData;
