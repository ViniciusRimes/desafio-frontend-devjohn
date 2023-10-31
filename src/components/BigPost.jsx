import styles from './BigPost.module.css'

const BigPost = () => {
  return (
    <div className={styles.bigPost}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est animi, laudantium rem asperiores cupiditate</p>
      <p style={{transform: 'scaleX(10)'}}>-</p>
      <p className={styles.releaseDate}><span>08.08.2021</span></p>
    </div>
  )
}

export default BigPost