import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderStyle from '../../styles/HeaderStyle';

const Header = ({ onMenuPress, onCartPress, onFavPress, onNotificationPress }) => {
    const styles = HeaderStyle;

    return (
        <View style={styles.container}>
            {/* Left Menu Icon */}
            <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
                <Icon name="menu" size={26} color="#fff" />
            </TouchableOpacity>

            {/* Center: Logo & Shop Name */}
            <View style={styles.brandContainer}>
                <Image
                    source={require('../../assets/profile/loginimgbg.png')} // Use your actual logo path
                    style={styles.logo}
                />
                <Text style={styles.shopName}>Vimal Jewellery</Text>
            </View>

            {/* Right-side Icons */}
            <View style={styles.iconGroup}>
                <TouchableOpacity onPress={onNotificationPress} style={styles.iconWrapper}>
                    <Icon name="notifications-none" size={22} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFavPress} style={styles.iconWrapper}>
                    <Icon name="favorite-border" size={22} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onCartPress} style={styles.iconWrapper}>
                    <Icon name="shopping-cart" size={22} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
