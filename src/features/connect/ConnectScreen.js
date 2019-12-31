import React, { Component } from 'react'
import { Image, ScrollView, View } from "react-native"
import {  Button } from "../../components/reusable"

import style from "./Connect.stylesheet"

  const ConnectScreen = ({ onPressWorkshop, onPressContactUs }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
  <View style={style.container}>
    <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
    </View>
    <Button
        onPress={onPressWorkshop}
        isPrimary
        buttonStyle={style.button}
      >Upcoming Workshops</Button>
      <Button
        isPrimary
        onPress={onPressContactUs}
        buttonStyle={style.button}
      >Contact Us</Button>
  </ScrollView> 
  export default ConnectScreen