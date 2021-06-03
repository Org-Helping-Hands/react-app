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
        <Link to="/signin">
        <div className={styles.circleArrow}>
          <div className={styles.arrowInCircle}>
            <p> 
              <i className={`${styles.arrow} ${styles.right}`}></i>
            </p>
          </div>
        </div>
        </Link>
        
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
        
      </div>
    );
  }
}
