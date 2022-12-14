import ava from "../../img/pic.jpg";
import all from "../../img/all.svg";
import { ReactComponent as ReactIcon } from "../../img/all.svg";
import styles from "./style.module.css";

const HomePage = () => {
  return (
    <div className={styles.div}>
      <h1>Home Page</h1>
      <div className={styles.jpgContainer}>
        <img className={styles.avaJpg} src={ava} alt="ava" />
        <div
          style={{
            backgroundImage: `url(${ava})`,
          }}
          className={styles.cssBackJpg}
        />
      </div>
      <div className={styles.svgContainer}>
        <ReactIcon />
        <img src={all} alt="all" />
        <div className={styles.cssBackSvg} />
      </div>
    </div>
  );
};

export default HomePage;
