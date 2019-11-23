import React, { PureComponent } from "react"
import HomeScreen from "./HomeScreen"
import style from "./Home.stylesheet"
import { Text, View, ActivityIndicator, KeyboardAvoidingView } from "react-native"

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            isLoading: false,
            initialLoading: true
          }
    }

    render() {
        return (
          <HomeScreen />
        )
    }
}
export default Home