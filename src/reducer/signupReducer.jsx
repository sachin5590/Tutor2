const initialState = "";

const register = (state, payload) => {
 
    return {
      ...state,
       account: {...state.account,payload}
     
    };
  };
  
  export const changeSignupData = (state=initialState , action) => {
 // console.log(...state,action.payload)
    switch (action.type) {
      case "SIGNUPDATA":
        return register(state, action.payload);
      default:
        return state;
    }
  };
  
  