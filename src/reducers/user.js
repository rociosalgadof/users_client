export default (state = {isLogged: false, user: {username:""}}, action) => {
    switch (action.type) {
      case "LOGOUT_USER" :
        return {...state, isLogged: false};
      case "LOGIN_USER":
        return {...state, isLogged: true};
      case "CREATE_USERNAME":
        return {...state, user: {...state.user, username: action.payload}};
      default:
        return state;
    }
  };