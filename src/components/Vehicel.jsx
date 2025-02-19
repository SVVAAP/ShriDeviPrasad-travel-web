import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/img/taxi.png';

function About() {
  // Placeholder image URL
  
  const vehicles = [
    {
      title: "Luxury Bus",
      description: "Spacious and comfortable buses for group tours with premium amenities.",
      imageSrc: "https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/4_20250108_213926_0003.png?raw=true",
      link: "/booking",
    },
    {
      title: "SUV",
      description: "Perfect for rugged terrains and off-road adventures with enhanced safety.",
      imageSrc: "https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/3_20250108_213926_0002.png?raw=true",
      link: "#",
    },
    {
      title: "Sedan",
      description: "Elegant and fuel-efficient sedans designed for a luxurious travel experience.",
      imageSrc: "https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/2_20250108_213925_0001.png?raw=true",
      link: "#",
    },
    {
      title: "Mini Van",
      description: "Ideal for small groups and families, providing comfort and ample storage space.",
      imageSrc: "https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/5_20250108_213926_0004.png?raw=true",
      link: "#",
    },
    {
      title: "Commercial Vehicle",
      description: "Ideal for transporting goods for commercial use.",
      imageSrc: "https://github.com/SVVAAP/ShriDeviPrasad-travel-web/blob/Img/6_20250108_213926_0005.png?raw=true",
      link: "#",
    },
  ];

  return (
    <>
      {/* Vehicles Section */}
      <div className="container py-10">
        <div className="text-center">
          <h6 className="text-primary text-lg font-bold bg-white inline-block p-2 mb-4">
            Vehicles Available
          </h6>
          <h1 className="text-3xl mb-5">Your Tour & Transport Vehicles</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="team-item">
              <Link to={vehicle.link}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={vehicle.imageSrc}
                    alt={vehicle.title}
                    loading="lazy"
                    // On load, the image will be swapped out with the actual one
                    onError={(e) => e.target.src = placeholderImage}
                    // Use placeholder image until the actual one is loaded
                    onLoad={(e) => e.target.src = vehicle.imageSrc}
                  />
                </div>
                <div className="text-center p-4">
                  <h5 className="text-lg font-semibold mb-2">{vehicle.title}</h5>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
