import * as api from "../api/index";

export const loginUser = (user) => async (dispatch) => {
    try {
      const response = await api.loginUser(user);
      dispatch({ type: "LOGIN_USER"});
      return response
    } catch (error) {
      console.log(error.message);
      throw error
    }
};
  
export const logoutUser = () => async (dispatch) => {
    try {
      const response = await api.logoutUser();
      dispatch({ type: "LOGOUT_USER"});
      return response
    } catch (error) {
      console.log(error.message);
      throw error
    }
};


export const checkUser = (user) => async (dispatch) => {
  try {
    const response = await api.checkUser(user);
    if(response.data.error){
      throw new Error
    }else{
      dispatch({ type: "CREATE_USERNAME", payload: user.username });
    }
  } catch (error) {
    console.log(error.message);
    throw error
  }
};




