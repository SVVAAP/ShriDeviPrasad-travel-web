import React from 'react'

function Booking() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">Booking</h1>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Booking
              </li>
            </ol>
          </nav> */}
        </div>
      </div>
    </div>
  </div>

    {/* Booking Start */}
    {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-white ">
        <div className="booking p-5">
          <div className="align-items-center">
            <div className="col-md-6">
              <h1 className="mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent text-white"
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
                      >
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
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
    </div> */}
    {/* Booking Start 
    </div>*/}
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white py-5 wow fadeInUp m-20 rounded-2xl shadow-2xl"
    data-wow-delay="0.1s"
    style={{
      backgroundImage: 'url("https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/www.alpineascents.com/wp-content/uploads/2017/09/ladakh-trek-e1635267234139.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <div className="bg-gray-800  p-8 w-full max-w-lg rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out delay-150" style={{ backgroundColor: 'rgba(31, 41, 55, 0.8)' }} >
        <h1 className="text-2xl font-bold mb-4 text-center">Book A Tour</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Your Name</label>
              <input type="text" className="w-full p-2 bg-transparent border rounded text-white" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold">Your Email</label>
              <input type="email" className="w-full p-2 bg-transparent border rounded text-white" placeholder="Your Email" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold">Date & Time</label>
            <input type="text" className="w-full p-2 bg-transparent border rounded text-white" placeholder="Date & Time" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Destination</label>
            <select className="w-full p-2 bg-transparent border rounded text-white">
              <option value={1}>Destination 1</option>
              <option value={2}>Destination 2</option>
              <option value={3}>Destination 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold">Special Request</label>
            <textarea className="w-full p-2 bg-transparent border rounded text-white" placeholder="Special Request" style={{ height: 100 }}></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-900/5 border py-2 rounded border-white  hover:bg-white hover:text-black transition">
            Book Now
          </button>
        </form>
      </div>
    </div>
    {/* Booking Start */}
    </div>
  )
}

export default Booking
