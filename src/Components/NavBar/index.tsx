import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import LogoutIcon from "../../images/logout.svg";

function Navbar() {
  return (
    <div className={styles.main}>
      <span>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/assignments">Assignments</NavLink>
        <NavLink to="/blackboard">Blackboard</NavLink>
        <NavLink to="/attendance">Attendance</NavLink>
      </span>

      <span>
        <NavLink to="/">
          Logout
          <img src={LogoutIcon} alt="" />
        </NavLink>
      </span>
    </div>
  );
}

export default Navbar;
