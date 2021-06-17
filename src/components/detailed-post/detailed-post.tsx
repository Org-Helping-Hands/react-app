import React, { useEffect, useState } from "react";
import { Link, RouteProps, useHistory } from "react-router-dom";
import styles from "./detailed-post.module.css";
import {
  fetchDetailedPost,
  fetchImageDetailedPost,
  postDetailResponse,
  updateStatus,
} from "../../common/api";
import { MapBox } from "../mapbox/mapbox";
import mapboxgl from "mapbox-gl";
// state = {
//    Urls:[
//      {URL:"assets/detailed-post/poor1.jpg"},
//      {URL:"assets/detailed-post/poor2.jpg"},
//      {URL:"assets/detailed-post/poor3.jpg"},
//    ],
// };
type File = {
  URL: string;
};
type Post = {
  Name: string;
  Images: string[];
  Description: string;
};

export function DetailedPost(props: RouteProps) {
  const [name, setName] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [marker, setMarker] = useState<mapboxgl.Marker>();
  const [postId, setPostId] = useState("");
  const history = useHistory();

  function createMarker(post: postDetailResponse) {
    setMarker(
      new mapboxgl.Marker().setLngLat([
        parseFloat(post.longitude),
        parseFloat(post.latitude),
      ])
    );
  }

  function onHelpClick() {
    updateStatus(postId, "Started").then( _=> history.push("/follow-post?id="+postId));
  }

  useEffect(() => {
    let id = new URLSearchParams(props.location?.search).get("id");
    if (id) {
      setPostId(id);

      fetchDetailedPost(id).then(({ data }) => {
        setName(data.postedBy.name);
        setDescription(data.description);
        createMarker(data);
      });
      fetchImageDetailedPost(id).then(({ data }) => {
        setImages(data);
      });
    } else new Error("No id found please select post from find needy page");
  }, []);
  return (
    <>
      <img
        className="mt-3 ml-3"
        src="/assets/find-needy/arrow.jpg"
        alt=""
        height="31px"
        width="31px"
        onClick={() => history.goBack()}
      />
      <h1 className={styles.mainTitle}> Needy people near you</h1>
      <div className={styles.detail_post}>
        <div className={styles.post_info}>
          <div className={styles.poster_info}>
            <div className="row">
              <div className="col-3 col-sm-2 col-md-1">
                <img
                  className={styles.profile_pic}
                  src="assets/detailed-post/profile-pic.png"
                ></img>
              </div>
              <div className="col-9 col-sm-10  col-md-11 ">
                <h3 className={styles.username}>Posted by {name}</h3>
              </div>
            </div>
          </div>
          <div className={styles.post_description_box}>
            <div className="row ">
              <h4 className={styles.post_description}>{description}</h4>
            </div>
          </div>
        </div>
        <div className={styles.imageSlider}>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((ele, i) => (
                <div
                  className={`carousel-item ${i == 0 ? "active" : ""}`}
                  key={i}
                >
                  <img
                    className={`d-block w-100 ${styles.help_img}`}
                    src={`data:image/jpg;base64,${ele}`}
                    alt="First slide"
                  />
                </div>
              ))}
            </div>
            {images.length > 1 && (
              <>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </>
            )}
          </div>
        </div>

        <MapBox markers={marker ? [marker] : []} />

        <div className={`text-right ${styles.buttons}`}>
          <button type="button" className={styles.share_btn}>
            <img
              src="assets/detailed-post/inbox.png"
              height="35px"
              width="35px"
            ></img>
          </button>
          <button type="button" className={styles.share_btn}>
            <img
              src="assets/detailed-post/shareIcon.png"
              height="30px"
              width="30px"
            ></img>
          </button>
        </div>
        
          <button
            type="button"
            className={`btn btn-success ${styles.help_btn}`}
            onClick={onHelpClick}
          >
            help
          </button>
        
      </div>
    </>
  );
}
