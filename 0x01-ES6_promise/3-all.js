import uploadPhoto from './utils'
import createUser from './utils'

export default function handleProfileSignup() {
  return promise
  .all([uploadPhoto, createUser])
  .then((values) => console.log(values))
  .catch((error) => new Error())
//   .finally(() => console.log('Got a response from the API'))
}