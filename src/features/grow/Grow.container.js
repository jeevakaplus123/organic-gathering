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
    render() {
        return (
          <GrowScreen 
          onPressToolKit={this._onPressToolKit}
         />
        )
    }
}
export default Grow