import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale,hp } from "../utils/normalize";

const { width, height } = Dimensions.get('window');  // Get device width and height

const LoginStyles = StyleSheet.create({
    fullPage: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: verticalScale(30), // Replaces marginTop
    },

    leftImage: {
        borderTopLeftRadius: moderateScale(12),
        borderBottomLeftRadius: moderateScale(12),
        width: scale(200),  // Scale width to the device width
        height: verticalScale(300),  // Scale height to the device height
    },
    rightContainer: {
        padding: scale(24),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    heading: {
        fontSize: moderateScale(28),  // Moderate scaling for font size
        fontWeight: 'bold',
        color: '#333',
        marginBottom: verticalScale(6),  // Vertical scaling for spacing
    },
    subheading: {
        fontSize: moderateScale(16),
        color: '#666',
        marginBottom: verticalScale(24),
        fontWeight: '500',
    },
    labelPhone: {
        marginTop: verticalScale(20),
        alignSelf: 'flex-start',
        fontSize: moderateScale(16),
        marginBottom: verticalScale(10),
    },
    labelPassword: {
        alignSelf: 'flex-start',
        fontSize: moderateScale(16),
        marginBottom: verticalScale(10),
    },
    input: {
        width: '100%',
        height: verticalScale(50),  // Use verticalScale for height
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: moderateScale(50),  // Moderate scaling for rounded corners
        paddingHorizontal: scale(15),  // Use scale for horizontal padding
        marginBottom: verticalScale(15),
        fontSize: moderateScale(16),
        backgroundColor: '#fafafa',
    },
    ForgotText: {
        fontSize: moderateScale(15),
        color: '#A62C2C',
        borderBottomWidth: 1.8,
        borderBottomColor: '#74512D',
        marginBottom: verticalScale(10),
    },
    loginBtn: {
        width: '100%',
        height: verticalScale(50),  // Scale height vertically
        backgroundColor: 'black',
        borderRadius: moderateScale(50),  // Scale the button corners moderately
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(8),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    loginText: {
        color: '#fff',
        fontSize: moderateScale(16),
        fontWeight: '600',
    },
    ContinueLogin: {
        alignItems: 'center',
        marginVertical: verticalScale(20),
    },
    ContinueLoginText: {
        fontSize: moderateScale(16),
    },
    ContinueLoginIcons: {
        margin: scale(10),
        flexDirection: 'row',
    },
    iconCircle: {
        margin: scale(7),
        height: scale(50),  // Use scale for icon size
        width: scale(50),  // Use scale for icon size
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    footerLinks: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        fontSize: moderateScale(16),
        marginVertical: verticalScale(3),
    },
    footerSignText: {
        fontSize: moderateScale(16),
        color: '#4E1F00',
        marginHorizontal: scale(10),
        borderBottomWidth: 1.4,
        borderBottomColor: '#74512D',
    },
});

export default LoginStyles;
