import React, {PureComponent} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    try {
      if (this.checkPermission()) {
        this.checkedLoggedUser();
      } else {
        this.requestPermission();
      }
    } catch (error) {}
    // firebase.messaging().subscribeToTopic('aaa');
  }

  async checkedLoggedUser() {
    const value = await AsyncStorage.getItem('IsLoggedIn');
    if (value !== null) {
      this.props.navigation.navigate('Home');
      SplashScreen.hide();
    } else {
      this.props.navigation.navigate('Landing');
      SplashScreen.hide();
    }
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
export default AuthScreen;
