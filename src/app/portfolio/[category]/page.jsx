import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './Page.module.css';

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      
      <h3 className={styles.paramsTitle}>{params.category}</h3>

      <div className={styles.item}>
        
        <div className={styles.content}>
          <h4 className={styles.title}>Test</h4>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill='true'
            src='https://images.pexels.com/photos/17688838/pexels-photo-17688838/free-photo-of-wine-wild-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      
      </div>
      <div className={styles.item}>
        
        <div className={styles.content}>
          <h4 className={styles.title}>Test</h4>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill='true'
            src='https://images.pexels.com/photos/17215578/pexels-photo-17215578/free-photo-of-flowers-in-vase-and-book-near-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      
      </div>
      <div className={styles.item}>
        
        <div className={styles.content}>
          <h4 className={styles.title}>Test</h4>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#' />
        </div>
        
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill='true'
            src='https://images.pexels.com/photos/17650740/pexels-photo-17650740/free-photo-of-house-in-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      
      </div>

    </div>
  );
}

export default Category;
