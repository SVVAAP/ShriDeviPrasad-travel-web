import React from 'react';
import { useData } from '../../context/DataContext';

function Services() {
  // List of services
  const {services} = useData();
  
  const handleEdit=()=>{

  }

  const deleteService=()=>{
    
  }

  return (
    <div id="services">
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={index+'s'}
              >
                <div className="service-item rounded pt-3">
                <div className="absolute top-2 right-2 z-10 flex space-x-4">
          <button
            onClick={handleEdit}
            className="text-white bg-sky-500 p-2 rounded hover:bg-blue-600"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={deleteService}
            className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
          </div>
                  <div className="p-4">
                    <i className={`fa fa-3x ${service.icon} text-primary mb-4`} />
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
}

export default Services;
