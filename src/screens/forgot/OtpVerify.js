import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const OtpVerify = () => {
    const navigation = useNavigation();
    const [otppin, setOtpPin] = useState('');

    const handleVerify = async () => {
        const getOtp = await AsyncStorage.getItem("otp");

        if (getOtp === otppin) {
            Alert.alert("Success", "OTP Verified!");
            navigation.navigate("Mpin");
        } else {
            Alert.alert("Invalid", "Incorrect OTP. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    source={require("../../assets/profile/loginimgbg.png")} // path relative to the current file
                    style={{ height: 400, width: 400, borderRadius: 10 }}
                />
                <View>
                    <Text style={styles.title}>Otp Verify</Text>
                    <Text style={styles.subtitle}>Enter 6 digit code sent to your number</Text>
                </View>
                <View style={styles.textcontainer}>
                    <TextInput
                        placeholder="Enter 6 digit OTP"
                        placeholderTextColor="#999"
                        value={otppin}
                        onChangeText={setOtpPin}
                        keyboardType="numeric"
                        maxLength={6}
                        style={styles.inputPin}
                    />
                    <TouchableOpacity style={styles.btncontainer} onPress={handleVerify}>
                        <Text style={styles.btn}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#ccc',
        marginVertical: 10,
    },
    textcontainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    inputPin: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: 250,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#1a1a1a',
    },
    btncontainer: {
        width: 120,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        color: '#fff',
        fontSize: 20,
    },
});

export default OtpVerify;
