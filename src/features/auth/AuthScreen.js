import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ActivityIndicator, Alert, View, StyleSheet} from 'react-native'
import {readData} from '../../utils/asyncStorage'
import { setAuthData } from '../../actions/userActions'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'
import firebase from 'react-native-firebase'
class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    try {
      if (this.checkPermission()) {
        this.checkedLoggedUser()
      } else {
        this.requestPermission()
        this.messageListener()
      }
    } catch (error) { }
    // firebase.messaging().subscribeToTopic('aaa');
  }

  showAlert = (title, message) => {
    Alert.alert(
     title,
     message,
     [
      {text: "OK", onPress: () => console.log("OK Pressed")},
     ],
     {cancelable: false},
    )
   }

  messageListener = async () => {
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification
      // this.showAlert(title, body)
      // console.log(title)

    })
   
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification
      // this.showAlert(title, body)
      // console.log(title)

    })
   
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification
      // this.showAlert(title, body)
      // console.log(title)

    }
   
    this.messageListener = firebase.messaging().onMessage((message) => {
    })
   }

  async checkPermission() {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          return true;
        } else {
          return false;
        }
      });
  }

  async requestPermission() {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        this.checkedLoggedUser();
      })
      .catch(error => {
        // Todo : Need to add popup for request permission
        console.log('permission rejected');
      });
  }

  async checkedLoggedUser() {
    const value = await readData('STORAGE_KEY')
    if (value !== null) {
      this.props.authDataToState(value)
      this.messageListener()
      this._navigate('Home')
    } else {
      this._navigate('Landing');
    }
  }

  _navigate(path) {
    const { navigation } = this.props
    navigation.navigate(path)
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#3b4761" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
    authDataToState: (data) => dispatch(setAuthData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)