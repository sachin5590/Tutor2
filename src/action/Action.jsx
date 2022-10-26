

export const formData = (data)=>{
    console.log(data)
    return{
        type:"FORMDATA",
        payload:data
        
    }
}

export const signUpData = (payload)=>{
    return{
        type: "signUp",
        payload
    }
}

export const loginData = (data)=>{
    return{
        type: "login",
        payload: data
    }
}

export const logout = (data)=>{
    return{
        type: "logout",
        payload:data
        
    }
}