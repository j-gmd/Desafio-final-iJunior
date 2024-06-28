import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from './ArtistsPage.module.css';


export default function ArtistsPage()
{
    const links = [
        { name: 'Artistas', path: '/artists' },
        { name: 'Músicas Curtidas', path: '/liked-musics' },
        { name: 'Minha Conta', path: '/my-account' }
    ];
    return (
        <div className={styles.artistsPage}>

            <Sidebar className={styles.algo} links={links}/>

            <div className={styles.cardsContainer}>
                <p className={styles.title}>Artistas</p>
                <div className={styles.firstCardsRow}>
                    <ArtistCard artistId={"0GNq4xh8uFCyihPurnunf7"}></ArtistCard>
                    <ArtistCard artistId={"4cx31cxKTg5L8blZE24qfZ"}></ArtistCard>
                    <ArtistCard artistId={"4Z0yuwHVJBROVZqFpTIr0d"}></ArtistCard>
                    <ArtistCard artistId={"4C4kpaAdp6aKSkguw40SsU"}></ArtistCard>
                    <ArtistCard artistId={"7EM9m7HOXxVgP9oEpDDv70"}></ArtistCard>
                </div>
                <div className={styles.secondCardsRow}>
                    <ArtistCard artistId={"0A1oy7PC7fdzURgaLaWkL1"}></ArtistCard>
                    <ArtistCard artistId={"1PwOU6fFbmaGkK3wkbb8fU"}></ArtistCard>
                    <ArtistCard artistId={"4bOZtegYNmYOe3gMgPtt0H"}></ArtistCard>
                    <ArtistCard artistId={"7E5dcvoiZra9wwBuXYAYTw"}></ArtistCard>
                    <ArtistCard artistId={"1A5QJAC1vdhbhPE25Q0x0f"}></ArtistCard>
                </div>
            </div>
        </div>
    );
}