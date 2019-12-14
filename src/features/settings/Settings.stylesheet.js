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
        flex: 1
    },
    title: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Bold",
        textAlign: "center",
        marginBottom: 15,
        fontSize: 24
    },
    statement: {
        color: "#49EACA",
        fontFamily: "HelveticaNeue-Medium",
        textAlign: "center",
        marginTop: 5,
        marginBottom: 20,
        fontSize: 14
    },
    button: {
        marginTop: 25
    },
    toggleSwitchLabel: {
        color: '#3b4761',
        flex: 1,
        fontSize: 15,
        fontFamily: "HelveticaNeue-Medium",
    }
})

export default  style