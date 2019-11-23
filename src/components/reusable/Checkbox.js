/*
Usage example:
this.state = {
    isChecked: true
}
<Checkbox
    onClick={()=>{this.setState({isChecked:!this.state.isChecked})}}
    isChecked={this.state.isChecked}
    disabled={false}
    label={"Air condition"} />
 */
import React, { PureComponent } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"
import st from "./Checkbox.stylesheet"
import FaIconPro from "react-native-vector-icons/FontAwesome5Pro"

class Checkbox extends PureComponent {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        const { isChecked, label, code } = this.props
        this.props.onClick(label, isChecked, code)
    }

    _renderLabel() {
        const { disabled, label, labelStyle } = this.props
        if (!label) return null
        return (
            <Text style={disabled ? st.labelDisabled : [st.label, labelStyle]}>{this.props.label}</Text>
        )
    }

    _renderCheckbox() {
        if (this.props.disabled) {
            return <View style={[st.checkBoxStyle, st.checkBoxDisabled]} />
        }
        if (this.props.isChecked) {
            return <View style={st.checkBoxStyle}><FaIconPro color="#3b4761" name="check" size={12} /></View>
        }
        else {
            return <View style={st.checkBoxStyle} />
        }
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                onPress={this.onClick}
                style={st.wrapper}
            >
                <View style={st.container}>
                    {this._renderCheckbox()}
                    {this._renderLabel()}
                </View>
            </TouchableOpacity>
        )
    }
}

Checkbox.defaultProps = {
    isChecked: false,
    disabled: false
}

Checkbox.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    code: PropTypes.string,
    labelStyle: PropTypes.object,
    onClick: PropTypes.func,
    isChecked: PropTypes.bool
}

export default Checkbox
