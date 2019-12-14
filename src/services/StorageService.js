
import { saveData } from "../utils/asyncStorage"
import { fetchUserSuccess, setAuthData } from "../actions/userActions"
import firebase from 'react-native-firebase'
let userData = {}
export const onCollectionUpdate = (user, keepMeLoggedIn) => querySnapshot => {
    //  console.log(user);
    //  console.log(querySnapshot);
    //  console.log(dispatch);
   
    const {
            _user: { email: userEmail, uid },
        } = user
        console.log(userEmail)
    
        querySnapshot.forEach(doc => {
            if (doc.exists) {
                const { email, phoneNumber,
                    firstName,
                    lastName,
                    address,
                    city,
                    state,
                    zip,
                    dagger,
                    newName,
                    cradleSong,
                    prayerRequest,
                    stretchNotification,
                    workshopNeeds,
                    thought,
                    fcmToken } = doc.data()

                if (email === userEmail) {
                    const userObject = {uid,
                        email,
                        phoneNumber,
                        firstName,
                        lastName,
                        address,
                        city,
                        state,
                        zip,
                        dagger,
                        newName,
                        cradleSong,
                        prayerRequest,
                        stretchNotification,
                        workshopNeeds,
                        thought,
                        fcmToken}

                        if(keepMeLoggedIn){
                            saveData("STORAGE_KEY",
                            JSON.stringify(userObject)
                        )
                        }
                        console.log(userObject)
                        setAuthData(userObject)
                        // dispatch(fetchUserSuccess(userObject))
                        
                    }
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!')
            }
        })
    }

    export const authStorage = async (user, keepMeLoggedIn) => {
        await firebase.firestore().collection('users').onSnapshot(onCollectionUpdate(user, keepMeLoggedIn))
    }


