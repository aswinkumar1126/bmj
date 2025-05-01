import React, { useRef, useEffect, useState } from "react";
import {
    View,
    FlatList,
    Image,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    Animated
} from "react-native";
import SliderStyles from "../styles/SliderStyles";
import {
    moderateScale,
    moderateVerticalScale,
    wp,
    hp,
    fontScale
} from "../utils/normalize";
import { COLORS, SHADOWS, SPACING, BORDER_RADIUS } from "../utils/style"

const SkeletonLoader = () => {
    const shimmerAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const translateX = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-wp(100), wp(100)],
    });

    return (
        <View style={SliderStyles.imageContainer}>
            <View style={[SliderStyles.image, { backgroundColor: COLORS.gray200 }]}>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        transform: [{ translateX }],
                    }}
                />
            </View>
        </View>
    );
};
const SliderScreen = () => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const flatListRef = useRef();
    const currentIndex = useRef(0);

    const fetchSlider = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch("http://192.168.0.106:8080/api/v1/products-with-images");

            if (!response.ok) throw new Error('Failed to fetch images');

            const data = await response.json();
            const filteredImages = data
                .filter(item => item.itemImagePath || item.bannerImagePath)
                .map((item, index) => ({
                    id: index.toString(),
                    image: item.itemImagePath || item.bannerImagePath,
                    title: item.itemName || '', // Add title if available
                }));

            setImages(filteredImages);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
            // Consider adding a retry button
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSlider();

        return () => {
            // Cleanup if needed
        };
    }, []);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            currentIndex.current = (currentIndex.current + 1) % images.length;
            setActiveIndex(currentIndex.current);
            flatListRef.current?.scrollToIndex({
                index: currentIndex.current,
                animated: true
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [images]);

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const newIndex = Math.floor(contentOffset / viewSize);

        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            currentIndex.current = newIndex;
        }
    };

    const renderItem = ({ item }) => (
        <View style={SliderStyles.imageContainer}>
            <Image
                source={{ uri: item.image }}
                style={SliderStyles.image}
                resizeMode="cover"
                onError={() => console.warn('Image failed to load:', item.image)}
            />
            {item.title && (
                <View style={SliderStyles.overlay}>
                    <Text style={SliderStyles.imageTitle} numberOfLines={1}>
                        {item.title}
                    </Text>
                </View>
            )}
        </View>
    );

    const renderPagination = () => {
        if (images.length <= 1) return null;

        return (
            <View style={SliderStyles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            SliderStyles.paginationDot,
                            index === activeIndex && SliderStyles.paginationDotActive
                        ]}
                    />
                ))}
            </View>
        );
    };

    if (isLoading) {
        return (
            <View style={SliderStyles.container}>
                <FlatList
                    data={[1, 2, 3]} // Dummy data for skeleton
                    renderItem={() => <SkeletonLoader />}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={3}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                    getItemLayout={(data, index) => ({
                        length: wp(100),
                        offset: wp(100) * index,
                        index,
                    })}
                />
                {/* Skeleton pagination dots */}
                <View style={SliderStyles.pagination}>
                    {[1, 2, 3].map((_, index) => (
                        <View
                            key={index}
                            style={[
                                SliderStyles.paginationDot,
                                { backgroundColor: COLORS.gray300 }
                            ]}
                        />
                    ))}
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={SliderStyles.errorContainer}>
                <Text style={SliderStyles.errorText}>{error}</Text>
                <TouchableOpacity
                    onPress={fetchSlider}
                    style={{ marginTop: SPACING.sm }}
                >
                    <Text style={{ color: COLORS.primary }}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (!images.length) {
        return (
            <View style={SliderStyles.errorContainer}>
                <Text style={SliderStyles.errorText}>No images available</Text>
            </View>
        );
    }

    return (
        <View style={SliderStyles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                initialNumToRender={3}
                maxToRenderPerBatch={5}
                windowSize={5}
                getItemLayout={(data, index) => ({
                    length: wp(100),
                    offset: wp(100) * index,
                    index,
                })}
            />
            {renderPagination()}
        </View>
    );
};

export default SliderScreen;