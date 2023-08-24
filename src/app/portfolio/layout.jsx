import styles from './Page.module.css';

const Layout = ( { children } ) => {
  return (
    <div>
      <h2 className={styles.mainTitle}>Our works</h2>
      {children}
    </div>
  );
}

export default Layout;
