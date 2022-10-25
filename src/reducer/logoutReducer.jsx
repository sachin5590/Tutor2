const initialState = "";

 const userlogout = (state, payload) => {
    
    return {
      ...state,
    //  loginaccount: false 
  
     loginaccount: {
      isAuthenticated: false,
    // email:payload.email,
    // password:payload.password
      
    }
    };
  };
  
   export const logoutData = (state=initialState , action) => {
    
    switch (action.type) {
      
      case "LOGOUTDATA":
        return userlogout(state,action.payload)
      default:
        return state;
    }
  };