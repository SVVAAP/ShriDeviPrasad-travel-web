import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/img/taxi.png';
import { useData } from '../context/DataContext';

function About() {
  // Placeholder image URL
  const { vehicles } = useData();
  console.log(vehicles);

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
              <Link to="/booking">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={vehicle.imagesrc}
                    
                    alt={vehicle.title}
                    loading="lazy"
                    // On load, the image will be swapped out with the actual one
                   onError={(e) => e.target.src = placeholderImage}
                    // Use placeholder image until the actual one is loaded
                    onLoad={(e) => e.target.src = vehicle.imagesrc}
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
