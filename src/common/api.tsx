import axios from "axios";
import { getPositionOfLineAndCharacter } from "typescript";
import { getPhoneNumber, getToken, getUserId } from "./user";
const baseURL =axios.create({
  baseURL: process.env.REACT_APP_NODEJS_API 
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
 export function fetchPost(latitude:number,longitude:number){
   return baseURL.post("/post/fetch",{
  latitude,longitude
  },{
   headers:getAuthReqHeader()
  })
}
  export function dopost( latitude: number,longitude: number,description:String, images:String,neededItems:String){
  baseURL.post("/post/create",{
    latitude,longitude,description,images,neededItems
  },{
    headers:getAuthReqHeader()
  })
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
