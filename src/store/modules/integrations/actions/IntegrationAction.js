import API_ROUTE from "../../../../constants/routes";
import axios from 'axios'
import { BEFORE_STATE_INTEGRATION, FETCH_INTEGRATIONS, FETCH_INTEGRATIONS_ERROR, GET_INTEGRATION_SUCCESS, GET_INTEGRATION_ERROR, CREATE_INTEGRATION_SUCCESS, CREATE_INTEGRATION_ERROR, UPDATE_INTEGRATION_SUCCESS, UPDATE_INTEGRATION_ERROR, DELETE_INTEGRATION_SUCCESS, DELETE_INTEGRATION_ERROR, FETCH_AUTH_INTEGRATIONS, FETCH_AUTH_INTEGRATIONS_ERROR  } from '../integrationsTypes/index'
import  {history} from '../../../../history'

 
export const fetchINTEGRATIONs = () => {


  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_INTEGRATION })

    try {
      const res  = await axios.get(`${API_ROUTE}/retrieveitems`)
      console.log("these are the post: ", res.data.response)
      dispatch({ type: FETCH_POSTS, payload: res.data.response })
    } catch(err){
      dispatch({ type: FETCH_POSTS_ERROR, payload: err.response ? err.respons.data.error : "" })
    }
  }
}

export const fetchPost = id => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res  = await axios.get(`${API_ROUTE}/posts/${id}`)
      dispatch({ type: GET_POST_SUCCESS, payload: res.data.response })
    } catch(err){
      dispatch({ type: GET_POST_ERROR, payload: err.response.data.error })
      history.push('/'); //incase the user manually enter the param that dont exist
    }
  }
}

export const fetchAuthPosts = id => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res  = await axios.get(`${API_ROUTE}/user_posts/${id}`)
      dispatch({ type: FETCH_AUTH_POSTS, payload: res.data.response })
    } catch(err){
      dispatch({ type: FETCH_AUTH_POSTS_ERROR, payload: err.response.data.error })
    }
  }
}

export const createPost = (createPost) => {
  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res = await axios.post(`${API_ROUTE}/posts`, createPost)
      dispatch({ 
        type: CREATE_POST_SUCCESS,  
        payload: res.data.response
      })
      history.push('/');
    } catch(err) {
      dispatch({ type: CREATE_POST_ERROR, payload: err.response.data.error })
    }
  }
}

export const updatePost = (updateDetails, updateSuccess) => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res = await axios.put(`${API_ROUTE}/posts/${updateDetails.id}`, updateDetails)
      dispatch({ 
        type: UPDATE_POST_SUCCESS,
        payload: res.data.response
      })
      updateSuccess()
    } catch(err) {
      dispatch({ type: UPDATE_POST_ERROR, payload: err.response.data.error })
    }
  }
}

export const deletePost = (id) => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res = await axios.delete(`${API_ROUTE}/posts/${id}`)
      dispatch({ 
        type: DELETE_POST_SUCCESS,
        payload: {
          deletedID: id,
          message: res.data.response
        } 
      })
      history.push('/');
    } catch(err) {
      dispatch({ type: DELETE_POST_ERROR, payload: err.response.data.error })
    }
  }
}