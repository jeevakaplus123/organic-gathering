import React, { PureComponent } from "react"
import HomeScreen from "./HomeScreen"
import style from "./Home.stylesheet"
import { Text, View, ActivityIndicator, KeyboardAvoidingView } from "react-native"
import AsyncStorage from '@react-native-community/async-storage'

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            isLoading: false,
            initialLoading: true
          }
    }

    // componentDidMount() {
    //     this.setState({
    //         messages: [
    //           {
    //             _id: 1,
    //             text: 'Hello How can I help you ?',
    //             createdAt: new Date(),
    //             user: {
    //               _id: 2,
    //               name: 'React Native',
    //               avatar: 'https://placeimg.com/120/120/any',
    //             },
    //           },
    //         ],
    //       })
    //     }

    async removeEverything(){
        try {
          await AsyncStorage.clear()
        } catch (e) {
        //   alert('Failed to clear the async storage.')
        }
      }
    
    _onPressLogout = () => {
        this.removeEverything()
        this.props.navigation.navigate("Landing")
       }
    

    render() {
        return (
          <HomeScreen 
          onPressLogout={this._onPressLogout}/>
        )
    }
}
export default Home