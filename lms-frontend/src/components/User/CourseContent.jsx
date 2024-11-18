import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CourseContent.css";

const CourseContent = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lessons/course/${courseId}`)
      .then((response) => {
        console.log("Lessons data:", response.data); // Debug
        setLessons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lessons", error);
      });
  }, [courseId]);

  return (
    <div className="course-content-container">
      <h2>Lessons for Course ID: {courseId}</h2>
      {lessons.length > 0 ? (
        <table className="lessons-table">
          <thead>
            <tr>
              <th>Lesson Title</th>
              <th>Video URL</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.lessonId}>
                <td>{lesson.lessonTitle}</td>
                <td>
                  <a href={lesson.videoUrl} target="_blank" rel="noreferrer">
                    Watch
                  </a>
                </td>
                <td>{lesson.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No lessons available for this course.</p>
      )}
    </div>
  );
};

export default CourseContent;
