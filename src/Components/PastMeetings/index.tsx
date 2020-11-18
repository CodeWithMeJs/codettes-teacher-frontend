import React, { useEffect, useState } from "react";
import api from "../../config/api";
import styles from "./index.module.css";
import ExternalLinkIcon from "../../images/external-link.svg";

function PastMeetings() {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/")
      .then((resp) => {
        console.log(resp);
        setState(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.main}>
      <h2>Past Meetings</h2>
      <ul>
        {state?.map((item, index) => {
          return (
            <li>
              <div className={styles.pastMeetingsItem}>
                <h3>{item.topic}</h3>
                <span>
                  <p>{item.code} </p>
                  <a
                    href={`https://meet.google.com/${item.code}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ExternalLinkIcon} alt="->" />
                  </a>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PastMeetings;
