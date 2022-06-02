import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';
export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
export default ({
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
    email,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});
    axios
      .post('/auth/register', {
        password,
        username,
        first_name,
        last_name,
        email,
      })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
