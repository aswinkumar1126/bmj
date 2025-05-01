import React, { useContext, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { GlobalProductContext } from '../context/product/GlobalProductContext';
import ProductStyle from '../styles/ProductStyle';
import { SPACING } from '../utils/style';
const ProductScreen = ({ route, navigation }) => {
    const { loading, products } = useContext(GlobalProductContext);
    const { metalId, limit } = route.params;  // Get the limit passed from CategoryScreen
    const styles = ProductStyle;

    // Dynamically set category name based on categoryId
    const categoryNames = {
        G: 'Gold Products',
        S: 'Silver Products',
        D: 'Diamond Products',
        A: 'All Products',
    };

    const categoryName = categoryNames[metalId] || 'Products';  // Default to 'Products'

    // Filter products based on the selected category and limit
    const filteredProducts = products
        .filter((item) => item.METALID === metalId || metalId === 'A') // Include 'All' category
        .slice(0, limit); // Limit to the specified number of products

    useEffect(() => {
        if (!loading && filteredProducts.length === 0) {
            Alert.alert('No Products Found', `No products available for this category.`);
        }
    }, [loading, filteredProducts]); // Run only when loading or filteredProducts change

    const renderSkeleton = () => (
        <SkeletonPlaceholder>
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
                source={  item.image }  // The image already has a default if missing
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
                renderSkeleton()
            ) : (
                <FlatList
                    data={filteredProducts}
                    numColumns={2}
                    keyExtractor={(item, index) => `${item.id || 'no-id'}-${index}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: SPACING.lg }} // Add padding to prevent items touching the bottom
                    columnWrapperStyle={{ justifyContent: 'space-between' }} // Add space between columns
                />
            )}
        </SafeAreaView>
    );
};

export default ProductScreen;
