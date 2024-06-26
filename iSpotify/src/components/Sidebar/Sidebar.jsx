import { Link } from 'react-router-dom';
import { PropTypes, arrayOf} from 'prop-types';

import styles from './Sidebar.module.css'


/**
 * @param {Object} props
 * @param {Array} props.links
 * @param {String} props.links[].name
 * @param {String} props.links[].path
 * @returns {JSX.Element} 
 */
export default function Sidebar( { links } ) 
{
    return (
        <div className={styles.sidebar}>
            <span><strong>iSpotify®</strong></span>
            {
                links.map((link) => {
                    return <Link className={styles.linkStyle} key={link.path} to={link.path}>{link.name}</Link>
                })
            }
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