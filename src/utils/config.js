export const firebaseConfig =  {
  apiKey: "AIzaSyCbzhsFQMp5O5GwNEOCW7BwnK9_i41r3KU",
  authDomain: "organic-gathering-5bb02.firebaseapp.com",
  databaseURL: "https://organic-gathering-5bb02.firebaseio.com",
  projectId: "organic-gathering-5bb02",
  storageBucket: "organic-gathering-5bb02.appspot.com",
  messagingSenderId: "909458343921",
  appId: "1:909458343921:web:b57daae82fefccd6596650"
}

export const backendBaseUrl = "https://www.eventbriteapi.com/v3"

export const checkStatusAndGetJSON = (fetchResponse) => new Promise((resolve, reject) => {    
  if (fetchResponse.ok) {
      resolve(fetchResponse.json())
  }
  else {
      fetchResponse
          .json() // convert APT error to json
          .then(error => reject(error)) // reject converted error
          .catch(error => {
              reject({ message: "There was an error. Please try again." })
          }) // Add error reporting
  }
})
