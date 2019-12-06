import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, EmailInput } from '../../components/reusable';
import style from './ForgotPassword.stylesheet';

const ForgotPassword = ({ fields, handleOnChange, onPressSubmit }) => (
  <View style={style.wrapper}>
    <View style={style.container}>
      <Text style={style.title}>Forgot Password</Text>
      <EmailInput
        errorMsg={fields.email.error}
        isInvalid={Boolean(fields.email.error)}
        onChange={handleOnChange}
        label="Email"
        placeholder="Enter your Email"
        name="email"
        value={fields.email.value}
      />
    </View>
    <Button isPrimary onPress={onPressSubmit} buttonStyle={style.button}>
      SUBMIT
    </Button>
  </View>
);
export default ForgotPassword;
