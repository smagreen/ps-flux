import React, { useState, useEffect } from "react";
import authorStore from "../stores/authorStore";
import AuthorForm from "./AuthorForm";
import { toast } from "react-toastify";
import * as authorActions from "../actions/authorActions";

const ManageAuthorPage = props => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: null,
    name: ""
  });

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (id) {
      setAuthor(authorStore.getAuthorById(id));
    }

    return () => {
      authorStore.removeChangeListener(onChange);
    };
  }, [authors.length, props.match.params.id]);

  const onChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  const handleChange = event => {
    setAuthor({
      ...author,
      [event.target.name]: event.target.value
    });
  };

  const formIsValid = event => {
    const _errors = {};

    if (!author.name) _errors.name = "Name is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    authorActions.saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author Saved.");
    });
  };

  const handleCancel = event => {
    event.preventDefault();
    toast.warn("Cancelled");
    props.history.push("/authors");
  };

  return (
    <>
      <h2>Manage Author</h2>
      <AuthorForm
        errors={errors}
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
};

export default ManageAuthorPage;
