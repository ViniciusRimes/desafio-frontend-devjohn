import styles from './Navbar.module.css';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoPinterest, BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header>
      <nav id='navbar' className={styles.navbar}>
        <h1>FUTURO DEV TV</h1>
        <div id='menuBurguer' className={styles.menuBurguer}>
            <button onClick = {menuBurguer}><AiOutlineMenu/></button>
        </div>
        <div id='closeMenuBurguer' className={styles.closeMenuBurguer}>
            <button onClick = {closeMenuBurguer}><AiOutlineClose/></button>
          </div>
        <div id='list' className={styles.list}>
            <ul id='menus' className={styles.menus}>
              <li className={styles.listHome}>Home</li>
              <li>About</li>
              <li>Articles</li>
              <li>Contact Us</li>
            </ul>
            <ul id='socialMedias' className={styles.socialMedias}>
              <li><BiLogoFacebookCircle /></li>
              <li><BiLogoTwitter /></li>
              <li><BiLogoYoutube /></li>
              <li><BiLogoPinterest /></li>
            </ul>
            <ul id='search' className={styles.search}>
              <li><BiSearchAlt2 /></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
const menuBurguer = ()=>{
  const list = document.querySelector('#list')
  const menus = document.querySelector('#menus')
  const search = document.querySelector('#search')
  const socialMedias = document.querySelector('#socialMedias')
  const menuBurguer = document.querySelector('#menuBurguer')
  const navbar = document.querySelector('#navbar')
  list.style.display ='block'
  list.style.marginTop = '2em'
  menuBurguer.style.display = 'none'
  menus.style.display = 'block'
  socialMedias.style.display = 'block'
  search.style.display = 'block'
  navbar.style.flexDirection = 'column'
  navbar.style.justifyContent = 'center'
  navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.88)';
  navbar.style.height = '100vh'
}
const closeMenuBurguer = ()=>{
  const list = document.querySelector('#list')
  const menus = document.querySelector('#menus')
  const search = document.querySelector('#search')
  const socialMedias = document.querySelector('#socialMedias')
  const menuBurguer = document.querySelector('#menuBurguer')
  const navbar = document.querySelector('#navbar')
  list.style.display = 'none'
  menuBurguer.style.display = 'block'
  menus.style.display = 'none'
  socialMedias.style.display = 'none'
  search.style.display = 'none'
  navbar.style.flexDirection = 'row'
  navbar.style.justifyContent = 'space-between'
  navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  navbar.style.height = '80px'
}
export default Navbar;
