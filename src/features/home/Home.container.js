import React, { PureComponent } from "react"
import HomeScreen from "./HomeScreen"
import { removeData } from "../../utils/asyncStorage"
import { connect } from 'react-redux'
import style from "./Home.stylesheet"
import { Text, View, ActivityIndicator, KeyboardAvoidingView } from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('users')
        this.state = {

            isLoading: false,
            initialLoading: true,
            pushNotificationObject: {}
        }
    }

    async componentDidMount() {        
        try {
            this.ref.onSnapshot(this.onCollectionUpdate)
        } catch (error) { }
    }


    onCollectionUpdate = querySnapshot => {

        querySnapshot.forEach(doc => {
            if (doc.exists) {
                const {
                    email,
                    phoneNumber,
                    firstName,
                    lastName,
                    address,
                    city,
                    state,
                    zip,
                    dagger,
                    newName,
                    cradleSong,
                    prayerRequest,
                    stretchNotification,
                    workshopNeeds,
                    thought,
                    fcmToken,
                } = doc.data();

                if (email === this.props.email) {
                    const userObject = {
                        email,
                        phoneNumber,
                        firstName,
                        lastName,
                        address,
                        city,
                        state,
                        zip,
                        dagger,
                        newName,
                        cradleSong,
                        prayerRequest,
                        stretchNotification,
                        workshopNeeds,
                        thought,
                        fcmToken
                    }
                    const pushNotificationObject = { prayerRequest, stretchNotification, workshopNeeds, thought }

                    if(prayerRequest) {
                         firebase.messaging().subscribeToTopic('prayerRequest')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest')
                    }
                    if(stretchNotification) {
                        firebase.messaging().subscribeToTopic('stretchNotification')
                    }
                    else{
                        firebase.messaging().unsubscribeFromTopic('stretchNotification')
                    }
                    if(workshopNeeds) {
                        firebase.messaging().subscribeToTopic('workshopNeeds')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('workshopNeeds')
                    }
                    if(thought) {
                        firebase.messaging().subscribeToTopic('thought')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('thought')
                    }
                    if (JSON.stringify(pushNotificationObject) !== JSON.stringify(this.state.pushNotificationObject)){
                        
                        this.setState({
                            pushNotificationObject: pushNotificationObject
                        })
                    }

                }
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!')
            }
        })
    }

    _onPressLogout = () => {
        removeData("STORAGE_KEY")
        this.props.navigation.navigate("Landing")
    }

    _onPressSettings = () => {
        const { pushNotificationObject } = this.state
        const { uid } =this.props
        this.props.navigation.navigate("Settings", { pushNotificationObject: pushNotificationObject, uid: uid })
    }

     _onDidFocus = async() => {
        try {
            this.ref.onSnapshot(this.onCollectionUpdate)
        } catch (error) { }
    }

    _onPressConnect = () => {        
        this.props.navigation.navigate("Connect")
    }

    _onPressGrow = () => {        
        this.props.navigation.navigate("Grow")
    }

    _onPressShopDonate = () => {        
        this.props.navigation.navigate("ShopDonate")
    }

    render() {
        const { pushNotificationObject } = this.state

        console.log(pushNotificationObject)
        
        return (
            <HomeScreen
                {...this.props}
                onPressLogout={this._onPressLogout}
                onPressSettings={this._onPressSettings}
                onDidFocus={this._onDidFocus}
                onPressConnect={this._onPressConnect}
                onPressGrow={this._onPressGrow}
                onPressShopDonate={this._onPressShopDonate}
                 />
        )
    }
}
const mapStateToProps = ({ user }) => ({
    email: user.email,
    uid: user.uid
});

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);