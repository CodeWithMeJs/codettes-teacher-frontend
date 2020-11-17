import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";
import SettingsIcon from "../../images/settings.svg";
import styles from "./index.module.css";

function Blackboard() {
  const [state, setState] = useState({
    controlActive: false,
  });

  const { controlActive } = state;

  function name() {
    var strWindowFeatures =
      "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    window.open("code", "_blank", strWindowFeatures);
  }

  return (
    <div>
      <div className={styles.controls}>
        <img
          src={SettingsIcon}
          alt="settings"
          style={controlActive ? { transform: "rotate(90deg)" } : undefined}
          //   onClick={() => {
          //     setState({ ...state, controlActive: !controlActive });
          //   }}
          onClick={() => {
            name();
          }}
        />
      </div>
      {controlActive ? (
        <div className={styles.settings}>
          <div>Take Attendance</div>
          <div>See Participants</div>
          <div>lol</div>
        </div>
      ) : null}
      <DrawingBoard />
    </div>
  );
}

export default Blackboard;
