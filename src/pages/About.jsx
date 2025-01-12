import React from 'react';

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
            style={{ minHeight: '400px' }}
          >
            <div className="relative h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="src/assets/img/about.jpg"
                alt="About Us"
              />
            </div>
          </div>
          {/* Right Section */}
          <div className="wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="text-primary font-bold bg-white inline-block px-2 mb-4">
              About Us
            </h6>
            <h1 className="text-3xl font-bold mb-6">
              Welcome to <span className="text-primary">Tourist</span>
            </h1>
            <p className="mb-6 text-gray-700">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-6 text-gray-700">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
              amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
              clita duo justo magna dolore erat amet
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  First Class Flights
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
                  5 Star Accommodations
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  Latest Model Vehicles
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  150 Premium City Tours
                </p>
              </div>
              <div>
                <p className="mb-0 flex items-center">
                  <i className="fas fa-arrow-right text-primary mr-2"></i>
                  24/7 Service
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


      {/* Team Section */}
      <div className="container py-10">
        <div className="text-center">
          <h6 className="text-primary text-lg font-bold bg-white inline-block p-2 mb-4">
            Travel Guide
          </h6>
          <h1 className="text-3xl mb-5">Meet Our Guide</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['team-1', 'team-2', 'team-3', 'team-4'].map((team, index) => (
            <div key={index} className="team-item">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  className="w-full h-64 object-cover"
                  src={`./src/assets/img/${team}.jpg`}
                  alt="Team Member"
                />
              </div>
              <div className="flex justify-center mt-[-19px]">
                <a href="#" className="bg-gray-200 p-2 m-1 rounded-full">
                  <i className="fab fa-facebook-f text-primary"></i>
                </a>
                <a href="#" className="bg-gray-200 p-2 m-1 rounded-full">
                  <i className="fab fa-twitter text-primary"></i>
                </a>
                <a href="#" className="bg-gray-200 p-2 m-1 rounded-full">
                  <i className="fab fa-instagram text-primary"></i>
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="text-lg font-semibold mb-0">Full Name</h5>
                <small className="text-gray-600">Designation</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
