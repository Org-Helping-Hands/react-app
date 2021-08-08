export function getLocation () {
  interface GeolocationCoordinates {
    longitude: number;
    latitude: number;
  }
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (err) => reject(err)
    );
  });
}
