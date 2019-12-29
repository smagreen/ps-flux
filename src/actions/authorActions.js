import dispatcher from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./actionTypes";

export function saveAuthor(author) {
  return authorApi.saveAuthor(author).then(saveAuthor => {
    dispatcher.dispatch({
      actionType: author.id
        ? actionTypes.UPDATE_AUTHOR
        : actionTypes.CREATE_AUTHOR,
      author: saveAuthor
    });
  });
}

export function loadAuthors() {
  return authorApi.getAuthors().then(authors => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors
    });
  });
}

export function deleteAuthor(authorId) {
  return authorApi.deleteAuthor(authorId).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_AUTHOR,
      authorId
    });
  });
}
