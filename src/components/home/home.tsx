import React from "react";
import { getUserData } from "../../common/api";
import "./home.css";
export class Home extends React.Component {
  componentDidMount() {
    getUserData().then((data) => {
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
  state = {
    name: "",
    emailId: "",
    totalHelps: 0,
    totalPosts: 0,
    totalPostCompletedByOthers: 0,
  };
  render() {
    return (
      <>
        <h1>Helping Hands</h1>
        <div className="container1">
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
            <p>
              <img
                src="assets/home/map.png"
                alt=""
                height="100px"
                width="100px"
              />
            </p>
            <p id="t1">Find needy near me</p>
          </div>
        </div>
        <h2>Account</h2>

        <div className="container2">
          <div className="line1">
            <div id="name">
              <p id="cont2text">{this.state.name}</p>
              <p id="cont2text2">
                {this.state.totalPostCompletedByOthers}/{this.state.totalPosts}{" "}
                posts {this.state.totalHelps} helps
              </p>
            </div>
            <div id="nameImg">
              <p>
                <img
                  src="assets/home/user.png"
                  alt=""
                  height="50px"
                  width="50px"
                />
              </p>
            </div>
          </div>
          <div className="line2">
            <div id="email">
              <p id="cont2text">Email</p>
              <p id="cont2text2">{this.state.emailId}</p>
            </div>
            <div id="emailImg">
              <p>
                <img
                  src="assets/home/email.png"
                  alt=""
                  height="50px"
                  width="50px"
                />
              </p>
            </div>
          </div>
          <div className="line3">
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
