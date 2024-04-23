export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
