export default function appendToEachArrayValue(array, appendString) {
  return array.map(item => appendString + item);
}
