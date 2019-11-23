import React, { Component } from 'react'
import { Text, View } from "react-native"
import style from "./Home.stylesheet"

  const Home = () =>
  <View style={style.wrapper}>
      <View style={style.container} >
        <Text style={style.title}>Welcome to home page</Text>
      </View>
  </View> 
  export default Home