import React from "react";
import mapboxgl from "mapbox-gl";
import "./findNeedy.css";
export class FindNeedy extends React.Component {
  componentDidMount() {
    this.initializeMap();
  }

  async initializeMap() {
    let { latitude, longitude } = await this.getLocation();
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21tb3JlIiwiYSI6ImNrbnl2M2dwbTFrOXoycHBzN3RzdThvd20ifQ.wZeX_Xe1i3NsILKIEe7M4Q";
    var map = new mapboxgl.Map({
      container: "rect",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 9,
    });
  }

  getLocation() {
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (err) => reject(err)
      );
    });
  }
  render() {
    return (
      <>
        <div id="arrow">
          <img
            src="/assets/find-needy/arrow.jpg"
            alt=""
            height="31px"
            width="31px"
          />
        </div>
        <h1>Needy people near you</h1>

        <div id="rect"></div>
        <div id="postersList">
          <div id="horizontalLine"></div>
          {[1, 2, 4, 5].map((_, i) => (
            <div className="line1" key={i}>
              <div id="name">
                <p id="cont2text1">Posted by siddhesh</p>
                <p id="cont2text2">Food, Water</p>
              </div>
              <div id="nameImg1">
                <p id="userImg1">
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
      </>
    );
  }
}
