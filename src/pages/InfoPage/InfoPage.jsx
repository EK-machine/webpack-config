import styles from "./style.module.css";
import Cube from "../../img/1.png";

const InfoPage = () => {
  return (
    <div className={styles.div}>
      <h1>Info Page</h1>
      <div className={styles.pngContainer}>
        <img className={styles.png} src={Cube} alt="all" />
        <div
          style={{
            backgroundImage: `url(${Cube})`,
          }}
          className={styles.cssBackPng}
        />
      </div>
    </div>
  );
};

export default InfoPage;
