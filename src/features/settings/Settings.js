import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList } from "react-native"
import { Button, ToggleSwitch, Checkbox } from "../../components/reusable"
import style from "./Settings.stylesheet"

const arrayOfData = [
  { code: "prayerRequest1", label: "Prayer request 1"},
  { code: "prayerRequest2", label: "Prayer request 2"},
  { code: "prayerRequest3", label: "Prayer request 3"},
  { code: "prayerRequest4", label: "Prayer request 4"},
  { code: "prayerRequest5", label: "Prayer request 5"},
  { code: "prayerRequest6", label: "Prayer request 6"},
  { code: "prayerRequest7", label: "Prayer request 7"},
  { code: "prayerRequest8", label: "Prayer request 8"},
  { code: "prayerRequest9", label: "Prayer request 9"},
  { code: "prayerRequest10", label: "Prayer request 10"},
  { code: "prayerRequest11", label: "Prayer request 11"},
  { code: "prayerRequest12", label: "Prayer request 12"},
  { code: "prayerRequest13", label: "Prayer request 13"},
  { code: "prayerRequest14", label: "Prayer request 14"},
  { code: "prayerRequest15", label: "Prayer request 15"},
  { code: "prayerRequest16", label: "Prayer request 16"},
  { code: "prayerRequest17", label: "Prayer request 17"},
  { code: "prayerRequest18", label: "Prayer request 18"},
  { code: "prayerRequest19", label: "Prayer request 19"},
  { code: "prayerRequest20", label: "Prayer request 20"}
]

const SettingsPage = ({ onPressSubmit, onPressToggle, onPressSubGroup, prayerRequest, stretchNotification, workshopNeeds, thought,
  prayerRequest1, prayerRequest2, prayerRequest3 ,prayerRequest4, prayerRequest5, prayerRequest6, prayerRequest7, prayerRequest8, prayerRequest9, prayerRequest10,
  prayerRequest11, prayerRequest12, prayerRequest13, prayerRequest14, prayerRequest15, prayerRequest16, prayerRequest17, prayerRequest18, prayerRequest19, prayerRequest20
}) => (
  <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
    <View style={style.container}>
      <Text style={style.title}>Notifications</Text>
      <Text style={style.statement}>To enable or disable receiving notifications, select from the categories below</Text>

      <ToggleSwitch
        isOn={prayerRequest}
        onColor="#00C301"
        offColor="#49EACA"
        label="Prayer request during workshops"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("prayerRequest")}

      />
      <ToggleSwitch
        isOn={stretchNotification}
        onColor="#00C301"
        offColor="#49EACA"
        label="Notification of STRETCH and Sunday morning"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("stretchNotification")}

      />
      <ToggleSwitch
        isOn={workshopNeeds}
        onColor="#00C301"
        offColor="#49EACA"
        label="Workshop need's (TAs, meals, housing, etc"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("workshopNeeds")}

      />
      <ToggleSwitch
        isOn={thought}
        onColor="#00C301"
        offColor="#49EACA"
        label="Miscellaneous"
        labelStyle={style.toggleSwitchLabel}
        size="medium"
        onToggle={onPressToggle("thought")}
      />
    </View>
    <Text style={style.statement}>To receive special notifications, select from the sub groups below</Text>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest1"
      disabled={false}
      isChecked={prayerRequest1}
      label="Prayer request 1"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest2"
      disabled={false}
      isChecked={prayerRequest2}
      label="Prayer request 2"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest3"
      disabled={false}
      isChecked={prayerRequest3}
      label="Prayer request 3"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest4"
      disabled={false}
      isChecked={prayerRequest4}
      label="Prayer request 4"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest5"
      disabled={false}
      isChecked={prayerRequest5}
      label="Prayer request 5"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest6"
      disabled={false}
      isChecked={prayerRequest6}
      label="Prayer request 6"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest7"
      disabled={false}
      isChecked={prayerRequest7}
      label="Prayer request 7"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest8"
      disabled={false}
      isChecked={prayerRequest8}
      label="Prayer request 8"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest9"
      disabled={false}
      isChecked={prayerRequest9}
      label="Prayer request 9"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest10"
      disabled={false}
      isChecked={prayerRequest10}
      label="Prayer request 10"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest11"
      disabled={false}
      isChecked={prayerRequest11}
      label="Prayer request 11"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest12"
      disabled={false}
      isChecked={prayerRequest12}
      label="Prayer request 12"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest13"
      disabled={false}
      isChecked={prayerRequest13}
      label="Prayer request 13"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest14"
      disabled={false}
      isChecked={prayerRequest14}
      label="Prayer request 14"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest15"
      disabled={false}
      isChecked={prayerRequest15}
      label="Prayer request 15"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest16"
      disabled={false}
      isChecked={prayerRequest16}
      label="Prayer request 16"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest17"
      disabled={false}
      isChecked={prayerRequest17}
      label="Prayer request 17"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest18"
      disabled={false}
      isChecked={prayerRequest18}
      label="Prayer request 18"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <View style={style.row}>
    <Checkbox
      code="prayerRequest19"
      disabled={false}
      isChecked={prayerRequest19}
      label="Prayer request 19"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    <Checkbox
      code="prayerRequest20"
      disabled={false}
      isChecked={prayerRequest20}
      label="Prayer request 20"
      labelStyle={{ color: "#3b4761" }}
      onClick={onPressSubGroup}
    />
    </View>
    <Button isPrimary onPress={onPressSubmit} buttonStyle={style.button}>
      SUBMIT
    </Button>
  </ScrollView>

);
export default SettingsPage