const http = require("node:http");
const fs = require("node:fs");
const path = require("path");
const port = 4000;
const server = http.createServer((req, res)=> {
    console.log(`--New Method & Url-- ${req.method} ${req.url}`);

    if(req.method === "GET" &&req.url === "/"){
        const filePath = path.join(__dirname, "../client/index.html");

        fs.readFile(filePath , (err, data)=> {
            if(err) {
                   res.writeHead(500, {"content-type": "text/plain"});
                   
                console.log(err)
                return res.end("Internal Server Error");
            }

            res.writeHead(200, {
                "content-type": "text/plain"
            })
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, {
            "content-type": "text/plain"
        })
        res.end("Page Not Found");
    }
})

server.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})