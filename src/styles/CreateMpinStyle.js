import { StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, COMMON_STYLES, SHADOWS } from '../utils/style';
import { verticalScale, wp } from '../utils/normalize';

const CreateMpinStyles = StyleSheet.create({
    container: {
        ...COMMON_STYLES.screenContainer,
        justifyContent: 'center',
        paddingVertical: SPACING.xl,
    },
    title: {
        ...TYPOGRAPHY.headlineMedium,
        color: COLORS.primaryDark,
        textAlign: 'center',
        marginBottom: SPACING.lg,
    },
    input: {
        ...COMMON_STYLES.input,
        textAlign: 'center',
        marginBottom: SPACING.md,
        fontSize: TYPOGRAPHY.titleLarge.fontSize,
        letterSpacing: 8,
    },
    button: {
        ...COMMON_STYLES.button,
        marginTop: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg,
        width: wp(60),
        alignSelf: 'center',
        ...SHADOWS.md,
    },
    buttonText: {
        ...COMMON_STYLES.buttonText,
    },
    errorText: {
        color: COLORS.danger,
        ...TYPOGRAPHY.bodySmall,
        textAlign: 'center',
        marginTop: SPACING.xs,
    },
    subtitle: {
        ...TYPOGRAPHY.bodyMedium,
        textAlign: 'center',
        marginBottom: SPACING.md,
        color: COLORS.gray600,
    }
});

export default CreateMpinStyles;
