export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of array) {
    array[idx] = appendString + value;
  }

  return array;
}
