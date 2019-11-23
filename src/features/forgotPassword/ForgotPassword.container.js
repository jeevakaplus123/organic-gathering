import React, {PureComponent} from 'react';
import ForgotPasswordScreen from './ForgotPassword';
import style from './ForgotPassword.stylesheet';
import {validator} from '../../utils/validator';
import firebase from 'react-native-firebase';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: {
          value: '',
          error: null,
        },
      },
    };
  }

  _handleOnChange = (value, name) => {
    const error = validator(name, value);
    const {fields} = this.state;
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
    const {fields} = this.state;
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
      this.setState({fields: newState.fields});
    }
    return !errors.length;
  };
  _onPressSubmit = () => {
    const {fields} = this.state;

    try {
      firebase
        .auth()
        .sendPasswordResetEmail(fields.email.value)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <ForgotPasswordScreen
        fields={this.state.fields}
        handleOnChange={this._handleOnChange}
        onPressSubmit={this._onPressSubmit}
      />
    );
  }
}
export default Home;
