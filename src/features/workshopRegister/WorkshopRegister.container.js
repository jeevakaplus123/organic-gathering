import React, { PureComponent } from "react"
import WorkshopRegisterPage from "./WorkshopRegister"

class WorkshopRegister extends PureComponent {
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
    _onPressRegister = () => {
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
          <WorkshopRegisterPage
            {...this.props}
            onPressWorkshop={this._onPressWorkshop}
            onPressRegister={this._onPressRegister}
            />
        )
    }
}
export default WorkshopRegister