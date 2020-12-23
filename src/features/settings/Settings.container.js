import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ActivityIndicator, View, Text, TouchableOpacity} from 'react-native'
import SettingsPage from './Settings'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'
import Icon from "react-native-vector-icons/FontAwesome"
import style from "./Settings.stylesheet"

import firebase from 'react-native-firebase'
class Settings extends PureComponent {

static navigationOptions = ({navigation}) => ({
    headerStyle: {
        backgroundColor: "#3b4761"
},
headerRight: (
  <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
  <Text style={style.notificationText}>click to view all messages --></Text>
    <TouchableOpacity style= {{ marginRight: 15, padding: 5 }} onPress={() => navigation.navigate("Notifications", {pushNotificationObject: navigation.state.params.pushNotificationObject})}>
    <Icon color="white" name="bell" size={23}/>
    </TouchableOpacity>
    </View>
  ),
headerTintColor: "#ffffff"
})

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users')
    this.state = {
      prayerRequest: false,
      stretchNotification: false,
      workshopNeeds: false,
      thought: false,
      initialLoading: false,
      prayerRequest1: false,
      prayerRequest2: false,
      prayerRequest3: false,
      prayerRequest4: false,
      prayerRequest5: false,
      prayerRequest6: false,
      prayerRequest7: false,
      prayerRequest8: false,
      prayerRequest9: false,
      prayerRequest10: false,
      prayerRequest11: false,
      prayerRequest12: false,
      prayerRequest13: false,
      prayerRequest14: false,
      prayerRequest15: false,
      prayerRequest16: false,
      prayerRequest17: false,
      prayerRequest18: false,
      prayerRequest19: false,
      prayerRequest20: false
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
      thought: notificationJsonObject.thought,
      prayerRequest1: notificationJsonObject.prayerRequest1,
      prayerRequest2: notificationJsonObject.prayerRequest2,
      prayerRequest3: notificationJsonObject.prayerRequest3,
      prayerRequest4: notificationJsonObject.prayerRequest4,
      prayerRequest5: notificationJsonObject.prayerRequest5,
      prayerRequest6: notificationJsonObject.prayerRequest6,
      prayerRequest7: notificationJsonObject.prayerRequest7,
      prayerRequest8: notificationJsonObject.prayerRequest8,
      prayerRequest9: notificationJsonObject.prayerRequest9,
      prayerRequest10: notificationJsonObject.prayerRequest10,
      prayerRequest11: notificationJsonObject.prayerRequest11,
      prayerRequest12: notificationJsonObject.prayerRequest12,
      prayerRequest13: notificationJsonObject.prayerRequest13,
      prayerRequest14: notificationJsonObject.prayerRequest14,
      prayerRequest15: notificationJsonObject.prayerRequest15,
      prayerRequest16: notificationJsonObject.prayerRequest16,
      prayerRequest17: notificationJsonObject.prayerRequest17,
      prayerRequest18: notificationJsonObject.prayerRequest18,
      prayerRequest19: notificationJsonObject.prayerRequest19,
      prayerRequest20: notificationJsonObject.prayerRequest20
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
  const { prayerRequest, stretchNotification, workshopNeeds, thought,
    prayerRequest1, prayerRequest2, prayerRequest3 ,prayerRequest4, prayerRequest5, prayerRequest6, prayerRequest7, prayerRequest8, prayerRequest9, prayerRequest10,
    prayerRequest11, prayerRequest12, prayerRequest13, prayerRequest14, prayerRequest15, prayerRequest16, prayerRequest17, prayerRequest18, prayerRequest19, prayerRequest20 } = this.state
  this.ref.doc(uidJson).update({
    prayerRequest: prayerRequest,
      stretchNotification: stretchNotification,
      workshopNeeds: workshopNeeds,
      thought: thought,
      prayerRequest1: prayerRequest1,
      prayerRequest2: prayerRequest2,
      prayerRequest3: prayerRequest3,
      prayerRequest4: prayerRequest4,
      prayerRequest5: prayerRequest5,
      prayerRequest6: prayerRequest6,
      prayerRequest7: prayerRequest7,
      prayerRequest8: prayerRequest8,
      prayerRequest9: prayerRequest9,
      prayerRequest10: prayerRequest10,
      prayerRequest11: prayerRequest11,
      prayerRequest12: prayerRequest12,
      prayerRequest13: prayerRequest13,
      prayerRequest14: prayerRequest14,
      prayerRequest15: prayerRequest15,
      prayerRequest16: prayerRequest16,
      prayerRequest17: prayerRequest17,
      prayerRequest18: prayerRequest18,
      prayerRequest19: prayerRequest19,
      prayerRequest20: prayerRequest20
})
setTimeout(() => {
  this.props.navigation.navigate("Home")
}, 2000)
}

_onPressSubGroup = (label, isChecked, code) => {


this.setState(PrevState => ({
  [code]: !PrevState[code],
  initialLoading: true})
)
}
  render() {
    
    return (
      <SettingsPage
      onPressToggle={this._onPressToggle}
      onPressSubmit={this._onPressSubmit}
      onPressSubGroup={this._onPressSubGroup}
       { ...this.state } 
       />
    )
  }
}


export default Settings