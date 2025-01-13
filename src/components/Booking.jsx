import React from 'react';

function Booking() {
  return (
    <div>
      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Process
            </h6>
            <h1 className="mb-5">3 Easy Steps</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-map-marker-alt fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose A Destination</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Select the destination of your dreams for an unforgettable experience.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-clipboard-list fa-3x text-white" />
                </div>
                <h5 className="mt-4">Choose A Package</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Pick the best travel package that suits your preferences and budget.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-bus fa-3x text-white" />
                </div>
                <h5 className="mt-4">Enjoy Your Travel</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Sit back, relax, and enjoy your journey to the fullest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process End */}
     {/* Booking Start */}
<div
  className="container-xxl py-5 wow fadeInUp"
  data-wow-delay="0.1s"
  style={{
    backgroundImage: 'url("https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/www.alpineascents.com/wp-content/uploads/2017/09/ladakh-trek-e1635267234139.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }}
>
  <div className="container">
    <div className="booking p-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-white">
          <h6 className="text-white text-uppercase">Booking</h6>
          <h1 className="text-white mb-4">Online Booking</h1>
          <p className="mb-4">
            Shri Devi Prasad Tour and Travel offers you the best travel experiences across Karnataka. Enjoy a hassle-free and comfortable journey to the most beautiful destinations in the state.
          </p>
          <p className="mb-4">
            Whether you're planning a spiritual trip to the temples, a family vacation, or an adventurous getaway, we provide customized tours that meet your needs. Our experienced team ensures your journey is smooth and memorable.
          </p>
          <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
        <div className="col-md-6">
          <h1 className="text-white mb-4">Book A Tour</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control bg-transparent"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control bg-transparent datetimepicker-input"
                    id="datetime"
                    placeholder="Date & Time"
                    data-target="#date3"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="datetime">Date &amp; Time</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select bg-transparent"
                    id="select1"
                  >
                    <option value={1}>Bangalore</option>
                    <option value={2}>Mysore</option>
                    <option value={3}>Coorg</option>
                    <option value={4}>Hampi</option>
                    <option value={5}>Gokarna</option>
                    <option value={6}>Chikmagalur</option>
                  </select>
                  <label htmlFor="select1">Destination</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-transparent"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-light w-100 py-3"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Booking End */}

    </div>
  );
}

export default Booking;
