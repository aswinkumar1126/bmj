import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "../utils/normalize";
import { COLORS, SPACING, BORDER_RADIUS } from "../utils/style";

const BottomStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: moderateVerticalScale(70),
        paddingHorizontal: SPACING.sm,
        backgroundColor: COLORS.white,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS.gray200,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        // Shadow for iOS
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 10,
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SPACING.xs,
    },
    buttonActive: {
        backgroundColor: COLORS.gray100, // Subtle background change for active button
        borderRadius: BORDER_RADIUS.md,
        paddingVertical: SPACING.sm,
    },
    label: {
        fontSize: moderateScale(10),
        color: COLORS.gray600,
        fontWeight: "500",
        marginTop: SPACING.xxs,
    },
    labelActive: {
        color: COLORS.primary,
        fontWeight: "600",
    },
    activeIndicator: {
        position: "absolute",
        top: moderateScale(6),
        width: moderateScale(5),
        height: moderateScale(5),
        borderRadius: BORDER_RADIUS.round,
        backgroundColor: COLORS.primary,
    },
});

// Export colors as separate properties for easy access
BottomStyles.activeColor = COLORS.primary;
BottomStyles.inactiveColor = COLORS.gray600;

export default BottomStyles;
