export default function getFullResponseFromAPI(success){
    return new Promise ((resolve, reject) => {
        if (success)
        {
            setTimeout(() => {
                const data = {status: 200, body: 'Success'}
                resolve(data);
            }, 1000);
        }
        else
        {
            reject("The fake API is not working currently");
        }
    });
}