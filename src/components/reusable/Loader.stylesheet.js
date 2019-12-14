import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      activityIndicatorWrapper: {
        backgroundColor: "white",
        height: 75,
        width: 75,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
      },
      title: {
        position: "absolute",
        paddingTop: 50
      }
})

export default style