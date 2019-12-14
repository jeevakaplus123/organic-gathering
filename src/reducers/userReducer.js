import * as actions from "../actions/userActions"

const initialState = {}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH_DATA_UPDATE:
            return {
                ...state,
                ...action.userData
            }
        case actions.FETCH_USER_SUCCESS:
            return {
                ...state,
                ...action.userAccount
            }
        default:
            return state
    }
}