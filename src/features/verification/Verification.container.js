import React, {PureComponent} from 'react'
import {ActivityIndicator, View } from 'react-native'
import VerificationPage from './VerificationPage'
import { validator } from "../../utils/validator"
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { notifySuccess } from '../../services/NotificationService'

class Verification extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users')
    this.state = {
      fields: {
        when: {
            value: "",
            error: null
        },
        who: {
            value: "",
            error: null
        }
    }
  }}

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

_onPressSubmit= () => {
  const {uid, navigation} = this.props
  
  const { fields } = this.state
  this.ref.doc(uid).update({
      securityQuestion1: fields.when.value,
      securityQuestion2: fields.who.value
})
notifySuccess("You need to wait getting approval.")
setTimeout(() => {
  navigation.navigate("Login")
}, 2000)
}

  render() {
    const {fields} = this.state
    return (
      <VerificationPage 
        fields={fields}
        handleOnChange={this._handleOnChange}
        onPressSubmit={this._onPressSubmit}
      />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  uid: user.uid
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verification)