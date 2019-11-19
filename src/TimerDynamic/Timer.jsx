import React from "react";
import "./Timer.css";
const Timer = ({ time }) => {
  if (time > 86400000) {
    time = 0;
  }
  let seconds = parseInt(time / 1000);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  return (
    <div className="list-time">
      <div className="time-hour">
        <span> {hours > 9 ? hours : "0" + hours}:</span>
        <span> {minutes > 9 ? hours : "0" + minutes}:</span>
        <span> {seconds > 9 ? seconds : "0" + seconds}</span>
      </div>
      <div className="list">
        <span> Hour</span>
        <span> Minute</span>
        <span> Seconde</span>
      </div>
    </div>
  );
};

export default Timer;
