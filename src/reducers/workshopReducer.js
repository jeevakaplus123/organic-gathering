import * as actions from "../actions/workshopActions"

const initialState = {
    isLoading: false,
    initialLoading: true
}

export const workshopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SEND_FETCH_WORKSHOP_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.SEND_FETCH_WORKSHOP_LIST_SUCCESS:
            return {
                ...state,
                events: action.payload,
                initialLoading: false,
                isLoading: false
            }
        case actions.SEND_FETCH_WORKSHOP_LIST_FAILURE:
            return {
                ...state            }
        default:
            return state
    }
}


