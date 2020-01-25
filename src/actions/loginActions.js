import firebase from 'react-native-firebase'
import NavigationService from '../services/NavigationService'
import { fetchUserSuccess } from "../actions/userActions"
import { notifyError, notifySuccess } from '../services/NotificationService'
import { saveData } from "../utils/asyncStorage"
import { onCollectionUpdate, authStorage } from "../services/StorageService"
export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST"
export const SEND_LOGIN_SUCCESS = "SEND_LOGIN_SUCCESS"
export const SEND_LOGIN_FAILURE = "SEND_LOGIN_FAILURE"

const sendLoginRequest = () => ({
  type: SEND_LOGIN_REQUEST
})

const sendLoginSuccess = () => ({
  type: SEND_LOGIN_SUCCESS
})

const sendLoginFailure = () => ({
  type: SEND_LOGIN_FAILURE
})

export const emailSignIn = (email, password, keepMeLoggedIn, verificationStatus) => (dispatch) => {
  dispatch(sendLoginRequest())
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
          dispatch(fetchUserSuccess(res.user._user))
          // firebase.firestore().collection('users').onSnapshot(onCollectionUpdate(res.user, keepMeLoggedIn))
          
          // authStorage(res.user, keepMeLoggedIn)
          if(verificationStatus){
            if(keepMeLoggedIn){
              saveData("STORAGE_KEY",
              JSON.stringify(res.user)
          )
            }
            dispatch(sendLoginSuccess())
            NavigationService.navigate('Home')
          }

          NavigationService.navigate('Verification')

        })
      .catch(error => {
        dispatch(sendLoginFailure())
          console.log(error.message)

        notifyError(error.message)
      })
  } catch (error) {
    notifyError(error.message)
  }

}