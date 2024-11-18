import React, { useState } from "react";
import axios from "axios";

const CreateCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    price: "",
    review: "",
    description: "",
    lesson: "",
    student: "",
    duration: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Basic form validation
    if (!course.title || !course.price || !course.description) {
      setErrorMessage("Title, price, and description are required.");
      setLoading(false);
      return;
    }

    if (isNaN(course.price) || course.price <= 0) {
      setErrorMessage("Please enter a valid positive price.");
      setLoading(false);
      return;
    }

    // Sending data to the backend
    axios
      .post("http://localhost:8080/api/courses/create", course)
      .then((response) => {
        setSuccessMessage("Course created successfully");
        setCourse({
          title: "",
          price: "",
          review: "",
          description: "",
          lesson: "",
          student: "",
          duration: "",
          image: "",
        });
      })
      .catch((error) => {
        setErrorMessage(
          error.response ? error.response.data.message : "Error creating course"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={course.price}
          onChange={(e) => setCourse({ ...course, price: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Review</label>
        <input
          type="text"
          value={course.review}
          onChange={(e) => setCourse({ ...course, review: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          disabled={loading}
        ></textarea>
      </div>
      <div>
        <label>Lessons</label>
        <input
          type="text"
          value={course.lesson}
          onChange={(e) => setCourse({ ...course, lesson: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Students</label>
        <input
          type="text"
          value={course.student}
          onChange={(e) => setCourse({ ...course, student: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Duration</label>
        <input
          type="text"
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          disabled={loading}
        />
      </div>
      <div>
        <label>Image Link</label>
        <input
          type="text"
          value={course.image}
          onChange={(e) => setCourse({ ...course, image: e.target.value })}
          disabled={loading}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Course"}
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default CreateCourse;
