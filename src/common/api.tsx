import axios from "axios";
import { getPhoneNumber, getToken, getUserId } from "./user";

import { configs } from "../configs";
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

var getAuthReqBody = () => {
  return {
    userId: getUserId() ?? "",
    phoneNumber: getPhoneNumber() ?? "",
    token: getToken() ?? "",
  };
};

export function getUserData() {
  return axios.post<userDataResponse>(
    `${configs.apiBaseUrl}/user/get-data`,
    getAuthReqBody()
  );
}
