const http = require("node:http");
const fs = require("node:fs");
const path = require("path");
const port = 4000;
const server = http.createServer((req, res)=> {
    console.log(`--New Method & Url-- ${req.method} ${req.url}`);


    res.writeHead(200,
        {"content-type": "text/plain"}
    );
    res.write("Chat server running");
    res.end();
})

server.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})