import React, { useContext, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import RateScreenStyle from '../../styles/RateStyle';
import { RateContext } from '../../context/rate/RateContext';
import { COLORS, SPACING, BORDER_RADIUS } from "../../utils/style"
import { moderateScale, verticalScale } from "../../utils/normalize"

const RateScreen = () => {
    const { goldRate, silverRate, loading } = useContext(RateContext);
    const styles = { ...RateScreenStyle, ...shimmerStyles };
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ).start();
        } else {
            shimmerAnim.setValue(0);
        }
    }, [loading]);

    const renderShimmerCard = () => {
        const translateX = shimmerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-150, 150],
        });

        return (
            <View style={styles.skeletonCard}>
                <Animated.View
                    style={[
                        styles.shimmerOverlay,
                        { transform: [{ translateX }] }
                    ]}
                />
            </View>
        );
    };

    const renderLoading = () => (
        <View style={styles.cardRow}>
            {renderShimmerCard()}
            {renderShimmerCard()}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Metal Rates</Text>
            {loading ? (
                renderLoading()
            ) : (
                <View style={styles.cardRow}>
                    <Animatable.View
                        animation="fadeInUp"
                        delay={100}
                        style={styles.card}
                        useNativeDriver
                    >
                        <Text style={styles.rateTitle}>Gold Rate</Text>
                        <Text style={styles.rateValue}>₹ {parseFloat(goldRate).toFixed(2)}</Text>
                    </Animatable.View>

                    <Animatable.View
                        animation="fadeInUp"
                        delay={200}
                        style={styles.card}
                        useNativeDriver
                    >
                        <Text style={styles.rateTitle}>Silver Rate</Text>
                        <Text style={styles.rateValue}>₹ {parseFloat(silverRate).toFixed(2)}</Text>
                    </Animatable.View>
                </View>
            )}
        </View>
    );
};

// Shimmer effect styles
const shimmerStyles = StyleSheet.create({
    skeletonCard: {
        flex: 1,
        height: verticalScale(70),
        borderRadius: BORDER_RADIUS.lg,
        backgroundColor: COLORS.gray100,
        overflow: 'hidden',
        position: 'relative',
    },
    shimmerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
});

export default RateScreen;