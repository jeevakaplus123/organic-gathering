import React, { PureComponent } from "react"
import LandingScreen from "./Landing"
import SplashScreen from 'react-native-splash-screen'

class Landing extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

          }
    }

    componentDidMount(){
        SplashScreen.hide()
    }
    _onPressLogin = () => {
        this.props.navigation.navigate("Login")
    }
    _onPressRegister = () => {
        this.props.navigation.navigate("Register")
    }
    render() {
        return (
          <LandingScreen 
            onPressLogin={this._onPressLogin}
            onPressRegister={this._onPressRegister} />
        )
    }
}
export default Landing