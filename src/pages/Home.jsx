import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Destination from '../components/Destination';
import Booking from '../components/Booking';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
    <div>
  <div
    className="container-fluid bg-primary py-5 mb-5 hero-header"
    style={{
      backgroundImage: "url('https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      className="container py-5"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "15px",
      }}
    >
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center text-white">
          <h1 className="display-3 mb-3 animated slideInDown">
            Explore The World With Us
          </h1>
          <p className="fs-4 mb-4 animated slideInDown">
            A tour, travel, and transport agency in Karnataka helping you craft
            unforgettable journeys.
          </p>
          <div className="row g-3 justify-content-center animated slideInDown">
            <div className="col-md-5">
              <input
                className="form-control border-0 rounded-pill py-3 ps-4"
                type="text"
                placeholder="From Destination"
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control border-0 rounded-pill py-3 ps-4"
                type="text"
                placeholder="To Destination"
              />
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-light text-primary rounded-pill py-3 px-4 w-100"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  
      <About />
      <Services />
      <Packages />
      <Destination />
      <Booking />
      {/* <Team /> */}
      {/* <Testimonial /> */}
      <Contact />




    </div >
  )
}
