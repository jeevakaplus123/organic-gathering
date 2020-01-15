import React, { Component } from 'react'
import { Image, Text, View } from "react-native"
import {  Button } from "../../components/reusable"

import style from "./Landing.stylesheet"

  const Landing = ({ onPressLogin, onPressRegister }) =>
  <View style={style.wrapper}>
  <View style={style.container}>
    <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
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
  </View> 
  export default Landing