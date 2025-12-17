import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import GalleryPage from "./Pages/GalleryPage";
import Contact from "./Pages/Contact";
import ServiceDetail from "./Pages/ServicesDetail";
import CertificatesPage from "./Pages/CertficatesPage";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import FloatingButtons from "./Components/FloatingButtons";
import EnquiryForm from "./Components/EnquiryForm";

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Auto Enquiry Popup */}
      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
