import * as type from "../actionTypes/index";
import { apiRequest } from "../../utils/apiRequest";
export const getMovieList = () => async (dispatch) => {
  dispatch(
    apiRequest(
      type.ALL_MOVIES_SUCCESS,
      "get",
      null,
      type.ALL_MOVIES_FAILURE,
      type.ALL_MOVIES_SUCCESS,
      type.ALL_MOVIES_END,
      "films"
    )
  );
};

export const getMovie = (id) => async (dispatch) => {
  dispatch(
    apiRequest(
      type.SINGLE_MOVIE_SUCCESS,
      "get",
      null,
      type.SINGLE_MOVIE_FAILURE,
      type.SINGLE_MOVIE_SUCCESS,
      type.SINGLE_MOVIE_END,
      `films/${id}`
    )
  );
};

export const getCharacters = (id) => async (dispatch) => {
  dispatch(
    apiRequest(
      type.GET_CHARACTERS_SUCCESS,
      "get",
      null,
      type.GET_CHARACTERS_FAILURE,
      type.GET_CHARACTERS_SUCCESS,
      type.GET_CHARACTERS_END,
      `people/${id}`
    )
  );
};
