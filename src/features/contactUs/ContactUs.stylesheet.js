import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        alignItems: "center",
        padding: 25,
        flexGrow: 1
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "space-between",
        borderBottomColor: "#49EACA",
        borderBottomWidth: 1
    },
    title: {
        color: "#3b4761",
        fontFamily: "HelveticaNeue-Bold",
        textAlign: "center",
        marginBottom: 60,
        marginTop: 25,
        fontSize: 24
    },
    label: {
        color: '#3b4761',
        fontSize: 15,
        flex: 1,
        marginLeft: 25,
        fontFamily: "HelveticaNeue-Medium"
    },
    separator: {
        borderWidth: 1,
        marginHorizontal: 5,
        borderColor: "#49EACA"
    }
})

export default  style