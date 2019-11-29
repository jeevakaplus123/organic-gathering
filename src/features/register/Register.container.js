import React, { PureComponent } from "react"
import RegisterScreen from "./RegisterForm"
import { emailSignUp } from "../../actions/registerActions"
import { validator } from "../../utils/validator"
import firebase from 'react-native-firebase'
import {notifyError, notifySuccess} from "../../services/NotificationService"
class Register extends PureComponent {
    constructor(props) {
        super(props)
        // this.ref = firebase.firestore().collection('users');
        this.state = {
        isLoading: true,
        fields: {
            email: {
                value: "",
                error: null
            },
            password: {
                value: "",
                error: null
            },
            phoneNumber: {
                value: "",
                error: null
            },
            firstName: {
                value: "",
                error: null
            },
            lastName: {
                value: "",
                error: null
            },
            address: {
                value: "",
                error: null
            },
            city: {
                value: "",
                error: null
            },
            state: {
                value: "",
                error: null
            },
            zip: {
                value: "",
                error: null
            },
            dagger: {
                value: "",
                error: null
            },
            newName: {
                value: "",
                error: null
            },
            cradleSong: {
                value: "",
                error: null
            }
        },
        isPrayerRequest: false,
        isStretchNotification: false,
        workshopNeeds: false,
        thought: false
    }
    }

    _handleOnChange =(value, name) => {
        const error = validator(name, value)
        const { fields } = this.state
        const errorList = Object
            .keys(fields)
            .filter(fieldName => Boolean(fieldName !== name))
            .map(fieldName => validator(fieldName, fields[fieldName].value))
            .filter(fieldError => Boolean(fieldError))

        this.setState({
            isValid: (!error && !errorList.length),
            fields: {
                ...fields,
                [name]: {
                    value,
                    error
                }
            }
        })
        return error
    }

    _validateForm = () => {
        const { fields } = this.state
        let newState = Object.create({})
        const errors = Object
            .keys(fields)
            .map(fieldName => {
                const error = validator(fieldName, fields[fieldName].value)
                newState = {
                    ...newState,
                    fields: {
                        ...newState.fields,
                        [fieldName]: {
                            ...fields[fieldName],
                            error
                        }
                    }
                }
                return error
            })
            .filter(error => Boolean(error))
        if (errors.length) {
            this.setState({ fields: newState.fields })
        }
        return !errors.length
    }

    _onPressRegister = () =>{
        const { fields,  isPrayerRequest, isStretchNotification, workshopNeeds, thought} = this.state
        if (this._validateForm()) {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(fields.email.value, fields.password.value)
                .then(response => {
                        console.log(response.user)
                        
                       firebase.firestore().collection('users').doc(response.user.uid).set({
                        email: fields.email.value,
                        phoneNumber: fields.phoneNumber.value,
                        firstName: fields.firstName.value,
                        lastName: fields.lastName.value ,
                        address: fields.address.value,
                        city: fields.city.value,
                        state: fields.state.value,
                        zip: fields.zip.value,
                        dagger: fields.dagger.value,
                        newName: fields.newName.value,
                        cradleSong: fields.cradleSong.value,
                        isPrayerRequest: isPrayerRequest,
                        isStretchNotification: isStretchNotification,
                        workshopNeeds: workshopNeeds,
                        thought: thought
                      })
                       this.props.navigation.navigate("Login")
                 }).catch(error =>{
                     notifyError(error.message)
                 }
                     )} catch (error) {
                        notifyError(error.message)
                    }
    }
}

    _onPressLogin = () =>{
        this.props.navigation.navigate("Login")
    }

    _onPressLeftButton = () =>{
        this.setState(
            {
                userRole: "coach"
            }
        )
    }
    
    _onPressRightButton = () =>{
        this.setState(
            {
                userRole: "user"
            }
        )    
    }

    _onPressToggle = (event) => (value) =>{
        console.log(event)
        console.log(value)

        this.setState(
            {
                [event]: value
            }
        )    
    }


    render() {
     
        return (
            <RegisterScreen 
            fields={this.state.fields}
            handleOnChange={this._handleOnChange}
            onPressRegister={this._onPressRegister}
            onPressLogin={this._onPressLogin}
            onPressLeftButton={this._onPressLeftButton}
            onPressRightButton={this._onPressRightButton}
            onPressToggle={this._onPressToggle}
            isPrayerRequest={this.state.isPrayerRequest}
            isStretchNotification={this.state.isStretchNotification}
            workshopNeeds={this.state.workshopNeeds}
            thought={this.state.thought}

            />
        )
    }
}
export default Register