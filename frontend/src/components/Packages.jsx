import React from 'react'

function Packages() {
  return (
    <div id="packages">

      {/* Package Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Packages
      </h6>
      <h1 className="mb-5">Karnataka Tourist Packages</h1>
    </div>
    <div className="row g-4 justify-content-center">
      {/* Coorg Package */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid"
              src="https://s3.india.com/wp-content/uploads/2024/08/coorg-places-to-visit.jpg##image/jpg"
              alt="Coorg"
            />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Coorg
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />3 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">₹12,000</h3>
            <p>
              Explore the serene coffee plantations, waterfalls, and misty hills of Coorg.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a
                href="#"
                className="btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hampi Package */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="package-item">
          <div className="overflow-hidden">
            {/* <img
              className="img-fluid"
              src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721033522385_istockphoto-1270774245-1024x1024-transformed.jpeg&w=3840&q=100"
              alt="Hampi"
            /> */}
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Hampi
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">₹10,000</h3>
            <p>
              Witness the magnificent ruins of the Vijayanagara Empire in Hampi.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a
                href="#"
                className="btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mysuru Package */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="package-item">
          <div className="overflow-hidden">
            <img
              className="img-fluid"
              src="https://s3.india.com/wp-content/uploads/2024/07/8-Hidden-Gems-To-Discover-In-Mysuru-Mysore.jpg"
              alt="Mysuru"
            />
          </div>
          <div className="d-flex border-bottom">
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              Mysuru
            </small>
            <small className="flex-fill text-center border-end py-2">
              <i className="fa fa-calendar-alt text-primary me-2" />2 days
            </small>
            <small className="flex-fill text-center py-2">
              <i className="fa fa-user text-primary me-2" />2 Person
            </small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">₹8,500</h3>
            <p>
              Visit the majestic Mysuru Palace and explore the rich cultural heritage of Mysuru.
            </p>
            <div className="d-flex justify-content-center mb-2">
              <a
                href="#"
                className="btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Package End */}


    </div>
  )
}

export default Packages