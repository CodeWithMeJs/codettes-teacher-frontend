import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Error from "../../Components/ErrorBox";
import styles from "./index.module.css";

function Login() {
  const [state, setState] = useState({
    name: "",
    password: "",
    error: "",
  });
  const [redirect, setRedirect] = useState(false);

  const { name, password, error } = state;

  const handleChange = (name: string) => (event: any) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  function performLogin() {
    if (
      name.toLocaleLowerCase() === "teacher" &&
      password.toLocaleLowerCase() === "password"
    ) {
      setRedirect(true);
    } else {
      setState({ ...state, error: "Invalid Username or Password" });
    }
  }

  return (
    <div className={styles.container}>
      <h1>Teachers Login</h1>
      <form
        className={styles.signupForm}
        onSubmit={(e) => {
          e.preventDefault();
          performLogin();
        }}
      >
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={handleChange("name")}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
        {error && <Error err={error} />}
        <button type="submit">LOGIN</button>
      </form>
      {redirect && <Redirect to="/home" />}
    </div>
  );
}

export default Login;
