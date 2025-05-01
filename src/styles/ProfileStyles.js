import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    editIcon: {
        position: 'absolute',
        bottom: 15,
        right: 130,
        backgroundColor: '#000',
        padding: 4,
        borderRadius: 12,
    },
    username: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
    },
    userId: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    infoContainer: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 12,
        elevation: 1,
    },
    infoText: {
        fontSize: 15,
        color: '#333',
        marginBottom: 10,
    },
    infoValue: {
        fontWeight: '600',
        color: '#111',
    },
    editInput: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 6,
        marginBottom: 10,
        color: '#000',
    },
    editButtons: {
        flexDirection: 'row',
        gap: 14,
        marginTop: 10,
    },
    editIconBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        alignSelf: 'flex-end',
    },
    optionList: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 0.5,
        borderColor: '#eee',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    settingText: {
        fontSize: 15,
        fontWeight: '500',
    },
});

export default ProfileStyles;