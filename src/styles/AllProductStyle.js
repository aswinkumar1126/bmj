import { StyleSheet } from 'react-native';
import { wp, hp } from '../utils/normalize';
import { COLORS, SPACING, FONTS, BORDER_RADIUS, SHADOWS } from '../utils/style';

const AllProductStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.md,
        paddingTop: SPACING.sm,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginVertical: SPACING.sm,
        textAlign: 'center',
    },
    grid: {
        flexGrow: 1,
        paddingBottom: SPACING.xl,
    },
    card: {
        width: wp(44),
        backgroundColor: COLORS.card,
        marginBottom: SPACING.lg,
        borderRadius: BORDER_RADIUS.md,
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
    },
    imageSkeleton: {
        width: '100%',
        height: hp(18),
        marginBottom: SPACING.sm,
    },
    textSkeleton: {
        width: '60%',
        height: hp(2),
    },
    empty: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 40,
        color: COLORS.gray500,
    },
});

export default AllProductStyle;
