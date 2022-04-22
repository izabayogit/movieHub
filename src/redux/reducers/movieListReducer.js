/* eslint-disable import/no-anonymous-default-export */
import * as type from "../actionTypes";
import { movieListInitialStates } from "../initialStates";
const initState = movieListInitialStates;
export default function (state = initState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case type.ALL_MOVIES_START:
      console.log(state, "..");
      return {
        ...state,
        movieList: {
          loading: true,
          success: false,
          data: null,
          error: null,
        },
      };
    case type.ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: {
          loading: false,
          success: true,
          data: action.payload,
          error: null,
        },
      };
    case type.ALL_MOVIES_FAILURE:
      return {
        ...state,
        movieList: {
          loading: false,
          success: false,
          data: null,
          error: action.payload,
        },
      };
    case type.ALL_MOVIES_END:
      return {
        ...state,
        movieList: { ...state.movieList },
      };
  }
  // eslint-disable-next-line default-case
  switch (action.type) {
    case type.SINGLE_MOVIE_START:
      return {
        ...state,
        movie: {
          loading: true,
          success: false,
          data: null,
          error: null,
        },
      };
    case type.SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: {
          loading: false,
          success: true,
          data: action.payload,
          error: null,
        },
      };
    case type.SINGLE_MOVIE_FAILURE:
      return {
        ...state,
        movie: {
          loading: false,
          success: false,
          data: null,
          error: action.payload,
        },
      };
    case type.SINGLE_MOVIE_END:
      return {
        ...state,
        movie: { ...state.movie },
      };
  }
  switch (action.type) {
    case type.GET_CHARACTERS_START:
      return {
        ...state,
        character: {
          loading: true,
          success: false,
          data: null,
          error: null,
        },
      };
    case type.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        character: {
          loading: false,
          success: true,
          data: action.payload,
          error: null,
        },
      };
    case type.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        character: {
          loading: false,
          success: false,
          data: null,
          error: action.payload,
        },
      };
    case type.GET_CHARACTERS_END:
      return {
        ...state,
        character: { ...state.character },
      };
    default:
      return state;
  }
}
