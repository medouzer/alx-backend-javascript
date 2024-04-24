export default async function signUpUser(firstName, lastName) {
    const promise = new Promise(function(resolve, reject) {
        return {
            firstName,
            lastName
        }
    });

    return (await promise.resolve())
}