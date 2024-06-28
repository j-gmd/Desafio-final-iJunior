import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
//import ArtistsPage from '../../components/ArtistsPage';
import './Playlist.module.css';

const Playlist = () => {
  return (
    <div className="playlist-container">
      <Sidebar />
      <ArtistsPage />
    </div>
  );
};

export default Playlist;

/* import Sidebar from "../../components/Sidebar/Sidebar";
import styles from './Playlist.module.css'; 

export default function Playlist() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Liked Musics', path: '/liked-musics' }
    ];

    return (
        <div className={styles.playlistPage}>
            <Sidebar links={links}></Sidebar>
        </div>
    );
}
*/