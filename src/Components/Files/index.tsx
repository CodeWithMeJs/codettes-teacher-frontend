import React, { useEffect, useState } from "react";
import api from "../../config/api";
import styles from "./index.module.css";
import TickGreen from "../../images/tick_green.svg";
import TickNone from "../../images/tick_none.svg";

export const Files = () => {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    api.get("/files").then((res) => {
      setState(res.data.files);
    });
  }, []);

  return (
    <div className={styles.main}>
      {state?.map((x: any, index: any) => (
        <span key={index}>
          <a href={x.url} target="_blank" rel="noopener noreferrer">
            {x.name}
          </a>
          <button
            className={styles.checkBtn}
            onClick={() => {
              console.log(x.checked);
              const st = [...state];
              st[index].checked = true;
              setState(st);

              api
                .patch("/files", { id: x._id })
                .then((resp) => {
                  console.log(resp);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <img
              src={!x.checked ? TickNone : TickGreen}
              alt="Mark as Check"
              style={{ height: 20, width: 20 }}
            />
          </button>
        </span>
      ))}
    </div>
  );
};
