import { StyleSheet } from "react-native"

const st = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingVertical: 12
    },
    container: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    label: {
        flex: 1,
        marginLeft: 10,
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Light",
        fontSize: 14,
        lineHeight: 20
    },
    labelDisabled: {
        flex: 1,
        marginLeft: 10,
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Light",
        fontSize: 14,
        lineHeight: 20,
        opacity: 0.5
    },
    checkBoxStyle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 20,
        height: 20,
        shadowColor: "rgba(0, 0, 0, 0.09)",
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e3e2e2"
    },
    checkBoxDisabled: {
        opacity: 0.5
    },
    errorText: {
        color: "red",
        fontSize: 12,
        fontFamily: "HelveticaNeue-Light"
    }
})

export default st
