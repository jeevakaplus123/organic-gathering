import React, { Component } from 'react'
import { Image, ScrollView, View } from "react-native"
import {  Button } from "../../components/reusable"

import style from "./Grow.stylesheet"

  const GrowScreen = ({ onPressToolKit }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
  <View style={style.container}>
    <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
    </View>
    <Button
        onPress={onPressToolKit(1)}
        isPrimary
        buttonStyle={style.button}
      >Toolkit 1</Button>
      <Button
        isPrimary
        onPress={onPressToolKit(2)}
        buttonStyle={style.button}
      >Toolkit 2</Button>
  </ScrollView> 
  export default GrowScreen