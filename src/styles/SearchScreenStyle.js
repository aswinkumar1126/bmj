import { StyleSheet, Platform } from 'react-native';
import { wp, hp } from '../utils/normalize';
import { COLORS, SPACING, BORDER_RADIUS, FONTS } from '../utils/style';

const SearchScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.sm,
        paddingTop: SPACING.sm,
    },
    recentSearchContainer: {
        marginTop: SPACING.md,
        paddingBottom: SPACING.lg,
    },
    recentSearchTitle: {
        fontSize: FONTS.md,
        fontWeight: 'bold',
        marginBottom: SPACING.sm,
    },
    suggestionCard: {
        padding: SPACING.sm,
        marginVertical: SPACING.xs,
        backgroundColor: COLORS.gray100,
        borderRadius: BORDER_RADIUS.sm,
    },
    suggestionText: {
        fontSize: FONTS.sm,
        color: COLORS.black,
    },
    empty: {
        textAlign: 'center',
        color: COLORS.gray400,
        fontSize: FONTS.md,
        marginTop: hp(10),
    },
});

export default SearchScreenStyle;
