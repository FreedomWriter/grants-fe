import {
    
    APPLICANT_ONBOARDING_POST_START,
    
    APPLICANT_ONBOARDING_POST_SUCCESS,
    
    APPLICANT_ONBOARDING_POST_FAILURE,
    REGISTER_POST_START,
    REGISTER_POST_SUCCESS,
    REGISTER_POST_FAILURE,
    LOGOUT,
  } from "../actions/
  APPLICANT_ONBOARDINGActions";
  
  const initialState = {
    user: "",
    isLoading: false,
  };
  
  const 
  APPLICANT_ONBOARDINGReducer = (state = initialState, action) => {
    switch (action.type) {
      case 
      APPLICANT_ONBOARDING_POST_START:
        return {
          ...state,
          isLoading: true,
        };
      case 
      APPLICANT_ONBOARDING_POST_SUCCESS:
        return {
          user: { id: action.payload.id, firstName: action.payload.firstName },
          loggedIn: true,
  
          isLoading: false,
        };
      case 
      APPLICANT_ONBOARDING_POST_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case REGISTER_POST_START:
        return {
          ...state,
          isLoading: true,
        };
      case REGISTER_POST_SUCCESS:
        return {
          user: { id: action.payload.id, firstName: action.payload.firstName },
          loggedIn: true,
  
          isLoading: false,
        };
      case REGISTER_POST_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case LOGOUT:
        localStorage.clear();
        window.location.href = "/";
        return {
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default 
  APPLICANT_ONBOARDINGReducer;
  