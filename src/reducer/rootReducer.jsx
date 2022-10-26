import {changeFormData} from "./Reducer";
import account from "./accountReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeFormData,
    account
})

export default rootReducer;