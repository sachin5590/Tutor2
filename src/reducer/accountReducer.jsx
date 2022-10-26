const initialState = {};
 
const login = (state, { email, password }) => {
  return {
    ...state,
    email,
    password,
    isLoggedIn: true
  };
};

const signUp = (payload) => {
  return {
    isLoggedIn: false,
    ...payload
  };
};

const logout = () => {
  return {
    isLoggedIn: false
  };
}

  const accountReducer = (state=initialState , action) => {
    switch (action.type) {
      case "login":
        return login(state, action.payload);

      case "signUp":
        return signUp(action.payload);

      case "logout":
        return logout();

      default:
        return state;
    }
  };
  
export default accountReducer;
  