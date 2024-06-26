import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getArtistTracks } from "../../spotify";

import styles from './Tracks.module.css';


export default function Tracks({ artistId })
{
    const [tracksArray, setTracksArray] = useState([]);

    useEffect(() =>
    {
        async function fetchArtistTracks()
        {
            try
            {
                const response = await getArtistTracks(artistId);
                const tracksData = response.tracks.map(track => ({
                    name: track.name,
                    albumName: track.album.name,
                    artistName: track.artists[0]?.name || 'Artista Desconhecido',
                }));
                setTracksArray(tracksData);

            } catch (error)
            {
                console.error('Erro ao buscar as faixas do artista', error);
            }
        }
        fetchArtistTracks();
    }, [artistId]);

    return (
        <div className={styles.trackContainer}>
            <div className={styles.header}>
                <p>#TÍTULO</p>
                <p>ÁLBUM</p>
                <img src="" alt="img" />
            </div>
            <hr className={styles.separator}/>
            {tracksArray.map((track, index) => (
                <div className={styles.trackInfo} key={track.name}>
                    <div className={styles.trackNameAndArtistName}>
                        <p className={styles.trackName}> {track.name}</p>
                        <p className={styles.artistName}> {track.artistName}</p>
                    </div>
                    <p className={styles.albumName}>{track.albumName}</p>
                    <div>
                        <img src="" alt="heart " />
                        <img src="" alt="garbage" />
                    </div>
                </div>
            ))}
        </div>
    );
}

Tracks.propTypes = {
    artistId: PropTypes.string.isRequired,
};