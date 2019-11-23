
import React, {PureComponent} from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./Input.stylesheet"
import { platformSwitcher } from "../../utils/misc"
import FaIconPro from "react-native-vector-icons/FontAwesome5"

class Input extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            passwordVisibility: props.secureTextEntry
        }
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
onPressPasswordVisibility = () => this.setState((prevState) => ({passwordVisibility: !prevState.passwordVisibility}))

    render() {
        console.log(this.state.passwordVisibility);
        
        const {
            value, name,onChange, editable, placeholder, secureTextEntry, keyboardType, label, errorMsg, isInvalid
        } = this.props
        return (
            <View style={style.container}>
                <View style={style.inputBox}>
                    {label ? <Text style={style.label}>{label}</Text> : null}
                    <View style={style.row}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={editable}
                        keyboardType={keyboardType}
                        onChangeText={this.handleOnChange}
                        placeholder={placeholder}
                        placeholderTextColor="#576075"
                        secureTextEntry={this.state.passwordVisibility}
                        selectionColor="#5B6778"
                        style={style.input}
                        value={value}
                        underlineColorAndroid="transparent"
                    />
                    {secureTextEntry ? <TouchableOpacity onPress={this.onPressPasswordVisibility} style={{marginRight: 15}}>{ this.state.passwordVisibility ? <FaIconPro color="#3b4761" name="eye" size={22} />: <FaIconPro color="#3b4761" name="eye-slash" size={22} />}</TouchableOpacity>: null}
                    </View>
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