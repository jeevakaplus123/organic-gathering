import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { Button } from "../../components/reusable"
import style from "./Home.stylesheet"

  const Home = ({onPressLogout}) =>
  <View style={style.wrapper}>
      <View style={style.container} >
        <Text style={style.title}>Welcome to home page</Text>
        <Button onPress={onPressLogout}>Sign out</Button>
      </View>
  </View> 
  export default Home