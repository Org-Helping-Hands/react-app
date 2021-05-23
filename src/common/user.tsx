export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
}

export function getUserId() {
  return localStorage.getItem("userId");
}

export function setUserId(v: string) {
  localStorage.setItem("userId", v);
}

export function getPhoneNumber() {
  return localStorage.getItem("phoneNumber");
}

export function setPhoneNumber(v: string) {
  localStorage.setItem("phoneNumber", v);
}
