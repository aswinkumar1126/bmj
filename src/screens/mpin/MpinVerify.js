import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CreateMpinStyle from '../../styles/CreateMpinStyle'; // You can reuse the same styles
import { COLORS } from '../../utils/style';
import { baseMpinUrl } from '../../baseUrl/BaseUrl';
const MpinVerify = () => {
    const [mpin, setMpin] = useState('');

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const styles = CreateMpinStyle;



    const handleVerifyMpin = async () => {
        if (mpin.length !== 4 && mpin.length !== 6) {
            Alert.alert('Invalid MPIN', 'MPIN must be 4 or 6 digits');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(`${baseMpinUrl}/verify?enteredMpin=${mpin}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`
                }
            });

            const text = await response.text();

            if (response.ok) {
                Alert.alert('Success', text);
                navigation.navigate('Home');
            } else {
                Alert.alert('Verification Failed', text);
            }
        } catch (error) {
            console.error('Verify MPIN Error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}
        >
            <Text style={styles.title}>Enter Your MPIN</Text>
            <Text style={styles.subtitle}>To continue, please verify your MPIN</Text>

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={6}
                secureTextEntry
                placeholder="Enter MPIN"
                placeholderTextColor="#aaa"
                value={mpin}
                onChangeText={setMpin}
            />

            <TouchableOpacity style={styles.button} onPress={handleVerifyMpin} disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Verify MPIN</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AllProduct')}>
                <Text style={{ textAlign: 'center', color: COLORS.primary, marginTop: 12 }}>
                    Forgot MPIN?
                </Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
};

export default MpinVerify;
