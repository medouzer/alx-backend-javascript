export default function divideFunction(numerator, denominator) {
  try {
    console.log(`numerator : ${numerator} | denominator ${denominator}`);
    if (denominator != 0)
      return (numerator / denominator);
    throw new Error("cannot divide by 0");
  } catch (e) {
    console.log(e);
  }
}
