import React from "react";
import { Files } from "../../Components/Files";
import styles from "./index.module.css";

function Assignments() {
  return (
    <div className={styles.main}>
      <h1>Submitted Assignments</h1>
      <div>
        <h2>1. Swapnadeep Mohapatra</h2>
        <Files />
        <h2>2. Someone Else</h2>
        <Files />
      </div>
    </div>
  );
}

export default Assignments;
