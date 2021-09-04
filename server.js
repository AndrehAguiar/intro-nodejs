const HTTP = require('http');
const HOST = 'http://localhost';
const PORT = 3000;
const STATS = require('./osRamUsage.js');

HTTP.createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
        res.end(JSON.stringify(STATS, null, 2));
    } else {
        '<h1>Hello World</h1>'
    }
}).listen(PORT, () => console.log(`Server is running in ${ HOST }:${ PORT }`));