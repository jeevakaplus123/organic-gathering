import { StyleSheet, Platform } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        justifyContent: "center",
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    activeBtn: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#DC143C",
        borderWidth: 0.5,
        borderColor: "#DC143C",
        flex: 1
    },
    inactiveBtn: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "#DC143C",
        flex: 1
    },
    btnContainer: {
        height: 50,
        flexDirection: "row",
    },
    activeText: {
        color: "white"
    },
    inactiveText: {
        color: "#DC143C"
    },
    title: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Bold",
        textAlign: "center",
        marginBottom: 25,
        fontSize: 25
    },
    buttonStyle: {
        marginTop: 25,
    },
    textStyle: {
        color: "#49EACA",
        fontFamily: "HelveticaNeue-Medium",
        textAlign: "center",
        marginTop: 3,
        fontSize: 16
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    toggleSwitchLabel: {
        color: '#3b4761',
        flex: 1,
        fontSize: 15,
        fontFamily: "HelveticaNeue-Medium",
    },
    note: {
        color: "#b1641c",
        fontSize: 12,
        marginLeft: 10

    }
})

export default  style