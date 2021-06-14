import React, { useEffect, useState } from "react";
import styles from "./help.module.css";
import { MapBox } from "../mapbox/mapbox";
import mapboxgl from "mapbox-gl";

export function FollowPost() {
  const [locationCoords, setLocationCoords] = useState({
    latitude: 18.1462483,
    longitude: 73.289954,
  });

  const [marker, setMarker] = useState<mapboxgl.Marker>();

  function createMarker(latitude: number, longitude: number) {
    setMarker(new mapboxgl.Marker().setLngLat([longitude, latitude]));
  }

  useEffect(() => {
    createMarker(18.1462483, 73.289954);
  }, []);
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

        <span className={`iconify-wrapper `}>
          <i
            className={`iconify ${styles.hicons}`}
            data-icon="akar-icons:cross"
          ></i>
        </span>
        <span className={`iconify-wrapper `}>
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
