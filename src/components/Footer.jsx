import styles from './Footer.module.css'

import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoPinterest, BiSearchAlt2 } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul className={styles.listFooter}>
            <ul>
                <li className={styles.headersList}>Contact The Publisher</li>
                <li className={styles.listItem}>lorem@teste.com</li>
                <li className={styles.listItem}>+55 11 999999999</li>
            </ul>
            <ul>
                <li className={styles.headersList}>Explorate</li>
                <li className={styles.listItem}>About</li>
                <li className={styles.listItem}>Partners</li>
                <li className={styles.listItem}>Job Opportunities</li>
                <li className={styles.listItem}>Advertise</li>
                <li className={styles.listItem}>Membership</li>
            </ul>
            <ul>
                <li className={styles.headersList}>Headquarter</li>
                <li className={styles.listItem}>Lorem ipsum</li>
            </ul>
            <ul>
                <li className={styles.headersList}>Connections</li>
                <ul className={styles.listSocialMedia}>
                    <li className={styles.listItem}><BiLogoFacebookCircle /></li>
                    <li className={styles.listItem}><BiLogoTwitter /></li>
                    <li className={styles.listItem}><BiLogoYoutube /></li>
                    <li className={styles.listItem}><BiLogoPinterest /></li>
                </ul>
            </ul>
        </ul>
    </div>
  )
}

export default Footer