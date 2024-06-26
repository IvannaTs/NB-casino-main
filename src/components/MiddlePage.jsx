import React, { useEffect } from 'react';

const MiddlePage = ({ link }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = link;
        }, 10000);

        return () => clearTimeout(timer);
    }, [link]);

    return (
        <section className='middle-page'>
            <svg class='spinner' viewBox='0 0 50 50'>
                <circle class='path' cx='25' cy='25' r='20' fill='none' stroke-width='5'></circle>
            </svg>
        </section>
    );
};

export default MiddlePage;
