import { StyleSheet, Platform } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textContainer: {
        backgroundColor: "#3b4761"
    },
    title: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Bold",
        textAlign: "center",
        marginBottom: 20,
        fontSize: 25
    },
    button: {
        marginTop: 25
    },
    textStyle: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Light",
        textAlign: "center",
        fontSize: 15
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15
    }
})

export default  style