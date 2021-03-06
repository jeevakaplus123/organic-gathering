import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { emailSignIn } from '../../actions/loginActions'
import LoginScreen from './LoginForm'
import { validator } from '../../utils/validator'
import firebase from 'react-native-firebase'
class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('users')
        this.state = {
            fields: {
                email: {
                    value: '',
                    error: null,
                },
                password: {
                    value: '',
                    error: null,
                },
            },
            isLoading: false,
            keepMeLoggedIn: false,
            verificationStatus: false
        };
    }

    

    _handleOnChange = (value, name) => {
        const error = validator(name, value);
        const { fields } = this.state;
        const errorList = Object.keys(fields)
            .filter(fieldName => Boolean(fieldName !== name))
            .map(fieldName => validator(fieldName, fields[fieldName].value))
            .filter(fieldError => Boolean(fieldError));

        this.setState({
            isValid: !error && !errorList.length,
            fields: {
                ...fields,
                [name]: {
                    value,
                    error,
                },
            },
        });
        return error;
    };

    _validateForm = () => {
        const { fields } = this.state;
        let newState = Object.create({});
        const errors = Object.keys(fields)
            .map(fieldName => {
                const error = validator(fieldName, fields[fieldName].value);
                newState = {
                    ...newState,
                    fields: {
                        ...newState.fields,
                        [fieldName]: {
                            ...fields[fieldName],
                            error,
                        },
                    },
                };
                return error;
            })
            .filter(error => Boolean(error));
        if (errors.length) {
            this.setState({
                fields: newState.fields,
            });
        }
        return !errors.length;
    };

    _onPressLogin = () => {
        const { fields, keepMeLoggedIn } = this.state
        if (this._validateForm()) {
            this.props.signInWithEmailAndPassword(
                fields.email.value,
                fields.password.value,
                keepMeLoggedIn
            )
        }
            // this.ref.onSnapshot(this.onCollectionUpdate)
            
    }

    _afterSetStateFinished = () => {
        
        const { fields, keepMeLoggedIn, verificationStatus } = this.state
        if (this._validateForm()) {
            this.props.signInWithEmailAndPassword(
                fields.email.value,
                fields.password.value,
                keepMeLoggedIn,
                verificationStatus
            )
        }
    }

    onCollectionUpdate = querySnapshot => {
        const { fields, verificationStatus } = this.state

        querySnapshot.forEach(doc => {
            if (doc.exists) {
                const {
                    email,
                    verificationStatus
                } = doc.data();

                if (email === fields.email.value) {
                    const userObject = {
                        verificationStatus
                    }
                    this.setState({
                        verificationStatus: verificationStatus
                    }, () => {
                        this._afterSetStateFinished()
                    });
                }
                else this._afterSetStateFinished()
            } else {
                console.log('No such document!')

            }
        })
        return verificationStatus
    }
    
    _onPressRegister = () => this.props.navigation.navigate('Register')

    _onPressForgotPassword = () =>
        this.props.navigation.navigate('ForgotPassword');

    _onPressKeepMeLoggedIn = () =>
        this.setState(prevState => ({
            keepMeLoggedIn: !prevState.keepMeLoggedIn,
        }));

    render() {
        return (
                <LoginScreen
                    fields={this.state.fields}
                    isLoading={this.props.isLoading}
                    keepMeLoggedIn={this.state.keepMeLoggedIn}
                    onPressKeepMeLoggedIn={this._onPressKeepMeLoggedIn}
                    handleOnChange={this._handleOnChange}
                    onPressLogin={this._onPressLogin}
                    onPressRegister={this._onPressRegister}
                    onPressForgotPassword={this._onPressForgotPassword}
                />
            )
    }
}
const mapStateToProps = ({
    login
}) => ({
    isLoading: login.isLoading,
});

const mapDispatchToProps = dispatch => ({
    signInWithEmailAndPassword: (email, password, keepMeLoggedIn, verificationStatus) =>
        dispatch(emailSignIn(email, password, keepMeLoggedIn, verificationStatus)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
