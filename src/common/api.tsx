import axios from "axios";
import { getPhoneNumber, getToken, getUserId } from "./user";

const baseUrl = "http://localhost:3000";

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
    `${baseUrl}/user/get-data`,
    getAuthReqBody()
  );
}
