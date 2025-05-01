import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../utils/normalize';
import { COLORS, SPACING, FONTS } from '../utils/style';

const HeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.sm,
        paddingVertical: verticalScale(10),
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    menuButton: {
        padding: SPACING.xs,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: SPACING.sm,
    },
    logo: {
        width: moderateScale(36),
        height: moderateScale(36),
        borderRadius: moderateScale(18),
        resizeMode: 'cover',
        backgroundColor: '#fff',
        padding: 2,
    },
    shopName: {
        color: '#fff',
        fontSize: FONTS.lg,
        fontWeight: 'bold',
        marginLeft: SPACING.sm,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        right:0,
    },
    iconWrapper: {
        marginLeft: SPACING.md,
        padding: SPACING.xss,
        borderRadius: moderateScale(8),
    },
});

export default HeaderStyle;
