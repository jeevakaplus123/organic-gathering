import { notifyError, notifySuccess } from '../services/NotificationService'
import {getWorkshopList} from "../services/BackendClient"
export const SEND_FETCH_WORKSHOP_LIST_REQUEST = "SEND_FETCH_WORKSHOP_LIST_REQUEST"
export const SEND_FETCH_WORKSHOP_LIST_SUCCESS = "SEND_FETCH_WORKSHOP_LIST_SUCCESS"
export const SEND_FETCH_WORKSHOP_LIST_FAILURE = "SEND_FETCH_WORKSHOP_LIST_FAILURE"

const sendFetchWorkshopRequest = () => ({
  type: SEND_FETCH_WORKSHOP_LIST_REQUEST
})

const sendFetchWorkshopSuccess = (payload) => ({
  type: SEND_FETCH_WORKSHOP_LIST_SUCCESS,
  payload
})

const sendFetchWorkshopFailure = () => ({
  type: SEND_FETCH_WORKSHOP_LIST_FAILURE
})

export const getWorkshops = (token) => (dispatch) => {
    dispatch(sendFetchWorkshopRequest())
    console.log(token)
    
    getWorkshopList(token)
        .then(( response ) => {
          console.log(response)
          const events = {events: response.events}
            console.log(events)
            
            dispatch(sendFetchWorkshopSuccess(events))
        })
        .catch(error => {
            console.log(error)
            dispatch(sendFetchWorkshopFailure())
        })

}