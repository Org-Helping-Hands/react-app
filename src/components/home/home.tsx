import React, { useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../common/api";
import { useEffect } from "react";

export function Home() {
  const [name, setname] = useState<string>("");
  const [totalPostCompletedByOthers, settotalPostCompletedByOthers] =
    useState<number>();
  const [totalPosts, settotalPost] = useState<number>();
  const [totalHelps, settotalHelps] = useState<number>();
  const [emailId, setemailId] = useState<string>("");
  const [currentPostHelpingUserName, setCurrentPostHelpingUserName] =
    useState("");
  const [currentPostHelpingId, setCurrentPostHelpingId] = useState<number>();

  useEffect(() => {
    getUserData().then(({ data }) => {
      console.log(data)
      setname(data.name);
      setemailId(data.emailId);
      settotalHelps(data.totalHelps);
      settotalPostCompletedByOthers(data.totalPostCompletedByOthers);
      settotalPost(data.totalPosts);
      setCurrentPostHelpingUserName(data.currentHelpingPost?.postedBy.name);
      setCurrentPostHelpingId(data.currentHelpingPost?.id);
    });
  }, []);

  return (
    <>
      <div className={styles.head1}>
        <h1>Helping Hands</h1>
      </div>
      <div className={styles.container1}>
        <Link to="/do-post">
          <div className={styles.right}>
            <div className={styles.para1}>
              <p>
                <img
                  src="assets/home/request-message.png"
                  alt=""
                  height="100px"
                  width="100px"
                />
              </p>
            </div>
            <div className={styles.para2}>
              <p>Request for needy</p>
            </div>
          </div>
        </Link>

        <Link to="/find-needy">
          <div className={styles.left}>
            <div className={styles.para3}>
              <p>
                <img
                  src="assets/home/map.png"
                  alt=""
                  height="100px"
                  width="100px"
                />
              </p>
            </div>

            <p className={styles.t1}>Find needy near me</p>
          </div>
        </Link>
      </div>
      {currentPostHelpingUserName && (
        <Link to={"/follow-post?id=" + currentPostHelpingId}>
          <div className={styles.frame}>
            <div className={styles.text}>
              <p className={styles.textOne}>
                You are currently helping post which was
              </p>
              <p className={styles.textTwo}>
                posted by {currentPostHelpingUserName}
              </p>
            </div>
          </div>
        </Link>
      )}

      <div className={styles.head2}>
        <h2>Account</h2>
      </div>

      <div className={styles.container2}>
        <div className={styles.line1}>
          <div className={styles.name}>
            <p className={styles.cont2text}>{name}</p>
            <Link to="/contribution">
              <p className={styles.cont2text2}>
                {totalPostCompletedByOthers}/{totalPosts} posts {totalHelps}{" "}
                helps
              </p>
            </Link>
          </div>
        </div>

        <div className={styles.nameImg}>
          <p>
            <img src="assets/home/user.png" alt="" height="50px" width="50px" />
          </p>
        </div>

        <div
          className={styles.line2}
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <div className={styles.email}>
            <p className={styles.cont2text}>Email</p>
            <p className={styles.cont2text2}>{emailId}</p>
          </div>
        </div>
      </div>

      <div className={styles.emailImg}>
        <div className={styles.para5}>
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
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Update E-mail
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <input
                  type="text"
                  className="form form-control"
                  placeholder="Enter Email-id"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-block btn-success"> Update</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line3}>
        <div className={styles.noti}>
          <p className={styles.cont2text}>Notification</p>
          <p className={styles.cont2text2}>Notifications are on</p>
        </div>
        <div className={styles.notiImg}>
          <div className={styles.para4}>
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
