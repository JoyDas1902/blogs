import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Joy Das</div>
      <div className={styles.text}>
        Joy Das creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
