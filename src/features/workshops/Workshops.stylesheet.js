import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        backgroundColor: "#e6e9f0",
        paddingHorizontal: 15,
        paddingTop: 15,
        flexGrow: 1
    },
    eventDetails: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemContainer: {
        marginBottom: 15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowOpacity: 0.8,
        paddingHorizontal: 5,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        backgroundColor: "white",
    },
    title: {
        color: "#3b4761",
        fontSize: 15,
        marginVertical: 5,
        fontFamily: "HelveticaNeue-Medium"
    },
    date: {
        fontSize: 13,
        color: '#36b59c',
        fontFamily: "HelveticaNeue-Light"
    },
    textContainer: {
        flex: 1,
        margin: 5
    },
    imageStyle: {
        width: 98, height: 85, margin: 10
    },
    separator: {
        borderWidth: 0.25,
        marginHorizontal: 5,
        borderColor: "#49EACA"
    },
    buttonView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    button: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 15
    },
    PopupButton: {
        marginTop: 25
    },
    buttonText: {
        fontSize: 15,
        color: '#3b4761',
        fontFamily: "HelveticaNeue-Medium"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row"
    },
    modalContainer: {
        backgroundColor: "#00000080",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: "white",
        borderRadius: 5
    },
    onClose: {
        margin: 10,
        padding: 5
    },
    form: {
        marginHorizontal: 15
    }
})

export default  style