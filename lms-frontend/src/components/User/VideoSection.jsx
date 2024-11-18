// src/components/VideoSection.js
import React from 'react';
import './VideoSection.css';
import mainthumb from "../../assets/images/main-thumb.png"

const VideoSection = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <h4>Watch the video to learn more <em>about Learning Kidz</em></h4>
              <div className="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <h4>Course for you</h4>
              </div>
              <figure>
                <a href="" className="play">
                  <img src={mainthumb} alt="Video Thumbnail" />
                </a>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
