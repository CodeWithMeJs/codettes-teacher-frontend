import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Timer from "../../Components/Timer";
import api from "../../config/api";

function AttendanceCode() {
  const [done, setDone] = useState(false);
  const icode = window.location.search.split("=")[1];

  useEffect(() => {
    if (done) {
      api
        .post("/code", { code: icode })
        .then((resp) => {
          console.log(resp);
          window.close();
        })
        .catch((err) => {
          console.log(err);
          window.close();
        });
    }
  }, [done, icode]);

  return (
    <div className={styles.main}>
      <Timer initialMinute={0} initialSeconds={30} setDone={setDone} />
      <h1>{icode}</h1>
    </div>
  );
}

export default AttendanceCode;
