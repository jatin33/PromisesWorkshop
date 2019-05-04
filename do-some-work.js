const qhttp = require('q-io/http');

const id = '';
qhttp.read('http://localhost:7000/')
    .then((id) => {
        return qhttp.read(`http://localhost:7001/${id}`);
    })
    .then((user) => {
        console.log(JSON.parse(user));
    })
    .then(null, console.error);