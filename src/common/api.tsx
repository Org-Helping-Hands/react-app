import axios from "axios";
import { getPhoneNumber, getToken, getUserId } from "./user";

const baseUrl = "http://localhost:3001";

interface IAuthReqBody {
  userId: string;
  phoneNumber: string;
  token: string;
}
let authReqBody: IAuthReqBody = {
  userId: getUserId() ?? "",
  phoneNumber: getPhoneNumber() ?? "",
  token: getToken() ?? "",
};

interface userDataResponse {
  name: string;

  totalHelps: number;

  totalPosts: number;

  totalPostCompletedByOthers: number;

  emailId: string;
}

export function getUserData() {
  return axios.post<userDataResponse>(`${baseUrl}/user/get-data`, authReqBody);
}
