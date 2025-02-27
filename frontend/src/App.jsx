import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Destination from "./pages/Destination";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Form from "./components/Form";

// ✅ Import Admin Components
import Admin from "./pages/Admin/Admin";
import AdminLogin from "./components/Admin/Login";
import AdminPackages from "./components/Admin/Packages";
import AdminVehicles from "./components/Admin/VehiclePackages";
import AdminSiteContent from "./components/Admin/EditSiteContent";
import AdminBooking from "./components/Admin/Booking";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";


import "./index.css";
import "./App.css";

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/923000000000", "_blank");
  }
  const openCall = () => {
    window.open("tel:+923000000000", "_blank");
  }

  return (
    <BrowserRouter>
      <div className="fixed bottom-5 right-5 flex flex-col text-right gap-3 z-50">
        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center self-end justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform delay-500 ease-in-out hover:bg-blue-700 "
          >
            <i className="bi bi-arrow-up text-xl"></i>
          </button>
        )}

        {/* WhatsApp Button */}
        <div className="flex space-x-2">
        <button
          onClick={openCall}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all hover:bg-green-600"
        >
         <i className="fa-solid fa-phone"></i>
        </button>
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </button>
       
        </div>
      </div>

      <Routes>
        {/* ✅ Admin Authentication Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ✅ Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <Admin />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminPackages />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="vehicles" element={<AdminVehicles />} />
          <Route path="sitecontent" element={<AdminSiteContent />} />
          <Route path="Bookings" element={<AdminBooking />} />

        </Route>

        {/* ✅ Public Routes (With Header & Footer) */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/error" element={<Error />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vehicel-booking" element={<Form />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
