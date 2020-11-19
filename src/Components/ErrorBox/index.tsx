import React from "react";
import styles from "./index.module.css";

interface ErrorProps {
  err: string;
}

const Error: React.FC<ErrorProps> = (props) => {
  return (
    <div>
      <div className={styles.errorBox}>Error: {props.err}</div>
    </div>
  );
};

export default Error;
