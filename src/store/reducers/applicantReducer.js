import {
  GET_PROFILEINFO_START,
  GET_PROFILEINFO_SUCCESS,
  GET_PROFILEINFO_ERROR
} from '../actions/ApplicantActions';

const initialState = {
  grants: [
    {
      id: null, 
      applicant_profile_id: null, 
      contact_name: null,
      org_name: null,
      grant_name: null,
      due_date: null,
      sector: null,
      description: null
    }
  ],
  applicantProfileDetails: {
    id: null,
    name: null,
    organization: null,
    sector: null,
    bio: null
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
