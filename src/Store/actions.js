import axios from "axios";
import { testURL } from "../Constants/helper";
export const Init = () => {
  return async dispatch => {
    try {
    const token = localStorage.getItem("access");
    const user = localStorage.getItem("user");
    dispatch({
      type: 'LOGIN',
      payload: {
        access: token,
        user: JSON.parse(user),
      },
    })
  }
  catch{
    dispatch({
      type: 'LOGIN',
      payload: {
        access: null,
        user: null,
      },
    })
  }
  }
}

export const LoginAction = (setLoading,data) => {
  return async dispatch => {
    try {
      setLoading(true);
      const res = await axios.post(testURL+'login/', data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.replace('/');
      dispatch({
        type: 'LOGIN',
        payload: {
          access: res.data.access,
          user: res.data.user,
        },
      })
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
}




export const LogoutAction = () => {
  return async dispatch => {
    localStorage.clear();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
  }
}