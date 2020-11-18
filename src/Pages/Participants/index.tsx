import React, { useEffect, useState } from "react";
import api from "../../config/api";
import styles from "./index.module.css";

function Participants() {
  const [state, setState] = useState([]);

  useEffect(() => {
    api
      .get("/code")
      .then((res) => {
        console.log(res.data?.students?.students);
        setState(res.data?.students?.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.main}>
      <h1>Participants</h1>
      <ol>
        {state.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
}

export default Participants;
