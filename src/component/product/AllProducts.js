import React, { useContext, useEffect, useMemo } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { GlobalProductContext } from '../../context/product/GlobalProductContext';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import AllProductStyle from '../../styles/AllProductStyle';

const AllProduct = ({ navigation, route }) => {
    const { products, loading } = useContext(GlobalProductContext);
    const styles = AllProductStyle;

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

    const renderSkeleton = () => (
        <SkeletonPlaceholder borderRadius={10}>
            <View style={styles.grid}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <View key={i} style={styles.card}>
                        <View style={styles.imageSkeleton} />
                        <View style={styles.textSkeleton} />
                    </View>
                ))}
            </View>
        </SkeletonPlaceholder>
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
                renderSkeleton()
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

export default AllProduct;
