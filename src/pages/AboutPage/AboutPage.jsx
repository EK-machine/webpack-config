import One from "../../img/one.jpeg";
import styles from "./style.module.css";

const AboutPage = () => {
  return (
    <div className={styles.div}>
      <h1>About Page</h1>
      <div className={styles.jpegContainer}>
        <img className={styles.ava} src={One} alt="one" />
        <div
          style={{
            backgroundImage: `url(${One})`,
          }}
          className={styles.cssBackJpeg}
        />
      </div>
    </div>
  );
};

export default AboutPage;
