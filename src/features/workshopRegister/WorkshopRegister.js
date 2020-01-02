import React, { PureComponent } from "react"
import { WebView } from 'react-native-webview'
import { View } from "react-native"
import { Loader } from "../../components/reusable"
import style from "./WorkshopRegister.stylesheet"

class WorkshopRegister extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
          }
    }

    componentDidMount(){
    }

    showSpinner() {
        this.setState({ visible: true })
      }
    
    hideSpinner() {
        this.setState({ visible: false })
      }
    render() {
      const { navigation } = this.props
      const url = navigation.state.params.url        
        return (
        <View
        style={this.state.visible === true ? style.stylOld : style.styleNew}>
        {this.state.visible ? (
          <Loader />
        ) : null}
        <WebView 
            source={{uri: url }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadStart={() => this.showSpinner()}
            onLoad={() => this.hideSpinner()}
        />
            </View>
        )
    }
}
export default WorkshopRegister