import { REMOVE_MOVIE, ADD_MOVIE, EDIT_MOVIE, FILTER } from "./types";

export const removeMovie = id => {
  return {
    type: REMOVE_MOVIE,
    payload: id
  };
};
export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  };
};
export const editMovie = updatedMovie => {
  return {
    type: EDIT_MOVIE,
    payload: updatedMovie
  };
};
export const filter = data => {
  return {
    type: FILTER,
    payload: data
  };
};
