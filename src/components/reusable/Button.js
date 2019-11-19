import React from "react"
import { Text, TouchableOpacity } from "react-native"
import style from "./Button.stylesheet"
const Button = ({buttonStyle, children, textStyle, onPress, isPrimary, isLight}) =>
    <TouchableOpacity
        onPress={onPress}
        style={[isPrimary ? style.primaryBtn : style.lightBtn, buttonStyle]}
    >
        <Text style={[isPrimary ? style.primaryBtnText: style.lightBtnText, textStyle]}>{ children }</Text>
    </TouchableOpacity>

export default Button