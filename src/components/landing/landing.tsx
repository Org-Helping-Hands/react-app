import React, { CSSProperties } from "react";
import { createRef } from "react";
import { Link } from "react-router-dom";
import { fromEvent } from "rxjs";
import styles from "./landing.module.css";
export class Landing extends React.Component {
  helpinHandsGreenCircleRef = createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
  }

  setCssVars() {
    // TODO: Remove
    // this.setState({
    //   helpingHandsCircle: {
    //     eleHeight: this.helpinHandsGreenCircleRef.current?.offsetHeight + "px",
    //     eleWidth: this.helpinHandsGreenCircleRef.current?.offsetWidth + "px",
    //   },
    // });
  }
  componentDidMount() {
    this.setCssVars();
    fromEvent(window, "resize").subscribe((e) => {
      this.setCssVars();
    });
  }
  state = {
    helpingHandsCircle: { eleWidth: "0px", eleHeight: "0px" },
    worldNeedsYourHelpCirle: { eleWidth: "0px", eleHeight: "0px" },
  };
  render() {
    return (
      <div className={styles["landing-container"]}>
        <div className={styles["top-circles"]}>
          <div
            ref={this.helpinHandsGreenCircleRef}
            className={styles["helpin-hands-green-circle"]}
            style={
              {
                "--ele-width": this.state.helpingHandsCircle.eleWidth,
                "--ele-height": this.state.helpingHandsCircle.eleHeight,
              } as CSSProperties
            }
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
