export default function getFullResponseFromAPI(success){
    return new Promise ((resolve, reject) => {
        if (success)
        {
            setTimeout(() => {
                resolve('Success');
            }, 200);
        }
        else
        {
            reject("The fake API is not working currently");
        }
    });
}