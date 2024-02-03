import Link from 'next/link';
import styles from './home.module.css';

const NotFound = () => {
  return (
    <div className={styles.textContainer} style={{ gap: '20px' }}>
      <h1>Not Found!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className={styles.buttons}>
        <Link href="/" className={styles.button}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
