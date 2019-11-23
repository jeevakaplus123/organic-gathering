import { combineReducers } from "redux"
import { userReducer as user } from "./userReducer"
import { registerReducer as register } from "./registerReducer"
import { loginReducer as login } from "./loginReducer"

export default combineReducers({
    user,
    // register,
    // login
})