import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ActivityIndicator, View, StyleSheet} from 'react-native'
import SettingsPage from './Settings'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'

import firebase from 'react-native-firebase'
class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users')
    this.state = {
      prayerRequest: false,
      stretchNotification: false,
      workshopNeeds: false,
      thought: false,
      initialLoading: false
  }
  }
  componentDidMount(){
    SplashScreen.hide()

}

static getDerivedStateFromProps(nextProps, state){
  const notificationObject = JSON.stringify(nextProps.navigation.getParam('pushNotificationObject', 'NO-ID'))
  /* Return the new state object that should result from nextProps */
  const notificationJsonObject = JSON.parse(notificationObject)
  
  if(!state.initialLoading){
    return {
      prayerRequest : notificationJsonObject.prayerRequest,
      stretchNotification: notificationJsonObject.stretchNotification,
      workshopNeeds: notificationJsonObject.workshopNeeds,
      thought: notificationJsonObject.thought
     }
  }
  return null
}

_onPressToggle = (event) => (value) =>{

  this.setState(
      {
          [event]: value,
          initialLoading: true
      }
  )    
}

_onPressSubmit = () => {
  const uidString = JSON.stringify(this.props.navigation.getParam('uid', 'NO-ID'))
  /* Return the new state object that should result from nextProps */
  const uidJson = JSON.parse(uidString)
  const { prayerRequest, stretchNotification, workshopNeeds, thought } = this.state
  this.ref.doc(uidJson).update({
    prayerRequest: prayerRequest,
      stretchNotification: stretchNotification,
      workshopNeeds: workshopNeeds,
      thought: thought
})
setTimeout(() => {
  this.props.navigation.navigate("Home")
}, 2000)


}

  render() {
    return (
      <SettingsPage
      onPressToggle={this._onPressToggle}
      onPressSubmit={this._onPressSubmit}
       { ...this.state } 
       />
    )
  }
}

// const mapStateToProps = () => ({})
// const mapDispatchToProps = (dispatch) => ({
//     authDataToState: (data) => dispatch(setAuthData(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Settings)
export default Settings