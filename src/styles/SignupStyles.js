import { StyleSheet } from "react-native";

const SignupStyles = StyleSheet.create({
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
export default SignupStyles;