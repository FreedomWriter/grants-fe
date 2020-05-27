import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../actions/profileActions";

const initialState = {
  profileDetails: {},
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileDetails: action.payload,
        isLoading: false,
      };

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default profileReducer;
