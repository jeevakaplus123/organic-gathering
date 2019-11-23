import React, { PureComponent } from "react"
import RegisterScreen from "./RegisterForm"
import { emailSignUp } from "../../actions/registerActions"
import { validator } from "../../utils/validator"
import firebase from 'react-native-firebase'
class Register extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('users');
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
            }
        },
        userRole: "",
        category: ""
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
        const { fields } = this.state
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(fields.email.value, fields.password.value)
                .then(user => { 
                       console.log(user)
                       this.ref.add({
                        email: fields.email.value
                      })
                       this.props.navigation.navigate("Login")
                 });} catch (error) {
            console.log(error.toString(error));
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

    _handleOnSelect = (value) =>{
        console.warn(value);
        
        this.setState(
            {
                category: value
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
            handleOnSelect={this._handleOnSelect}
            userRole={this.state.userRole}
            />
        )
    }
}
export default Register