import React, { Component } from 'react'
import { ScrollView, Image, View } from "react-native"
import { Button } from "../../components/reusable"
import style from "./Home.stylesheet"
import {NavigationEvents} from 'react-navigation'

  const Home = ({onPressLogout, onPressSettings, onDidFocus, onPressConnect, onPressGrow, onPressShopDonate}) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
  
      <View style={style.container} >
      <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
        <Button buttonStyle={style.button} isPrimary onPress={onPressConnect}>Connect</Button>
        <Button buttonStyle={style.button} isPrimary onPress={onPressGrow}>Grow</Button>
        <Button buttonStyle={style.button} isPrimary onPress={onPressShopDonate}>Shop/Donate</Button>
        <Button buttonStyle={style.button} isPrimary onPress={onPressSettings}>Notifications</Button>
        <NavigationEvents onDidFocus={onDidFocus} />
      </View>
      <Button buttonStyle={style.sign_outButton} onPress={onPressLogout}>Sign out</Button>

  </ScrollView> 
  export default Home