export const Init = () => {
  return async dispatch => {
    const token = localStorage.getItem("access");
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
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