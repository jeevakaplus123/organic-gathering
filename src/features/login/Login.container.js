import React, { PureComponent } from "react"
import {
    ActivityIndicator, View
} from 'react-native'
import LoginScreen from "./LoginForm"
import { validator } from "../../utils/validator"
import firebase from 'react-native-firebase'

class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                email: {
                    value: "",
                    error: null
                },
                password: {
                    value: "",
                    error: null
                }
            },
            isLoading: false
        }
    }

    _handleOnChange = (value, name) => {
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


    _onPressLogin = () => {
        const { fields } = this.state

        try {
            firebase
               .auth()
               .signInWithEmailAndPassword(fields.email.value, fields.password.value)
               .then(res => {
                   console.log(res.user.email)
            }).catch(error =>{console.log(error.message)
        }
            )
        } catch (error) {
            console.log(error.message)
            
          }
    }
    _onPressRegister = () => {
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            this.state.isLoading ?
                <View style={{
                    flex: 1, justifyContent: 'center', backgroundColor: "#3b4761"
                }}>
                    <ActivityIndicator size="large" color="#26CCB9" />
                </View> : <LoginScreen
                    fields={this.state.fields}
                    handleOnChange={this._handleOnChange}
                    onPressLogin={this._onPressLogin}
                    onPressRegister={this._onPressRegister}
                />
        )
    }
}
export default Login