import { StyleSheet } from "react-native";
import { wp, hp } from "../utils/normalize";
import { COLORS, SPACING, BORDER_RADIUS, FONTS } from "../utils/style";

const SearchStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray100, // subtle background
        borderRadius: BORDER_RADIUS.round, // smooth rounded edges
        paddingHorizontal: SPACING.sm,
        marginHorizontal: SPACING.md,
        marginVertical: SPACING.sm,
        width: wp(90),
        height: hp(6),
    },
    searchicon: {
        marginRight: SPACING.sm,
        color: COLORS.gray400, // muted icon color
    },
    search: {
        flex: 1,
        fontSize: FONTS.md,
        color: COLORS.text,
        paddingVertical: 0,
    },
    clearIcon: {
        paddingHorizontal: SPACING.xs,
        color: COLORS.gray300,
    },
    clearButton: {
        paddingHorizontal: 8,
    },

});

export default SearchStyles;
