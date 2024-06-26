import React, { useEffect, useState } from 'react';
import './ArtistsPage.css';

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Substituir pela chamada à API real para buscar artistas
    setArtists([
      { id: 1, name: 'Artista 1', imageUrl: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Artista 2', imageUrl: 'https://via.placeholder.com/50' },
      // Adicionar mais artistas conforme necessário
    ]);
  }, []);

  return (
    <div className="artists-container">
      <h2 className="artists-title">Artistas</h2>
      <div className="artists-grid">
        {artists.map(artist => (
          <div key={artist.id} className="artist-card">
            <img src={artist.imageUrl} alt={artist.name} className="artist-image" />
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-label">Artista</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;