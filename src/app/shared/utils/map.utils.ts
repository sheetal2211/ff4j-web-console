export default class MapUtils {
  static objectToMap(object: Object) {
    return new Map(Object.entries(object));
  }
}
