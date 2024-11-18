import React from 'react';
import './WhyUs.css';
import mainthumb1 from "../../assets/images/about.jpg";

const WhyUs = () => {
  return (
    <section className="section why-us" data-section="section2" id='section2'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={mainthumb1} alt="main thumb" className="main-image" />
          </div>
          <div className="col-md-6">
            <div className="section-heading">
              <h2 className="heading-with-lines">About Us</h2>

              <p>
                At StudyGenius, we are passionate about making quality education accessible to everyone. Our platform is designed to empower learners with engaging resources and tools to achieve their academic and personal goals.              </p>
              <p>
                Our mission is to inspire growth through innovative learning experiences, fostering a community of knowledge seekers who are ready to excel in their journey.
              </p>
              <ul className="features-list">
                <li>➔ Skilled Instructors</li>
                <li>➔ International Certificate</li>
                {/* <li>➔ Online Classes</li> */}
                <li>➔ Interactive Content</li>
                <li>➔ Flexible Schedule</li>
              </ul>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
