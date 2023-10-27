import styles from './Navbar.module.css';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoPinterest, BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <h2>FUTURO DEV TV</h2>
        <div>
            <ul className={styles.menus}>
              <li style={{
                borderBottom: '2px solid #AA1C22',
                paddingBottom: '2px'
              }}>Home</li>
              <li>About</li>
              <li>Articles</li>
              <li>Contact Us</li>
            </ul>
            <p>|</p>
            <ul className={styles.socialMedias}>
              <li><BiLogoFacebookCircle /></li>
              <li><BiLogoTwitter /></li>
              <li><BiLogoYoutube /></li>
              <li><BiLogoPinterest /></li>
            </ul>
            <p>|</p>
            <ul className={styles.search}>
              <li><BiSearchAlt2 /></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
