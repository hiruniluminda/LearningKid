// src/components/CourseCard.js
import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  // Add a fallback in case course is undefined or the properties are missing
  if (!course) {
    return <div>No course data available</div>;
  }

  return (
    <div className="item">
      <img src={course.image || 'default-image.jpg'} alt={course.title || 'Course Title'} />
      <div className="down-content">
        <h4>{course.title || 'Untitled Course'}</h4>
        <p>{course.description || 'No description available'}</p>
        <div className="author-image">
          <img src={course.authorImage || 'default-author-image.jpg'} alt={course.authorName || 'Author Name'} />
        </div>
        <div className={`text-button-${course.isFree ? 'free' : 'pay'}`}>
          <a href="#">{course.isFree ? 'Free' : 'Pay'} <i className="fa fa-angle-double-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
