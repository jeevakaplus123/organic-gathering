import React, { PureComponent } from "react"
import RegisterScreen from "./RegisterForm"
import { emailSignUp } from "../../actions/registerActions"
import { validator } from "../../utils/validator"
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage'
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
        prayerRequest: false,
        stretchNotification: false,
        workshopNeeds: false,
        thought: false,
        fcmToken: ""
    }
    }

    async componentDidMount() {
        this.getToken()
      }

      async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken')
        console.log("before fcmToken: ", fcmToken)
        if (!fcmToken) {
          fcmToken = await firebase.messaging().getToken()
          if (fcmToken) {
            console.log("after fcmToken: ", fcmToken)
            await AsyncStorage.setItem('fcmToken', fcmToken)
          }
        }
        this.setState({
            fcmToken: fcmToken
        })
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
        const { fields,  prayerRequest, stretchNotification, workshopNeeds, thought, fcmToken} = this.state
        if (this._validateForm()) {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(fields.email.value, fields.password.value)
                .then(response => {
                        
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
                        prayerRequest: prayerRequest,
                        stretchNotification: stretchNotification,
                        workshopNeeds: workshopNeeds,
                        thought: thought,
                        fcmToken: fcmToken
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

    _onPressToggle = (event) => (value) =>{

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
            prayerRequest={this.state.prayerRequest}
            stretchNotification={this.state.stretchNotification}
            workshopNeeds={this.state.workshopNeeds}
            thought={this.state.thought}

            />
        )
    }
}
export default Register