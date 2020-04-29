import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'


export const GET_GRANTS_START = 'GET_GRANTS_START'
export const GET_GRANTS_SUCCESS = 'GET_GRANTS_SUCCESS'
export const GET_GRANTS_ERROR = 'GET_GRANTS_ERROR'

export const getGrants = (token) => dispatch => {
    dispatch({ type: GET_GRANTS_START })

    axiosWithAuth(token)
    .get(/* insert api url here */)
    .then(res =>{
      dispatch({ type: GET_GRANTS_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: GET_GRANTS_ERROR}))
}