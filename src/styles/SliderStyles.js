import { StyleSheet } from "react-native";
import {
    moderateScale,
    moderateVerticalScale,
    wp,
    hp
} from "../utils/normalize";
import { COLORS, SHADOWS, SPACING, BORDER_RADIUS } from "../utils/style"

// Define typography constants locally if not importing from styles.js
const TYPOGRAPHY = {
    labelLarge: {
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
    bodyMedium: {
        fontSize: moderateScale(14),
    }
};

const SliderStyles = StyleSheet.create({
    container: {
        paddingVertical: SPACING.xs,
        marginBottom: SPACING.sm,
    },
    imageContainer: {
        width: wp(100),
        height: hp(25), // Adjust to match your slider height
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.sm,
    },
    image: {
        width: wp(95),
        height: '100%',
        borderRadius: BORDER_RADIUS.lg,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gray100,
        height: hp(25),
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: SPACING.md,
        left: 0,
        right: 0,
    },
    paginationDot: {
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: BORDER_RADIUS.round,
        backgroundColor: COLORS.gray300,
        marginHorizontal: SPACING.xxs,
    },
    paginationDotActive: {
        width: moderateScale(12),
        backgroundColor: COLORS.primary,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: hp(25),
    },
    errorText: {
        fontSize: moderateScale(14),
        color: COLORS.gray600,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: SPACING.sm,
        borderBottomLeftRadius: BORDER_RADIUS.lg,
        borderBottomRightRadius: BORDER_RADIUS.lg,
    },
    imageTitle: {
        color: COLORS.white,
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
});

export default SliderStyles;