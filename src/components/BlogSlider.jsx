import styles from './BlogSlider.module.css'
import Navbar from './Navbar'
import pagination from '../assets/pagination.svg'
const Home = () => {
  return (
    <div className={styles.blogSlider}>
        <div><Navbar/></div>
        <div className={styles.info}>
          <span className={styles.category}>
              <p>ADVENTURE</p>
          </span>
          <h2>lorem impsum lorem ipsum lorem ipsum</h2>
          <span className={styles.release}>
            <p className={styles.date}>08.08.2021</p>
            <p className={styles.line}>-</p>
            <p className={styles.incentiveText}>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
          </span>
        </div>
        <div className={styles.pagination}>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="8" viewBox="0 0 44 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="white"/>
            <circle cx="22" cy="4" r="4" fill="white" fill-opacity="0.2"/>
            <circle cx="40" cy="4" r="4" fill="white" fill-opacity="0.2"/>
          </svg>
        </div>
    </div>
  )
}

export default Home