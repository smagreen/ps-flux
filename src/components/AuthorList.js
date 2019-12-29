import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Author</th>
          <th>
            <Link className="btn btn-primary" to="/author">
              Add Author
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map(author => {
          return (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>
                <Link to={"/author/" + author.id}>{author.name}</Link>
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    props.deleteAuthor(author.id);
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

AuthorList.propTypes = {
  deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

AuthorList.defaultProps = {
  authors: []
};
export default AuthorList;
