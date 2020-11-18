import React from "react";
import PastMeetings from "../../Components/PastMeetings";
import styles from "./index.module.css";

function Home() {
  function openNewMeetingWindow() {
    var strWindowFeatures =
      "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    window.open("new-meeting", "_blank", strWindowFeatures);
  }

  return (
    <div className={styles.main}>
      <h1>Welcome To Home</h1>
      <button onClick={openNewMeetingWindow}>New Meeting</button>
      <PastMeetings />
    </div>
  );
}

export default Home;
