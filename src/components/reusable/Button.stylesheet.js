import { StyleSheet } from "react-native"
import { platformSwitcher } from "../../utils/misc"

const style = StyleSheet.create({
primaryBtnText: {
    alignSelf: "center",
    color: 'white',
    fontFamily: "HelveticaNeue-Light",
    fontSize: 16
},
lightBtnText: {
    alignSelf: "center",
    fontFamily: "HelveticaNeue-Light",
    color: '#3b4761',
    fontSize: 16
},
primaryBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 0,
    paddingVertical: 10,
    backgroundColor: "#3b4761"
},
lightBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 0,
    paddingVertical: 10,
    backgroundColor: "#49EACA"
}
})

export default  style