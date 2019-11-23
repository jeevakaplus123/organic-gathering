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

    

    render() {
        return (
          <HomeScreen />
        )
    }
}
export default Home