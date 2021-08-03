import axios from "axios";
import { Subject } from "rxjs";
import { getPositionOfLineAndCharacter } from "typescript";
import { getPhoneNumber, getToken, getUserId } from "./user";
const baseURL = axios.create({
  baseURL: process.env.REACT_APP_NODEJS_API,
});

export const toggleSpinner = new Subject<boolean>();
baseURL.interceptors.request.use(
  (config) => {
    toggleSpinner.next(true);
    return config;
  },
  (_) => {
    toggleSpinner.next(false);
  }
);

baseURL.interceptors.response.use(
  (res) => {
    toggleSpinner.next(false);
    return res;
  },
  (_) => {
    toggleSpinner.next(false);
  }
);
export type TLatestOperation = "Completed" | "Started" | "Idle";
interface updateStatus {
  postId: string;
  latestOperation: TLatestOperation;
}
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

  currentHelpingPost: postDetailResponse;
}
export interface postDetailResponse {
  id: number;

  neededItems: { itemName: string }[];

  latitude: string;

  longitude: string;

  description: string;

  latestOperation: string;

  operationPerformedBy: userDataResponse;

  postedBy: userDataResponse;
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

  return baseURL.post("/post/create", formData, {
    headers: getAuthReqHeader(),
  });
}
export function updateStatus(
  postId: String,
  latestOperation: TLatestOperation
) {
  return baseURL.post(
    "/post/update-status",
    {
      postId,
      latestOperation,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
}
export function fetchDetailedPost(postId: string) {
  return baseURL.post<postDetailResponse>(
    "/post/fetch-details",
    {
      postId,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
}
export function fetchImageDetailedPost(postId: string) {
  return baseURL.post<string[]>(
    "/post/fetch-images",
    {
      postId,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
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

export function requestUpdateEmailId(emailId: String) {
  return baseURL.post(
    "/user/request-email-update",
    {
      emailId,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
}

export function verifyUpdateEmailId(emailId: String, otp: string) {
  return baseURL.post(
    "/user/verify-update-email",
    {
      emailId,
      otp,
    },
    {
      headers: getAuthReqHeader(),
    }
  );
}

export function signIn(idToken: string, name: string) {
  return baseURL.post("/user/signin", { idToken, name });
}
