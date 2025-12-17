import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";
import CertificatesHero from "../Components/CertificatesHero";

// PDFs
import udyam from "../assets/certificates/udyam.pdf";
import udyamAnnexure from "../assets/certificates/udyam-anexture.pdf";
import gst from "../assets/certificates/gst.pdf";

/* ================= COLOR SCHEME ================= */
const colors = {
  primary: "#E10600",
  hover: "#B30400",
  black: "#0F0F0F",
  charcoal: "#2A2A2A",
  white: "#FFFFFF",
  lightGray: "#F4F4F4",
  textPrimary: "#111111",
  textSecondary: "#5F5F5F",
  success: "#1FAA59",
  border: "#E0E0E0",
};

/* ================= CERTIFICATE DATA ================= */
const certificates = [
  {
    id: 1,
    name: "UDYAM Registration Certificate",
    description:
      "This certificate confirms Mathura Packers & Movers as a government-registered MSME, ensuring credibility, reliability, and legal compliance.",
    file: udyam,
    tag: "MSME Verified",
  },
  {
    id: 2,
    name: "UDYAM Annexure Certificate",
    description:
      "The UDYAM Annexure provides additional official business details, reinforcing transparency and operational authenticity.",
    file: udyamAnnexure,
    tag: "Business Details",
  },
  {
    id: 3,
    name: "GST Registration Certificate",
    description:
      "Our GST registration ensures transparent billing, tax compliance, and authorized nationwide relocation services.",
    file: gst,
    tag: "GST Approved",
  },
];

const CertificatesPage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <CertificatesHero />

      {/* ================= CERTIFICATES ================= */}
      <section
        className="w-full py-20 px-6 md:px-16"
        style={{ backgroundColor: colors.lightGray }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: colors.textPrimary }}
          >
            Official <span style={{ color: colors.primary }}>Certifications</span>
          </h2>

          <p
            className="max-w-3xl mx-auto text-lg leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Mathura Packers & Movers operates as a fully registered and compliant
            relocation company. Our certifications guarantee transparency,
            government authorization, and complete customer trust.
          </p>
        </motion.div>

        {/* Grid – 3 in one row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certificates.map(({ id, name, description, file, tag }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl p-8 border"
              style={{ borderColor: colors.border }}
            >
              {/* Accent Line */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] rounded-t-3xl"
                style={{ backgroundColor: colors.primary }}
              />

              {/* Tag */}
              <div
                className="absolute top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                }}
              >
                {tag}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-5">
                <HiDocumentText
                  className="text-5xl"
                  style={{ color: colors.primary }}
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="flex-1 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all"
                  style={{ backgroundColor: colors.primary }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.hover)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.primary)
                  }
                >
                  <FaEye /> View
                </button>

                <a
                  href={file}
                  download
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all"
                  style={{
                    borderColor: colors.primary,
                    color: colors.primary,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                    e.currentTarget.style.color = colors.white;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.primary;
                  }}
                >
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: colors.black }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Government Approved",
              text: "All documents are officially registered and verified by Indian authorities.",
            },
            {
              icon: <FaCheckCircle />,
              title: "Legally Compliant",
              text: "GST & MSME certifications ensure transparent and lawful operations.",
            },
            {
              icon: <FaUserTie />,
              title: "Trusted Brand",
              text: "Hundreds of satisfied customers across Mathura and India.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl border"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.charcoal,
              }}
            >
              <div
                className="text-5xl mb-4 flex justify-center"
                style={{ color: colors.primary }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MODAL PREVIEW ================= */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 text-white p-2 rounded-full"
              style={{ backgroundColor: colors.primary }}
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesPage;
