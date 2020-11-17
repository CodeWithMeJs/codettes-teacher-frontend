import React from "react";
import styles from "./index.module.css";
import { v4 as uuidv4 } from "uuid";

function AttendanceCode() {
  function generateCode() {
    const code = uuidv4();
    return code.substring(0, 6);
  }

  return (
    <div className={styles.main}>
      <h1>{generateCode()}</h1>
    </div>
  );
}

export default AttendanceCode;
