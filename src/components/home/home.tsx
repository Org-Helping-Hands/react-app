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
    <Link to="/do-post">
    <div className={styles.right}>
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
    </Link>

    <Link to="/find-needy">
      <div className={styles.left}>
        <p><img src="assets/home/map.png" alt="" height="100px" width="100px" /></p>
        <p className={styles.t1}>Find needy near me</p>
        </div>
    </Link>
    </div>
    

    <h2>Account</h2>

     <div className={styles.container2}>
        <div className={styles.line1}>
            <div className={styles.name}>
            <p className={styles.cont2text}>{this.state.name}</p>
              <p className={styles.cont2text2}>
                {this.state.totalPostCompletedByOthers}/{this.state.totalPosts}{" "}
                posts {this.state.totalHelps} helps
              </p>
              </div>
              <div className={styles.nameImg}>
                <p><img src="assets/home/user.png" alt="" height="50px" width="50px" /></p>
              </div>
        </div>
        <div className={styles.line2}>
            <div className={styles.email}>
            <p className={styles.cont2text}>Email</p>
              <p className={styles.cont2text2}>{this.state.emailId}</p>
              </div>
              <div className={styles.emailImg}>
                <p><img src="assets/home/email.png" alt="" height="50px" width="50px" /></p>
              </div>
        </div>
        <div className={styles.line3}>
            <div className={styles.noti}>
              <p className={styles.cont2text}>Notification</p>
              <p className={styles.cont2text2}>Notifications are on</p>
            </div>
            <div className={styles.notiImg}>
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
