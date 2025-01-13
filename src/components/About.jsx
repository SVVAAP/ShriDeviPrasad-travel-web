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
          src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/1_20250108_213925_0000.png?raw=true"
          alt="About Us"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop in case the placeholder also fails
            e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available"; // Fallback placeholder
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
        Welcome to <span className="text-primary">ShriDeviPrasad Tours & Travels</span>
      </h1>
      <p className="mb-6 text-gray-700">
        ShriDeviPrasad Tour and Travel Agency is a leading travel and transport service provider in Karnataka, dedicated to delivering exceptional travel experiences. Whether you are planning a family vacation, a business trip, or just a weekend getaway, we ensure your journey is seamless and memorable.
      </p>
      <p className="mb-6 text-gray-700">
        With a fleet of modern vehicles, premium accommodations, and well-curated travel packages, we cater to all your travel needs. Our experienced team is committed to offering personalized services, ensuring your safety, comfort, and satisfaction at every step.
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


      {/* Vehicles Section */}
      <div className="container py-10">
        <div className="text-center">
          <h6 className="text-primary text-lg font-bold bg-white inline-block p-2 mb-4">
            Vehicles Available
          </h6>
          <h1 className="text-3xl mb-5">Your Tour & Transport Vehicles</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Vehicle 1 */}
          <div className="team-item">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/4_20250108_213926_0003.png?raw=true"
                alt="Luxury Bus"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="text-lg font-semibold mb-2">Luxury Bus</h5>
              <p className="text-gray-600">
                Spacious and comfortable buses for group tours with premium amenities.
              </p>
            </div>
          </div>

          {/* Vehicle 2 */}
          <div className="team-item">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/3_20250108_213926_0002.png?raw=true"
                alt="SUV"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="text-lg font-semibold mb-2">SUV</h5>
              <p className="text-gray-600">
                Perfect for rugged terrains and off-road adventures with enhanced safety.
              </p>
            </div>
          </div>

          {/* Vehicle 3 */}
          <div className="team-item">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/2_20250108_213925_0001.png?raw=true"
                alt="Sedan"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="text-lg font-semibold mb-2">Sedan</h5>
              <p className="text-gray-600">
                Elegant and fuel-efficient sedans designed for a luxurious travel experience.
              </p>
            </div>
          </div>

          {/* Vehicle 4 */}
          <div className="team-item">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/5_20250108_213926_0004.png?raw=true"
                alt="Mini Van"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="text-lg font-semibold mb-2">Mini Van</h5>
              <p className="text-gray-600">
                Ideal for small groups and families, providing comfort and ample storage space.
              </p>
            </div>
          </div>
          {/* Vehicle 5 */}
          <div className="team-item">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/6_20250108_213926_0005.png?raw=true"
                alt="Commercial Vehical"
              />
            </div>
            <div className="text-center p-4">
              <h5 className="text-lg font-semibold mb-2">Commercial Vehical</h5>
              <p className="text-gray-600">
                Ideal for Transporting Goods for commercial use .
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
