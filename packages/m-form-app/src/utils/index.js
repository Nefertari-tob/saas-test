export function isJSON(str) {
  if (typeof str == "string") {
    try {
      let obj = JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
}
