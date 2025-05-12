import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LoginContext } from "../../context/LoginContext";

import LoginStyles from "../../styles/LoginStyles";

const LoginScreen = () => {
    const navigation = useNavigation();

    const {
        contactOrEmailOrUsername, setContactOrEmailOrUsername,
        password, setPassword,
        isLoading, height, isWide, handleLogin
    } = useContext(LoginContext);

    return (
        <ScrollView contentContainerStyle={[LoginStyles.fullPage]}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <View style={[LoginStyles.wrapper, { flexDirection: isWide ? "row" : "column", minHeight: height }]}>
                    {/* Right Container (Form Section) */}
                    <View style={[LoginStyles.rightContainer, { width: isWide ? "50%" : "100%" }]}>
                        <Text style={LoginStyles.heading}>Welcome Back 👋</Text>
                        <Text style={LoginStyles.subheading}>Login to continue</Text>

                        {/* Email/Phone Input */}
                        <Text style={LoginStyles.labelPhone}>Email/Phone:</Text>
                        <TextInput
                            placeholder="📧 Email_or_phone"
                            value={contactOrEmailOrUsername}
                            onChangeText={setContactOrEmailOrUsername}
                            style={LoginStyles.input}
                            placeholderTextColor="#999"
                        />

                        {/* Password Input */}
                        <Text style={LoginStyles.labelPassword}>Password:</Text>
                        <TextInput
                            placeholder="🔑 Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={LoginStyles.input}
                            placeholderTextColor="#999"
                        />

                        {/* Forgot Password */}
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end', marginTop: 10 }}
                            onPress={() => navigation.navigate("Slider")}
                        >
                            <Text style={LoginStyles.ForgotText}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>

                        {/* Login Button */}
                        <TouchableOpacity
                            style={LoginStyles.loginBtn}
                            onPress={() => handleLogin(navigation)}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={LoginStyles.loginText}>LOGIN</Text>
                            )}
                        </TouchableOpacity>

                        {/* Social Login */}
                        <View style={LoginStyles.ContinueLogin}>
                            <Text style={LoginStyles.ContinueLoginText}>Or Login with</Text>
                            <View style={LoginStyles.ContinueLoginIcons}>
                                <TouchableOpacity
                                    style={LoginStyles.iconCircle}
                                    onPress={() => navigation.navigate("GoogleLogin")}
                                >
                                    <AntDesign name="google" size={24} color="#DB4437" />
                                </TouchableOpacity>
                                <TouchableOpacity style={LoginStyles.iconCircle}>
                                    <FontAwesome name="facebook" size={24} color="#3b5998" />
                                </TouchableOpacity>
                                <TouchableOpacity style={LoginStyles.iconCircle}>
                                    <FontAwesome name="twitter" size={24} color="#1DA1F2" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Footer Links */}
                        <View style={LoginStyles.footerLinks}>
                            <Text style={LoginStyles.footerText}>Don’t have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                <Text style={LoginStyles.footerSignText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default LoginScreen;
