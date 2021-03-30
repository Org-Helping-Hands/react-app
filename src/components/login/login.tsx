import React from "react";
import "./login.css";
export class Login extends React.Component {
  render() {
    return (
      <div className="c-login">
        <div className="circle1">
          <p>
            Join <br /> Us
          </p>
        </div>
        <div className="circle2">
          <p>
            World
            <br />
            Needs
            <br />
            Your
            <br />
            Help
          </p>
        </div>
        <div className="circle3">
          <p>
            Helping
            <br />
            Hands
          </p>
        </div>
        <button className="btn-get-started">Get Started</button>
      </div>
    );
  }
}
