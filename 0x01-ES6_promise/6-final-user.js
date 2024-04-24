import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      const data = [];

      for (let index = 0; index < res.length; index++) {
        data.push({
          status: res[index].status,
          value: res[index].status === 'fulfilled' ? res[index].value : String(res[index].reason),
        });
      }
      return (data);
    });
}
