import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignupScreen from '../screens/signupScreen/signupScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';



import { LoginProvider } from '../context/LoginContext';







const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isFirst, setIsFirst] = useState(null);

    useEffect(() => {
        const checkFirst = async () => {
            try {
                const value = await AsyncStorage.getItem('hasLaunched');
                if (value === null) {
                    await AsyncStorage.setItem('hasLaunched', 'true');
                    setIsFirst(true);
                } else {
                    setIsFirst(false);
                }
            } catch (err) {
                console.log('AsyncStorage Error', err);
                setIsFirst(false);
            }
        };

        checkFirst();
    }, []);



    return (
        <NavigationContainer>
            <LoginProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               
                
                    {isFirst ? (<Stack.Screen name='OnBoarding' component={OnBoardingScreen} />) : <Stack.Screen name="Login" component={LoginScreen} /> }
             
                <Stack.Screen name="Signin" component={SignupScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />

                
            </Stack.Navigator>
            </LoginProvider>
        </NavigationContainer>
    );
};

export default StackNavigator;
