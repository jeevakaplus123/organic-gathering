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

export const emailSignIn = (email, password, keepMeLoggedIn) => async (dispatch) => {

  dispatch(sendLoginRequest())
  try {
    const returnUser = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(fetchUserSuccess(res.user._user))
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {

          fetch(`https://firestore.googleapis.com/v1/projects/organic-gathering-82890/databases/(default)/documents/users/${res.user._user.uid}`,
            {
              method: 'get',
              headers: {
                'Authorization': `Bearer ${idToken}`
              }
            }
          )
            .then((response) => response.json()
            )
            .then(responseJson => {

              const { fields: { verificationStatus: { booleanValue } } } = responseJson

              if (booleanValue) {
                if (keepMeLoggedIn) {
                  saveData("STORAGE_KEY",
                    JSON.stringify(res.user)
                  )
                }
                dispatch(sendLoginSuccess())
                NavigationService.navigate('Home')
              }
              else {
                NavigationService.navigate('Verification')
              }
            }
            )
            .catch((error) => {
              console.error(error)
            })
        }).catch(function (error) {
          // Handle error
        })
      })
      .catch(error => {
        dispatch(sendLoginFailure())
        notifyError(error.message)
      })
  } catch (error) {
    notifyError(error.message)
  }

}