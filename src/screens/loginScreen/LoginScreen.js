import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,

    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons'; // Includes Facebook, Twitter
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';


import { LoginContext } from "../../context/LoginContext"
const LoginScreen = () => {

    const navigation = useNavigation();

    const {
        usernameOrEmail, setUsernameOrEmail,
        password, setPassword,
        isLoading, 
         height, isWide, handleLogin

    } = useContext(LoginContext);



    return (
        <ScrollView contentContainerStyle={styles.fullPage}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <View style={[styles.wrapper, { flexDirection: isWide ? "row" : "column", minHeight: height }]}>


                    <View style={[styles.rightContainer, { width: isWide ? "50%" : "100%" }]}>
                        <Text style={styles.heading}>Welcome Back 👋</Text>
                        <Text style={styles.subheading}>Login to continue</Text>
                        <Text style={styles.labelPhone}>Email/Phone :</Text>
                        <TextInput
                            placeholder="📧 Email_or_phone"
                            value={usernameOrEmail}
                            onChangeText={setUsernameOrEmail}
                            style={styles.input}
                            placeholderTextColor="#999"
                        />
                        <Text style={styles.labelPassword}>Password : </Text>
                        <TextInput
                            placeholder=" 🔑 Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10, }} onPress={() => navigation.navigate("Forgot")}>
                            <Text style={styles.ForgotText}>
                                Forgot  password?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin(navigation)} disabled={isLoading}>
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.loginText}>LOGIN</Text>
                            )}
                        </TouchableOpacity>
                        <View style={styles.ContinueLogin}>

                            <Text style={styles.ContinueLoginText}>Or Login with</Text>

                            <View style={styles.ContinueLoginIcons}>
                                <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.navigate("GoogleLogin")}>
                                    <AntDesign name="google" size={24} color="#DB4437" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconCircle}>
                                    <FontAwesome name="facebook" size={24} color="#3b5998" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconCircle}>
                                    <FontAwesome name="twitter" size={24} color="#1DA1F2" />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.footerLinks}>
                            <Text style={styles.footerText}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                                <Text style={styles.footerSignText}>Signin </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    fullPage: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 100,
    },
    leftImage: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    rightContainer: {
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 6,
    },
    subheading: {
        fontSize: 16,
        color: "#666",
        marginBottom: 24,
        fontWeight: '500',
    },
    labelPhone: {
        marginTop: 20,
        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 10,
    },
    labelPassword: {
        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 50,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    ForgotText: {
        fontSize: 15,
        color: '#A62C2C',
        borderBottomWidth: 1.8,
        borderBottomColor: '#74512D',
        marginBottom: 10,

    },
    loginBtn: {
        width: "100%",
        height: 50,
        backgroundColor: "black",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    loginText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

    ContinueLogin: {
        alignItems: 'center',
        marginVertical: 20,
    },
    ContinueLoginText: {
        fontSize: 16,

    },
    ContinueLoginIcons: {
        margin: 10,
        flexDirection: 'row',

    },
    iconCircle: {
        margin: 7,
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    footerLinks: {
        flexDirection: 'row',
        alignItems: "center",
    },
    footerText: {
        fontSize: 16,
        marginVertical: 3,
    },
    footerSignText: {
        fontSize: 16,
        color: "#4E1F00",
        marginHorizontal: 10,
        borderBottomWidth: 1.4,
        borderBottomColor: '#74512D'
    },

});

export default LoginScreen;
