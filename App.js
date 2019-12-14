/**
 * React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react'
import Routes from './src/routes'
import NavigationService from './src/services/NavigationService'
import ConfigureStore from "./src/reducers/store"
import { Provider } from "react-redux"
import * as firebase from 'firebase'
const { store } = ConfigureStore()

// firebase.initializeApp(firebaseConfig)
export default function App() {
  return (
    <Provider store={store}>
        <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
      }}
        />
    </Provider>
  )
}
