import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";

const CoursePage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    // remove change listener when component unmounts
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const handleDelete = course => {
    deleteCourse(course).then(() => {
      toast.success("Course Deleted.");
    });
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={handleDelete} />
    </>
  );
};

export default CoursePage;
