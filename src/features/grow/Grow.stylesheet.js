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
    infoText: {
        color: "#3b4761",
        marginVertical: 5,
        fontSize: 15,
        flex: 1.8,
        fontFamily: "HelveticaNeue-Medium"
    },
    label: {
        color: "#3b4761",
        marginVertical: 5,
        flex: 1,
        fontSize: 15,
        fontFamily: "HelveticaNeue-Light"
    },
    infoContainer: {
        flexDirection: "row",
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 5,
        elevation: 0.5,
        padding: 5,
        paddingHorizontal: 10,
    },
    imageStyle: {
        width: 148, height: 135
    },
    button: {
        marginTop: 25
    }
})

export default  style