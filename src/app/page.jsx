import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Share Your Creative Thoughts.</h1>
        <p className={styles.desc}>
          Publish your passions, your way. Give your blog the perfect home.
          Create unique and beautiful blogs easily.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.button}>
            Contact
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
