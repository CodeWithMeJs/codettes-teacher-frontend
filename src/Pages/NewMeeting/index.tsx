import React, { useState } from "react";
import api from "../../config/api";
import styles from "./index.module.css";

function NewMeeting() {
  const [state, setState] = useState({
    topic: "",
    code: "",
  });

  const { code, topic } = state;

  const handleChange = (name: string) => (event: any) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submit = (e: any) => {
    e.preventDefault();
    console.log(code);

    if (code && topic) {
      api
        .post("/", { code, topic })
        .then((resp) => {
          console.log(resp);
          window.close();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create New Google Meet Meeting</h1>
      <a href="https://meet.google.com/new" target="_blank" rel="noreferrer">
        Host Meeting
      </a>
      <form className={styles.signupForm} onSubmit={submit}>
        <label>Topic</label>
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={handleChange("topic")}
        />
        <label>Meeting Link</label>
        <input
          type="text"
          placeholder="Meeting Link"
          value={code}
          onChange={handleChange("code")}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default NewMeeting;
