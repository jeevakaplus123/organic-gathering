
import React, {PureComponent} from "react"
import { Text, TextInput, View } from "react-native"
import style from "./Input.stylesheet"
import { platformSwitcher } from "../../utils/misc"

class Input extends PureComponent{
    constructor(props) {
        super(props)
    }

    handleOnChange = (e) => {
      const { onChange, name } = this.props
        if (typeof onChange === "function") {
            if (typeof name !== "undefined") {
                onChange(e, name)
            }
            else {
                onChange(e)
            }
        }
}

    render() {
        const {
            value, name,onChange, editable, placeholder, secureTextEntry, keyboardType, label, errorMsg, isInvalid
        } = this.props
        return (
            <View style={style.container}>
                <View style={style.inputBox}>
                    {label ? <Text style={style.label}>{label}</Text> : null}
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={editable}
                        keyboardType={keyboardType}
                        onChangeText={this.handleOnChange}
                        placeholder={placeholder}
                        placeholderTextColor="#576075"
                        secureTextEntry={secureTextEntry}
                        selectionColor="#5B6778"
                        style={style.input}
                        value={value}
                        underlineColorAndroid="transparent"
                    />
                </View>
                { isInvalid ? <Text style={style.helpText}>{errorMsg}</Text> : null }
            </View>
        )
    }

}


export const EmailInput = (props) => <Input {...props} keyboardType="email-address" />
export const NumberInput = (props) => <Input {...props} keyboardType={platformSwitcher({ ios : "number-pad", android: "numeric"})} />
export const PasswordInput = (props) => <Input {...props} secureTextEntry />

export default Input