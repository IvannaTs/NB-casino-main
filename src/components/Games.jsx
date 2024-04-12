import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';
import DataAndExtractLink from './DataAndExtractLink';

const Games = () => {
  const [games, setGames] = useState([]);
  const [link, setLink] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adkey-seo.com/api/website/get-games/gambling');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='games' id='games'>
      <div className='container'>
        <h2 className='title h2-text'>
          Top games
        </h2>
        <DataAndExtractLink render={({ link }) => (
          <div className='games-items'>
            {games.map(game => (
              <GameItem key={game.id} id={game.id} name={game.name} image={game.image} link={link} />
            ))}
            <div className='button-box marginT_regular'>
              <a className='btn btn-link btn-large' href={link}>All Games</a>
            </div>
          </div>
        )} />
      </div>
    </section>
  );
};

export default Games;
