import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "home-page" */ "../HomePage/HomePage.jsx")
);

const AboutPage = React.lazy(() =>
  import(/* webpackChunkName: "about-page" */ "../AboutPage/AboutPage.jsx")
);

const InfoPage = React.lazy(() =>
  import(/* webpackChunkName: "info-page" */ "../InfoPage/InfoPage.jsx")
);

// import HomePage from "../HomePage/HomePage.jsx";
// import AboutPage from "../AboutPage/AboutPage.jsx";
// import InfoPage from "../InfoPage/InfoPage.jsx";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/info">info</Link>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/info" component={InfoPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Layout;
