import React from "react";
import styles from "./hbox.module.css";

export class hbox extends React.Component {
  render() {
    return (
      <>
        <img
          className={styles.harrow}
          src="data:image/png;base64,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"
          alt=""
          height="31px"
          width="31px"
        ></img>
        <p className={styles.head}>Helping-Box</p>
        {/* <span className={`iconify-wrapper `}>
                    <i className={`iconify`} data-icon="ant-design:edit-outlined"></i>
                </span> */}
        <div className={`row ${styles.postBox}`}>
          <div className="col-2 col-sm-2 ">
            <img
              className={styles.profile_pic}
              height="60px"
              width="60px"
              src="assets/detailed-post/profile-pic.png"
            ></img>
          </div>
          <div className="col-8 col-sm-8  ">
            <h3 className={styles.name}>Posted by Siddhesh surve</h3>
            <p className={styles.tags}>Food ,water</p>
          </div>
          <div className={` col-1 ${styles.iconbox}`}>
            <span className={`iconify-wrapper `}>
              <i
                className={`iconify ${styles.icons}`}
                data-icon="akar-icons:cross"
              ></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}
