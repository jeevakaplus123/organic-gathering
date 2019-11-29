import React, { PureComponent } from "react"
import LandingScreen from "./Landing"

class Landing extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

          }
    }

    componentDidMount(){
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