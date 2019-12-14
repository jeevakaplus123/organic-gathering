import * as actions from "../actions/loginActions"

const initialState = {
    isLoading: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SEND_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.SEND_LOGIN_SUCCESS:
            return initialState
        case actions.SEND_LOGIN_FAILURE:
            return initialState
        default:
            return state
    }
}


