import { createContext } from "react";

import React, { useState } from "react";
import {
    Dimensions,
    Alert,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrlApi } from "../baseUrl/BaseUrl";


export const LoginContext = createContext(); //creates the useContext for Login 

export const LoginProvider = ({ children }) => {

    const [contactOrEmailOrUsername, setContactOrEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { width, height } = Dimensions.get("window");
    const isWide = width >= 768;

    const handleLogin = async (navigation) => {
        if (!contactOrEmailOrUsername || !password) {
            Alert.alert("Error", "Please enter both email/phone and password");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrlApi}/api/v1/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    contactOrEmailOrUsername,
                    password,
                }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                console.log("Login successful");
                await AsyncStorage.setItem("token", data.token);
                navigation.navigate("Home");
            } else {
                console.log("Login failed:", data);
                Alert.alert("Login Failed", data.message || "Invalid credentials");
            }
        } catch (error) {
            console.log("Error:", error);
            Alert.alert("Error", "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <LoginContext.Provider value={{
            contactOrEmailOrUsername, setContactOrEmailOrUsername,
            password, setPassword,
            isLoading, setIsLoading,
            width, height, isWide, handleLogin

        }}>
            {children}
        </LoginContext.Provider>
    )
}