import React, { PureComponent } from "react"
import { WebView } from 'react-native-webview'
import { View } from "react-native"
import { Loader } from "../../components/reusable"
import style from "./ShopDonate.stylesheet"

class SquareupStore extends PureComponent {
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
        const redirectTo = navigation.state.params.redirectTo
        return (
        <View
        style={this.state.visible === true ? style.stylOld : style.styleNew}>
        {this.state.visible ? (
          <Loader />
        ) : null}
        <WebView 
            source={{uri: redirectTo === "squareupstore" ? "https://squareup.com/store/organicgathering" : "https://squareup.com/store/expressitpromos"}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadStart={() => this.showSpinner()}
            onLoad={() => this.hideSpinner()}
        />
            </View>
        )
    }
}
export default SquareupStore