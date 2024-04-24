import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      const arr = [];
      for (let index = 0; i < data.length; index++) {
        arr.push({
          status: "pending",
          value: data[index]
        })
      }
      return arr;
    })
    .catch((e) => {
      return {
        status: "rejected",
        value: e.message
      }
    })
}
