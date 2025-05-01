import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from 'react';
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useContext } from 'react';
import { OtpContext }  from "../../context/OtpContext";

const { width } = Dimensions.get("window");



const OtpScreen = () => {

    const navigation = useNavigation();
    const {  contactNumber, setContactNumber,  handleSendotp } = useContext(OtpContext);
    return (
        <View style={styles.container}>
            <View style={styles.boxcontainer}>
                <Image source={require('../../assets/profile/loginimgbg.png')} // path relative to the current file
                    style={{ width: 400, height: 400 }}>
                </Image>
                <Text style={{ fontSize: 20, marginBottom: 8, marginTop: 10, fontWeight: 'bold', color: 'white' }}>Enter Your Mobile Number </Text>
                <TextInput style={styles.inputField} placeholder="Enter YourMobile Number" onChangeText={setContactNumber} value={contactNumber} placeholderTextColor="#D0B8A8" />
                <TouchableOpacity style={styles.btncontainer} onPress={() => handleSendotp(navigation)}>
                    <Text style={styles.btn} >Get otp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    boxcontainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: width - 100,
        height: 50,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    btncontainer: {
        width: width - 300,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginTop: 10,
        height: 50,
        justifyContent: 'center', // vertical center
        alignItems: 'center',     // horizontal center
    },
    btn: {
        color: '#fff',
        fontSize: 20
    }
})
export default OtpScreen;
