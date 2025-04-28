import { useState } from 'react';
import {
    Text, View, TouchableOpacity, StyleSheet,
    TextInput, Alert, ImageBackground, ScrollView,
    KeyboardAvoidingView, Platform
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';         // 👤, 🔒, 📞
import FontAwesome from 'react-native-vector-icons/FontAwesome';    // 👍
import { AntDesign } from '@expo/vector-icons';




export default function SignupScreen() {
    const navigation = useNavigation();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const handleSignup = async () => {


        if (!contactNumber || !email || !password || !username || !firstname || !lastname) {
            Alert.alert("Error", "Please fill the required fields");
            return;
        }

        try {
            const response = await fetch('http://192.168.0.106:8080/api/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({

                    firstname,
                    lastname,
                    contactNumber,
                    email,
                    password,
                    username,

                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup success:", data);
                Alert.alert('Success', 'Signed up successfully');
                setFirstName(''),
                setLastName(''),
                setContactNumber('');
                setEmail('');
                setPassword('');
                setUserName('');
                navigation.navigate("Login");
            } else {
                console.log("Signup error:", data);
                Alert.alert('Signup Failed', data.message || 'Account may already exist');
            }

        } catch (err) {
            console.error("Signup exception:", err);
            Alert.alert("Something went wrong", "Please try again later.");
        }
    };

    return (
        <View style={styles.signupContainer}>



            <ScrollView contentContainerStyle={styles.scroll}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                    <View style={styles.card}>

                        <View style={styles.titleContainer}>

                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.subtitle}>FIll the information below  or register with your social account.</Text>

                        </View>

                        <Text style={styles.label}> FirstName</Text>

                        <View style={styles.geticon}>

                            <Icon name='person' size={29} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='FirstName' value={firstname} onChangeText={setFirstName} style={styles.input} placeholderTextColor="#D0B8A8" />

                        </View>

                        <Text style={styles.label}>LastName</Text>

                        <View style={styles.geticon}>
                            <Icon name='person-outline' size={29} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='LastName' value={lastname} onChangeText={setLastName} style={styles.input} placeholderTextColor="#D0B8A8" />

                        </View>

                        <Text style={styles.label}>Username</Text>

                        <View style={styles.geticon}>
                            <Icon name='account-circle' size={29} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='Username' value={username} onChangeText={setUserName} style={styles.input} placeholderTextColor="#D0B8A8" />

                        </View>

                        <Text style={styles.label}>Phone</Text>

                        <View style={styles.geticon}>
                            <Icon name='phone' size={26} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='Phone' value={contactNumber} onChangeText={setContactNumber} style={styles.input} placeholderTextColor="#D0B8A8" keyboardType="phone-pad" />

                        </View>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.geticon}>
                            <Icon name='email' size={25} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="#D0B8A8" keyboardType="email-address" />
                        </View>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.geticon}>
                            <Icon name='lock' size={26} style={{ marginRight: 10 }}></Icon>
                            <TextInput placeholder='Password' value={password} onChangeText={setPassword} style={styles.input} placeholderTextColor="#D0B8A8" secureTextEntry />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleSignup}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.externalLinkContainer}>
                            <Text style={styles.exText}>Or sign up with</Text>
                            <View style={styles.continueSignup}>
                                <TouchableOpacity style={styles.iconCircle}>
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


                        <Text style={styles.footerText}>
                            Already have an account?{" "}
                            <Text style={[styles.loginLink, {
                                textDecorationLine: 'underline',
                                textDecorationColor: '#C5705D',
                            }]} onPress={() => navigation.navigate("Login")}>
                                Login
                            </Text>

                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    signupContainer: {
        flexGrow: 1,
        backgroundColor: '#fff'
    },


    scroll: {
        padding: 20,
        justifyContent: "center",

    },
    titleContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 8,
        textShadowColor: 'rgba(255, 255, 255, 0.6)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    subtitle: {
        fontSize: 15,
        marginLeft: 50,
        marginBottom: 10,
        marginRight: 50,
        color: 'grey',
        textAlign: 'center'
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
    },
    geticon: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 10,

    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },

    button: {
        backgroundColor: "#000",
        paddingVertical: 14,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
    },
    externalLinkContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    exText: {
        margin: 10,
        fontSize: 16,
    },
    continueSignup: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    iconCircle: {
        borderWidth: 1,
        borderColor: '#DBDBDB',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 5
    },
    footerText: {
        marginTop: 18,
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
    loginLink: {
        color: "#C63C51",
        fontWeight: "bold",
    }
});
