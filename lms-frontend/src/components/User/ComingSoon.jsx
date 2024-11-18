// src/components/ComingSoon.js
import React from 'react';
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <section className="section coming-soon" data-section="section3">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-7 col-xs-12">
            <div className="continer centerIt">
              <div>
                <h4>Take <em>Offer for online course</em> for your next class</h4>
                <div className="counter">
                  <div className="days"><div className="value">00</div><span>Days</span></div>
                  <div className="hours"><div className="value">00</div><span>Hours</span></div>
                  <div className="minutes"><div className="value">00</div><span>Minutes</span></div>
                  <div className="seconds"><div className="value">00</div><span>Seconds</span></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-md-5">
            <div className="right-content">
              <div className="top-content">
                <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
              </div>
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-md-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input name="phone-number" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">Get it now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
