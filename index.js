const http = require("http");
const path = require("path");
const fs = require("fs");


const express = require('express');
const cors = require('cors');


const server = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

server.use(cors(corsOptions));

server.get('/', (req, res) => {

    fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {

            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    );
    // res.send(portfolio)

});

server.get('/api', cors(),(req, res) => {
    fs.readFile(
        path.join(__dirname, 'public', 'db.json'),'utf-8',
        (err, content) => {

            if (err) throw err;
            // Please note the content-type here is application/json
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(content);

        }

    );
});

const PORT= process.env.PORT || 5958;
server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));