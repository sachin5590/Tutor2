const initialState = "";

 
 const login = (state, payload) => {
    return {
      ...state,
     // loginaccount: true ,payload
     loginaccount: {
       isAuthenticated: true,
     email:payload.email,
     password:payload.password
       
     }
    };
  };
  export const changeLoginData = (state=initialState , action) => {
    switch (action.type) {
      case "LOGINDATA":
        return login(state, action.payload);
      default:
        return state;
    }
  };
  
  