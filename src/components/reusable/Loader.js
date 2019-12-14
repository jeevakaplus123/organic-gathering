import React from "react"
import { View, Modal, ActivityIndicator, Text } from "react-native"
import style from "./Loader.stylesheet"
import PropTypes from "prop-types"

const Loader = ({
  loading = false,
  color,
  size,
  opacity = 0.4,
  title = ""
}) => {
  return (
    <Modal
      transparent
      animationType={"none"}
      visible={loading}
      onRequestClose={() => null}
    >
      <View
        style={[
          style.modalBackground,
          { backgroundColor: `rgba(0,0,0,${opacity})` }
        ]}
      >
        <View style={style.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} color={color} size={size} />
          <Text style={style.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </Modal>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
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