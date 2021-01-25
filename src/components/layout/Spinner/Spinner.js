import React from "react";
import spinner from "./Spinner.gif";
import "./spinner.css";

function Spinner() {
  return (
    <div className="spinner-container">
      <img
        src={spinner}
        className="loader"
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
