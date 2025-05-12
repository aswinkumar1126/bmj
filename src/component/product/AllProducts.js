import React, { useContext, useEffect, useMemo } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    Animated,
    StyleSheet
} from 'react-native';
import { GlobalProductContext } from '../../context/product/GlobalProductContext';
import AllProductStyle from '../../styles/AllProductStyle';
import { SPACING, BORDER_RADIUS } from '../../utils/style';
import { hp } from '../../utils/normalize';

const AllProduct = ({ navigation, route }) => {
    const { products, loading } = useContext(GlobalProductContext);
    const styles = { ...AllProductStyle, ...shimmerStyles };
    const shimmerAnim = new Animated.Value(0);

    const searchQuery = route.params?.searchQuery || '';

    // Filter products based on search query
    const filteredProducts = useMemo(() => {
        const lowerQuery = searchQuery.toLowerCase();
        return products.filter(item =>
            item.name?.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery, products]);

    useEffect(() => {
        if (!loading && filteredProducts.length === 0) {
            Alert.alert('No Results', `No products found for "${searchQuery}"`);
        }
    }, [loading, filteredProducts]);

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const renderShimmerItem = () => {
        const translateX = shimmerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-150, 150],
        });

        return (
            <View style={styles.card}>
                <View style={styles.shimmerImageContainer}>
                    <Animated.View
                        style={[
                            styles.shimmerOverlay,
                            { transform: [{ translateX }] }
                        ]}
                    />
                </View>
                <View style={styles.shimmerTextContainer}>
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
            {Array.from({ length: 6 }).map((_, index) => (
                <View key={`shimmer-${index}`}>
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
                source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                style={styles.image}
            />
            <Text style={styles.name} numberOfLines={1}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                {searchQuery ? `Results for "${searchQuery}"` : 'All Products'}
            </Text>
            {loading ? (
                renderLoading()
            ) : (
                <FlatList
                    data={filteredProducts}
                    numColumns={2}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    renderItem={renderItem}
                    contentContainerStyle={styles.grid}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={styles.empty}>No products found.</Text>
                    }
                />
            )}
        </SafeAreaView>
    );
};

// Shimmer effect styles
const shimmerStyles = StyleSheet.create({
    shimmerImageContainer: {
        width: '100%',
        height: hp(18),
        backgroundColor: '#e1e1e1',
        borderRadius: BORDER_RADIUS.sm,
        marginBottom: SPACING.sm,
        overflow: 'hidden',
        position: 'relative',
    },
    shimmerTextContainer: {
        width: '60%',
        height: hp(2),
        backgroundColor: '#e1e1e1',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
    },
    shimmerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#f5f5f5',
    },
});

export default AllProduct;