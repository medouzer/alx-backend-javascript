export default function hasValuesFromArray(set, array) {
  for (const value in array) {
    if (!set.has(value))
      return false;
  }
  return true;
}
