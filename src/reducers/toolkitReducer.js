import * as actions from "../actions/toolkitActions"

const initialState = {
    isLoading: false,
    initialLoading: true,
    content: []
}

export const toolkitReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SEND_FETCH_TOOLKIT_CONTENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.SEND_FETCH_TOOLKIT_CONTENT_SUCCESS:
        const {payload} = action
            return {
                ...state,
                content: (state.content.some(item => item.id === payload.id)) ? [...state.content] : [...state.content, payload],
                initialLoading: false,
                isLoading: false
            }
        case actions.SEND_FETCH_TOOLKIT_CONTENT_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}


