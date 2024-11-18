import React, { useEffect, useState } from "react";
import "./Features.css";
import mainthumb1 from "../../assets/images/c1.jpg"; // Update image paths as needed
import mainthumb2 from "../../assets/images/c2.jpg"; // Placeholder image
import mainthumb3 from "../../assets/images/c3.jpg";
import mainthumb4 from "../../assets/images/c4.jpg";
import mainthumb5 from "../../assets/images/c5.jpg";
import mainthumb6 from "../../assets/images/c6.jpeg";
import mainthumb7 from "../../assets/images/c7.jpg";
import axios from "axios";

const Features = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/courses")
      .then((response) => {
        console.log("Courses data:", response.data); // Debug
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses", error);
      });
  }, []);

  return (
    <div className="features-container">
      <h2 className="heading-with-lines">Most Popular Courses</h2>
      <div className="courses-list">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image || mainthumb1} // Fallback to a default image
                alt={course.title}
                className="course-image"
              />
              <div className="course-price">{course.price}</div>
              <div className="course-rating">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span className="reviews-text">{course.review}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p>
                <span role="img" aria-label="students">
                  👥
                </span>{" "}
                {course.student} Students
              </p>
              <p>
                <span role="img" aria-label="lessons">
                  📚
                </span>{" "}
                {course.lesson} Lessons
              </p>
              <p>
                <span role="img" aria-label="duration">
                  ⏱️
                </span>{" "}
                {course.duration}
              </p>
              <button className="learn-button">Learn</button>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default Features;
