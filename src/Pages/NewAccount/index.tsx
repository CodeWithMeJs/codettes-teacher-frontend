import React, { useState } from "react";
import Error from "../../Components/ErrorBox";
import styles from "./index.module.css";

function NewAccouunt() {
  const [state, setState] = useState({
    username: "",
    name: "",
    classa: "",
    school: "",
    email: "",
    password: "",
    error: "",
  });

  const { username, name, classa, school, email, password, error } = state;

  const handleChange = (name: string) => (event: any) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  function performLogin() {
    alert("Account Created");
  }

  return (
    <div>
      <h1>Create New Account</h1>
      <form
        className={styles.signupForm}
        onSubmit={(e) => {
          e.preventDefault();
          performLogin();
        }}
      >
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={handleChange("name")}
        />
        <label>Class</label>
        <input
          type="text"
          placeholder="Class"
          value={classa}
          onChange={handleChange("classa")}
        />
        <label>School Number</label>
        <input
          type="text"
          placeholder="School Number"
          value={school}
          onChange={handleChange("school")}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange("username")}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
        {error && <Error err={error} />}
        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
}

export default NewAccouunt;
