import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";
import SettingsIcon from "../../images/settings.svg";
import styles from "./index.module.css";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";

const socketString: string =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const socket = io(socketString);

function Blackboard() {
  const [state, setState] = useState({
    controlActive: false,
  });

  const { controlActive } = state;

  function generateCode() {
    const icode = uuidv4().substring(0, 6);

    socket.emit("new-code", {
      code: icode,
    });
    console.log(icode);

    return icode;
  }

  function openCodeTab(e: any) {
    e.preventDefault();

    var strWindowFeatures =
      "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    window.open(`code?code=${generateCode()}`, "_blank", strWindowFeatures);
  }

  function openAttendanceTab(e: any) {
    e.preventDefault();

    var strWindowFeatures =
      "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    window.open(`attendance`, "_blank", strWindowFeatures);
  }

  return (
    <div>
      <div className={styles.controls}>
        <img
          src={SettingsIcon}
          alt="settings"
          style={controlActive ? { transform: "rotate(90deg)" } : undefined}
          onClick={() => {
            setState({ ...state, controlActive: !controlActive });
          }}
        />
      </div>
      {controlActive ? (
        <div className={styles.settings}>
          <div>Home</div>
          <div onClick={openCodeTab}>Take Attendance</div>
          <div onClick={openAttendanceTab}>See Participants</div>
        </div>
      ) : null}
      <DrawingBoard />
    </div>
  );
}

export default Blackboard;
