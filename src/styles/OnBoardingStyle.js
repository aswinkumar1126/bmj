import { StyleSheet } from "react-native";

const OnBoardingStyle = StyleSheet.create({
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
);
export default OnBoardingStyle;