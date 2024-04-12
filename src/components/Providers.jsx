import React, { useState, useEffect } from 'react';
import ProviderItem from './ProviderItem';
import DataAndExtractLink from './DataAndExtractLink';

const Providers = () => {
    const [providers, setProviders] = useState([]);
    const [link, setLink] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.adkey-seo.com/api/website/get-providers/');
                const data = await response.json();
                setProviders(data);
            } catch (error) {
                console.error('Error fetching providers:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className='providers'>
            <div className='container'>
                <h2>SOFTWARE PROVIDERS</h2>
                <DataAndExtractLink render={({ link }) => (
                    <div className='providers-items inner-flex marginT_regular'>
                        {providers.map(provider => (
                            <ProviderItem key={provider.id} provider={provider} link={link} />
                        ))}
                    </div>
                )} />
            </div>
        </section>
    );
};

export default Providers;
