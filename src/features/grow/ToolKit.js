import React, { PureComponent } from "react"
import { View, Text } from "react-native"
import style from "./Grow.stylesheet"

class ToolKit extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
          }
    }

    componentDidMount(){
    }

 
    render() {
        const { navigation } = this.props
        return (
        <View style={style.wrapper}>
            <Text style={style.title}>Tool Kit text : {JSON.stringify(navigation.getParam('toolKitId', 'NO-ID'))}</Text>
        </View>
        
        )
    }
}
export default ToolKit