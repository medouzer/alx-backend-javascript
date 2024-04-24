import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      const data = [];
      res.map((o) => {
        data.push({
          status: o.status,
          value: o.status === 'fulfilled' ? o.value : String(o.reason),
        })
      });

      console.log(data);
      return (data);
    });
}
