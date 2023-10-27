import styles from './BlogCards.module.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import imageAuthor from '../assets/author.svg'
import { useEffect, useState } from 'react'

const BlogCards = () => {
    const [card, setCard] = useState([])
    const generateImages = () => {
        const baseCard = {
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          release: '08.08.2001',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
          nameAuthor: 'By Jennifer Lawrence',
          profissAuthor: 'Thinker & Designer',
          imageAuthor: <img src={imageAuthor} alt="Foto do autor" />
        };
    
        const imageSources = [
          image1, image2, image3, image4, image5, image6, image7, image8
        ];
    
        const newCards = imageSources.map((imageSource, index) => ({
          ...baseCard,
          image: imageSource,
        }));
    
        setCard(newCards);
      };
      useEffect(()=>{
        generateImages()
      }, [])
    return (
    <div className={styles.blogCards}>
        <h2>Popular topics</h2>
        <div className={styles.filterGenrer}>
            <ul className={styles.genres}>
                <li style={{color: '#AA1C22'}}>All</li>
                <li>Adventure</li>
                <li>Horror</li>
            </ul>
            <ul>
                <li>View All</li>
            </ul>
        </div>
        <div className={styles.blogCardsLists}>
            {card.map((card, index)=>(
                <div key={index} className={styles.card}>
                    <div className={styles.backgroundImg} style={{
                        backgroundImage: `url(${card.image})`
                    }}></div>
                    <div className={styles.cardInfo}>
                        <span className={styles.release}><p>{card.release}</p></span>
                        <p className={styles.title}>{card.title}</p>
                        <p className={styles.description}>{card.description}</p>
                        <div className={styles.author}>
                            {card.imageAuthor}
                            <div>
                                <p style={{fontWeight: 700}}>{card.nameAuthor}</p>
                                <p>{card.profissAuthor}</p>
                            </div>
                        </div>
                    </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default BlogCards