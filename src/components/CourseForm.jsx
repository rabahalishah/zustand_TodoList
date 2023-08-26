import  { useState } from "react";
import useCourseStore from "../app/courseStore";
import "../App.css";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("Course Form rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button onClick={()=>{
        handleCourseSubmit();
      }} className="form-submit-btn">Add Course</button>
    </div>
  );
};

export default CourseForm;
