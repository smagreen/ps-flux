import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>
            <Link className="btn btn-primary" to="/course">
              Add Course
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              {/* <td>{props.getAuthorName(course.authorId)}</td> */}
              <td>
                <Link to={"/author/" + course.authorId}>
                  {props.getAuthorName(course.authorId)}
                </Link>
              </td>
              <td>{course.category}</td>
              <td>
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    props.deleteCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  getAuthorName: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;
