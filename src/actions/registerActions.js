import * as firebase from 'firebase'

export const emailSignUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(user)
    )
    .catch((err) => console.log(err))
  }