import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import { loadAuthors, deleteAuthor } from "../actions/authorActions";
import authorStore from "../stores/authorStore";
import { toast } from "react-toastify";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    // remove change listener when component unmounts
    return () => authorStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  const handleDelete = author => {
    deleteAuthor(author).then(() => {
      toast.success("Author Deleted.");
    });
  };

  return (
    <>
      <h2>Authors</h2>
      <AuthorList authors={authors} deleteAuthor={handleDelete} />
    </>
  );
};

export default AuthorsPage;
