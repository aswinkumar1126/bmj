import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProductDetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>📦 Product Details Screen</Text>
            <Button
                title="Go to Cart"
                onPress={() => navigation.navigate('Cart')}
            />
        </View>
    );
}
