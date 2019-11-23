import { applyMiddleware, createStore } from "redux"
import ReduxThunk from "redux-thunk"
import Logger from "redux-logger"
import rootReducer from "../reducers"

function configureStore() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, Logger))
    return { store }
}
export default configureStore