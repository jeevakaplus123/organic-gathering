import React, { PureComponent } from "react"
import ContactUsScreen from "./ContactUs"
import { sendEmail } from "../../services/EmailService"
import { callNumber } from "../../services/CallService"

class ContactUs extends PureComponent {
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

    _emailSend = () => {
          sendEmail(
            'organic_gathering@gmail.com',
        ).then(() => {
            console.log('Our email successful provided to device mail ')
        })    
    }

    _phoneCall = () => callNumber("(360) 521-8020")
    
    render() {
        return (
          <ContactUsScreen 
            onPressWorkshop={this._onPressWorkshop}
            onPressRegister={this._onPressRegister}
            emailSend={this._emailSend}
            phoneCall={this._phoneCall}
            />
        )
    }
}
export default ContactUs