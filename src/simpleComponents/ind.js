import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import ava from "../img/pic.jpg";
import all from "../img/all.svg";
import One from "../img/one.jpeg";
import Cube from "../img/1.png";
import { ReactComponent as ReactIcon } from "../img/all.svg";
import styles from "./ind.css";

const Clicker = hot(module)(
  class extends Component {
    state = {
      count: 0,
    };
    inc = () =>
      void this.setState(({ count }) => ({
        count: count + 1,
      }));
    dec = () =>
      void this.setState(({ count }) => ({
        count: count - 1,
      }));
    render() {
      const { count } = this.state;
      return (
        <section className={styles.clicker}>
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
          <h1>Count: {count}</h1>

          <button className={styles.button} onClick={this.inc}>
            INC
          </button>
          <button className={styles.button} onClick={this.dec}>
            DEC
          </button>
        </section>
      );
    }
  }
);

render(<Clicker />, document.getElementById("root"));
