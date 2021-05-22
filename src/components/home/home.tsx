import React from "react";
import styles from "./home.module.css";
export class Home extends React.Component {
    render() {
      return (
        <>
    <h1>Helping Hands</h1>
    <div className={styles.container1}>
      <div id="right">
        <p>
          <img
            src="assets/home/request-message.png"
            alt=""
            height="100px"
            width="100px"
          />
        </p>
        <p>Request for needy</p>
      </div>
      <div id="left">
        <p><img src="assets/home/map.png" alt="" height="100px" width="100px" /></p>
        <p id="t1">Find needy near me</p>
      </div>
    </div>
    

    <h2>Account</h2>

     <div className={styles.container2}>
        <div className={styles.line1}>
            <div id="name">
                <p id="cont2text">Om more</p>
                <p id="cont2text2">9/11 posts 14 helps</p>
              </div>
              <div id="nameImg">
                <p><img src="assets/home/user.png" alt="" height="50px" width="50px" /></p>
              </div>
        </div>
        <div className={styles.line2}>
            <div id="email">
                <p id="cont2text">Email</p>
                <p id="cont2text2">ommore501@gmail.com</p>
              </div>
              <div id="emailImg">
                <p><img src="assets/home/email.png" alt="" height="50px" width="50px" /></p>
              </div>
        </div>
        <div className={styles.line3}>
            <div id="noti">
                <p id="cont2text">Notification</p>
                <p id="cont2text2">Notifications are on</p>
              </div>
              <div id="notiImg">
                <p>
                  <img src="assets/home/notification.png" alt="" height="50px" width="50px" />
                </p>
              </div>
        </div>

    </div> 
        </>
      );
    }
  }
  