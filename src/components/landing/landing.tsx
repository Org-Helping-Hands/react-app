import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
export class Landing extends React.Component {

  state = {
    helpingHandsCircle: { eleWidth: "0px", eleHeight: "0px" },
    worldNeedsYourHelpCirle: { eleWidth: "0px", eleHeight: "0px" },
  };
  render() {
    return (
      <div className={styles["landing-container"]}>
        <div className={styles["top-circles"]}>
          <div
            className={styles["helpin-hands-green-circle"]}
          >
            <p>
              Helping
              <br />
              Hands
            </p>
          </div>
          <div className={styles["world-needs-your-help"]}>
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
        </div>
        <div className={styles["join-us"]}>
          <p>
            Join <br /> Us
          </p>
          <Link to="/signin">
            <div className={styles.circleArrow}>
              <span
                className="iconify iconify-right-arrow"
                data-icon="bi:chevron-right"
                data-inline="false"
              ></span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
