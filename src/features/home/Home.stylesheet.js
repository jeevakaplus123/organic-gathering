import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        flexGrow: 1
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "white",
        padding: 20,
    },
    title: {
        color: "#DC143C",
        textAlign: "center",
        marginVertical: 25,
        fontSize: 20,
        fontFamily: "HelveticaNeue-Light"
    },
    imageStyle: {
        width: 148, height: 135,
        marginBottom: 25,
        alignSelf: "center"
    },
    button: {
        marginTop: 15
    },
    sign_outButton: {
        marginBottom: 25,
        marginHorizontal: 20
    }
})

export default  style