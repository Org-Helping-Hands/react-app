import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./findNeedy.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { IPostMinimal } from "../../common/interfaces/post";
import { fetchPost } from "../../common/api";
import { MapBox } from "../mapbox/mapbox";
import { getLocation } from "../../common/location";
import { Link, useHistory } from "react-router-dom";

var map: mapboxgl.Map;

export function FindNeedy() {
  const [posts, setPosts] = useState<IPostMinimal[]>([]);
  const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);
  function createMarkers(posts: IPostMinimal[]) {
    setMarkers(
      posts.map((e) => {
        return new mapboxgl.Marker().setLngLat([
          parseFloat(e.longitude),
          parseFloat(e.latitude),
        ]);
      })
    );
  }
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 10 }));
  const history = useHistory();
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
    getLocation()
      .then(({ latitude, longitude }) => {
        return fetchPost(latitude, longitude);
      })
      .then(({ data }) => {
        setPosts(data);
        createMarkers(data);
      });
  }, []);
  return (
    <>
      <div className={styles.arrow}>
        <img
          src="/assets/find-needy/arrow.jpg"
          alt=""
          height="31px"
          width="31px"
          onClick={() => history.goBack()}
        />
      </div>
      <div className={styles.head1}>
        <h1>Needy people near you</h1>
      </div>

      <MapBox markers={markers}></MapBox>
      <animated.div style={{ x, y, position: "relative", zIndex: 4 }}>
        <div className={styles.postersList}>
          <div className={styles.horizontalLine} {...bind()}></div>
          {posts.map((post, i) => (
            <Link key={i} to={`/detailed-post?id=${post.id}`}>
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
            </Link>
          ))}
        </div>
      </animated.div>
    </>
  );
}
