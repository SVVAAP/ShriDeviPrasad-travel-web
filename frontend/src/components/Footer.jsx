import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <h1 className="text-white font-bold text-4xl mb-3 text-center">Shri Devi Prasad</h1>
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            {/* Company Section */}
            <div className="col-lg-3 col-md-6 ">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" href="/">
                About Us
              </a>
              <a className="btn btn-link" href="/">
                Contact Us
              </a>
              <a className="btn btn-link" href="/">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="/">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="/">
                FAQs &amp; Help
              </a>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-6 text-center">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Udupi, Karnataka, India
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                Proprietor Mahesh Ganiga Palimar: +91 9980721592
                <br />
                Yathish: +91 7619255137
                <br />
                Reshma Martis: +91 6366031063
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                workwithsvvaap@gmail.com
              </p>
              <div className="d-flex pt-2 justify-content-center">
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-3 col-md-6 text-center">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Subscribe to our newsletter for updates.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="container">
          <div className="copyright">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Svvaap Innovations
                </a>
                , All Right Reserved.
                Designed By{" "}
                <a className="border-bottom" href="https://github.com/SVVAAP">
                  svvaap
                </a>
                <br />
                <h5 className="text-white mt-3">Shri Devi Prasad Tout and Travels</h5>
              </div>
              <div className="col-md-6 text-center">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/">Cookies</a>
                  <a href="/">Help</a>
                  <a href="/">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}
