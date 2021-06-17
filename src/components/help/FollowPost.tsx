import React, { useEffect, useState } from "react";
import styles from "./FollowPost.module.css";
import { MapBox } from "../mapbox/mapbox";
import mapboxgl from "mapbox-gl";
import {
  fetchDetailedPost,
  postDetailResponse,
  updateStatus,
} from "../../common/api";

export function FollowPost() {
  const [marker, setMarker] = useState<mapboxgl.Marker>();

  function createMarker(post: postDetailResponse) {
    setMarker(
      new mapboxgl.Marker().setLngLat([
        parseFloat(post.longitude),
        parseFloat(post.latitude),
      ])
    );
  }
  function onTickClick() {
    updateStatus("1", "Completed");
  }
  function onCrossClick() {
    updateStatus("1", "Idle");
    console.log("help denied");
  }
  useEffect(() => {
    fetchDetailedPost("1").then(({ data }) => {
      createMarker(data);
    });
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
        <p className={styles.bottom}>
          Needy food and water and shelter will also help. Also it will be nice
          if you donate your old clothes
        </p>

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
