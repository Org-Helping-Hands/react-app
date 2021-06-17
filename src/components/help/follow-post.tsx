import React, { useEffect, useState } from "react";
import styles from "./follow-post.module.css";
import { MapBox } from "../mapbox/mapbox";
import mapboxgl from "mapbox-gl";
import { useHistory } from "react-router-dom";
import {
  fetchDetailedPost,
  fetchImageDetailedPost,
  postDetailResponse,
  updateStatus,
} from "../../common/api";
import { RouteProps } from "react-router-dom";

export function FollowPost(props: RouteProps) {
  const [marker, setMarker] = useState<mapboxgl.Marker>();
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState("");
  const [images, setImages] = useState<string[]>([]);

  function createMarker(post: postDetailResponse) {
    setMarker(
      new mapboxgl.Marker().setLngLat([
        parseFloat(post.longitude),
        parseFloat(post.latitude),
      ])
    );
  }
  const history = useHistory();
  function onTickClick() {
    updateStatus(postId, "Completed").then(_ =>history.push("/thankyou") );
    
  }
  function onCrossClick() {
    updateStatus(postId, "Idle").then(_ => history.push("/home"));
    
  }
  useEffect(() => {
    let id = new URLSearchParams(props.location?.search).get("id");
    if (id) {
      setPostId(id);

      fetchDetailedPost(id).then(({ data }) => {
        setDescription(data.description);
        createMarker(data);
      });
      fetchImageDetailedPost(id).then(({ data }) => {
        setImages(data);
      });
    } else new Error("No id found please select post from find needy page");
  });

  return (
    <>
      <div>
        <img className={styles.arrow} src="/assets/find-needy/arrow.jpg" />
        <p className={styles.top}>Needy people near you</p>
        <MapBox markers={marker ? [marker] : []}></MapBox>
        <span>
          <i
            className={`iconify ${styles.tag}`}
            data-icon="akar-icons:water"
          ></i>
          <i
            className={`iconify ${styles.tag}`}
            data-icon="emojione-monotone:pot-of-food"
          ></i>
          <i
            className={`iconify ${styles.tag}`}
            data-icon="mdi-hospital-box"
          ></i>
        </span>
        <p className={styles.bottom}>{description}</p>

        <span className={`iconify-wrapper `} onClick={onCrossClick}>
          <i
            className={`iconify ${styles.hicons}`}
            data-icon="akar-icons:cross"
          ></i>
        </span>
        <span className={`iconify-wrapper `} onClick={onTickClick}>
          <i
            className={`iconify ${styles.shicons}`}
            data-icon="akar-icons:check"
            data-inline="false"
          ></i>
        </span>
      </div>
    </>
  );
}
