import { StyleSheet } from 'react-native';
import { wp, hp } from '../utils/normalize';
import { COLORS, SPACING, FONTS, BORDER_RADIUS, SHADOWS } from '../utils/style';

const ProductStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.md,
        paddingTop: SPACING.sm,
    },
    // No need for grid, FlatList will handle this
    card: {
        width: '48%', // Slightly less than half the width for two items per row (with spacing)
        marginBottom: SPACING.lg,
        borderRadius: BORDER_RADIUS.md,
        backgroundColor: COLORS.card,
        padding: SPACING.sm,
        ...SHADOWS.sm,
    },
    image: {
        width: '100%',
        height: hp(18),
        borderRadius: BORDER_RADIUS.sm,
        resizeMode: 'cover',
        marginBottom: SPACING.sm,
    },
    name: {
        fontSize: FONTS.sm,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    price: {
        fontSize: FONTS.sm,
        color: COLORS.primary,
        fontWeight: '500',
    },
    skeletonCard: {
        width: '48%', // Ensure skeleton matches card width
        height: hp(26),
        borderRadius: BORDER_RADIUS.md,
        backgroundColor: COLORS.gray100,
        marginBottom: SPACING.lg,
    },
});

export default ProductStyle;
