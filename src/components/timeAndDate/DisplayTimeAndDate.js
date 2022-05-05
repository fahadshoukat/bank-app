import React, { useRef } from "react";
import './displayTime.css'

const DisplayTimeAndDate = () => {
  let timeRef = useRef(new Date());
  function timer() {
    const time = new Date();
    timeRef.current.innerHTML = time.toLocaleTimeString();
  }

  return (
      <p className="time">
        <span>{new Date().toDateString()}</span>,{" "}
        <span ref={timeRef}>{setInterval(timer, 1000)}</span>
      </p>
  );
};

export default DisplayTimeAndDate;
