import {
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
    wp,
    hp,
    fontScale
} from './normalize';
import { StyleSheet } from 'react-native';

export const FONTS = {
    sm: verticalScale(12),  // Small font size
    md: verticalScale(14),  // Medium font size (this is the one you were missing)
    lg: verticalScale(16),  // Large font size
    xl: verticalScale(18),  // Extra large font size
    xxl: verticalScale(24), // Double extra large font size
};
// Professional color palette
export const COLORS = {
    // Primary colors
    primary: '#4361EE',
    primaryDark: '#3A0CA3',
    primaryLight: '#4895EF',

    // Secondary colors
    secondary: '#4CC9F0',
    secondaryDark: '#3F37C9',

    // Neutral colors
    white: '#FFFFFF',
    black: '#000000',
    gray100: '#F8F9FA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#ADB5BD',
    gray600: '#6C757D',
    gray700: '#495057',
    gray800: '#343A40',
    gray900: '#212529',

    // Semantic colors
    success: '#4BB543',
    warning: '#FFCC00',
    danger: '#FF3333',
    info: '#17A2B8',

    // UI-specific additions
    card: '#FFFFFF',             // default card background
    cardAlt: '#F9F9FB',          // alternate card background (light tone)
    overlay: 'rgba(0,0,0,0.3)',  // modal or image overlay
    inputBg: '#F1F3F5',          // input field background
    placeholder: '#A0A0A0',      // placeholder text color
    divider: '#E0E0E0',          // borders/dividers
    shimmerBase: '#E0E0E0',      // for skeleton loaders
    shimmerHighlight: '#F5F5F5', // highlight color for shimmer effect
};


// Typography system
export const TYPOGRAPHY = {
    displayLarge: {
        fontSize: fontScale(57),
        lineHeight: verticalScale(64),
        fontWeight: '400',
    },
    displayMedium: {
        fontSize: fontScale(45),
        lineHeight: verticalScale(52),
        fontWeight: '400',
    },
    displaySmall: {
        fontSize: fontScale(36),
        lineHeight: verticalScale(44),
        fontWeight: '400',
    },
    headlineLarge: {
        fontSize: fontScale(32),
        lineHeight: verticalScale(40),
        fontWeight: '400',
    },
    headlineMedium: {
        fontSize: fontScale(28),
        lineHeight: verticalScale(36),
        fontWeight: '400',
    },
    headlineSmall: {
        fontSize: fontScale(24),
        lineHeight: verticalScale(32),
        fontWeight: '400',
    },
    titleLarge: {
        fontSize: fontScale(22),
        lineHeight: verticalScale(28),
        fontWeight: '500',
    },
    titleMedium: {
        fontSize: fontScale(16),
        lineHeight: verticalScale(24),
        fontWeight: '500',
        letterSpacing: moderateScale(0.15),
    },
    titleSmall: {
        fontSize: fontScale(14),
        lineHeight: verticalScale(20),
        fontWeight: '500',
        letterSpacing: moderateScale(0.1),
    },
    bodyLarge: {
        fontSize: fontScale(16),
        lineHeight: verticalScale(24),
        fontWeight: '400',
        letterSpacing: moderateScale(0.5),
    },
    bodyMedium: {
        fontSize: fontScale(14),
        lineHeight: verticalScale(20),
        fontWeight: '400',
        letterSpacing: moderateScale(0.25),
    },
    bodySmall: {
        fontSize: fontScale(12),
        lineHeight: verticalScale(16),
        fontWeight: '400',
        letterSpacing: moderateScale(0.4),
    },
    labelLarge: {
        fontSize: fontScale(14),
        lineHeight: verticalScale(20),
        fontWeight: '500',
        letterSpacing: moderateScale(0.1),
    },
    labelMedium: {
        fontSize: fontScale(12),
        lineHeight: verticalScale(16),
        fontWeight: '500',
        letterSpacing: moderateScale(0.5),
    },
    labelSmall: {
        fontSize: fontScale(11),
        lineHeight: verticalScale(16),
        fontWeight: '500',
        letterSpacing: moderateScale(0.5),
    },
};

// Spacing system (using verticalScale for vertical spacing)
export const SPACING = {
    none: 0,
    xxxs: verticalScale(2),
    xxs: verticalScale(4),
    xs: verticalScale(8),
    sm: verticalScale(12),
    md: verticalScale(16),
    lg: verticalScale(24),
    xl: verticalScale(32),
    xxl: verticalScale(48),
    xxxl: verticalScale(64),
};

// Border radius
export const BORDER_RADIUS = {
    none: 0,
    sm: moderateScale(4),
    md: moderateScale(8),
    lg: moderateScale(12),
    xl: moderateScale(16),
    xxl: moderateScale(24),
    round: moderateScale(9999),
};

// Shadows
export const SHADOWS = {
    sm: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(1),
        },
        shadowOpacity: 0.18,
        shadowRadius: moderateScale(1.0),
        elevation: 1,
    },
    md: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 0.2,
        shadowRadius: moderateScale(4),
        elevation: 3,
    },
    lg: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(4),
        },
        shadowOpacity: 0.3,
        shadowRadius: moderateScale(6),
        elevation: 5,
    },
};

// Common styles
export const COMMON_STYLES = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.md,
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        ...SHADOWS.md,
    },
    button: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
        borderRadius: BORDER_RADIUS.sm,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        ...TYPOGRAPHY.labelLarge,
        color: COLORS.white,
    },
    input: {
        height: verticalScale(48),
        borderWidth: moderateScale(1),
        borderColor: COLORS.gray300,
        borderRadius: BORDER_RADIUS.sm,
        paddingHorizontal: SPACING.sm,
        ...TYPOGRAPHY.bodyMedium,
    },
});
