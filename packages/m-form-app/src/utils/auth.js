import Cookies from "js-cookie";
const TokenKey = "Admin-Token";
export function getToken() {
  return Cookies.get(TokenKey);
}
export function getTokenHead() {
  return Cookies.get("tokenHead");
}
export function getPerDeptId() {
  return Cookies.get("perm_dept_id");
}
export function getPerRoleId() {
  return Cookies.get("perm_role_id");
}
