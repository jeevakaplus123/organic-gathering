import React, { PureComponent } from "react"
import ConnectScreen from "./ConnectScreen"

class Connect extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

          }
    }

    componentDidMount(){
    }
    _onPressWorkshop = () => {
        this.props.navigation.navigate("Workshop")
    }
    _onPressContactUs = () => {
        this.props.navigation.navigate("ContactUs")
    }
    render() {
        return (
          <ConnectScreen 
          onPressWorkshop={this._onPressWorkshop}
          onPressContactUs={this._onPressContactUs} />
        )
    }
}
export default Connect