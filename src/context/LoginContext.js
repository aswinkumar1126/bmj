import { createContext } from "react";

import React, { useState } from "react";
import {
    Dimensions,
    Alert,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';



export const LoginContext = createContext(); //creates the useContext for Login 

export const LoginProvider = ({ children }) => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { width, height } = Dimensions.get("window");
    const isWide = width >= 768;

    const handleLogin = async (navigation) => {
        if (!usernameOrEmail || !password) {
            Alert.alert("Error", "Please enter both email/phone and password");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("http://192.168.0.106:8080/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    usernameOrEmail,
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
            usernameOrEmail, setUsernameOrEmail,
            password, setPassword,
            isLoading, setIsLoading,
            width, height, isWide, handleLogin

        }}>
            {children}
        </LoginContext.Provider>
    )
}