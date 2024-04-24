import handleProfileSignup from './6-final-user';

const promise = handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");

promise.then((data) => {
    console.log("data : ", data);
});