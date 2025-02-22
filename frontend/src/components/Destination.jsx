import React from 'react';

function Destination() {
  return (
    <div>
      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destinations</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href="#"
                  >
                    <img
                      className="img-fluid"
                      src="https://www.coastaldigest.com/sites/default/files/images/Oct2020/Oct19/mysuru.jpg"
                      alt="Mysuru"
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Mysuru
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href="#"
                  >
                    <img
                      className="img-fluid"
                      src="https://www.trawell.in/images/pics/india_best_main.jpg"
                      alt="Agra"
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Agra
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href="#"
                  >
                    <img
                      className="img-fluid"
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=600&h=-1&s=1"
                      alt="Goa"
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Goa
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href="#"
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="https://www.trawell.in/blog/wp-content/uploads/2024/03/ooty-main-730x410.jpg"
                  alt="Ooty"
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Ooty
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}
    </div>
  );
}

export default Destination;
