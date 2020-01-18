import React, { PureComponent } from "react"
import { View, Text, ScrollView, Dimensions } from "react-native"
import style from "./Grow.stylesheet"
import { WebView } from 'react-native-webview'
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
        const toolkit1_iframe = '<div align="center"><iframe frameBorder="0" width="85%" height="90%" src="https://docs.google.com/document/d/e/2PACX-1vRVV6ER-ytzNH7BZnNHi_S2UzHc_TYH_DCn2JoaMQDYHSY2A4JKeWi2w2UjgMnA1FBrrIXxPGS8PcYJ/pub?embedded=true"></iframe></div>'
        const toolkit2_iframe = '<div align="center"><iframe frameBorder="0" width="95%" height="85%" src="https://docs.google.com/document/d/e/2PACX-1vQpqM6rCdG_tbljbaQ2ZctoKtWgjWjY5kzC49yBHe1B1VAFh4PRMCOtu1dhkRkAuTuquoaPpaw72XV4/pub?embedded=true"></iframe></div>'
        const toolKitId = JSON.stringify(navigation.getParam('toolKitId', 'NO-ID'))
        
        return (
                <ScrollView contentContainerStyle={{flex: 1, justifyContent: "center",marginTop: 30}}>
                <Text style={style.title}>Toolkit {toolKitId}</Text>
                <WebView
                    scalesPageToFit={true}
                    style={{marginTop: 20}}
                    source={{ html: toolKitId === "1" ? toolkit1_iframe : toolkit2_iframe }}
                /></ScrollView>
        )
    }
}
export default ToolKit