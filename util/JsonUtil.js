export default class JsonUtil {
  static jsonToString(jsonObj) {
    return JSON.stringify(jsonObj);
  }

  static stringToJson(stringJson) {
    return JSON.parse(stringJson);
  }
}