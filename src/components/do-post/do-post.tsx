import React from "react";
import styles from "./do-post.module.css";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const baseUrl = axios.create({
  baseURL: "process.env.REACT_APP_NODEJS_API",
});
type tags = {
  name: string;
  selected: boolean;
};
export class DoPost extends React.Component {
  state = {
    tags: [
      {
        name: "Food",
        selected: false,
        tagicon: "emojione-monotone:pot-of-food",
      },
      { name: "Shelter", selected: false, tagicon: "ant-design:home-outlined" },
      { name: "water", selected: false, tagicon: "akar-icons:water" },
    ],
    modal: false,
  };

  toggleModal(status: boolean) {
    this.setState({ ...this.state, modal: status });
  }

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
        <div className={styles.arrow}>
          <img
            src="/assets/find-needy/arrow.jpg"
            alt=""
            height="31px"
            width="31px"
          />
        </div>
        <h1 className={`text-sm-center  ${styles.maintitle}`}>Request Help</h1>
        <div className={styles.reqpost}>
          <div>
            <p className={styles.title}>fill out all information</p>

            <div className={styles.upload_frame}>
              <div className=" row">
                <div className="col-1">
                  <label className={styles.filebutton}>
                    <span
                      className={`iconify ${styles.uploadSign}`}
                      data-icon="akar-icons:plus"
                      data-inline="false"
                    ></span>
                    <span>
                      <input type="file" id="myfile" name="myfile"></input>
                    </span>
                  </label>
                </div>
                <div className="col-11">
                  <p className={styles.uploadText}>
                    click here to capture or upload image
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.title}>select location</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className={`${styles.addressInput}`}
              placeholder="Enter Address"
              aria-label="Enter address"
              aria-describedby="button-addon2"
            />
            <span className="iconify-wrapper">
              <i className="iconify" data-icon="bx:bxs-map"></i>
            </span>
          </div>

          <p className={styles.title}>select need tags</p>
          <div className={styles.tags_selected}>
            <p className={styles.notice}></p>
            <div className="row">
              {this.state.tags.map((ele, index) => (
                <div className="col-6 col-sm-4 col-md-3">
                  <button
                    type="button"
                    className={styles.tagbtn}
                    onClick={() => this.onTagClick(index)}
                  >
                    <span className="iconify-wrapper">
                      <i className="iconify" data-icon={ele.tagicon}></i>
                    </span>
                    <span className={styles.tagname}>{ele.name}</span>
                    <span className="iconify-wrapper">
                      <i className="iconify" data-icon="akar-icons:cross"></i>
                    </span>
                  </button>
                </div>
              ))}

              <button
                type="button"
                className={styles.Addtagbtn}
                onClick={() => this.toggleModal(true)}
              >
                <span className="iconify-wrapper">
                  <i className="iconify" data-icon="akar-icons:plus"></i>
                </span>
                <span className={styles.tagname}>Add Tags</span>
              </button>
            </div>
            <Modal show={this.state.modal}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Select more Tags
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.toggleModal(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className={`row`}>
                    <div className={`col-6`}>
                      <button
                        type="button"
                        className={styles.Modaltagbtn}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <span className="iconify-wrapper">
                          <i
                            className="iconify"
                            data-icon="akar-icons:water"
                          ></i>
                        </span>
                        <span className={styles.tagname}>Water</span>
                      </button>
                    </div>
                    <div className={`col-6`}>
                      <button
                        type="button"
                        className={styles.Modaltagbtn}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <span className="iconify-wrapper">
                          <i
                            className="iconify"
                            data-icon="akar-icons:water"
                          ></i>
                        </span>
                        <span className={styles.tagname}>Water</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-lg btn-block"
                    data-dismiss="modal"
                  >
                    Done
                  </button>
                </div>
              </div>
            </Modal>
          </div>

          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          ></div>

          <p className={styles.title}>Description</p>
          <textarea
            name="Description"
            className={styles.description}
            placeholder="You will find them near xyz shop or xyz area"
          />

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
