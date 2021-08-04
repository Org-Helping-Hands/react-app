import React from "react";
import { Link } from "react-router-dom";
import styles from "./thankyou.module.css";
export class Thankyou extends React.Component {
  render() {
    return (
      <>
        <div className={styles.text1}>
          <p>Hi, Thanks for your</p>
          <p>contribution to Helping hands</p>
        </div>
        {/* <div className={styles.img}>
      
            </div> */}
        <div className={styles.head1}>
          <p>Thank You</p>
        </div>
        <div className={styles.text2}>
          <p>Change the world by being yourself,</p>
          <p>
            <Link to={"/home"}>
              <a className={styles.anchor} href="/">
                <u>Keep Helping...</u>
              </a>
            </Link>
          </p>
        </div>
        <div className={styles.text3}>
          <p>
            If you have much, give of your wealth, if you have little, give of
            your heart.
          </p>
          <div className={styles.para2}>
            <p>- Arabian Proverb</p>
          </div>
        </div>
      </>
    );
  }
}
