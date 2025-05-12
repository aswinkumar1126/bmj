import React, { useContext, useEffect, useRef } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    Animated
} from 'react-native';
import { GlobalProductContext } from '../context/product/GlobalProductContext';
import ProductStyle from '../styles/ProductStyle';
import { SPACING } from '../utils/style';

const ProductScreen = ({ route, navigation }) => {
    const { loading, products } = useContext(GlobalProductContext);
    const { metalId, limit } = route.params;
    const styles = ProductStyle;
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    const categoryNames = {
        G: 'Gold Products',
        S: 'Silver Products',
        D: 'Diamond Products',
        A: 'All Products',
    };

    const categoryName = categoryNames[metalId] || 'Products';

    const filteredProducts = products
        .filter((item) => item.METALID === metalId || metalId === 'A')
        .slice(0, limit);

    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ).start();
        }
        return () => shimmerAnim.setValue(0);
    }, [loading]);

    useEffect(() => {
        if (!loading && filteredProducts.length === 0) {
            Alert.alert('No Products Found', `No products available for this category.`);
        }
    }, [loading, filteredProducts]);

    const renderShimmerItem = () => {
        const translateX = shimmerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-150, 150],
        });

        return (
            <View style={styles.card}>
                <View style={styles.imageSkeleton}>
                    <Animated.View
                        style={[
                            styles.shimmerOverlay,
                            { transform: [{ translateX }] }
                        ]}
                    />
                </View>
                <View style={styles.textSkeleton}>
                    <Animated.View
                        style={[
                            styles.shimmerOverlay,
                            { transform: [{ translateX }], width: '80%' }
                        ]}
                    />
                </View>
            </View>
        );
    };

    const renderLoading = () => (
        <View style={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
                <View key={`shimmer-${i}`}>
                    {renderShimmerItem()}
                </View>
            ))}
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
        >
            <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>{categoryName}</Text>
            {loading ? (
                renderLoading()
            ) : (
                <FlatList
                    data={filteredProducts}
                    numColumns={2}
                    keyExtractor={(item, index) => `${item.id || 'no-id'}-${index}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: SPACING.lg }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            )}
        </SafeAreaView>
    );
};



export default ProductScreen;