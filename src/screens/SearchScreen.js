import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Keyboard } from 'react-native';
import Search from '../component/search/Search';
import styles from '../styles/SearchScreenStyle';
import { GlobalProductContext } from '../context/product/GlobalProductContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../component/footer/BottomNavigation';

const SearchScreen = ({ navigation }) => {
    const { products } = useContext(GlobalProductContext);
    const [query, setQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const loadRecentSearches = async () => {
            try {
                const storedSearches = await AsyncStorage.getItem('recentSearches');
                if (storedSearches) {
                    setRecentSearches(JSON.parse(storedSearches));
                }
            } catch (error) {
                console.error("Error loading recent searches", error);
            }
        };
        loadRecentSearches();
    }, []);

    const suggestions = query.length > 0
        ? products.filter(p =>
            p.name?.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 10)
        : [];

    const handleSearchSubmit = async () => {
        if (query.trim()) {
            const updatedSearches = [query, ...recentSearches.filter(item => item !== query)].slice(0, 5);
            await AsyncStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            setRecentSearches(updatedSearches);
            Keyboard.dismiss();
            navigation.navigate('AllProduct', { searchQuery: query });
        }
    };

    const handleSuggestionPress = (suggestion) => {
        Keyboard.dismiss();
        navigation.navigate('AllProduct', { searchQuery: suggestion.name });
    };

    const handleRecentSearchPress = (recentSearch) => {
        setQuery(recentSearch); // Set the query to the clicked recent search
        navigation.navigate('AllProduct', { searchQuery: recentSearch }); // Navigate to AllProduct screen with the recent search query
    };

    const renderSuggestion = ({ item }) => (
        <TouchableOpacity
            style={styles.suggestionCard}
            onPress={() => handleSuggestionPress(item)}
        >
            <Text style={styles.suggestionText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderRecentSearch = ({ item }) => (
        <TouchableOpacity
            style={styles.suggestionCard}
            onPress={() => handleRecentSearchPress(item)}
        >
            <Text style={styles.suggestionText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Search
                query={query}
                setQuery={setQuery}
                autoFocus={true}
                onSubmit={handleSearchSubmit}
            />
            {query.length === 0 && recentSearches.length > 0 && (
                <View style={styles.recentSearchContainer}>
                    <Text style={styles.recentSearchTitle}>Recent Searches</Text>
                    <FlatList
                        data={recentSearches}
                        keyExtractor={(item, index) => `${item}-${index}`}
                        renderItem={renderRecentSearch}
                    />
                </View>
            )}
            {query.length > 0 && (
                <FlatList
                    data={suggestions}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    renderItem={renderSuggestion}
                    ListEmptyComponent={
                        <Text style={styles.empty}>No suggestions found.</Text>
                    }
                />
            )}
            <BottomNavigation currentScreen={"SearchScreen"}/>
        </View>
    );
};

export default SearchScreen;
