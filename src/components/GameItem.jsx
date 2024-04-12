import React from 'react';

const GameItem = ({ id, name, image, link }) => {
    const imageUrl = `https://api.adkey-seo.com/storage/images/games/${image}`;

    const style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='game-item' id={id} style={style}>

            {link && <a className='game-item-link btn-link' href={link}>
                <div className='game-name'>{name}</div>
                <div className='play-now-text inner-flex'>
                    <img className='icon' src='./img/play-icon.svg' alt='icon' />
                    Play now
                </div>
            </a>}
        </div>
    );
};

export default GameItem;
