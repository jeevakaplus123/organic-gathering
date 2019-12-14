import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native"
import { Button, ToggleSwitch } from "../../components/reusable"
import style from "./Settings.stylesheet"

const SettingsPage = ({ onPressSubmit, onPressToggle, prayerRequest, stretchNotification, workshopNeeds, thought }) => (
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
    <View style={style.container}>
      <Text style={style.title}>Settings</Text>
      <Text style={style.statement}>To enable or disable receiving notifications, select from the categories below</Text>

      <ToggleSwitch
        isOn={prayerRequest}
        onColor="#3b4761"
        offColor="#49EACA"
        label="Prayer request during workshops"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("prayerRequest")}

      />
      <ToggleSwitch
        isOn={stretchNotification}
        onColor="#3b4761"
        offColor="#49EACA"
        label="Notification of STRETCH and Sunday morning"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("stretchNotification")}

      />
      <ToggleSwitch
        isOn={workshopNeeds}
        onColor="#3b4761"
        offColor="#49EACA"
        label="Workshop need's (TAs, meals, housing, etc"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("workshopNeeds")}

      />
      <ToggleSwitch
        isOn={thought}
        onColor="#3b4761"
        offColor="#49EACA"
        label="Miscellaneous"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("thought")}
      />
    </View>
    <Button isPrimary onPress={onPressSubmit} buttonStyle={style.button}>
      SUBMIT
    </Button>
  </ScrollView>

);
export default SettingsPage