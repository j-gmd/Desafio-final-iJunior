import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar_artistas.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica de logout aqui
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="top-links">
        <h1 className="title">iSpotify</h1>
        <a href="/playlist">Artistas</a>
        <a href="/liked-musics">Músicas Curtidas</a>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;