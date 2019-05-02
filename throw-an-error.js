function parsePromised(json) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json));
        } catch (e) {
            reject(e);
        }
    });
}

function onReject(e) {
    console.log(e.message);
}
parsePromised(process.argv[2])
    .then(null, onReject);