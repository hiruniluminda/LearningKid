// src/components/CourseCarousel.js
import React from 'react';
import CourseCard from './CourseCard';
import courseImage from '../../assets/images/courses-01.jpg'
import authorImage from '../../assets/images/author-01.png'
import courseImage2 from '../../assets/images/courses-02.jpg'
import authorImage2 from '../../assets/images/author-02.png'
import './CourseCarousel.css'

const courses = [
  {
    title: 'Digital Marketing',
    description: 'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    image: courseImage,
    authorImage: authorImage,
    authorName: 'Author 1',
    isFree: false,
  },
  {
    title: 'Business World',
    description: 'Quisque cursus augue ut velit dictum, quis volutpat enim blandit.',
    image: courseImage2,
    authorImage: authorImage2,
    authorName: 'Author 2',
    isFree: true,
  },

];

const CourseCarousel = () => {
  return (
    <section className="section courses" data-section="section4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your Course</h2>
            </div>
          </div>
          <div className="owl-carousel owl-theme">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
