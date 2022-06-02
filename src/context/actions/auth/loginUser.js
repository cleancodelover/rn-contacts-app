import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axios
      .post('/auth/login', {
        password,
        username,
      })
      .then(res => {
        console.log('Response :>>>', res.data);
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log('Error :>>>', err.response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
