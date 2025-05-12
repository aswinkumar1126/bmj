import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomStyles from "../../styles/BottomStyle"; // Separate style file
import { moderateScale,hp} from "../../utils/normalize";

const BottomNavigation = ({ currentScreen }) => {
    const navigation = useNavigation();

    const navItems = [
        { name: "Home", icon: "home", screen: "Home" },
        { name: "Search", icon: "search", screen: "SearchScreen" },
        { name: "Favorites", icon: "favorite", screen: "Favorite" },
        { name: "Cart", icon: "shopping-cart", screen: "CartScreen" },
        { name: "Account", icon: "person", screen: "Profile" },
    ];

    return (
        <View style={BottomStyles.container}>
            {navItems.map((item) => {
                const isActive = currentScreen === item.screen;
                return (
                    <TouchableOpacity
                        key={item.name}
                        style={[BottomStyles.button, isActive && BottomStyles.buttonActive]}
                        onPress={() => navigation.navigate(item.screen)}
                        activeOpacity={0.7}
                        accessibilityRole="button"
                        accessibilityLabel={`Navigate to ${item.name}`}
                    >
                        <Icon
                            name={item.icon}
                            size={moderateScale(24)}
                            color={isActive ? BottomStyles.activeColor : BottomStyles.inactiveColor}
                        />
                        <Text style={[BottomStyles.label, isActive && BottomStyles.labelActive]}>
                            {item.name}
                        </Text>
                        {isActive && <View style={BottomStyles.activeIndicator} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigation;
