import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ActivityIndicator, View, StyleSheet} from 'react-native'
import Notifications from './Notifications'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'

import firebase from 'react-native-firebase'
class Notification extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('notifications')
    this.state = {
      notificationList : []
  }
  }
  async componentDidMount() {        
    try {
        this.ref.onSnapshot(this.onCollectionUpdate)
    } catch (error) { }
}

onCollectionUpdate = querySnapshot => {

  querySnapshot.forEach(doc => {
      if (doc.exists) {
          const {
             notification
          } = doc.data();

      this.setState({ notificationList: [...this.state.notificationList, notification] })
      } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
      }
  })
}


  render() {
    const { navigation } = this.props
    const { notificationList } = this.state
    console.log(notificationList);
    
    const notificationObj = navigation.state.params.pushNotificationObject
    const  filterUndefined= notificationList.filter(item => typeof (item) !== "undefined")
    const notifications = filterUndefined.filter(item => notificationObj[(item.topic)] === true)
    
    const sortedNotifications = notifications.sort((a, b) => b.when - a.when)
    return (
      <Notifications notifications={sortedNotifications} />
    )
  }
}


export default Notification