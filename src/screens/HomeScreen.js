import React from 'react';
import { View, Text, Button } from 'react-native';
import SliderScreen from './SliderScreen';
import BottomNavigation from '../component/footer/BottomNavigation';
import CategoryScreen from './CategoryScreen';
import Header from '../component/header/Header';
import RateScreen from '../component/rate/RateScreen';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{  flex: 1, marginTop:10}}>

            <Header />
            <RateScreen />
            <SliderScreen />
            <CategoryScreen />
            <Button
                title="Go to Product Details"
                onPress={() => navigation.navigate('Profile')}
            />
            <BottomNavigation currentScreen={"Home"}/>
        </View>
    );
}
