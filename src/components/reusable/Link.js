import style from "./Link.stylesheet"
import React, { Component } from 'react'
import { Text,TouchableOpacity } from "react-native"

const Link = ({ onPress, ...props }) => 
<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    <Text style={style.a} {...props} />
</TouchableOpacity>

export default Link