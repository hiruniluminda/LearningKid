// src/components/ContactSection.js
import React from 'react';
import './ContactSection.css'


const ContactSection = () => {
  return (
    <section className="section contact" data-section="section6" id='section6'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Let’s Keep In Touch</h2>
            </div>
          </div>
          <div className="col-md-6">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required="" />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required="" />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">Send Message Now</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div id="map">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
