import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList, Image } from "react-native"
import { Button, ToggleSwitch } from "../../components/reusable"
import style from "./Notification.stylesheet"
const Notifications = ({notifications}) => (
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
    <FlatList
          data={notifications}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={style.flatview}>
          <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
          />
          </View>
          
          <View style={style.textContainer}>
          <Text style={style.name}>{item.title}</Text>
          <Text style={style.email}>{item.message}</Text>
          </View>
          </View>
          }
          keyExtractor={item => item.when}
        />
  </ScrollView>
)
export default Notifications