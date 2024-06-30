import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Playlist.module.css";

const Playlist = () => {
	return (
		<div className="playlist-container">
			<Sidebar />
			<ArtistsPage />
		</div>
	);
};

export default Playlist;
