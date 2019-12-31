import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        justifyContent: "center",
        padding: 25,
        flexGrow: 1
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        flex: 1
    },
    title: {
        color: "#3b4761",
        textAlign: "center",
        marginVertical: 10,
        fontSize: 18,
        fontFamily: "HelveticaNeue-Medium"
    },
    imageStyle: {
        width: 148, height: 135
    },
    button: {
        marginTop: 25
    }
})

export default  style