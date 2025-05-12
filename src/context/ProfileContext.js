import { createContext } from "react";

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Alert,
    ActivityIndicator,

} from 'react-native';



export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    //const [userInfoData,setUserInfoData]=useState('');


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contactNumber: '',
        username: '',
    });
    const navigation = useNavigation();

    const fetchUser = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            //console.log(token);
             if (!token) {
                Alert.alert('Error', 'No token found. Please log in again.');
                return;
            }

            const response = await fetch('http://192.168.0.106:8080/api/v1/user/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                  
                },
            });

            if (!response.ok) throw new Error('❌ Network response was not ok');
            const data = await response.json();
            setUser(data?.content || data);
            //setUserInfoData(data);

            // Initialize edit data
            setEditData({
                firstname: data?.content?.firstname || '',
                lastname: data?.content?.lastname || '',
                email: data?.content?.email || '',
                contactNumber: data?.content?.contactNumber || '',
                username: data?.content?.username || '',

            });
        } catch (error) {
            console.error('Error fetching user:', error);
            Alert.alert('Error', '❌ Failed to load profile. Try again.');
        } finally {
            setLoading(false);
        }
    };



    const handleEditPress = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch('http://localhost:8080/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    firstname: editData.firstname,
                    lastname: editData.lastname,
                    email: editData.email,
                    contactNumber: editData.contactNumber,
                    username: editData.username

                }),
            });

            if (response.ok) {
                Alert.alert('Success', 'Profile updated successfully');
                setIsEditing(false);
                fetchUser(); // Refresh user data

            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            console.error('Update error:', error);
            Alert.alert('Error', 'Failed to update profile');
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset edit data to current user data
        setEditData({
            firstname: user?.firstname || '',
            lastname: user?.lastname || '',
            email: user?.email || '',
            contactNumber: user?.contactNumber || '',
            username: user?.username || '',
        });
    };

    const handleInputChange = (field, value) => {
        setEditData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleLogout = () => {
        Alert.alert(
            'Logout Confirmation',
            'Are you sure you want to log out?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        try {
                            await AsyncStorage.removeItem('userToken');
                            Alert.alert('Logged out');
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        } catch (error) {
                            Alert.alert('Error', 'Failed to log out');
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };
    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <ProfileContext.Provider value={{
            user, setUser,
            loading, setLoading,
            isEditing, setIsEditing,
            editData, setEditData, handleEditPress, handleSave, handleCancel, handleLogout, handleInputChange
        }}>
            {children}
        </ProfileContext.Provider>
    )
}
