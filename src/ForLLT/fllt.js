import React, { useState } from "react";
import styles from "./fllt.css";

const FLLT = () => {
  const handleClick = async () => {
    const llt = await import(
      /*webpackChunkName: "lazyloadedText"*/ "../llt/lazyloadedtext"
    );
    const llts = await JSON.stringify(llt);
    console.log("lazy load -->", llts);
  };

  return <div className={styles.div} onClick={handleClick} />;
};

export default FLLT;
