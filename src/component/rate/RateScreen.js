// RateScreen.js
import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import RateScreenStyle from'../../styles/RateStyle';
import { RateContext } from '../../context/rate/RateContext';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RateScreen = () => {
    const { goldRate, silverRate, loading } = useContext(RateContext);
    const styles = RateScreenStyle;
    const renderSkeleton = () => (
        <SkeletonPlaceholder borderRadius={10}>
            <View style={styles.cardRow}>
                <View style={styles.skeletonCard} />
                <View style={styles.skeletonCard} />
            </View>
        </SkeletonPlaceholder>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Metal Rates</Text>
            {loading ? (
                renderSkeleton()
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

export default RateScreen;
