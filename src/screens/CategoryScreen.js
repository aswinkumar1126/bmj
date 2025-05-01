import React from 'react';
import { View, FlatList, Text, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import CategoryStyle from '../styles/CategoryStyle';
import defaultImage from '../assets/profile/loginimgbg.png';
import { useNavigation } from '@react-navigation/native';

const CATEGORIES = [
    { id: 'D', name: 'Diamond', image: defaultImage },
    { id: 'G', name: 'Gold', image: defaultImage },
    { id: 'S', name: 'Silver', image: defaultImage },  
    { id: 'A', name: 'All', image: defaultImage },
];

const CategoryScreen = () => {
    const styles = CategoryStyle;
    const listOpacity = new Animated.Value(0);
    const translateY = new Animated.Value(20);
    const navigation = useNavigation();

    const itemAnimations = CATEGORIES.map(() => ({
        opacity: new Animated.Value(0),
        translateY: new Animated.Value(20),
    }));

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(listOpacity, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.spring(translateY, {
                toValue: 0,
                speed: 12,
                bounciness: 14,
                useNativeDriver: true,
            }),
        ]).start();

        itemAnimations.forEach((anim, index) => {
            Animated.parallel([
                Animated.timing(anim.opacity, {
                    toValue: 1,
                    duration: 300,
                    delay: index * 100,
                    useNativeDriver: true,
                }),
                Animated.timing(anim.translateY, {
                    toValue: 0,
                    duration: 300,
                    delay: index * 100,
                    useNativeDriver: true,
                }),
            ]).start();
        });
    }, []);

    const handleCategoryPress = (id) => {
        const limit = id === 'A' ? 20 : 10; // If "All", show 20 items, else show 10
        navigation.navigate('ProductScreen', { metalId: id, limit: limit });
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Categories</Text>
            </View>

            <Animated.View style={{ opacity: listOpacity, transform: [{ translateY }] }}>
                <FlatList
                    data={CATEGORIES}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                    renderItem={({ item, index }) => (
                        <Animated.View
                            style={{
                                opacity: itemAnimations[index].opacity,
                                transform: [{ translateY: itemAnimations[index].translateY }],
                            }}
                        >
                            <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item.id)}>
                                <View style={styles.imageContainer}>
                                    <Image source={item.image} style={styles.image} resizeMode="cover" />
                                </View>
                                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    )}
                />
            </Animated.View>
        </SafeAreaView>
    );
};

export default CategoryScreen;
