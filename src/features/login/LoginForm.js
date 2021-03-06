import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView } from "react-native"
import { EmailInput, Button, PasswordInput, Link, Checkbox } from "../../components/reusable"
import style from "./Login.stylesheet"

const LoginForm = ({ onPressLogin, onPressRegister,onPressForgotPassword, handleOnChange, fields, keepMeLoggedIn, onPressKeepMeLoggedIn, isLoading }) =>
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
      isChecked={keepMeLoggedIn}
      label="Stay connected"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressKeepMeLoggedIn}
    />
      <Link onPress={onPressForgotPassword}>Forgot Password ?</Link>
      </View>
      <Button
        onPress={onPressLogin}
        isPrimary
        buttonStyle={style.button}
      >SIGN IN</Button>
      <Button
        onPress={onPressRegister}
        buttonStyle={style.button}
      >REGISTER</Button>
      <Text style={style.version}>Version 1.0.0</Text>
  </ScrollView>

export default LoginForm