import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import {Input, EmailInput, PasswordInput, Button, Link, ToggleSwitch, NumberInput} from '../../components/reusable';
import style from './Register.stylesheet';
const RegisterForm = ({
  onPressRegister,
  onPressLogin,
  handleOnChange,
  onPressToggle,
  fields,
  thought,
  prayerRequest,
  stretchNotification,
  workshopNeeds
}) => (
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
    <Text style={style.title}>Sign Up</Text>
    <EmailInput
      errorMsg={fields.email.error}
      isInvalid={Boolean(fields.email.error)}
      onChange={handleOnChange}
      label="Email"
      placeholder="Enter your Email"
      name="email"
      value={fields.email.value}
    />
    <NumberInput
      errorMsg={fields.phoneNumber.error}
      isInvalid={Boolean(fields.phoneNumber.error)}
      onChange={handleOnChange}
      label="Phone Number"
      placeholder="Enter your phone number"
      name="phoneNumber"
      value={fields.phoneNumber.value}
    />
    <PasswordInput
      errorMsg={fields.password.error}
      isInvalid={Boolean(fields.password.error)}
      label="Password"
      name="password"
      value={fields.password.value}
      onChange={handleOnChange}
      placeholder="Password"
    />
    <Input
      errorMsg={fields.firstName.error}
      isInvalid={Boolean(fields.firstName.error)}
      onChange={handleOnChange}
      label="First Name"
      placeholder="Enter your First Name"
      name="firstName"
      value={fields.firstName.value}
    />
    <Input
      errorMsg={fields.lastName.error}
      isInvalid={Boolean(fields.lastName.error)}
      onChange={handleOnChange}
      label="Last Name"
      placeholder="Enter your Last Name"
      name="lastName"
      value={fields.lastName.value}
    />
    <Text style={style.note}>We ask you to input your contact information so you can register to TA workshops from within the app, and not have to re-enter this info every time."</Text>
    <Input
    errorMsg={fields.address.error}
    isInvalid={Boolean(fields.address.error)}
    onChange={handleOnChange}
    label="Address"
    placeholder="Enter your Address"
    name="address"
    value={fields.address.value}
  />
  <Input
      errorMsg={fields.city.error}
      isInvalid={Boolean(fields.city.error)}
      onChange={handleOnChange}
      label="City"
      placeholder="Enter your City"
      name="city"
      value={fields.city.value}
    />
    <Input
      errorMsg={fields.state.error}
      isInvalid={Boolean(fields.state.error)}
      onChange={handleOnChange}
      label="State"
      placeholder="Enter your State"
      name="state"
      value={fields.state.value}
    />
    <Input
      errorMsg={fields.zip.error}
      isInvalid={Boolean(fields.zip.error)}
      onChange={handleOnChange}
      label="Zip"
      placeholder="Enter your Zip"
      name="zip"
      value={fields.zip.value}
    />
    <Input
      errorMsg={fields.dagger.error}
      isInvalid={Boolean(fields.dagger.error)}
      onChange={handleOnChange}
      label="Dagger"
      placeholder="Enter your Dagger"
      name="dagger"
      value={fields.dagger.value}
    />
    <Input
      errorMsg={fields.newName.error}
      isInvalid={Boolean(fields.newName.error)}
      onChange={handleOnChange}
      label="New Name"
      placeholder="Enter your New Name"
      name="newName"
      value={fields.newName.value}
    />
    <Input
      errorMsg={fields.cradleSong.error}
      isInvalid={Boolean(fields.cradleSong.error)}
      onChange={handleOnChange}
      label="Cradle Song"
      placeholder="Enter your Cradle Song"
      name="cradleSong"
      value={fields.cradleSong.value}
    />
    <ToggleSwitch
  isOn={prayerRequest}
  onColor="#3b4761"
  offColor="#49EACA"
  label="Prayer request during workshops"
  labelStyle={style.toggleSwitchLabel}
  size="medium"
  // onToggle={isOn => console.log("changed to : ", isOn)}
  onToggle={onPressToggle("prayerRequest")}

/>
<ToggleSwitch
  isOn={stretchNotification}
  onColor="#3b4761"
  offColor="#49EACA"
  label="Notification of STRETCH and Sunday morning"
  labelStyle={style.toggleSwitchLabel}
  size="medium"
  // onToggle={isOn => console.log("changed to : ", isOn)}
  onToggle={onPressToggle("stretchNotification")}

/>
<ToggleSwitch
  isOn={workshopNeeds}
  onColor="#3b4761"
  offColor="#49EACA"
  label="Workshop need's (TAs, meals, housing, etc"
  labelStyle={style.toggleSwitchLabel}
  size="medium"
  // onToggle={isOn => console.log("changed to : ", isOn)}
  onToggle={onPressToggle("workshopNeeds")}

/>
<ToggleSwitch
  isOn={thought}
  onColor="#3b4761"
  offColor="#49EACA"
  label="miscellaneous"
  labelStyle={style.toggleSwitchLabel}
  size="medium"
  // onToggle={isOn => console.log("changed to : ", isOn)}
  onToggle={onPressToggle("thought")}
/>

    <Button onPress={onPressRegister} buttonStyle={style.buttonStyle} isPrimary>
      SIGN UP
    </Button>
    <View style={style.textContainer}>
      <Text style={style.textStyle}>Already a member ?</Text>
      <Link onPress={onPressLogin}>
        Sign in here
      </Link>
    </View>
  </ScrollView>
)
export default RegisterForm
