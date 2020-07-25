import {
    StyleSheet
} from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "#e6e9f0",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Bold",
        textAlign: "center",
        marginBottom: 15,
        fontSize: 24
    },
    button: {
        marginTop: 25
    },
    flatview: {
        justifyContent: 'center',
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowOpacity: 0.8,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        backgroundColor: "white",
    },
    name: {
        fontFamily: "HelveticaNeue-Medium",
        color: "#3b4761",
        fontSize: 15
    },
    email: {
        fontFamily: "HelveticaNeue-Light",
        color: "#687796",
        marginTop: 5,
        fontSize: 13
    },
    imageStyle: {
        width: 98,
        height: 90
    },
    textContainer: {
        flex: 3
    }
})

export default style