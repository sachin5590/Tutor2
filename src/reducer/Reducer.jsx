

 const initialState = "";

//  const initialState ={
//   account:{},
  
//  }



 const addEmployee = (state, payload) => {
  
   return {
     ...state,
      employees: [...(state.employees || []), payload],
   
   };
   
 };
 
 export const changeFormData = (state=initialState , action) => {
   
   switch (action.type) {
 
     case "FORMDATA":
       return addEmployee(state, action.payload);
     default:
       return state;
   }
 };
 



//  const register = (state, payload) => {
 
//    return {
//      ...state,
//       account: {...state.account,payload}
    
//    };
//  };
 
//  export const changeSignupData = (state=initialState , action) => {
// // console.log(...state,action.payload)
//    switch (action.type) {
//      case "SIGNUPDATA":
//        return register(state, action.payload);
//      default:
//        return state;
//    }
//  };
 
 



 
//  const login = (state, payload) => {
//    return {
//      ...state,
//     // loginaccount: true ,payload
//     loginaccount: {
//       isAuthenticated: true,
//     email:payload.email,
//     password:payload.password
      
//     }
//    };
//  };
//  export const changeLoginData = (state=initialState , action) => {
//    switch (action.type) {
//      case "LOGINDATA":
//        return login(state, action.payload);
//      default:
//        return state;
//    }
//  };
 
 

//  const userlogout = (state, payload) => {
//   console.log("reducer",...state);
//   return {
//     ...state,
//    // loginaccount: false ,payload

//    loginaccount: {
//     isAuthenticated: false,
//   // email:payload.email,
//   // password:payload.password
    
//   }
//   };
// };

//  export const logoutData = (state=initialState , action) => {
  
//   switch (action.type) {
    
//     case "LOGOUTDATA":
//       return userlogout(state,action.payload)
//     default:
//       return state;
//   }
// };




 
 // const addEmployee = (state, payload) => {
   
 //   return {
 //     ...state,
 //     employees: [...(state.employees || []), payload],
   
 //   };
   
 // };











// const initialState = "";

// const changeTheNumber = (state = initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             return state = action.payload;

//             default:
//                 return state;
//     }
// }

// export default changeTheNumber;