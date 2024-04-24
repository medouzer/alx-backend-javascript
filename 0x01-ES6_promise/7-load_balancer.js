export default async function loadBalancer(chinaDownload, USDownload) {
    return Promise.all([chinaDownload, USDownload])
        .then((value) => {
            value;
        })
}