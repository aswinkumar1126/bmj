import { StyleSheet } from 'react-native';
import { wp,hp} from '../utils/normalize';
import { COLORS, SPACING, SHADOWS } from '../utils/style';

const CategoryStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.md,
        backgroundColor: COLORS.white,
    },
    sectionTitle: {
        fontSize: wp(4.8),
        fontWeight: 'bold',
        color: COLORS.black,
    },
    list: {
        paddingVertical: SPACING.xxs, // reduced padding here
    },
    card: {
        alignItems: 'center',
        marginRight: SPACING.lg,
    },
    imageContainer: {
        width: wp(17),
        height: wp(17),
        backgroundColor: COLORS.gray100,
        borderRadius: wp(9), // Half of width/height
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.xs,
        overflow: 'hidden', // Ensure child image is clipped
        ...SHADOWS.sm,
    },

    seeAllCircle: {
        backgroundColor: COLORS.primaryLight,
    },
    image: {
        width: wp(17),
        height: wp(17),
        borderRadius: wp(50),
    },
    title: {
        fontSize: wp(3.5),
        color: COLORS.gray800,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: SPACING.xxxs, // optional small top margin
    },

    Container: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.sm,
    },
    Card: {
        alignItems: 'center',
        marginRight: SPACING.md,
    },
});

export default CategoryStyle;
