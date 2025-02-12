import React from "react";

function About() {
  return (
    <div>
      {/* About Section */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div
            className="wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className="relative h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/1_20250108_213925_0000.png?raw=true"
                alt="About Us"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop in case the placeholder also fails
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Available"; // Fallback placeholder
                }}
              />
            </div>
          </div>
          {/* Right Section */}
          <div className="wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="text-primary font-bold bg-white inline-block px-2 mb-4">
              About Us
            </h6>
            <h1 className="text-3xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-primary">
                ShriDeviPrasad Tours & Travels
              </span>
            </h1>
            <p className="mb-6 text-gray-700">
              ShriDeviPrasad Tour and Travel Agency is a leading travel and
              transport service provider in Karnataka, dedicated to delivering
              exceptional travel experiences. Whether you are planning a family
              vacation, a business trip, or just a weekend getaway, we ensure
              your journey is seamless and memorable.
            </p>
            <p className="mb-6 text-gray-700">
              With a fleet of modern vehicles, premium accommodations, and
              well-curated travel packages, we cater to all your travel needs.
              Our experienced team is committed to offering personalized
              services, ensuring your safety, comfort, and satisfaction at every
              step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  First-Class Flights
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  Handpicked Hotels
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  Modern Vehicles
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  Flexible Packages
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  Over 150 Destinations
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  24/7 Customer Support
                </p>
              </div>
            </div>
            <a
              href="#"
              className="bg-primary text-white font-bold py-3 px-5 rounded shadow hover:bg-primary-dark transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
