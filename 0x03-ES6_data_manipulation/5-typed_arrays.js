export default function createInt8TypedArray(length, position, value) {
  const arrbuf = new ArrayBuffer(length);
  const int8Array = new Int8Array(arrbuf);
  if (position > int8Array.length) throw new Error('Position outside range');
  int8Array[position] = value;
  return new DataView(buffer);
}
