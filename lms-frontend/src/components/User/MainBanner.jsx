// src/components/MainBanner.js
import React from 'react';
import Video1 from "../../assets/images/course-video.mp4"
import './MainBanner.css'

const MainBanner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
        <source src={Video1} type="video/mp4" />
      </video>
      <div className="video-overlay header-text">
        <div className="caption">
          <h6>Learn And Win</h6>
          <h2><em>Your</em> Classroom</h2>
          <div className="main-button">
            <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
