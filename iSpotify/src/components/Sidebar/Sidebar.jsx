import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { logout, getCurrentUser } from "../../spotify";

export default function Sidebar() {
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
		}
	};

	// Links embutidos diretamente no componente

	// const user =  getCurrentUser();
	// const id = user.id;

	const links = [
		{ name: "Artistas", path: "/artists" },
		{ name: "Músicas Curtidas", path: "/liked-musics" },
		{ name: "Minha Conta", path: "/my-account" },
	];

	// const links = [
	// 	{ name: "Artistas", path: "/artists" },
	// 	{ name: "Músicas Curtidas", path: `/liked-musics/${id}`},
	// 	{ name: "Minha Conta", path: "/my-account" },
	// ];

	return (
		<div className={styles.sidebar}>
			<span>
				<strong>iSpotify®</strong>
			</span>
			{links.map((link) => (
				<Link
					className={styles.linkStyle}
					key={link.path}
					to={link.path}
				>
					{link.name}
				</Link>
			))}
			<button className={styles.logoutButton} onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
