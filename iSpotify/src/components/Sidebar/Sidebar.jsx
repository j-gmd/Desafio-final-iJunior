import { Link, useNavigate } from "react-router-dom";
import { PropTypes, arrayOf } from "prop-types";
import { Navigate } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { logout } from "../../spotify";

/**
 * @param {Object} props
 * @param {Array} props.links
 * @param {String} props.links[].name
 * @param {String} props.links[].path
 * @returns {JSX.Element}
 */
export default function Sidebar({ links }) {
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
		}
	};

	return (
		<div className={styles.sidebar}>
			<span>
				<strong>iSpotify®</strong>
			</span>
			{links.map((link) => {
				return (
					<Link
						className={styles.linkStyle}
						key={link.path}
						to={link.path}
					>
						{link.name}
					</Link>
				);
			})}
			<button className={styles.logoutButton} onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}

Sidebar.propTypes = {
	links: arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		})
	).isRequired,
};
