import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getArtistTracks } from "../../spotify";

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
            
            {tracksArray.map((track, index) => (
                <div className={styles.trackInfo} key={track.name}>


                    <div className={styles.trackNameAndArtistAndIndex}>
                        <div className={styles.trackIndex}>
                            <span>{index}</span>
                        </div>
                        <div className={styles.trackNameAndArtistName}>
                            <p className={styles.trackName}> {track.name}</p>
                            <p className={styles.artistName}> {track.artistName}</p>
                        </div>
                    </div>

                    <div className={styles.albumName}>
                        <p>{track.albumName}</p>
                    </div>

                    <div>
                        <FavoriteBorderIcon 
                            style={
                                {
                                    fontSize: '3.5rem',
                                    marginTop: '1.5rem'
                                }
                            } 
                        /> 
                        <DeleteIcon 
                            style={
                                {
                                    fontSize: '3.5rem',
                                    marginTop: '1.5rem'
                                }
                            } 
                        /> 
                    </div>

                </div>
            ))}
        </div>
    );
}

Tracks.propTypes = {
    artistId: PropTypes.string.isRequired,
};