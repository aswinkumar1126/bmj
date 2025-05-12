// screens/StartupScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator ,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartupScreen = ({ navigation }) => {
    useEffect(() => {
        const checkAsyncStorage = async () => {
            const launched = await AsyncStorage.getItem('hasLaunched');
            const token = await AsyncStorage.getItem('token');
            const mpin = await AsyncStorage.getItem('mpin');

            if (!launched) {
                await AsyncStorage.setItem('hasLaunched', 'true');
                navigation.reset({ index: 0, routes: [{ name: 'OnBoarding' }] });
            } else if (!token) {
                navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
            } else if (!mpin) {
                navigation.reset({ index: 0, routes: [{ name: 'CreateMpin' }] });
            } else {
                navigation.reset({ index: 0, routes: [{ name: 'MpinVerify' }] });
            }
        };

        checkAsyncStorage();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
        </View>
    );
};

export default StartupScreen;
