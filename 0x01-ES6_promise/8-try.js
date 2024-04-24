export default function divideFunction(numerator, denominator) {
  try {
    if (denominator != 0)
      return (numerator / denominator)
    throw new Error("cannot divide by 0");
  } catch (e) {
    console.log(e);
  }
}
