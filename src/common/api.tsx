import axios from "axios";
import { getPositionOfLineAndCharacter } from "typescript";
import { getPhoneNumber, getToken, getUserId } from "./user";
const baseURL = axios.create({
  baseURL: process.env.REACT_APP_NODEJS_API,
});
interface IAuthReqBody {
  userId: string;
  phoneNumber: string;
  token: string;
}

interface userDataResponse {
  name: string;

  totalHelps: number;

  totalPosts: number;

  totalPostCompletedByOthers: number;

  emailId: string;
}
export function fetchPost(latitude: number, longitude: number) {
  return baseURL.post(
    "/post/fetch",
    {
      latitude,
      longitude,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
}
export function dopost(
  latitude: number,
  longitude: number,
  description: String,
  images: File[],
  neededItems: String[]
) {
  let formData = new FormData();

  formData.append("latitude", latitude.toString());
  formData.append("longitude", longitude.toString());
  formData.append("description", description.toString());
  images.forEach((image) => {
    formData.append("images", image);
  });
  formData.append("neededItems", JSON.stringify(neededItems));

  baseURL.post("/post/create", formData, {
    headers: getAuthReqHeader(),
  });
}

export function DetailedPost(postId:number){
 baseURL.post("/post/fetch-details",
 {
   postId
 },
 { 
   headers:getAuthReqHeader()
 });
}
var getAuthReqHeader = () => {
  return {
    token: getToken() ?? "",
  };
};

export function getUserData() {
  return axios.post<userDataResponse>(
    `${process.env.REACT_APP_NODEJS_API}/user/get-data`,
    {},
    { headers: getAuthReqHeader() }
  );
}
