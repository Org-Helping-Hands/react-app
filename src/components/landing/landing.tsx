import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
export class Landing extends React.Component {
  render() {
    return (
      <div className="c-landing">
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
        <Link to="/signin">
          <button className="btn-get-started">Get Started</button>
        </Link>
      </div>
    );
  }
}
