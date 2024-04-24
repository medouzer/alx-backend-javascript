function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('response instanceof Promise');
        }, 2000);
    });
}
