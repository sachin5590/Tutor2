import {changeFormData} from "./Reducer";
import{changeSignupData} from "./signupReducer"
import {changeLoginData} from "./loginReducer"
import {logoutData} from "./logoutReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeFormData,
    changeSignupData,
    changeLoginData,
    logoutData
})

export default rootReducer;