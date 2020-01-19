import { notifyError, notifySuccess } from '../services/NotificationService'
import {getToolkitContentById} from "../services/BackendClient"
export const SEND_FETCH_TOOLKIT_CONTENT_REQUEST = "SEND_FETCH_TOOLKIT_CONTENT_REQUEST"
export const SEND_FETCH_TOOLKIT_CONTENT_SUCCESS = "SEND_FETCH_TOOLKIT_CONTENT_SUCCESS"
export const SEND_FETCH_TOOLKIT_CONTENT_FAILURE = "SEND_FETCH_TOOLKIT_CONTENT_FAILURE"

const sendFetchToolkitContentRequest = () => ({
  type: SEND_FETCH_TOOLKIT_CONTENT_REQUEST
})

const sendFetchToolkitContentSuccess = (payload) => ({
  type: SEND_FETCH_TOOLKIT_CONTENT_SUCCESS,
  payload
})

const sendFetchToolkitContentFailure = () => ({
  type: SEND_FETCH_TOOLKIT_CONTENT_FAILURE
})

export const getToolkitContent = (slug, toolkitId) => (dispatch) => {
    dispatch(sendFetchToolkitContentRequest())
    console.log(slug)
    
    getToolkitContentById(slug)
        .then(( response ) => {
          const [pageContent] = response
          const contentHtml = pageContent.content.rendered
            const object = { id: toolkitId, content: contentHtml }
            dispatch(sendFetchToolkitContentSuccess(object))
        })
        .catch(error => {
            console.log(error)
            dispatch(sendFetchToolkitContentFailure())
        })

}