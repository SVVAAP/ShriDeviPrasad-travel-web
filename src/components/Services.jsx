import React from 'react';

function Services() {
  // List of services
  const services = [
    {
      icon: 'fa-plane',
      title: 'Tour Packages',
      description: 'Explore curated tour packages for families, groups, and solo travelers. Tailored to suit all your travel needs.',
      delay: '0.1s',
    },
    {
      icon: 'fa-bus',
      title: 'Air Ticket / Bus Ticket Booking',
      description: 'Reliable and comfortable transport options, including buses, vans, and cars for your journeys across Karnataka and beyond.',
      delay: '0.3s',
    },
    {
      icon: 'fa-car',
      title: 'Car, Cab, Taxi Rental Services',
      description: 'Specialized services for corporate tours, business events, and client visits with professional-grade arrangements.',
      delay: '0.5s',
    },
    {
      icon: 'fa-route',
      title: 'College Picnics / Office / Corporate Trip',
      description: 'Plan your trips with our personalized itinerary services. Your preferences, our expertise!',
      delay: '0.7s',
    },
    {
      icon: 'fa-calendar-check',
      title: 'Event Management',
      description: 'From weddings to conferences, we handle logistics, transport, and arrangements for your events.',
      delay: '0.9s',
    },
    {
      icon: 'fa-hotel',
      title: 'Hotel Bookings',
      description: 'Seamless hotel booking services at premium and budget accommodations for your convenience.',
      delay: '1.1s',
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Taxi service in Udupi / Manipal',
      description: 'Experienced local guides to make your tours more enriching and memorable with insights and stories.',
      delay: '1.3s',
    },
    {
      icon: 'fa-book',
      title: 'Passport / VISA Services',
      description: 'Our team is available round the clock to assist you with any queries or emergencies during your travel.',
      delay: '1.5s',
    },
  ];

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
                data-wow-delay={service.delay}
              >
                <div className="service-item rounded pt-3">
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
