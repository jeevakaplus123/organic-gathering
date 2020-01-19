import { combineReducers } from "redux"
import { userReducer as user } from "./userReducer"
import { registerReducer as register } from "./registerReducer"
import { loginReducer as login } from "./loginReducer"
import { workshopReducer as workshop } from "./workshopReducer"
import { toolkitReducer as toolkit } from "./toolkitReducer"


export default combineReducers({
    user,
    // register,
    login,
    workshop,
    toolkit
})