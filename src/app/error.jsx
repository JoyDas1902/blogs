'use client';
import Link from 'next/link';
import styles from './home.module.css';

const Error = () => {
  return (
    <div className={styles.textContainer} style={{ gap: '20px' }}>
      <h1>Error!</h1>
      <p>Sorry, for the inconvenience, it will be fixed soon.</p>
      <div className={styles.buttons}>
        <Link href="/" className={styles.button}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
