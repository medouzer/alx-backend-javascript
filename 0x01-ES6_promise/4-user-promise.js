export default function signUpUser(firstName, lastName) {
    return  new Promise(function(resolve, reject) {
        return {
            firstName,
            lastName
        }
    });
}