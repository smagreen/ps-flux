import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        onChange={props.onChange}
        name="name"
        label="Name"
        value={props.author.name}
        error={props.errors.name}
      />
      <button
        type="cancel"
        className="btn btn-secondary"
        onClick={props.onCancel}
      >
        Cancel
      </button>
      &nbsp;
      <input default type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default AuthorForm;
