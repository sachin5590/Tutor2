

export const formData = (data)=>{
    console.log(data)
    return{
        type:"FORMDATA",
        payload:data
        
    }
}

export const signUpData = (data)=>{
    console.log(data)
    return{
        type:"SIGNUPDATA",
        payload:data
        
    }
}

export const loginData = (data)=>{
    console.log("action login",data)
    return{
        type:"LOGINDATA",
        payload:data
        
    }
}

export const logout = (data)=>{
    console.log("logout",data)
    return{
        type:"LOGOUTDATA",
         payload:data
        
    }
}