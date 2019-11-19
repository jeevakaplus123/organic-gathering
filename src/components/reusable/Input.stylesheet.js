import { StyleSheet } from "react-native"
import { platformSwitcher } from "../../utils/misc"

const style = StyleSheet.create({
    container: {
        padding: 10
    },
    inputBox: {
        borderBottomColor: "#00000022",
        borderBottomWidth: 1
    },
    input: {
        color: '#3b4761',
        fontSize: 18,
        fontWeight: "300",
        height: platformSwitcher({ios :30,android: 45})
    },
    label: {
        color: '#49EACA',
        fontSize: 15,
        paddingBottom: 5
    },
    helpText: {
        color: 'red',
        marginTop: 2,
        fontSize: 10,
        fontWeight: "300"
    }
})

export default  style