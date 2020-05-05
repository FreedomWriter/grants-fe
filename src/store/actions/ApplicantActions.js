import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

export const GET_PROFILEINFO_START = 'GET_GRANTS_START'
export const GET_PROFILEINFO_SUCCESS = 'GET_GRANTS_SUCCESS'
export const GET_PROFILEINFO_ERROR = 'GET_GRANTS_ERROR'


export const getProfileInfo = (applicant_id) => dispatch => {
  dispatch({ type: GET_PROFILEINFO_START })

  axiosWithAuth(token)
    .get(/* insert api url here */)
    .then((res) => {
      dispatch({ 
        type: GET_PROFILEINFO_SUCCESS, 
        payload: res.data
      })
    })
    .catch((err) => { 
      dispatch({ 
      type: GET_PROFILE_ERROR,
      payload: "Cannot load profile information"
      });
    });
}

