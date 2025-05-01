import React, { useState } from 'react';
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
import CreateMpinStyle from '../../styles/CreateMpinStyle'; // Make sure path is correct

const CreateMpin = () => {
    const [mpin, setMpin] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const styles = CreateMpinStyle;

    const handleCreateMpin = async () => {
        if (mpin.length !== 4 && mpin.length !== 6) {
            Alert.alert('Invalid MPIN', 'MPIN must be 4 or 6 digits');
            return;
        }

        try {
            setLoading(true);
            const token = await AsyncStorage.getItem('token');

            const response = await fetch('http://192.168.0.106:8080/api/mpin/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`
                },
                body: `mpin=${encodeURIComponent(mpin)}`
            });

            const text = await response.text();
            if (response.ok) {
                Alert.alert('Success', text || 'MPIN created successfully');
                AsyncStorage.setItem('mpin', mpin);
                setMpin('');
                navigation.navigate('MpinVerify');
            } else {
                Alert.alert('Failed', text || 'Failed to create MPIN');
            }
        } catch (error) {
            console.error('Create MPIN Error:', error);
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
            <Text style={styles.title}>Set Your MPIN</Text>
            <Text style={styles.subtitle}>Please create a secure 4 or 6 digit MPIN</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleCreateMpin} disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Create MPIN</Text>
                )}
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default CreateMpin;
