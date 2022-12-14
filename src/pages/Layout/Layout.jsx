import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import styles from "./style.module.css";

const HomePage = loadable(
  () =>
    pMinDelay(
      import(/* webpackChunkName: "home-page" */ "../HomePage/HomePage.jsx"),
      2000
    ),
  {
    fallback: <div className={styles.div}>Loading...</div>,
  }
);

const AboutPage = loadable(
  () =>
    pMinDelay(
      import(/* webpackChunkName: "about-page" */ "../AboutPage/AboutPage.jsx"),
      2000
    ),
  {
    fallback: <div className={styles.div}>Loading...</div>,
  }
);

const InfoPage = loadable(
  () =>
    pMinDelay(
      import(/* webpackChunkName: "info-page" */ "../InfoPage/InfoPage.jsx"),
      2000
    ),
  {
    fallback: <div className={styles.div}>Loading...</div>,
  }
);

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          home
        </Link>
        <Link className={styles.link} to="/about">
          about
        </Link>
        <Link className={styles.link} to="/info">
          info
        </Link>
      </header>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/info" component={InfoPage} />
      </Switch>
    </>
  );
};

export default Layout;
