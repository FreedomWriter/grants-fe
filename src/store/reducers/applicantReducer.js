import {
  GET_PROFILEINFO_START,
  GET_PROFILEINFO_SUCCESS,
  GET_PROFILEINFO_ERROR
} from '../actions/ApplicantActions';

const initialState = {
  grants: [
    {grant_id: 1, grant_name: 'grant 1', grant_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus. Gravida neque convallis a cras semper. Habitasse platea dictumst quisque sagittis purus sit amet volutpat."},
  ],
  applicantProfileDetails: {
    id: null,
    name: null,
    organization: null,
    sector: null,
    biography: null
  },
  isLoading: false
};

const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILEINFO_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_PROFILEINFO_SUCCESS:
      return {
        ...state,
        grants: action.payload.grants,
        applicantProfileDetails: action.payload.applicantProfileDetails,
        isLoading: false
      };

    case GET_PROFILEINFO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default applicantReducer;
