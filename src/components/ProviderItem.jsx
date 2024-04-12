import React from 'react';

const ProviderItem = ({ provider, link }) => {
    return (
        <a key={provider.id} href={link} className='btn-provider btn-link'> {/* Змінено href */}
            <div className='provider-item'>
                <img 
                    src={`https://api.adkey-seo.com/storage/images/providers/${provider.image}`} 
                    alt={provider.name} 
                    title={provider.name} 
                    loading='lazy'
                />
            </div>
        </a>
    );
};

export default ProviderItem;
