import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView } from "react-native"
import { EmailInput, Button, PasswordInput, Link, Checkbox } from "../../components/reusable"
import style from "./Login.stylesheet"

const LoginForm = ({ onPressLogin, onPressRegister, handleOnChange, fields }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
      <Text style={style.title}>Sign In</Text>
      <EmailInput
        errorMsg={fields.email.error}
        isInvalid={Boolean(fields.email.error)}
        onChange={handleOnChange}
        label="Email"
        placeholder="Enter your Email"
        name="email"
        value={fields.email.value} />
      <PasswordInput
        errorMsg={fields.password.error}
        isInvalid={Boolean(fields.password.error)}
        label="Password"
        name="password"
        value={fields.password.value}
        onChange={handleOnChange}
        placeholder="Password"
      />
      <View style={style.row}>
    <Checkbox
      code="keepMeLoggedIn"
      disabled={false}
      isChecked={false}
      label="Stay connected"
      labelStyle={{ color: "#3b4761" }}
      // onClick={this._onPressEmailConfirm}
    />
      <Link>Forgot Password ?</Link>
      </View>
      <Button
        onPress={onPressLogin}
        isPrimary
        buttonStyle={style.button}
      >SIGN IN</Button>
      <Button
        onPress={onPressRegister}
        buttonStyle={style.button}
      >SIGN UP</Button>
  </ScrollView>

export default LoginForm