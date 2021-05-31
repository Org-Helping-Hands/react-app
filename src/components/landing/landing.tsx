import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
export class Landing extends React.Component {
  render() {
    return (
      <div className={styles["landing-c"]}>
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
        <Link to="/signin">
        <button className={styles["btn-get-started"]} >Get Started</button>
        </Link>
      </div>
    );
  }
}
