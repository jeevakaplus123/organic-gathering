import React, { PureComponent } from 'react'
import { ActivityIndicator, View, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'

class AuthScreen extends PureComponent {
    constructor(props) {
        super(props)
    }
    async componentDidMount(){
        try {
            const value = await AsyncStorage.getItem('IsLoggedIn');
            console.log(value)
            
            if (value !== null) {
              this.props.navigation.navigate("Home")
              SplashScreen.hide()

            }
            else{
              this.props.navigation.navigate("Landing")
              SplashScreen.hide()

            }
          } catch (error) {
            // Error retrieving data
          }
        }
    render(){
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#3b4761" />
          </View>
          )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
export default AuthScreen
