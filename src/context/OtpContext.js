import { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const OtpContext = createContext();

export const OtpProvider = ({ children }) => { 

const [contactNumber, setContactNumber] = useState('');


const generateotp = () => {
    return Math.floor(100000 + Math.random() * 900000);
}
const phoneNumber = contactNumber;
const handleSendotp = async (navigation) => {
    if (!phoneNumber || phoneNumber.length < 10) {
        Alert.alert('Invalid', ' Please enter a valid mobile number');
        return;
    }

    const otp = generateotp();

    const apiUrl = `https://sms.krispal.in/api/smsapi`;
    const params = {
        key: "f22fc7c406cfd9b0f2767d436a1c7c69",
        route: "2",
        sender: "VIMJEW",
        number: phoneNumber,
        sms: `Dear Customer, This is your OTP: ${otp} for Login.Thank you for Shopping - Vimala Jewellers - Manali`,
        templateid: "1707172725674467368",
    }

    try {
        const formBody = Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");
        const smsresponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formBody,
        });

        if (smsresponse.ok) {
            await AsyncStorage.setItem("otp", otp.toString());
            console.log('otp', otp);
            await AsyncStorage.setItem("phone", phoneNumber);
            Alert.alert("Success", "OTP sent successfully!");
            navigation.navigate("OtpVerify");
        } else {
            Alert.alert("Failed", "Failed to send OTP");
        }}
        catch (error) {
            console.error("Send OTP Error:", error);
            Alert.alert("Error", "Something went wrong while sending OTP.");
        }     
}  
return (
    <OtpContext.Provider value={{ contactNumber, setContactNumber, handleSendotp }}>
        {children}
    </OtpContext.Provider>
) 
}