import React from "react"
import { View, Modal, ActivityIndicator, Text } from "react-native"
import style from "./Loader.stylesheet"
import PropTypes from "prop-types"

const Loader = ({
  color,
  size,
  opacity = 0.4,
  title = ""
}) => {
  return (
    <Modal
      transparent
      animationType={"none"}
      visible={true}
      onRequestClose={() => null}
    >
      <View
        style={[
          style.modalBackground,
          { backgroundColor: `rgba(0,0,0,${opacity})` }
        ]}
      >
        <View style={style.activityIndicatorWrapper}>
          <ActivityIndicator animating={true} color={color} size={size} />
          <Text style={style.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </Modal>
  )
}

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  opacity: (props, propName, componentName) => {
    if (props[propName] < 0 || props[propName] > 1) {
      return new Error("Opacity prop value out of range")
    }
  },
  title: PropTypes.string
}

export default Loader