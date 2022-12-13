import React from "react";
import ava from "../../img/pic.jpg";
import all from "../../img/all.svg";
import One from "../../img/one.jpeg";
import Cube from "../../img/1.png";
import styles from "./style.module.css";
import { ReactComponent as ReactIcon } from "../../img/all.svg";

const HomePage = () => {
  return (
    <div>
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
      <div className={styles.jpegContainer}>
        <img className={styles.ava} src={One} alt="one" />
        <div
          style={{
            backgroundImage: `url(${One})`,
          }}
          className={styles.cssBackJpeg}
        />
      </div>
      <div className={styles.pngContainer}>
        <img className={styles.png} src={Cube} alt="all" />
        <div
          style={{
            backgroundImage: `url(${Cube})`,
          }}
          className={styles.cssBackPng}
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
