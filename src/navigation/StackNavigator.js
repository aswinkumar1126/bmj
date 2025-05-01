import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



import StartupScreen from './StartupScreen';
// Screens
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignupScreen from '../screens/signupScreen/signupScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import SliderScreen from '../screens/SliderScreen';
import Search from '../component/search/Search';
import BottomNavigation from '../component/footer/BottomNavigation';
import OtpScreen from '../screens/forgot/OtpScreen';
import OtpVerify from '../screens/forgot/OtpVerify';
import CreateMpin from '../screens/mpin/CreateMpin';
import MpinVerify from '../screens/mpin/MpinVerify';
import CategoryScreen from '../screens/CategoryScreen';
import ProductScreen from '../screens/ProductScreen';
import AllProduct from '../component/product/AllProducts';
import SearchScreen from '../screens/SearchScreen';
import Header from '../component/header/Header';
import RateScreen from '../component/rate/RateScreen';

// Context Providers
import { LoginProvider } from '../context/LoginContext';
import { ProfileProvider } from '../context/ProfileContext';
import { OtpProvider } from '../context/OtpContext';
import { GlobalProductProvider } from '../context/product/GlobalProductContext';
import { RateProvider } from '../context/rate/RateContext';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null); // null = checking
    const [hasToken, setHasToken] = useState(false);
    const [hasMpin, setHasMpin] = useState(false);

    useEffect(() => {
        const init = async () => {
            const launched = await AsyncStorage.getItem('hasLaunched');
            if (launched === null) {
                await AsyncStorage.setItem('hasLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }

            const token = await AsyncStorage.getItem('token');
            setHasToken(!!token);

            const mpin = await AsyncStorage.getItem('mpin');
            setHasMpin(!!mpin);
        };

        init();
    }, []);

    if (isFirstLaunch === null) return null; // optional: show a splash screen

    return (
        <NavigationContainer>
            <LoginProvider>
                <ProfileProvider>
                    <OtpProvider>
                        <GlobalProductProvider>
                            <RateProvider>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Startup" >
                            
                                <Stack.Screen name="Startup" component={StartupScreen} />
                                <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Signin" component={SignupScreen} />
                                <Stack.Screen name="OtpScreen" component={OtpScreen} />
                                <Stack.Screen name="OtpVerify" component={OtpVerify} />
                                <Stack.Screen name="CreateMpin" component={CreateMpin} />
                                <Stack.Screen name="MpinVerify" component={MpinVerify} />
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Search" component={Search} />
                                <Stack.Screen name="Slider" component={SliderScreen} />
                                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                                <Stack.Screen name="Cart" component={CartScreen} />
                                <Stack.Screen name="Profile" component={ProfileScreen} />
                                <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
                                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                                <Stack.Screen name="AllProduct" component={AllProduct} />
                                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                                <Stack.Screen name="Header" component={Header} />
                                    <Stack.Screen name="RateScreen" component={RateScreen} />


                            </Stack.Navigator>
                                </RateProvider>
                            </GlobalProductProvider>
                    </OtpProvider>
                </ProfileProvider>
            </LoginProvider>
        </NavigationContainer>
    );
};

export default StackNavigator;
