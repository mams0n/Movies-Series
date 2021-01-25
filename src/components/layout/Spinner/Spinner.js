import React from "react";
import spinner from "./Spinner.gif";
import "./spinner.css";

function Spinner() {
  return (
    <div className="sss">
      <img
        src={spinner}
        className="zzz"
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
