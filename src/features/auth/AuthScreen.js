import React, { PureComponent } from 'react';
import {AsyncStorage, ActivityIndicator, View, StyleSheet} from 'react-native';

  
class AuthScreen extends PureComponent {
    constructor(props) {
        super(props)
    }
    // async componentDidMount(){
    //     try {
    //         const value = await AsyncStorage.getItem('IsRegistered');
    //         if (value !== null) {
    //           this.props.navigation.navigate("Home")
    //         }
    //         else{
    //           this.props.navigation.navigate("Register")
    //         }
    //       } catch (error) {
    //         // Error retrieving data
    //       }
    //     }
    render(){
        return (<View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#3b4761" />
          </View>)
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
