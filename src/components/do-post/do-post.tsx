import React, { useState } from "react";
import styles from "./do-post.module.css";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const baseUrl = axios.create({
  baseURL: "process.env.REACT_APP_NODEJS_API",
});

type TTag = {
  name: string;
  icon: string;
};

export function DoPost() {
  const [tags] = useState<TTag[]>([
    { name: "Water", icon: "akar-icons:water" },
    { name: "Food", icon: "emojione-monotone:pot-of-food" },
    { name: "Shelter", icon: "ic-baseline-night-shelter" },
    { name: "medical Help", icon: "mdi-hospital-box" },
    { name: "Educational Help", icon: "carbon-education" },
    { name: "financial Help", icon: "map:finance" },
    { name: "cloths", icon: "map:clothing-store" },
    { name: "Adoption", icon: "carbon:pedestrian-family" },
  ]);
  const [selectedTags, setSelectedTags] = useState<TTag[]>([]);
  const [selectedTagsInModal, setSelectedTagsInModal] = useState<TTag[]>([]);
  function toggleTagInModal(name: TTag) {
    let tagExist = selectedTagsInModal.includes(name);

    if (tagExist) {
      let updatedData = selectedTagsInModal.filter((e) => e != name);
      setSelectedTagsInModal(updatedData);
    } else {
      setSelectedTagsInModal([...selectedTagsInModal, name]);
    }
  }


  function handleModalDoneButton() {
    setSelectedTags(selectedTagsInModal);
  }

  function handleRemoveTag(name: TTag) {
    let updatedData = selectedTags.filter((e) => e != name);
    setSelectedTags(updatedData);
    setSelectedTagsInModal(updatedData);
  }

  function getModalTagClass(name: TTag) {
    if (selectedTagsInModal.includes(name)) {
      return styles.tagclicked;
    } else {
      return styles.Modaltagbtn;
    }
  }

  return (
    <>
     
        <img className="mt-3 ml-3"
          src="/assets/find-needy/arrow.jpg"
          alt=""
          height="31px"
          width="31px"
        />
     
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
            {selectedTags.map((ele, index) => (
              <div className="col-6 col-sm-4 col-md-3">
                <button type="button" className={styles.tagbtn}>
                  <span className="iconify-wrapper">
                    <i className="iconify" data-icon={ele.icon}></i>
                  </span>
                  <span className={styles.tagname}>{ele.name}</span>
                  <span
                    className="iconify-wrapper"
                    onClick={() => handleRemoveTag(ele)}
                  >
                    <i className="iconify" data-icon="akar-icons:cross"></i>
                  </span>
                </button>
              </div>
            ))}

            <button
              type="button"
              className={styles.Addtagbtn}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <span className="iconify-wrapper">
                <i className="iconify" data-icon="akar-icons:plus"></i>
              </span>
              <span className={styles.tagname}>Add Tags</span>
            </button>
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
                    Select more items
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
                  <div className="row">
                    {tags.map((ele) => {
                      return (
                        <div className="col-6">
                          <button
                            type="button"
                            className={getModalTagClass(ele)}
                            onClick={() => toggleTagInModal(ele)}
                          >
                            <span className="iconify-wrapper">
                              <i
                                className="iconify"
                                data-icon={ele.icon}
                              ></i>
                            </span>
                            <span className={styles.tagname}>{ele.name}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    data-dismiss="modal"
                    onClick={() => handleModalDoneButton()}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.title}>Description</p>
          <textarea
            name="Description"
            className={styles.description}
            placeholder="You will find them near xyz shop or xyz area"
          />

          <div className="row">
            <button className={`btn btn-primary ${styles.postbtn}`} >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// export class DoPost extends React.Component {
//   state = {
//     isEduStateOn: false,
//     isMedicalHelpOn: false,
//     tags: [
//       {
//         name: "Food",
//         selected: true,
//         tagicon: "emojione-monotone:pot-of-food",
//       },
//       { name: "Shelter", selected: true, tagicon: "ant-design:home-outlined" },
//       { name: "water", selected: true, tagicon: "akar-icons:water" },
//     ],
//     value: "",
//   };

//   // toggleModal(status: boolean) {
//   //   this.setState({ ...this.state, modal: status });
//   // }

//   onTagSelect() {
//     if (this.state.isMedicalHelpOn === true) {
//       alert("medical help slected");
//     }
//   }
//   tagRemove() {
//     alert("tag removed");
//   }

//   onTagClick(index: number) {
//     let updatedTags = this.state.tags.map((ele, i) => {
//       if (i == index) {
//         return {
//           ...ele,
//           selected: !ele.selected,
//         };
//       } else return ele;
//     });
//     this.setState({
//       tags: updatedTags,
//     });
//   }
// }
