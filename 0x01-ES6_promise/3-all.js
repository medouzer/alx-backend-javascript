import uploadPhoto from './utils'
import createUser from './utils'

export default function handleProfileSignup() {
  return promise
  .all([uploadPhoto, createUser])
  .then((photo, user) => console.log(`body: ${photo} firstName: ${user.firstName} lastName: ${user.lastName}`))
  .catch(() => console.log('Signup system offline'))
}