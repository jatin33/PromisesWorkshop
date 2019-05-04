function all(promise1, promise2) {
    return new Promise((fulfill, reject) => {
        var count = 0;
        var output = [];
        promise1.then((data) => {
            count++;
            output[0] = data;

            if (count >= 2) {
                fulfill(output);
            }
        });

        promise2.then((data) => {
            count++;
            output[1] = data;

            if (count >= 2) {
                fulfill(output);
            }
        });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);