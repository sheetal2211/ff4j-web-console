export default class MapUtils {
  static objectToMap(object: Object): Map<any, any> {
    return new Map(Object.entries(object));
  }
}
