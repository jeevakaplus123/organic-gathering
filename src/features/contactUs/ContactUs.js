import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity } from "react-native"
import { Button } from "../../components/reusable"
import FaIconPro from "react-native-vector-icons/FontAwesome"

import style from "./ContactUs.stylesheet"

const ContactUs = ({ onPressWorkshop, emailSend, phoneCall }) =>
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
    <Text style={style.title}>Contact Us</Text>
    <View style={style.separator} />

    <TouchableOpacity style={style.container} onPress={phoneCall}>
      <FaIconPro color="#3b4761" name="phone" size={25} />
      <Text style={style.label}>(360) 521-8020</Text>
    </TouchableOpacity>
    <View style={style.separator} />
    <TouchableOpacity style={style.container} onPress={emailSend}>
      <FaIconPro color="#3b4761" name="envelope" size={20} />
      <Text style={style.label}>organic_gathering@gmail.com</Text>
    </TouchableOpacity>
    <View style={style.container} >
      <FaIconPro color="#3b4761" name="location-arrow" size={25} />
      <View style={{ flex: 1 }}>
        <Text style={style.label}>3027 NW 119th St</Text>
        <Text style={style.label}> Vancouver, WA 98685</Text>
      </View>
    </View>
  </ScrollView>
export default ContactUs