import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function OnBoardingScreen() {

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        marginTop: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    image: {
        height: 480,
        width: 200,
        borderRadius: 100
    },
    slide: {
        flexDirection: 'column'
    },
    image2: {
        marginLeft: 10,
        marginTop: 5,
        height: 300,
        width: 170,
        borderRadius: 100
    },
    image3: {
        marginLeft: 10,
        marginTop: 10,
        height: 170,
        width: 170,
        borderRadius: 100
    },

    textcontainer: {
        textAlign: 'center',
        marginTop: 30,
        justifiContent: 'center',
        alignItem: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    },
    text2: {
        textAlign: 'center',
        fontSize: 17,
        padding: 20,
        color: '#3C3D37'
    },
    btn: {
        margin: 10,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#62825D',
        borderRadius: 50,
        height: 50,
    },
    textbtn: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#FFFFEC',
        fontWeight: 'bold'
    },
    login: {
        fontSize: 16,
        textAlign: 'center',
        padding: 20
    },

}
)