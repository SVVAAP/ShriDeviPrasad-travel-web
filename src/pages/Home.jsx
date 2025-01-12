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
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
              {/* <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                {/* <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button> 
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Packages />
      <Destination />
      <Booking />
      <Team />
      <Testimonial />
      <Contact />




    </div>
  )
}
