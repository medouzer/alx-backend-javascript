export default async function signUpUser(firstName, lastName) {
    const promise = new Promise (() => {
        return {
            firstName,
            lastName
        }
    })

    return promise.then((data) => {
        console.log(data);
    });
}