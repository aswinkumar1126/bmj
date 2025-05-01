import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import OnBoardingStyle from '../styles/OnBoardingStyle'
export default function OnBoardingScreen() {
    const styles = OnBoardingStyle;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "https://selectvenue.in/blog/wp-content/uploads/2021/02/BLOUSE-DESIGNS.18JPG-1.jpg" }}
                    style={styles.image} />

                <View style={styles.slide}>
                    <Image source={{ uri: "https://www.k4fashion.com/wp-content/uploads/2021/11/marathi-bridal-jewellery-designs-6.jpg" }}
                        style={styles.image2} />

                    <Image source={{ uri: "https://i.pinimg.com/736x/c7/99/3a/c7993a9958c080c81f0e3a58fcdc4adc.jpg" }}
                        style={styles.image3} />
                </View>

            </View >
            <View style={styles.textcontainer}>
                <Text style={styles.text}>
                    The<Text style={[styles.text, { color: '#D4AF37' }]}> BMJ jewellery </Text>That {'\n'}
                    Makes YOU Look Your Best
                </Text >
                <Text style={styles.text2}>Crafting fine jewelry that reflects {'\n'}your inner glow and timeless charm.
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textbtn}>
                        Let's Get Started
                    </Text>

                </TouchableOpacity>
                <Text style={styles.login}>Already have a account? <Text style={{ fontSize: 16, textDecorationLine: 'underline', color: '#481E14' }} onPress={() => navigation.navigate('ProductDetails')} > Log In</Text> </Text>
            </View>
        </View>
    )

}
