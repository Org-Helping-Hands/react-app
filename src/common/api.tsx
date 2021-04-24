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

async function doFetch<T>(
  endPoint: string,
  body = {},
  method: "GET" | "POST" | "PUT" = "POST"
) {
  let res = await fetch(`${baseUrl}/${endPoint}`, {
    method,
    body: JSON.stringify({ ...authReqBody, ...body }),
    headers: {
      "content-type": "application/json",
    },
  });
  return res.json() as Promise<T>;
}

export function getUserData() {
  return doFetch<userDataResponse>("user/get-data");
}
