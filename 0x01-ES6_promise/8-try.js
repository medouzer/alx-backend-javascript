export default function divideFunction(numerator, denominator) {
  return (denominator != 0) ? (numerator / denominator) : throw Error("cannot divide by 0");
}
