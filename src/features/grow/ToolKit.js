import React, { PureComponent } from "react"
import { View, Text, ScrollView, Dimensions } from "react-native"
import { connect } from 'react-redux'
import style from "./Grow.stylesheet"
import { Loader } from "../../components/reusable"
import HTML from 'react-native-render-html'
import {getToolkitContent} from "../../actions/toolkitActions"
class ToolKit extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
          }
    }

    async componentDidMount(){
        const { navigation, fetchToolkitContent, contentArray } = this.props
        const toolKitId = JSON.stringify(navigation.getParam('toolKitId', 'NO-ID'))
        const slug = toolKitId === "1" ? "the-organic-heartchange-toolkit/" : "organic-heartchange-toolkit-2/"
        if(!contentArray.some(item=> item.id ===toolKitId)){
            const result = await fetchToolkitContent(slug, toolKitId)

        }
    }

    render() {
        const { navigation, contentArray, isLoading } = this.props
        const toolKitId = JSON.stringify(navigation.getParam('toolKitId', 'NO-ID'))
        const htmlObject = contentArray.find(item=> item.id === toolKitId)
        const htmlContent = typeof htmlObject === "object" ? htmlObject.content : "<P>HTML</P>"
        return (
            <ScrollView style={{ flex: 1 }}>
            {!isLoading ?
            <HTML html={htmlContent} 
            imagesMaxWidth={Dimensions.get('window').width} 
            containerStyle={{ margin: 10, marginHorizontal: 20,}}
            baseFontStyle={{fontFamily: "HelveticaNeue-Light", color: 'rgba(51, 79, 97, 0.8)'}}
            tagsStyles={{
                strong:{fontFamily: "HelveticaNeue-Bold", color: "#3b4761"}
            }}
            />
            : <Loader />}
        </ScrollView>
        )
    }
}
const mapStateToProps = ({ toolkit }) => ({ 
    contentArray: toolkit.content,
    isLoading: toolkit.isLoading
})

const mapDispatchToProps = dispatch => ({
    fetchToolkitContent: (slug, toolkitId) => dispatch(getToolkitContent(slug, toolkitId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToolKit)