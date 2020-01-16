import React, { PureComponent } from "react"
import { View, Text, Image } from "react-native"
import style from "./Grow.stylesheet"

class Info extends PureComponent {
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
        const callOfInfoObject = JSON.stringify(navigation.getParam('callOfInfoObject', 'NO-ID'))
        const jsonCallOfInfo = JSON.parse(callOfInfoObject)       
        return (
        <View style={style.wrapper}>
          <View style={style.container}>

          <Image
          style={style.imageStyle}
          source={require('../../images/organic_gathering.png')}
        />
                </View>

        <View style={style.infoContainer}>
        <Text style={style.label}>Dagger </Text>
        <Text style={style.infoText}>{jsonCallOfInfo.dagger}</Text>
        </View>
        <View style={style.infoContainer}>
        <Text style={style.label}>New Name </Text>
        <Text style={style.infoText}>{jsonCallOfInfo.newName}</Text>
        </View>
        <View style={style.infoContainer}>
        <Text style={style.label}>Craddle Song </Text>
        <Text style={style.infoText}>{jsonCallOfInfo.cradleSong}</Text>
        </View>
        </View>
        
        )
    }
}
export default Info