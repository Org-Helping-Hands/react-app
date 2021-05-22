import React from "react";
import styles from "./landing.module.css";
export class Landing extends React.Component {
  render() {
    return (
      <div className={'${landing}${c}'}>
        <div className={styles.circle1}>
          <p>
            Join <br /> Us
          </p>
        </div>
        <div className={styles.circle2}>
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
        <div className={styles.circle3}>
          <p>
            Helping
            <br />
            Hands
          </p>
        </div>
        <button className= {'${started}${get}${btn}'}>Get Started</button>
      </div>
    );
  }
}
