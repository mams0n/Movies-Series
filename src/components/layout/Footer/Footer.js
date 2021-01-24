import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="webintern-footer">
      <div className="tt-copy">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="tt-copy-left">
                Copyright © <span className="samuravi">MamsON TV.</span> All
                rights reserved.{" "}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="tt-copy-right">
                Created by: <span className="mams0n">Mams0n</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
