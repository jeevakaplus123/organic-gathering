import React, { PureComponent } from "react"
import HomeScreen from "./HomeScreen"
import { removeData } from "../../utils/asyncStorage"
import { connect } from 'react-redux'
import style from "./Home.stylesheet"
import { Text, View, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('users')
        this.state = {

            isLoading: false,
            initialLoading: true,
            pushNotificationObject: {},
            callOfInfoObject: {}
        }
    }

    async componentDidMount() {        
        try {
            this.ref.onSnapshot(this.onCollectionUpdate)
            this.messageListener()
        } catch (error) { }
    }

    messageListener = async () => {
        this.notificationListener = firebase.notifications().onNotification(notification => {
            let notificationMessage = notification._android._notification._data.action
            let recordId = notification._android._notification._data.recordID

            let { title, body } = notification
            
            console.log(title, body, notificationMessage, recordId)

            const channelId = new firebase.notifications.Android.Channel(
                'Default',
                'Default',
                firebase.notifications.Android.Importance.High
            )
            firebase.notifications().android.createChannel(channelId)

            let notification_to_be_displayed = new firebase.notifications.Notification({
                data: notification.data,
                sound: 'default',
                show_in_foreground: true,
                title: notification.title,
                body: notification.body,
            })

            if (Platform.OS == 'android') {
                notification_to_be_displayed.android
                    .setPriority(firebase.notifications.Android.Priority.High)
                    .android.setChannelId('Default')
                    .android.setVibrate(1000);
            }
            console.log('FOREGROUND NOTIFICATION LISTENER: \n', notification_to_be_displayed);

            firebase.notifications().displayNotification(notification_to_be_displayed);
        })
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
                    prayerRequest1,
                    prayerRequest2,
                    prayerRequest3,
                    prayerRequest4,
                    prayerRequest5,
                    prayerRequest6,
                    prayerRequest7,
                    prayerRequest8,
                    prayerRequest9,
                    prayerRequest10,
                    prayerRequest11,
                    prayerRequest12,
                    prayerRequest13,
                    prayerRequest14,
                    prayerRequest15,
                    prayerRequest16,
                    prayerRequest17,
                    prayerRequest18,
                    prayerRequest19,
                    prayerRequest20
                } = doc.data();
console.log(this.props.email)

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
                        fcmToken,
                        prayerRequest1,
                        prayerRequest2,
                        prayerRequest3,
                        prayerRequest4,
                        prayerRequest5,
                        prayerRequest6,
                        prayerRequest7,
                        prayerRequest8,
                        prayerRequest9,
                        prayerRequest10,
                        prayerRequest11,
                        prayerRequest12,
                        prayerRequest13,
                        prayerRequest14,
                        prayerRequest15,
                        prayerRequest16,
                        prayerRequest17,
                        prayerRequest18,
                        prayerRequest19,
                        prayerRequest20
                    }
                    console.log(prayerRequest19)

                    const pushNotificationObject = { prayerRequest, stretchNotification, workshopNeeds, thought,  prayerRequest1,
                        prayerRequest2,
                        prayerRequest3,
                        prayerRequest4,
                        prayerRequest5,
                        prayerRequest6,
                        prayerRequest7,
                        prayerRequest8,
                        prayerRequest9,
                        prayerRequest10,
                        prayerRequest11,
                        prayerRequest12,
                        prayerRequest13,
                        prayerRequest14,
                        prayerRequest15,
                        prayerRequest16,
                        prayerRequest17,
                        prayerRequest18,
                        prayerRequest19,
                        prayerRequest20
                     }
                    const callOfInfoObject = { dagger, newName, cradleSong }
                    
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
                    if(prayerRequest1) {
                        firebase.messaging().subscribeToTopic('prayerRequest1')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest1')
                    }
                    if(prayerRequest2) {
                        firebase.messaging().subscribeToTopic('prayerRequest2')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest2')
                    }
                    if(prayerRequest3) {
                        firebase.messaging().subscribeToTopic('prayerRequest3')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest3')
                    }
                    if(prayerRequest4) {
                        firebase.messaging().subscribeToTopic('prayerRequest4')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest4')
                    }
                    if(prayerRequest5) {
                        firebase.messaging().subscribeToTopic('prayerRequest5')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest5')
                    }
                    if(prayerRequest6) {
                        firebase.messaging().subscribeToTopic('prayerRequest6')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest6')
                    }
                    if(prayerRequest7) {
                        firebase.messaging().subscribeToTopic('prayerRequest7')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest7')
                    }
                    if(prayerRequest8) {
                        firebase.messaging().subscribeToTopic('prayerRequest8')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest8')
                    }
                    if(prayerRequest9) {
                        firebase.messaging().subscribeToTopic('prayerRequest9')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest9')
                    }
                    if(prayerRequest10) {
                        firebase.messaging().subscribeToTopic('prayerRequest10')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest10')
                    }
                    if(prayerRequest11) {
                        firebase.messaging().subscribeToTopic('prayerRequest11')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest11')
                    }
                    if(prayerRequest12) {
                        firebase.messaging().subscribeToTopic('prayerRequest12')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest12')
                    }
                    if(prayerRequest13) {
                        firebase.messaging().subscribeToTopic('prayerRequest13')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest13')
                    }
                    if(prayerRequest14) {
                        firebase.messaging().subscribeToTopic('prayerRequest14')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest14')
                    }
                    if(prayerRequest15) {
                        firebase.messaging().subscribeToTopic('prayerRequest15')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest15')
                    }
                    if(prayerRequest15) {
                        firebase.messaging().subscribeToTopic('prayerRequest15')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest15')
                    }
                    if(prayerRequest16) {
                        firebase.messaging().subscribeToTopic('prayerRequest16')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest16')
                    }
                    if(prayerRequest17) {
                        firebase.messaging().subscribeToTopic('prayerRequest17')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest17')
                    }
                    if(prayerRequest18) {
                        firebase.messaging().subscribeToTopic('prayerRequest18')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest18')
                    }
                    if(prayerRequest19) {
                        firebase.messaging().subscribeToTopic('prayerRequest19')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest19')
                    }
                    if(prayerRequest20) {
                        firebase.messaging().subscribeToTopic('prayerRequest20')
                    }
                    else {
                        firebase.messaging().unsubscribeFromTopic('prayerRequest20')
                    }
                    if (JSON.stringify(pushNotificationObject) !== JSON.stringify(this.state.pushNotificationObject)){
                        
                        this.setState({
                            pushNotificationObject: pushNotificationObject
                        })
                    }
                    if (JSON.stringify(callOfInfoObject) !== JSON.stringify(this.state.callOfInfoObject)){
                        
                        this.setState({
                            callOfInfoObject: callOfInfoObject
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
        const { callOfInfoObject } = this.state
        this.props.navigation.navigate("Grow", {callOfInfoObject: callOfInfoObject})
    }

    _onPressShopDonate = () => {        
        this.props.navigation.navigate("ShopDonate")
    }

    render() {        
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