import Axios from "axios";
import React, { useState } from "react";
import styles from "./index.module.css";

function NewMeeting() {
  const [state, setState] = useState({
    code: "",
  });
  //   const [redirect, setRedirect] = useState(false);

  const { code } = state;

  const handleChange = (name: string) => (event: any) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submit = (e: any) => {
    e.preventDefault();
    console.log(code);

    if (code) {
      Axios.post("http://localhost:5000/api", { code })
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
