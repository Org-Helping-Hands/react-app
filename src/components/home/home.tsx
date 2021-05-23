import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../common/api";
export class Home extends React.Component {
  state = {
    name: "",
    emailId: "",
    totalHelps: 0,
    totalPosts: 0,
    totalPostCompletedByOthers: 0,
  };
  componentDidMount() {
    getUserData().then(({ data }) => {
      let {
        name,
        emailId,
        totalHelps,
        totalPosts,
        totalPostCompletedByOthers,
      } = data;
      this.setState({
        name,
        emailId,
        totalHelps,
        totalPosts,
        totalPostCompletedByOthers,
      });
    });
  }
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
            <p id="cont2text">{this.state.name}</p>
              <p id="cont2text2">
                {this.state.totalPostCompletedByOthers}/{this.state.totalPosts}{" "}
                posts {this.state.totalHelps} helps
              </p>
              </div>
              <div id="nameImg">
                <p><img src="assets/home/user.png" alt="" height="50px" width="50px" /></p>
              </div>
        </div>
        <div className={styles.line2}>
            <div id="email">
            <p id="cont2text">Email</p>
              <p id="cont2text2">{this.state.emailId}</p>
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
                <img
                  src="assets/home/notification.png"
                  alt=""
                  height="50px"
                  width="50px"
                />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
