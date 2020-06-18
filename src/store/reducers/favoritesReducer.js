import {
  FAVORITE_POST_START,
  FAVORITE_POST_SUCCESS,
  FAVORITE_POST_FAILURE,
  FAVORITE_GET_START,
  FAVORITE_GET_SUCCESS,
  FAVORITE_GET_FAILURE,
  FAVORITE_DELETE_START,
  FAVORITE_DELETE_SUCCESS,
  FAVORITE_DELETE_FAILURE,
} from "../actions/favoritesActions";

const initialState = {
  favoritesCount: 0,
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case FAVORITE_POST_SUCCESS:
      return {
        ...state,
        favoritesCount: state.favoritesCount + 1,

        favorites: [
          ...state.favorites,
          { ...action.payload, writer_favorite: true },
        ],
      };
    case FAVORITE_POST_FAILURE:
      return {
        ...state,
        error: "action.payload",
      };
    case FAVORITE_GET_START:
      return {
        ...state,
        isLoading: true,
      };
    case FAVORITE_GET_SUCCESS:
      return {
        ...state,

        isLoading: false,
      };
    case FAVORITE_GET_FAILURE:
      return {
        ...state,
        error: "action.payload",
        isLoadind: false,
      };
    case FAVORITE_DELETE_START:
      return {
        ...state,
        isLoading: true,
      };
    case FAVORITE_DELETE_SUCCESS:
      return {
        ...state,
        favoritesCount: state.favoritesCount - 1,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
        isLoading: false,
      };
    case FAVORITE_DELETE_FAILURE:
      return {
        ...state,
        error: "action.payload",
        isLoading: false,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
