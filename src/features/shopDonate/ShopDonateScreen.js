import React, { Component } from 'react'
import { Image, ScrollView, View } from "react-native"
import {  Button } from "../../components/reusable"

import style from "./ShopDonate.stylesheet"

  const ShopDonateScreen = ({ onPressSquareupStore }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
  <View style={style.container}>
    <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
    </View>
    <Button
        onPress={onPressSquareupStore("expressitpromos")}
        isPrimary
        buttonStyle={style.button}
      >HeartChange Shirts/SweatShirts</Button>
      <Button
        isPrimary
        onPress={onPressSquareupStore("squareupstore")}
        buttonStyle={style.buttonLarge}
        textStyle={{textAlign: "center"}}
      >Donate to support people, regions, or general fund</Button>
  </ScrollView> 
  export default ShopDonateScreen