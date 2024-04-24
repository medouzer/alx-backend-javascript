export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`Error: ${filename} cannot be processed`));
}
