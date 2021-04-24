import React from "react";
import "./enterOtp.css";
import { Link } from "react-router-dom";
export class EnterOtp extends React.Component {
  render() {
    return (
      <>
        <div className="get">
          <p>Get Started</p>
        </div>
        <div className="form">
          <input type="text" placeholder="OTP"></input>
        </div>
        <Link to="home">
          <button className="next">NEXT</button>
        </Link>
        <p className="makeSure">Make sure you are in proper network coverage</p>
      </>
    );
  }
}
