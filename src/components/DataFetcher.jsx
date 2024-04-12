import React, { useState, useEffect } from 'react';

const DataFetcher = ({ onDataFetch }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.adkey-seo.com/api/website/get-website/295');
                if (!response.ok) {
                    if (response.status === 429) {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        return fetchData();
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                }
                const data = await response.json();
                onDataFetch(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [onDataFetch]);

    return null;
};

export default DataFetcher;

