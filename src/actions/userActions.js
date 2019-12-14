import { readData } from "../utils/asyncStorage"

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

export const AUTH_DATA_UPDATE = "AUTH_DATA_UPDATE"

export const authDataUpdate = (userData) => ({
    type: AUTH_DATA_UPDATE,
    userData
})

export const fetchUserSuccess = (userAccount) => ({
    type: FETCH_USER_SUCCESS,
    userAccount
})

export const setAuthData = (data = false) => (dispatch) => {
    if (data) dispatch(authDataUpdate(data))
    else readData("STORAGE_KEY").then((userData) => { dispatch(authDataUpdate(userData)) })
}