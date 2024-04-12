import React, { useEffect } from 'react';

const BtnLinkHandler = ({ setShowContent }) => {
    useEffect(() => {
        const handleClick = (event) => {
            if (event.target.closest('.btn-link')) {
                setShowContent(false);
                setTimeout(() => {
                    setShowContent(true);
                }, 4000);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [setShowContent]);

    return null;
}

export default BtnLinkHandler;
