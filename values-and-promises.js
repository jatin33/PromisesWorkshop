function attachTitle(name) {
    return 'DR. ' + name;
}

const promise = new Promise((fulfill, reject) => {
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);