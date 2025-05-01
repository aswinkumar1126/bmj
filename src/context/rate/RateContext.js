import React, { createContext, useState, useEffect } from 'react';


export const RateContext = createContext();

export const RateProvider = ({ children }) => {
    const [goldRate, setGoldRate] = useState([]);
    const [silverRate, setSilverRate] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRate();
    }, []);

    const fetchRate = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://192.168.0.106:8080/api/v1/todayrate');  // Use the URL from .env
            const data = await response.json();
            setGoldRate(data.GOLDRATE || []);
            setSilverRate(data.SILVERRATE || []);
        } catch (error) {
            console.error("Error fetching rates:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <RateContext.Provider value={{ fetchRate, goldRate, silverRate, loading }}>
            {children}
        </RateContext.Provider>
    );
};
