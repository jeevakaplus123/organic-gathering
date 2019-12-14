import React, { Component } from 'react'
import { ScrollView, Image, View } from "react-native"
import { Button } from "../../components/reusable"
import style from "./Home.stylesheet"
import {NavigationEvents} from 'react-navigation'

  const Home = ({onPressLogout, onPressSettings, onDidFocus }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
  
      <View style={style.container} >
      <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
        <Button buttonStyle={style.button} isPrimary onPress={()=>console.log("connect")}>Connect</Button>
        <Button buttonStyle={style.button} isPrimary onPress={()=>console.log("grow")}>Grow</Button>
        <Button buttonStyle={style.button} isPrimary onPress={()=>console.log("shop/donate")}>Shop/Donate</Button>
        <Button buttonStyle={style.button} isPrimary onPress={onPressSettings}>Settings</Button>
        <NavigationEvents onDidFocus={onDidFocus} />
      </View>
      <Button buttonStyle={style.sign_outButton} onPress={onPressLogout}>Sign out</Button>

  </ScrollView> 
  export default Home