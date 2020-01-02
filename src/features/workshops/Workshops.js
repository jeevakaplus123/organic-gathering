import React, { PureComponent } from "react"
import { Modal, View, TouchableOpacity, TouchableHighlight, Alert, Image, Text, FlatList, Dimensions } from "react-native"
import { Loader, Button, EmailInput, NumberInput, Link } from "../../components/reusable"
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
      friendPhoneNumber: {
        value: "",
        error: null
      },
      registerUrl: "",
      userRole: "Message"
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleOnChange = (value, name) => {
    // if(name === "email") {
    console.log(value);
    if (name === "email") {
      const errorEmail = validator(name, value)

      this.setState({
        friendEmail: {
          value: value,
          error: errorEmail
        }
      })
      return errorEmail

    }
    else {

      const errorNumber = validator(name, value)

      this.setState({
        friendPhoneNumber: {
          value: value,
          error: errorNumber
        }
      })
      return errorNumber
    }

  }
  onPressTab = (tabItem) => () => {
    this.setState({
      userRole: tabItem
    })

  }

  validateForm = () => {
    const { friendEmail, friendPhoneNumber } = this.state
    if ("email") {
      const errorEmail = validator("email", friendEmail.value)
      this.setState({
        friendEmail: {
          value: friendEmail.value,
          error: errorEmail
        }
      })
      return errorEmail === null
    }
    else {
      const errorNumber = validator("phone", friendPhoneNumber.value)
      this.setState({
        friendPhoneNumber: {
          value: friendPhoneNumber.value,
          error: errorNumber
        }
      })
      return errorNumber === null
    }

  }

  emailSend = () => {
    if (this.validateForm()) {
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
    const { friendEmail, friendPhoneNumber } = this.state
    const FirstRoute = () => (
      <View style={style.form}>
        <NumberInput
          errorMsg={friendPhoneNumber.error}
          isInvalid={Boolean(friendPhoneNumber.error)}
          label="Phone Number"
          placeholder="Enter your friend's phone number"
          name="phone"
          onChange={this.handleOnChange}
          value={friendPhoneNumber.value} />
        <Link style={style.contactText}>Pick up from contacts</Link>

        <Button
          onPress={this.emailSend}
          isPrimary
          buttonStyle={style.PopupButton}
        >Send</Button>
      </View>)

    const SecondRoute = () => (
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
      </View>)
    const { userRole } = this.state

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
          : <Loader />
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

              <View style={style.btnContainer}>
                <TouchableOpacity
                  style={[{ borderTopLeftRadius: 5 }, userRole === "Message" ? style.activeBtn : style.inactiveBtn]}
                  onPress={this.onPressTab("Message")}
                >
                  <Text
                    style={userRole === "Message" ? style.activeText : style.inactiveText}
                  >
                    Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[{ borderTopRightRadius: 5 }, userRole === "Email" ? style.activeBtn : style.inactiveBtn]}
                  onPress={this.onPressTab("Email")}
                >
                  <Text
                    style={userRole === "Email" ? style.activeText : style.inactiveText}

                  >Email</Text>
                </TouchableOpacity>
              </View>
              {userRole === "Message" ?
                FirstRoute()
                : null}
              {userRole === "Email" ?
                SecondRoute()
                : null}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default Workshops