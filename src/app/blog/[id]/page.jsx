import Image from 'next/image';
import styles from './page.module.css';

const BlogPost = () => {
  return (
    <div className={styles.container}>

    <div className={styles.top}>

      <div className={styles.info}>
        <h4 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, voluptatibus facere, dolor nemo voluptatum eaque repellat quo incidunt optio tempora et, sequi quisquam tempore doloribus rerum temporibus libero possimus laborum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, voluptatibus facere, dolor nemo voluptatum eaque repellat quo incidunt optio tempora et, sequi quisquam tempore doloribus rerum temporibus libero possimus laborum.
        </p>
        <div className={styles.author}>
          <Image
            src='https://images.pexels.com/photos/17688838/pexels-photo-17688838/free-photo-of-wine-wild-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>John Doe</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src='https://images.pexels.com/photos/17688838/pexels-photo-17688838/free-photo-of-wine-wild-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>

    </div>

    <div className={styles.content}>
      <p className={styles.text}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit tempore nihil pariatur? Voluptatum, cum incidunt! Placeat sequi quia ab, hic corporis maiores est quas, necessitatibus, odit omnis harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit tempore nihil pariatur? Voluptatum, cum incidunt! Placeat sequi quia ab, hic corporis maiores est quas, necessitatibus,<br /><br /> odit omnis harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit tempore nihil pariatur? Voluptatum, cum incidunt! Placeat sequi quia ab, hic corporis maiores est quas, necessitatibus, odit omnis harum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit tempore nihil pariatur? Voluptatum, cum incidunt! Placeat sequi quia ab, hic corporis maiores est quas, necessitatibus, odit omnis harum voluptas!
      </p>
    </div>
  
  </div>
  );
}

export default BlogPost;
