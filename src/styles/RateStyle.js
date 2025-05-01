import { StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/style';
import {
    moderateScale,
    verticalScale,
    moderateVerticalScale,
} from '../utils/normalize';

const RateScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.sm,
        paddingTop: SPACING.sm,
        paddingBottom: 10, // Remove bottom space
    },
    header: {
        fontSize: moderateScale(18),
        fontWeight: '700',
        color: COLORS.primary,
        marginBottom: SPACING.sm,
        textAlign: 'center',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.sm,
    },
    card: {
        flex: 1,
        backgroundColor: COLORS.gray100,
        paddingVertical: SPACING.xs, // Reduced padding
        paddingHorizontal: SPACING.sm,
        borderRadius: BORDER_RADIUS.lg,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        alignItems: 'center',
        height: verticalScale(70), // Reduced height
    },
    rateTitle: {
        fontSize: moderateScale(12),
        color: COLORS.gray700,
        fontWeight: '600',
        marginBottom: SPACING.xxs,
    },
    rateValue: {
        fontSize: moderateScale(15),
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    skeletonCard: {
        flex: 1,
        height: verticalScale(70), // Match card height
        borderRadius: BORDER_RADIUS.lg,
    },
});

export default RateScreenStyle;
