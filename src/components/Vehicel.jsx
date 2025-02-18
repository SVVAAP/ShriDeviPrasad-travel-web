import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    
      {/* Vehicles Section */}
      <div className="container py-10">
        <div className="text-center ">
          <h6 className="text-primary text-lg font-bold bg-white inline-block p-2 mb-4">
            Vehicles Available
          </h6>
          <h1 className="text-3xl mb-5">Your Tour & Transport Vehicles</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Vehicle 1 */}
          <div className="team-item">
            <Link to="/booking" vehicel="">
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
            </Link>
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

    </>
  );
}

  export default About;