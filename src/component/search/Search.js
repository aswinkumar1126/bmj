import React from "react";
import { TextInput, View, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchStyles from '../../styles/SearchStyles';

const Search = ({ query = "", setQuery, autoFocus = false, onSubmit }) => {
    const styles = SearchStyles;

    const handleSearch = (text) => {
        setQuery(text);
    };

    const handleClear = () => {
        setQuery("");
    };

    return (
        <View style={styles.container}>
            <Icon name="search" size={22} color="#555" style={styles.searchicon} />
            <TextInput
                placeholder="Search for items..."
                placeholderTextColor="#999"
                style={styles.search}
                value={query}
                onChangeText={handleSearch}
                returnKeyType="search"
                autoFocus={autoFocus}
                onSubmitEditing={onSubmit} // Submit on keyboard tick
                clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
            />
            {query.length > 0 && (
                <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                    <Icon name="close" size={20} color="#555" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Search;
