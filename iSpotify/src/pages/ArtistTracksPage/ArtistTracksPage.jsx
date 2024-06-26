import { useParams } from 'react-router-dom';

import Sidebar from "../../components/Sidebar/Sidebar";
import Tracks from "../../components/Tracks/Tracks";


import styles from './ArtistTracksPage.module.css'; 


export default function ArtistTracksPage() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Liked Musics', path: '/liked-musics' },
        { name: 'Minha Conta', path: '/my-account' }
    ];

    const { artistId } = useParams();

    return (
    <div className={styles.artistTracksPage}>
        <Sidebar links={links}></Sidebar>
        <div className={styles.tracksContainer}>
            <Tracks artistId={artistId}>dskaçldsaçl</Tracks>
        </div>
    </div>
    );
}