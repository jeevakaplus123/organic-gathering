import React, { PureComponent } from "react"
import { Modal, View, TouchableOpacity, TouchableHighlight, Alert, Image, Text, FlatList } from "react-native"
import { Loader, Button, EmailInput } from "../../components/reusable"
import style from "./Workshops.stylesheet"
import moment from 'moment'
import FaIconPro from "react-native-vector-icons/FontAwesome5"
import { validator } from '../../utils/validator'
import { sendEmail } from "../../services/EmailService"
class Workshops extends PureComponent {
  constructor() {
    super()

    this.state = {
      modalVisible: false,
      friendEmail: {
        value: "",
        error: null
      },
      registerUrl : "",
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleOnChange = (value, name) => {
    const error = validator(name, value)

    this.setState({
      friendEmail: {
        value: value,
        error: error
      }
    })
    return error
  }

  validateForm = () => {
    const { friendEmail } = this.state
    const error = validator("email", friendEmail.value)
    console.log(error)
    this.setState({
      friendEmail: {
        value: friendEmail.value,
        error: error
      }
    })
    return error === null
  }

  emailSend = () => {
    if(this.validateForm()){
      sendEmail(
        this.state.friendEmail.value,
        'Register',
        this.state.registerUrl
    ).then(() => {
        console.log('Our email successful provided to device mail ')
    })
    }
  }

  render() {
    const { data, isLoading } = this.props
    const { friendEmail } = this.state
    return (
      <View style={style.wrapper}>
        {!isLoading ?
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              (
                <View style={style.itemContainer}>
                  <View style={style.eventDetails}>
                    <Image
                      style={style.imageStyle}
                      source={require('../../images/organic_gathering.png')}
                    />
                    <View style={style.textContainer}>
                      <Text style={style.title}>{item.name.text}</Text>
                      <Text style={style.date}>{moment(item.start.utc).format("LL")}</Text>
                      <Text style={style.date}>{moment(item.end.utc).format("LL")}</Text>
                    </View>
                  </View>
                  <View style={style.separator} />
                  <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.button} onPress={() => {
                      this.setModalVisible(true)
                      this.setState({
                        registerUrl: item.url
                      })
                    }}>
                      <View style={style.buttonView}>
                        <Text style={style.buttonText}>Refer</Text>
                        <FaIconPro color="#3b4761" name="chevron-right" size={12} />
                      </View>
                    </TouchableOpacity>
                    <View style={style.separator} />
                    <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("WorkshopRegister", { url: item.url })}>
                      <View style={style.buttonView}>
                        <Text style={style.buttonText}>Register</Text>
                        <FaIconPro color="#3b4761" name="chevron-right" size={12} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
          />
          : <Loader loading={isLoading} />
        }
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={style.modalContainer}>
            <View style={style.modal}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: 25, height: 25 }} />
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={style.onClose}
                >
                  <FaIconPro color="#3b4761" name="times-circle" size={22} />
                </TouchableHighlight>
              </View>
              <View style={style.form}>
                <EmailInput
                  errorMsg={friendEmail.error}
                  isInvalid={Boolean(friendEmail.error)}
                  label="Email"
                  placeholder="Enter your friend's Email"
                  name="email"
                  onChange={this.handleOnChange}
                  value={friendEmail.value} />
                <Button
                  onPress={this.emailSend}
                  isPrimary
                  buttonStyle={style.PopupButton}
                >Send</Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default Workshops