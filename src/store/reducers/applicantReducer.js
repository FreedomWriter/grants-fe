import {
  GET_GRANTS_START,
  GET_GRANTS_SUCCESS,
  GET_GRANTS_ERROR
} from '../actions/ApplicantActions';

const initialState = {
  getGrantsStart: false,
  getGrantsError: false,
  postGrantstart: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GRANTS_START:
      return {
        ...state,
        getGrantsStart: true
      };

    case GET_GRANTS_SUCCESS:
      return {
        ...state,
        getGrantsStart: false,
        grants: action.payload
      };

    case GET_GRANTS_ERROR:
      return {
        ...state,
        getGrantsStart: false,
        getGrantsError: true
      };

    default:
      return state;
  }
};

export default applicantReducer;
