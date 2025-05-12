import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import defaultImage from '../../assets/profile/loginimgbg.png'; // Static asset import
import { baseUrlApi } from '../../baseUrl/BaseUrl';
export const GlobalProductContext = createContext();

export const GlobalProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrlApi}/getAllDetails`);
            if (!response.ok) {
                throw new Error(`❌ Network error: ${response.status}`);
            }

            const rawData = await response.json();

            if (!Array.isArray(rawData)) {
                throw new Error("❌ Invalid data format received from API");
            }

            // Normalize data
            const normalizedData = rawData.map((item) => ({
                ...item,
                id: item.ITEMID || item.SubItemId || Math.random().toString(), // ensure unique id
                name: item.ITEMNAME || "Unnamed Product",
                image: item.image || defaultImage, // use defaultImage directly as fallback
            }));

            setProducts(normalizedData);
        } catch (error) {
            console.error("Error fetching products:", error);
            Alert.alert("Error", error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <GlobalProductContext.Provider value={{ products, loading, fetchProducts }}>
            {children}
        </GlobalProductContext.Provider>
    );
};
