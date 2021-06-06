import mapboxgl, { Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { getLocation } from "../../common/location";
type Props = {
  markers?: mapboxgl.Marker[];
};

export const MapBox = (props: Props) => {
  const mapContainer = useRef(null);
  const map = useRef(null) as any;

  async function initializeMap() {
    let { latitude, longitude } = await getLocation();
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21tb3JlIiwiYSI6ImNrbnl2M2dwbTFrOXoycHBzN3RzdThvd20ifQ.wZeX_Xe1i3NsILKIEe7M4Q";
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current as any,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12,
      });
    }
    if (map.current) {
      new mapboxgl.Marker({ color: "#90D98D", scale: 1.2 })
        .setLngLat([longitude, latitude])
        .addTo(map.current);
      props.markers &&
        props.markers.forEach((marker) => {
          marker.addTo(map.current);
        });
    }
  }
  useEffect(() => {
    initializeMap();
  });
  return <div id="rect" ref={mapContainer} className="map-box"></div>;
};
