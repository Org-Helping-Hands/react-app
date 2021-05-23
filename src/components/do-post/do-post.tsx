import React from "react";
import styles from "./do-post.module.css";

type tags = {
  name: string;
  selected: boolean;
};
export class DoPost extends React.Component {
  state = {
    tags: [
      { name: "Food", selected: false },
      { name: "Shelter", selected: false },
    ],
  };

  onTagClick(index: number) {
    let updatedTags = this.state.tags.map((ele, i) => {
      if (i == index) {
        return {
          ...ele,
          selected: !ele.selected,
        };
      } else return ele;
    });
    this.setState({
      tags: updatedTags,
    });
  }
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className={`navbar-brand ${styles.navtitle}`} href="#">
              Helping Hands
            </a>
            <button
              className={"navbar-toggler"}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className={`navbar-nav ${styles.navitems}`}>
                <a className="nav-item nav-link" href="#">
                  Settings
                </a>
                <a className="nav-item nav-link" href="#">
                  About-Us
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact-Us
                </a>
              </div>
            </div>
          </nav>
        </div>

        <h1 className={`text-sm-center  ${styles.maintitle}`}>Request Help</h1>
        <div className={styles.reqpost}>
          <div>
            <p className={styles.title}>fill out all information</p>

            <div className={styles.upload_frame}>
              <label className={styles.filebutton}>
                <img
                  className={styles.upload_image}
                  src="assets/do-post/upload.png"
                  height="75px"
                  width="75px"
                ></img>
                <span>
                  <input type="file" id="myfile" name="myfile"></input>
                </span>
              </label>
            </div>
          </div>

          <p className={styles.title}>select location</p>
          <input
            type="text"
            placeholder="Enter address"
            className={`form-control ${styles.needy_address}`}
          />
          <p className={styles.title}>select need tags</p>
          <div className={styles.tags_selected}>
            <p className={styles.notice}></p>
            <div className="row">
              {this.state.tags.map((ele, index) => (
                <div className="col">
                  <button
                    className={
                      ele.selected ? styles.tag_clicked : styles.tag_Unclicked
                    }
                    id="Food"
                    onClick={() => this.onTagClick(index)}
                  >
                    {ele.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="row">
              <button className={`btn btn-primary ${styles.donebutton}`}>
                Done
              </button>
            </div>
          </div>

          <p className={styles.title}>Description</p>
          <textarea
            name="Description"
            className={styles.description}
            placeholder="Any Extra information ex.You will find them near xyz shop or xyz area"
          ></textarea>

          <div className="row">
            <button className={`btn btn-primary ${styles.postbtn}`}>
              Post
            </button>
          </div>
        </div>
      </>
    );
  }
}
