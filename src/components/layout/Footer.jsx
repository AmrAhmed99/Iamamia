import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className={styles.socialAccountsImgs}>
          <Image src='/1.png' width={15} height={15} className={styles.socialAccountIcon} alt='Facebook account'/>
          <Image src='/2.png' width={15} height={15} className={styles.socialAccountIcon} alt='Instagram account'/>
          <Image src='/3.png' width={15} height={15} className={styles.socialAccountIcon} alt='Twitter account'/>
          <Image src='/4.png' width={15} height={15} className={styles.socialAccountIcon} alt='Youtube account'/>
        </div>
    </div>
  );
}

export default Footer;
