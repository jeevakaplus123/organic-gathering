import React, { PureComponent } from "react"
import ShopDonateScreen from "./ShopDonateScreen"

class ShopDonate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
             visible: true
          }
    }

    componentDidMount(){
    }

    _onPressSquareupStore = () => {
        this.props.navigation.navigate("SquareupStore")
    }
    render() {
        return (
          <ShopDonateScreen 
          onPressSquareupStore={this._onPressSquareupStore}
            />
        )
    }
}
export default ShopDonate