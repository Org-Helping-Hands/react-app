import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./findNeedy.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { IPostMinimal } from "../../common/interfaces/post";

function getLocation() {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (err) => reject(err)
    );
  });
}
var map: mapboxgl.Map;

export function FindNeedy() {
  async function initializeMap() {
    let { latitude, longitude } = await getLocation();
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21tb3JlIiwiYSI6ImNrbnl2M2dwbTFrOXoycHBzN3RzdThvd20ifQ.wZeX_Xe1i3NsILKIEe7M4Q";
    map = new mapboxgl.Map({
      container: "rect",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 12,
    });
    addMarkers();

    new mapboxgl.Marker({ color: "#90D98D" })
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
  const [posts, setPosts] = useState<IPostMinimal[]>([
    {
      id: "ere",
      postedBy: { name: "om" },
      neededItems: [
        {
          no: 1,
          itemName: "Food",
        },
        {
          no: 2,
          itemName: "Water",
        },
      ],
      latitude: "18.155182",
      longitude: "73.299062",
    },
  ]);

  function addMarkers() {
    posts.forEach((e) => {
      new mapboxgl.Marker()
        .setLngLat([parseFloat(e.longitude), parseFloat(e.latitude)])
        .addTo(map);
    });
  }
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 10 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ direction, movement: [mx, my] }) => {
      if (direction[1] != 0) {
        api.start({ x: mx, y: my });
      }
    },
    { bounds: { left: 0, right: 0, bottom: 10, top: -500 } }
  );
  useEffect(() => {
    initializeMap();
  });
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
      <div className={styles.head1}>
        <h1>Needy people near you</h1>
      </div>

      <div id="rect" className={styles.rect}></div>
      <animated.div style={{ x, y, position: "relative", zIndex: 4 }}>
        <div className={styles.postersList}>
          <div className={styles.horizontalLine} {...bind()}></div>
          {posts.map((post, i) => (
            <div className={styles.line1} key={post.id}>
              <div className={styles.name}>
                <div className={styles.para1}>
                  <p className={styles.cont2text1}>
                    Posted by {post.postedBy.name}
                  </p>
                </div>
                <div className={styles.para2}>
                  <p className={styles.cont2text2}>
                    {post.neededItems.map((e, i) => {
                      let output = "";
                      if (i > 0) output = ", ";
                      output += e.itemName;
                      return output;
                    })}
                  </p>
                </div>
              </div>
              <div className={styles.nameImg1}>
                <p className={styles.userImg1}>
                  <img
                    src="/assets/find-needy/user.png"
                    alt=""
                    height="46px"
                    width="46px"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </>
  );
}
