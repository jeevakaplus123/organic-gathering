import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import {EmailInput, PasswordInput, Button, Link} from '../../components/reusable';
import style from './Register.stylesheet';
const RegisterForm = ({
  onPressRegister,
  onPressLogin,
  handleOnChange,
  fields
}) => (
  <KeyboardAvoidingView behavior="padding" enabled style={style.wrapper}>
    <Text style={style.title}>Sign Up</Text>
    <EmailInput
      errorMsg={fields.email.error}
      isInvalid={Boolean(fields.email.error)}
      onChange={handleOnChange}
      label="Email"
      placeholder="Enter your Email"
      name="email"
      value={fields.email.value}
    />
    <PasswordInput
      errorMsg={fields.password.error}
      isInvalid={Boolean(fields.password.error)}
      label="Password"
      name="password"
      value={fields.password.value}
      onChange={handleOnChange}
      placeholder="Password"
    />
    <Button onPress={onPressRegister} buttonStyle={style.buttonStyle} isPrimary>
      SIGN UP
    </Button>
    <View style={style.textContainer}>
      <Text style={style.textStyle}>Already a member ?</Text>
      <Link onPress={onPressLogin}>
        Sign in here
      </Link>
    </View>
  </KeyboardAvoidingView>
)
export default RegisterForm
