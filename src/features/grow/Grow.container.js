import React, { PureComponent } from "react"
import GrowScreen from "./GrowScreen"

class Grow extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

          }
    }

    componentDidMount(){
    }
    _onPressToolKit = (toolKit) => () => {
        console.log(toolKit)
        
        this.props.navigation.navigate("ToolKit", {toolKitId: toolKit})
    }

    _OnPressInfo = () => {
        const {navigation} = this.props
        const callOfInfoObject = JSON.stringify(navigation.getParam('callOfInfoObject', 'NO-ID'))

        this.props.navigation.navigate("Info", {callOfInfoObject: JSON.parse(callOfInfoObject)})
    }

    render() {
        return (
          <GrowScreen 
          onPressToolKit={this._onPressToolKit}
          OnPressInfo={this._OnPressInfo}
         />
        )
    }
}
export default Grow