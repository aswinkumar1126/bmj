import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import BottomNavigation from '../../component/footer/BottomNavigation';
import { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import { useNavigation } from '@react-navigation/native';

import  ProfileStyles  from "../../styles/ProfileStyles"
const ProfileScreen = () => {
    const {
        user,
        isEditing,
        editData,
        handleEditPress,
        handleCancel,
        handleSave,
        handleInputChange,
        handleLogout,
    } = useContext(ProfileContext);

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={ProfileStyles.container} contentContainerStyle={{ paddingBottom: 80 }}>
                {/* Header */}
                <View style={ProfileStyles.header}>
                    <Feather name="arrow-left" size={24} color="#000" />
                    <Text style={ProfileStyles.headerTitle}>Profile</Text>
                </View>

                {/* Avatar */}
                <View style={ProfileStyles.avatarContainer}>
                    <Image
                        source={
                            user?.image_full_url
                                ? { uri: user.image_full_url }
                                : require('../../assets/profile/loginimgbg.png')
                        }
                        style={ProfileStyles.avatar}
                    />
                    <TouchableOpacity style={ProfileStyles.editIcon}>
                        <Feather name="camera" size={16} color="#fff" />
                    </TouchableOpacity>
                    <Text style={ProfileStyles.username}>{user?.firstname} {user?.lastname}</Text>
                    <Text style={ProfileStyles.userId}>Account ID: {user?.id}</Text>
                </View>

                {/* Editable Info */}
                <View style={ProfileStyles.infoContainer}>
                    {isEditing ? (
                        <>
                            <TextInput
                                style={ProfileStyles.editInput}
                                value={editData.email}
                                onChangeText={(text) => handleInputChange('email', text)}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={ProfileStyles.editInput}
                                value={editData.contactNumber}
                                onChangeText={(text) => handleInputChange('contactNumber', text)}
                                placeholder="contactNumber"
                                keyboardType="phone-pad"
                            />
                        </>
                    ) : (
                        <>
                                <Text style={ProfileStyles.infoText}>📧 Email: <Text style={ProfileStyles.infoValue}>{user?.email || 'N/A'}</Text></Text>
                                <Text style={ProfileStyles.infoText}>📞 Phone: <Text style={ProfileStyles.infoValue}>{user?.contactNumber || 'N/A'}</Text></Text>
                        </>
                    )}
                    {/* <Text style={styles.infoText}>💰 Wallet: <Text style={styles.infoValue}>₹{user?.wallet_balance ?? 0}</Text></Text>
                    <Text style={styles.infoText}>🎁 Referral Code: <Text style={styles.infoValue}>{user?.ref_code || '-'}</Text></Text>
                    <Text style={styles.infoText}>🕓 Member since: <Text style={styles.infoValue}>{user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</Text></Text> */}

                    {isEditing ? (
                        <View style={ProfileStyles.editButtons}>
                            <TouchableOpacity onPress={handleSave}>
                                <Feather name="check" size={22} color="green" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel}>
                                <Feather name="x" size={22} color="red" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity style={ProfileStyles.editIconBtn} onPress={handleEditPress}>
                            <Feather name="edit-2" size={18} color="#555" />
                            <Text style={{ marginLeft: 6 }}>Edit</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Settings */}
                <View style={ProfileStyles.optionList}>
                    <SettingItem icon="lock" text="Password Settings" />
                    <SettingItem icon="credit-card" text="Payment Method" onPress={() => navigation.navigate("PaymentMethod")} />
                    <SettingItem icon="bar-chart" text="Account Limits" />
                    <SettingItem icon="lock" text="Privacy Policy" onPress={() => navigation.navigate("PrivacyPolicyScreen")} />
                    <SettingItem icon="help-circle" text="FAQ / Support" />
                    <SettingItem icon="log-out" text="Log Out" color="red" onPress={handleLogout} />
                </View>
            </ScrollView>

            <BottomNavigation currentScreen="Profile" /> 
        </View>
    );
};

const SettingItem = ({ icon, text, color = '#000', onPress }) => (
    <TouchableOpacity style={ProfileStyles.settingItem} onPress={onPress}>
        <View style={ProfileStyles.optionLeft}>
            <Feather name={icon} size={20} color={color} />
            <Text style={[ProfileStyles.settingText, { color }]}>{text}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#bbb" />
    </TouchableOpacity>
);



export default ProfileScreen;
