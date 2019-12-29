import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorStore";
import { toast } from "react-toastify";

const CoursePage = () => {
  // const [courses, setCourses] = useState(courseStore.getCourses());
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    authorStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (authorStore.getAuthors().length === 0) loadAuthors();
    // remove change listener when component unmounts
    return () => {
      courseStore.removeChangeListener(onChange);
      authorStore.removeChangeListener(onChange);
    };
  }, []);

  const onChange = () => {
    setAuthors(authorStore.getAuthors());
    setCourses(courseStore.getCourses());
  };

  const handleDelete = course => {
    deleteCourse(course).then(() => {
      toast.success("Course Deleted.");
    });
  };

  const getAuthorName = id => {
    if (authors.length === 0) return "";
    let n = authors.find(a => a.id === id);
    return n ? n.name : "Unknown";
  };

  return (
    <>
      <h2>Courses</h2>

      <CourseList
        courses={courses}
        deleteCourse={handleDelete}
        getAuthorName={getAuthorName}
      />
    </>
  );
};

export default CoursePage;
