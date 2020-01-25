import React, { Component } from 'react'
import { ScrollView, View, Text } from "react-native"
import { Input, Button } from "../../components/reusable"
import style from "./Verification.stylesheet"

const VerificationPage = ({fields, handleOnChange, onPressSubmit}) => (
    <ScrollView behavior="padding" enabled contentContainerStyle={style.wrapper}>
        <View style={style.container}>
        <Text style={style.title}>Account Verification</Text>
            <Input
                errorMsg={fields.when.error}
                isInvalid={Boolean(fields.when.error)}
                onChange={handleOnChange}
                label="When did you go through the workshop?"
                placeholder="Enter your answer here"
                name="when"
                value={fields.when.value}
            />
            <Input
                errorMsg={fields.who.error}
                isInvalid={Boolean(fields.who.error)}
                onChange={handleOnChange}
                label="Who were your facilitators?"
                placeholder="Enter your answer here"
                name="who"
                value={fields.who.value}
            />
             <Button
        onPress={onPressSubmit}
        isPrimary
        buttonStyle={style.button}
      >SUBMIT</Button>
        </View>
    </ScrollView>
)
export default VerificationPage