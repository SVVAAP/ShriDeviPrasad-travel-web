import React from "react";
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
import AdminHome from "./components/Admin/AdminHome";
import AdminLogin from "./components/Admin/Login";
import AdminPackages from "./components/Admin/Packages";
import AdminVehicles from "./components/Admin/VehiclePackages";
import AdminSiteContent from "./components/Admin/EditSiteContent";
import AdminBooking from "./components/Admin/Booking";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";


import "./index.css";
import "./App.css";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

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
          <Route index element={<AdminHome />} />
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
